import React from "react";
import { View } from "react-native";

import BalanceInfo from "./BalanceInfo";
import GrowthIndicator from "./GrowthIndicator";
import AIStatus from "./AIStatus";
import MiniChart from "./MiniChart";

export default function BalanceCard() {
  return (
    <View
      style={{
        marginTop: 24,
        backgroundColor: "#2563EB",
        borderRadius: 28,
        padding: 22,
        overflow: "hidden",

        shadowColor: "#2563EB",
        shadowOpacity: 0.25,
        shadowRadius: 18,
        elevation: 12,
      }}
    >
      <GrowthIndicator />

      <BalanceInfo />

      <AIStatus />

      <MiniChart />
    </View>
  );
}