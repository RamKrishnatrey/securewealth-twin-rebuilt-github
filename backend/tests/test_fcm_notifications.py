import sys
import tempfile
import unittest
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import patch

from fastapi import HTTPException
from fastapi.testclient import TestClient

BACKEND_DIR = Path(__file__).resolve().parents[1]
if str(BACKEND_DIR) not in sys.path:
    sys.path.insert(0, str(BACKEND_DIR))

import fcm_notifications as fcm
import main


class FcmTokenStoreTests(unittest.TestCase):
    def setUp(self):
        self.temporary_directory = tempfile.TemporaryDirectory()
        fcm.init_notification_storage(Path(self.temporary_directory.name) / "test.db")
        self.payload = fcm.DeviceTokenPayload(token="t" * 128)

    def tearDown(self):
        self.temporary_directory.cleanup()

    def test_token_is_bound_to_verified_user_and_cannot_move_to_another_user(self):
        self.assertTrue(fcm._register_token("user-a", self.payload))
        self.assertFalse(fcm._register_token("user-a", self.payload))

        with self.assertRaises(HTTPException) as error:
            fcm._register_token("user-b", self.payload)
        self.assertEqual(error.exception.status_code, 409)

    def test_only_the_owning_user_can_remove_a_token(self):
        fcm._register_token("user-a", self.payload)
        self.assertFalse(fcm._remove_token("user-b", self.payload.token))
        self.assertTrue(fcm._remove_token("user-a", self.payload.token))


class FcmRouterTests(unittest.TestCase):
    def setUp(self):
        self.client = TestClient(main.app)
        self.token = "r" * 128

    def tearDown(self):
        main.app.dependency_overrides.clear()

    def test_registration_endpoint_rejects_missing_authorization(self):
        response = self.client.post(
            "/notifications/devices",
            json={"token": self.token, "platform": "web"},
        )
        self.assertEqual(response.status_code, 401)

    def test_registration_uses_verified_dependency_not_a_client_uid(self):
        main.app.dependency_overrides[fcm.require_firebase_user] = lambda: "user-a"
        response = self.client.post(
            "/notifications/devices",
            json={"token": self.token, "platform": "web", "uid": "user-b"},
        )
        self.assertEqual(response.status_code, 201)

        main.app.dependency_overrides[fcm.require_firebase_user] = lambda: "user-b"
        conflict = self.client.post(
            "/notifications/devices",
            json={"token": self.token, "platform": "web"},
        )
        self.assertEqual(conflict.status_code, 409)


class FcmDeliveryTests(unittest.TestCase):
    def test_sends_only_generic_payload_and_prunes_unregistered_tokens(self):
        captured = {}

        class FakeMessaging:
            class UnregisteredError(Exception):
                pass

            class Notification:
                def __init__(self, **kwargs):
                    self.__dict__.update(kwargs)

            class WebpushNotification(Notification):
                pass

            class WebpushFCMOptions:
                def __init__(self, **kwargs):
                    self.__dict__.update(kwargs)

            class WebpushConfig:
                def __init__(self, **kwargs):
                    self.__dict__.update(kwargs)

            class MulticastMessage:
                def __init__(self, **kwargs):
                    self.__dict__.update(kwargs)

            @staticmethod
            def send_each_for_multicast(message, app):
                captured["message"] = message
                return SimpleNamespace(
                    success_count=1,
                    responses=[
                        SimpleNamespace(success=True, exception=None),
                        SimpleNamespace(
                            success=False,
                            exception=FakeMessaging.UnregisteredError(),
                        ),
                    ],
                )

        with (
            patch.object(fcm, "firebase_messaging", FakeMessaging),
            patch.object(fcm, "_firebase_app", return_value=object()),
            patch.object(fcm, "_tokens_for_user", return_value=["token-a", "token-b"]),
            patch.object(fcm, "_remove_unregistered_tokens") as remove_stale,
        ):
            result = fcm.send_suspicious_fraud_alert("user-a")

        self.assertEqual(result, {"attempted": 2, "sent": 1, "unavailable": False})
        self.assertEqual(captured["message"].data, {"event": "fraud_warning", "screen": "notifications"})
        self.assertEqual(captured["message"].notification.title, "Security alert")
        remove_stale.assert_called_once_with("user-a", ["token-b"])


class FraudHookTests(unittest.TestCase):
    def test_existing_block_decision_triggers_generic_notification_service(self):
        client = TestClient(main.app)
        suspicious_payment = {
            "amount": 50000,
            "payee_id": "simulated-payee",
            "usual_amount": 1000,
            "is_new_payee": True,
            "suspicious_qr_mismatch": True,
            "remote_access_suspected": True,
            "context": "payment",
        }

        with (
            patch.object(main, "optional_firebase_user", return_value="user-a"),
            patch.object(main, "send_suspicious_fraud_alert") as send_alert,
        ):
            response = client.post(
                "/fraud/check",
                headers={"Authorization": "Bearer test-token"},
                json=suspicious_payment,
            )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["decision"], "BLOCK")
        send_alert.assert_called_once_with("user-a")
