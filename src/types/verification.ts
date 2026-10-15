export interface ExchangeRateResponse {
  base_currency: string;
  target_currency: string;
  rate: number;
  timestamp: string;
}

export interface ConversionResponse {
  original_amount: number;
  original_currency: string;
  converted_amount: number;
  target_currency: string;
  timestamp: string;
}

export interface EmailVerificationResponse {
  email: string;
  deliverable: boolean;
  verification_details: {
    email: string;
    format_valid: boolean;
    mx_found: boolean;
    smtp_check: boolean;
    catch_all: boolean;
    role: boolean;
    disposable: boolean;
    free: boolean;
    score: number;
    domain: string;
    reason: string;
  };
}

export interface PhoneVerificationResponse {
  phone_number: string;
  valid: boolean;
  verification_details: {
    valid: boolean;
    number: string;
    local_format: string;
    international_format: string;
    country_prefix: string;
    country_code: string;
    country_name: string;
    location: string;
    carrier: string;
    line_type: string;
    error?: string;
  };
}