import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function GrowthIndicator() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 18,
          fontWeight: "700",
        }}
      >
        Wealth Growth
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.18)",
          paddingHorizontal: 10,
          paddingVertical: 6,
          borderRadius: 50,
        }}
      >
        <Ionicons
          name="trending-up"
          color="#FFFFFF"
          size={16}
        />

        <Text
          style={{
            color: "#FFFFFF",
            marginLeft: 5,
            fontWeight: "700",
          }}
        >
          +5.77%
        </Text>
      </View>
    </View>
  );
}