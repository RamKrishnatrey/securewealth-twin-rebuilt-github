import React, { useState } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Switch,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { router } from "expo-router";

import styles from "./securityCenterStyles";

export default function SecurityCenterScreen() {
  const [biometric, setBiometric] = useState(true);
  const [twoStep, setTwoStep] = useState(true);
  const [loginProtection, setLoginProtection] =
    useState(true);

  const [realTimeFraud, setRealTimeFraud] =
    useState(true);

  const [behaviourAnalysis, setBehaviourAnalysis] =
    useState(true);

  const [deviceIntelligence, setDeviceIntelligence] =
    useState(true);

  const [beneficiaryLock, setBeneficiaryLock] =
    useState(true);

  const [internationalPayments, setInternationalPayments] =
    useState(false);

  const freezeAccounts = () => {
    Alert.alert(
      "Freeze All Accounts?",
      "This emergency action will temporarily restrict outgoing transactions across your connected accounts.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Freeze Accounts",
          style: "destructive",
          onPress: () => {
            Alert.alert(
              "Emergency Protection Activated",
              "Your freeze request has been recorded. Backend account controls will be connected during integration."
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
              Security Center
            </Text>

            <Text style={styles.headerSubtitle}>
              Protection & account controls
            </Text>
          </View>

          <View style={styles.headerShield}>
            <MaterialCommunityIcons
              name="shield-check"
              size={20}
              color="#16A34A"
            />
          </View>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* SECURITY HERO */}

          <View style={styles.heroCard}>
            <View style={styles.heroGlowOne} />
            <View style={styles.heroGlowTwo} />

            <View style={styles.heroTop}>
              <View>
                <View style={styles.activeBadge}>
                  <View style={styles.activeDot} />

                  <Text style={styles.activeBadgeText}>
                    PROTECTION ACTIVE
                  </Text>
                </View>

                <Text style={styles.heroTitle}>
                  Strong Protection
                </Text>

                <Text style={styles.heroDescription}>
                  Your identity, devices and financial
                  activity are protected by Twin Shield.
                </Text>
              </View>

              <View style={styles.heroShield}>
                <MaterialCommunityIcons
                  name="shield-check"
                  size={35}
                  color="#FFFFFF"
                />
              </View>
            </View>

            <View style={styles.scoreSection}>
              <View>
                <Text style={styles.scoreLabel}>
                  SECURITY SCORE
                </Text>

                <View style={styles.scoreRow}>
                  <Text style={styles.scoreValue}>
                    94
                  </Text>

                  <Text style={styles.scoreMax}>
                    /100
                  </Text>
                </View>
              </View>

              <View style={styles.scoreStatus}>
                <Ionicons
                  name="checkmark-circle"
                  size={14}
                  color="#86EFAC"
                />

                <Text style={styles.scoreStatusText}>
                  Excellent
                </Text>
              </View>
            </View>

            <View style={styles.scoreTrack}>
              <View style={styles.scoreFill} />
            </View>
          </View>

          {/* ACCOUNT SECURITY */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Account Security
            </Text>

            <View style={styles.secureBadge}>
              <Text style={styles.secureBadgeText}>
                SECURE
              </Text>
            </View>
          </View>

          <View style={styles.settingsCard}>
            <SecurityToggle
              icon="fingerprint"
              title="Biometric Authentication"
              subtitle="Use biometrics to access SecureWealth"
              value={biometric}
              onValueChange={setBiometric}
            />

            <View style={styles.divider} />

            <SecurityToggle
              icon="lock-check-outline"
              title="Two-Step Verification"
              subtitle="Additional verification for sensitive actions"
              value={twoStep}
              onValueChange={setTwoStep}
            />

            <View style={styles.divider} />

            <SecurityToggle
              icon="account-lock-outline"
              title="Login Protection"
              subtitle="Detect suspicious login attempts"
              value={loginProtection}
              onValueChange={setLoginProtection}
            />
          </View>

          {/* DEVICE SECURITY */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Device Security
            </Text>

            <TouchableOpacity
  activeOpacity={0.7}
  onPress={() =>
    router.push("/trusted-devices" as any)
  }
>
  <Text style={styles.manageText}>
    Manage
  </Text>
</TouchableOpacity>
          </View>

          <View style={styles.deviceCard}>
            <View style={styles.deviceIcon}>
              <MaterialCommunityIcons
                name="cellphone-check"
                size={24}
                color="#2563EB"
              />
            </View>

            <View style={styles.deviceContent}>
              <View style={styles.deviceTitleRow}>
                <Text style={styles.deviceTitle}>
                  Current Mobile Device
                </Text>

                <View style={styles.currentBadge}>
                  <Text style={styles.currentBadgeText}>
                    THIS DEVICE
                  </Text>
                </View>
              </View>

              <Text style={styles.deviceSubtitle}>
                Mobile • Trusted session
              </Text>

              <View style={styles.trustedRow}>
                <View style={styles.trustedDot} />

                <Text style={styles.trustedText}>
                  Trusted
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.deviceCard}>
            <View style={styles.deviceIconPurple}>
              <MaterialCommunityIcons
                name="laptop"
                size={24}
                color="#7C3AED"
              />
            </View>

            <View style={styles.deviceContent}>
              <Text style={styles.deviceTitle}>
                Windows PC
              </Text>

              <Text style={styles.deviceSubtitle}>
                Last active recently
              </Text>

              <View style={styles.trustedRow}>
                <View style={styles.trustedDot} />

                <Text style={styles.trustedText}>
                  Trusted
                </Text>
              </View>
            </View>

            <Ionicons
              name="chevron-forward"
              size={17}
              color="#94A3B8"
            />
          </View>

          {/* TRANSACTION SECURITY */}

          <TouchableOpacity
  activeOpacity={0.75}
  style={styles.settingRow}
  onPress={() =>
    router.push(
      "/transaction-controls" as any
    )
  }
></TouchableOpacity>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Transaction Security
            </Text>
          </View>

          
          <View style={styles.settingsCard}>
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.settingRow}
            >
              <View style={styles.blueSettingIcon}>
                <MaterialCommunityIcons
                  name="tune-variant"
                  size={21}
                  color="#2563EB"
                />
              </View>

              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>
                  Daily Transaction Limit
                </Text>

                <Text style={styles.settingSubtitle}>
                  Maximum outgoing amount per day
                </Text>
              </View>

              <View style={styles.limitRight}>
                <Text style={styles.limitValue}>
                  ₹1,00,000
                </Text>

                <Ionicons
                  name="chevron-forward"
                  size={15}
                  color="#94A3B8"
                />
              </View>
            </TouchableOpacity>

            <View style={styles.divider} />

            <SecurityToggle
              icon="earth"
              title="International Payments"
              subtitle="Allow payments outside India"
              value={internationalPayments}
              onValueChange={
                setInternationalPayments
              }
              iconColor="#D97706"
              iconBackground="#FFF7ED"
            />

            <View style={styles.divider} />

            <SecurityToggle
              icon="account-plus-outline"
              title="New Beneficiary Lock"
              subtitle="Extra protection for new beneficiaries"
              value={beneficiaryLock}
              onValueChange={setBeneficiaryLock}
              iconColor="#7C3AED"
              iconBackground="#F5F3FF"
            />
          </View>

          {/* TWIN SHIELD */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Twin Shield Intelligence
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

          <View style={styles.settingsCard}>
            <SecurityToggle
              icon="radar"
              title="Real-Time Fraud Monitoring"
              subtitle="Continuously analyse financial activity"
              value={realTimeFraud}
              onValueChange={setRealTimeFraud}
            />

            <View style={styles.divider} />

            <SecurityToggle
              icon="chart-line"
              title="Behaviour Analysis"
              subtitle="Learn your normal financial patterns"
              value={behaviourAnalysis}
              onValueChange={setBehaviourAnalysis}
              iconColor="#7C3AED"
              iconBackground="#F5F3FF"
            />

            <View style={styles.divider} />

            <SecurityToggle
              icon="cellphone-check"
              title="Device Intelligence"
              subtitle="Analyse device and session trust"
              value={deviceIntelligence}
              onValueChange={setDeviceIntelligence}
              iconColor="#16A34A"
              iconBackground="#F0FDF4"
            />
          </View>

          {/* EMERGENCY */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Emergency Protection
            </Text>
          </View>

          <View style={styles.emergencyCard}>
            <View style={styles.emergencyTop}>
              <View style={styles.emergencyIcon}>
                <MaterialCommunityIcons
                  name="shield-lock-outline"
                  size={25}
                  color="#DC2626"
                />
              </View>

              <View style={styles.emergencyContent}>
                <Text style={styles.emergencyTitle}>
                  Emergency Account Freeze
                </Text>

                <Text style={styles.emergencyDescription}>
                  Temporarily restrict outgoing activity
                  if you believe your accounts are
                  compromised.
                </Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.freezeButton}
              onPress={freezeAccounts}
            >
              <MaterialCommunityIcons
                name="lock-outline"
                size={18}
                color="#FFFFFF"
              />

              <Text style={styles.freezeButtonText}>
                Freeze All Accounts
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <MaterialCommunityIcons
              name="shield-lock-outline"
              size={13}
              color="#94A3B8"
            />

            <Text style={styles.footerText}>
              Security controls protected by Twin Shield
            </Text>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

/* ==========================================
   REUSABLE SECURITY TOGGLE
========================================== */

type SecurityToggleProps = {
  icon:
    | "fingerprint"
    | "lock-check-outline"
    | "account-lock-outline"
    | "earth"
    | "account-plus-outline"
    | "radar"
    | "chart-line"
    | "cellphone-check";

  title: string;
  subtitle: string;

  value: boolean;

  onValueChange: (
    value: boolean
  ) => void;

  iconColor?: string;
  iconBackground?: string;
};

function SecurityToggle({
  icon,
  title,
  subtitle,
  value,
  onValueChange,
  iconColor = "#2563EB",
  iconBackground = "#EFF6FF",
}: SecurityToggleProps) {
  return (
    <View style={styles.settingRow}>
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
          true: "#93C5FD",
        }}
        thumbColor={
          value ? "#2563EB" : "#FFFFFF"
        }
      />
    </View>
  );
}