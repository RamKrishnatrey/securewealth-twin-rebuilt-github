from datetime import datetime, timezone
from pathlib import Path
from typing import Literal, Optional
import json
import sqlite3
import uuid

from fastapi import FastAPI, Header, HTTPException, Query, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

try:  # Supports both `uvicorn main:app` from BACKEND and `uvicorn BACKEND.main:app`.
    from .fcm_notifications import (
        init_notification_storage,
        notification_router,
        optional_firebase_user,
        send_suspicious_fraud_alert,
        _verify_firebase_id_token,
    )
except ImportError:  # pragma: no cover - exercised by direct-module startup.
    from fcm_notifications import (
        init_notification_storage,
        notification_router,
        optional_firebase_user,
        send_suspicious_fraud_alert,
        _verify_firebase_id_token,
    )

# Import new service modules
try:
    from .currency_service import get_exchange_rate, convert_amount
    from .email_verification_service import verify_email, is_email_deliverable
    from .phone_verification_service import verify_phone_number, is_valid_phone_number
except ImportError:  # pragma: no cover - exercised by direct-module startup.
    from currency_service import get_exchange_rate, convert_amount
    from email_verification_service import verify_email, is_email_deliverable
    from phone_verification_service import verify_phone_number, is_valid_phone_number
    from currency_app import currency_router

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "securewealth.db"

