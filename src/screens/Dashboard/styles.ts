import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#F8FAFC",
},

scrollView: {
  flex: 1,
},

content: {
  flexGrow: 1,
  paddingHorizontal: 16,
  paddingTop: 8,
  paddingBottom: 32,
},

  /* =========================
      HEADER
  ========================= */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },

  goodMorning: {
    fontSize: 14,
    color: "#64748B",
    fontWeight: "500",
  },

  userName: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0F172A",
    marginTop: 2,
  },

  aiStatusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  greenDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#22C55E",
    marginRight: 8,
  },

  aiStatusText: {
    color: "#16A34A",
    fontSize: 13,
    fontWeight: "600",
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 4,
  },

  notificationDot: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#EF4444",
  },

  /* =========================
      HERO CARD
  ========================= */

  heroCard: {
  borderRadius: 30,
  padding: 24,

  minHeight: 300,

  marginBottom: 28,

  overflow: "hidden",
},

  balanceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  netWorthTitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 1,
  },

  balanceText: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "800",
    marginTop: 8,
  },

  growthChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.18)",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 50,
  },

  growthText: {
    color: "#FFFFFF",
    fontWeight: "700",
    marginLeft: 6,
  },

  metricsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 28,
  },

  metricCard: {
    flex: 1,
  },

  metricLabel: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 13,
  },

  metricValue: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    marginTop: 6,
  },

  metricStatusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  greenDotSmall: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: "#4ADE80",
    marginRight: 6,
  },

  metricStatus: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 13,
  },

  chartContainer: {
    marginTop: 28,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 70,
  },

  chartLine1: {
    width: 18,
    height: 20,
    backgroundColor: "rgba(255,255,255,0.35)",
    borderRadius: 10,
  },

  chartLine2: {
    width: 18,
    height: 32,
    backgroundColor: "rgba(255,255,255,0.45)",
    borderRadius: 10,
  },

  chartLine3: {
    width: 18,
    height: 28,
    backgroundColor: "rgba(255,255,255,0.55)",
    borderRadius: 10,
  },

  chartLine4: {
    width: 18,
    height: 46,
    backgroundColor: "rgba(255,255,255,0.65)",
    borderRadius: 10,
  },

  chartLine5: {
    width: 18,
    height: 58,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 10,
  },

  chartLine6: {
    width: 18,
    height: 66,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },

  /* =========================
      AI INSIGHT
  ========================= */

  aiInsightCard: {
    borderRadius: 24,
    padding: 20,
    marginBottom: 32,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },

  aiHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  aiIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  aiTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
  },

  aiSubtitle: {
    color: "#64748B",
    marginTop: 2,
  },

  aiMessage: {
    fontSize: 15,
    color: "#334155",
    lineHeight: 24,
    marginBottom: 12,
  },

  boldText: {
    fontWeight: "700",
    color: "#0F172A",
  },

  confidenceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },

  confidenceLabel: {
    color: "#64748B",
    fontSize: 14,
  },

  confidenceValue: {
    color: "#2563EB",
    fontWeight: "700",
    fontSize: 14,
  },

  progressBackground: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E2E8F0",
    overflow: "hidden",
  },

  progressFill: {
    width: "96%",
    height: "100%",
    backgroundColor: "#2563EB",
    borderRadius: 4,
  },

  /* =========================
      QUICK ACTIONS
  ========================= */

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
  },

  seeAll: {
    color: "#2563EB",
    fontWeight: "600",
  },

  quickActionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  actionCard: {
    width: "31%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 22,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },

  actionText: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: "600",
    color: "#0F172A",
    textAlign: "center",
  },
    /* =========================
      INVESTMENT CARD
  ========================= */

  investmentCard: {
    borderRadius: 24,
    padding: 20,
    backgroundColor: "#FFFFFF",
    marginBottom: 32,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 8,
  },

  investmentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  investmentTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
  },

  investmentSubtitle: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 4,
  },

  investmentDescription: {
    fontSize: 15,
    color: "#475569",
    lineHeight: 24,
    marginBottom: 18,
  },

  investmentFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  confidenceBlue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2563EB",
  },

  lowRiskChip: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  lowRiskText: {
    color: "#15803D",
    fontSize: 12,
    fontWeight: "700",
  },

  /* =========================
      SHIELD CARD
  ========================= */

  shieldCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 8,
  },

  shieldLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  shieldTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
  },

  shieldSubtitle: {
    color: "#64748B",
    marginTop: 4,
  },

  safeChip: {
    backgroundColor: "#DCFCE7",
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  safeText: {
    color: "#15803D",
    fontWeight: "700",
    fontSize: 12,
  },

  /* =========================
      TRANSACTIONS
  ========================= */

  transactionCard: {
  backgroundColor: "#FFFFFF",
  borderRadius: 18,
  padding: 16,
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 12,

  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 8,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  elevation: 3,
},

  transactionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
  },

  transactionDate: {
    color: "#64748B",
    marginTop: 4,
    fontSize: 13,
  },

  transactionAmount: {
    color: "#DC2626",
    fontSize: 16,
    fontWeight: "700",
  },

  creditAmount: {
    color: "#16A34A",
    fontSize: 16,
    fontWeight: "700",
  },

    /* =========================
      SPENDING OVERVIEW
  ========================= */

  spendingCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    marginBottom: 32,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },

  spendingTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  spendingLabel: {
    fontSize: 13,
    fontWeight: "500",
    color: "#64748B",
  },

  spendingAmount: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0F172A",
    marginTop: 4,
  },

  spendingChangeChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
  },

  spendingChangeText: {
    marginLeft: 5,
    fontSize: 12,
    fontWeight: "700",
    color: "#16A34A",
  },

  categoryRow: {
    marginBottom: 18,
  },

  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  categoryName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#334155",
  },

  categoryAmount: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
  },

  categoryTrack: {
    width: "100%",
    height: 7,
    borderRadius: 10,
    backgroundColor: "#E2E8F0",
    overflow: "hidden",
  },

  categoryFill: {
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#2563EB",
  },

    /* =========================
      FINANCIAL HEALTH
  ========================= */

  aiPoweredChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEF4FF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  aiPoweredText: {
    color: "#2563EB",
    fontSize: 11,
    fontWeight: "800",
    marginLeft: 4,
  },

  healthCard: {
    borderRadius: 24,
    padding: 20,
    marginBottom: 32,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },

  healthTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  scoreCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "#FFFFFF",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",

    shadowColor: "#2563EB",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 3,
  },

  scoreNumber: {
    fontSize: 30,
    fontWeight: "800",
    color: "#2563EB",
  },

  scoreOutOf: {
    fontSize: 11,
    fontWeight: "600",
    color: "#64748B",
  },

  healthInfo: {
    flex: 1,
    marginLeft: 18,
  },

  healthTitle: {
    fontSize: 21,
    fontWeight: "800",
    color: "#0F172A",
  },

  healthDescription: {
    fontSize: 13,
    lineHeight: 20,
    color: "#64748B",
    marginTop: 5,
  },

  healthDivider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginVertical: 20,
  },

  healthMetric: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  healthMetricLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  healthMetricName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#334155",
    marginLeft: 10,
  },

  healthMetricValue: {
    fontSize: 14,
    fontWeight: "800",
    color: "#0F172A",
  },

  healthButton: {
    height: 50,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    marginTop: 8,
  },

  healthButtonText: {
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "700",
    marginHorizontal: 8,
  },
});