import React, { useState } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { router } from "expo-router";

import styles from "./trustedDevicesStyles";

type Device = {
  id: string;
  name: string;
  type: "mobile" | "laptop";
  description: string;
  location: string;
  lastActive: string;
  current: boolean;
  trusted: boolean;
};

const initialDevices: Device[] = [
  {
    id: "1",
    name: "Current Mobile Device",
    type: "mobile",
    description: "Android • SecureWealth App",
    location: "Noida, India",
    lastActive: "Active now",
    current: true,
    trusted: true,
  },
  {
    id: "2",
    name: "Windows PC",
    type: "laptop",
    description: "Windows • Chrome",
    location: "Noida, India",
    lastActive: "Last active recently",
    current: false,
    trusted: true,
  },
];

export default function TrustedDevicesScreen() {
  const [devices, setDevices] =
    useState<Device[]>(initialDevices);

  const removeDevice = (device: Device) => {
    if (device.current) {
      Alert.alert(
        "Current Device",
        "Your current device cannot be removed from this screen."
      );

      return;
    }

    Alert.alert(
      "Remove Trusted Device?",
      `${device.name} will be signed out and will require verification before accessing your account again.`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => {
            setDevices((currentDevices) =>
              currentDevices.filter(
                (item) => item.id !== device.id
              )
            );
          },
        },
      ]
    );
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F8FAFC"
      />

      <SafeAreaView
        style={styles.container}
        edges={["top"]}
      >
        {/* HEADER */}

        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.headerButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="chevron-back"
              size={22}
              color="#0F172A"
            />
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>
              Trusted Devices
            </Text>

            <Text style={styles.headerSubtitle}>
              Device & session security
            </Text>
          </View>

          <View style={styles.deviceCount}>
            <Text style={styles.deviceCountText}>
              {devices.length}
            </Text>
          </View>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* HERO */}

          <View style={styles.heroCard}>
            <View style={styles.heroGlowOne} />
            <View style={styles.heroGlowTwo} />

            <View style={styles.heroTop}>
              <View style={styles.heroIcon}>
                <MaterialCommunityIcons
                  name="cellphone-check"
                  size={30}
                  color="#FFFFFF"
                />
              </View>

              <View style={styles.protectedBadge}>
                <View style={styles.protectedDot} />

                <Text
                  style={styles.protectedBadgeText}
                >
                  PROTECTED
                </Text>
              </View>
            </View>

            <Text style={styles.heroTitle}>
              Your devices are secure
            </Text>

            <Text style={styles.heroDescription}>
              Twin monitors devices, sessions and
              login behaviour to detect unauthorized
              account access.
            </Text>

            <View style={styles.heroStats}>
              <View style={styles.heroStat}>
                <Text style={styles.heroStatValue}>
                  {devices.length}
                </Text>

                <Text style={styles.heroStatLabel}>
                  TRUSTED DEVICES
                </Text>
              </View>

              <View style={styles.heroDivider} />

              <View style={styles.heroStat}>
                <Text style={styles.heroStatValue}>
                  0
                </Text>

                <Text style={styles.heroStatLabel}>
                  UNKNOWN DEVICES
                </Text>
              </View>

              <View style={styles.heroDivider} />

              <View style={styles.heroStat}>
                <Text style={styles.heroStatValue}>
                  100%
                </Text>

                <Text style={styles.heroStatLabel}>
                  DEVICE TRUST
                </Text>
              </View>
            </View>
          </View>

          {/* DEVICES */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Active Devices
            </Text>

            <View style={styles.secureBadge}>
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={12}
                color="#16A34A"
              />

              <Text style={styles.secureBadgeText}>
                SECURE
              </Text>
            </View>
          </View>

          {devices.map((device) => (
            <View
              key={device.id}
              style={styles.deviceCard}
            >
              <View style={styles.deviceTop}>
                <View
                  style={[
                    styles.deviceIcon,
                    device.type === "laptop" &&
                      styles.deviceIconPurple,
                  ]}
                >
                  <MaterialCommunityIcons
                    name={
                      device.type === "mobile"
                        ? "cellphone-check"
                        : "laptop"
                    }
                    size={25}
                    color={
                      device.type === "mobile"
                        ? "#2563EB"
                        : "#7C3AED"
                    }
                  />
                </View>

                <View style={styles.deviceContent}>
                  <View style={styles.deviceTitleRow}>
                    <Text style={styles.deviceName}>
                      {device.name}
                    </Text>

                    {device.current && (
                      <View
                        style={styles.currentBadge}
                      >
                        <Text
                          style={
                            styles.currentBadgeText
                          }
                        >
                          THIS DEVICE
                        </Text>
                      </View>
                    )}
                  </View>

                  <Text
                    style={styles.deviceDescription}
                  >
                    {device.description}
                  </Text>
                </View>
              </View>

              <View style={styles.deviceDivider} />

              <View style={styles.deviceDetails}>
                <View style={styles.detailRow}>
                  <View style={styles.detailLeft}>
                    <Ionicons
                      name="location-outline"
                      size={15}
                      color="#64748B"
                    />

                    <Text
                      style={styles.detailLabel}
                    >
                      Location
                    </Text>
                  </View>

                  <Text style={styles.detailValue}>
                    {device.location}
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <View style={styles.detailLeft}>
                    <Ionicons
                      name="time-outline"
                      size={15}
                      color="#64748B"
                    />

                    <Text
                      style={styles.detailLabel}
                    >
                      Activity
                    </Text>
                  </View>

                  <Text style={styles.detailValue}>
                    {device.lastActive}
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <View style={styles.detailLeft}>
                    <MaterialCommunityIcons
                      name="shield-check-outline"
                      size={15}
                      color="#16A34A"
                    />

                    <Text
                      style={styles.detailLabel}
                    >
                      Trust status
                    </Text>
                  </View>

                  <View style={styles.trustedStatus}>
                    <View
                      style={styles.trustedDot}
                    />

                    <Text
                      style={styles.trustedStatusText}
                    >
                      Trusted
                    </Text>
                  </View>
                </View>
              </View>

              {!device.current && (
                <TouchableOpacity
                  activeOpacity={0.75}
                  style={styles.removeButton}
                  onPress={() =>
                    removeDevice(device)
                  }
                >
                  <MaterialCommunityIcons
                    name="logout"
                    size={17}
                    color="#DC2626"
                  />

                  <Text
                    style={styles.removeButtonText}
                  >
                    Remove & Sign Out
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          ))}

          {/* DEVICE INTELLIGENCE */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Twin Device Intelligence
            </Text>

            <View style={styles.aiBadge}>
              <MaterialCommunityIcons
                name="creation"
                size={10}
                color="#7C3AED"
              />

              <Text style={styles.aiBadgeText}>
                AI
              </Text>
            </View>
          </View>

          <View style={styles.aiCard}>
            <View style={styles.aiTop}>
              <View style={styles.aiIcon}>
                <MaterialCommunityIcons
                  name="creation"
                  size={21}
                  color="#7C3AED"
                />
              </View>

              <View style={styles.aiContent}>
                <Text style={styles.aiTitle}>
                  No suspicious devices detected
                </Text>

                <Text style={styles.aiSubtitle}>
                  Device intelligence active
                </Text>
              </View>
            </View>

            <Text style={styles.aiDescription}>
              Twin continuously evaluates device
              identity, login behaviour and session
              signals. Your currently trusted devices
              match your normal access patterns.
            </Text>

            <View style={styles.intelligenceBox}>
              <View style={styles.intelligenceRow}>
                <Text
                  style={styles.intelligenceLabel}
                >
                  Unknown sessions
                </Text>

                <Text
                  style={styles.intelligenceSafe}
                >
                  0
                </Text>
              </View>

              <View style={styles.intelligenceRow}>
                <Text
                  style={styles.intelligenceLabel}
                >
                  Suspicious logins
                </Text>

                <Text
                  style={styles.intelligenceSafe}
                >
                  0
                </Text>
              </View>

              <View style={styles.intelligenceRow}>
                <Text
                  style={styles.intelligenceLabel}
                >
                  Device anomalies
                </Text>

                <Text
                  style={styles.intelligenceSafe}
                >
                  None
                </Text>
              </View>
            </View>

            <View style={styles.confidenceTop}>
              <Text style={styles.confidenceLabel}>
                AI Confidence
              </Text>

              <Text style={styles.confidenceValue}>
                99%
              </Text>
            </View>

            <View style={styles.confidenceTrack}>
              <View style={styles.confidenceFill} />
            </View>
          </View>

          {/* SECURITY TIP */}

          <View style={styles.tipCard}>
            <View style={styles.tipIcon}>
              <Ionicons
                name="bulb-outline"
                size={20}
                color="#D97706"
              />
            </View>

            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>
                Security Tip
              </Text>

              <Text style={styles.tipDescription}>
                Remove devices you no longer use.
                Unrecognized devices should be removed
                immediately and your password changed.
              </Text>
            </View>
          </View>

          <View style={styles.footer}>
            <MaterialCommunityIcons
              name="shield-lock-outline"
              size={13}
              color="#94A3B8"
            />

            <Text style={styles.footerText}>
              Device activity monitored by Twin Shield
            </Text>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}