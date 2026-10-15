import { apiClient } from "@/api";

import type {
  AIChatRequest,
  AIChatResponse,
  AIChatHistoryResponse,
} from "@/types/ai";

/*
  Keep TRUE while building/testing frontend.

  During backend integration:
  change this to false.
*/

const USE_DEMO_AI = false;

/* =====================================
   SEND MESSAGE
===================================== */

export async function sendAIMessage(
  request: AIChatRequest
): Promise<AIChatResponse> {
  if (USE_DEMO_AI) {
    return getDemoResponse(
      request.message,
      request.conversationId
    );
  }

  try {
    const response =
  await apiClient.post<AIChatResponse>(
    "/ai/chat",
    request
  );

    return response.data;
  } catch (error: any) {
    throw normalizeAIError(error);
  }
}

/* =====================================
   GET CHAT HISTORY
===================================== */

export async function getAIChatHistory(): Promise<AIChatHistoryResponse> {
  if (USE_DEMO_AI) {
    await delay(450);

    return {
      conversations: [
        {
          id: "demo-1",
          title: "Monthly spending analysis",
          preview:
            "Your overall spending is 12% lower than last month.",
          updatedAt: new Date().toISOString(),
        },

        {
          id: "demo-2",
          title: "Investment planning",
          preview:
            "Investing ₹10,000 appears manageable based on your current position.",
          updatedAt: new Date(
            Date.now() - 86400000
          ).toISOString(),
        },

        {
          id: "demo-3",
          title: "Transaction security",
          preview:
            "Twin Shield found no critical threats in your recent activity.",
          updatedAt: new Date(
            Date.now() -
              86400000 * 2
          ).toISOString(),
        },
      ],
    };
  }

  try {
    const response =
  await apiClient.get<AIChatHistoryResponse>(
    "/ai/chat/history"
  );

    return response.data;
  } catch (error: any) {
    throw normalizeAIError(error);
  }
}

/* =====================================
   DEMO ENGINE
===================================== */

async function getDemoResponse(
  message: string,
  conversationId?: string
): Promise<AIChatResponse> {
  await delay(1250);

  const query =
    message.toLowerCase();

  const id =
    conversationId ??
    `conversation-${Date.now()}`;

  if (
    query.includes("spend") ||
    query.includes("expense")
  ) {
    return {
      conversationId: id,

      message: {
        role: "assistant",

        text:
          "I analysed your recent spending pattern. Your overall spending is about 12% lower than last month. Food delivery is the main category that increased this week.",
      },

      insight: {
        title: "Monthly Spending",
        value: "↓ 12%",
        subtitle:
          "₹4,820 less than last month",
        type: "positive",
        confidence: 96,
      },
    };
  }

  if (
    query.includes("invest") ||
    query.includes("investment")
  ) {
    return {
      conversationId: id,

      message: {
        role: "assistant",

        text:
          "Based on your current savings pattern and expected monthly expenses, investing ₹10,000 appears manageable while maintaining a healthy emergency reserve.",
      },

      insight: {
        title: "Investment Capacity",
        value: "₹10,000",
        subtitle:
          "Within your estimated safe range",
        type: "positive",
        confidence: 94,
      },
    };
  }

  if (
    query.includes("fraud") ||
    query.includes("transaction") ||
    query.includes("suspicious")
  ) {
    return {
      conversationId: id,

      message: {
        role: "assistant",

        text:
          "Twin Shield analysed your recent transaction activity. No high-risk behaviour is visible in the current demo data and your transaction risk profile remains low.",
      },

      insight: {
        title: "Twin Shield",
        value: "LOW RISK",
        subtitle:
          "No critical threats detected",
        type: "positive",
        confidence: 98,
      },
    };
  }

  if (
    query.includes("save") ||
    query.includes("saving")
  ) {
    return {
      conversationId: id,

      message: {
        role: "assistant",

        text:
          "Your savings performance is currently ahead of last month. If you maintain this pace, you could save approximately ₹24,600 more over the next 12 months.",
      },

      insight: {
        title: "Savings Momentum",
        value: "+18%",
        subtitle:
          "Ahead of last month's pace",
        type: "positive",
        confidence: 93,
      },
    };
  }

  return {
    conversationId: id,

    message: {
      role: "assistant",

      text:
        "I can analyse this using your spending, savings, transactions, goals and investment context. Once the backend is connected, Twin will generate this insight using your real financial data.",
    },

    insight: {
      title: "Twin Analysis",
      value: "READY",
      subtitle:
        "Financial context available",
      type: "neutral",
      confidence: 90,
    },
  };
}

/* =====================================
   HELPERS
===================================== */

function delay(ms: number) {
  return new Promise<void>(
    (resolve) =>
      setTimeout(resolve, ms)
  );
}

function normalizeAIError(
  error: any
): Error {
  const message =
    error?.response?.data?.detail ||
    error?.response?.data?.message ||
    error?.message ||
    "Twin AI is temporarily unavailable.";

  return new Error(message);
}