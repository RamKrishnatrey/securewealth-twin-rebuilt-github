import {
  Dimensions,
  StyleSheet,
} from "react-native";

const { width } = Dimensions.get("window");

const FRAME_SIZE = Math.min(
  width * 0.68,
  285
);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },

  camera: {
  ...StyleSheet.absoluteFill,
},

  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(2, 6, 23, 0.36)",
  },

  safeArea: {
    flex: 1,
  },

  /* HEADER */

  header: {
    height: 70,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
  },

  headerButton: {
    width: 43,
    height: 43,
    borderRadius: 15,
    backgroundColor:
      "rgba(15, 23, 42, 0.55)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor:
      "rgba(255,255,255,0.15)",
  },

  activeHeaderButton: {
    backgroundColor:
      "rgba(37,99,235,0.85)",
  },

  headerCenter: {
    flex: 1,
    alignItems: "center",
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "900",
  },

  headerSubtitle: {
    color: "#CBD5E1",
    fontSize: 8,
    marginTop: 2,
  },

  /* SECURITY */

  securityChip: {
    alignSelf: "center",
    height: 30,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor:
      "rgba(15,23,42,0.65)",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor:
      "rgba(134,239,172,0.25)",
  },

  securityChipText: {
    color: "#DCFCE7",
    fontSize: 8,
    fontWeight: "700",
    marginLeft: 5,
  },

  /* SCANNER AREA */

  scannerArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  scannerOverlay: {
    alignItems: "center",
  },

  scannerFrame: {
    width: FRAME_SIZE,
    height: FRAME_SIZE,
    position: "relative",
  },

  corner: {
    position: "absolute",
    width: 47,
    height: 47,
    borderColor: "#FFFFFF",
  },

  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderTopLeftRadius: 17,
  },

  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderTopRightRadius: 17,
  },

  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderBottomLeftRadius: 17,
  },

  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderBottomRightRadius: 17,
  },

  scanLine: {
    position: "absolute",
    left: 16,
    right: 16,
    top: "50%",
    height: 2,
    borderRadius: 2,
    backgroundColor: "#60A5FA",
  },

  scannerInstruction: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
    marginTop: 23,
    textAlign: "center",
  },

  scannerSubtext: {
    color: "#CBD5E1",
    fontSize: 9,
    marginTop: 5,
    textAlign: "center",
  },

  /* BOTTOM */

  bottomArea: {
    paddingHorizontal: 18,
    paddingBottom: 18,
  },

  bottomCard: {
    minHeight: 72,
    backgroundColor:
      "rgba(15,23,42,0.75)",
    borderRadius: 19,
    borderWidth: 1,
    borderColor:
      "rgba(255,255,255,0.12)",
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
  },

  bottomIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  bottomContent: {
    flex: 1,
  },

  bottomTitle: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "800",
  },

  bottomText: {
    color: "#CBD5E1",
    fontSize: 8,
    lineHeight: 12,
    marginTop: 3,
  },

  scanAgainButton: {
    height: 47,
    borderRadius: 15,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  scanAgainButtonText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "800",
    marginLeft: 6,
  },

  /* PERMISSION */

  permissionContainer: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
  },

  permissionIcon: {
    width: 72,
    height: 72,
    borderRadius: 23,
    backgroundColor: "#FEF2F2",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  permissionTitle: {
    color: "#0F172A",
    fontSize: 18,
    fontWeight: "900",
    marginTop: 12,
  },

  permissionText: {
    color: "#64748B",
    fontSize: 10,
    lineHeight: 16,
    textAlign: "center",
    marginTop: 7,
  },

  permissionButton: {
    width: "100%",
    height: 50,
    borderRadius: 16,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 23,
  },

  permissionButtonText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "800",
  },

  permissionBackButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },

  permissionBackText: {
    color: "#64748B",
    fontSize: 10,
    fontWeight: "700",
  },
});