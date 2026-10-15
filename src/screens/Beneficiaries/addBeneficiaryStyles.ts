import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

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
    paddingBottom: 25,
  },

  /* HEADER */

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

  headerSpacer: {
    width: 40,
    height: 40,
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

  /* HERO */

  heroCard: {
    minHeight: 90,
    borderRadius: 20,
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

  /* SECURITY */

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

  securityStripText: {
    flex: 1,
    color: "#15803D",
    fontSize: 8,
    fontWeight: "700",
    marginLeft: 7,
  },

  secureBadge: {
    height: 20,
    borderRadius: 10,
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },

  secureBadgeText: {
    color: "#15803D",
    fontSize: 6,
    fontWeight: "900",
  },

  /* SECTION */

  sectionHeader: {
    marginTop: 23,
    marginBottom: 14,
  },

  sectionTitle: {
    color: "#0F172A",
    fontSize: 13,
    fontWeight: "900",
  },

  sectionSubtitle: {
    color: "#94A3B8",
    fontSize: 8,
    marginTop: 3,
  },

  /* INPUT */

  label: {
    color: "#475569",
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 0.6,
    marginLeft: 2,
    marginBottom: 7,
    marginTop: 4,
  },

  inputContainer: {
    height: 52,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  inputSuccess: {
    borderColor: "#86EFAC",
    backgroundColor: "#F0FDF4",
  },

  inputError: {
    borderColor: "#FCA5A5",
    backgroundColor: "#FEF2F2",
  },

  input: {
    flex: 1,
    color: "#0F172A",
    fontSize: 10,
    marginLeft: 9,
  },

  errorText: {
    color: "#DC2626",
    fontSize: 7,
    fontWeight: "700",
    marginTop: -8,
    marginLeft: 3,
    marginBottom: 12,
  },

  helperText: {
    color: "#94A3B8",
    fontSize: 7,
    lineHeight: 11,
    marginTop: -7,
    marginLeft: 3,
    marginBottom: 17,
  },

  /* VERIFY */

  verifyButton: {
    height: 50,
    borderRadius: 16,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3,
  },

  verifyButtonText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "900",
    marginLeft: 7,
  },

  disabledButton: {
    opacity: 0.42,
  },

  /* VERIFIED */

  verifiedCard: {
    minHeight: 73,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#BBF7D0",
    backgroundColor: "#F0FDF4",
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },

  verifiedIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  verifiedContent: {
    flex: 1,
  },

  verifiedTitle: {
    color: "#15803D",
    fontSize: 10,
    fontWeight: "900",
  },

  verifiedText: {
    color: "#16A34A",
    fontSize: 7,
    lineHeight: 11,
    marginTop: 3,
  },

  verifiedBadge: {
    height: 20,
    borderRadius: 10,
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },

  verifiedBadgeText: {
    color: "#15803D",
    fontSize: 6,
    fontWeight: "900",
  },

  /* SHIELD */

  shieldCard: {
    minHeight: 78,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },

  shieldIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#F0FDF4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  shieldContent: {
    flex: 1,
  },

  shieldTitle: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "900",
  },

  shieldText: {
    color: "#64748B",
    fontSize: 7,
    lineHeight: 11,
    marginTop: 3,
  },

  /* BOTTOM */

  bottomBar: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    paddingHorizontal: 16,
    paddingTop: 11,
    paddingBottom: 12,
  },

  saveButton: {
    height: 51,
    borderRadius: 16,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "900",
    marginRight: 7,
  },

  bottomSecurity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },

  bottomSecurityText: {
    color: "#64748B",
    fontSize: 7,
    marginLeft: 5,
  },
});

export default styles;