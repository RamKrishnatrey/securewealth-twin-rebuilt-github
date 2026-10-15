import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  header: {
    height: 72,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
  },

  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
  },

  headerContent: {
    flex: 1,
    marginHorizontal: 12,
  },

  headerTitle: {
    fontSize: 17,
    fontWeight: "900",
    color: "#0F172A",
  },

  headerSubtitle: {
    fontSize: 9,
    color: "#64748B",
    marginTop: 2,
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 36,
  },

  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "900",
    color: "#0F172A",
  },

  summaryText: {
    fontSize: 10,
    color: "#64748B",
    marginTop: 3,
  },

  unreadBadge: {
    minWidth: 27,
    height: 27,
    paddingHorizontal: 8,
    borderRadius: 14,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
  },

  unreadBadgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "900",
  },

  notificationList: {
    gap: 10,
  },

  notificationCard: {
    minHeight: 96,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  notificationUnread: {
    borderColor: "#BFDBFE",
    backgroundColor: "#F8FAFF",
  },

  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  securityIcon: {
    backgroundColor: "#F0FDF4",
  },

  transactionIcon: {
    backgroundColor: "#EFF6FF",
  },

  aiIcon: {
    backgroundColor: "#F5F3FF",
  },

  goalIcon: {
    backgroundColor: "#FFFBEB",
  },

  investmentIcon: {
    backgroundColor: "#ECFEFF",
  },

  notificationContent: {
    flex: 1,
    marginRight: 8,
  },

  notificationHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  notificationTitle: {
    flex: 1,
    color: "#0F172A",
    fontSize: 12,
    fontWeight: "800",
  },

  unreadDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#2563EB",
    marginLeft: 6,
  },

  notificationMessage: {
    color: "#64748B",
    fontSize: 9,
    lineHeight: 14,
    marginTop: 5,
  },

  notificationTime: {
    color: "#94A3B8",
    fontSize: 8,
    fontWeight: "600",
    marginTop: 7,
  },

  securityFooter: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 16,
    padding: 13,
    marginTop: 18,
  },

  securityText: {
    flex: 1,
    color: "#15803D",
    fontSize: 9,
    lineHeight: 14,
    marginLeft: 9,
  },
});