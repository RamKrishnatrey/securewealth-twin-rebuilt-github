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
    fontSize: 20,
    fontWeight: "900",
  },

  pageSubtitle: {
    color: "#64748B",
    fontSize: 8,
    lineHeight: 13,
    marginTop: 4,
  },

  /* CURRENT */

  currentCard: {
    backgroundColor: "#172554",
    borderRadius: 23,
    padding: 17,
    marginBottom: 26,
  },

  currentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  currentLabel: {
    color: "rgba(255,255,255,0.45)",
    fontSize: 6,
    fontWeight: "800",
  },

  currentTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "900",
    marginTop: 4,
  },

  activeBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(34,197,94,0.15)",
    borderRadius: 14,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  activeDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#4ADE80",
    marginRight: 4,
  },

  activeText: {
    color: "#BBF7D0",
    fontSize: 6,
    fontWeight: "900",
  },

  currentStats: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },

  currentStat: {
    flex: 1,
    alignItems: "center",
  },

  currentDivider: {
    width: 1,
    height: 28,
    backgroundColor:
      "rgba(255,255,255,0.13)",
  },

  currentStatLabel: {
    color: "rgba(255,255,255,0.43)",
    fontSize: 6,
    fontWeight: "800",
  },

  currentStatValue: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "900",
    marginTop: 4,
  },

  currentTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor:
      "rgba(255,255,255,0.15)",
    overflow: "hidden",
    marginTop: 15,
  },

  currentFill: {
    height: "100%",
    borderRadius: 3,
    backgroundColor: "#60A5FA",
  },

  /* COMMON */

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

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 12,
  },

  inputLabel: {
    color: "#64748B",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 0.5,
    marginTop: 16,
    marginBottom: 7,
  },

  /* SELECTOR */

  selector: {
    minHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 13,
  },

  disabledSelector: {
    backgroundColor: "#F8FAFC",
  },

  selectorIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  selectorContent: {
    flex: 1,
  },

  selectorLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  selectorValue: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "800",
    marginTop: 3,
  },

  /* CATEGORY MENU */

  categoryMenu: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 13,
    marginTop: 8,
  },

  categoryOption: {
    minHeight: 59,
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
  },

  categoryOptionFirst: {
    borderTopWidth: 0,
  },

  categoryOptionIcon: {
    width: 37,
    height: 37,
    borderRadius: 12,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  categoryOptionIconSelected: {
    backgroundColor: "#EFF6FF",
  },

  categoryOptionText: {
    flex: 1,
    color: "#475569",
    fontSize: 10,
    fontWeight: "700",
  },

  categoryOptionTextSelected: {
    color: "#2563EB",
    fontWeight: "900",
  },

  /* AMOUNT */

  amountInputContainer: {
    minHeight: 64,
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  currencySymbol: {
    color: "#2563EB",
    fontSize: 21,
    fontWeight: "900",
  },

  amountInput: {
    flex: 1,
    color: "#0F172A",
    fontSize: 19,
    fontWeight: "900",
    marginLeft: 8,
  },

  amountPreview: {
    color: "#64748B",
    fontSize: 8,
    fontWeight: "700",
  },

  quickAmounts: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 9,
    marginBottom: 12,
  },

  quickAmount: {
    width: "23%",
    height: 37,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: "center",
    justifyContent: "center",
  },

  quickAmountSelected: {
    backgroundColor: "#EFF6FF",
    borderColor: "#BFDBFE",
  },

  quickAmountText: {
    color: "#64748B",
    fontSize: 8,
    fontWeight: "800",
  },

  quickAmountTextSelected: {
    color: "#2563EB",
  },

  /* THRESHOLD */

  thresholdBadge: {
    backgroundColor: "#FFFBEB",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  thresholdBadgeText: {
    color: "#D97706",
    fontSize: 8,
    fontWeight: "900",
  },

  thresholdCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 15,
    marginBottom: 17,
  },

  thresholdTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  thresholdIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#FFFBEB",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  thresholdContent: {
    flex: 1,
  },

  thresholdTitle: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "900",
  },

  thresholdSubtitle: {
    color: "#64748B",
    fontSize: 7,
    lineHeight: 11,
    marginTop: 3,
  },

  thresholdOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  thresholdOption: {
    width: "31%",
    minHeight: 55,
    borderRadius: 14,
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: "center",
    justifyContent: "center",
  },

  thresholdOptionSelected: {
    backgroundColor: "#EFF6FF",
    borderColor: "#93C5FD",
  },

  thresholdOptionValue: {
    color: "#475569",
    fontSize: 12,
    fontWeight: "900",
  },

  thresholdOptionValueSelected: {
    color: "#2563EB",
  },

  thresholdOptionLabel: {
    color: "#94A3B8",
    fontSize: 6,
    marginTop: 2,
  },

  thresholdOptionLabelSelected: {
    color: "#2563EB",
  },

  alertPreview: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFBEB",
    borderRadius: 13,
    padding: 10,
    marginTop: 13,
  },

  alertPreviewText: {
    flex: 1,
    color: "#B45309",
    fontSize: 7,
    lineHeight: 11,
    marginLeft: 7,
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

  aiConfidence: {
    color: "#7C3AED",
    fontSize: 9,
    fontWeight: "900",
  },

  aiDescription: {
    color: "#475569",
    fontSize: 9,
    lineHeight: 16,
    marginTop: 14,
  },

  comparisonBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    borderRadius: 16,
    padding: 13,
    marginTop: 15,
  },

  comparisonItem: {
    flex: 1,
  },

  comparisonRight: {
    alignItems: "flex-end",
  },

  comparisonLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  comparisonValue: {
    color: "#64748B",
    fontSize: 12,
    fontWeight: "900",
    marginTop: 4,
  },

  newComparisonValue: {
    color: "#2563EB",
    fontSize: 12,
    fontWeight: "900",
    marginTop: 4,
  },

  aiMessage: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#F8FAFC",
    borderRadius: 14,
    padding: 11,
    marginTop: 11,
  },

  aiMessageText: {
    flex: 1,
    color: "#475569",
    fontSize: 7,
    lineHeight: 12,
    marginLeft: 8,
  },

  aiStats: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
    marginTop: 15,
    paddingTop: 14,
  },

  aiStat: {
    flex: 1,
    alignItems: "center",
  },

  aiDivider: {
    width: 1,
    height: 28,
    backgroundColor: "#E2E8F0",
  },

  aiStatLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  aiStatValue: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "900",
    marginTop: 4,
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
    fontWeight: "900",
  },

  confidenceTrack: {
    height: 6,
    backgroundColor: "#E2E8F0",
    borderRadius: 3,
    overflow: "hidden",
  },

  confidenceFill: {
    width: "91%",
    height: "100%",
    backgroundColor: "#7C3AED",
    borderRadius: 3,
  },

  /* PROTECTION */

  protectionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 13,
    marginBottom: 20,
  },

  protectionIcon: {
    width: 41,
    height: 41,
    borderRadius: 13,
    backgroundColor: "#F0FDF4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  protectionContent: {
    flex: 1,
  },

  protectionTitle: {
    color: "#0F172A",
    fontSize: 9,
    fontWeight: "800",
  },

  protectionDescription: {
    color: "#64748B",
    fontSize: 7,
    lineHeight: 11,
    marginTop: 3,
  },

  /* SAVE */

  saveButton: {
    minHeight: 68,
    borderRadius: 20,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  saveIcon: {
    width: 39,
    height: 39,
    borderRadius: 13,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  saveContent: {
    flex: 1,
  },

  saveTitle: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900",
  },

  saveSubtitle: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 7,
    marginTop: 3,
  },

  cancelButton: {
    height: 47,
    alignItems: "center",
    justifyContent: "center",
  },

  cancelText: {
    color: "#64748B",
    fontSize: 9,
    fontWeight: "700",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
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