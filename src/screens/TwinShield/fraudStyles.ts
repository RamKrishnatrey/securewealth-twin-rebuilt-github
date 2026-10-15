import {
  StyleSheet,
} from "react-native";

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
    color: "#64748B",

    fontSize: 8,

    marginTop: 2,
  },

  liveButton: {
    minWidth: 42,
    height: 30,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#F0FDF4",

    borderRadius: 15,

    paddingHorizontal: 8,
  },

  liveDot: {
    width: 6,
    height: 6,

    borderRadius: 3,

    backgroundColor: "#22C55E",

    marginRight: 4,
  },

  liveText: {
    color: "#15803D",

    fontSize: 7,
    fontWeight: "800",
  },

  /* SCAN HERO */

  scanCard: {
    minHeight: 350,

    backgroundColor: "#0F3D8C",

    borderRadius: 30,

    padding: 22,

    alignItems: "center",

    overflow: "hidden",

    marginBottom: 28,

    shadowColor: "#1D4ED8",
    shadowOpacity: 0.18,
    shadowRadius: 18,

    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 7,
  },

  scanGlowOne: {
    position: "absolute",

    width: 240,
    height: 240,

    borderRadius: 120,

    backgroundColor:
      "rgba(59,130,246,0.30)",

    top: -110,
    right: -80,
  },

  scanGlowTwo: {
    position: "absolute",

    width: 200,
    height: 200,

    borderRadius: 100,

    backgroundColor:
      "rgba(124,58,237,0.18)",

    bottom: -90,
    left: -80,
  },

  scanBadge: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor:
      "rgba(255,255,255,0.12)",

    borderRadius: 30,

    paddingHorizontal: 11,
    paddingVertical: 6,
  },

  scanBadgeText: {
    color: "#DBEAFE",

    fontSize: 8,
    fontWeight: "800",

    letterSpacing: 1,

    marginLeft: 5,
  },

  radarOuter: {
    width: 145,
    height: 145,

    borderRadius: 73,

    borderWidth: 1,
    borderColor:
      "rgba(255,255,255,0.12)",

    alignItems: "center",
    justifyContent: "center",

    marginTop: 20,
  },

  radarMiddle: {
    width: 116,
    height: 116,

    borderRadius: 58,

    borderWidth: 1,
    borderColor:
      "rgba(255,255,255,0.18)",

    backgroundColor:
      "rgba(255,255,255,0.05)",

    alignItems: "center",
    justifyContent: "center",
  },

  radarInner: {
    width: 78,
    height: 78,

    borderRadius: 39,

    backgroundColor:
      "rgba(255,255,255,0.12)",

    alignItems: "center",
    justifyContent: "center",
  },

  scanTitle: {
    color: "#FFFFFF",

    fontSize: 18,
    fontWeight: "800",

    marginTop: 15,
  },

  scanDescription: {
    color:
      "rgba(255,255,255,0.70)",

    fontSize: 9,
    lineHeight: 15,

    textAlign: "center",

    maxWidth: 280,

    marginTop: 6,
  },

  scanProgressHeader: {
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 19,
    marginBottom: 7,
  },

  scanProgressLabel: {
    color:
      "rgba(255,255,255,0.60)",

    fontSize: 7,
    fontWeight: "800",

    letterSpacing: 0.8,
  },

  scanProgressValue: {
    color: "#FFFFFF",

    fontSize: 8,
    fontWeight: "800",
  },

  scanProgressTrack: {
    width: "100%",
    height: 6,

    borderRadius: 3,

    backgroundColor:
      "rgba(255,255,255,0.15)",

    overflow: "hidden",
  },

  scanProgressFill: {
    height: "100%",

    backgroundColor: "#60A5FA",

    borderRadius: 3,
  },

  currentCheckText: {
    color: "#BFDBFE",

    fontSize: 8,

    marginTop: 8,
  },

  completedBadge: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor:
      "rgba(34,197,94,0.15)",

    borderRadius: 20,

    paddingHorizontal: 10,
    paddingVertical: 6,

    marginTop: 14,
  },

  completedBadgeText: {
    color: "#86EFAC",

    fontSize: 7,
    fontWeight: "800",

    marginLeft: 5,
  },

  /* SECTIONS */

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

  updatedText: {
    color: "#94A3B8",

    fontSize: 8,
  },

  /* RISK */

  riskCard: {
    backgroundColor: "#FFFFFF",

    borderRadius: 22,

    padding: 17,

    marginBottom: 28,

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  riskTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  riskLabel: {
    color: "#64748B",

    fontSize: 8,
    fontWeight: "800",

    letterSpacing: 0.8,
  },

  riskValueRow: {
    flexDirection: "row",
    alignItems: "flex-end",

    marginTop: 5,
  },

  riskValue: {
    color: "#16A34A",

    fontSize: 31,
    fontWeight: "900",

    lineHeight: 35,
  },

  riskMax: {
    color: "#94A3B8",

    fontSize: 10,
    fontWeight: "600",

    marginBottom: 4,
    marginLeft: 2,
  },

  lowRiskBadge: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#DCFCE7",

    borderRadius: 20,

    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  lowRiskDot: {
    width: 6,
    height: 6,

    borderRadius: 3,

    backgroundColor: "#22C55E",

    marginRight: 5,
  },

  lowRiskText: {
    color: "#15803D",

    fontSize: 7,
    fontWeight: "800",
  },

  riskScale: {
    height: 7,

    borderRadius: 4,

    backgroundColor: "#E2E8F0",

    marginTop: 16,

    overflow: "hidden",
  },

  riskIndicator: {
    width: "8%",
    height: "100%",

    borderRadius: 4,

    backgroundColor: "#22C55E",
  },

  scaleLabels: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 6,
  },

  scaleText: {
    color: "#94A3B8",

    fontSize: 7,
  },

  riskDivider: {
    height: 1,

    backgroundColor: "#F1F5F9",

    marginVertical: 14,
  },

  riskFooter: {
    flexDirection: "row",
    alignItems: "center",
  },

  riskFooterText: {
    flex: 1,

    color: "#475569",

    fontSize: 8,
    lineHeight: 13,

    marginLeft: 7,
  },

  /* ANALYSIS */

  checkCountBadge: {
    backgroundColor: "#EFF6FF",

    borderRadius: 15,

    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  checkCountText: {
    color: "#2563EB",

    fontSize: 7,
    fontWeight: "800",
  },

  analysisContainer: {
    backgroundColor: "#FFFFFF",

    borderRadius: 22,

    paddingHorizontal: 15,

    marginBottom: 28,

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  analysisItem: {
    minHeight: 88,

    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 12,
  },

  analysisIcon: {
    width: 42,
    height: 42,

    borderRadius: 14,

    backgroundColor: "#F8FAFC",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 11,
  },

  analysisIconActive: {
    backgroundColor: "#EFF6FF",
  },

  analysisIconComplete: {
    backgroundColor: "#F0FDF4",
  },

  analysisContent: {
    flex: 1,
  },

  analysisTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  analysisTitle: {
    color: "#0F172A",

    fontSize: 10,
    fontWeight: "800",
  },

  analysisDescription: {
    color: "#64748B",

    fontSize: 8,
    lineHeight: 13,

    marginTop: 4,

    paddingRight: 5,
  },

  resultBadge: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F0FDF4",

    borderRadius: 14,

    paddingHorizontal: 7,
    paddingVertical: 4,
  },

  resultText: {
    color: "#15803D",

    fontSize: 7,
    fontWeight: "700",

    marginLeft: 3,
  },

  analysingText: {
    color: "#2563EB",

    fontSize: 7,
    fontWeight: "700",
  },

  pendingText: {
    color: "#94A3B8",

    fontSize: 7,
  },

  analysisDivider: {
    height: 1,

    backgroundColor: "#F1F5F9",

    marginLeft: 53,
  },

  /* AI */

  aiBadge: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F3E8FF",

    borderRadius: 15,

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

    marginBottom: 18,

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  aiHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  aiIcon: {
    width: 43,
    height: 43,

    borderRadius: 14,

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

  aiInsightBox: {
    backgroundColor: "#F8FAFC",

    borderRadius: 15,

    paddingHorizontal: 12,
    paddingVertical: 8,

    marginTop: 13,
  },

  aiInsightRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    minHeight: 29,
  },

  aiInsightLabel: {
    color: "#64748B",

    fontSize: 8,
  },

  aiInsightValue: {
    color: "#16A34A",

    fontSize: 8,
    fontWeight: "800",
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
    color: "#2563EB",

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
    width: "98%",
    height: "100%",

    borderRadius: 3,

    backgroundColor: "#2563EB",
  },

  /* ACTIONS */

  primaryButton: {
    height: 54,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#2563EB",

    borderRadius: 18,

    marginBottom: 10,

    shadowColor: "#2563EB",
    shadowOpacity: 0.18,
    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 4,
  },

  primaryButtonText: {
    color: "#FFFFFF",

    fontSize: 11,
    fontWeight: "800",

    marginLeft: 8,
  },

  secondaryButton: {
    height: 54,

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    paddingHorizontal: 15,

    borderWidth: 1,
    borderColor: "#DBEAFE",
  },

  secondaryButtonText: {
    flex: 1,

    color: "#2563EB",

    fontSize: 10,
    fontWeight: "800",

    marginLeft: 8,
  },

  securityFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    marginTop: 18,
  },

  securityFooterText: {
    color: "#94A3B8",

    fontSize: 7,

    marginLeft: 5,
  },

  bottomSpace: {
    height: 35,
  },
});