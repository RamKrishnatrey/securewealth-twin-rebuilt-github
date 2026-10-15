from pydantic import BaseModel, Field
from typing import Optional, List

class AIChatRequest(BaseModel):
    message: str
    conversationId: Optional[str] = None

class AIChatMessage(BaseModel):
    id: Optional[str] = None
    role: Optional[str] = None
    text: str
    createdAt: Optional[str] = None

class AIInsight(BaseModel):
    title: str
    value: str
    subtitle: str
    type: str
    confidence: Optional[int] = None

class AIChatResponse(BaseModel):
    conversationId: Optional[str] = None
    message: AIChatMessage
    insight: Optional[AIInsight] = None

class AIHistoryItem(BaseModel):
    id: str
    title: str
    preview: str
    updatedAt: str

class AIChatHistoryResponse(BaseModel):
    conversations: List[AIHistoryItem]