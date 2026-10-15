import React from "react";
import { Image, View } from "react-native";

import LogoShield from "@/assets/images/logo-shield.png";

export default function Logo() {
  return (
    <View
      style={{
        width: 170,
        height: 170,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={LogoShield}
        style={{
          width: 150,
          height: 150,
          resizeMode: "contain",
        }}
      />
    </View>
  );
}