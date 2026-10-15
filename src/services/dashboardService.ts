import { apiClient, ENDPOINTS } from "@/api";

// Mock dashboard data
const mockDashboardData = {
  net_worth: 125000.50,
  netWorth: 125000.50,
  total_net_worth: 125000.50,
  growth_percentage: 8.5,
  growth: 8.5,
  growthPercentage: 8.5,
  twin_ai_score: 92,
  ai_score: 92,
  twinScore: 92,
  total_spending: 3420.75,
  total_expenses: 3420.75,
  monthly_spending: 3420.75,
  expenses: 3420.75,
  total_income: 8500.00,
  monthly_income: 8500.00,
  income: 8500.00,
  total_transactions: 124,
  transaction_count: 124,
};

export const dashboardService = {
  getDashboard: async () => {
    try {
      const response = await apiClient.get(
        ENDPOINTS.DASHBOARD
      );

      return response.data;
    } catch (error) {
      // If API call fails, return mock data for development
      console.warn("Dashboard API call failed, using mock data:", error.message);
      return mockDashboardData;
    }
  },
};