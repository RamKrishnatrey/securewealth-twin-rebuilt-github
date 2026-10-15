import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  header: {
    minHeight: 70,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },

  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
  },

  headerContent: {
    flex: 1,
    marginHorizontal: 12,
  },

  headerSpacer: {
    width: 40,
  },

  headerTitle: {
    color: "#0F172A",
    fontSize: 17,
    fontWeight: "900",
  },

  headerSubtitle: {
    color: "#64748B",
    fontSize: 9,
    marginTop: 2,
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 38,
  },

  sectionLabel: {
    color: "#64748B",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 0.9,
    marginLeft: 2,
    marginBottom: 8,
    marginTop: 8,
  },

  settingsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    overflow: "hidden",
    marginBottom: 17,
  },

  settingItem: {
    minHeight: 72,
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
  },

  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  settingContent: {
    flex: 1,
    marginRight: 8,
  },

  settingTitle: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "800",
  },

  settingSubtitle: {
    color: "#94A3B8",
    fontSize: 8,
    marginTop: 3,
  },

  divider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginLeft: 64,
  },

  securityFooter: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderWidth: 1,
    borderColor: "#BBF7D0",
    borderRadius: 17,
    padding: 13,
    marginTop: 4,
  },

  footerContent: {
    flex: 1,
    marginLeft: 9,
  },

  footerTitle: {
    color: "#15803D",
    fontSize: 10,
    fontWeight: "800",
  },

  footerText: {
    color: "#16A34A",
    fontSize: 8,
    lineHeight: 12,
    marginTop: 3,
  },

  version: {
    color: "#94A3B8",
    fontSize: 8,
    textAlign: "center",
    marginTop: 17,
  },
});