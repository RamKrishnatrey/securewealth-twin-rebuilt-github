import React, {
  useEffect,
  useState,
} from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

import {
  CameraView,
  Camera,
  BarcodeScanningResult,
} from "expo-camera";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { router } from "expo-router";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import ScannerFrame from "./ScannerFrame";

import { styles } from "./qrScannerStyles";

export default function QRScannerScreen() {
  const [hasPermission, setHasPermission] =
    useState<boolean | null>(null);

  const [scanned, setScanned] =
    useState(false);

  const [torchEnabled, setTorchEnabled] =
    useState(false);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission =
    async () => {
      const permission =
        await Camera.requestCameraPermissionsAsync();

      setHasPermission(
        permission.status === "granted"
      );
    };

  const handleBarcodeScanned = (
    result: BarcodeScanningResult
  ) => {
    if (scanned) {
      return;
    }

    setScanned(true);

    const scannedData = result.data;

    router.push({
      pathname: "/scan-result" as any,

      params: {
        data: scannedData,
      },
    });
  };

  /* =====================================
     LOADING PERMISSION
  ===================================== */

  if (hasPermission === null) {
    return (
      <SafeAreaView
        style={styles.permissionContainer}
      >
        <MaterialCommunityIcons
          name="camera-outline"
          size={42}
          color="#2563EB"
        />

        <Text style={styles.permissionTitle}>
          Preparing Scanner
        </Text>

        <Text style={styles.permissionText}>
          Checking camera permission...
        </Text>
      </SafeAreaView>
    );
  }

  /* =====================================
     CAMERA DENIED
  ===================================== */

  if (hasPermission === false) {
    return (
      <SafeAreaView
        style={styles.permissionContainer}
      >
        <View
          style={styles.permissionIcon}
        >
          <MaterialCommunityIcons
            name="camera-off-outline"
            size={34}
            color="#DC2626"
          />
        </View>

        <Text style={styles.permissionTitle}>
          Camera Access Required
        </Text>

        <Text style={styles.permissionText}>
          SecureWealth Twin needs camera access
          to scan payment QR codes.
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.permissionButton}
          onPress={requestCameraPermission}
        >
          <Text
            style={styles.permissionButtonText}
          >
            Allow Camera
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.permissionBackButton}
          onPress={() => router.back()}
        >
          <Text
            style={
              styles.permissionBackText
            }
          >
            Go Back
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  /* =====================================
     SCANNER
  ===================================== */

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing="back"
        enableTorch={torchEnabled}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={
          scanned
            ? undefined
            : handleBarcodeScanned
        }
      />

      {/* DARK CAMERA OVERLAY */}

      <View
        style={styles.overlay}
        pointerEvents="box-none"
      >
        <SafeAreaView
          style={styles.safeArea}
          edges={["top", "bottom"]}
        >
          {/* HEADER */}

          <View style={styles.header}>
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.headerButton}
              onPress={() => router.back()}
            >
              <Ionicons
                name="close"
                size={24}
                color="#FFFFFF"
              />
            </TouchableOpacity>

            <View style={styles.headerCenter}>
              <Text style={styles.headerTitle}>
                Scan QR
              </Text>

              <Text
                style={styles.headerSubtitle}
              >
                Secure Payment
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.75}
              style={[
                styles.headerButton,
                torchEnabled &&
                  styles.activeHeaderButton,
              ]}
              onPress={() =>
                setTorchEnabled(
                  (current) => !current
                )
              }
            >
              <Ionicons
                name={
                  torchEnabled
                    ? "flash"
                    : "flash-outline"
                }
                size={22}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </View>

          {/* SECURITY CHIP */}

          <View style={styles.securityChip}>
            <MaterialCommunityIcons
              name="shield-check-outline"
              size={15}
              color="#86EFAC"
            />

            <Text
              style={styles.securityChipText}
            >
              Protected by Twin Shield
            </Text>
          </View>

          {/* SCANNER */}

          <View style={styles.scannerArea}>
            <ScannerFrame />
          </View>

          {/* BOTTOM */}

          <View style={styles.bottomArea}>
            <View style={styles.bottomCard}>
              <View style={styles.bottomIcon}>
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={23}
                  color="#2563EB"
                />
              </View>

              <View style={styles.bottomContent}>
                <Text
                  style={styles.bottomTitle}
                >
                  Scan payment QR
                </Text>

                <Text
                  style={styles.bottomText}
                >
                  Point your camera at a supported
                  payment QR code.
                </Text>
              </View>
            </View>

            {scanned && (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.scanAgainButton}
                onPress={() =>
                  setScanned(false)
                }
              >
                <Ionicons
                  name="scan-outline"
                  size={18}
                  color="#FFFFFF"
                />

                <Text
                  style={
                    styles.scanAgainButtonText
                  }
                >
                  Scan Again
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}