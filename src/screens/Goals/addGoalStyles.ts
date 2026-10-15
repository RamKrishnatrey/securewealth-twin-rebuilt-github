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
    paddingHorizontal: 14,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    fontSize: 16,
    fontWeight: "800",
    color: "#0F172A",
  },

  headerSubtitle: {
    fontSize: 8,
    color: "#64748B",
    marginTop: 2,
  },

  headerPlaceholder: {
    width: 42,
  },

  /* INTRO */

  introRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 26,
  },

  pageTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: "#0F172A",
  },

  pageSubtitle: {
    fontSize: 10,
    color: "#64748B",
    lineHeight: 16,
    marginTop: 5,
    maxWidth: 260,
  },

  twinBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F3FF",
    borderRadius: 16,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  twinBadgeText: {
    color: "#7C3AED",
    fontSize: 7,
    fontWeight: "900",
    marginLeft: 4,
  },

  /* TITLES */

  fieldTitle: {
    color: "#0F172A",
    fontSize: 15,
    fontWeight: "800",
  },

  fieldHint: {
    color: "#94A3B8",
    fontSize: 8,
    marginTop: 3,
    marginBottom: 12,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
    marginBottom: 14,
  },

  sectionTitle: {
    color: "#0F172A",
    fontSize: 15,
    fontWeight: "800",
  },

  requiredText: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "900",
    letterSpacing: 0.6,
  },

  /* GOAL TYPES */

  goalTypeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  goalTypeCard: {
    width: "31.5%",
    minHeight: 102,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    position: "relative",
  },

  goalTypeCardActive: {
    borderColor: "#2563EB",
    backgroundColor: "#EFF6FF",
    borderWidth: 1.5,
  },

  goalTypeIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
  },

  goalTypeIconActive: {
    backgroundColor: "#2563EB",
  },

  goalTypeText: {
    color: "#64748B",
    fontSize: 8,
    fontWeight: "700",
    marginTop: 8,
  },

  goalTypeTextActive: {
    color: "#1D4ED8",
    fontWeight: "900",
  },

  selectedCheck: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
  },

  /* INPUTS */

  inputLabel: {
    color: "#64748B",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 0.5,
    marginBottom: 7,
    marginTop: 5,
  },

  inputContainer: {
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
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
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
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

  /* CURRENT PROGRESS */

  progressArea: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 13,
    borderWidth: 1,
    borderColor: "#F1F5F9",
    marginBottom: 24,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  progressLabel: {
    color: "#64748B",
    fontSize: 8,
  },

  progressValue: {
    color: "#2563EB",
    fontSize: 8,
    fontWeight: "900",
  },

  progressTrack: {
    height: 7,
    borderRadius: 4,
    backgroundColor: "#E2E8F0",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 4,
    backgroundColor: "#2563EB",
  },

  /* DATE */

  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 26,
  },

  dateCard: {
    width: "31.5%",
    minHeight: 72,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: "center",
    justifyContent: "center",
  },

  dateCardActive: {
    backgroundColor: "#EFF6FF",
    borderColor: "#2563EB",
    borderWidth: 1.5,
  },

  dateTitle: {
    color: "#475569",
    fontSize: 10,
    fontWeight: "800",
  },

  dateTitleActive: {
    color: "#1D4ED8",
  },

  dateMonths: {
    color: "#94A3B8",
    fontSize: 7,
    marginTop: 4,
  },

  dateMonthsActive: {
    color: "#60A5FA",
  },

  /* AI CARD */

  aiCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
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
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: "#F5F3FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  aiHeaderText: {
    flex: 1,
  },

  aiTitle: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "900",
  },

  aiSubtitle: {
    color: "#64748B",
    fontSize: 7,
    marginTop: 3,
  },

  liveBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 5,
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

  aiStats: {
    flexDirection: "row",
    marginTop: 18,
    marginBottom: 15,
  },

  aiStat: {
    flex: 1,
    alignItems: "center",
  },

  aiDivider: {
    width: 1,
    height: 38,
    backgroundColor: "#E2E8F0",
  },

  aiStatLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  aiStatValue: {
    color: "#0F172A",
    fontSize: 13,
    fontWeight: "900",
    marginTop: 5,
  },

  /* RECOMMENDED */

  recommendedCard: {
    backgroundColor: "#F0FDF4",
    borderRadius: 18,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  recommendedLabel: {
    color: "#15803D",
    fontSize: 6,
    fontWeight: "900",
  },

  recommendedValue: {
    color: "#14532D",
    fontSize: 23,
    fontWeight: "900",
    marginTop: 3,
  },

  recommendedSuffix: {
    color: "#16A34A",
    fontSize: 7,
    marginTop: 1,
  },

  recommendedIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
  },

  aiMessage: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FFFBEB",
    borderRadius: 14,
    padding: 11,
    marginTop: 13,
  },

  aiMessageText: {
    flex: 1,
    color: "#64748B",
    fontSize: 7,
    lineHeight: 12,
    marginLeft: 8,
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

  /* SMART PLAN */

  autoSaveCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 14,
    marginBottom: 20,
  },

  autoSaveIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  autoSaveContent: {
    flex: 1,
  },

  autoSaveTitle: {
    color: "#0F172A",
    fontSize: 9,
    fontWeight: "800",
  },

  autoSaveDescription: {
    color: "#64748B",
    fontSize: 7,
    lineHeight: 11,
    marginTop: 3,
    maxWidth: 250,
  },

  /* CREATE */

  createButton: {
    minHeight: 68,
    borderRadius: 20,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 19,
  },

  createButtonTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
  },

  createButtonSubtitle: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 7,
    marginTop: 3,
  },

  createArrow: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
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