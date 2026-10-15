import React from "react";
import { View, Text } from "react-native";

export default function AIStatus() {
  return (
    <View
      style={{
        marginTop: 26,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 13,
          }}
        >
          Twin AI Score
        </Text>

        <Text
          style={{
            color: "#FFFFFF",
            fontWeight: "800",
            fontSize: 20,
          }}
        >
          98 / 100
        </Text>
      </View>

      <View>
        <Text
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 13,
          }}
        >
          Shield
        </Text>

        <Text
          style={{
            color: "#4ADE80",
            fontWeight: "700",
            fontSize: 18,
          }}
        >
          Protected
        </Text>
      </View>
    </View>
  );
}