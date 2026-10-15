
import { apiClient, ENDPOINTS } from "@/api";

export const goalService = {
  getGoals: async () => {
    const response = await apiClient.get(ENDPOINTS.GOALS);
    return response.data;
  },

  createGoal: async (data: {
    title: string;
    subtitle: string;
    target: number;
    saved: number;
    monthly_contribution: number;
    deadline: string;
  }) => {
    const response = await apiClient.post(ENDPOINTS.GOALS, data);
    return response.data;
  },

  updateGoal: async (
    goalId: string,
    data: {
      title?: string;
      subtitle?: string;
      target?: number;
      saved?: number;
      monthly_contribution?: number;
      deadline?: string;
    }
  ) => {
    const response = await apiClient.put(
      `${ENDPOINTS.GOALS}/${goalId}`,
      data
    );
    return response.data;
  },

  deleteGoal: async (goalId: string) => {
    const response = await apiClient.delete(
      `${ENDPOINTS.GOALS}/${goalId}`
    );
    return response.data;
  },
};
