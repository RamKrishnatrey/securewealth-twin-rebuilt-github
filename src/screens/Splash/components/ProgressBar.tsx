import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface ProgressBarProps {
  progress: number; // value between 0 and 1
}

const { width } = Dimensions.get("window");
const BAR_WIDTH = width - 56;

export default function ProgressBar({
  progress,
}: ProgressBarProps) {
  const fillWidth = Math.max(
    0,
    Math.min(progress, 1) * BAR_WIDTH
  );

  return (
    <View style={styles.container}>
      {/* Background Track */}
      <View style={styles.track}>
        {/* Progress Fill */}
        <LinearGradient
          colors={[
            "#2563EB",
            "#3B82F6",
            "#4F46E5",
          ]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={[
            styles.fill,
            {
              width: fillWidth,
            },
          ]}
        />

        {/* White Shine */}
        <View
          style={[
            styles.shine,
            {
              left: Math.max(fillWidth - 18, 0),
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: BAR_WIDTH,
    alignSelf: "center",
  },

  track: {
    width: "100%",
    height: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#E8EEF9",
  },

  fill: {
    height: "100%",
    borderRadius: 10,
  },

  shine: {
    position: "absolute",
    top: 1,
    width: 14,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.55)",
  },
});