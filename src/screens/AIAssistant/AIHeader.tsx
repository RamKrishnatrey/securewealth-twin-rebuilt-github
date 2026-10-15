import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { router } from "expo-router";

import styles from "./styles";

export default function AIHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <View style={styles.headerLogo}>
          <MaterialCommunityIcons
            name="creation"
            size={21}
            color="#FFFFFF"
          />
        </View>

        <View>
          <View style={styles.headerTitleRow}>
            <Text style={styles.headerTitle}>
              Twin AI
            </Text>

            <View style={styles.liveBadge}>
              <View style={styles.liveDot} />

              <Text style={styles.liveText}>
                LIVE
              </Text>
            </View>
          </View>

          <Text style={styles.headerSubtitle}>
            Financial Intelligence
          </Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.75}
        style={styles.historyButton}
        onPress={() =>
          router.push("/ai/history" as any)
        }
      >
        <Ionicons
          name="time-outline"
          size={21}
          color="#0F172A"
        />
      </TouchableOpacity>
    </View>
  );
}