app = FastAPI(
    title="SecureWealth Twin API",
    description="Local hackathon prototype. Financial records are user-entered; no bank is connected.",
    version="1.1.0",
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Local development only; restrict before deployment.
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def connect_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def init_db():
    with connect_db() as db:
        db.executescript("""
        CREATE TABLE IF NOT EXISTS transactions (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            category TEXT NOT NULL DEFAULT 'Other',
            amount REAL NOT NULL CHECK(amount > 0),
            type TEXT NOT NULL CHECK(type IN ('income','expense')),
            status TEXT NOT NULL DEFAULT 'Completed' CHECK(status IN ('Completed','Pending')),
            note TEXT NOT NULL DEFAULT '',
            created_at TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS goals (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            subtitle TEXT NOT NULL DEFAULT '',
            target REAL NOT NULL CHECK(target > 0),
            saved REAL NOT NULL DEFAULT 0 CHECK(saved >= 0),
            monthly_contribution REAL NOT NULL DEFAULT 0 CHECK(monthly_contribution >= 0),
            deadline TEXT NOT NULL DEFAULT '',
            created_at TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS fraud_assessments (
            id TEXT PRIMARY KEY,
            amount REAL NOT NULL,
            payee_id TEXT NOT NULL,
            decision TEXT NOT NULL,
            risk_level TEXT NOT NULL,
            risk_score INTEGER NOT NULL,
            request_json TEXT NOT NULL,
            response_json TEXT NOT NULL,
            created_at TEXT NOT NULL
        );
        """)


init_db()
init_notification_storage(DB_PATH)
app.include_router(notification_router)


# Currency Exchange Rates Endpoints
@app.get("/api/v1/exchange-rate/{base_currency}/{target_currency}")
async def exchange_rate_endpoint(base_currency: str, target_currency: str):
    """Get exchange rate from base_currency to target_currency"""
    rate = await get_exchange_rate(base_currency, target_currency)
    if rate is None:
        raise HTTPException(
            status_code=503,
            detail=f"Unable to fetch exchange rate for {base_currency} to {target_currency}"
        )
    return {
        "base_currency": base_currency.upper(),
        "target_currency": target_currency.upper(),
        "rate": rate,
        "timestamp": datetime.now(timezone.utc).isoformat()
    }


@app.get("/api/v1/convert/{amount}/{base_currency}/{target_currency}")
async def convert_endpoint(amount: float, base_currency: str, target_currency: str):
    """Convert amount from base_currency to target_currency"""
    if amount <= 0:
        raise HTTPException(status_code=400, detail="Amount must be positive")

    converted = await convert_amount(amount, base_currency, target_currency)
    if converted is None:
        raise HTTPException(
            status_code=503,
            detail=f"Unable to convert {amount} {base_currency} to {target_currency}"
        )

    return {
        "original_amount": amount,
        "original_currency": base_currency.upper(),
        "converted_amount": converted,
        "target_currency": target_currency.upper(),
        "timestamp": datetime.now(timezone.utc).isoformat()
    }


# Email Verification Endpoints
@app.post("/api/v1/verify-email")
async def verify_email_endpoint(email: dict):
    """Verify email address using Mailboxlayer API"""
    email_address = email.get("email")
    if not email_address:
        raise HTTPException(status_code=400, detail="Email address is required")

    result = await verify_email(email_address)
    return {
        "email": result["email"],
        "deliverable": result["format_valid"] and result["mx_found"],
        "verification_details": result
    }


# Phone Verification Endpoints
@app.post("/api/v1/verify-phone")
async def verify_phone_endpoint(phone_data: dict):
    """Verify phone number using Numverify API"""
    phone_number = phone_data.get("phone_number")
    country_code = phone_data.get("country_code")

    if not phone_number:
        raise HTTPException(status_code=400, detail="Phone number is required")

    result = await verify_phone_number(phone_number, country_code)
    return {
        "phone_number": result["number"],
        "valid": result["valid"],
        "verification_details": result
    }


class TransactionCreate(BaseModel):
    title: str = Field(min_length=1, max_length=120)
    category: str = Field(default="Other", max_length=80)
    amount: float = Field(gt=0, le=100_000_000)
    type: Literal["income", "expense"]
    status: Literal["Completed", "Pending"] = "Completed"
    note: str = Field(default="", max_length=500)
    created_at: Optional[str] = None


class GoalCreate(BaseModel):
    title: str = Field(min_length=1, max_length=120)
    subtitle: str = Field(default="", max_length=250)
    target: float = Field(gt=0, le=1_000_000_000)
    saved: float = Field(default=0, ge=0, le=1_000_000_000)
    monthly_contribution: float = Field(default=0, ge=0, le=1_000_000_000)
    deadline: str = Field(default="", max_length=50)


class GoalUpdate(BaseModel):
    title: Optional[str] = Field(default=None, min_length=1, max_length=120)
    subtitle: Optional[str] = Field(default=None, max_length=250)
    target: Optional[float] = Field(default=None, gt=0, le=1_000_000_000)
    saved: Optional[float] = Field(default=None, ge=0, le=1_000_000_000)
    monthly_contribution: Optional[float] = Field(default=None, ge=0, le=1_000_000_000)
    deadline: Optional[str] = Field(default=None, max_length=50)


class PaymentRequest(BaseModel):
    amount: float = Field(gt=0, le=10_000_000)
    payee_id: str = Field(min_length=1, max_length=100)
    is_new_payee: bool = False
    unusual_time: bool = False
    collect_request: bool = False
    refund_wording: bool = False
    suspicious_qr_mismatch: bool = False
    remote_access_suspected: bool = False
    mule_account_signal: bool = False
    usual_amount: float = Field(default=1000, gt=0)
    context: Literal["payment", "receive", "refund"] = "payment"
from pydantic import BaseModel, Field
from typing import Optional, List

class AIChatRequest(BaseModel):
    message: str
    conversationId: Optional[str] = None

class AIChatMessage(BaseModel):
    id: Optional[str] = None
    role: Optional[str] = None
    text: str
    createdAt: Optional[str] = None

class AIInsight(BaseModel):
    title: str
    value: str
    subtitle: str
    type: str
    confidence: Optional[int] = None

class AIChatResponse(BaseModel):
    conversationId: Optional[str] = None
    message: AIChatMessage
    insight: Optional[AIInsight] = None

class AIHistoryItem(BaseModel):
    id: str
    title: str
    preview: str
    updatedAt: str

class AIChatHistoryResponse(BaseModel):
    conversations: List[AIHistoryItem]

def row_dict(row):
    return dict(row) if row is not None else None


@app.get("/health")
def health():
    return {"status": "ok", "service": "SecureWealth Twin API", "database": "sqlite", "timestamp": now_iso()}


@app.get("/profile")
async def profile_endpoint(authorization: str | None = Header(default=None)):
    """Get the user's profile information from Firebase ID token."""
    if not authorization:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Firebase authentication is required.",
        )
    try:
        decoded_token = _verify_firebase_id_token(authorization)
        email = decoded_token.get("email")
        phone_number = decoded_token.get("phone_number")
        # Firebase returns phone_number in E.164 format if available
        return {
            "email": email,
            "phone_number": phone_number,
            "uid": decoded_token.get("uid"),
        }
    except FirebaseAdminUnavailable as error:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Profile authentication is temporarily unavailable.",
        ) from error
    except InvalidFirebaseCredentials as error:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Firebase authentication.",
        ) from error


