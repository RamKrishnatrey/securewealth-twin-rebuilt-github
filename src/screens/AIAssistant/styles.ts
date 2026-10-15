import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 125,
  },

  /* HEADER */

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,

    backgroundColor: "#F8FAFC",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerLogo: {
    width: 44,
    height: 44,
    borderRadius: 15,

    backgroundColor: "#2563EB",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 10,

    shadowColor: "#2563EB",
    shadowOpacity: 0.2,
    shadowRadius: 10,

    elevation: 4,
  },

  headerTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerTitle: {
    color: "#0F172A",
    fontSize: 18,
    fontWeight: "800",
  },

  headerSubtitle: {
    color: "#64748B",
    fontSize: 10,
    marginTop: 2,
  },

  liveBadge: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#DCFCE7",

    borderRadius: 12,

    paddingHorizontal: 7,
    paddingVertical: 3,

    marginLeft: 7,
  },

  liveDot: {
    width: 5,
    height: 5,
    borderRadius: 3,

    backgroundColor: "#16A34A",

    marginRight: 4,
  },

  liveText: {
    color: "#15803D",
    fontSize: 7,
    fontWeight: "800",
  },

  historyButton: {
    width: 42,
    height: 42,

    borderRadius: 21,

    backgroundColor: "#FFFFFF",

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  /* HERO */

  heroSection: {
    alignItems: "center",

    paddingTop: 16,
    paddingBottom: 24,
  },

  aiOrbOuter: {
    position: "relative",
  },

  aiOrb: {
    width: 78,
    height: 78,

    borderRadius: 39,

    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#4F46E5",
    shadowOpacity: 0.28,
    shadowRadius: 18,

    elevation: 8,
  },

  onlineDot: {
    position: "absolute",

    right: 2,
    bottom: 5,

    width: 16,
    height: 16,

    borderRadius: 8,

    backgroundColor: "#22C55E",

    borderWidth: 3,
    borderColor: "#F8FAFC",
  },

  greeting: {
    color: "#64748B",

    fontSize: 12,
    fontWeight: "600",

    marginTop: 16,
  },

  heroTitle: {
    maxWidth: 310,

    color: "#0F172A",

    fontSize: 23,
    lineHeight: 30,
    fontWeight: "800",

    textAlign: "center",

    marginTop: 5,
  },

  heroDescription: {
    maxWidth: 320,

    color: "#64748B",

    fontSize: 11,
    lineHeight: 17,

    textAlign: "center",

    marginTop: 7,
  },

  /* HEALTH */

  healthCard: {
    borderRadius: 26,
    padding: 20,
    marginBottom: 25,

    shadowColor: "#2563EB",
    shadowOpacity: 0.18,
    shadowRadius: 16,

    elevation: 6,
  },

  healthTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  healthLabel: {
    color: "rgba(255,255,255,0.72)",

    fontSize: 8,
    fontWeight: "800",

    letterSpacing: 1,
  },

  healthTitle: {
    color: "#FFFFFF",

    fontSize: 23,
    fontWeight: "800",

    marginTop: 5,
  },

  healthScoreCircle: {
    width: 62,
    height: 62,

    borderRadius: 31,

    backgroundColor: "rgba(255,255,255,0.15)",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
  },

  healthScore: {
    color: "#FFFFFF",

    fontSize: 20,
    fontWeight: "800",
  },

  healthScoreOutOf: {
    color: "rgba(255,255,255,0.65)",

    fontSize: 8,

    marginTop: 7,
  },

  healthProgressBackground: {
    height: 6,

    borderRadius: 3,

    backgroundColor: "rgba(255,255,255,0.2)",

    marginTop: 18,

    overflow: "hidden",
  },

  healthProgressFill: {
    width: "92%",
    height: "100%",

    borderRadius: 3,

    backgroundColor: "#FFFFFF",
  },

  healthMetrics: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 20,
  },

  healthMetric: {
    flex: 1,
    alignItems: "center",
  },

  healthMetricValue: {
    color: "#FFFFFF",

    fontSize: 13,
    fontWeight: "800",

    marginTop: 4,
  },

  healthMetricLabel: {
    color: "rgba(255,255,255,0.65)",

    fontSize: 8,

    marginTop: 2,
  },

  metricDivider: {
    width: 1,
    height: 38,

    backgroundColor:
      "rgba(255,255,255,0.18)",
  },

  /* SECTIONS */

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 12,
  },

  sectionTitle: {
    color: "#0F172A",

    fontSize: 17,
    fontWeight: "800",
  },

  aiGeneratedBadge: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F3E8FF",

    borderRadius: 12,

    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  aiGeneratedText: {
    color: "#7C3AED",

    fontSize: 7,
    fontWeight: "800",

    marginLeft: 4,
  },

  /* INSIGHT */

  insightCard: {
    backgroundColor: "#FFFFFF",

    borderRadius: 22,

    padding: 17,

    borderWidth: 1,
    borderColor: "#E2E8F0",

    marginBottom: 14,

    elevation: 2,
  },

  insightTop: {
    flexDirection: "row",
  },

  insightIcon: {
    width: 44,
    height: 44,

    borderRadius: 15,

    backgroundColor: "#EFF6FF",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 12,
  },

  insightContent: {
    flex: 1,
  },

  insightTitle: {
    color: "#0F172A",

    fontSize: 14,
    fontWeight: "800",
  },

  insightDescription: {
    color: "#64748B",

    fontSize: 10,
    lineHeight: 16,

    marginTop: 5,
  },

  insightAction: {
    flexDirection: "row",
    alignItems: "center",

    alignSelf: "flex-end",

    marginTop: 13,
  },

  insightActionText: {
    color: "#2563EB",

    fontSize: 10,
    fontWeight: "800",

    marginRight: 4,
  },

  /* INTELLIGENCE */

  intelligenceRow: {
    flexDirection: "row",

    marginHorizontal: -4,
    marginBottom: 28,
  },

  intelligenceCard: {
    flex: 1,

    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    paddingVertical: 14,

    alignItems: "center",

    marginHorizontal: 4,

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  intelligenceIcon: {
    width: 34,
    height: 34,

    borderRadius: 12,

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 7,
  },

  greenIconBackground: {
    backgroundColor: "#F0FDF4",
  },

  blueIconBackground: {
    backgroundColor: "#EFF6FF",
  },

  purpleIconBackground: {
    backgroundColor: "#F5F3FF",
  },

  intelligenceValue: {
    color: "#0F172A",

    fontSize: 13,
    fontWeight: "800",
  },

  intelligenceLabel: {
    color: "#64748B",

    fontSize: 8,

    marginTop: 3,
  },

  /* ASK TWIN */

  askHeader: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",

    marginBottom: 13,
  },

  askSubtitle: {
    color: "#64748B",
    fontSize: 9,
    marginTop: 3,
  },

  openChat: {
    color: "#2563EB",
    fontSize: 10,
    fontWeight: "800",
  },

  promptGrid: {
    flexDirection: "row",
    flexWrap: "wrap",

    justifyContent: "space-between",

    marginBottom: 18,
  },

  suggestionCard: {
    width: "48.5%",

    minHeight: 118,

    backgroundColor: "#FFFFFF",

    borderRadius: 20,

    padding: 14,

    marginBottom: 10,

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  suggestionIcon: {
    width: 38,
    height: 38,

    borderRadius: 13,

    backgroundColor: "#EFF6FF",

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 10,
  },

  suggestionTitle: {
    color: "#0F172A",

    fontSize: 11,
    fontWeight: "800",
  },

  suggestionSubtitle: {
    color: "#64748B",

    fontSize: 8,
    lineHeight: 12,

    marginTop: 4,
  },

  /* PROACTIVE */

  proactiveCard: {
    backgroundColor: "#FFFBEB",

    borderRadius: 21,

    padding: 16,

    borderWidth: 1,
    borderColor: "#FDE68A",

    marginBottom: 18,
  },

  proactiveHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  proactiveIcon: {
    width: 40,
    height: 40,

    borderRadius: 14,

    backgroundColor: "#FEF3C7",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 10,
  },

  proactiveHeading: {
    flex: 1,
  },

  proactiveTitle: {
    color: "#92400E",

    fontSize: 12,
    fontWeight: "800",
  },

  proactiveTime: {
    color: "#B45309",

    fontSize: 8,

    marginTop: 2,
  },

  proactiveText: {
    color: "#78350F",

    fontSize: 10,
    lineHeight: 16,

    marginTop: 12,
  },

  proactiveAction: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 12,
  },

  proactiveActionText: {
    color: "#2563EB",

    fontSize: 10,
    fontWeight: "800",

    marginRight: 5,
  },

  /* PRIVACY */

  privacyRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 15,
  },

  privacyText: {
    maxWidth: 290,

    color: "#64748B",

    fontSize: 8,
    lineHeight: 12,

    marginLeft: 5,

    textAlign: "center",
  },

  /* MESSAGE INPUT */

  inputContainer: {
    position: "absolute",

    left: 0,
    right: 0,
    bottom: 0,

    paddingHorizontal: 14,
    paddingTop: 9,
    paddingBottom: 10,

    backgroundColor: "#F8FAFC",

    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
  },

  messageInputWrapper: {
    height: 54,

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFFFFF",

    borderRadius: 19,

    paddingHorizontal: 10,

    borderWidth: 1,
    borderColor: "#E2E8F0",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,

    elevation: 4,
  },

  inputSparkle: {
    width: 32,
    height: 32,

    borderRadius: 11,

    backgroundColor: "#F5F3FF",

    alignItems: "center",
    justifyContent: "center",
  },

  messageInput: {
    flex: 1,

    color: "#0F172A",

    fontSize: 11,

    paddingHorizontal: 10,
  },

  sendButton: {
    width: 36,
    height: 36,

    borderRadius: 12,

    backgroundColor: "#2563EB",

    alignItems: "center",
    justifyContent: "center",
  },

  sendButtonDisabled: {
    backgroundColor: "#F1F5F9",
  },
});