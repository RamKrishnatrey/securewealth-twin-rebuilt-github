import React, { useState } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { router } from "expo-router";

import styles from "./threatReviewStyles";

type ThreatSignal = {
  id: string;
  title: string;
  description: string;
  severity: "high" | "medium";
  icon:
    | "map-marker-outline"
    | "cellphone"
    | "chart-line"
    | "clock-outline";
};

const threatSignals: ThreatSignal[] = [
  {
    id: "location",
    title: "Unusual Location",
    description:
      "Transaction originated from a location not normally associated with your account.",
    severity: "high",
    icon: "map-marker-outline",
  },
  {
    id: "device",
    title: "New Device Detected",
    description:
      "This payment attempt was initiated from an unrecognized device.",
    severity: "high",
    icon: "cellphone",
  },
  {
    id: "behaviour",
    title: "Spending Pattern Anomaly",
    description:
      "The amount is significantly higher than your typical online transactions.",
    severity: "medium",
    icon: "chart-line",
  },
  {
    id: "timing",
    title: "Unusual Transaction Time",
    description:
      "The payment occurred outside your normal transaction activity window.",
    severity: "medium",
    icon: "clock-outline",
  },
];

export default function ThreatReviewScreen() {
  const [status, setStatus] = useState<
    "pending" | "safe" | "reported"
  >("pending");

  const markAsSafe = () => {
    setStatus("safe");

    Alert.alert(
      "Transaction Confirmed",
      "Twin Shield has marked this transaction as trusted and will learn from this activity."
    );
  };

  const reportFraud = () => {
    setStatus("reported");

    Alert.alert(
      "Fraud Protection Activated",
      "The transaction has been reported as suspicious. Twin Shield will escalate the alert for security review."
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
            style={styles.backButton}
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
              Threat Review
            </Text>

            <Text style={styles.headerSubtitle}>
              Twin Shield Intelligence
            </Text>
          </View>

          <View style={styles.alertIndicator}>
            <View style={styles.alertDot} />

            <Text style={styles.alertIndicatorText}>
              ALERT
            </Text>
          </View>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* HIGH RISK HERO */}

          <View style={styles.heroCard}>
            <View style={styles.heroGlowOne} />
            <View style={styles.heroGlowTwo} />

            <View style={styles.warningIconOuter}>
              <View style={styles.warningIconInner}>
                <Ionicons
                  name="warning"
                  size={32}
                  color="#FFFFFF"
                />
              </View>
            </View>

            <View style={styles.highRiskBadge}>
              <View style={styles.highRiskDot} />

              <Text style={styles.highRiskBadgeText}>
                HIGH RISK ACTIVITY
              </Text>
            </View>

            <Text style={styles.heroTitle}>
              Suspicious transaction detected
            </Text>

            <Text style={styles.heroDescription}>
              Twin Shield detected multiple signals
              that don't match your normal financial
              behaviour.
            </Text>

            <View style={styles.riskScoreContainer}>
              <View>
                <Text style={styles.riskScoreLabel}>
                  FRAUD RISK SCORE
                </Text>

                <View style={styles.riskScoreRow}>
                  <Text style={styles.riskScore}>
                    87
                  </Text>

                  <Text style={styles.riskScoreMax}>
                    /100
                  </Text>
                </View>
              </View>

              <View style={styles.riskLevel}>
                <MaterialCommunityIcons
                  name="alert-circle-outline"
                  size={16}
                  color="#FECACA"
                />

                <Text style={styles.riskLevelText}>
                  Critical
                </Text>
              </View>
            </View>

            <View style={styles.riskTrack}>
              <View style={styles.riskFill} />
            </View>
          </View>

          {/* TRANSACTION */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Flagged Transaction
            </Text>

            <Text style={styles.detectedText}>
              Detected now
            </Text>
          </View>

          <View style={styles.transactionCard}>
            <View style={styles.transactionTop}>
              <View style={styles.merchantIcon}>
                <MaterialCommunityIcons
                  name="shopping-outline"
                  size={24}
                  color="#DC2626"
                />
              </View>

              <View style={styles.merchantContent}>
                <Text style={styles.merchantName}>
                  Digital Store Online
                </Text>

                <Text style={styles.transactionCategory}>
                  Online Purchase
                </Text>
              </View>

              <View style={styles.blockedBadge}>
                <Text style={styles.blockedText}>
                  HELD
                </Text>
              </View>
            </View>

            <View style={styles.transactionDivider} />

            <View style={styles.amountRow}>
              <View>
                <Text style={styles.amountLabel}>
                  TRANSACTION AMOUNT
                </Text>

                <Text style={styles.amount}>
                  ₹48,500
                </Text>
              </View>

              <View style={styles.transactionTimeBox}>
                <Ionicons
                  name="time-outline"
                  size={14}
                  color="#64748B"
                />

                <Text style={styles.transactionTime}>
                  Today • 2:37 AM
                </Text>
              </View>
            </View>

            <View style={styles.transactionMeta}>
              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>
                  Payment method
                </Text>

                <Text style={styles.metaValue}>
                  HDFC •••• 4821
                </Text>
              </View>

              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>
                  Location
                </Text>

                <Text style={styles.metaValueDanger}>
                  Unknown
                </Text>
              </View>

              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>
                  Device
                </Text>

                <Text style={styles.metaValueDanger}>
                  New Device
                </Text>
              </View>
            </View>
          </View>

          {/* WHY FLAGGED */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Why Twin Flagged This
            </Text>

            <View style={styles.signalCount}>
              <Text style={styles.signalCountText}>
                4 SIGNALS
              </Text>
            </View>
          </View>

          <View style={styles.signalsCard}>
            {threatSignals.map((signal, index) => (
              <View key={signal.id}>
                <View style={styles.signalItem}>
                  <View
                    style={[
                      styles.signalIcon,
                      signal.severity === "high"
                        ? styles.signalIconHigh
                        : styles.signalIconMedium,
                    ]}
                  >
                    <MaterialCommunityIcons
                      name={signal.icon}
                      size={20}
                      color={
                        signal.severity === "high"
                          ? "#DC2626"
                          : "#D97706"
                      }
                    />
                  </View>

                  <View style={styles.signalContent}>
                    <View style={styles.signalTitleRow}>
                      <Text style={styles.signalTitle}>
                        {signal.title}
                      </Text>

                      <View
                        style={[
                          styles.severityBadge,
                          signal.severity === "high"
                            ? styles.severityHigh
                            : styles.severityMedium,
                        ]}
                      >
                        <Text
                          style={[
                            styles.severityText,
                            signal.severity === "high"
                              ? styles.severityTextHigh
                              : styles.severityTextMedium,
                          ]}
                        >
                          {signal.severity.toUpperCase()}
                        </Text>
                      </View>
                    </View>

                    <Text style={styles.signalDescription}>
                      {signal.description}
                    </Text>
                  </View>
                </View>

                {index !== threatSignals.length - 1 && (
                  <View style={styles.signalDivider} />
                )}
              </View>
            ))}
          </View>

          {/* AI ANALYSIS */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Twin AI Analysis
            </Text>

            <View style={styles.aiBadge}>
              <MaterialCommunityIcons
                name="creation"
                size={11}
                color="#7C3AED"
              />

              <Text style={styles.aiBadgeText}>
                AI
              </Text>
            </View>
          </View>

          <View style={styles.aiCard}>
            <View style={styles.aiHeader}>
              <View style={styles.aiIcon}>
                <MaterialCommunityIcons
                  name="creation"
                  size={22}
                  color="#7C3AED"
                />
              </View>

              <View style={styles.aiHeaderText}>
                <Text style={styles.aiTitle}>
                  This activity needs your attention
                </Text>

                <Text style={styles.aiSubtitle}>
                  Explainable fraud intelligence
                </Text>
              </View>
            </View>

            <Text style={styles.aiDescription}>
              This transaction differs significantly
              from your usual behaviour. The combination
              of a new device, unusual transaction time,
              unknown location and unusually high amount
              increased its fraud probability.
            </Text>

            <View style={styles.aiRecommendation}>
              <View style={styles.recommendationIcon}>
                <MaterialCommunityIcons
                  name="shield-check-outline"
                  size={18}
                  color="#DC2626"
                />
              </View>

              <View style={styles.recommendationContent}>
                <Text style={styles.recommendationLabel}>
                  TWIN RECOMMENDATION
                </Text>

                <Text style={styles.recommendationText}>
                  Keep this payment on hold until you
                  confirm whether it was initiated by you.
                </Text>
              </View>
            </View>

            <View style={styles.confidenceHeader}>
              <Text style={styles.confidenceLabel}>
                AI Confidence
              </Text>

              <Text style={styles.confidenceValue}>
                94%
              </Text>
            </View>

            <View style={styles.confidenceTrack}>
              <View style={styles.confidenceFill} />
            </View>
          </View>

          {/* USER DECISION */}

          {status === "pending" ? (
            <>
              <Text style={styles.questionTitle}>
                Do you recognize this transaction?
              </Text>

              <Text style={styles.questionDescription}>
                Your response helps Twin improve future
                fraud detection.
              </Text>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.safeButton}
                onPress={markAsSafe}
              >
                <Ionicons
                  name="checkmark-circle-outline"
                  size={20}
                  color="#FFFFFF"
                />

                <Text style={styles.safeButtonText}>
                  Yes, This Was Me
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.fraudButton}
                onPress={reportFraud}
              >
                <MaterialCommunityIcons
                  name="alert-circle-outline"
                  size={20}
                  color="#DC2626"
                />

                <Text style={styles.fraudButtonText}>
                  No, Report as Fraud
                </Text>
              </TouchableOpacity>
            </>
          ) : status === "safe" ? (
            <View style={styles.resolutionSafe}>
              <Ionicons
                name="checkmark-circle"
                size={30}
                color="#16A34A"
              />

              <View style={styles.resolutionContent}>
                <Text style={styles.resolutionSafeTitle}>
                  Transaction confirmed
                </Text>

                <Text style={styles.resolutionText}>
                  Twin will use this response to improve
                  your behavioural profile.
                </Text>
              </View>
            </View>
          ) : (
            <View style={styles.resolutionFraud}>
              <MaterialCommunityIcons
                name="shield-alert-outline"
                size={30}
                color="#DC2626"
              />

              <View style={styles.resolutionContent}>
                <Text style={styles.resolutionFraudTitle}>
                  Fraud report submitted
                </Text>

                <Text style={styles.resolutionText}>
                  Twin Shield has escalated this activity
                  for security review.
                </Text>
              </View>
            </View>
          )}

          <View style={styles.footerSecurity}>
            <MaterialCommunityIcons
              name="shield-lock-outline"
              size={13}
              color="#94A3B8"
            />

            <Text style={styles.footerSecurityText}>
              Protected by Twin Shield AI Fraud Intelligence
            </Text>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}