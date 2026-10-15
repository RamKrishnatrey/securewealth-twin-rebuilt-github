import React from "react";
import { View } from "react-native";
import Animated, { AnimatedStyle } from "react-native-reanimated";

interface RadarProps {
  animatedStyle: AnimatedStyle<any>;
}

export default function Radar({
  animatedStyle,
}: RadarProps) {
  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          width: 240,
          height: 240,
          justifyContent: "center",
          alignItems: "center",
        },
        animatedStyle,
      ]}
      pointerEvents="none"
    >
      {/* Outer Pulse */}
      <View
        style={{
          position: "absolute",
          width: 230,
          height: 230,
          borderRadius: 115,
          borderWidth: 1,
          borderColor: "rgba(37,99,235,0.08)",
          backgroundColor: "rgba(37,99,235,0.015)",
        }}
      />

      {/* Middle Pulse */}
      <View
        style={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: 90,
          borderWidth: 1,
          borderColor: "rgba(79,70,229,0.10)",
          backgroundColor: "rgba(79,70,229,0.02)",
        }}
      />

      {/* Inner Pulse */}
      <View
        style={{
          position: "absolute",
          width: 130,
          height: 130,
          borderRadius: 65,
          borderWidth: 1,
          borderColor: "rgba(37,99,235,0.12)",
        }}
      />

      {/* Center Glow */}
      <View
        style={{
          position: "absolute",
          width: 90,
          height: 90,
          borderRadius: 45,
          backgroundColor: "rgba(37,99,235,0.05)",
        }}
      />

      {/* Horizontal Guide */}
      <View
        style={{
          position: "absolute",
          width: 180,
          height: 1,
          backgroundColor: "rgba(37,99,235,0.06)",
        }}
      />

      {/* Vertical Guide */}
      <View
        style={{
          position: "absolute",
          width: 1,
          height: 180,
          backgroundColor: "rgba(37,99,235,0.06)",
        }}
      />

      {/* Scanning Dot */}
      <View
        style={{
          position: "absolute",
          top: 20,
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: "#2563EB",

          shadowColor: "#2563EB",
          shadowOpacity: 0.8,
          shadowRadius: 8,
          shadowOffset: {
            width: 0,
            height: 0,
          },

          elevation: 6,
        }}
      />
    </Animated.View>
  );
}