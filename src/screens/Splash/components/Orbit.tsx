import React from "react";
import { View } from "react-native";
import Animated, {
  AnimatedStyle,
} from "react-native-reanimated";

interface OrbitProps {
  animatedStyle: AnimatedStyle<any>;
}

export default function Orbit({
  animatedStyle,
}: OrbitProps) {
  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          width: 185,
          height: 185,
          justifyContent: "center",
          alignItems: "center",
        },
        animatedStyle,
      ]}
    >
      {/* Outer Orbit */}
      <View
        style={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: 90,
          borderWidth: 1.5,
          borderColor: "rgba(37,99,235,0.18)",
        }}
      />

      {/* Middle Orbit */}
      <View
        style={{
          position: "absolute",
          width: 155,
          height: 155,
          borderRadius: 78,
          borderWidth: 1,
          borderColor: "rgba(79,70,229,0.15)",
        }}
      />

      {/* Inner Orbit */}
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

      {/* Orbit Node - Top */}
      <View
        style={{
          position: "absolute",
          top: 5,
          width: 12,
          height: 12,
          borderRadius: 6,
          backgroundColor: "#2563EB",
        }}
      />

      {/* Orbit Node - Right */}
      <View
        style={{
          position: "absolute",
          right: 5,
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: "#4F46E5",
        }}
      />

      {/* Orbit Node - Bottom */}
      <View
        style={{
          position: "absolute",
          bottom: 5,
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: "#60A5FA",
        }}
      />

      {/* Orbit Node - Left */}
      <View
        style={{
          position: "absolute",
          left: 5,
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: "#3B82F6",
        }}
      />
    </Animated.View>
  );
}