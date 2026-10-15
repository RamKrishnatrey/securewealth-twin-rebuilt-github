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
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 40,
  },

  /* HEADER */

  header: {
    height: 68,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F8FAFC",
    justifyContent: "center",
    alignItems: "center",
  },

  headerCenter: {
    alignItems: "center",
  },

  headerTitle: {
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "800",
  },

  headerSubtitle: {
    color: "#64748B",
    fontSize: 8,
    marginTop: 2,
  },

  alertIndicator: {
    minWidth: 48,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FEF2F2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },

  alertDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#EF4444",
    marginRight: 5,
  },

  alertIndicatorText: {
    color: "#DC2626",
    fontSize: 7,
    fontWeight: "800",
  },

  /* HERO */

  heroCard: {
    minHeight: 360,
    borderRadius: 30,
    backgroundColor: "#7F1D1D",
    padding: 22,
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 28,

    shadowColor: "#DC2626",
    shadowOpacity: 0.15,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 6,
  },

  heroGlowOne: {
    position: "absolute",
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: "rgba(239,68,68,0.24)",
    top: -100,
    right: -70,
  },

  heroGlowTwo: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(251,146,60,0.12)",
    bottom: -80,
    left: -60,
  },

  warningIconOuter: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    justifyContent: "center",
    alignItems: "center",
  },

  warningIconInner: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "rgba(255,255,255,0.13)",
    justifyContent: "center",
    alignItems: "center",
  },

  highRiskBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(254,202,202,0.12)",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginTop: 15,
  },

  highRiskDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#FCA5A5",
    marginRight: 5,
  },

  highRiskBadgeText: {
    color: "#FECACA",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 0.7,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "900",
    marginTop: 13,
    textAlign: "center",
  },

  heroDescription: {
    color: "rgba(255,255,255,0.72)",
    fontSize: 9,
    lineHeight: 15,
    textAlign: "center",
    maxWidth: 285,
    marginTop: 7,
  },

  riskScoreContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 22,
  },

  riskScoreLabel: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 0.7,
  },

  riskScoreRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 3,
  },

  riskScore: {
    color: "#FFFFFF",
    fontSize: 31,
    fontWeight: "900",
    lineHeight: 35,
  },

  riskScoreMax: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 9,
    marginLeft: 2,
    marginBottom: 4,
  },

  riskLevel: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 15,
  },

  riskLevelText: {
    color: "#FECACA",
    fontSize: 8,
    fontWeight: "800",
    marginLeft: 4,
  },

  riskTrack: {
    width: "100%",
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.15)",
    overflow: "hidden",
    marginTop: 9,
  },

  riskFill: {
    width: "87%",
    height: "100%",
    borderRadius: 3,
    backgroundColor: "#FCA5A5",
  },

  /* COMMON */

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  sectionTitle: {
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "800",
  },

  detectedText: {
    color: "#DC2626",
    fontSize: 8,
    fontWeight: "700",
  },

  /* TRANSACTION */

  transactionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 17,
    borderWidth: 1,
    borderColor: "#FEE2E2",
    marginBottom: 28,
  },

  transactionTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  merchantIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: "#FEF2F2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 11,
  },

  merchantContent: {
    flex: 1,
  },

  merchantName: {
    color: "#0F172A",
    fontSize: 12,
    fontWeight: "800",
  },

  transactionCategory: {
    color: "#64748B",
    fontSize: 8,
    marginTop: 3,
  },

  blockedBadge: {
    backgroundColor: "#FEF2F2",
    borderRadius: 15,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  blockedText: {
    color: "#DC2626",
    fontSize: 7,
    fontWeight: "800",
  },

  transactionDivider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginVertical: 14,
  },

  amountRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },

  amountLabel: {
    color: "#94A3B8",
    fontSize: 7,
    fontWeight: "800",
  },

  amount: {
    color: "#DC2626",
    fontSize: 25,
    fontWeight: "900",
    marginTop: 3,
  },

  transactionTimeBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  transactionTime: {
    color: "#64748B",
    fontSize: 8,
    marginLeft: 4,
  },

  transactionMeta: {
    backgroundColor: "#F8FAFC",
    borderRadius: 14,
    paddingHorizontal: 11,
    paddingVertical: 7,
    marginTop: 14,
  },

  metaRow: {
    minHeight: 27,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  metaLabel: {
    color: "#64748B",
    fontSize: 8,
  },

  metaValue: {
    color: "#334155",
    fontSize: 8,
    fontWeight: "700",
  },

  metaValueDanger: {
    color: "#DC2626",
    fontSize: 8,
    fontWeight: "700",
  },

  /* SIGNALS */

  signalCount: {
    backgroundColor: "#FEF2F2",
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  signalCountText: {
    color: "#DC2626",
    fontSize: 7,
    fontWeight: "800",
  },

  signalsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 28,
  },

  signalItem: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 92,
    paddingVertical: 12,
  },

  signalIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 11,
  },

  signalIconHigh: {
    backgroundColor: "#FEF2F2",
  },

  signalIconMedium: {
    backgroundColor: "#FFFBEB",
  },

  signalContent: {
    flex: 1,
  },

  signalTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  signalTitle: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "800",
    flex: 1,
    paddingRight: 5,
  },

  signalDescription: {
    color: "#64748B",
    fontSize: 8,
    lineHeight: 13,
    marginTop: 4,
    paddingRight: 4,
  },

  severityBadge: {
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },

  severityHigh: {
    backgroundColor: "#FEF2F2",
  },

  severityMedium: {
    backgroundColor: "#FFFBEB",
  },

  severityText: {
    fontSize: 6,
    fontWeight: "800",
  },

  severityTextHigh: {
    color: "#DC2626",
  },

  severityTextMedium: {
    color: "#D97706",
  },

  signalDivider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginLeft: 54,
  },

  /* AI */

  aiBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F3FF",
    borderRadius: 14,
    paddingHorizontal: 7,
    paddingVertical: 4,
  },

  aiBadgeText: {
    color: "#7C3AED",
    fontSize: 7,
    fontWeight: "800",
    marginLeft: 3,
  },

  aiCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 17,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 25,
  },

  aiHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  aiIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#F5F3FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  aiHeaderText: {
    flex: 1,
  },

  aiTitle: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "800",
  },

  aiSubtitle: {
    color: "#7C3AED",
    fontSize: 8,
    marginTop: 3,
  },

  aiDescription: {
    color: "#475569",
    fontSize: 9,
    lineHeight: 16,
    marginTop: 14,
  },

  aiRecommendation: {
    flexDirection: "row",
    backgroundColor: "#FEF2F2",
    borderRadius: 15,
    padding: 11,
    marginTop: 14,
  },

  recommendationIcon: {
    width: 34,
    height: 34,
    borderRadius: 11,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 9,
  },

  recommendationContent: {
    flex: 1,
  },

  recommendationLabel: {
    color: "#DC2626",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 0.6,
  },

  recommendationText: {
    color: "#7F1D1D",
    fontSize: 8,
    lineHeight: 13,
    marginTop: 3,
  },

  confidenceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 7,
  },

  confidenceLabel: {
    color: "#64748B",
    fontSize: 8,
  },

  confidenceValue: {
    color: "#7C3AED",
    fontSize: 8,
    fontWeight: "800",
  },

  confidenceTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E2E8F0",
    overflow: "hidden",
  },

  confidenceFill: {
    width: "94%",
    height: "100%",
    borderRadius: 3,
    backgroundColor: "#7C3AED",
  },

  /* DECISION */

  questionTitle: {
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
  },

  questionDescription: {
    color: "#64748B",
    fontSize: 8,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 16,
  },

  safeButton: {
    height: 54,
    borderRadius: 18,
    backgroundColor: "#16A34A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  safeButtonText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "800",
    marginLeft: 7,
  },

  fraudButton: {
    height: 54,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FECACA",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  fraudButtonText: {
    color: "#DC2626",
    fontSize: 11,
    fontWeight: "800",
    marginLeft: 7,
  },

  resolutionSafe: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderWidth: 1,
    borderColor: "#BBF7D0",
    borderRadius: 18,
    padding: 15,
  },

  resolutionFraud: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEF2F2",
    borderWidth: 1,
    borderColor: "#FECACA",
    borderRadius: 18,
    padding: 15,
  },

  resolutionContent: {
    flex: 1,
    marginLeft: 11,
  },

  resolutionSafeTitle: {
    color: "#15803D",
    fontSize: 11,
    fontWeight: "800",
  },

  resolutionFraudTitle: {
    color: "#DC2626",
    fontSize: 11,
    fontWeight: "800",
  },

  resolutionText: {
    color: "#64748B",
    fontSize: 8,
    lineHeight: 13,
    marginTop: 3,
  },

  footerSecurity: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  footerSecurityText: {
    color: "#94A3B8",
    fontSize: 7,
    marginLeft: 5,
  },

  bottomSpace: {
    height: 35,
  },
});