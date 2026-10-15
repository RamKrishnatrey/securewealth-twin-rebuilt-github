import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface HeaderProps {
  userName: string;
}

export default function Header({ userName }: HeaderProps) {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("@/assets/images/logo-shield.png")}
          style={{
            width: 54,
            height: 54,
            borderRadius: 27,
          }}
        />

        <View style={{ marginLeft: 14 }}>
          <Text
            style={{
              color: "#64748B",
              fontSize: 14,
            }}
          >
            {greeting}
          </Text>

          <Text
            style={{
              fontSize: 22,
              fontWeight: "800",
              color: "#0F172A",
            }}
          >
            {userName} 👋
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            width: 46,
            height: 46,
            borderRadius: 23,
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 12,
            elevation: 3,
          }}
        >
          <Ionicons name="search" size={22} color="#0F172A" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 46,
            height: 46,
            borderRadius: 23,
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
            elevation: 3,
          }}
        >
          <Ionicons
            name="notifications-outline"
            size={22}
            color="#0F172A"
          />

          <View
            style={{
              position: "absolute",
              top: 10,
              right: 11,
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#EF4444",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}