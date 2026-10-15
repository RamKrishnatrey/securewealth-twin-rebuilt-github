export type FraudContext = "payment" | "receive" | "refund";

export interface FraudCheckRequest {
  amount: number;
  payee_id: string;
  is_new_payee?: boolean;
  unusual_time?: boolean;
  collect_request?: boolean;
  refund_wording?: boolean;
  suspicious_qr_mismatch?: boolean;
  remote_access_suspected?: boolean;
  mule_account_signal?: boolean;
  usual_amount?: number;
  context?: FraudContext;
}

export type FraudDecision = "ALLOW" | "WARN" | "BLOCK";
export type FraudRiskLevel = "LOW" | "MEDIUM" | "HIGH";

export interface FraudCheckResponse {
  risk_score: number;
  risk_level: FraudRiskLevel;
  decision: FraudDecision;
  reasons: string[];
  fraud_categories: string[];
  message: string;
  prototype: boolean;
  model_type: string;
  evaluated_at: string;
}
