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

  headerTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#0F172A",
    marginLeft: 6,
  },

  headerSubtitle: {
    fontSize: 9,
    color: "#64748B",
    marginTop: 2,
  },

  /* HERO */

  heroCard: {
    minHeight: 365,
    borderRadius: 30,
    backgroundColor: "#1D4ED8",
    padding: 22,
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 28,

    shadowColor: "#1D4ED8",
    shadowOpacity: 0.2,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 8,
  },

  heroGlowOne: {
    position: "absolute",
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: "rgba(99,102,241,0.35)",
    top: -100,
    right: -90,
  },

  heroGlowTwo: {
    position: "absolute",
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: "rgba(56,189,248,0.15)",
    bottom: -90,
    left: -70,
  },

  protectionBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.14)",
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },

  liveDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#4ADE80",
    marginRight: 7,
  },

  protectionBadgeText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },

  scoreCircleOuter: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  scoreCircleMiddle: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    alignItems: "center",
    justifyContent: "center",
  },

  scoreCircleInner: {
    width: 108,
    height: 108,
    borderRadius: 54,
    backgroundColor: "rgba(255,255,255,0.11)",
    alignItems: "center",
    justifyContent: "center",
  },

  scoreValue: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "900",
    lineHeight: 38,
    marginTop: 2,
  },

  scoreMax: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 9,
    fontWeight: "600",
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "800",
    marginTop: 15,
  },

  heroDescription: {
    color: "rgba(255,255,255,0.72)",
    fontSize: 10,
    lineHeight: 16,
    textAlign: "center",
    maxWidth: 280,
    marginTop: 6,
  },

  heroStatusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 17,
  },

  heroStatusItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  heroStatusText: {
    color: "#DBEAFE",
    fontSize: 8,
    fontWeight: "600",
    marginLeft: 5,
  },

  heroStatusDivider: {
    width: 1,
    height: 14,
    backgroundColor: "rgba(255,255,255,0.25)",
    marginHorizontal: 16,
  },

  /* SECTION */

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
  },

  sectionTitle: {
    color: "#0F172A",
    fontSize: 17,
    fontWeight: "800",
  },

  detailsText: {
    color: "#2563EB",
    fontSize: 10,
    fontWeight: "700",
  },

  aiBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3E8FF",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  aiBadgeText: {
    color: "#7C3AED",
    fontSize: 7,
    fontWeight: "800",
    marginLeft: 3,
  },

  /* INSIGHT */

  insightCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 17,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: "#E2E8F0",

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },

  insightTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  insightIcon: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: "#F0FDF4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  insightHeading: {
    flex: 1,
  },

  insightTitle: {
    color: "#0F172A",
    fontSize: 12,
    fontWeight: "800",
  },

  insightTime: {
    color: "#94A3B8",
    fontSize: 8,
    marginTop: 3,
  },

  safeBadge: {
    backgroundColor: "#DCFCE7",
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },

  safeBadgeText: {
    color: "#15803D",
    fontSize: 7,
    fontWeight: "800",
  },

  insightDescription: {
    color: "#475569",
    fontSize: 10,
    lineHeight: 17,
    marginTop: 14,
  },

  confidenceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 7,
  },

  confidenceLabel: {
    color: "#64748B",
    fontSize: 9,
  },

  confidenceValue: {
    color: "#2563EB",
    fontSize: 9,
    fontWeight: "800",
  },

  progressTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E2E8F0",
    overflow: "hidden",
  },

  progressFill: {
    width: "98%",
    height: "100%",
    borderRadius: 3,
    backgroundColor: "#2563EB",
  },

  /* STATS */

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  statCard: {
    width: "48.5%",
    minHeight: 150,
    backgroundColor: "#FFFFFF",
    borderRadius: 21,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  statIcon: {
    width: 38,
    height: 38,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
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

  orangeIconBackground: {
    backgroundColor: "#FFF7ED",
  },

  statValue: {
    color: "#0F172A",
    fontSize: 22,
    fontWeight: "900",
    marginTop: 12,
  },

  statLabel: {
    color: "#475569",
    fontSize: 9,
    fontWeight: "600",
    marginTop: 3,
  },

  statStatusGreen: {
    color: "#16A34A",
    fontSize: 8,
    fontWeight: "700",
    marginTop: 8,
  },

  statStatusBlue: {
    color: "#2563EB",
    fontSize: 8,
    fontWeight: "700",
    marginTop: 8,
  },

  statStatusPurple: {
    color: "#7C3AED",
    fontSize: 8,
    fontWeight: "700",
    marginTop: 8,
  },

  statStatusOrange: {
    color: "#D97706",
    fontSize: 8,
    fontWeight: "700",
    marginTop: 8,
  },

  /* QUICK SECURITY */

  quickGrid: {
    marginBottom: 22,
  },

  quickCard: {
    minHeight: 68,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingHorizontal: 13,
    marginBottom: 9,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  quickIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  quickContent: {
    flex: 1,
  },

  quickTitle: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "800",
  },

  quickSubtitle: {
    color: "#64748B",
    fontSize: 8,
    marginTop: 3,
  },

  /* ACTIVITY */

  activityContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 21,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  activityItem: {
    minHeight: 88,
    flexDirection: "row",
    alignItems: "center",
  },

  activitySuccessIcon: {
    width: 35,
    height: 35,
    borderRadius: 12,
    backgroundColor: "#F0FDF4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  activityContent: {
    flex: 1,
  },

  activityTitle: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "800",
  },

  activitySubtitle: {
    color: "#64748B",
    fontSize: 8,
    marginTop: 3,
  },

  activityTime: {
    color: "#94A3B8",
    fontSize: 7,
    marginTop: 4,
  },

  verifiedBadge: {
    backgroundColor: "#F0FDF4",
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  verifiedText: {
    color: "#16A34A",
    fontSize: 6,
    fontWeight: "800",
  },

  activityDivider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginLeft: 45,
  },

  /* FOOTER */

  securityFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  securityFooterText: {
    color: "#64748B",
    fontSize: 8,
    marginLeft: 5,
  },

  bottomSpace: {
    height: 40,
  },

  /* =========================
    SUSPICIOUS ACTIVITY
========================= */

threatAlertCard: {
  flexDirection: "row",
  backgroundColor: "#FFFFFF",

  borderRadius: 22,
  padding: 16,

  marginBottom: 28,

  borderWidth: 1,
  borderColor: "#FECACA",

  shadowColor: "#DC2626",
  shadowOpacity: 0.05,
  shadowRadius: 12,

  shadowOffset: {
    width: 0,
    height: 4,
  },

  elevation: 3,
},

threatAlertIcon: {
  width: 48,
  height: 48,

  borderRadius: 16,

  backgroundColor: "#FEF2F2",

  alignItems: "center",
  justifyContent: "center",

  marginRight: 12,
},

threatAlertContent: {
  flex: 1,
},

threatAlertTitleRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
},

threatAlertTitle: {
  flex: 1,

  color: "#0F172A",

  fontSize: 11,
  fontWeight: "800",

  paddingRight: 8,
},

highRiskChip: {
  backgroundColor: "#FEF2F2",

  borderRadius: 15,

  paddingHorizontal: 8,
  paddingVertical: 4,
},

highRiskChipText: {
  color: "#DC2626",

  fontSize: 7,
  fontWeight: "900",
},

threatMerchant: {
  color: "#334155",

  fontSize: 10,
  fontWeight: "700",

  marginTop: 6,
},

threatDescription: {
  color: "#64748B",

  fontSize: 8,

  marginTop: 4,
},

threatFooter: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  marginTop: 13,
},

threatScoreRow: {
  flexDirection: "row",
  alignItems: "center",
},

threatDot: {
  width: 6,
  height: 6,

  borderRadius: 3,

  backgroundColor: "#EF4444",

  marginRight: 5,
},

threatScoreText: {
  color: "#DC2626",

  fontSize: 8,
  fontWeight: "700",
},

reviewRow: {
  flexDirection: "row",
  alignItems: "center",
},

reviewText: {
  color: "#DC2626",

  fontSize: 8,
  fontWeight: "800",

  marginRight: 2,
},
});