@app.get("/transactions")
def list_transactions(limit: int = Query(default=100, ge=1, le=500)):
    with connect_db() as db:
        rows = db.execute("SELECT * FROM transactions ORDER BY created_at DESC LIMIT ?", (limit,)).fetchall()
    return {"transactions": [row_dict(r) for r in rows], "count": len(rows), "data_source": "sqlite"}


@app.post("/transactions", status_code=201)
def create_transaction(payload: TransactionCreate):
    item_id = str(uuid.uuid4())
    created = payload.created_at or now_iso()
    with connect_db() as db:
        db.execute("INSERT INTO transactions (id,title,category,amount,type,status,note,created_at) VALUES (?,?,?,?,?,?,?,?)",
                   (item_id, payload.title.strip(), payload.category.strip() or "Other", payload.amount,
                    payload.type, payload.status, payload.note, created))
        row = db.execute("SELECT * FROM transactions WHERE id=?", (item_id,)).fetchone()
    return {"transaction": row_dict(row), "data_source": "sqlite"}


@app.get("/goals")
def list_goals():
    with connect_db() as db:
        rows = db.execute("SELECT * FROM goals ORDER BY created_at DESC").fetchall()
    return {"goals": [row_dict(r) for r in rows], "count": len(rows), "data_source": "sqlite"}


@app.post("/goals", status_code=201)
def create_goal(payload: GoalCreate):
    if payload.saved > payload.target:
        raise HTTPException(status_code=422, detail="Saved amount cannot exceed the target amount.")
    item_id = str(uuid.uuid4())
    with connect_db() as db:
        db.execute("INSERT INTO goals (id,title,subtitle,target,saved,monthly_contribution,deadline,created_at) VALUES (?,?,?,?,?,?,?,?)",
                   (item_id, payload.title.strip(), payload.subtitle, payload.target, payload.saved,
                    payload.monthly_contribution, payload.deadline, now_iso()))
        row = db.execute("SELECT * FROM goals WHERE id=?", (item_id,)).fetchone()
    return {"goal": row_dict(row), "data_source": "sqlite"}


@app.put("/goals/{goal_id}")
def update_goal(goal_id: str, payload: GoalUpdate):
    updates = payload.model_dump(exclude_unset=True)
    if not updates:
        raise HTTPException(status_code=400, detail="Provide at least one field to update.")
    with connect_db() as db:
        current = db.execute("SELECT * FROM goals WHERE id=?", (goal_id,)).fetchone()
        if current is None:
            raise HTTPException(status_code=404, detail="Goal not found.")
        final_target = updates.get("target", current["target"])
        final_saved = updates.get("saved", current["saved"])
        if final_saved > final_target:
            raise HTTPException(status_code=422, detail="Saved amount cannot exceed the target amount.")
        columns = ", ".join(f"{key}=?" for key in updates)
        db.execute(f"UPDATE goals SET {columns} WHERE id=?", (*updates.values(), goal_id))
        row = db.execute("SELECT * FROM goals WHERE id=?", (goal_id,)).fetchone()
    return {"goal": row_dict(row), "data_source": "sqlite"}


@app.delete("/goals/{goal_id}")
def delete_goal(goal_id: str):
    with connect_db() as db:
        cursor = db.execute("DELETE FROM goals WHERE id=?", (goal_id,))
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="Goal not found.")
    return {"deleted": True, "id": goal_id}


