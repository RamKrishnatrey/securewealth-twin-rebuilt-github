import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  header: {
    minHeight: 70,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
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

  headerSpacer: {
    width: 40,
  },

  headerTitle: {
    color: "#0F172A",
    fontSize: 17,
    fontWeight: "900",
  },

  headerSubtitle: {
    color: "#64748B",
    fontSize: 9,
    marginTop: 2,
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },

  heroCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginBottom: 23,
  },

  logoContainer: {
    width: 72,
    height: 72,
    borderRadius: 23,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 13,
  },

  productName: {
    color: "#0F172A",
    fontSize: 20,
    fontWeight: "900",
  },

  productTagline: {
    color: "#64748B",
    fontSize: 9,
    lineHeight: 14,
    textAlign: "center",
    marginTop: 5,
    maxWidth: 260,
  },

  versionBadge: {
    paddingHorizontal: 12,
    height: 27,
    borderRadius: 14,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },

  versionBadgeText: {
    color: "#2563EB",
    fontSize: 8,
    fontWeight: "800",
  },

  sectionLabel: {
    color: "#64748B",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 0.9,
    marginLeft: 2,
    marginBottom: 8,
  },

  descriptionCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 20,
    padding: 15,
    marginBottom: 22,
  },

  descriptionText: {
    color: "#475569",
    fontSize: 9,
    lineHeight: 15,
  },

  featureDivider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginVertical: 15,
  },

  feature: {
    minHeight: 53,
    flexDirection: "row",
    alignItems: "center",
  },

  featureIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  featureContent: {
    flex: 1,
  },

  featureTitle: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "800",
  },

  featureDescription: {
    color: "#94A3B8",
    fontSize: 8,
    marginTop: 2,
  },

  securityCard: {
    minHeight: 76,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#BBF7D0",
    backgroundColor: "#F0FDF4",
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  securityIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  securityContent: {
    flex: 1,
  },

  securityTitle: {
    color: "#15803D",
    fontSize: 10,
    fontWeight: "800",
  },

  securityText: {
    color: "#16A34A",
    fontSize: 8,
    lineHeight: 12,
    marginTop: 3,
  },

  menuCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    overflow: "hidden",
    marginBottom: 22,
  },

  menuItem: {
    minHeight: 68,
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
  },

  menuIcon: {
    width: 39,
    height: 39,
    borderRadius: 12,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  menuContent: {
    flex: 1,
  },

  menuTitle: {
    color: "#0F172A",
    fontSize: 10,
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
    marginLeft: 62,
  },

  supportCard: {
    minHeight: 72,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  supportIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  supportContent: {
    flex: 1,
  },

  supportTitle: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "800",
  },

  supportText: {
    color: "#94A3B8",
    fontSize: 8,
    marginTop: 3,
  },

  buildCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 14,
    marginTop: 1,
  },

  buildRow: {
    minHeight: 47,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  buildLabel: {
    color: "#64748B",
    fontSize: 9,
    fontWeight: "600",
  },

  buildValue: {
    color: "#0F172A",
    fontSize: 9,
    fontWeight: "800",
  },

  buildDivider: {
    height: 1,
    backgroundColor: "#F1F5F9",
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

  copyright: {
    color: "#94A3B8",
    fontSize: 8,
    textAlign: "center",
    marginTop: 7,
  },
});