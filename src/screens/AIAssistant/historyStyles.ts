import {
  StyleSheet,
} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  header: {
    height: 68,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 14,

    backgroundColor: "#FFFFFF",

    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },

  headerButton: {
    width: 42,
    height: 42,

    borderRadius: 21,

    backgroundColor: "#F8FAFC",

    alignItems: "center",
    justifyContent: "center",
  },

  headerCenter: {
    alignItems: "center",
  },

  headerTitle: {
    color: "#0F172A",

    fontSize: 17,
    fontWeight: "800",
  },

  headerSubtitle: {
    color: "#64748B",

    fontSize: 8,

    marginTop: 2,
  },

  newChatButton: {
    width: 42,
    height: 42,

    borderRadius: 21,

    backgroundColor: "#EFF6FF",

    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    paddingHorizontal: 15,
    paddingTop: 16,
    paddingBottom: 30,
  },

  securityCard: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F0FDF4",

    borderRadius: 17,

    padding: 13,

    borderWidth: 1,
    borderColor: "#DCFCE7",

    marginBottom: 22,
  },

  securityContent: {
    flex: 1,
    marginLeft: 10,
  },

  securityTitle: {
    color: "#166534",

    fontSize: 11,
    fontWeight: "800",
  },

  securityText: {
    color: "#15803D",

    fontSize: 8,
    lineHeight: 12,

    marginTop: 2,
  },

  sectionLabel: {
    color: "#64748B",

    fontSize: 8,
    fontWeight: "800",

    letterSpacing: 1,

    marginBottom: 10,
  },

  historyCard: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFFFFF",

    borderRadius: 19,

    padding: 14,

    marginBottom: 10,

    borderWidth: 1,
    borderColor: "#E2E8F0",

    elevation: 2,
  },

  historyIcon: {
    width: 42,
    height: 42,

    borderRadius: 14,

    backgroundColor: "#F5F3FF",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 11,
  },

  historyContent: {
    flex: 1,
  },

  historyTitle: {
    color: "#0F172A",

    fontSize: 11,
    fontWeight: "800",
  },

  historyPreview: {
    color: "#64748B",

    fontSize: 8,
    lineHeight: 12,

    marginTop: 3,

    paddingRight: 8,
  },

  historyDate: {
    color: "#94A3B8",

    fontSize: 7,

    marginTop: 5,
  },

  centerState: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 35,
  },

  stateText: {
    color: "#64748B",

    fontSize: 10,
    lineHeight: 16,

    textAlign: "center",

    marginTop: 10,
  },

  errorIcon: {
    width: 60,
    height: 60,

    borderRadius: 20,

    backgroundColor: "#FEF2F2",

    alignItems: "center",
    justifyContent: "center",
  },

  errorTitle: {
    color: "#0F172A",

    fontSize: 17,
    fontWeight: "800",

    marginTop: 15,
  },

  retryHistoryButton: {
    height: 44,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#2563EB",

    borderRadius: 14,

    paddingHorizontal: 18,

    marginTop: 17,
  },

  retryHistoryText: {
    color: "#FFFFFF",

    fontSize: 10,
    fontWeight: "800",

    marginLeft: 6,
  },

  emptyIcon: {
    width: 68,
    height: 68,

    borderRadius: 23,

    backgroundColor: "#F5F3FF",

    alignItems: "center",
    justifyContent: "center",
  },

  emptyTitle: {
    color: "#0F172A",

    fontSize: 17,
    fontWeight: "800",

    marginTop: 16,
  },

  startChatButton: {
    height: 46,

    backgroundColor: "#2563EB",

    borderRadius: 15,

    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 20,

    marginTop: 18,
  },

  startChatText: {
    color: "#FFFFFF",

    fontSize: 10,
    fontWeight: "800",
  },

  bottomSpace: {
    height: 20,
  },
});