@app.get("/dashboard")
def dashboard():
    with connect_db() as db:
        totals = db.execute("""SELECT
            COALESCE(SUM(CASE WHEN type='income' AND title!='string' THEN amount ELSE 0 END),0) AS total_income,
            COALESCE(SUM(CASE WHEN type='expense' THEN amount ELSE 0 END),0) AS total_expenses,
            COUNT(*) AS transaction_count
            FROM transactions""").fetchone()
        goal = db.execute("SELECT COALESCE(SUM(target),0) AS target, COALESCE(SUM(saved),0) AS saved, COUNT(*) AS count FROM goals").fetchone()
        recent = db.execute("SELECT * FROM transactions ORDER BY created_at DESC LIMIT 5").fetchall()
    income = float(totals["total_income"])
    expenses = float(totals["total_expenses"])
    return {
        "net_worth": round(income - expenses, 2),
        "total_income": round(income, 2),
        "total_expenses": round(expenses, 2),
        "transaction_count": totals["transaction_count"],
        "goals": {"count": goal["count"], "target_total": goal["target"], "saved_total": goal["saved"]},
        "recent_transactions": [row_dict(r) for r in recent],
        "data_source": "sqlite",
        "notice": "Calculated from records entered in this prototype; no bank accounts are connected. Empty records produce zero totals."
    }


@app.post("/fraud/check")
def check_fraud(
    payment: PaymentRequest,
    authorization: Optional[str] = Header(default=None),
):
    score = 0
    reasons = []
    categories = []
    if payment.amount >= max(5000, payment.usual_amount * 3):
        score += 20
        reasons.append("Amount is unusually high compared with typical spending.")
    if payment.is_new_payee:
        score += 10
        reasons.append("This is a first-time payee.")
    if payment.unusual_time:
        score += 10
        reasons.append("The transaction occurred at an unusual time.")
    if payment.collect_request:
        score += 25
        reasons.append("A collect request needs scrutiny: approving it may authorize a payment.")
        categories.append("collect-request scam")
    if payment.refund_wording and payment.context == "payment":
        score += 25
        reasons.append("Refund-related wording accompanies a payment; verify the transaction direction.")
        categories.append("fake refund scam")
    if payment.suspicious_qr_mismatch:
        score += 35
        reasons.append("The QR payment details do not match the intended recipient.")
        categories.append("QR-code substitution")
    if payment.remote_access_suspected:
        score += 35
        reasons.append("Possible remote-access activity could expose payment credentials.")
        categories.append("remote-access scam")
    if payment.mule_account_signal:
        score += 35
        reasons.append("The recipient has a suspicious account-risk signal.")
        categories.append("possible mule account")
    score = min(score, 100)
    if score >= 60:
        decision, risk_level = "BLOCK", "HIGH"
    elif score >= 30:
        decision, risk_level = "WARN", "MEDIUM"
    else:
        decision, risk_level = "ALLOW", "LOW"
    if not reasons:
        reasons.append("No configured risk indicators were detected.")
    result = {
        "risk_score": score, "risk_level": risk_level, "decision": decision,
        "reasons": reasons, "fraud_categories": categories,
        "message": f"Review this transaction before proceeding. Risk score: {score}/100." if decision != "ALLOW" else "No configured high-risk indicators detected. Stay alert.",
        "prototype": True, "model_type": "explainable_rule_based_baseline", "evaluated_at": now_iso(),
    }
    with connect_db() as db:
        db.execute("INSERT INTO fraud_assessments (id,amount,payee_id,decision,risk_level,risk_score,request_json,response_json,created_at) VALUES (?,?,?,?,?,?,?,?,?)",
                   (str(uuid.uuid4()), payment.amount, payment.payee_id, decision, risk_level, score,
                    payment.model_dump_json(), json.dumps(result), result["evaluated_at"]))
    authenticated_user = optional_firebase_user(authorization)
    if decision == "BLOCK" and authenticated_user:
        # This follows the existing rule-engine decision and does not alter scoring.
        # Delivery errors are contained in the notification service so fraud results
        # remain available even if FCM is temporarily unavailable.
        send_suspicious_fraud_alert(authenticated_user)
    return result


