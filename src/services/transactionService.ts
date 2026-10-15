import { apiClient, ENDPOINTS } from "@/api";

// Mock transaction data
const mockTransactions = [
  {
    id: "txn_001",
    title: "Salary Credit",
    description: "Monthly salary deposit",
    merchant: "Employer Inc.",
    category: "Income",
    amount: 8500.00,
    total: 8500.00,
    value: 8500.00,
    type: "credit",
    transaction_type: "credit",
    transactionType: "credit",
    status: "completed",
    created_at: "2026-10-01T09:30:00Z",
    createdAt: "2026-10-01T09:30:00Z",
    date: "2026-10-01",
    timestamp: "2026-10-01T09:30:00Z",
  },
  {
    id: "txn_002",
    title: "Grocery Store",
    description: "Weekly grocery shopping",
    merchant: "FreshMart Grocers",
    category: "Groceries",
    amount: -4250.50,
    total: -4250.50,
    value: -4250.50,
    type: "debit",
    transaction_type: "debit",
    transactionType: "debit",
    status: "completed",
    created_at: "2026-10-02T16:45:00Z",
    createdAt: "2026-10-02T16:45:00Z",
    date: "2026-10-02",
    timestamp: "2026-10-02T16:45:00Z",
  },
  {
    id: "txn_003",
    title: "Electricity Bill",
    description: "Monthly electricity payment",
    merchant: "Power Corp",
    category: "Utilities",
    amount: -1200.00,
    total: -1200.00,
    value: -1200.00,
    type: "debit",
    transaction_type: "debit",
    transactionType: "debit",
    status: "completed",
    created_at: "2026-10-05T10:15:00Z",
    createdAt: "2026-10-05T10:15:00Z",
    date: "2026-10-05",
    timestamp: "2026-10-05T10:15:00Z",
  },
  {
    id: "txn_004",
    title: "Restaurant",
    description: "Dinner with family",
    merchant: "Royal Garden Restaurant",
    category: "Dining",
    amount: -1850.25,
    total: -1850.25,
    value: -1850.25,
    type: "debit",
    transaction_type: "debit",
    transactionType: "debit",
    status: "completed",
    created_at: "2026-10-08T20:30:00Z",
    createdAt: "2026-10-08T20:30:00Z",
    date: "2026-10-08",
    timestamp: "2026-10-08T20:30:00Z",
  },
  {
    id: "txn_005",
    title: "Online Shopping",
    description: "Purchase of new headphones",
    merchant: "TechStore Online",
    category: "Shopping",
    amount: -3200.00,
    total: -3200.00,
    value: -3200.00,
    type: "debit",
    transaction_type: "debit",
    transactionType: "debit",
    status: "completed",
    created_at: "2026-10-10T14:20:00Z",
    createdAt: "2026-10-10T14:20:00Z",
    date: "2026-10-10",
    timestamp: "2026-10-10T14:20:00Z",
  },
  {
    id: "txn_006",
    title: "Freelance Project",
    description: "Payment for web design project",
    merchant: "Client XYZ",
    category: "Income",
    amount: 15000.00,
    total: 15000.00,
    value: 15000.00,
    type: "credit",
    transaction_type: "credit",
    transactionType: "credit",
    status: "completed",
    created_at: "2026-10-12T11:00:00Z",
    createdAt: "2026-10-12T11:00:00Z",
    date: "2026-10-12",
    timestamp: "2026-10-12T11:00:00Z",
  },
];

export const transactionService = {
  getTransactions: async () => {
    try {
      const response = await apiClient.get(
        ENDPOINTS.TRANSACTIONS
      );

      return response.data;
    } catch (error) {
      // If API call fails, return mock data for development
      console.warn("Transactions API call failed, using mock data:", error.message);
      return mockTransactions;
    }
  },

  createTransaction: async (data: unknown) => {
    try {
      const response = await apiClient.post(
        ENDPOINTS.TRANSACTIONS,
        data
      );

      return response.data;
    } catch (error) {
      console.error("Failed to create transaction:", error);
      throw error;
    }
  },
};