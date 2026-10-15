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
    paddingTop: 18,
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

  /* MONTH */

  monthRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 17,
  },

  pageLabel: {
    color: "#94A3B8",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  pageTitle: {
    color: "#0F172A",
    fontSize: 21,
    fontWeight: "900",
    marginTop: 3,
  },

  monthSelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFF6FF",
    borderRadius: 15,
    paddingHorizontal: 11,
    paddingVertical: 9,
  },

  monthSelectorText: {
    color: "#2563EB",
    fontSize: 8,
    fontWeight: "800",
    marginHorizontal: 6,
  },

  /* HERO */

  heroCard: {
    backgroundColor: "#172554",
    borderRadius: 28,
    padding: 21,
    overflow: "hidden",
    marginBottom: 13,
  },

  heroGlowOne: {
    position: "absolute",
    width: 190,
    height: 190,
    borderRadius: 95,
    top: -100,
    right: -40,
    backgroundColor:
      "rgba(37,99,235,0.35)",
  },

  heroGlowTwo: {
    position: "absolute",
    width: 170,
    height: 170,
    borderRadius: 85,
    bottom: -100,
    left: -50,
    backgroundColor:
      "rgba(124,58,237,0.22)",
  },

  heroHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  heroLabel: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 7,
    fontWeight: "800",
  },

  heroAmount: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "900",
    marginTop: 4,
  },

  healthBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:
      "rgba(34,197,94,0.15)",
    borderRadius: 15,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  healthDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#4ADE80",
    marginRight: 5,
  },

  healthText: {
    color: "#BBF7D0",
    fontSize: 6,
    fontWeight: "900",
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
    marginBottom: 8,
  },

  progressLabel: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 7,
    fontWeight: "800",
  },

  progressPercentage: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "900",
  },

  progressTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor:
      "rgba(255,255,255,0.15)",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#60A5FA",
    borderRadius: 4,
  },

  heroStats: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 21,
  },

  heroStat: {
    flex: 1,
  },

  heroDivider: {
    width: 1,
    height: 31,
    backgroundColor:
      "rgba(255,255,255,0.13)",
    marginHorizontal: 10,
  },

  heroStatLabel: {
    color: "rgba(255,255,255,0.45)",
    fontSize: 6,
    fontWeight: "800",
  },

  heroStatValue: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
    marginTop: 4,
  },

  /* STATS */

  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 27,
  },

  statCard: {
    width: "48.5%",
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 14,
  },

  statIcon: {
    width: 39,
    height: 39,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },

  statLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  statValue: {
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "900",
    marginTop: 3,
  },

  statSubtitle: {
    color: "#64748B",
    fontSize: 7,
    marginTop: 3,
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

  /* CATEGORIES */

  categoriesContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 15,
    marginBottom: 27,
  },

  categoryRow: {
    minHeight: 82,
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
  },

  categoryRowFirst: {
    borderTopWidth: 0,
  },

  categoryIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  categoryContent: {
    flex: 1,
    marginRight: 10,
  },

  categoryTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  categoryTitle: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "800",
  },

  categoryPercentage: {
    color: "#2563EB",
    fontSize: 8,
    fontWeight: "900",
  },

  warningPercentage: {
    color: "#DC2626",
  },

  categoryAmount: {
    color: "#64748B",
    fontSize: 7,
    marginTop: 3,
  },

  categoryTrack: {
    height: 5,
    backgroundColor: "#E2E8F0",
    borderRadius: 3,
    overflow: "hidden",
    marginTop: 8,
  },

  categoryFill: {
    height: "100%",
    backgroundColor: "#2563EB",
    borderRadius: 3,
  },

  categoryWarningFill: {
    backgroundColor: "#F59E0B",
  },

  /* ALERT */

  alertCard: {
    flexDirection: "row",
    backgroundColor: "#FFFBEB",
    borderRadius: 19,
    padding: 14,
    borderWidth: 1,
    borderColor: "#FDE68A",
    marginTop: 12,
    marginBottom: 27,
  },

  alertIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#FEF3C7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  alertContent: {
    flex: 1,
  },

  alertTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  alertTitle: {
    flex: 1,
    color: "#92400E",
    fontSize: 9,
    fontWeight: "900",
  },

  warningBadge: {
    backgroundColor: "#FEF3C7",
    borderRadius: 12,
    paddingHorizontal: 7,
    paddingVertical: 4,
    marginLeft: 7,
  },

  warningBadgeText: {
    color: "#D97706",
    fontSize: 7,
    fontWeight: "900",
  },

  alertDescription: {
    color: "#B45309",
    fontSize: 7,
    lineHeight: 12,
    marginTop: 5,
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
    padding: 17,
    borderWidth: 1,
    borderColor: "#DDD6FE",
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
    fontSize: 11,
    fontWeight: "900",
  },

  aiSubtitle: {
    color: "#7C3AED",
    fontSize: 7,
    marginTop: 3,
  },

  confidenceBadge: {
    backgroundColor: "#F5F3FF",
    borderRadius: 14,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  confidenceText: {
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
    backgroundColor: "#E2E8F0",
    borderRadius: 3,
    overflow: "hidden",
  },

  confidenceFill: {
    width: "92%",
    height: "100%",
    backgroundColor: "#7C3AED",
    borderRadius: 3,
  },

  /* RECENT */

  recentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 15,
    marginBottom: 24,
  },

  recentRow: {
    minHeight: 70,
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
  },

  recentRowFirst: {
    borderTopWidth: 0,
  },

  recentRowLast: {},

  recentIcon: {
    width: 39,
    height: 39,
    borderRadius: 13,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  recentContent: {
    flex: 1,
  },

  recentTitle: {
    color: "#0F172A",
    fontSize: 9,
    fontWeight: "800",
  },

  recentSubtitle: {
    color: "#94A3B8",
    fontSize: 7,
    marginTop: 3,
  },

  recentAmount: {
    color: "#DC2626",
    fontSize: 9,
    fontWeight: "900",
  },

  /* ADD */

  addBudgetButton: {
    minHeight: 68,
    backgroundColor: "#2563EB",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  addBudgetButtonIcon: {
    width: 39,
    height: 39,
    borderRadius: 13,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  addBudgetContent: {
    flex: 1,
  },

  addBudgetTitle: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900",
  },

  addBudgetSubtitle: {
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