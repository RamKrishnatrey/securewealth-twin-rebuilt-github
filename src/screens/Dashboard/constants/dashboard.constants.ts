import { DashboardData } from "../types";

export const dashboardData: DashboardData = {
  user: {
    id: "1",
    name: "Shaurya",
  },

  balance: {
    totalBalance: 520000,
    netWorth: 820000,
    monthlyGrowth: 5.77,
    aiRiskScore: 98,
    protected: true,
  },

  quickActions: [
    {
      id: "1",
      title: "Transfer",
      icon: "swap-horizontal",
      route: "/transfer",
    },
    {
      id: "2",
      title: "Scan QR",
      icon: "qr-code",
      route: "/scanner",
    },
    {
      id: "3",
      title: "AI",
      icon: "sparkles",
      route: "/ai/chat",
    },
    {
      id: "4",
      title: "Invest",
      icon: "trending-up",
      route: "/investments",
    },
  ],
};