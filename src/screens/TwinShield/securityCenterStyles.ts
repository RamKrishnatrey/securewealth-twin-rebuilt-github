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
    paddingTop: 16,
    paddingBottom: 40,
  },

  /* HEADER */

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
    fontSize: 16,
    fontWeight: "800",
  },

  headerSubtitle: {
    color: "#64748B",
    fontSize: 8,
    marginTop: 2,
  },

  headerShield: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F0FDF4",
    alignItems: "center",
    justifyContent: "center",
  },

  /* HERO */

  heroCard: {
    minHeight: 255,
    borderRadius: 30,
    backgroundColor: "#0F3D8C",
    padding: 21,
    overflow: "hidden",
    marginBottom: 28,

    shadowColor: "#2563EB",
    shadowOpacity: 0.16,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 6,
  },

  heroGlowOne: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor:
      "rgba(59,130,246,0.28)",
    top: -100,
    right: -70,
  },

  heroGlowTwo: {
    position: "absolute",
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor:
      "rgba(124,58,237,0.14)",
    bottom: -80,
    left: -60,
  },

  heroTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  activeBadge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:
      "rgba(255,255,255,0.12)",
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#4ADE80",
    marginRight: 5,
  },

  activeBadgeText: {
    color: "#DBEAFE",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 0.6,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "900",
    marginTop: 15,
  },

  heroDescription: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 9,
    lineHeight: 15,
    maxWidth: 245,
    marginTop: 6,
  },

  heroShield: {
    width: 66,
    height: 66,
    borderRadius: 22,
    backgroundColor:
      "rgba(255,255,255,0.12)",
    alignItems: "center",
    justifyContent: "center",
  },

  scoreSection: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 22,
  },

  scoreLabel: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 0.7,
  },

  scoreRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 3,
  },

  scoreValue: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "900",
    lineHeight: 34,
  },

  scoreMax: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 9,
    marginLeft: 2,
    marginBottom: 4,
  },

  scoreStatus: {
    flexDirection: "row",
    alignItems: "center",
  },

  scoreStatusText: {
    color: "#86EFAC",
    fontSize: 8,
    fontWeight: "700",
    marginLeft: 4,
  },

  scoreTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor:
      "rgba(255,255,255,0.14)",
    overflow: "hidden",
    marginTop: 8,
  },

  scoreFill: {
    width: "94%",
    height: "100%",
    borderRadius: 3,
    backgroundColor: "#60A5FA",
  },

  /* SECTIONS */

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  sectionTitle: {
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "800",
  },

  secureBadge: {
    backgroundColor: "#F0FDF4",
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  secureBadgeText: {
    color: "#16A34A",
    fontSize: 7,
    fontWeight: "800",
  },

  manageText: {
    color: "#2563EB",
    fontSize: 9,
    fontWeight: "700",
  },

  /* SETTINGS */

  settingsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 28,
  },

  settingRow: {
    minHeight: 78,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  settingIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  blueSettingIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  settingContent: {
    flex: 1,
    paddingRight: 8,
  },

  settingTitle: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "800",
  },

  settingSubtitle: {
    color: "#64748B",
    fontSize: 8,
    lineHeight: 12,
    marginTop: 3,
  },

  divider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginLeft: 53,
  },

  /* DEVICES */

  deviceCard: {
    minHeight: 86,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    marginBottom: 10,
  },

  deviceIcon: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  deviceIconPurple: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: "#F5F3FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  deviceContent: {
    flex: 1,
  },

  deviceTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  deviceTitle: {
    color: "#0F172A",
    fontSize: 10,
    fontWeight: "800",
  },

  currentBadge: {
    backgroundColor: "#EFF6FF",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginLeft: 7,
  },

  currentBadgeText: {
    color: "#2563EB",
    fontSize: 5,
    fontWeight: "900",
  },

  deviceSubtitle: {
    color: "#64748B",
    fontSize: 8,
    marginTop: 3,
  },

  trustedRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  trustedDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#22C55E",
    marginRight: 4,
  },

  trustedText: {
    color: "#16A34A",
    fontSize: 7,
    fontWeight: "700",
  },

  /* LIMIT */

  limitRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  limitValue: {
    color: "#0F172A",
    fontSize: 9,
    fontWeight: "800",
    marginRight: 4,
  },

  /* AI */

  aiBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F3FF",
    borderRadius: 14,
    paddingHorizontal: 7,
    paddingVertical: 4,
  },

  aiBadgeText: {
    color: "#7C3AED",
    fontSize: 7,
    fontWeight: "800",
    marginLeft: 3,
  },

  /* EMERGENCY */

  emergencyCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: "#FECACA",
  },

  emergencyTop: {
    flexDirection: "row",
  },

  emergencyIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: "#FEF2F2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  emergencyContent: {
    flex: 1,
  },

  emergencyTitle: {
    color: "#991B1B",
    fontSize: 11,
    fontWeight: "800",
  },

  emergencyDescription: {
    color: "#64748B",
    fontSize: 8,
    lineHeight: 13,
    marginTop: 4,
  },

  freezeButton: {
    height: 48,
    borderRadius: 16,
    backgroundColor: "#DC2626",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },

  freezeButtonText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "800",
    marginLeft: 7,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
  },

  footerText: {
    color: "#94A3B8",
    fontSize: 7,
    marginLeft: 5,
  },

  bottomSpace: {
    height: 35,
  },
});