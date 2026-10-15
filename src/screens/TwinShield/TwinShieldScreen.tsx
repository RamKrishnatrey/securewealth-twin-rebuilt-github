import React from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { router } from "expo-router";

import styles from "./styles";

export default function TwinShieldScreen() {
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
        {/* =========================
            HEADER
        ========================= */}

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
            <View style={styles.headerTitleRow}>
              <MaterialCommunityIcons
                name="shield-check"
                size={18}
                color="#2563EB"
              />

              <Text style={styles.headerTitle}>
                Twin Shield
              </Text>
            </View>

            <Text style={styles.headerSubtitle}>
              AI Security Intelligence
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.headerButton}
          >
            <Ionicons
              name="ellipsis-horizontal"
              size={20}
              color="#0F172A"
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* =========================
              SECURITY HERO
          ========================= */}

          <View style={styles.heroCard}>
            <View style={styles.heroGlowOne} />
            <View style={styles.heroGlowTwo} />

            <View style={styles.protectionBadge}>
              <View style={styles.liveDot} />

              <Text style={styles.protectionBadgeText}>
                PROTECTION ACTIVE
              </Text>
            </View>

            <View style={styles.scoreCircleOuter}>
              <View style={styles.scoreCircleMiddle}>
                <View style={styles.scoreCircleInner}>
                  <MaterialCommunityIcons
                    name="shield-check"
                    size={26}
                    color="#FFFFFF"
                  />

                  <Text style={styles.scoreValue}>
                    94
                  </Text>

                  <Text style={styles.scoreMax}>
                    /100
                  </Text>
                </View>
              </View>
            </View>

            <Text style={styles.heroTitle}>
              Excellent Protection
            </Text>

            <Text style={styles.heroDescription}>
              Twin Shield is continuously monitoring your
              financial activity for suspicious behaviour.
            </Text>

            <View style={styles.heroStatusRow}>
              <View style={styles.heroStatusItem}>
                <MaterialCommunityIcons
                  name="radar"
                  size={15}
                  color="#BFDBFE"
                />

                <Text style={styles.heroStatusText}>
                  Live Monitoring
                </Text>
              </View>

              <View style={styles.heroStatusDivider} />

              <View style={styles.heroStatusItem}>
                <MaterialCommunityIcons
                  name="brain"
                  size={15}
                  color="#BFDBFE"
                />

                <Text style={styles.heroStatusText}>
                  AI Protected
                </Text>
              </View>
            </View>
          </View>

          {/* =========================
              AI SECURITY INSIGHT
          ========================= */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              AI Security Insight
            </Text>

            <View style={styles.aiBadge}>
              <MaterialCommunityIcons
                name="creation"
                size={10}
                color="#7C3AED"
              />

              <Text style={styles.aiBadgeText}>
                TWIN AI
              </Text>
            </View>
          </View>

          <View style={styles.insightCard}>
            <View style={styles.insightTop}>
              <View style={styles.insightIcon}>
                <MaterialCommunityIcons
                  name="shield-check-outline"
                  size={24}
                  color="#16A34A"
                />
              </View>

              <View style={styles.insightHeading}>
                <Text style={styles.insightTitle}>
                  No critical threats detected
                </Text>

                <Text style={styles.insightTime}>
                  Analysed just now
                </Text>
              </View>

              <View style={styles.safeBadge}>
                <Text style={styles.safeBadgeText}>
                  SAFE
                </Text>
              </View>
            </View>

            <Text style={styles.insightDescription}>
              Twin analysed your recent transactions,
              devices and behavioural patterns. Your
              financial environment currently appears
              secure.
            </Text>

            <View style={styles.confidenceHeader}>
              <Text style={styles.confidenceLabel}>
                AI Confidence
              </Text>

              <Text style={styles.confidenceValue}>
                98%
              </Text>
            </View>

            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
            </View>
          </View>

          {/* =========================
    SUSPICIOUS ACTIVITY
========================= */}

<View style={styles.sectionHeader}>
  <Text style={styles.sectionTitle}>
    Suspicious Activity
  </Text>

  <TouchableOpacity
    activeOpacity={0.7}
    onPress={() =>
      router.push("/threat-review" as any)
    }
  >
    <Text style={styles.detailsText}>
      Review
    </Text>
  </TouchableOpacity>
</View>

<TouchableOpacity
  activeOpacity={0.82}
  style={styles.threatAlertCard}
  onPress={() =>
    router.push("/threat-review" as any)
  }
>
  <View style={styles.threatAlertIcon}>
    <MaterialCommunityIcons
      name="alert-circle-outline"
      size={25}
      color="#DC2626"
    />
  </View>

  <View style={styles.threatAlertContent}>
    <View style={styles.threatAlertTitleRow}>
      <Text style={styles.threatAlertTitle}>
        High-risk activity detected
      </Text>

      <View style={styles.highRiskChip}>
        <Text style={styles.highRiskChipText}>
          HIGH
        </Text>
      </View>
    </View>

    <Text style={styles.threatMerchant}>
      Digital Store Online
    </Text>

    <Text style={styles.threatDescription}>
      ₹48,500 • New device • Unknown location
    </Text>

    <View style={styles.threatFooter}>
      <View style={styles.threatScoreRow}>
        <View style={styles.threatDot} />

        <Text style={styles.threatScoreText}>
          Fraud Risk 87/100
        </Text>
      </View>

      <View style={styles.reviewRow}>
        <Text style={styles.reviewText}>
          Review threat
        </Text>

        <Ionicons
          name="chevron-forward"
          size={14}
          color="#DC2626"
        />
      </View>
    </View>
  </View>
</TouchableOpacity>

          {/* =========================
              SECURITY OVERVIEW
          ========================= */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Security Overview
            </Text>

            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.detailsText}>
                Details
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <View
                style={[
                  styles.statIcon,
                  styles.greenIconBackground,
                ]}
              >
                <MaterialCommunityIcons
                  name="shield-check-outline"
                  size={21}
                  color="#16A34A"
                />
              </View>

              <Text style={styles.statValue}>
                0
              </Text>

              <Text style={styles.statLabel}>
                Threats Blocked
              </Text>

              <Text style={styles.statStatusGreen}>
                All clear
              </Text>
            </View>

            <View style={styles.statCard}>
              <View
                style={[
                  styles.statIcon,
                  styles.blueIconBackground,
                ]}
              >
                <MaterialCommunityIcons
                  name="bank-outline"
                  size={21}
                  color="#2563EB"
                />
              </View>

              <Text style={styles.statValue}>
                3
              </Text>

              <Text style={styles.statLabel}>
                Accounts Protected
              </Text>

              <Text style={styles.statStatusBlue}>
                Monitoring
              </Text>
            </View>

            <View style={styles.statCard}>
              <View
                style={[
                  styles.statIcon,
                  styles.purpleIconBackground,
                ]}
              >
                <MaterialCommunityIcons
                  name="cellphone-check"
                  size={21}
                  color="#7C3AED"
                />
              </View>

              <Text style={styles.statValue}>
                2
              </Text>

              <Text style={styles.statLabel}>
                Trusted Devices
              </Text>

              <Text style={styles.statStatusPurple}>
                Verified
              </Text>
            </View>

            <View style={styles.statCard}>
              <View
                style={[
                  styles.statIcon,
                  styles.orangeIconBackground,
                ]}
              >
                <MaterialCommunityIcons
                  name="radar"
                  size={21}
                  color="#D97706"
                />
              </View>

              <Text style={styles.statValue}>
                24/7
              </Text>

              <Text style={styles.statLabel}>
                AI Monitoring
              </Text>

              <Text style={styles.statStatusOrange}>
                Active
              </Text>
            </View>
          </View>

          {/* =========================
              QUICK SECURITY
          ========================= */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Quick Security
            </Text>
          </View>

          <View style={styles.quickGrid}>
            <TouchableOpacity
  activeOpacity={0.75}
  style={styles.quickCard}
  onPress={() =>
    router.push(
      "/fraud-intelligence" as any
    )
  }
>
              <View
                style={[
                  styles.quickIcon,
                  styles.blueIconBackground,
                ]}
              >
                <MaterialCommunityIcons
  name="radar"
  size={23}
  color="#2563EB"
/>
              </View>

              <View style={styles.quickContent}>
                <Text style={styles.quickTitle}>
                  Fraud Scan
                </Text>

                <Text style={styles.quickSubtitle}>
                  Analyse activity
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={16}
                color="#94A3B8"
              />
            </TouchableOpacity>

            <TouchableOpacity
  activeOpacity={0.75}
  style={styles.quickCard}
  onPress={() =>
    router.push("/trusted-devices" as any)
  }
>
  <View
    style={[
      styles.quickIcon,
      styles.purpleIconBackground,
    ]}
  >
    <MaterialCommunityIcons
      name="cellphone-check"
      size={23}
      color="#7C3AED"
    />
  </View>

  <View style={styles.quickContent}>
    <Text style={styles.quickTitle}>
      Devices
    </Text>

    <Text style={styles.quickSubtitle}>
      Manage trusted devices
    </Text>
  </View>

  <Ionicons
    name="chevron-forward"
    size={16}
    color="#94A3B8"
  />
</TouchableOpacity>
                    
              <TouchableOpacity
  activeOpacity={0.75}
  style={styles.quickCard}
  onPress={() =>
    router.push("/transaction-controls" as any)
  }
>
  <View
    style={[
      styles.quickIcon,
      styles.orangeIconBackground,
    ]}
  >
    <MaterialCommunityIcons
      name="tune-variant"
      size={23}
      color="#D97706"
    />
  </View>

  <View style={styles.quickContent}>
    <Text style={styles.quickTitle}>
      Limits
    </Text>

    <Text style={styles.quickSubtitle}>
      Transaction controls
    </Text>
  </View>
              <Ionicons
                name="chevron-forward"
                size={16}
                color="#94A3B8"
              />
            </TouchableOpacity>

            <TouchableOpacity
  activeOpacity={0.75}
  style={styles.quickCard}
  onPress={() =>
    router.push("/security-center" as any)
  }
>
  <View
    style={[
      styles.quickIcon,
      styles.greenIconBackground,
    ]}
  >
    <MaterialCommunityIcons
      name="lock-check-outline"
      size={23}
      color="#16A34A"
    />
  </View>

  <View style={styles.quickContent}>
    <Text style={styles.quickTitle}>
      Security
    </Text>

    <Text style={styles.quickSubtitle}>
      Protection settings
    </Text>
  </View>

  <Ionicons
    name="chevron-forward"
    size={16}
    color="#94A3B8"
  />
</TouchableOpacity>
          </View>

          {/* =========================
              RECENT PROTECTION
          ========================= */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Recent Protection
            </Text>

            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.detailsText}>
                See all
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.activityContainer}>
            <View style={styles.activityItem}>
              <View style={styles.activitySuccessIcon}>
                <Ionicons
                  name="checkmark"
                  size={17}
                  color="#16A34A"
                />
              </View>

              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>
                  Amazon India
                </Text>

                <Text style={styles.activitySubtitle}>
                  Transaction verified successfully
                </Text>

                <Text style={styles.activityTime}>
                  10 minutes ago
                </Text>
              </View>

              <View style={styles.verifiedBadge}>
                <Text style={styles.verifiedText}>
                  VERIFIED
                </Text>
              </View>
            </View>

            <View style={styles.activityDivider} />

            <View style={styles.activityItem}>
              <View style={styles.activitySuccessIcon}>
                <Ionicons
                  name="checkmark"
                  size={17}
                  color="#16A34A"
                />
              </View>

              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>
                  Device Login
                </Text>

                <Text style={styles.activitySubtitle}>
                  Trusted device recognized
                </Text>

                <Text style={styles.activityTime}>
                  Today, 08:42 AM
                </Text>
              </View>

              <View style={styles.verifiedBadge}>
                <Text style={styles.verifiedText}>
                  SAFE
                </Text>
              </View>
            </View>
          </View>

          {/* SECURITY FOOTER */}

          <View style={styles.securityFooter}>
            <MaterialCommunityIcons
              name="shield-lock-outline"
              size={14}
              color="#64748B"
            />

            <Text style={styles.securityFooterText}>
              Protected continuously by Twin Shield
            </Text>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}