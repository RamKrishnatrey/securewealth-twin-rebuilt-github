import axios from "axios";
import { Platform } from "react-native";

// Backend address: set EXPO_PUBLIC_API_URL in .env.local (use your computer's LAN IP on a real phone).
const DEFAULT_URL = Platform.OS === "android" ? "http://10.0.2.2:8001" : "http://127.0.0.1:8001";

const client = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL ?? DEFAULT_URL,
  timeout: 30000,
});

export type ConversionResponse = {
  original_amount: number;
  original_currency: string;
  converted_amount: number;
  target_currency: string;
  timestamp: string;
};

export type ExchangeRateResponse = {
  base_currency: string;
  target_currency: string;
  rate: number;
  timestamp: string;
};

export const currencyService = {
  getExchangeRate: async (base: string, target: string): Promise<ExchangeRateResponse> =>
    (await client.get(`/api/v1/exchange-rate/${base}/${target}`)).data,

  convertAmount: async (amount: number, base: string, target: string): Promise<ConversionResponse> =>
    (await client.get(`/api/v1/convert/${amount}/${base}/${target}`)).data,
};
