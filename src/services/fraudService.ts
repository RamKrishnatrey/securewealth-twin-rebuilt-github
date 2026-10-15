import { apiClient, ENDPOINTS } from "@/api";
import type {
  FraudCheckRequest,
  FraudCheckResponse,
} from "@/types/fraud";
import { getFirebaseAuthIdToken } from "@/services/webPushService";

export const fraudService = {
  checkFraud: async (
    data: FraudCheckRequest
  ): Promise<FraudCheckResponse> => {
    const idToken = await getFirebaseAuthIdToken();
    const response = await apiClient.post<FraudCheckResponse>(
      ENDPOINTS.FRAUD.CHECK,
      data,
      idToken
        ? { headers: { Authorization: `Bearer ${idToken}` } }
        : undefined
    );

    return response.data;
  },
};
