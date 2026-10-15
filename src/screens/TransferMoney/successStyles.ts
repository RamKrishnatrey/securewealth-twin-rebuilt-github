import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 22,
    paddingBottom: 40,
  },

  successArea: {
    alignItems: "center",
    marginBottom: 22,
  },

  successCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,

    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#16A34A",
    shadowOpacity: 0.22,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    elevation: 7,
  },

  successTitle: {
    color: "#0F172A",
    fontSize: 24,
    fontWeight: "800",
    marginTop: 17,
  },

  successSubtitle: {
    color: "#64748B",
    fontSize: 11,
    marginTop: 5,
  },

  amountCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    alignItems: "center",
    padding: 21,
    marginBottom: 24,

    borderWidth: 1,
    borderColor: "#E2E8F0",

    elevation: 3,
  },

  sentLabel: {
    color: "#94A3B8",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },

  amount: {
    color: "#0F172A",
    fontSize: 35,
    fontWeight: "800",
    marginTop: 5,
  },

  recipient: {
    color: "#64748B",
    fontSize: 12,
    marginTop: 4,
  },

  completedBadge: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#DCFCE7",

    paddingHorizontal: 10,
    paddingVertical: 5,

    borderRadius: 14,
    marginTop: 13,
  },

  completedDot: {
    width: 6,
    height: 6,
    borderRadius: 3,

    backgroundColor: "#16A34A",
    marginRight: 5,
  },

  completedText: {
    color: "#15803D",
    fontSize: 8,
    fontWeight: "800",
  },

  sectionLabel: {
    color: "#64748B",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 10,
  },

  receiptCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    paddingHorizontal: 17,
    marginBottom: 16,

    borderWidth: 1,
    borderColor: "#E2E8F0",

    elevation: 2,
  },

  receiptRow: {
    minHeight: 55,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  receiptRowLast: {
    borderBottomWidth: 0,
  },

  receiptLabel: {
    color: "#64748B",
    fontSize: 11,
  },

  receiptValue: {
    maxWidth: "58%",

    color: "#0F172A",
    fontSize: 11,
    fontWeight: "700",

    textAlign: "right",
  },

  receiptValueSuccess: {
    color: "#16A34A",
  },

  shieldCard: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F0FDF4",

    borderRadius: 18,

    padding: 14,

    marginBottom: 14,

    borderWidth: 1,
    borderColor: "#DCFCE7",
  },

  shieldContent: {
    flex: 1,
    marginLeft: 10,
  },

  shieldTitle: {
    color: "#166534",
    fontSize: 12,
    fontWeight: "800",
  },

  shieldSubtitle: {
    color: "#15803D",
    fontSize: 9,
    marginTop: 2,
  },

  receiptButton: {
    height: 52,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#FFFFFF",

    borderRadius: 17,

    borderWidth: 1,
    borderColor: "#DBEAFE",

    marginBottom: 12,
  },

  receiptButtonText: {
    color: "#2563EB",
    fontSize: 12,
    fontWeight: "800",
    marginLeft: 7,
  },

  doneButton: {
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

  doneText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
    marginRight: 8,
  },

  activityButton: {
    height: 46,

    alignItems: "center",
    justifyContent: "center",

    marginTop: 7,
  },

  activityText: {
    color: "#2563EB",
    fontSize: 12,
    fontWeight: "800",
  },
});