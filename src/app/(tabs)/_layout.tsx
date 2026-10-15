import React from "react";
import { Platform } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="dashboard"
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#2563EB",
        tabBarInactiveTintColor: "#94A3B8",

        tabBarHideOnKeyboard: true,

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginTop: 2,
        },

        tabBarItemStyle: {
          paddingTop: 3,
        },

        tabBarStyle: {
          height: Platform.OS === "ios" ? 88 : 72,
          paddingTop: 7,
          paddingBottom: Platform.OS === "ios" ? 22 : 9,

          backgroundColor: "#FFFFFF",

          borderTopWidth: 1,
          borderTopColor: "#E2E8F0",

          elevation: 14,

          shadowColor: "#000000",
          shadowOpacity: 0.08,
          shadowRadius: 16,
          shadowOffset: {
            width: 0,
            height: -4,
          },
        },
      }}
    >
      {/* HOME */}
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Home",

          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* ACCOUNTS */}
      <Tabs.Screen
        name="accounts"
        options={{
          title: "Accounts",

          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "wallet" : "wallet-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* TWIN AI */}
      <Tabs.Screen
        name="ai"
        options={{
          title: "Twin AI",

          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "robot" : "robot-outline"}
              size={27}
              color={color}
            />
          ),
        }}
      />

      {/* ACTIVITY */}
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Activity",

          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={
                focused
                  ? "swap-horizontal-bold"
                  : "swap-horizontal"
              }
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* PROFILE */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",

          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}