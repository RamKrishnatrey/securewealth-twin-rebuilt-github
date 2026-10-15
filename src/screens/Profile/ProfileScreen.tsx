import React from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
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

import { styles } from "./profileStyles";
import { disableWebPushNotifications } from "@/services/webPushService";

export default function ProfileScreen() {
  const handleLogout = () => {
  Alert.alert(
    "Log Out",
    "Are you sure you want to log out of SecureWealth Twin?",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Log Out",
        style: "destructive",
        onPress: async () => {
          /*
            Temporary frontend logout.

            During backend integration we will:
            1. Clear JWT/auth token
            2. Clear secure session
            3. Reset user state
            4. Redirect to authentication
          */

          await disableWebPushNotifications();

          router.replace(
            "/(auth)/login" as any
          );
        },
      },
    ]
  );
};
  return (
    <SafeAreaView
      style={styles.container}
      edges={["top"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER */}

        <View style={styles.header}>
          <View>
            <Text style={styles.brandLabel}>
              SECUREWEALTH TWIN
            </Text>

            <Text style={styles.headerTitle}>
              Profile
            </Text>

            <Text style={styles.headerSubtitle}>
              Manage your account and preferences
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.settingsButton}
            onPress={() =>
              router.push("/settings" as any)
            }
          >
            <Ionicons
              name="settings-outline"
              size={21}
              color="#0F172A"
            />
          </TouchableOpacity>
        </View>

        {/* PROFILE CARD */}

        <View style={styles.profileCard}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                SM
              </Text>
            </View>

            <View style={styles.verifiedBadge}>
              <Ionicons
                name="checkmark"
                size={12}
                color="#FFFFFF"
              />
            </View>
          </View>

          <Text style={styles.userName}>
            Shaurya Mishra
          </Text>

          <Text style={styles.userEmail}>
            shaurya.mishra@example.com
          </Text>

          <View style={styles.verifiedRow}>
            <MaterialCommunityIcons
              name="shield-check"
              size={15}
              color="#16A34A"
            />

            <Text style={styles.verifiedText}>
              Identity Verified
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.78}
            style={styles.editButton}
            onPress={() =>
              router.push("/edit-profile" as any)
            }
          >
            <Ionicons
              name="create-outline"
              size={17}
              color="#2563EB"
            />

            <Text style={styles.editButtonText}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        {/* ACCOUNT OVERVIEW */}

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View
              style={[
                styles.statIcon,
                { backgroundColor: "#EFF6FF" },
              ]}
            >
              <MaterialCommunityIcons
                name="bank-outline"
                size={20}
                color="#2563EB"
              />
            </View>

            <Text style={styles.statValue}>
              3
            </Text>

            <Text style={styles.statLabel}>
              Accounts
            </Text>
          </View>

          <View style={styles.statCard}>
            <View
              style={[
                styles.statIcon,
                { backgroundColor: "#F0FDF4" },
              ]}
            >
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={20}
                color="#16A34A"
              />
            </View>

            <Text style={styles.statValue}>
              92
            </Text>

            <Text style={styles.statLabel}>
              Security Score
            </Text>
          </View>

          <View style={styles.statCard}>
            <View
              style={[
                styles.statIcon,
                { backgroundColor: "#F5F3FF" },
              ]}
            >
              <MaterialCommunityIcons
                name="robot-outline"
                size={20}
                color="#7C3AED"
              />
            </View>

            <Text style={styles.statValue}>
              Active
            </Text>

            <Text style={styles.statLabel}>
              Twin AI
            </Text>
          </View>
        </View>

        {/* ACCOUNT */}

        <Text style={styles.sectionLabel}>
          ACCOUNT
        </Text>

        <View style={styles.menuCard}>
          <ProfileMenuItem
            icon="account-outline"
            title="Personal Information"
            subtitle="Name, email and contact details"
            iconColor="#2563EB"
            iconBackground="#EFF6FF"
            onPress={() =>
              router.push("/edit-profile" as any)
            }
          />

          <Divider />

          <ProfileMenuItem
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

          <ProfileMenuItem
            icon="bell-outline"
            title="Notifications"
            subtitle="Alerts and financial updates"
            iconColor="#D97706"
            iconBackground="#FFFBEB"
            onPress={() =>
              router.push(
                "/notifications" as any
              )
            }
          />
        </View>

        {/* PREFERENCES */}

        <Text style={styles.sectionLabel}>
          PREFERENCES
        </Text>

        <View style={styles.menuCard}>
          <ProfileMenuItem
            icon="cog-outline"
            title="Settings"
            subtitle="App and account preferences"
            iconColor="#64748B"
            iconBackground="#F1F5F9"
            onPress={() =>
              router.push("/settings" as any)
            }
          />

          <Divider />

          <ProfileMenuItem
            icon="help-circle-outline"
            title="Help & Support"
            subtitle="FAQs and contact support"
            iconColor="#0891B2"
            iconBackground="#ECFEFF"
            onPress={() =>
              router.push(
                "/help-support" as any
              )
            }
          />

          <Divider />

          <ProfileMenuItem
            icon="information-outline"
            title="About SecureWealth"
            subtitle="App information and policies"
            iconColor="#7C3AED"
            iconBackground="#F5F3FF"
            onPress={() =>
              router.push("/about" as any)
            }
          />
        </View>

        {/* LOGOUT */}

        <TouchableOpacity
  activeOpacity={0.75}
  style={styles.logoutButton}
  onPress={handleLogout}
>
          <MaterialCommunityIcons
            name="logout"
            size={20}
            color="#DC2626"
          />

          <Text style={styles.logoutText}>
            Log Out
          </Text>
        </TouchableOpacity>

        {/* FOOTER */}

        <View style={styles.footer}>
          <MaterialCommunityIcons
            name="shield-check-outline"
            size={17}
            color="#16A34A"
          />

          <Text style={styles.footerText}>
            Protected by Twin Shield
          </Text>
        </View>

        <Text style={styles.versionText}>
          SecureWealth Twin • Version 1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

/* =========================
   MENU ITEM
========================= */

type ProfileMenuItemProps = {
  icon: React.ComponentProps<
    typeof MaterialCommunityIcons
  >["name"];

  title: string;
  subtitle: string;

  iconColor: string;
  iconBackground: string;

  onPress: () => void;
};

function ProfileMenuItem({
  icon,
  title,
  subtitle,
  iconColor,
  iconBackground,
  onPress,
}: ProfileMenuItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.72}
      style={styles.menuItem}
      onPress={onPress}
    >
      <View
        style={[
          styles.menuIcon,
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

      <View style={styles.menuContent}>
        <Text style={styles.menuTitle}>
          {title}
        </Text>

        <Text style={styles.menuSubtitle}>
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

function Divider() {
  return <View style={styles.divider} />;
}
