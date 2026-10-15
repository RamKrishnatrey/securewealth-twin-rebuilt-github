import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  scrollView: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 35,
  },

  header: {
    minHeight: 68,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
  },

  headerCenter: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
  },

  headerTitle: {
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "900",
  },

  headerSubtitle: {
    color: "#64748B",
    fontSize: 8,
    marginTop: 2,
  },

  addHeaderButton: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
  },

  heroCard: {
    minHeight: 92,
    borderRadius: 21,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DBEAFE",
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  heroIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  heroContent: {
    flex: 1,
  },

  heroTitle: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "900",
  },

  heroText: {
    color: "#64748B",
    fontSize: 8,
    lineHeight: 12,
    marginTop: 4,
  },

  countBadge: {
    minWidth: 47,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  countValue: {
    color: "#2563EB",
    fontSize: 16,
    fontWeight: "900",
  },

  countLabel: {
    color: "#64748B",
    fontSize: 6,
    fontWeight: "800",
    marginTop: 1,
  },

  securityStrip: {
    minHeight: 40,
    borderRadius: 13,
    backgroundColor: "#F0FDF4",
    borderWidth: 1,
    borderColor: "#DCFCE7",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginTop: 10,
  },

  securityText: {
    flex: 1,
    color: "#15803D",
    fontSize: 8,
    fontWeight: "700",
    marginLeft: 7,
  },

  searchContainer: {
    height: 50,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    marginTop: 17,
  },

  searchInput: {
    flex: 1,
    color: "#0F172A",
    fontSize: 10,
    marginLeft: 9,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 21,
    marginBottom: 9,
  },

  sectionTitle: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "900",
  },

  sectionCount: {
    minWidth: 23,
    height: 23,
    borderRadius: 12,
    backgroundColor: "#E2E8F0",
    color: "#475569",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 23,
    marginLeft: 7,
  },

  beneficiaryCard: {
    minHeight: 82,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  avatar: {
    width: 47,
    height: 47,
    borderRadius: 16,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900",
  },

  beneficiaryContent: {
    flex: 1,
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  beneficiaryName: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "900",
    marginRight: 5,
  },

  beneficiaryBank: {
    color: "#475569",
    fontSize: 8,
    fontWeight: "700",
    marginTop: 4,
  },

  beneficiaryAccount: {
    color: "#94A3B8",
    fontSize: 8,
    marginTop: 2,
  },

  cardActions: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    minHeight: 44,
  },

  trustedBadge: {
    height: 19,
    borderRadius: 10,
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },

  trustedText: {
    color: "#15803D",
    fontSize: 6,
    fontWeight: "900",
  },

  addCard: {
    minHeight: 73,
    borderRadius: 18,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#93C5FD",
    backgroundColor: "#EFF6FF",
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },

  addIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  addContent: {
    flex: 1,
  },

  addTitle: {
    color: "#1D4ED8",
    fontSize: 10,
    fontWeight: "900",
  },

  addText: {
    color: "#64748B",
    fontSize: 8,
    lineHeight: 12,
    marginTop: 3,
  },

  emptyState: {
    alignItems: "center",
    paddingVertical: 35,
  },

  emptyIcon: {
    width: 58,
    height: 58,
    borderRadius: 19,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },

  emptyTitle: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "900",
    marginTop: 11,
  },

  emptyText: {
    color: "#64748B",
    fontSize: 8,
    marginTop: 4,
    textAlign: "center",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
  },

  footerText: {
    color: "#64748B",
    fontSize: 7,
    marginLeft: 5,
  },
});

export default styles;