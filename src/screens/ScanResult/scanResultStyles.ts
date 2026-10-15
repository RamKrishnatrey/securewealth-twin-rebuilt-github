import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  header: {
    minHeight: 70,
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

  scrollContent: {
    padding: 16,
    paddingBottom: 20,
  },

  verifiedCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#DCFCE7",
    padding: 18,
    alignItems: "center",
    marginBottom: 22,
  },

  verifiedIcon: {
    width: 57,
    height: 57,
    borderRadius: 19,
    backgroundColor: "#F0FDF4",
    alignItems: "center",
    justifyContent: "center",
  },

  verifiedTitle: {
    color: "#0F172A",
    fontSize: 15,
    fontWeight: "900",
    marginTop: 10,
  },

  verifiedText: {
    color: "#64748B",
    fontSize: 9,
    marginTop: 4,
    textAlign: "center",
  },

  securityBadge: {
    height: 28,
    borderRadius: 14,
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 11,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 11,
  },

  securityBadgeText: {
    color: "#15803D",
    fontSize: 8,
    fontWeight: "800",
    marginLeft: 5,
  },

  sectionLabel: {
    color: "#64748B",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 0.8,
    marginLeft: 2,
    marginBottom: 8,
  },

  recipientCard: {
    minHeight: 75,
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 21,
  },

  avatar: {
    width: 47,
    height: 47,
    borderRadius: 16,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  recipientContent: {
    flex: 1,
  },

  recipientName: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "900",
  },

  verifiedRecipientRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  verifiedRecipientText: {
    color: "#16A34A",
    fontSize: 8,
    fontWeight: "700",
    marginLeft: 4,
  },

  qrIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
  },

  amountCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 15,
  },

  amountLabel: {
    color: "#64748B",
    fontSize: 9,
    fontWeight: "700",
  },

  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  currency: {
    color: "#0F172A",
    fontSize: 27,
    fontWeight: "700",
    marginRight: 5,
  },

  amountInput: {
    flex: 1,
    color: "#0F172A",
    fontSize: 30,
    fontWeight: "900",
    paddingVertical: 2,
  },

  amountDivider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginVertical: 12,
  },

  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  balanceLabel: {
    color: "#94A3B8",
    fontSize: 8,
  },

  balanceValue: {
    color: "#475569",
    fontSize: 9,
    fontWeight: "800",
  },

  quickAmounts: {
    flexDirection: "row",
    marginTop: 9,
    marginBottom: 21,
  },

  quickAmountButton: {
    flex: 1,
    height: 37,
    borderRadius: 12,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 3,
  },

  quickAmountText: {
    color: "#2563EB",
    fontSize: 9,
    fontWeight: "800",
  },

  noteCard: {
    minHeight: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  noteInput: {
    flex: 1,
    color: "#0F172A",
    fontSize: 10,
    marginLeft: 9,
  },

  shieldCard: {
    minHeight: 77,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#BBF7D0",
    backgroundColor: "#F0FDF4",
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
  },

  shieldIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  shieldContent: {
    flex: 1,
  },

  shieldTitle: {
    color: "#15803D",
    fontSize: 10,
    fontWeight: "900",
  },

  shieldText: {
    color: "#16A34A",
    fontSize: 8,
    lineHeight: 12,
    marginTop: 3,
  },

  qrDataCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 12,
    marginTop: 12,
  },

  qrDataHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  qrDataTitle: {
    color: "#475569",
    fontSize: 9,
    fontWeight: "800",
    marginLeft: 5,
  },

  qrDataText: {
    color: "#94A3B8",
    fontSize: 8,
    lineHeight: 12,
    marginTop: 7,
  },

  bottomBar: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
  },

  continueButton: {
    height: 51,
    borderRadius: 16,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  continueButtonDisabled: {
    opacity: 0.45,
  },

  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "900",
    marginRight: 7,
  },

  bottomSecurity: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },

  bottomSecurityText: {
    color: "#64748B",
    fontSize: 7,
    marginLeft: 4,
  },
});