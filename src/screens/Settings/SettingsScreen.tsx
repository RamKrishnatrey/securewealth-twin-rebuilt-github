import React, { useState } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { router } from "expo-router";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import { styles } from "./settingsStyles";
import {
  disableWebPushNotifications,
  enableWebPushNotifications,
} from "@/services/webPushService";

export default function SettingsScreen() {
  const [biometricLogin, setBiometricLogin] =
    useState(true);

  const [transactionAlerts, setTransactionAlerts] =
    useState(true);

  const [aiInsights, setAiInsights] =
    useState(true);

  const [appNotifications, setAppNotifications] =
    useState(true);

  const [fraudAlerts, setFraudAlerts] =
    useState(false);

  const handleFraudAlertsChange = async (enabled: boolean) => {
    if (!enabled) {
      setFraudAlerts(false);
      const result = await disableWebPushNotifications();
      if (result.status === "error") {
        Alert.alert("Browser alerts", result.message);
      }
      return;
    }

    const result = await enableWebPushNotifications();
    setFraudAlerts(result.status === "enabled");

    if (result.status !== "enabled") {
      Alert.alert("Browser fraud alerts", result.message);
    }
  };

  return (
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

        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>
            Settings
          </Text>

          <Text style={styles.headerSubtitle}>
            Manage your app preferences
          </Text>
        </View>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          styles.scrollContent
        }
      >
        {/* SECURITY */}

        <Text style={styles.sectionLabel}>
          SECURITY
        </Text>

        <View style={styles.settingsCard}>
          <SettingsNavigationItem
            icon="shield-lock-outline"
            title="Security Center"
            subtitle="Protection, devices and controls"
            iconColor="#16A34A"
            iconBackground="#F0FDF4"
            onPress={() =>
              router.push(
                "/security-center" as any
              )
            }
          />

          <Divider />

          <SettingsSwitchItem
            icon="fingerprint"
            title="Biometric Login"
            subtitle="Use biometrics to access your account"
            iconColor="#2563EB"
            iconBackground="#EFF6FF"
            value={biometricLogin}
            onValueChange={setBiometricLogin}
          />

          <Divider />

          <SettingsSwitchItem
            icon="shield-alert-outline"
            title="Fraud Alerts"
            subtitle="Allow generic browser warnings when suspicious activity needs review"
            iconColor="#DC2626"
            iconBackground="#FEF2F2"
            value={fraudAlerts}
            onValueChange={handleFraudAlertsChange}
          />
        </View>

        {/* NOTIFICATIONS */}

        <Text style={styles.sectionLabel}>
          NOTIFICATIONS
        </Text>

        <View style={styles.settingsCard}>
          <SettingsSwitchItem
            icon="swap-horizontal"
            title="Transaction Alerts"
            subtitle="Payment and transfer notifications"
            iconColor="#2563EB"
            iconBackground="#EFF6FF"
            value={transactionAlerts}
            onValueChange={
              setTransactionAlerts
            }
          />

          <Divider />

          <SettingsSwitchItem
            icon="robot-outline"
            title="Twin AI Insights"
            subtitle="Personalized financial intelligence"
            iconColor="#7C3AED"
            iconBackground="#F5F3FF"
            value={aiInsights}
            onValueChange={setAiInsights}
          />

          <Divider />

          <SettingsSwitchItem
            icon="bell-outline"
            title="App Notifications"
            subtitle="General SecureWealth updates"
            iconColor="#D97706"
            iconBackground="#FFFBEB"
            value={appNotifications}
            onValueChange={
              setAppNotifications
            }
          />
        </View>

        {/* GENERAL */}

        <Text style={styles.sectionLabel}>
          GENERAL
        </Text>

        <View style={styles.settingsCard}>
          <SettingsNavigationItem
            icon="currency-inr"
            title="Currency"
            subtitle="Indian Rupee (₹)"
            iconColor="#16A34A"
            iconBackground="#F0FDF4"
            onPress={() =>
              Alert.alert(
                "Currency",
                "Indian Rupee (₹) is currently selected."
              )
            }
          />

          <Divider />

          <SettingsNavigationItem
            icon="translate"
            title="Language"
            subtitle="English"
            iconColor="#0891B2"
            iconBackground="#ECFEFF"
            onPress={() =>
              Alert.alert(
                "Language",
                "English is currently selected."
              )
            }
          />

          <Divider />

          <SettingsNavigationItem
            icon="theme-light-dark"
            title="Appearance"
            subtitle="System default"
            iconColor="#64748B"
            iconBackground="#F1F5F9"
            onPress={() =>
              Alert.alert(
                "Appearance",
                "Theme preferences will be connected during final app configuration."
              )
            }
          />
        </View>

        {/* PRIVACY */}

        <Text style={styles.sectionLabel}>
          PRIVACY & DATA
        </Text>

        <View style={styles.settingsCard}>
          <SettingsNavigationItem
            icon="lock-outline"
            title="Privacy"
            subtitle="Manage privacy and data controls"
            iconColor="#7C3AED"
            iconBackground="#F5F3FF"
            onPress={() =>
              Alert.alert(
                "Privacy",
                "Privacy controls will be connected during final integration."
              )
            }
          />

          <Divider />

          <SettingsNavigationItem
            icon="database-outline"
            title="Data & Permissions"
            subtitle="Review app data permissions"
            iconColor="#0891B2"
            iconBackground="#ECFEFF"
            onPress={() =>
              Alert.alert(
                "Data & Permissions",
                "Device permissions will be connected during final integration."
              )
            }
          />
        </View>

        {/* APP */}

        <Text style={styles.sectionLabel}>
          APP
        </Text>

        <View style={styles.settingsCard}>
          <SettingsNavigationItem
            icon="help-circle-outline"
            title="Help & Support"
            subtitle="Get help with SecureWealth"
            iconColor="#2563EB"
            iconBackground="#EFF6FF"
            onPress={() =>
              router.push(
                "/help-support" as any
              )
            }
          />

          <Divider />

          <SettingsNavigationItem
            icon="information-outline"
            title="About"
            subtitle="Version, policies and information"
            iconColor="#64748B"
            iconBackground="#F1F5F9"
            onPress={() =>
              router.push("/about" as any)
            }
          />
        </View>

        {/* SECURITY FOOTER */}

        <View style={styles.securityFooter}>
          <MaterialCommunityIcons
            name="shield-check-outline"
            size={20}
            color="#16A34A"
          />

          <View style={styles.footerContent}>
            <Text style={styles.footerTitle}>
              Protected by Twin Shield
            </Text>

            <Text style={styles.footerText}>
              Critical security protection remains
              active regardless of notification
              preferences.
            </Text>
          </View>
        </View>

        <Text style={styles.version}>
          SecureWealth Twin • Version 1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ==========================================
   NAVIGATION ITEM
========================================== */

type NavigationItemProps = {
  icon: React.ComponentProps<
    typeof MaterialCommunityIcons
  >["name"];

  title: string;
  subtitle: string;

  iconColor: string;
  iconBackground: string;

  onPress: () => void;
};

function SettingsNavigationItem({
  icon,
  title,
  subtitle,
  iconColor,
  iconBackground,
  onPress,
}: NavigationItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.72}
      style={styles.settingItem}
      onPress={onPress}
    >
      <View
        style={[
          styles.settingIcon,
          {
            backgroundColor:
              iconBackground,
          },
        ]}
      >
        <MaterialCommunityIcons
          name={icon}
          size={21}
          color={iconColor}
        />
      </View>

      <View style={styles.settingContent}>
        <Text style={styles.settingTitle}>
          {title}
        </Text>

        <Text style={styles.settingSubtitle}>
          {subtitle}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={17}
        color="#CBD5E1"
      />
    </TouchableOpacity>
  );
}

/* ==========================================
   SWITCH ITEM
========================================== */

type SwitchItemProps = {
  icon: React.ComponentProps<
    typeof MaterialCommunityIcons
  >["name"];

  title: string;
  subtitle: string;

  iconColor: string;
  iconBackground: string;

  value: boolean;

  onValueChange: (
    value: boolean
  ) => void;
};

function SettingsSwitchItem({
  icon,
  title,
  subtitle,
  iconColor,
  iconBackground,
  value,
  onValueChange,
}: SwitchItemProps) {
  return (
    <View style={styles.settingItem}>
      <View
        style={[
          styles.settingIcon,
          {
            backgroundColor:
              iconBackground,
          },
        ]}
      >
        <MaterialCommunityIcons
          name={icon}
          size={21}
          color={iconColor}
        />
      </View>

      <View style={styles.settingContent}>
        <Text style={styles.settingTitle}>
          {title}
        </Text>

        <Text style={styles.settingSubtitle}>
          {subtitle}
        </Text>
      </View>

      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: "#CBD5E1",
          true: "#BFDBFE",
        }}
        thumbColor={
          value ? "#2563EB" : "#FFFFFF"
        }
      />
    </View>
  );
}

function Divider() {
  return <View style={styles.divider} />;
}
