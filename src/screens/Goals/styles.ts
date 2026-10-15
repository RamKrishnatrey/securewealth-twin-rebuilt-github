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

  addHeaderButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#EFF6FF",
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
    width: 220,
    height: 220,
    borderRadius: 110,
    top: -120,
    right: -60,
    backgroundColor:
      "rgba(37,99,235,0.32)",
  },

  heroGlowTwo: {
    position: "absolute",
    width: 190,
    height: 190,
    borderRadius: 95,
    bottom: -110,
    left: -70,
    backgroundColor:
      "rgba(124,58,237,0.25)",
  },

  heroTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  heroLabel: {
    color: "rgba(255,255,255,0.58)",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 0.7,
  },

  heroValue: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "900",
    marginTop: 5,
  },

  progressBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:
      "rgba(34,197,94,0.15)",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 18,
  },

  progressBadgeText: {
    color: "#BBF7D0",
    fontSize: 9,
    fontWeight: "900",
    marginLeft: 4,
  },

  heroDescription: {
    color: "rgba(255,255,255,0.68)",
    fontSize: 9,
    lineHeight: 15,
    marginTop: 8,
    maxWidth: 290,
  },

  heroProgressTrack: {
    height: 7,
    borderRadius: 4,
    backgroundColor:
      "rgba(255,255,255,0.15)",
    overflow: "hidden",
    marginTop: 20,
  },

  heroProgressFill: {
    height: "100%",
    borderRadius: 4,
    backgroundColor: "#60A5FA",
  },

  heroBottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor:
      "rgba(255,255,255,0.12)",
  },

  heroMetric: {
    flex: 1,
    alignItems: "center",
  },

  heroDivider: {
    width: 1,
    height: 30,
    backgroundColor:
      "rgba(255,255,255,0.12)",
  },

  heroMetricLabel: {
    color: "rgba(255,255,255,0.48)",
    fontSize: 6,
    fontWeight: "800",
  },

  heroMetricValue: {
    color: "#FFFFFF",
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
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 14,
    marginBottom: 12,
  },

  aiBadgeText: {
    color: "#7C3AED",
    fontSize: 6,
    fontWeight: "900",
    marginLeft: 3,
  },

  /* AI */

  aiCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 17,
    borderWidth: 1,
    borderColor: "#DDD6FE",
    marginBottom: 28,
  },

  aiTop: {
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

  aiRecommendation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    borderRadius: 16,
    padding: 13,
    marginTop: 14,
  },

  aiRecommendationLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  aiRecommendationValue: {
    color: "#0F172A",
    fontSize: 19,
    fontWeight: "900",
    marginTop: 3,
  },

  aiImpactBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 14,
  },

  aiImpactText: {
    color: "#15803D",
    fontSize: 6,
    fontWeight: "900",
    marginLeft: 3,
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
    width: "94%",
    height: "100%",
    borderRadius: 3,
    backgroundColor: "#7C3AED",
  },

  /* ACTIVE GOALS */

  addGoalText: {
    color: "#2563EB",
    fontSize: 9,
    fontWeight: "800",
    marginBottom: 12,
  },

  goalCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 16,
    marginBottom: 12,
  },

  goalTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  goalIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  goalContent: {
    flex: 1,
  },

  goalTitle: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "800",
  },

  goalSubtitle: {
    color: "#64748B",
    fontSize: 8,
    marginTop: 3,
  },

  goalPercentage: {
    alignItems: "flex-end",
  },

  goalPercentageValue: {
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "900",
  },

  goalPercentageLabel: {
    color: "#94A3B8",
    fontSize: 5,
    fontWeight: "800",
    marginTop: 1,
  },

  goalAmountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },

  goalSavedLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  goalSavedValue: {
    color: "#0F172A",
    fontSize: 13,
    fontWeight: "900",
    marginTop: 3,
  },

  goalTargetArea: {
    alignItems: "flex-end",
  },

  goalTargetValue: {
    color: "#475569",
    fontSize: 13,
    fontWeight: "800",
    marginTop: 3,
  },

  goalProgressTrack: {
    height: 7,
    borderRadius: 4,
    backgroundColor: "#E2E8F0",
    overflow: "hidden",
    marginTop: 12,
  },

  goalProgressFill: {
    height: "100%",
    borderRadius: 4,
  },

  goalFooter: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 13,
  },

  goalFooterItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },

  goalFooterText: {
    color: "#64748B",
    fontSize: 7,
    marginLeft: 4,
  },

  onTrackSmall: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    backgroundColor: "#F0FDF4",
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 10,
  },

  onTrackDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#22C55E",
    marginRight: 4,
  },

  onTrackSmallText: {
    color: "#15803D",
    fontSize: 6,
    fontWeight: "900",
  },

  /* MONTHLY PLAN */

  monthlyPlanCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 28,
  },

  monthlyPlanHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  monthlyPlanIcon: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  monthlyPlanContent: {
    flex: 1,
  },

  monthlyPlanTitle: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "800",
  },

  monthlyPlanSubtitle: {
    color: "#64748B",
    fontSize: 7,
    marginTop: 3,
  },

  onTrackBadge: {
    backgroundColor: "#F0FDF4",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 12,
  },

  onTrackText: {
    color: "#15803D",
    fontSize: 6,
    fontWeight: "900",
  },

  planDivider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginVertical: 13,
  },

  planRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 34,
  },

  planRowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  planDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },

  planTitle: {
    color: "#475569",
    fontSize: 8,
    fontWeight: "600",
  },

  planAmount: {
    color: "#0F172A",
    fontSize: 9,
    fontWeight: "800",
  },

  planTotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  planTotalLabel: {
    color: "#64748B",
    fontSize: 8,
  },

  planTotalValue: {
    color: "#2563EB",
    fontSize: 11,
    fontWeight: "900",
  },

  /* HEALTH */

  healthCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 17,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 28,
  },

  healthTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  healthLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  healthTitle: {
    color: "#16A34A",
    fontSize: 18,
    fontWeight: "900",
    marginTop: 3,
  },

  healthDescription: {
    color: "#64748B",
    fontSize: 7,
    lineHeight: 12,
    marginTop: 4,
    maxWidth: 220,
  },

  healthScoreCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 7,
    borderColor: "#86EFAC",
    alignItems: "center",
    justifyContent: "center",
  },

  healthScore: {
    color: "#15803D",
    fontSize: 18,
    fontWeight: "900",
  },

  healthScoreLabel: {
    color: "#94A3B8",
    fontSize: 5,
    fontWeight: "800",
  },

  healthStats: {
    flexDirection: "row",
    marginTop: 18,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
  },

  healthStat: {
    flex: 1,
    alignItems: "center",
  },

  healthStatValue: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "900",
    marginTop: 4,
  },

  healthStatLabel: {
    color: "#94A3B8",
    fontSize: 6,
    marginTop: 2,
  },

  /* ADD GOAL */

  addGoalCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFF6FF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#DBEAFE",
    padding: 15,
  },

  addGoalIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  addGoalContent: {
    flex: 1,
  },

  addGoalTitle: {
    color: "#1E3A8A",
    fontSize: 10,
    fontWeight: "800",
  },

  addGoalSubtitle: {
    color: "#64748B",
    fontSize: 7,
    lineHeight: 12,
    marginTop: 3,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
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