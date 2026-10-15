"""Currency exchange rate service using exchangerate-api.com"""
import os
import httpx
from typing import Dict, Optional
from datetime import datetime, timedelta

# Cache for exchange rates to avoid excessive API calls
_exchange_rate_cache: Dict[str, Dict] = {}
_cache_timestamp: Dict[str, datetime] = {}
CACHE_DURATION = timedelta(hours=1)  # Cache rates for 1 hour

async def get_exchange_rate(base_currency: str, target_currency: str) -> Optional[float]:
    """
    Get exchange rate from base_currency to target_currency

    Args:
        base_currency: Base currency code (e.g., "USD")
        target_currency: Target currency code (e.g., "EUR")

    Returns:
        Exchange rate as float, or None if failed
    """
    # Normalize currency codes
    base = base_currency.upper()
    target = target_currency.upper()

    # Check cache first
    cache_key = f"{base}_{target}"
    now = datetime.now()

    if cache_key in _exchange_rate_cache and cache_key in _cache_timestamp:
        if now - _cache_timestamp[cache_key] < CACHE_DURATION:
            return _exchange_rate_cache[cache_key].get('rate')

    # Get API key from environment
    api_key = os.getenv("EXCHANGE_RATE_API_KEY")
    if not api_key:
        # For demonstration purposes, use a free tier API that doesn't require key
        # In production, you should get a proper API key
        url = f"https://api.exchangerate-api.com/v4/latest/{base}"
    else:
        url = f"https://v6.exchangerate-api.com/v6/{api_key}/latest/{base}"

    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(url, timeout=10.0)
            response.raise_for_status()
            data = response.json()

            # Extract rate based on API response format
            if 'conversion_rates' in data:
                rate = data['conversion_rates'].get(target)
            elif 'rates' in data:
                rate = data['rates'].get(target)
            else:
                # Fallback for other formats
                rate = data.get(target)

            if rate is not None:
                # Update cache
                _exchange_rate_cache[cache_key] = {'rate': rate}
                _cache_timestamp[cache_key] = now
                return rate

            return None

    except Exception as e:
        # Log error in production
        print(f"Error fetching exchange rate: {e}")
        return None

async def convert_amount(amount: float, base_currency: str, target_currency: str) -> Optional[float]:
    """
    Convert amount from base_currency to target_currency

    Args:
        amount: Amount to convert
        base_currency: Base currency code
        target_currency: Target currency code

    Returns:
        Converted amount, or None if conversion failed
    """
    if base_currency.upper() == target_currency.upper():
        return amount

    rate = await get_exchange_rate(base_currency, target_currency)
    if rate is None:
        return None

    return amount * rate

def clear_cache():
    """Clear the exchange rate cache"""
    global _exchange_rate_cache, _cache_timestamp
    _exchange_rate_cache.clear()
    _cache_timestamp.clear()