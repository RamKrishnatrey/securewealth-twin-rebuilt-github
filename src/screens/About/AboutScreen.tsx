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

import { styles } from "./aboutStyles";

export default function AboutScreen() {
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
            About
          </Text>

          <Text style={styles.headerSubtitle}>
            SecureWealth Twin
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
        {/* PRODUCT HERO */}

        <View style={styles.heroCard}>
          <View style={styles.logoContainer}>
            <MaterialCommunityIcons
              name="shield-check-outline"
              size={38}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.productName}>
            SecureWealth Twin
          </Text>

          <Text style={styles.productTagline}>
            Intelligent wealth growth with
            built-in fraud protection.
          </Text>

          <View style={styles.versionBadge}>
            <Text style={styles.versionBadgeText}>
              Version 1.0.0
            </Text>
          </View>
        </View>

        {/* ABOUT PRODUCT */}

        <Text style={styles.sectionLabel}>
          ABOUT SECUREWEALTH
        </Text>

        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionText}>
            SecureWealth Twin combines intelligent
            financial assistance, wealth insights,
            goal planning and fraud protection into
            one unified financial experience.
          </Text>

          <View style={styles.featureDivider} />

          <Feature
            icon="robot-outline"
            title="Twin AI"
            description="Personalized financial intelligence"
            color="#7C3AED"
            background="#F5F3FF"
          />

          <Feature
            icon="shield-check-outline"
            title="Twin Shield"
            description="Intelligent fraud protection"
            color="#16A34A"
            background="#F0FDF4"
          />

          <Feature
            icon="finance"
            title="Twin Invest"
            description="AI-assisted investment insights"
            color="#2563EB"
            background="#EFF6FF"
          />

          <Feature
            icon="bullseye-arrow"
            title="Smart Goals"
            description="Track and grow toward financial goals"
            color="#D97706"
            background="#FFFBEB"
          />
        </View>

        {/* SECURITY */}

        <Text style={styles.sectionLabel}>
          SECURITY
        </Text>

        <TouchableOpacity
          activeOpacity={0.75}
          style={styles.securityCard}
          onPress={() =>
            router.push(
              "/security-center" as any
            )
          }
        >
          <View style={styles.securityIcon}>
            <MaterialCommunityIcons
              name="shield-lock-outline"
              size={24}
              color="#16A34A"
            />
          </View>

          <View style={styles.securityContent}>
            <Text style={styles.securityTitle}>
              Security by Design
            </Text>

            <Text style={styles.securityText}>
              Review your protection status and
              security controls with Twin Shield.
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={17}
            color="#16A34A"
          />
        </TouchableOpacity>

        {/* LEGAL */}

        <Text style={styles.sectionLabel}>
          LEGAL & INFORMATION
        </Text>

        <View style={styles.menuCard}>
          <AboutMenuItem
            icon="shield-account-outline"
            title="Privacy Policy"
            subtitle="How we protect your information"
            onPress={() =>
              Alert.alert(
                "Privacy Policy",
                "The complete privacy policy will be connected before production release."
              )
            }
          />

          <Divider />

          <AboutMenuItem
            icon="file-document-outline"
            title="Terms & Conditions"
            subtitle="Terms governing use of the app"
            onPress={() =>
              Alert.alert(
                "Terms & Conditions",
                "The complete terms and conditions will be connected before production release."
              )
            }
          />

          <Divider />

          <AboutMenuItem
            icon="license"
            title="Open Source Licenses"
            subtitle="Libraries used by SecureWealth Twin"
            onPress={() =>
              Alert.alert(
                "Open Source Licenses",
                "Open-source license information will be included with the production build."
              )
            }
          />
        </View>

        {/* SUPPORT */}

        <Text style={styles.sectionLabel}>
          SUPPORT
        </Text>

        <TouchableOpacity
          activeOpacity={0.75}
          style={styles.supportCard}
          onPress={() =>
            router.push(
              "/help-support" as any
            )
          }
        >
          <View style={styles.supportIcon}>
            <MaterialCommunityIcons
              name="headset"
              size={22}
              color="#2563EB"
            />
          </View>

          <View style={styles.supportContent}>
            <Text style={styles.supportTitle}>
              Help & Support
            </Text>

            <Text style={styles.supportText}>
              Need assistance? Visit our support
              center.
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={17}
            color="#CBD5E1"
          />
        </TouchableOpacity>

        {/* BUILD INFO */}

        <View style={styles.buildCard}>
          <View style={styles.buildRow}>
            <Text style={styles.buildLabel}>
              Version
            </Text>

            <Text style={styles.buildValue}>
              1.0.0
            </Text>
          </View>

          <View style={styles.buildDivider} />

          <View style={styles.buildRow}>
            <Text style={styles.buildLabel}>
              Build
            </Text>

            <Text style={styles.buildValue}>
              1
            </Text>
          </View>

          <View style={styles.buildDivider} />

          <View style={styles.buildRow}>
            <Text style={styles.buildLabel}>
              Platform
            </Text>

            <Text style={styles.buildValue}>
              SecureWealth Mobile
            </Text>
          </View>
        </View>

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

        <Text style={styles.copyright}>
          © 2026 SecureWealth Twin
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

type FeatureProps = {
  icon: React.ComponentProps<
    typeof MaterialCommunityIcons
  >["name"];

  title: string;
  description: string;
  color: string;
  background: string;
};

function Feature({
  icon,
  title,
  description,
  color,
  background,
}: FeatureProps) {
  return (
    <View style={styles.feature}>
      <View
        style={[
          styles.featureIcon,
          {
            backgroundColor: background,
          },
        ]}
      >
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={color}
        />
      </View>

      <View style={styles.featureContent}>
        <Text style={styles.featureTitle}>
          {title}
        </Text>

        <Text style={styles.featureDescription}>
          {description}
        </Text>
      </View>
    </View>
  );
}

type AboutMenuItemProps = {
  icon: React.ComponentProps<
    typeof MaterialCommunityIcons
  >["name"];

  title: string;
  subtitle: string;
  onPress: () => void;
};

function AboutMenuItem({
  icon,
  title,
  subtitle,
  onPress,
}: AboutMenuItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.72}
      style={styles.menuItem}
      onPress={onPress}
    >
      <View style={styles.menuIcon}>
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color="#64748B"
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