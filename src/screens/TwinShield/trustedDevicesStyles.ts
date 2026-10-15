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

  deviceCount: {
    minWidth: 38,
    height: 30,
    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
  },

  deviceCountText: {
    color: "#2563EB",
    fontSize: 10,
    fontWeight: "900",
  },

  /* HERO */

  heroCard: {
    borderRadius: 28,
    backgroundColor: "#1D4ED8",
    padding: 21,
    marginBottom: 28,
    overflow: "hidden",
  },

  heroGlowOne: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    top: -100,
    right: -65,
    backgroundColor:
      "rgba(255,255,255,0.09)",
  },

  heroGlowTwo: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    bottom: -100,
    left: -60,
    backgroundColor:
      "rgba(124,58,237,0.25)",
  },

  heroTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  heroIcon: {
    width: 58,
    height: 58,
    borderRadius: 19,
    backgroundColor:
      "rgba(255,255,255,0.13)",
    alignItems: "center",
    justifyContent: "center",
  },

  protectedBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor:
      "rgba(34,197,94,0.17)",
  },

  protectedDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#86EFAC",
    marginRight: 5,
  },

  protectedBadgeText: {
    color: "#BBF7D0",
    fontSize: 7,
    fontWeight: "900",
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
    marginTop: 18,
  },

  heroDescription: {
    color: "rgba(255,255,255,0.72)",
    fontSize: 9,
    lineHeight: 15,
    maxWidth: 300,
    marginTop: 6,
  },

  heroStats: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 22,
    paddingTop: 17,
    borderTopWidth: 1,
    borderTopColor:
      "rgba(255,255,255,0.13)",
  },

  heroStat: {
    flex: 1,
    alignItems: "center",
  },

  heroStatValue: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
  },

  heroStatLabel: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 6,
    fontWeight: "700",
    marginTop: 4,
    textAlign: "center",
  },

  heroDivider: {
    width: 1,
    height: 28,
    backgroundColor:
      "rgba(255,255,255,0.14)",
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

  secureBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  secureBadgeText: {
    color: "#15803D",
    fontSize: 7,
    fontWeight: "800",
    marginLeft: 4,
  },

  /* DEVICE */

  deviceCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 12,
  },

  deviceTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  deviceIcon: {
    width: 49,
    height: 49,
    borderRadius: 16,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  deviceIconPurple: {
    backgroundColor: "#F5F3FF",
  },

  deviceContent: {
    flex: 1,
  },

  deviceTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  deviceName: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "800",
    marginRight: 7,
  },

  currentBadge: {
    borderRadius: 10,
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 6,
    paddingVertical: 3,
  },

  currentBadgeText: {
    color: "#2563EB",
    fontSize: 6,
    fontWeight: "900",
  },

  deviceDescription: {
    color: "#64748B",
    fontSize: 8,
    marginTop: 4,
  },

  deviceDivider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginVertical: 14,
  },

  deviceDetails: {
    backgroundColor: "#F8FAFC",
    borderRadius: 14,
    paddingHorizontal: 11,
    paddingVertical: 6,
  },

  detailRow: {
    minHeight: 29,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  detailLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  detailLabel: {
    color: "#64748B",
    fontSize: 8,
    marginLeft: 6,
  },

  detailValue: {
    color: "#334155",
    fontSize: 8,
    fontWeight: "700",
  },

  trustedStatus: {
    flexDirection: "row",
    alignItems: "center",
  },

  trustedDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#22C55E",
    marginRight: 5,
  },

  trustedStatusText: {
    color: "#15803D",
    fontSize: 8,
    fontWeight: "800",
  },

  removeButton: {
    height: 43,
    borderRadius: 14,
    backgroundColor: "#FEF2F2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },

  removeButtonText: {
    color: "#DC2626",
    fontSize: 9,
    fontWeight: "800",
    marginLeft: 6,
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
    marginBottom: 14,
  },

  aiTop: {
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

  aiContent: {
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

  intelligenceBox: {
    backgroundColor: "#F8FAFC",
    borderRadius: 14,
    paddingHorizontal: 11,
    paddingVertical: 7,
    marginTop: 13,
  },

  intelligenceRow: {
    minHeight: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  intelligenceLabel: {
    color: "#64748B",
    fontSize: 8,
  },

  intelligenceSafe: {
    color: "#16A34A",
    fontSize: 8,
    fontWeight: "800",
  },

  confidenceTop: {
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
    borderRadius: 3,
    backgroundColor: "#E2E8F0",
    overflow: "hidden",
  },

  confidenceFill: {
    width: "99%",
    height: "100%",
    backgroundColor: "#7C3AED",
    borderRadius: 3,
  },

  /* TIP */

  tipCard: {
    flexDirection: "row",
    backgroundColor: "#FFFBEB",
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: "#FDE68A",
  },

  tipIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  tipContent: {
    flex: 1,
  },

  tipTitle: {
    color: "#92400E",
    fontSize: 10,
    fontWeight: "800",
  },

  tipDescription: {
    color: "#A16207",
    fontSize: 8,
    lineHeight: 13,
    marginTop: 3,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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