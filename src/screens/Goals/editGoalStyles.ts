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
    paddingTop: 20,
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

  headerPlaceholder: {
    width: 42,
  },

  /* INTRO */

  intro: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  introIcon: {
    width: 54,
    height: 54,
    borderRadius: 17,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  introContent: {
    flex: 1,
  },

  pageTitle: {
    color: "#0F172A",
    fontSize: 21,
    fontWeight: "900",
  },

  pageSubtitle: {
    color: "#64748B",
    fontSize: 9,
    lineHeight: 14,
    marginTop: 4,
  },

  /* STATUS */

  statusCard: {
    backgroundColor: "#172554",
    borderRadius: 24,
    padding: 18,
    marginBottom: 27,
  },

  statusTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  statusLabel: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 6,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  statusTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
    marginTop: 4,
  },

  onTrackBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:
      "rgba(34,197,94,0.15)",
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 14,
  },

  onTrackDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#4ADE80",
    marginRight: 4,
  },

  onTrackText: {
    color: "#BBF7D0",
    fontSize: 6,
    fontWeight: "900",
  },

  statusProgressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    marginBottom: 7,
  },

  statusProgressLabel: {
    color: "rgba(255,255,255,0.58)",
    fontSize: 7,
  },

  statusProgressValue: {
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "900",
  },

  statusTrack: {
    height: 7,
    backgroundColor:
      "rgba(255,255,255,0.14)",
    borderRadius: 4,
    overflow: "hidden",
  },

  statusFill: {
    height: "100%",
    backgroundColor: "#60A5FA",
    borderRadius: 4,
  },

  statusAmounts: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },

  amountRight: {
    alignItems: "flex-end",
  },

  amountLabel: {
    color: "rgba(255,255,255,0.45)",
    fontSize: 6,
    fontWeight: "800",
  },

  amountValue: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "900",
    marginTop: 3,
  },

  /* COMMON */

  sectionTitle: {
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 13,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  inputLabel: {
    color: "#64748B",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 0.5,
    marginBottom: 7,
    marginTop: 4,
  },

  /* INPUTS */

  inputContainer: {
    minHeight: 57,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    color: "#0F172A",
    fontSize: 13,
    fontWeight: "700",
    marginLeft: 10,
  },

  amountInputContainer: {
    minHeight: 62,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  currencySymbol: {
    color: "#2563EB",
    fontSize: 20,
    fontWeight: "900",
  },

  amountInput: {
    flex: 1,
    color: "#0F172A",
    fontSize: 18,
    fontWeight: "900",
    marginLeft: 8,
  },

  inputPreview: {
    color: "#64748B",
    fontSize: 8,
    fontWeight: "700",
  },

  monthSuffix: {
    color: "#64748B",
    fontSize: 8,
    fontWeight: "700",
  },

  /* LIVE */

  liveBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 13,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginBottom: 13,
  },

  liveDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#22C55E",
    marginRight: 4,
  },

  liveText: {
    color: "#15803D",
    fontSize: 6,
    fontWeight: "900",
  },

  /* AI */

  aiCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 23,
    padding: 17,
    borderWidth: 1,
    borderColor: "#DDD6FE",
    marginBottom: 16,
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

  aiHeaderContent: {
    flex: 1,
  },

  aiTitle: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "900",
  },

  aiSubtitle: {
    color: "#7C3AED",
    fontSize: 7,
    marginTop: 3,
  },

  confidenceTop: {
    color: "#7C3AED",
    fontSize: 11,
    fontWeight: "900",
  },

  comparisonCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F8FAFC",
    borderRadius: 18,
    padding: 14,
    marginTop: 16,
  },

  comparisonItem: {
    flex: 1,
    alignItems: "center",
  },

  comparisonArrow: {
    width: 40,
    alignItems: "center",
  },

  comparisonLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  comparisonValue: {
    color: "#64748B",
    fontSize: 20,
    fontWeight: "900",
    marginTop: 4,
  },

  newComparisonValue: {
    color: "#16A34A",
    fontSize: 20,
    fontWeight: "900",
    marginTop: 4,
  },

  comparisonSuffix: {
    color: "#94A3B8",
    fontSize: 7,
    marginTop: 1,
  },

  /* IMPACT */

  positiveImpact: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 16,
    padding: 12,
    marginTop: 12,
  },

  positiveImpactIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  impactContent: {
    flex: 1,
  },

  positiveTitle: {
    color: "#14532D",
    fontSize: 9,
    fontWeight: "800",
  },

  positiveDescription: {
    color: "#15803D",
    fontSize: 7,
    lineHeight: 12,
    marginTop: 2,
  },

  warningImpact: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFBEB",
    borderRadius: 16,
    padding: 12,
    marginTop: 12,
  },

  warningImpactIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#FEF3C7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  warningTitle: {
    color: "#92400E",
    fontSize: 9,
    fontWeight: "800",
  },

  warningDescription: {
    color: "#B45309",
    fontSize: 7,
    lineHeight: 12,
    marginTop: 2,
  },

  neutralImpact: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFF6FF",
    borderRadius: 16,
    padding: 12,
    marginTop: 12,
  },

  neutralText: {
    flex: 1,
    color: "#1D4ED8",
    fontSize: 8,
    lineHeight: 13,
    marginLeft: 8,
  },

  /* AI STATS */

  aiStats: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
  },

  aiStat: {
    flex: 1,
    alignItems: "center",
  },

  aiDivider: {
    width: 1,
    height: 30,
    backgroundColor: "#E2E8F0",
  },

  aiStatLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  aiStatValue: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "900",
    marginTop: 4,
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

  /* SAFETY */

  safetyCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 20,
  },

  safetyIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#F0FDF4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  safetyContent: {
    flex: 1,
  },

  safetyTitle: {
    color: "#0F172A",
    fontSize: 9,
    fontWeight: "800",
  },

  safetyDescription: {
    color: "#64748B",
    fontSize: 7,
    lineHeight: 11,
    marginTop: 3,
    maxWidth: 250,
  },

  /* BUTTONS */

  saveButton: {
    minHeight: 68,
    borderRadius: 20,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 19,
  },

  saveButtonTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
  },

  saveButtonSubtitle: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 7,
    marginTop: 3,
  },

  saveArrow: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  cancelButton: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },

  cancelText: {
    color: "#64748B",
    fontSize: 10,
    fontWeight: "700",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },

  footerText: {
    color: "#94A3B8",
    fontSize: 7,
    marginLeft: 5,
  },

  bottomSpace: {
    height: 30,
  },
});