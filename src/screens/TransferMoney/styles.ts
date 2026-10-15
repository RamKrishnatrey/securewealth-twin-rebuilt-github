import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /* =========================
      BASE
  ========================= */

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
    paddingBottom: 40,
  },

  /* =========================
      HEADER
  ========================= */

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
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

  headerCenter: {
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A",
  },

  headerSubtitle: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 2,
  },

  /* =========================
      SECURITY STRIP
  ========================= */

  securityStrip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 18,
    padding: 14,
    marginBottom: 26,

    borderWidth: 1,
    borderColor: "#DCFCE7",
  },

  securityIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
  },

  securityContent: {
    flex: 1,
    marginLeft: 11,
    paddingRight: 8,
  },

  securityTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#166534",
  },

  securitySubtitle: {
    fontSize: 10,
    lineHeight: 15,
    color: "#15803D",
    marginTop: 2,
  },

  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#22C55E",
  },

  /* =========================
      SECTION
  ========================= */

  sectionLabel: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#64748B",
    marginBottom: 10,
    marginTop: 2,
  },

  sectionLabelNoMargin: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#64748B",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  /* =========================
      ACCOUNT
  ========================= */

  accountCard: {
    minHeight: 84,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 15,

    flexDirection: "row",
    alignItems: "center",

    marginBottom: 26,

    borderWidth: 1,
    borderColor: "#E2E8F0",

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },

  bankIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#EEF4FF",
    alignItems: "center",
    justifyContent: "center",
  },

  accountInfo: {
    flex: 1,
    marginLeft: 12,
  },

  accountName: {
    fontSize: 14,
    fontWeight: "800",
    color: "#0F172A",
  },

  accountNumber: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 4,
  },

  accountBalanceContainer: {
    alignItems: "flex-end",
    marginRight: 8,
  },

  balanceLabel: {
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 0.7,
    color: "#94A3B8",
  },

  accountBalance: {
    fontSize: 13,
    fontWeight: "800",
    color: "#0F172A",
    marginTop: 3,
  },

  accountChevron: {
    marginLeft: 2,
  },

  /* =========================
      AMOUNT
  ========================= */

  amountCard: {
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 20,
    marginBottom: 28,

    borderWidth: 1,
    borderColor: "#DBEAFE",
  },

  amountHelper: {
    textAlign: "center",
    fontSize: 12,
    color: "#64748B",
  },

  amountInputRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },

  currencySymbol: {
    fontSize: 34,
    fontWeight: "700",
    color: "#0F172A",
    marginRight: 4,
  },

  amountInput: {
    minWidth: 90,
    maxWidth: "75%",

    fontSize: 42,
    fontWeight: "800",
    color: "#0F172A",

    paddingVertical: 4,
    textAlign: "center",
  },

  availableBalance: {
    textAlign: "center",
    color: "#64748B",
    fontSize: 11,
    marginTop: 2,
  },

  quickAmountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  quickAmountButton: {
    paddingHorizontal: 11,
    height: 36,
    borderRadius: 18,

    backgroundColor: "#FFFFFF",

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  quickAmountButtonActive: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },

  quickAmountText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#475569",
  },

  quickAmountTextActive: {
    color: "#FFFFFF",
  },

  /* =========================
      BENEFICIARY
  ========================= */

  addBeneficiaryButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEF4FF",
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  addBeneficiaryText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#2563EB",
    marginLeft: 3,
  },

  beneficiaryContainer: {
    paddingBottom: 6,
    paddingRight: 16,
  },

  beneficiaryCard: {
    width: 128,
    minHeight: 150,

    backgroundColor: "#FFFFFF",
    borderRadius: 20,

    paddingHorizontal: 12,
    paddingVertical: 16,

    alignItems: "center",

    marginRight: 11,
    marginBottom: 24,

    borderWidth: 1.5,
    borderColor: "#E2E8F0",

    position: "relative",

    shadowColor: "#000",
    shadowOpacity: 0.035,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 2,
  },

  beneficiaryCardSelected: {
    borderColor: "#2563EB",
    backgroundColor: "#F8FAFF",
  },

  selectedCheck: {
    position: "absolute",
    top: 9,
    right: 9,

    width: 20,
    height: 20,
    borderRadius: 10,

    backgroundColor: "#2563EB",

    alignItems: "center",
    justifyContent: "center",
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 18,

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 11,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  beneficiaryName: {
    width: "100%",
    textAlign: "center",

    fontSize: 13,
    fontWeight: "800",
    color: "#0F172A",
  },

  beneficiaryBank: {
    fontSize: 10,
    color: "#64748B",
    marginTop: 4,
  },

  beneficiaryAccount: {
    fontSize: 10,
    color: "#94A3B8",
    marginTop: 3,
  },

  /* =========================
      NOTE
  ========================= */

  noteContainer: {
    height: 54,

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFFFFF",
    borderRadius: 18,

    paddingHorizontal: 15,

    borderWidth: 1,
    borderColor: "#E2E8F0",

    marginBottom: 22,
  },

  noteInput: {
    flex: 1,

    fontSize: 13,
    color: "#0F172A",

    marginLeft: 10,

    paddingVertical: 0,
  },

  noteCounter: {
    fontSize: 9,
    color: "#94A3B8",
  },

  /* =========================
      PREVIEW
  ========================= */

  previewCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,

    padding: 17,

    marginBottom: 18,

    borderWidth: 1,
    borderColor: "#E2E8F0",

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },

  previewHeader: {
    flexDirection: "row",
    alignItems: "center",

    paddingBottom: 13,

    marginBottom: 3,

    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  previewTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#0F172A",
    marginLeft: 6,
  },

  previewRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingTop: 13,
  },

  previewLabel: {
    fontSize: 12,
    color: "#64748B",
  },

  previewValue: {
    maxWidth: "60%",
    textAlign: "right",

    fontSize: 12,
    fontWeight: "700",
    color: "#0F172A",
  },

  previewAmount: {
    fontSize: 14,
    fontWeight: "800",
    color: "#0F172A",
  },

  freeText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#16A34A",

    backgroundColor: "#DCFCE7",

    paddingHorizontal: 8,
    paddingVertical: 4,

    borderRadius: 12,
  },

  /* =========================
      CONTINUE BUTTON
  ========================= */

  continueButton: {
    width: "100%",
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

  continueButtonDisabled: {
    backgroundColor: "#E2E8F0",

    shadowOpacity: 0,
    elevation: 0,
  },

  continueText: {
    color: "#FFFFFF",

    fontSize: 14,
    fontWeight: "800",

    marginRight: 8,
  },

  continueTextDisabled: {
    color: "#94A3B8",
  },

  /* =========================
      FOOTER
  ========================= */

  footerSecurity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    marginTop: 14,
    paddingBottom: 5,
  },

  footerSecurityText: {
    color: "#64748B",
    fontSize: 10,
    marginLeft: 5,
  },

  /* =========================
      CURRENCY SELECTOR
  ========================= */

  currencySelectorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  currencySelectorLabel: {
    fontSize: 12,
    color: "#64748B",
    marginRight: 6,
  },

  currencySelectorButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
    backgroundColor: "#F1F5F9",
    marginRight: 6,
  },

  currencySelectorButtonActive: {
    backgroundColor: "#2563EB",
  },

  currencySelectorText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#64748B",
  },

  /* =========================
      CONVERSION INFO
  ========================= */

  conversionInfoContainer: {
    marginTop: 8,
    alignItems: "center",
  },

  conversionInfoText: {
    fontSize: 12,
    color: "#0F172A",
  },

  conversionInfoLoadingText: {
    fontSize: 10,
    color: "#64748B",
    fontStyle: "italic",
  },

  conversionInfoErrorText: {
    fontSize: 10,
    color: "#EF4444",
  },

  /* =========================
      PROFILE CARD
  ========================= */

  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    marginBottom: 24,

    borderWidth: 1,
    borderColor: "#E2E8F0",

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },

  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  profileTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#0F172A",
    marginLeft: 8,
  },

  profileRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  profileLabel: {
    fontSize: 11,
    color: "#64748B",
  },

  profileValue: {
    fontSize: 12,
    color: "#0F172A",
    fontWeight: "500",
    textAlign: "right",
  },

  /* =========================
      VERIFICATION
  ========================= */

  verificationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },

  verificationLabel: {
    fontSize: 11,
    color: "#64748B",
  },

  verificationValue: {
    fontSize: 12,
    fontWeight: "600",
    color: "#0F172A",
  },

  verificationValueVerified: {
    color: "#10B981",
  },

  verificationValueNotVerified: {
    color: "#EF4444",
  },

  verificationActionButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: "#F1F5F9",
  },

  verificationActionText: {
    fontSize: 10,
    color: "#2563EB",
    fontWeight: "600",
  },

  noteCounterError: {
    fontSize: 9,
    color: "#EF4444",
    fontStyle: "italic",
  },
});