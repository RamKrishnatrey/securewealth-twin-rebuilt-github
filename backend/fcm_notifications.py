"""Authenticated, web-only Firebase Cloud Messaging support.

This module is deliberately separate from the fraud rules in main.py. It verifies
Firebase ID tokens server-side, owns device-token persistence, and sends only
generic security notifications.
"""

from __future__ import annotations

from datetime import datetime, timezone
import logging
import os
from pathlib import Path
import sqlite3
from typing import Annotated, Literal

from fastapi import APIRouter, Depends, Header, HTTPException, status
from pydantic import BaseModel, Field

try:
    import firebase_admin
    from firebase_admin import auth as firebase_auth
    from firebase_admin import messaging as firebase_messaging
except ImportError:  # Keep existing prototype routes usable until dependencies are installed.
    firebase_admin = None
    firebase_auth = None
    firebase_messaging = None


logger = logging.getLogger(__name__)
notification_router = APIRouter(prefix="/notifications", tags=["notifications"])
_database_path: Path | None = None


class FirebaseAdminUnavailable(Exception):
    """Firebase Admin credentials or the Admin SDK are unavailable on the server."""


class InvalidFirebaseCredentials(Exception):
    """The caller did not provide a valid Firebase ID token."""


class DeviceTokenPayload(BaseModel):
    # A token is intentionally the only client-provided identifier. The server derives
    # the user ID from the verified bearer token rather than trusting a client UID.
    token: str = Field(min_length=20, max_length=4096)
    platform: Literal["web"] = "web"


def _now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def init_notification_storage(database_path: Path) -> None:
    """Create the small, user-bound device-token store alongside the app database."""
    global _database_path
    _database_path = database_path
    with _connect_db() as db:
        db.executescript(
            """
            CREATE TABLE IF NOT EXISTS fcm_device_tokens (
                token TEXT PRIMARY KEY,
                user_id TEXT NOT NULL,
                platform TEXT NOT NULL CHECK(platform = 'web'),
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL
            );
            CREATE INDEX IF NOT EXISTS idx_fcm_device_tokens_user_id
                ON fcm_device_tokens(user_id);
            """
        )


def _connect_db() -> sqlite3.Connection:
    if _database_path is None:
        raise RuntimeError("Notification storage was not initialized.")
    connection = sqlite3.connect(_database_path)
    connection.row_factory = sqlite3.Row
    return connection


def _firebase_app():
    if firebase_admin is None:
        raise FirebaseAdminUnavailable("Firebase Admin SDK is not installed.")

    try:
        return firebase_admin.get_app()
    except ValueError:
        options = {}
        project_id = os.getenv("FIREBASE_PROJECT_ID")
        if project_id:
            options["projectId"] = project_id
        try:
            # Application Default Credentials read GOOGLE_APPLICATION_CREDENTIALS on
            # local servers and use the workload identity in managed environments.
            return firebase_admin.initialize_app(options=options or None)
        except Exception as error:  # Do not expose credential diagnostics to callers.
            logger.warning("Firebase Admin initialization failed: %s", type(error).__name__)
            raise FirebaseAdminUnavailable("Firebase Admin is not configured.") from error


def _verify_firebase_id_token(authorization: str) -> dict:
    if not authorization.startswith("Bearer "):
        raise InvalidFirebaseCredentials("Bearer authorization is required.")

    id_token = authorization.removeprefix("Bearer ").strip()
    if not id_token:
        raise InvalidFirebaseCredentials("Bearer authorization is required.")

    if firebase_auth is None:
        raise FirebaseAdminUnavailable("Firebase Admin SDK is not installed.")

    try:
        decoded = firebase_auth.verify_id_token(
            id_token,
            app=_firebase_app(),
            check_revoked=True,
        )
    except FirebaseAdminUnavailable:
        raise
    except Exception as error:
        logger.info("Firebase ID-token verification failed: %s", type(error).__name__)
        raise InvalidFirebaseCredentials("Invalid Firebase ID token.") from error

    return decoded


def require_firebase_user(
    authorization: Annotated[str | None, Header()] = None,
) -> str:
    if not authorization:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Firebase authentication is required.",
        )

    try:
        decoded_token = _verify_firebase_id_token(authorization)
        uid = decoded_token.get("uid")
        if not isinstance(uid, str) or not uid:
            raise InvalidFirebaseCredentials("Firebase ID token has no user identity.")
        return uid
    except FirebaseAdminUnavailable as error:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Notification authentication is temporarily unavailable.",
        ) from error
    except InvalidFirebaseCredentials as error:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Firebase authentication.",
        ) from error


