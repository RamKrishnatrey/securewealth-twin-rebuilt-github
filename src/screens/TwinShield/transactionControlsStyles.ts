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
    color: "#64748B",
    fontSize: 8,
    marginTop: 2,
  },

  activeBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 15,
  },

  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#22C55E",
    marginRight: 5,
  },

  activeBadgeText: {
    color: "#15803D",
    fontSize: 7,
    fontWeight: "900",
  },

  /* HERO */

  heroCard: {
    backgroundColor: "#1D4ED8",
    borderRadius: 28,
    padding: 21,
    marginBottom: 28,
    overflow: "hidden",
  },

  heroGlowOne: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 110,
    top: -115,
    right: -70,
    backgroundColor:
      "rgba(255,255,255,0.09)",
  },

  heroGlowTwo: {
    position: "absolute",
    width: 190,
    height: 190,
    borderRadius: 95,
    bottom: -110,
    left: -70,
    backgroundColor:
      "rgba(124,58,237,0.26)",
  },

  heroTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  heroIcon: {
    width: 58,
    height: 58,
    borderRadius: 19,
    backgroundColor:
      "rgba(255,255,255,0.14)",
    alignItems: "center",
    justifyContent: "center",
  },

  protectionBadge: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    paddingHorizontal: 9,
    paddingVertical: 6,
    backgroundColor:
      "rgba(34,197,94,0.17)",
  },

  protectionBadgeText: {
    color: "#BBF7D0",
    fontSize: 7,
    fontWeight: "900",
    marginLeft: 4,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "900",
    marginTop: 18,
  },

  heroDescription: {
    color: "rgba(255,255,255,0.72)",
    fontSize: 9,
    lineHeight: 15,
    marginTop: 6,
    maxWidth: 305,
  },

  heroBottom: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor:
      "rgba(255,255,255,0.14)",
    paddingTop: 17,
    marginTop: 20,
  },

  heroLimitLabel: {
    color: "rgba(255,255,255,0.58)",
    fontSize: 7,
    fontWeight: "800",
  },

  heroLimitValue: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "900",
    marginTop: 4,
  },

  heroChangeButton: {
    backgroundColor:
      "rgba(255,255,255,0.14)",
    borderRadius: 14,
    paddingHorizontal: 13,
    paddingVertical: 8,
  },

  heroChangeButtonText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "800",
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

  secureChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginBottom: 12,
  },

  secureChipText: {
    color: "#15803D",
    fontSize: 7,
    fontWeight: "800",
    marginLeft: 4,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 28,
  },

  divider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginLeft: 56,
  },

  /* LIMITS */

  limitRow: {
    minHeight: 78,
    flexDirection: "row",
    alignItems: "center",
  },

  settingIconBlue: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  settingIconPurple: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#F5F3FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  settingIconGreen: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#F0FDF4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  settingContent: {
    flex: 1,
    paddingRight: 8,
  },

  settingTitle: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "800",
  },

  settingSubtitle: {
    color: "#64748B",
    fontSize: 8,
    lineHeight: 12,
    marginTop: 3,
  },

  limitRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  limitValue: {
    color: "#2563EB",
    fontSize: 10,
    fontWeight: "800",
    marginRight: 4,
  },

  staticLimitValue: {
    color: "#334155",
    fontSize: 10,
    fontWeight: "800",
  },

  /* PAYMENT */

  toggleRow: {
    minHeight: 78,
    flexDirection: "row",
    alignItems: "center",
  },

  paymentIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  /* BENEFICIARY */

  coolingRow: {
    minHeight: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  coolingLabel: {
    color: "#94A3B8",
    fontSize: 7,
    fontWeight: "800",
  },

  coolingValue: {
    color: "#0F172A",
    fontSize: 12,
    fontWeight: "800",
    marginTop: 4,
  },

  lockChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  lockChipText: {
    color: "#15803D",
    fontSize: 7,
    fontWeight: "800",
    marginLeft: 4,
  },

  /* AI */

  aiBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F3FF",
    borderRadius: 14,
    paddingHorizontal: 7,
    paddingVertical: 4,
    marginBottom: 12,
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
    borderColor: "#DDD6FE",
    marginBottom: 14,
  },

  aiTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  aiIcon: {
    width: 45,
    height: 45,
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

  recommendationBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F8FAFC",
    borderRadius: 16,
    padding: 13,
    marginTop: 14,
  },

  recommendationLabel: {
    color: "#94A3B8",
    fontSize: 7,
    fontWeight: "800",
  },

  recommendationValue: {
    color: "#0F172A",
    fontSize: 19,
    fontWeight: "900",
    marginTop: 3,
  },

  recommendedBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F3FF",
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },

  recommendedBadgeText: {
    color: "#7C3AED",
    fontSize: 6,
    fontWeight: "900",
    marginLeft: 4,
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
    borderRadius: 3,
    backgroundColor: "#7C3AED",
  },

  applyButton: {
    height: 48,
    borderRadius: 15,
    backgroundColor: "#7C3AED",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },

  applyButtonText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "800",
    marginLeft: 6,
  },

  /* INFO */

  infoCard: {
    flexDirection: "row",
    backgroundColor: "#EFF6FF",
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#DBEAFE",
    padding: 13,
  },

  infoIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  infoText: {
    flex: 1,
    color: "#475569",
    fontSize: 8,
    lineHeight: 13,
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

  /* MODAL */

  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },

  modalBackdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(15,23,42,0.45)",
  },

  modalSheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 32,
  },

  modalHandle: {
    width: 42,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#CBD5E1",
    alignSelf: "center",
    marginBottom: 18,
  },

  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  modalTitle: {
    color: "#0F172A",
    fontSize: 17,
    fontWeight: "900",
  },

  modalSubtitle: {
    color: "#64748B",
    fontSize: 9,
    marginTop: 3,
  },

  modalClose: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
  },

  limitOption: {
    minHeight: 62,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  limitOptionSelected: {
    backgroundColor: "#EFF6FF",
    borderColor: "#93C5FD",
  },

  limitOptionValue: {
    color: "#334155",
    fontSize: 13,
    fontWeight: "800",
  },

  limitOptionValueSelected: {
    color: "#2563EB",
  },

  aiRecommendedText: {
    color: "#7C3AED",
    fontSize: 7,
    fontWeight: "700",
    marginTop: 2,
  },

  unselectedCircle: {
    width: 21,
    height: 21,
    borderRadius: 10.5,
    borderWidth: 1.5,
    borderColor: "#CBD5E1",
  },

  modalSecurityText: {
    color: "#64748B",
    fontSize: 8,
    lineHeight: 13,
    textAlign: "center",
    marginTop: 8,
  },
});