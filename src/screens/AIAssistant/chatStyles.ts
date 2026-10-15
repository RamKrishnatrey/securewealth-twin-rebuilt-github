import {
  StyleSheet,
} from "react-native";

export default StyleSheet.create({
    retryButton: {
  alignSelf: "center",

  flexDirection: "row",
  alignItems: "center",

  backgroundColor: "#FEF2F2",

  borderRadius: 14,

  paddingHorizontal: 14,
  paddingVertical: 9,

  marginBottom: 18,

  borderWidth: 1,
  borderColor: "#FECACA",
},

retryText: {
  color: "#DC2626",

  fontSize: 9,
  fontWeight: "800",

  marginLeft: 6,
},
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  /* HEADER */

  header: {
    height: 64,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 14,

    backgroundColor: "#FFFFFF",

    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  headerButton: {
    width: 40,
    height: 40,

    borderRadius: 20,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#F8FAFC",
  },

  headerAI: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerAIIcon: {
    position: "relative",

    width: 40,
    height: 40,

    borderRadius: 14,

    backgroundColor: "#2563EB",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 9,
  },

  headerOnlineDot: {
    position: "absolute",

    right: -1,
    bottom: -1,

    width: 11,
    height: 11,

    borderRadius: 6,

    backgroundColor: "#22C55E",

    borderWidth: 2,
    borderColor: "#FFFFFF",
  },

  headerNameRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerName: {
    color: "#0F172A",

    fontSize: 14,
    fontWeight: "800",
  },

  headerLiveBadge: {
    backgroundColor: "#DCFCE7",

    borderRadius: 8,

    paddingHorizontal: 5,
    paddingVertical: 2,

    marginLeft: 5,
  },

  headerLiveText: {
    color: "#15803D",

    fontSize: 6,
    fontWeight: "800",
  },

  headerStatus: {
    color: "#64748B",

    fontSize: 8,

    marginTop: 2,
  },

  /* SECURITY */

  securityStrip: {
    height: 34,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#F0FDF4",

    borderBottomWidth: 1,
    borderBottomColor: "#DCFCE7",
  },

  securityStripText: {
    color: "#15803D",

    fontSize: 8,
    fontWeight: "600",

    marginLeft: 4,
  },

  securityStripDot: {
    width: 3,
    height: 3,

    borderRadius: 2,

    backgroundColor: "#86EFAC",

    marginHorizontal: 9,
  },

  /* CHAT */

  chat: {
    flex: 1,
  },

  chatContent: {
    paddingHorizontal: 14,
    paddingTop: 14,
  },

  dateRow: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 20,
  },

  dateLine: {
    flex: 1,

    height: 1,

    backgroundColor: "#E2E8F0",
  },

  dateText: {
    color: "#94A3B8",

    fontSize: 7,
    fontWeight: "800",

    marginHorizontal: 10,

    letterSpacing: 1,
  },

  /* USER */

  userMessageRow: {
    alignItems: "flex-end",

    marginBottom: 18,

    paddingLeft: 55,
  },

  userBubble: {
    maxWidth: "88%",

    backgroundColor: "#2563EB",

    borderRadius: 20,
    borderBottomRightRadius: 6,

    paddingHorizontal: 15,
    paddingTop: 12,
    paddingBottom: 8,
  },

  userText: {
    color: "#FFFFFF",

    fontSize: 12,
    lineHeight: 18,
  },

  userMessageFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",

    marginTop: 6,
  },

  userTime: {
    color:
      "rgba(255,255,255,0.62)",

    fontSize: 7,

    marginRight: 4,
  },

  /* AI */

  aiMessageRow: {
    flexDirection: "row",
    alignItems: "flex-start",

    marginBottom: 18,

    paddingRight: 25,
  },

  aiAvatar: {
    width: 32,
    height: 32,

    borderRadius: 11,

    backgroundColor: "#4F46E5",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 8,

    marginTop: 2,
  },

  aiMessageContent: {
    flex: 1,
  },

  aiBubble: {
    backgroundColor: "#FFFFFF",

    borderRadius: 20,
    borderTopLeftRadius: 6,

    padding: 14,

    borderWidth: 1,
    borderColor: "#E2E8F0",

    shadowColor: "#000",
    shadowOpacity: 0.025,
    shadowRadius: 8,

    elevation: 1,
  },

  aiBubbleHeader: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 8,
  },

  aiBubbleName: {
    color: "#0F172A",

    fontSize: 11,
    fontWeight: "800",
  },

  aiBadge: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F3E8FF",

    borderRadius: 8,

    paddingHorizontal: 5,
    paddingVertical: 2,

    marginLeft: 5,
  },

  aiBadgeText: {
    color: "#7C3AED",

    fontSize: 6,
    fontWeight: "800",

    marginLeft: 2,
  },

  aiText: {
    color: "#334155",

    fontSize: 11,
    lineHeight: 18,
  },

  aiFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: 10,
  },

  aiTime: {
    color: "#94A3B8",
    fontSize: 7,
  },

  aiConfidenceMini: {
    flexDirection: "row",
    alignItems: "center",
  },

  aiConfidenceMiniText: {
    color: "#16A34A",

    fontSize: 7,
    fontWeight: "700",

    marginLeft: 3,
  },

  feedbackRow: {
    flexDirection: "row",
    alignItems: "center",

    gap: 14,

    marginTop: 7,
    marginLeft: 6,
  },

  /* INSIGHT */

  insightBox: {
    backgroundColor: "#F8FAFC",

    borderRadius: 15,

    padding: 12,

    marginTop: 12,

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  insightBoxTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  insightBoxLabel: {
    color: "#64748B",

    fontSize: 8,
    fontWeight: "700",

    textTransform: "uppercase",

    letterSpacing: 0.5,
  },

  insightBoxValue: {
    fontSize: 18,
    fontWeight: "800",

    marginTop: 4,
  },

  insightBoxSubtitle: {
    color: "#64748B",

    fontSize: 8,

    marginTop: 2,
  },

  insightChartIcon: {
    width: 40,
    height: 40,

    borderRadius: 14,

    backgroundColor: "#FFFFFF",

    alignItems: "center",
    justifyContent: "center",
  },

  confidenceSection: {
    marginTop: 12,

    paddingTop: 10,

    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
  },

  confidenceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 6,
  },

  confidenceLabel: {
    color: "#64748B",
    fontSize: 8,
  },

  confidenceValue: {
    color: "#2563EB",

    fontSize: 8,
    fontWeight: "800",
  },

  confidenceTrack: {
    height: 5,

    borderRadius: 3,

    backgroundColor: "#E2E8F0",

    overflow: "hidden",
  },

  confidenceFill: {
    height: "100%",

    borderRadius: 3,

    backgroundColor: "#2563EB",
  },

  /* TYPING */

  typingBubble: {
    minWidth: 185,

    backgroundColor: "#FFFFFF",

    borderRadius: 18,
    borderTopLeftRadius: 6,

    paddingHorizontal: 14,
    paddingVertical: 11,

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  typingDots: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 6,
  },

  typingDot: {
    width: 6,
    height: 6,

    borderRadius: 3,

    backgroundColor: "#7C3AED",

    marginRight: 4,
  },

  typingText: {
    color: "#64748B",

    fontSize: 8,
  },

  /* SUGGESTIONS */

  suggestions: {
    marginLeft: 40,

    marginBottom: 12,
  },

  suggestionLabel: {
    color: "#94A3B8",

    fontSize: 7,
    fontWeight: "800",

    letterSpacing: 1,

    marginBottom: 8,
  },

  suggestionChip: {
    minHeight: 42,

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFFFFF",

    borderRadius: 14,

    paddingHorizontal: 12,

    marginBottom: 7,

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  suggestionText: {
    flex: 1,

    color: "#334155",

    fontSize: 9,
    fontWeight: "600",

    marginHorizontal: 8,
  },

  chatBottomSpace: {
    height: 15,
  },

  /* INPUT */

  inputArea: {
    backgroundColor: "#F8FAFC",

    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 7,

    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
  },

  inputFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    marginTop: 5,
  },

  inputFooterText: {
    color: "#94A3B8",

    fontSize: 7,

    marginLeft: 4,
  },

  /*
    MessageInput.tsx reuses these
  */

  messageInputWrapper: {
    minHeight: 52,

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    paddingHorizontal: 9,

    borderWidth: 1,
    borderColor: "#E2E8F0",

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,

    elevation: 3,
  },

  inputSparkle: {
    width: 32,
    height: 32,

    borderRadius: 11,

    backgroundColor: "#F5F3FF",

    alignItems: "center",
    justifyContent: "center",
  },

  messageInput: {
    flex: 1,

    color: "#0F172A",

    fontSize: 11,

    paddingHorizontal: 10,
  },

  sendButton: {
    width: 36,
    height: 36,

    borderRadius: 12,

    backgroundColor: "#2563EB",

    alignItems: "center",
    justifyContent: "center",
  },

  sendButtonDisabled: {
    backgroundColor: "#F1F5F9",
  },
});