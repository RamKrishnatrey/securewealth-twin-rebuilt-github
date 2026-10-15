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
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 32,
  },

  /* HEADER */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24,
  },

  eyebrow: {
    color: "#2563EB",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.2,
    marginBottom: 5,
  },

  title: {
    color: "#0F172A",
    fontSize: 30,
    fontWeight: "800",
  },

  subtitle: {
    color: "#64748B",
    fontSize: 13,
    marginTop: 5,
  },

  headerButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },

  /* SUMMARY */

  summaryCard: {
    borderRadius: 26,
    padding: 20,
    marginBottom: 18,

    shadowColor: "#2563EB",
    shadowOpacity: 0.2,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 8,
  },

  summaryTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  summaryLabel: {
    color: "rgba(255,255,255,0.72)",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
  },

  summaryAmount: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "800",
    marginTop: 6,
  },

  summaryCaption: {
    color: "rgba(255,255,255,0.72)",
    fontSize: 12,
    marginTop: 3,
  },

  summaryChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.16)",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 20,
  },

  summaryChipText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 12,
    marginLeft: 4,
  },

  summaryDivider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.18)",
    marginVertical: 18,
  },

  summaryMetrics: {
    flexDirection: "row",
    alignItems: "center",
  },

  summaryMetric: {
    flex: 1,
  },

  summaryMetricLabel: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 12,
    marginBottom: 5,
  },

  incomeValue: {
    color: "#BBF7D0",
    fontSize: 17,
    fontWeight: "800",
  },

  expenseValue: {
    color: "#FECACA",
    fontSize: 17,
    fontWeight: "800",
  },

  verticalDivider: {
    width: 1,
    height: 35,
    backgroundColor: "rgba(255,255,255,0.18)",
    marginHorizontal: 18,
  },

  /* AI */

  aiCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    marginBottom: 18,

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },

  aiIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#EEF4FF",
    alignItems: "center",
    justifyContent: "center",
  },

  aiContent: {
    flex: 1,
    marginLeft: 12,
  },

  aiTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  aiTitle: {
    color: "#0F172A",
    fontSize: 15,
    fontWeight: "800",
  },

  liveChip: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 9,
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 12,
  },

  liveDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#16A34A",
    marginRight: 4,
  },

  liveText: {
    color: "#15803D",
    fontSize: 9,
    fontWeight: "800",
  },

  aiText: {
    color: "#64748B",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },

  aiHighlight: {
    color: "#16A34A",
    fontWeight: "800",
  },

  /* SEARCH */

  searchContainer: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    paddingHorizontal: 15,
    marginBottom: 14,

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  searchInput: {
    flex: 1,
    color: "#0F172A",
    fontSize: 14,
    marginLeft: 10,
    paddingVertical: 0,
  },

  /* FILTER */

  filters: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  filterChipActive: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },

  filterText: {
    color: "#64748B",
    fontSize: 12,
    fontWeight: "700",
  },

  filterTextActive: {
    color: "#FFFFFF",
  },

  filterIconButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  /* LIST */

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  sectionTitle: {
    color: "#0F172A",
    fontSize: 18,
    fontWeight: "800",
  },

  transactionCount: {
    color: "#94A3B8",
    fontSize: 11,
    fontWeight: "600",
  },

  transactionList: {
    marginBottom: 10,
  },

  transactionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 14,
    marginBottom: 10,

    shadowColor: "#000",
    shadowOpacity: 0.035,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 2,
  },

  transactionIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  transactionInfo: {
    flex: 1,
    marginLeft: 12,
    paddingRight: 8,
  },

  transactionTitle: {
    color: "#0F172A",
    fontSize: 14,
    fontWeight: "800",
  },

  transactionMeta: {
    color: "#94A3B8",
    fontSize: 11,
    marginTop: 4,
  },

  amountContainer: {
    alignItems: "flex-end",
  },

  transactionAmount: {
    fontSize: 14,
    fontWeight: "800",
  },

  positiveAmount: {
    color: "#16A34A",
  },

  negativeAmount: {
    color: "#0F172A",
  },

  completedRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  completedDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#22C55E",
    marginRight: 4,
  },

  completedText: {
    color: "#64748B",
    fontSize: 9,
    fontWeight: "600",
  },

  /* EMPTY */

  emptyState: {
    alignItems: "center",
    paddingVertical: 35,
  },

  emptyIcon: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#E2E8F0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  emptyTitle: {
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "800",
  },

  emptyText: {
    color: "#64748B",
    fontSize: 12,
    marginTop: 5,
  },

  /* SECURITY */

  securityFooter: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 16,
    padding: 14,
    marginTop: 4,
  },

  securityText: {
    flex: 1,
    color: "#15803D",
    fontSize: 11,
    lineHeight: 17,
    marginLeft: 9,
  },
});