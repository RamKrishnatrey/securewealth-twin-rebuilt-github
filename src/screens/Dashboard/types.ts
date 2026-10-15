// Dashboard Types
// SecureWealth Twin

export interface User {
  id: string;
  name: string;
  avatar?: string;
}

export interface Balance {
  totalBalance: number;
  netWorth: number;
  monthlyGrowth: number;
  aiRiskScore: number;
  protected: boolean;
}

export interface QuickAction {
  id: string;
  title: string;
  icon: string;
  route: string;
}

export interface DashboardData {
  user: User;
  balance: Balance;
  quickActions: QuickAction[];
}