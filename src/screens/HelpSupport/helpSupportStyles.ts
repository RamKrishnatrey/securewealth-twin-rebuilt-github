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
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 18,
    alignItems: "center",
    marginBottom: 22,
  },

  heroIcon: {
    width: 52,
    height: 52,
    borderRadius: 17,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },

  heroTitle: {
    color: "#0F172A",
    fontSize: 18,
    fontWeight: "900",
  },

  heroSubtitle: {
    color: "#64748B",
    fontSize: 9,
    lineHeight: 14,
    textAlign: "center",
    marginTop: 4,
  },

  searchContainer: {
    width: "100%",
    height: 48,
    borderRadius: 15,
    backgroundColor: "#F8FAFC",
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
    fontSize: 11,
    marginHorizontal: 9,
  },

  sectionLabel: {
    color: "#64748B",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 0.9,
    marginBottom: 9,
    marginLeft: 2,
  },

  quickGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  quickCard: {
    width: "48.5%",
    minHeight: 128,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 13,
    marginBottom: 10,
  },

  quickIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  quickTitle: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "800",
  },

  quickSubtitle: {
    color: "#94A3B8",
    fontSize: 8,
    marginTop: 3,
  },

  quickArrow: {
    position: "absolute",
    right: 12,
    bottom: 12,
  },

  sectionHeader: {
    marginBottom: 10,
  },

  sectionTitle: {
    color: "#0F172A",
    fontSize: 14,
    fontWeight: "900",
  },

  sectionSubtitle: {
    color: "#94A3B8",
    fontSize: 8,
    marginTop: 2,
  },

  faqCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    overflow: "hidden",
    marginBottom: 23,
  },

  faqQuestion: {
    minHeight: 62,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  faqQuestionContent: {
    flex: 1,
    marginRight: 10,
  },

  faqQuestionText: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "800",
    lineHeight: 15,
  },

  faqAnswer: {
    paddingHorizontal: 14,
    paddingBottom: 14,
    paddingRight: 38,
  },

  faqAnswerText: {
    color: "#64748B",
    fontSize: 9,
    lineHeight: 15,
  },

  divider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginHorizontal: 14,
  },

  emptyState: {
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: "center",
    paddingVertical: 26,
    paddingHorizontal: 18,
    marginBottom: 23,
  },

  emptyIcon: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },

  emptyTitle: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "800",
    marginTop: 10,
  },

  emptyText: {
    color: "#94A3B8",
    fontSize: 8,
    marginTop: 4,
  },

  clearSearch: {
    color: "#2563EB",
    fontSize: 9,
    fontWeight: "800",
    marginTop: 10,
  },

  contactCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 14,
    marginBottom: 12,
  },

  contactHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  supportIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  contactContent: {
    flex: 1,
  },

  contactTitle: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "800",
  },

  contactSubtitle: {
    color: "#94A3B8",
    fontSize: 8,
    marginTop: 3,
  },

  contactActions: {
    flexDirection: "row",
    marginTop: 14,
  },

  primarySupportButton: {
    flex: 2,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  primarySupportText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "800",
    marginLeft: 6,
  },

  secondarySupportButton: {
    flex: 1,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#EFF6FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  secondarySupportText: {
    color: "#2563EB",
    fontSize: 10,
    fontWeight: "800",
    marginLeft: 5,
  },

  securityCard: {
    minHeight: 75,
    backgroundColor: "#FEF2F2",
    borderWidth: 1,
    borderColor: "#FECACA",
    borderRadius: 18,
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  securityIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#FEE2E2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  securityContent: {
    flex: 1,
  },

  securityTitle: {
    color: "#B91C1C",
    fontSize: 10,
    fontWeight: "800",
  },

  securityText: {
    color: "#DC2626",
    fontSize: 8,
    lineHeight: 12,
    marginTop: 3,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  footerText: {
    color: "#15803D",
    fontSize: 8,
    fontWeight: "700",
    marginLeft: 5,
  },
});