@app.get("/fraud/history")
def fraud_history(limit: int = Query(default=50, ge=1, le=200)):
    with connect_db() as db:
        rows = db.execute("SELECT id,amount,payee_id,decision,risk_level,risk_score,request_json,response_json,created_at FROM fraud_assessments ORDER BY created_at DESC LIMIT ?", (limit,)).fetchall()
    result = []
    for row in rows:
        item = row_dict(row)
        item["request"] = json.loads(item.pop("request_json"))
        item["response"] = json.loads(item.pop("response_json"))
        result.append(item)
    return {"assessments": result, "count": len(result), "data_source": "sqlite"}


# AI Chat Endpoints
@app.post("/ai/chat")
async def ai_chat_endpoint(request: AIChatRequest):
    """AI chat endpoint that provides financial insights based on user message"""
    # Simple rule-based responses for demo purposes
    message = request.message.lower()

    # Default response
    response_text = "I'm here to help you with your financial questions. How can I assist you today?"
    insight = None

    # Check for keywords to provide specific insights
    if any(word in message for word in ["spend", "spending", "expense", "expenses"]):
        response_text = "Based on your recent transactions, your spending has been relatively stable this month. You've spent approximately ₹2,400 on groceries and ₹1,800 on dining out."
        insight = {
            "title": "Monthly Spending Analysis",
            "value": "₹4,200",
            "subtitle": "Total expenses this month",
            "type": "expense",
            "confidence": 85
        }
    elif any(word in message for word in ["income", "earn", "salary"]):
        response_text = "Your income shows a steady pattern with regular monthly deposits. Your average monthly income is approximately ₹45,000."
        insight = {
            "title": "Income Stability",
            "value": "₹45,000/month",
            "subtitle": "Average monthly income",
            "type": "income",
            "confidence": 90
        }
    elif any(word in message for word in ["invest", "investment", "save", "savings"]):
        response_text = "Considering your current expenses and income, you have the capacity to save approximately ₹15,000 per month, which could be allocated to investments."
        insight = {
            "title": "Investment Capacity",
            "value": "₹15,000",
            "subtitle": "Available for monthly investment",
            "type": "investment",
            "confidence": 80
        }
    elif any(word in message for word in ["fraud", "security", "security", "protect"]):
        response_text = "Your Twin Shield security score is strong at 85/100. No suspicious activity has been detected in your recent transactions."
        insight = {
            "title": "Security Score",
            "value": "85/100",
            "subtitle": "Twin Shield protection level",
            "type": "security",
            "confidence": 95
        }
    elif any(word in message for word in ["goal", "goals", "target"]):
        response_text = "You're making good progress toward your financial goals. Your emergency fund goal is 70% complete, and your vacation savings goal is 45% complete."
        insight = {
            "title": "Goal Progress",
            "value": "70%",
            "subtitle": "Emergency fund completion",
            "type": "goal",
            "confidence": 88
        }

    # Create response
    ai_message = AIChatMessage(
        id=str(uuid.uuid4()),
        role="assistant",
        text=response_text,
        createdAt=now_iso()
    )

    ai_insight = None
    if insight:
        ai_insight = AIInsight(
            title=insight["title"],
            value=insight["value"],
            subtitle=insight["subtitle"],
            type=insight["type"],
            confidence=insight["confidence"]
        )

    return AIChatResponse(
        conversationId=request.conversationId or str(uuid.uuid4()),
        message=ai_message,
        insight=ai_insight
    )


@app.get("/ai/chat/history")
def ai_chat_history_endpoint():
    """Get AI chat conversation history"""
    # Return dummy history for demo
    history_items = [
        AIHistoryItem(
            id="conv1",
            title="Spending Analysis Discussion",
            preview="We discussed your monthly spending patterns and identified opportunities for optimization.",
            updatedAt=now_iso()
        ),
        AIHistoryItem(
            id="conv2",
            title="Investment Planning Session",
            preview="We explored investment options based on your risk profile and financial goals.",
            updatedAt=now_iso()
        ),
        AIHistoryItem(
            id="conv3",
            title="Security Review Conversation",
            preview="We reviewed your Twin Shield security settings and recent transaction safety.",
            updatedAt=now_iso()
        )
    ]

    return AIChatHistoryResponse(conversations=history_items)