def optional_firebase_user(authorization: str | None) -> str | None:
    """Returns a verified caller for an existing optional-auth endpoint.

    Fraud checks remain usable in prototype mode without authentication; an absent or
    invalid bearer token simply cannot cause an alert to be sent.
    """
    if not authorization:
        return None
    try:
        decoded_token = _verify_firebase_id_token(authorization)
        uid = decoded_token.get("uid")
        if not isinstance(uid, str) or not uid:
            raise InvalidFirebaseCredentials("Firebase ID token has no user identity.")
        return uid
    except (FirebaseAdminUnavailable, InvalidFirebaseCredentials):
        return None


def _register_token(user_id: str, payload: DeviceTokenPayload) -> bool:
    timestamp = _now_iso()
    with _connect_db() as db:
        existing = db.execute(
            "SELECT user_id FROM fcm_device_tokens WHERE token = ?", (payload.token,)
        ).fetchone()
        if existing and existing["user_id"] != user_id:
            # Never let one signed-in account claim a browser registration owned by
            # another UID. The prior owner must deregister it first.
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="This browser notification registration belongs to another account.",
            )

        if existing:
            db.execute(
                "UPDATE fcm_device_tokens SET updated_at = ? WHERE token = ? AND user_id = ?",
                (timestamp, payload.token, user_id),
            )
            return False

        db.execute(
            """
            INSERT INTO fcm_device_tokens (token, user_id, platform, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?)
            """,
            (payload.token, user_id, payload.platform, timestamp, timestamp),
        )
        return True


def _remove_token(user_id: str, registration_token: str) -> bool:
    with _connect_db() as db:
        cursor = db.execute(
            "DELETE FROM fcm_device_tokens WHERE token = ? AND user_id = ?",
            (registration_token, user_id),
        )
        return cursor.rowcount > 0


@notification_router.post("/devices", status_code=status.HTTP_201_CREATED)
def register_notification_device(
    payload: DeviceTokenPayload,
    user_id: Annotated[str, Depends(require_firebase_user)],
):
    created = _register_token(user_id, payload)
    return {"registered": True, "created": created, "platform": "web"}


@notification_router.delete("/devices")
def unregister_notification_device(
    payload: DeviceTokenPayload,
    user_id: Annotated[str, Depends(require_firebase_user)],
):
    # Do not place an FCM token in a URL: URLs are commonly retained in proxy and
    # access logs. A deletion is idempotent to avoid revealing token ownership.
    _remove_token(user_id, payload.token)
    return {"removed": True}


def _tokens_for_user(user_id: str) -> list[str]:
    with _connect_db() as db:
        rows = db.execute(
            "SELECT token FROM fcm_device_tokens WHERE user_id = ? AND platform = 'web'",
            (user_id,),
        ).fetchall()
    return [row["token"] for row in rows]


def _remove_unregistered_tokens(user_id: str, tokens: list[str]) -> None:
    if not tokens:
        return
    placeholders = ", ".join("?" for _ in tokens)
    with _connect_db() as db:
        db.execute(
            f"DELETE FROM fcm_device_tokens WHERE user_id = ? AND token IN ({placeholders})",
            (user_id, *tokens),
        )


def send_suspicious_fraud_alert(user_id: str) -> dict[str, int | bool]:
    """Send a generic alert after an existing fraud decision reaches BLOCK.

    Push payloads intentionally contain no amount, payee, score, account number,
    OTP, token, or other security detail. The authenticated application is the only
    place where details can be viewed.
    """
    tokens = _tokens_for_user(user_id)
    if not tokens:
        return {"attempted": 0, "sent": 0, "unavailable": False}

    if firebase_messaging is None:
        logger.warning("FCM alert skipped because Firebase Admin SDK is not installed.")
        return {"attempted": len(tokens), "sent": 0, "unavailable": True}

    try:
        message = firebase_messaging.MulticastMessage(
            tokens=tokens,
            notification=firebase_messaging.Notification(
                title="Security alert",
                body="A transaction needs your review in SecureWealth Twin.",
            ),
            data={"event": "fraud_warning", "screen": "notifications"},
            webpush=firebase_messaging.WebpushConfig(
                notification=firebase_messaging.WebpushNotification(
                    title="Security alert",
                    body="A transaction needs your review in SecureWealth Twin.",
                    icon="/favicon.ico",
                ),
                fcm_options=firebase_messaging.WebpushFCMOptions(link="/notifications"),
            ),
        )
        response = firebase_messaging.send_each_for_multicast(message, app=_firebase_app())
    except FirebaseAdminUnavailable:
        return {"attempted": len(tokens), "sent": 0, "unavailable": True}
    except Exception as error:
        logger.warning("FCM security alert send failed: %s", type(error).__name__)
        return {"attempted": len(tokens), "sent": 0, "unavailable": True}

    stale_tokens = []
    for index, result in enumerate(response.responses):
        if not result.success and isinstance(
            result.exception, firebase_messaging.UnregisteredError
        ):
            stale_tokens.append(tokens[index])
    _remove_unregistered_tokens(user_id, stale_tokens)

    return {
        "attempted": len(tokens),
        "sent": response.success_count,
        "unavailable": False,
    }
