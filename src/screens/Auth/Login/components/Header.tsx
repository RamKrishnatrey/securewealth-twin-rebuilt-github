import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../Login.styles";
import Logo from "@/assets/images/logo-shield.png";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.titleWrap}>
        <Text style={styles.title}>SecureWealth Twin</Text>
        <Text style={styles.subtitle}>AI Powered Banking</Text>
      </View>
    </View>
  );
}
