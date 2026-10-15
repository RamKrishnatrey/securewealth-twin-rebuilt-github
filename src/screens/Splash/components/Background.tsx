import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Splash.styles";

export default function Background() {
  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Main Background */}
      <LinearGradient
        colors={[
          "#FFFFFF",
          "#F8FBFF",
          "#F2F7FF",
        ]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{
          flex: 1,
        }}
      />

      {/* Top Left Glow */}
      <View
        style={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: 130,
          backgroundColor: "rgba(37,99,235,0.10)",
          top: -90,
          left: -80,
        }}
      />

      {/* Top Right Glow */}
      <View
        style={{
          position: "absolute",
          width: 220,
          height: 220,
          borderRadius: 110,
          backgroundColor: "rgba(79,70,229,0.08)",
          top: 70,
          right: -70,
        }}
      />

      {/* Center Blue Glow */}
      <View
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: 150,
          backgroundColor: "rgba(37,99,235,0.06)",
          alignSelf: "center",
          top: 170,
        }}
      />

      {/* Bottom Glow */}
      <View
        style={{
          position: "absolute",
          width: 360,
          height: 360,
          borderRadius: 180,
          backgroundColor: "rgba(79,70,229,0.05)",
          alignSelf: "center",
          bottom: -170,
        }}
      />

      {/* Decorative Floating Circles */}
      <View
        style={{
          position: "absolute",
          width: 12,
          height: 12,
          borderRadius: 6,
          backgroundColor: "rgba(37,99,235,0.18)",
          top: 120,
          left: 60,
        }}
      />

      <View
        style={{
          position: "absolute",
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: "rgba(79,70,229,0.20)",
          top: 220,
          right: 55,
        }}
      />

      <View
        style={{
          position: "absolute",
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: "rgba(37,99,235,0.14)",
          bottom: 240,
          left: 45,
        }}
      />

      <View
        style={{
          position: "absolute",
          width: 6,
          height: 6,
          borderRadius: 3,
          backgroundColor: "rgba(79,70,229,0.18)",
          bottom: 170,
          right: 70,
        }}
      />
    </View>
  );
}