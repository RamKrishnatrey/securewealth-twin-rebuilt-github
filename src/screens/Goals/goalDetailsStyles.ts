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

  /* HERO */

  heroCard: {
    backgroundColor: "#172554",
    borderRadius: 30,
    padding: 22,
    overflow: "hidden",
    marginBottom: 27,
  },

  heroGlowOne: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    top: -100,
    right: -50,
    backgroundColor:
      "rgba(37,99,235,0.35)",
  },

  heroGlowTwo: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    bottom: -100,
    left: -60,
    backgroundColor:
      "rgba(124,58,237,0.24)",
  },

  heroTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  goalIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor:
      "rgba(255,255,255,0.13)",
    alignItems: "center",
    justifyContent: "center",
  },

  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:
      "rgba(34,197,94,0.16)",
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#4ADE80",
    marginRight: 5,
  },

  statusText: {
    color: "#BBF7D0",
    fontSize: 7,
    fontWeight: "900",
  },

  goalTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "900",
    marginTop: 19,
  },

  goalDescription: {
    color: "rgba(255,255,255,0.64)",
    fontSize: 9,
    lineHeight: 15,
    marginTop: 5,
    maxWidth: 290,
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
    borderRadius: 4,
    backgroundColor: "#60A5FA",
  },

  heroAmounts: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },

  heroAmountRight: {
    alignItems: "flex-end",
  },

  heroAmountLabel: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 6,
    fontWeight: "800",
  },

  heroAmountValue: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
    marginTop: 4,
  },

  /* COMMON */

  sectionTitle: {
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 12,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  /* OVERVIEW */

  overviewGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  overviewCard: {
    width: "48.5%",
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    padding: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 10,
  },

  overviewIcon: {
    width: 39,
    height: 39,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  overviewLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  overviewValue: {
    color: "#0F172A",
    fontSize: 15,
    fontWeight: "900",
    marginTop: 3,
  },

  overviewSubtitle: {
    color: "#64748B",
    fontSize: 7,
    marginTop: 3,
  },

  /* AI */

  aiBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F3FF",
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginBottom: 12,
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
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 14,
  },

  confidenceBadgeText: {
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

  optimizationBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F8FAFC",
    borderRadius: 17,
    padding: 14,
    marginTop: 14,
  },

  optimizationLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  optimizationOldValue: {
    color: "#64748B",
    fontSize: 16,
    fontWeight: "900",
    marginTop: 4,
  },

  optimizationNewValue: {
    color: "#16A34A",
    fontSize: 16,
    fontWeight: "900",
    marginTop: 4,
  },

  impactBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 16,
    padding: 12,
    marginTop: 12,
  },

  impactIcon: {
    width: 37,
    height: 37,
    borderRadius: 12,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  impactContent: {
    flex: 1,
  },

  impactTitle: {
    color: "#14532D",
    fontSize: 9,
    fontWeight: "800",
  },

  impactDescription: {
    color: "#15803D",
    fontSize: 7,
    lineHeight: 12,
    marginTop: 2,
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
    backgroundColor: "#7C3AED",
    borderRadius: 3,
  },

  /* MILESTONES */

  milestoneCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 16,
    paddingVertical: 7,
    marginBottom: 27,
  },

  milestoneRow: {
    flexDirection: "row",
    minHeight: 72,
  },

  milestoneTimeline: {
    width: 32,
    alignItems: "center",
  },

  milestoneCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#CBD5E1",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },

  milestoneCircleComplete: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },

  milestoneInnerDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#CBD5E1",
  },

  timelineLineTop: {
    width: 2,
    flex: 1,
    backgroundColor: "#E2E8F0",
  },

  timelineLineBottom: {
    width: 2,
    flex: 1,
    backgroundColor: "#E2E8F0",
  },

  timelineLineComplete: {
    backgroundColor: "#93C5FD",
  },

  milestoneContent: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 8,
  },

  milestoneTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  milestoneTitle: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "800",
  },

  milestoneAmount: {
    color: "#64748B",
    fontSize: 7,
    marginTop: 3,
  },

  milestonePercentage: {
    color: "#94A3B8",
    fontSize: 9,
    fontWeight: "900",
  },

  milestonePercentageComplete: {
    color: "#2563EB",
  },

  /* CONTRIBUTION */

  contributionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 27,
  },

  contributionIcon: {
    width: 47,
    height: 47,
    borderRadius: 15,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  contributionContent: {
    flex: 1,
  },

  contributionLabel: {
    color: "#94A3B8",
    fontSize: 6,
    fontWeight: "800",
  },

  contributionValue: {
    color: "#0F172A",
    fontSize: 17,
    fontWeight: "900",
    marginTop: 2,
  },

  contributionDescription: {
    color: "#64748B",
    fontSize: 7,
    marginTop: 2,
  },

  activeBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 13,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  activeDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#22C55E",
    marginRight: 4,
  },

  activeText: {
    color: "#15803D",
    fontSize: 6,
    fontWeight: "900",
  },

  /* ACTIVITY */

  seeAll: {
    color: "#2563EB",
    fontSize: 8,
    fontWeight: "800",
    marginBottom: 12,
  },

  activityCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 15,
    marginBottom: 25,
  },

  activityRow: {
    minHeight: 70,
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
  },

  activityRowFirst: {
    borderTopWidth: 0,
  },

  activityRowLast: {},

  activityIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  activityContent: {
    flex: 1,
  },

  activityTitle: {
    color: "#0F172A",
    fontSize: 9,
    fontWeight: "800",
  },

  activityDate: {
    color: "#94A3B8",
    fontSize: 7,
    marginTop: 3,
  },

  activityAmount: {
    color: "#2563EB",
    fontSize: 8,
    fontWeight: "800",
  },

  /* UPDATE */

  updateButton: {
    minHeight: 68,
    borderRadius: 20,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 19,
  },

  updateButtonTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
  },

  updateButtonSubtitle: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 7,
    marginTop: 3,
  },

  updateButtonArrow: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

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