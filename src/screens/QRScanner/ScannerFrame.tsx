import React from "react";

import {
  View,
  Text,
} from "react-native";

import { styles } from "./qrScannerStyles";

export default function ScannerFrame() {
  return (
    <View style={styles.scannerOverlay}>
      <View style={styles.scannerFrame}>
        {/* TOP LEFT */}

        <View
          style={[
            styles.corner,
            styles.topLeft,
          ]}
        />

        {/* TOP RIGHT */}

        <View
          style={[
            styles.corner,
            styles.topRight,
          ]}
        />

        {/* BOTTOM LEFT */}

        <View
          style={[
            styles.corner,
            styles.bottomLeft,
          ]}
        />

        {/* BOTTOM RIGHT */}

        <View
          style={[
            styles.corner,
            styles.bottomRight,
          ]}
        />

        {/* SCAN LINE */}

        <View style={styles.scanLine} />
      </View>

      <Text style={styles.scannerInstruction}>
        Position the QR code inside the frame
      </Text>

      <Text style={styles.scannerSubtext}>
        SecureWealth will scan it automatically
      </Text>
    </View>
  );
}