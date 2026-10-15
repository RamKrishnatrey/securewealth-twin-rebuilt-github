"""Email verification service using Mailboxlayer API"""
import os
import httpx
from typing import Dict, Optional

async def verify_email(email: str, api_key: Optional[str] = None) -> Dict:
    """
    Verify email address using Mailboxlayer API

    Args:
        email: Email address to verify
        api_key: Mailboxlayer API key (optional, will use env var if not provided)

    Returns:
        Dictionary with verification results:
        {
            "email": str,
            "format_valid": bool,
            "mx_found": bool,
            "smtp_check": bool,
            "catch_all": bool,
            "role": bool,
            "disposable": bool,
            "free": bool,
            "score": float,
            "domain": str,
            "reason": str
        }
    """
    # Get API key from parameter or environment
    if api_key is None:
        api_key = os.getenv("MAILBOXLAYER_API_KEY")

    # If no API key available, return basic validation
    if not api_key:
        # Basic format validation only
        import re
        email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        format_valid = bool(re.match(email_pattern, email))

        return {
            "email": email,
            "format_valid": format_valid,
            "mx_found": format_valid,  # Assume valid if format is correct
            "smtp_check": None,  # Cannot check without API
            "catch_all": None,
            "role": None,
            "disposable": None,
            "free": None,
            "score": 0.8 if format_valid else 0.0,
            "domain": email.split('@')[1] if '@' in email and format_valid else "",
            "reason": "Mailboxlayer API not configured - basic validation only" if not api_key else "Basic validation passed"
        }

    # Call Mailboxlayer API
    url = "https://apilayer.net/mailboxlayer/check"
    params = {
        "access_key": api_key,
        "email": email,
        "smtp": 1,  # Enable SMTP check
        "format": 1   # JSON format
    }

    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(url, params=params, timeout=15.0)
            response.raise_for_status()
            data = response.json()

            # Map Mailboxlayer response to our expected format
            return {
                "email": data.get("email", ""),
                "format_valid": data.get("format_valid", False),
                "mx_found": data.get("mx_found", False),
                "smtp_check": data.get("smtp_check", False),
                "catch_all": data.get("catch_all", False),
                "role": data.get("role", False),
                "disposable": data.get("disposable", False),
                "free": data.get("free", False),
                "score": data.get("score", 0.0),
                "domain": data.get("domain", ""),
                "reason": data.get("reason", "")
            }

    except Exception as e:
        # Log error in production
        print(f"Error verifying email: {e}")
        return {
            "email": email,
            "format_valid": False,
            "mx_found": False,
            "smtp_check": False,
            "catch_all": False,
            "role": False,
            "disposable": False,
            "free": False,
            "score": 0.0,
            "domain": "",
            "reason": f"Verification failed: {str(e)}"
        }

async def is_email_deliverable(email: str) -> bool:
    """
    Quick check if email is likely deliverable

    Args:
        email: Email address to check

    Returns:
        True if email appears deliverable, False otherwise
    """
    result = await verify_email(email)
    # Consider deliverable if format is valid and has MX records
    return result.get("format_valid", False) and result.get("mx_found", False)