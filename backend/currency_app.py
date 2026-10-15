"""Standalone currency-conversion API.

Run on its own:      uvicorn currency_app:app --reload --port 8001
Or add to your app:  from currency_app import currency_router ; app.include_router(currency_router)
"""
import re
from datetime import datetime, timezone

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:  # python-dotenv is optional
    pass

from fastapi import APIRouter, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from currency_service import convert_amount, get_exchange_rate

currency_router = APIRouter(prefix="/api/v1", tags=["currency"])
_CODE = re.compile(r"^[A-Za-z]{3}$")


def _check_code(code: str) -> str:
    if not _CODE.match(code):
        raise HTTPException(status_code=400, detail=f"'{code}' is not a 3-letter currency code (e.g. USD, INR).")
    return code.upper()


@currency_router.get("/exchange-rate/{base_currency}/{target_currency}")
async def exchange_rate(base_currency: str, target_currency: str):
    base, target = _check_code(base_currency), _check_code(target_currency)
    rate = await get_exchange_rate(base, target)
    if rate is None:
        raise HTTPException(status_code=503, detail=f"Unable to fetch exchange rate for {base} to {target}")
    return {"base_currency": base, "target_currency": target, "rate": rate,
            "timestamp": datetime.now(timezone.utc).isoformat()}


@currency_router.get("/convert/{amount}/{base_currency}/{target_currency}")
async def convert(amount: float, base_currency: str, target_currency: str):
    base, target = _check_code(base_currency), _check_code(target_currency)
    if amount <= 0:
        raise HTTPException(status_code=400, detail="Amount must be positive")
    converted = await convert_amount(amount, base, target)
    if converted is None:
        raise HTTPException(status_code=503, detail=f"Unable to convert {amount} {base} to {target}")
    return {"original_amount": amount, "original_currency": base, "converted_amount": converted,
            "target_currency": target, "timestamp": datetime.now(timezone.utc).isoformat()}


# Standalone app (ignored if you only import currency_router into another app)
app = FastAPI(title="Currency Converter API", version="1.0.0")
app.add_middleware(CORSMiddleware, allow_origins=["*"],  # restrict before deploying
                   allow_credentials=False, allow_methods=["*"], allow_headers=["*"])
app.include_router(currency_router)


@app.get("/health")
def health():
    return {"status": "ok"}
