import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  flex: {
    flex: 1,
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

  avatarSection: {
    alignItems: "center",
    marginTop: 7,
    marginBottom: 26,
  },

  avatarWrapper: {
    position: "relative",
  },

  avatar: {
    width: 82,
    height: 82,
    borderRadius: 27,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "900",
  },

  cameraButton: {
    position: "absolute",
    right: -5,
    bottom: -5,
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: "#0F172A",
    borderWidth: 3,
    borderColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarTitle: {
    color: "#0F172A",
    fontSize: 12,
    fontWeight: "800",
    marginTop: 12,
  },

  avatarSubtitle: {
    color: "#94A3B8",
    fontSize: 8,
    marginTop: 3,
  },

  sectionLabel: {
    color: "#64748B",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 0.9,
    marginLeft: 2,
    marginBottom: 8,
  },

  formCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 20,
    overflow: "hidden",
  },

  inputSection: {
    paddingHorizontal: 14,
    paddingVertical: 13,
  },

  inputLabel: {
    color: "#94A3B8",
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 0.5,
    marginBottom: 7,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  inputIcon: {
    width: 35,
    height: 35,
    borderRadius: 11,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  input: {
    flex: 1,
    color: "#0F172A",
    fontSize: 12,
    fontWeight: "600",
    paddingVertical: 7,
  },

  divider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginHorizontal: 14,
  },

  verificationCard: {
    minHeight: 72,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderWidth: 1,
    borderColor: "#BBF7D0",
    borderRadius: 17,
    padding: 13,
    marginTop: 14,
  },

  verificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  verificationContent: {
    flex: 1,
  },

  verificationTitle: {
    color: "#15803D",
    fontSize: 10,
    fontWeight: "800",
  },

  verificationText: {
    color: "#16A34A",
    fontSize: 8,
    lineHeight: 12,
    marginTop: 3,
  },

  infoCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#EFF6FF",
    borderRadius: 16,
    padding: 13,
    marginTop: 12,
  },

  infoText: {
    flex: 1,
    color: "#475569",
    fontSize: 8,
    lineHeight: 13,
    marginLeft: 8,
  },

  saveButton: {
    height: 53,
    borderRadius: 16,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
  },

  saveButtonMuted: {
    opacity: 0.72,
  },

  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900",
    marginLeft: 7,
  },

  cancelButton: {
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },

  cancelText: {
    color: "#64748B",
    fontSize: 11,
    fontWeight: "700",
  },
});