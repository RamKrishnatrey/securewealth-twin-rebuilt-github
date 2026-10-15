import { apiClient, ENDPOINTS } from "@/api";
import type {
  ExchangeRateResponse,
  ConversionResponse,
  EmailVerificationResponse,
  PhoneVerificationResponse
} from "@/types/verification";

export const verificationService = {
  // Currency Exchange Rates
  getExchangeRate: async (
    baseCurrency: string,
    targetCurrency: string
  ): Promise<ExchangeRateResponse> => {
    const response = await apiClient.get<ExchangeRateResponse>(
      ENDPOINTS.VERIFICATION.EXCHANGE_RATE(baseCurrency, targetCurrency)
    );
    return response.data;
  },

  convertAmount: async (
    amount: number,
    baseCurrency: string,
    targetCurrency: string
  ): Promise<ConversionResponse> => {
    const response = await apiClient.get<ConversionResponse>(
      ENDPOINTS.VERIFICATION.CONVERT(amount, baseCurrency, targetCurrency)
    );
    return response.data;
  },

  // Email Verification
  verifyEmail: async (
    email: string
  ): Promise<EmailVerificationResponse> => {
    const response = await apiClient.post<EmailVerificationResponse>(
      ENDPOINTS.VERIFICATION.VERIFY_EMAIL,
      { email }
    );
    return response.data;
  },

  // Phone Verification
  verifyPhone: async (
    phoneNumber: string,
    countryCode?: string
  ): Promise<PhoneVerificationResponse> => {
    const response = await apiClient.post<PhoneVerificationResponse>(
      ENDPOINTS.VERIFICATION.VERIFY_PHONE,
      { phone_number: phoneNumber, country_code: countryCode }
    );
    return response.data;
  }
};