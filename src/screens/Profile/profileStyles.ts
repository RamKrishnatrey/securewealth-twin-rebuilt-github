import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 110,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  brandLabel: {
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1.3,
    color: "#2563EB",
    marginBottom: 3,
  },

  headerTitle: {
    fontSize: 25,
    fontWeight: "900",
    color: "#0F172A",
  },

  headerSubtitle: {
    color: "#64748B",
    fontSize: 10,
    marginTop: 3,
  },

  settingsButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: "center",
    justifyContent: "center",
  },

  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: "center",
    paddingVertical: 22,
    paddingHorizontal: 16,
  },

  avatarWrapper: {
    position: "relative",
  },

  avatar: {
    width: 76,
    height: 76,
    borderRadius: 25,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "900",
  },

  verifiedBadge: {
    position: "absolute",
    right: -3,
    bottom: -3,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#16A34A",
    borderWidth: 3,
    borderColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  userName: {
    color: "#0F172A",
    fontSize: 18,
    fontWeight: "900",
    marginTop: 13,
  },

  userEmail: {
    color: "#64748B",
    fontSize: 10,
    marginTop: 4,
  },

  verifiedRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  verifiedText: {
    color: "#15803D",
    fontSize: 9,
    fontWeight: "700",
    marginLeft: 4,
  },

  editButton: {
    height: 39,
    paddingHorizontal: 18,
    borderRadius: 13,
    backgroundColor: "#EFF6FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },

  editButtonText: {
    color: "#2563EB",
    fontSize: 11,
    fontWeight: "800",
    marginLeft: 6,
  },

  statsRow: {
    flexDirection: "row",
    gap: 9,
    marginTop: 12,
    marginBottom: 24,
  },

  statCard: {
    flex: 1,
    minHeight: 103,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 12,
  },

  statIcon: {
    width: 34,
    height: 34,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 9,
  },

  statValue: {
    color: "#0F172A",
    fontSize: 13,
    fontWeight: "900",
  },

  statLabel: {
    color: "#64748B",
    fontSize: 8,
    marginTop: 2,
  },

  sectionLabel: {
    color: "#64748B",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1,
    marginBottom: 8,
    marginLeft: 2,
  },

  menuCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    overflow: "hidden",
    marginBottom: 22,
  },

  menuItem: {
    minHeight: 70,
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
  },

  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  menuContent: {
    flex: 1,
  },

  menuTitle: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "800",
  },

  menuSubtitle: {
    color: "#94A3B8",
    fontSize: 8,
    marginTop: 3,
  },

  divider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginLeft: 64,
  },

  logoutButton: {
    height: 52,
    borderRadius: 16,
    backgroundColor: "#FEF2F2",
    borderWidth: 1,
    borderColor: "#FECACA",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },

  logoutText: {
    color: "#DC2626",
    fontSize: 12,
    fontWeight: "800",
    marginLeft: 7,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },

  footerText: {
    color: "#15803D",
    fontSize: 8,
    fontWeight: "700",
    marginLeft: 5,
  },

  versionText: {
    color: "#94A3B8",
    fontSize: 8,
    textAlign: "center",
    marginTop: 7,
  },
});