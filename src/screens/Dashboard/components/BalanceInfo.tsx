import React from "react";
import { View, Text } from "react-native";

export default function BalanceInfo() {
  return (
    <View style={{ marginTop: 22 }}>
      <Text
        style={{
          color: "rgba(255,255,255,0.75)",
          fontSize: 15,
          fontWeight: "600",
        }}
      >
        Total Net Worth
      </Text>

      <Text
        style={{
          marginTop: 8,
          fontSize: 38,
          fontWeight: "800",
          color: "#FFFFFF",
        }}
      >
        ₹5,20,000
      </Text>
    </View>
  );
}