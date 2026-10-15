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

  /* HEADER */

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  headerButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },

  headerCenter: {
    alignItems: "center",
  },

  headerTitle: {
    color: "#0F172A",
    fontSize: 18,
    fontWeight: "800",
  },

  headerSubtitle: {
    color: "#64748B",
    fontSize: 10,
    marginTop: 2,
  },

  liveBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 18,
  },

  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#16A34A",
    marginRight: 5,
  },

  liveText: {
    color: "#15803D",
    fontSize: 9,
    fontWeight: "800",
  },

  /* SCANNER */

  scannerSection: {
    width: 180,
    height: 180,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  outerScannerRing: {
    position: "absolute",
    width: 168,
    height: 168,
    borderRadius: 84,
    borderWidth: 2,
    borderColor: "#DBEAFE",
  },

  scannerRingMarker: {
    position: "absolute",
    top: -4,
    left: 75,

    width: 14,
    height: 14,
    borderRadius: 7,

    backgroundColor: "#2563EB",

    shadowColor: "#2563EB",
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },

  shieldCircle: {
    width: 118,
    height: 118,
    borderRadius: 59,

    shadowColor: "#2563EB",
    shadowOpacity: 0.2,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 8,
  },

  shieldGradient: {
    flex: 1,
    borderRadius: 59,
    alignItems: "center",
    justifyContent: "center",
  },

  scanTitle: {
    textAlign: "center",
    color: "#0F172A",
    fontSize: 23,
    fontWeight: "800",
  },

  scanSubtitle: {
    maxWidth: 310,
    alignSelf: "center",
    textAlign: "center",
    color: "#64748B",
    fontSize: 11,
    lineHeight: 17,
    marginTop: 6,
    marginBottom: 22,
  },

  /* PROGRESS */

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  progressLabel: {
    color: "#64748B",
    fontSize: 11,
    fontWeight: "700",
  },

  progressPercent: {
    color: "#2563EB",
    fontSize: 11,
    fontWeight: "800",
  },

  progressBackground: {
    height: 7,
    backgroundColor: "#E2E8F0",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#2563EB",
    borderRadius: 10,
  },

  /* TRANSFER */

  transferCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    marginBottom: 25,

    borderWidth: 1,
    borderColor: "#E2E8F0",

    shadowColor: "#000",
    shadowOpacity: 0.035,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 2,
  },

  transferLabel: {
    color: "#94A3B8",
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 0.8,
  },

  transferName: {
    color: "#0F172A",
    fontSize: 14,
    fontWeight: "800",
    marginTop: 4,
  },

  transferBank: {
    color: "#64748B",
    fontSize: 10,
    marginTop: 3,
  },

  transferAmount: {
    color: "#0F172A",
    fontSize: 19,
    fontWeight: "800",
  },

  sectionLabel: {
    color: "#64748B",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 10,
  },

  /* CHECKS */

  checksCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    paddingHorizontal: 16,
    marginBottom: 20,

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  checkRow: {
    minHeight: 72,
    flexDirection: "row",
    alignItems: "center",

    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  checkRowLast: {
    borderBottomWidth: 0,
  },

  checkIcon: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },

  checkIconActive: {
    backgroundColor: "#EEF4FF",
    borderWidth: 1,
    borderColor: "#BFDBFE",
  },

  checkIconComplete: {
    backgroundColor: "#22C55E",
    borderWidth: 0,
  },

  checkContent: {
    flex: 1,
    marginLeft: 11,
    paddingRight: 7,
  },

  checkTitle: {
    color: "#64748B",
    fontSize: 12,
    fontWeight: "700",
  },

  checkTitleActive: {
    color: "#0F172A",
  },

  checkDescription: {
    color: "#94A3B8",
    fontSize: 9,
    lineHeight: 14,
    marginTop: 3,
  },

  passedText: {
    color: "#16A34A",
    fontSize: 8,
    fontWeight: "800",
  },

  scanningChip: {
    backgroundColor: "#DBEAFE",
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 4,
  },

  scanningText: {
    color: "#2563EB",
    fontSize: 7,
    fontWeight: "800",
  },

  /* RESULT */

  resultCard: {
    borderRadius: 22,
    padding: 17,
    marginBottom: 18,

    borderWidth: 1,
    borderColor: "#BBF7D0",
  },

  resultHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  resultShield: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
  },

  resultHeaderText: {
    flex: 1,
    marginLeft: 11,
  },

  resultTitle: {
    color: "#166534",
    fontSize: 15,
    fontWeight: "800",
  },

  resultSubtitle: {
    color: "#15803D",
    fontSize: 9,
    marginTop: 3,
  },

  lowRiskBadge: {
    backgroundColor: "#DCFCE7",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  lowRiskText: {
    color: "#15803D",
    fontSize: 8,
    fontWeight: "800",
  },

  resultDivider: {
    height: 1,
    backgroundColor: "#BBF7D0",
    marginVertical: 15,
  },

  scoreRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  scoreLabel: {
    color: "#64748B",
    fontSize: 8,
    fontWeight: "700",
  },

  score: {
    color: "#16A34A",
    fontSize: 29,
    fontWeight: "800",
    marginTop: 2,
  },

  scoreOutOf: {
    fontSize: 12,
    color: "#64748B",
  },

  scoreDetails: {
    flexDirection: "row",
  },

  scoreItem: {
    alignItems: "center",
    marginLeft: 14,
  },

  scoreItemLabel: {
    color: "#94A3B8",
    fontSize: 8,
  },

  scoreItemValue: {
    color: "#166534",
    fontSize: 10,
    fontWeight: "800",
    marginTop: 3,
  },

  /* CONTINUE */

  continueButton: {
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

  continueText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
    marginHorizontal: 9,
  },

  securityFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    marginTop: 14,
    paddingHorizontal: 20,
  },

  securityFooterText: {
    color: "#64748B",
    fontSize: 9,
    marginLeft: 5,
    textAlign: "center",
  },
});