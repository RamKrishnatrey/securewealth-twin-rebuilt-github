export type AIRole =
  | "user"
  | "assistant";

export type AIInsightType =
  | "positive"
  | "warning"
  | "neutral";

export type AIInsight = {
  title: string;
  value: string;
  subtitle: string;
  type: AIInsightType;
  confidence?: number;
};

export type AIChatMessage = {
  id: string;
  role: AIRole;
  text: string;
  time: string;
  insight?: AIInsight;
};

export type AIChatRequest = {
  message: string;
  conversationId?: string;
};

export type AIChatResponse = {
  conversationId?: string;

  message: {
    id?: string;
    role?: AIRole;
    text: string;
    createdAt?: string;
  };

  insight?: AIInsight;
};

export type AIHistoryItem = {
  id: string;
  title: string;
  preview: string;
  updatedAt: string;
};

export type AIChatHistoryResponse = {
  conversations: AIHistoryItem[];
};

export type AIServiceError = {
  message: string;
  status?: number;
};