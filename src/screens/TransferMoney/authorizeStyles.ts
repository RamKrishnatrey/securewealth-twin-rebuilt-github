import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 16,
    paddingTop: 8,

    marginBottom: 10,
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

  secureBadge: {
    width: 44,
    height: 44,

    borderRadius: 22,

    backgroundColor: "#F0FDF4",

    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 14,
  },

  transactionCard: {
    backgroundColor: "#FFFFFF",

    borderRadius: 24,

    padding: 22,

    alignItems: "center",

    borderWidth: 1,
    borderColor: "#E2E8F0",

    elevation: 3,
  },

  sendingLabel: {
    color: "#94A3B8",

    fontSize: 9,
    fontWeight: "800",

    letterSpacing: 1,
  },

  amount: {
    color: "#0F172A",

    fontSize: 38,
    fontWeight: "800",

    marginTop: 7,
  },

  toLabel: {
    color: "#94A3B8",
    fontSize: 10,
    marginTop: 8,
  },

  beneficiaryName: {
    color: "#0F172A",

    fontSize: 16,
    fontWeight: "800",

    marginTop: 3,
  },

  bank: {
    color: "#64748B",

    fontSize: 10,

    marginTop: 4,
  },

  shieldCard: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F0FDF4",

    borderRadius: 18,

    padding: 13,

    marginTop: 13,

    borderWidth: 1,
    borderColor: "#DCFCE7",
  },

  shieldIcon: {
    width: 40,
    height: 40,

    borderRadius: 20,

    backgroundColor: "#DCFCE7",

    alignItems: "center",
    justifyContent: "center",
  },

  shieldInfo: {
    flex: 1,
    marginLeft: 10,
  },

  shieldTitle: {
    color: "#166534",

    fontSize: 12,
    fontWeight: "800",
  },

  shieldText: {
    color: "#15803D",

    fontSize: 9,

    marginTop: 2,
  },

  scoreBadge: {
    alignItems: "center",

    backgroundColor: "#DCFCE7",

    borderRadius: 12,

    paddingHorizontal: 9,
    paddingVertical: 5,
  },

  score: {
    color: "#15803D",

    fontSize: 11,
    fontWeight: "800",
  },

  risk: {
    color: "#16A34A",

    fontSize: 7,
    fontWeight: "800",

    marginTop: 1,
  },

  authSection: {
    alignItems: "center",

    marginTop: 28,
    marginBottom: 24,
  },

  biometricCircleOuter: {
    width: 132,
    height: 132,

    borderRadius: 66,

    alignItems: "center",
    justifyContent: "center",
  },

  biometricCircle: {
    width: 108,
    height: 108,

    borderRadius: 54,

    backgroundColor: "#FFFFFF",

    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#2563EB",
    shadowOpacity: 0.12,
    shadowRadius: 18,

    elevation: 5,
  },

  authTitle: {
    color: "#0F172A",

    fontSize: 19,
    fontWeight: "800",

    marginTop: 17,
  },

  authDescription: {
    maxWidth: 300,

    textAlign: "center",

    color: "#64748B",

    fontSize: 11,
    lineHeight: 17,

    marginTop: 6,
  },

  authorizeButton: {
    height: 56,

    backgroundColor: "#2563EB",

    borderRadius: 18,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#2563EB",
    shadowOpacity: 0.22,
    shadowRadius: 12,

    elevation: 6,
  },

  authorizeButtonDisabled: {
    backgroundColor: "#E2E8F0",

    shadowOpacity: 0,
    elevation: 0,
  },

  authorizeText: {
    color: "#FFFFFF",

    fontSize: 14,
    fontWeight: "800",

    marginLeft: 8,
  },

  authorizeTextDisabled: {
    color: "#94A3B8",
  },

  orRow: {
    flexDirection: "row",
    alignItems: "center",

    marginVertical: 16,
  },

  line: {
    flex: 1,

    height: 1,

    backgroundColor: "#E2E8F0",
  },

  orText: {
    color: "#94A3B8",

    fontSize: 9,
    fontWeight: "700",

    marginHorizontal: 12,
  },

  otpButton: {
    height: 52,

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFFFFF",

    borderRadius: 17,

    paddingHorizontal: 16,

    borderWidth: 1,
    borderColor: "#DBEAFE",
  },

  otpText: {
    flex: 1,

    color: "#2563EB",

    fontSize: 12,
    fontWeight: "800",

    marginLeft: 9,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",

    marginTop: 16,

    paddingHorizontal: 16,
  },

  footerText: {
    maxWidth: 300,

    color: "#64748B",

    fontSize: 9,
    lineHeight: 14,

    marginLeft: 5,

    textAlign: "center",
  },

  processingOverlay: {
    ...StyleSheet.absoluteFill,

    backgroundColor: "rgba(15,23,42,0.42)",

    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 24,
  },

  processingCard: {
    width: "100%",

    backgroundColor: "#FFFFFF",

    borderRadius: 26,

    padding: 28,

    alignItems: "center",

    elevation: 10,
  },

  processingTitle: {
    color: "#0F172A",

    fontSize: 19,
    fontWeight: "800",

    marginTop: 18,
  },

  processingText: {
    color: "#64748B",

    fontSize: 11,
    lineHeight: 18,

    textAlign: "center",

    marginTop: 7,
  },

  processingSecurity: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F0FDF4",

    paddingHorizontal: 12,
    paddingVertical: 7,

    borderRadius: 16,

    marginTop: 18,
  },

  processingSecurityText: {
    color: "#15803D",

    fontSize: 10,
    fontWeight: "700",

    marginLeft: 5,
  },
});