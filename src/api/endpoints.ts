export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    FORGOT_PASSWORD: "/auth/forgot-password",
  },

  DASHBOARD: "/dashboard",

  ACCOUNTS: "/accounts",

  TRANSACTIONS: "/transactions",

  GOALS: "/goals",

  NOTIFICATIONS: "/notifications",

  NOTIFICATION_DEVICES: "/notifications/devices",

  AI: {
    CHAT: "/ai/chat",
  },

  FRAUD: {
    CHECK: "/fraud/check",
  },

  VERIFICATION: {
    EXCHANGE_RATE: (base: string, target: string) => `/api/v1/exchange-rate/${base}/${target}`,
    CONVERT: (amount: number, base: string, target: string) => `/api/v1/convert/${amount}/${base}/${target}`,
    VERIFY_EMAIL: "/api/v1/verify-email",
    VERIFY_PHONE: "/api/v1/verify-phone",
  },

  PROFILE: "/profile",

  SETTINGS: "/settings",
} as const;
