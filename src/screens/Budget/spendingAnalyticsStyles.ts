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
    paddingTop: 18,
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

  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
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

  /* PERIOD */

  periodRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 17,
  },

  periodLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  periodTitle: {
    color: "#0F172A",
    fontSize: 19,
    fontWeight: "900",
    marginTop: 3,
  },

  periodButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFF6FF",
    borderRadius: 14,
    paddingHorizontal: 11,
    paddingVertical: 8,
  },

  periodButtonText: {
    color: "#2563EB",
    fontSize: 8,
    fontWeight: "800",
    marginRight: 5,
  },

  /* HERO */

  heroCard: {
    backgroundColor: "#172554",
    borderRadius: 27,
    padding: 20,
    overflow: "hidden",
    marginBottom: 27,
  },

  heroGlowOne: {
    position: "absolute",
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: "rgba(37,99,235,0.32)",
    top: -105,
    right: -55,
  },

  heroGlowTwo: {
    position: "absolute",
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "rgba(124,58,237,0.18)",
    bottom: -105,
    left: -40,
  },

  heroHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  heroLabel: {
    color: "rgba(255,255,255,0.48)",
    fontSize: 7,
    fontWeight: "800",
  },

  heroAmount: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "900",
    marginTop: 5,
  },

  heroIcon: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.10)",
    alignItems: "center",
    justifyContent: "center",
  },

  changeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  changeBadge: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },

  changeBadgeDanger: {
    backgroundColor: "rgba(239,68,68,0.16)",
  },

  changeBadgeHealthy: {
    backgroundColor: "rgba(34,197,94,0.16)",
  },

  changeText: {
    fontSize: 7,
    fontWeight: "900",
    marginLeft: 3,
  },

  changeTextDanger: {
    color: "#FCA5A5",
  },

  changeTextHealthy: {
    color: "#86EFAC",
  },

  changeDescription: {
    color: "rgba(255,255,255,0.48)",
    fontSize: 7,
    marginLeft: 6,
  },

  heroDivider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.12)",
    marginVertical: 18,
  },

  heroStats: {
    flexDirection: "row",
    alignItems: "center",
  },

  heroStat: {
    flex: 1,
    alignItems: "center",
  },

  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: "rgba(255,255,255,0.13)",
  },

  heroStatLabel: {
    color: "rgba(255,255,255,0.42)",
    fontSize: 6,
    fontWeight: "800",
  },

  heroStatValue: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "900",
    marginTop: 4,
  },

  /* SECTION */

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  sectionTitle: {
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "800",
  },

  sectionSubtitle: {
    color: "#94A3B8",
    fontSize: 7,
    marginTop: 3,
  },

  seeAll: {
    color: "#2563EB",
    fontSize: 8,
    fontWeight: "800",
  },

  liveBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 13,
  },

  liveDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#22C55E",
    marginRight: 4,
  },

  liveText: {
    color: "#15803D",
    fontSize: 6,
    fontWeight: "900",
  },

  /* CASH FLOW */

  cashFlowCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 15,
    marginBottom: 27,
  },

  cashFlowRow: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 62,
  },

  cashFlowIconIncome: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#F0FDF4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  cashFlowIconExpense: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#FEF2F2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  cashFlowContent: {
    flex: 1,
  },

  cashFlowLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  cashFlowValue: {
    color: "#0F172A",
    fontSize: 14,
    fontWeight: "900",
    marginTop: 3,
  },

  incomeText: {
    color: "#16A34A",
    fontSize: 8,
    fontWeight: "800",
  },

  expenseText: {
    color: "#DC2626",
    fontSize: 8,
    fontWeight: "800",
  },

  rowDivider: {
    height: 1,
    backgroundColor: "#F1F5F9",
  },

  balanceBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F8FAFC",
    borderRadius: 15,
    padding: 12,
    marginTop: 11,
  },

  balanceLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  balanceAmount: {
    color: "#0F172A",
    fontSize: 13,
    fontWeight: "900",
    marginTop: 3,
  },

  balanceBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  balanceBadgeText: {
    color: "#16A34A",
    fontSize: 7,
    fontWeight: "800",
    marginLeft: 4,
  },

  /* TREND */

  averageText: {
    color: "#2563EB",
    fontSize: 8,
    fontWeight: "800",
  },

  trendCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 16,
    marginBottom: 27,
  },

  trendHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  trendLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  trendTitle: {
    color: "#0F172A",
    fontSize: 13,
    fontWeight: "900",
    marginTop: 3,
  },

  trendIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
  },

  chart: {
    height: 170,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 18,
  },

  barColumn: {
    width: "15%",
    alignItems: "center",
  },

  barValue: {
    color: "#64748B",
    fontSize: 6,
    fontWeight: "700",
    marginBottom: 5,
  },

  barArea: {
    height: 115,
    justifyContent: "flex-end",
  },

  bar: {
    width: 22,
    borderRadius: 7,
    backgroundColor: "#CBD5E1",
    minHeight: 10,
  },

  activeBar: {
    backgroundColor: "#2563EB",
  },

  barMonth: {
    color: "#94A3B8",
    fontSize: 7,
    marginTop: 7,
  },

  activeBarMonth: {
    color: "#2563EB",
    fontWeight: "900",
  },

  trendInsight: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#EFF6FF",
    borderRadius: 14,
    padding: 11,
    marginTop: 14,
  },

  trendInsightText: {
    flex: 1,
    color: "#1D4ED8",
    fontSize: 7,
    lineHeight: 12,
    marginLeft: 7,
  },

  /* CATEGORY */

  categoryCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 14,
    marginBottom: 27,
  },

  categoryRow: {
    minHeight: 72,
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
  },

  categoryRowFirst: {
    borderTopWidth: 0,
  },

  categoryIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  categoryContent: {
    flex: 1,
    marginRight: 8,
  },

  categoryTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  categoryTitle: {
    color: "#0F172A",
    fontSize: 9,
    fontWeight: "800",
  },

  categoryAmount: {
    color: "#0F172A",
    fontSize: 9,
    fontWeight: "900",
  },

  categoryBottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },

  categoryTrack: {
    flex: 1,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#F1F5F9",
    overflow: "hidden",
  },

  categoryFill: {
    height: "100%",
    borderRadius: 3,
  },

  categoryPercentage: {
    width: 30,
    textAlign: "right",
    color: "#64748B",
    fontSize: 7,
    fontWeight: "800",
  },

  /* SAVINGS */

  savingsBadge: {
    backgroundColor: "#F0FDF4",
    borderRadius: 13,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  savingsBadgeText: {
    color: "#16A34A",
    fontSize: 8,
    fontWeight: "900",
  },

  savingsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#BBF7D0",
    padding: 16,
    marginBottom: 27,
  },

  savingsHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  savingsIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: "#F0FDF4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  savingsContent: {
    flex: 1,
  },

  savingsLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  savingsAmount: {
    color: "#0F172A",
    fontSize: 17,
    fontWeight: "900",
    marginTop: 3,
  },

  savingsStatus: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },

  savingsStatusText: {
    color: "#16A34A",
    fontSize: 7,
    fontWeight: "800",
    marginLeft: 4,
  },

  savingsTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#DCFCE7",
    overflow: "hidden",
    marginTop: 17,
  },

  savingsFill: {
    height: "100%",
    borderRadius: 4,
    backgroundColor: "#22C55E",
  },

  savingsFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },

  savingsFooterText: {
    color: "#94A3B8",
    fontSize: 6,
  },

  savingsGoal: {
    color: "#16A34A",
    fontSize: 6,
    fontWeight: "800",
  },

  /* AI */

  aiBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F3FF",
    borderRadius: 13,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  aiBadgeText: {
    color: "#7C3AED",
    fontSize: 6,
    fontWeight: "900",
    marginLeft: 3,
  },

  aiCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "#DDD6FE",
    padding: 17,
    marginBottom: 20,
  },

  aiHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  aiIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#F5F3FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  aiHeading: {
    flex: 1,
  },

  aiTitle: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "900",
  },

  aiSubtitle: {
    color: "#7C3AED",
    fontSize: 7,
    marginTop: 3,
  },

  confidenceBadge: {
    backgroundColor: "#F5F3FF",
    borderRadius: 13,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },

  confidenceBadgeText: {
    color: "#7C3AED",
    fontSize: 8,
    fontWeight: "900",
  },

  aiDescription: {
    color: "#475569",
    fontSize: 9,
    lineHeight: 16,
    marginTop: 14,
  },

  insightRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },

  insightIconBlue: {
    width: 39,
    height: 39,
    borderRadius: 12,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  insightIconGreen: {
    width: 39,
    height: 39,
    borderRadius: 12,
    backgroundColor: "#F0FDF4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  insightContent: {
    flex: 1,
  },

  insightTitle: {
    color: "#0F172A",
    fontSize: 8,
    fontWeight: "800",
  },

  insightDescription: {
    color: "#64748B",
    fontSize: 7,
    lineHeight: 11,
    marginTop: 3,
  },

  recommendationBox: {
    flexDirection: "row",
    backgroundColor: "#F5F3FF",
    borderRadius: 15,
    padding: 11,
    marginTop: 15,
  },

  recommendationIcon: {
    width: 39,
    height: 39,
    borderRadius: 12,
    backgroundColor: "#EDE9FE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  recommendationContent: {
    flex: 1,
  },

  recommendationTitle: {
    color: "#5B21B6",
    fontSize: 8,
    fontWeight: "900",
  },

  recommendationText: {
    color: "#6D28D9",
    fontSize: 7,
    lineHeight: 12,
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
    fontWeight: "900",
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

  /* FOOTER */

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
  },

  footerText: {
    color: "#94A3B8",
    fontSize: 7,
    marginLeft: 5,
  },

  bottomSpace: {
    height: 35,
  },
});