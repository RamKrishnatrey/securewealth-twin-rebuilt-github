import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const LOGO_SIZE = width * 0.34;

export default StyleSheet.create({
  /* ===========================
     Root
  ============================ */

  container: {
    flex: 1,
    backgroundColor: "#F8FBFF",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 28,
    paddingTop: Platform.OS === "android" ? 70 : 40,
  },

  /* ===========================
     Logo
  ============================ */

  logoWrapper: {
    width: LOGO_SIZE + 90,
    height: LOGO_SIZE + 90,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },

  /* ===========================
     App Title
  ============================ */

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#0F172A",
    letterSpacing: 0.4,
    textAlign: "center",
  },

  subtitle: {
    marginTop: 14,
    textAlign: "center",
    fontSize: 15,
    lineHeight: 24,
    color: "#64748B",
    paddingHorizontal: 18,
    marginBottom: 34,
  },

  /* ===========================
     AI Card
  ============================ */

  aiCard: {
    width: "100%",
    borderRadius: 22,
    paddingHorizontal: 22,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: "rgba(37,99,235,0.08)",
    backgroundColor: "rgba(255,255,255,0.78)",

    shadowColor: "#2563EB",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 10,
    },

    elevation: 5,
  },

  aiHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  aiDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#2563EB",
    marginRight: 10,
  },

  aiTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E293B",
  },

  aiDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: "#64748B",
  },
    /* ===========================
     Progress
  ============================ */

  progressSection: {
    width: "100%",
    marginTop: 34,
  },

  progressRow: {
    marginTop: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  loadingText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#64748B",
  },

  progressValue: {
    fontSize: 15,
    fontWeight: "700",
    color: "#2563EB",
  },

  /* ===========================
     Spacer
  ============================ */

  flexSpacer: {
    flex: 1,
  },

  /* ===========================
     Bottom Glow
  ============================ */

  bottomGlow: {
    position: "absolute",
    left: -40,
    right: -40,
    bottom: 90,
    height: 180,
    borderRadius: 180,
  },

  /* ===========================
     Footer
  ============================ */

  footer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 34,
  },

  securityBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: 100,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "rgba(37,99,235,0.08)",

    shadowColor: "#2563EB",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 2,
  },

  securityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#22C55E",
    marginRight: 8,
  },

  securityText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#475569",
  },

  version: {
    marginTop: 14,
    fontSize: 12,
    color: "#94A3B8",
    fontWeight: "500",
    letterSpacing: 0.3,
  },
});