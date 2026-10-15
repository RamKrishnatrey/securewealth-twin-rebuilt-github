import React from "react";
import { View, Text } from "react-native";

import styles from "../Splash.styles";

export default function Footer() {
  return (
    <View style={styles.footer}>
      {/* Security Badge */}
      <View style={styles.securityBadge}>
        <View style={styles.securityDot} />

        <Text style={styles.securityText}>
          256-bit Bank Grade Encryption
        </Text>
      </View>

      {/* Version */}
      <Text style={styles.version}>
        Version 1.0.0
      </Text>
    </View>
  );
}