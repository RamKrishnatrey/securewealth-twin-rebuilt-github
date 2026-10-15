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
    color: "#7C3AED",
    fontSize: 8,
    fontWeight: "600",
    marginTop: 2,
  },

  /* HERO */

  heroCard: {
    backgroundColor: "#172554",
    borderRadius: 30,
    padding: 22,
    overflow: "hidden",
    marginBottom: 28,
  },

  heroGlowOne: {
    position: "absolute",
    width: 230,
    height: 230,
    borderRadius: 115,
    top: -120,
    right: -70,
    backgroundColor: "rgba(37,99,235,0.32)",
  },

  heroGlowTwo: {
    position: "absolute",
    width: 190,
    height: 190,
    borderRadius: 95,
    bottom: -105,
    left: -70,
    backgroundColor: "rgba(124,58,237,0.25)",
  },

  heroTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  heroLabel: {
    color: "rgba(255,255,255,0.58)",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 0.7,
  },

  portfolioValue: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "900",
    marginTop: 5,
  },

  growthBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(34,197,94,0.15)",
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },

  growthBadgeText: {
    color: "#BBF7D0",
    fontSize: 9,
    fontWeight: "900",
    marginLeft: 4,
  },

  heroCaption: {
    color: "rgba(255,255,255,0.68)",
    fontSize: 9,
    lineHeight: 14,
    maxWidth: 270,
    marginTop: 6,
  },

  graph: {
    height: 88,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 3,
  },

  graphBar: {
    width: "10%",
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.19)",
  },

  graphBarActive: {
    backgroundColor: "#60A5FA",
  },

  heroMetrics: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 19,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.12)",
  },

  heroMetric: {
    flex: 1,
    alignItems: "center",
  },

  metricDivider: {
    width: 1,
    height: 30,
    backgroundColor: "rgba(255,255,255,0.12)",
  },

  metricLabel: {
    color: "rgba(255,255,255,0.48)",
    fontSize: 6,
    fontWeight: "800",
  },

  metricValue: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "800",
    marginTop: 4,
  },

  metricPositive: {
    color: "#86EFAC",
    fontSize: 11,
    fontWeight: "800",
    marginTop: 4,
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
    marginBottom: 12,
  },

  aiBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F3FF",
    borderRadius: 14,
    paddingHorizontal: 7,
    paddingVertical: 5,
    marginBottom: 12,
  },

  aiBadgeText: {
    color: "#7C3AED",
    fontSize: 7,
    fontWeight: "900",
    marginLeft: 3,
  },

  seeDetails: {
    color: "#2563EB",
    fontSize: 9,
    fontWeight: "800",
    marginBottom: 12,
  },

  /* AI */

  aiInsightCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 17,
    borderWidth: 1,
    borderColor: "#DDD6FE",
    marginBottom: 28,
  },

  aiInsightTop: {
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
    marginRight: 11,
  },

  aiHeading: {
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

  recommendationBox: {
    flexDirection: "row",
    backgroundColor: "#EFF6FF",
    borderRadius: 15,
    padding: 11,
    marginTop: 14,
  },

  recommendationIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  recommendationContent: {
    flex: 1,
  },

  recommendationLabel: {
    color: "#2563EB",
    fontSize: 7,
    fontWeight: "900",
  },

  recommendationText: {
    color: "#1E3A8A",
    fontSize: 8,
    lineHeight: 13,
    marginTop: 3,
  },

  confidenceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
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
    backgroundColor: "#E2E8F0",
    borderRadius: 3,
    overflow: "hidden",
  },

  confidenceFill: {
    width: "96%",
    height: "100%",
    backgroundColor: "#7C3AED",
    borderRadius: 3,
  },

  /* ALLOCATION */

  allocationCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 17,
    marginBottom: 28,
    flexDirection: "row",
    alignItems: "center",
  },

  allocationVisual: {
    width: "42%",
    alignItems: "center",
  },

  allocationRing: {
    width: 118,
    height: 118,
    borderRadius: 59,
    borderWidth: 15,
    borderColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
  },

  allocationRingInner: {
    alignItems: "center",
  },

  allocationTotal: {
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "900",
  },

  allocationTotalLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
    marginTop: 2,
  },

  allocationLegend: {
    flex: 1,
    paddingLeft: 10,
  },

  allocationItem: {
    minHeight: 43,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  allocationItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  allocationDot: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    marginRight: 8,
  },

  allocationTitle: {
    color: "#334155",
    fontSize: 9,
    fontWeight: "700",
  },

  allocationAmount: {
    color: "#94A3B8",
    fontSize: 7,
    marginTop: 2,
  },

  allocationPercentage: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "900",
  },

  /* RISK */

  riskCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 17,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 28,
  },

  riskTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  riskIcon: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  riskContent: {
    flex: 1,
  },

  riskLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  riskTitle: {
    color: "#0F172A",
    fontSize: 12,
    fontWeight: "900",
    marginTop: 2,
  },

  moderateBadge: {
    backgroundColor: "#FFFBEB",
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  moderateText: {
    color: "#D97706",
    fontSize: 7,
    fontWeight: "900",
  },

  riskDescription: {
    color: "#64748B",
    fontSize: 8,
    lineHeight: 14,
    marginTop: 13,
  },

  riskScale: {
    height: 7,
    backgroundColor: "#E2E8F0",
    borderRadius: 4,
    marginTop: 16,
  },

  riskScaleFill: {
    width: "58%",
    height: "100%",
    backgroundColor: "#2563EB",
    borderRadius: 4,
  },

  riskMarker: {
    position: "absolute",
    left: "56%",
    top: -4,
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: "#FFFFFF",
    borderWidth: 4,
    borderColor: "#2563EB",
  },

  riskLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 7,
  },

  riskScaleLabel: {
    color: "#94A3B8",
    fontSize: 6,
  },

  /* PERSONALIZED */

  personalizedBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F3FF",
    borderRadius: 14,
    paddingHorizontal: 7,
    paddingVertical: 5,
    marginBottom: 12,
  },

  personalizedText: {
    color: "#7C3AED",
    fontSize: 6,
    fontWeight: "900",
    marginLeft: 3,
  },

  /* INVESTMENT */

  investmentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  investmentIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  investmentContent: {
    flex: 1,
  },

  investmentName: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "800",
  },

  investmentCategory: {
    color: "#64748B",
    fontSize: 7,
    marginTop: 3,
  },

  investmentMeta: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },

  expectedReturnLabel: {
    color: "#94A3B8",
    fontSize: 6,
  },

  expectedReturn: {
    color: "#16A34A",
    fontSize: 8,
    fontWeight: "800",
    marginLeft: 4,
    marginRight: 7,
  },

  riskBadge: {
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },

  lowRiskBadge: {
    backgroundColor: "#F0FDF4",
  },

  mediumRiskBadge: {
    backgroundColor: "#FFFBEB",
  },

  riskBadgeText: {
    fontSize: 6,
    fontWeight: "800",
  },

  lowRiskText: {
    color: "#15803D",
  },

  mediumRiskText: {
    color: "#D97706",
  },

  bookmarkButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },

  /* PROJECTION */

  projectionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 17,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 14,
  },

  projectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  projectionLabel: {
    color: "#94A3B8",
    fontSize: 7,
    fontWeight: "800",
  },

  projectionValue: {
    color: "#0F172A",
    fontSize: 27,
    fontWeight: "900",
    marginTop: 3,
  },

  projectionTimeline: {
    color: "#64748B",
    fontSize: 8,
    marginTop: 2,
  },

  projectionIcon: {
    width: 47,
    height: 47,
    borderRadius: 15,
    backgroundColor: "#F0FDF4",
    alignItems: "center",
    justifyContent: "center",
  },

  projectionGraph: {
    height: 90,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    marginTop: 14,
    backgroundColor: "#F8FAFC",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingTop: 10,
  },

  projectionBar: {
    width: 24,
    backgroundColor: "#86EFAC",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },

  projectionFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  projectionFooterText: {
    color: "#64748B",
    fontSize: 8,
  },

  projectionGrowthText: {
    color: "#16A34A",
    fontSize: 8,
    fontWeight: "800",
  },

  /* DISCLAIMER */

  disclaimer: {
    flexDirection: "row",
    backgroundColor: "#F8FAFC",
    borderRadius: 15,
    padding: 12,
    marginTop: 4,
  },

  disclaimerText: {
    flex: 1,
    color: "#64748B",
    fontSize: 7,
    lineHeight: 12,
    marginLeft: 7,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 19,
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