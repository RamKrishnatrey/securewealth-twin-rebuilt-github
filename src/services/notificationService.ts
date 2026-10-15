import { apiClient, ENDPOINTS } from "@/api";

export const notificationService = {
  getNotifications: async () => {
    const response = await apiClient.get(
      ENDPOINTS.NOTIFICATIONS
    );

    return response.data;
  },
};