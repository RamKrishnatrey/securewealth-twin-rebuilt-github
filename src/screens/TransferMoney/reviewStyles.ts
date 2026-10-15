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
    paddingTop: 8,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  headerButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },

  headerCenter: {
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A",
  },

  headerSubtitle: {
    fontSize: 10,
    color: "#64748B",
    marginTop: 2,
  },

  heroCard: {
    borderRadius: 26,
    padding: 22,
    alignItems: "center",
    marginBottom: 26,
    elevation: 7,
  },

  heroLabel: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
    color: "rgba(255,255,255,0.7)",
  },

  heroAmount: {
    fontSize: 38,
    fontWeight: "800",
    color: "#FFFFFF",
    marginTop: 6,
  },

  heroRecipient: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    backgroundColor: "rgba(255,255,255,0.13)",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 18,
  },

  heroAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(255,255,255,0.17)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  heroTo: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 9,
  },

  heroName: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
    marginTop: 1,
  },

  sectionLabel: {
    color: "#64748B",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 10,
  },

  detailsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    paddingHorizontal: 16,
    marginBottom: 26,
    elevation: 3,
  },

  detailRow: {
    minHeight: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  detailRowLast: {
    borderBottomWidth: 0,
  },

  detailLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  detailIcon: {
    width: 34,
    height: 34,
    borderRadius: 11,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  detailLabel: {
    color: "#64748B",
    fontSize: 12,
  },

  detailValue: {
    maxWidth: "48%",
    color: "#0F172A",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
  },

  successValue: {
    color: "#16A34A",
  },

  shieldCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 17,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#DCFCE7",
    elevation: 3,
  },

  shieldHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  shieldIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
  },

  shieldHeaderText: {
    flex: 1,
    marginLeft: 11,
  },

  shieldTitle: {
    color: "#166534",
    fontSize: 14,
    fontWeight: "800",
  },

  shieldSubtitle: {
    color: "#15803D",
    fontSize: 10,
    lineHeight: 15,
    marginTop: 2,
  },

  safeChip: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 12,
  },

  safeText: {
    color: "#15803D",
    fontSize: 9,
    fontWeight: "800",
  },

  divider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginVertical: 16,
  },

  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  checkIcon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: "#F0FDF4",
    alignItems: "center",
    justifyContent: "center",
  },

  checkContent: {
    flex: 1,
    marginLeft: 10,
    paddingRight: 8,
  },

  checkTitle: {
    color: "#0F172A",
    fontSize: 12,
    fontWeight: "800",
  },

  checkDescription: {
    color: "#64748B",
    fontSize: 10,
    marginTop: 2,
  },

  riskRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 16,
    padding: 13,
    marginTop: 2,
  },

  riskLabel: {
    color: "#64748B",
    fontSize: 9,
  },

  riskValue: {
    color: "#16A34A",
    fontSize: 16,
    fontWeight: "800",
    marginTop: 2,
  },

  scoreContainer: {
    alignItems: "flex-end",
  },

  scoreLabel: {
    color: "#64748B",
    fontSize: 8,
    fontWeight: "700",
  },

  scoreValue: {
    color: "#16A34A",
    fontSize: 17,
    fontWeight: "800",
    marginTop: 2,
  },

  totalCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
    elevation: 2,
  },

  totalLabel: {
    color: "#0F172A",
    fontSize: 13,
    fontWeight: "800",
  },

  totalSubtext: {
    color: "#64748B",
    fontSize: 9,
    marginTop: 3,
  },

  totalAmount: {
    color: "#0F172A",
    fontSize: 21,
    fontWeight: "800",
  },

  confirmButton: {
    height: 56,
    borderRadius: 18,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#2563EB",
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    elevation: 6,
  },

  confirmButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
    marginHorizontal: 9,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
    paddingHorizontal: 15,
  },

  footerText: {
    flex: 1,
    color: "#64748B",
    fontSize: 9,
    lineHeight: 14,
    marginLeft: 5,
    textAlign: "center",
  },
});