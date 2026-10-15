"""Phone number verification service using Numverify API"""
import os
import httpx
from typing import Dict, Optional

async def verify_phone_number(phone_number: str, country_code: Optional[str] = None, api_key: Optional[str] = None) -> Dict:
    """
    Verify phone number using Numverify API

    Args:
        phone_number: Phone number to verify (with or without country code)
        country_code: ISO country code (e.g., "US", "IN") - optional
        api_key: Numverify API key (optional, will use env var if not provided)

    Returns:
        Dictionary with verification results:
        {
            "valid": bool,
            "number": str,
            "local_format": str,
            "international_format": str,
            "country_prefix": str,
            "country_code": str,
            "country_name": str,
            "location": str,
            "carrier": str,
            "line_type": str,
            "error": Optional[str]
        }
    """
    # Get API key from parameter or environment
    if api_key is None:
        api_key = os.getenv("NUMVERIFY_API_KEY")

    # If no API key available, return basic validation
    if not api_key:
        # Basic validation: check if it looks like a phone number
        import re
        # Remove all non-digits
        digits_only = re.sub(r'\D', '', phone_number)
        # Basic check: 7-15 digits is reasonable for a phone number
        is_valid_length = 7 <= len(digits_only) <= 15

        return {
            "valid": is_valid_length,
            "number": phone_number,
            "local_format": phone_number,
            "international_format": f"+{digits_only}" if is_valid_length else "",
            "country_prefix": "",
            "country_code": country_code or "",
            "country_name": "Unknown",
            "location": "Unknown",
            "carrier": "Unknown",
            "line_type": "Unknown",
            "error": "Numverify API not configured - basic validation only"
        }

    # Prepare request parameters
    params = {
        "access_key": api_key,
        "number": phone_number
    }
    if country_code:
        params["country_code"] = country_code

    # Call Numverify API
    url = "http://apilayer.net/numverify/validate"

    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(url, params=params, timeout=15.0)
            response.raise_for_status()
            data = response.json()

            # Map Numverify response to our expected format
            return {
                "valid": data.get("valid", False),
                "number": data.get("number", ""),
                "local_format": data.get("local_format", ""),
                "international_format": data.get("international_format", ""),
                "country_prefix": data.get("country_prefix", ""),
                "country_code": data.get("country_code", ""),
                "country_name": data.get("country_name", ""),
                "location": data.get("location", ""),
                "carrier": data.get("carrier", ""),
                "line_type": data.get("line_type", ""),
                "error": data.get("error") if not data.get("valid", False) else None
            }

    except Exception as e:
        # Log error in production
        print(f"Error verifying phone number: {e}")
        return {
            "valid": False,
            "number": phone_number,
            "local_format": "",
            "international_format": "",
            "country_prefix": "",
            "country_code": country_code or "",
            "country_name": "Unknown",
            "location": "Unknown",
            "carrier": "Unknown",
            "line_type": "Unknown",
            "error": f"Verification failed: {str(e)}"
        }

async def is_valid_phone_number(phone_number: str, country_code: Optional[str] = None) -> bool:
    """
    Quick check if phone number is valid

    Args:
        phone_number: Phone number to check
        country_code: ISO country code (optional)

    Returns:
        True if phone number appears valid, False otherwise
    """
    result = await verify_phone_number(phone_number, country_code)
    return result.get("valid", False)