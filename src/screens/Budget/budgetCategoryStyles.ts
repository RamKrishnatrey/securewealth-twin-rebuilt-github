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
    paddingTop: 19,
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

  /* INTRO */

  categoryIntro: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  categoryHeading: {
    flex: 1,
  },

  categoryLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  categoryTitle: {
    color: "#0F172A",
    fontSize: 19,
    fontWeight: "900",
    marginTop: 3,
  },

  categorySubtitle: {
    color: "#64748B",
    fontSize: 8,
    marginTop: 3,
  },

  statusBadge: {
    borderRadius: 14,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  statusBadgeHealthy: {
    backgroundColor: "#F0FDF4",
  },

  statusBadgeWarning: {
    backgroundColor: "#FFFBEB",
  },

  statusBadgeDanger: {
    backgroundColor: "#FEF2F2",
  },

  statusBadgeText: {
    fontSize: 6,
    fontWeight: "900",
  },

  statusTextHealthy: {
    color: "#16A34A",
  },

  statusTextWarning: {
    color: "#D97706",
  },

  statusTextDanger: {
    color: "#DC2626",
  },

  /* HERO */

  heroCard: {
    backgroundColor: "#172554",
    borderRadius: 27,
    padding: 20,
    overflow: "hidden",
    marginBottom: 27,
  },

  heroGlowOne: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    top: -100,
    right: -45,
    backgroundColor:
      "rgba(37,99,235,0.32)",
  },

  heroGlowTwo: {
    position: "absolute",
    width: 160,
    height: 160,
    borderRadius: 80,
    bottom: -105,
    left: -40,
    backgroundColor:
      "rgba(124,58,237,0.20)",
  },

  heroTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  heroLabel: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 7,
    fontWeight: "800",
  },

  heroAmount: {
    color: "#FFFFFF",
    fontSize: 29,
    fontWeight: "900",
    marginTop: 4,
  },

  heroTarget: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 8,
    marginTop: 2,
  },

  percentageCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor:
      "rgba(255,255,255,0.10)",
    borderWidth: 1,
    borderColor:
      "rgba(255,255,255,0.16)",
    alignItems: "center",
    justifyContent: "center",
  },

  percentageValue: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "900",
  },

  percentageLabel: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 5,
    fontWeight: "800",
    marginTop: 1,
  },

  progressTrack: {
    height: 8,
    backgroundColor:
      "rgba(255,255,255,0.15)",
    borderRadius: 4,
    overflow: "hidden",
    marginTop: 20,
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#60A5FA",
    borderRadius: 4,
  },

  progressDanger: {
    backgroundColor: "#F59E0B",
  },

  heroStats: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  heroStat: {
    flex: 1,
    alignItems: "center",
  },

  heroDivider: {
    width: 1,
    height: 31,
    backgroundColor:
      "rgba(255,255,255,0.13)",
  },

  heroStatLabel: {
    color: "rgba(255,255,255,0.43)",
    fontSize: 6,
    fontWeight: "800",
  },

  heroStatValue: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900",
    marginTop: 4,
  },

  /* SECTION */

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

  sectionSubtitle: {
    color: "#94A3B8",
    fontSize: 7,
    marginTop: 3,
  },

  seeAll: {
    color: "#2563EB",
    fontSize: 8,
    fontWeight: "800",
  },

  liveBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 13,
  },

  liveDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#22C55E",
    marginRight: 4,
  },

  liveText: {
    color: "#15803D",
    fontSize: 6,
    fontWeight: "900",
  },

  /* PACE */

  paceCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 16,
    marginBottom: 27,
  },

  paceTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  projectionIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  paceHeading: {
    flex: 1,
  },

  paceLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  paceAmount: {
    color: "#0F172A",
    fontSize: 17,
    fontWeight: "900",
    marginTop: 3,
  },

  projectionBadge: {
    borderRadius: 14,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  projectionHealthy: {
    backgroundColor: "#F0FDF4",
  },

  projectionDanger: {
    backgroundColor: "#FEF2F2",
  },

  projectionBadgeText: {
    fontSize: 8,
    fontWeight: "900",
  },

  projectionHealthyText: {
    color: "#16A34A",
  },

  projectionDangerText: {
    color: "#DC2626",
  },

  projectionComparison: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    borderRadius: 16,
    padding: 13,
    marginTop: 15,
  },

  comparisonColumn: {
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
    color: "#0F172A",
    fontSize: 12,
    fontWeight: "900",
    marginTop: 4,
  },

  healthyValue: {
    color: "#16A34A",
  },

  dangerValue: {
    color: "#DC2626",
  },

  warningBox: {
    flexDirection: "row",
    backgroundColor: "#FFFBEB",
    borderRadius: 16,
    padding: 12,
    marginTop: 13,
  },

  warningIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#FEF3C7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  warningContent: {
    flex: 1,
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
    marginTop: 3,
  },

  healthyBox: {
    flexDirection: "row",
    backgroundColor: "#F0FDF4",
    borderRadius: 16,
    padding: 12,
    marginTop: 13,
  },

  healthyIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  healthyTitle: {
    color: "#14532D",
    fontSize: 9,
    fontWeight: "800",
  },

  healthyDescription: {
    color: "#15803D",
    fontSize: 7,
    lineHeight: 12,
    marginTop: 3,
  },

  /* AI */

  aiBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F3FF",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 13,
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
    marginBottom: 27,
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

  aiConfidenceBadge: {
    backgroundColor: "#F5F3FF",
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },

  aiConfidenceText: {
    color: "#7C3AED",
    fontSize: 8,
    fontWeight: "900",
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
    borderRadius: 16,
    padding: 12,
    marginTop: 14,
  },

  recommendationIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#DBEAFE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  recommendationContent: {
    flex: 1,
  },

  recommendationTitle: {
    color: "#1E40AF",
    fontSize: 9,
    fontWeight: "800",
  },

  recommendationText: {
    color: "#1D4ED8",
    fontSize: 7,
    lineHeight: 12,
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
    fontWeight: "900",
  },

  confidenceTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E2E8F0",
    overflow: "hidden",
  },

  confidenceFill: {
    width: "93%",
    height: "100%",
    borderRadius: 3,
    backgroundColor: "#7C3AED",
  },

  /* TRANSACTIONS */

  transactionsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 15,
    marginBottom: 24,
  },

  transactionRow: {
    minHeight: 72,
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
  },

  transactionRowFirst: {
    borderTopWidth: 0,
  },

  transactionIcon: {
    width: 41,
    height: 41,
    borderRadius: 13,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  transactionContent: {
    flex: 1,
  },

  transactionTitle: {
    color: "#0F172A",
    fontSize: 9,
    fontWeight: "800",
  },

  transactionSubtitle: {
    color: "#94A3B8",
    fontSize: 7,
    marginTop: 3,
  },

  transactionAmount: {
    color: "#DC2626",
    fontSize: 9,
    fontWeight: "900",
  },

  /* EDIT */

  editButton: {
    minHeight: 68,
    borderRadius: 20,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  editIcon: {
    width: 39,
    height: 39,
    borderRadius: 13,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  editContent: {
    flex: 1,
  },

  editTitle: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900",
  },

  editSubtitle: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 7,
    marginTop: 3,
  },

  /* FOOTER */

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
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