import React, { useState } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  StatusBar,
  Modal,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { router } from "expo-router";

import styles from "./transactionControlsStyles";

const LIMIT_OPTIONS = [
  25000,
  50000,
  75000,
  100000,
  200000,
];

const formatCurrency = (amount: number) =>
  `₹${amount.toLocaleString("en-IN")}`;

export default function TransactionControlsScreen() {
  const [dailyLimit, setDailyLimit] =
    useState(100000);

  const [limitModalVisible, setLimitModalVisible] =
    useState(false);

  const [upiEnabled, setUpiEnabled] =
    useState(true);

  const [bankTransferEnabled, setBankTransferEnabled] =
    useState(true);

  const [cardEnabled, setCardEnabled] =
    useState(true);

  const [internationalEnabled, setInternationalEnabled] =
    useState(false);

  const [beneficiaryLock, setBeneficiaryLock] =
    useState(true);

  const selectLimit = (limit: number) => {
    setDailyLimit(limit);
    setLimitModalVisible(false);
  };

  const applyAIRecommendation = () => {
    setDailyLimit(75000);

    Alert.alert(
      "Smart Limit Applied",
      "Twin's recommended daily transaction limit of ₹75,000 has been applied."
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
              Transaction Controls
            </Text>

            <Text style={styles.headerSubtitle}>
              Limits & payment security
            </Text>
          </View>

          <View style={styles.activeBadge}>
            <View style={styles.activeDot} />

            <Text style={styles.activeBadgeText}>
              ACTIVE
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
                  name="tune-variant"
                  size={29}
                  color="#FFFFFF"
                />
              </View>

              <View style={styles.protectionBadge}>
                <MaterialCommunityIcons
                  name="shield-check-outline"
                  size={12}
                  color="#BBF7D0"
                />

                <Text style={styles.protectionBadgeText}>
                  PROTECTED
                </Text>
              </View>
            </View>

            <Text style={styles.heroTitle}>
              You're in control
            </Text>

            <Text style={styles.heroDescription}>
              Manage transaction limits and payment
              channels while Twin Shield monitors
              unusual financial activity in real time.
            </Text>

            <View style={styles.heroBottom}>
              <View>
                <Text style={styles.heroLimitLabel}>
                  DAILY TRANSACTION LIMIT
                </Text>

                <Text style={styles.heroLimitValue}>
                  {formatCurrency(dailyLimit)}
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.75}
                style={styles.heroChangeButton}
                onPress={() =>
                  setLimitModalVisible(true)
                }
              >
                <Text
                  style={styles.heroChangeButtonText}
                >
                  Change
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* LIMITS */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Transaction Limits
            </Text>

            <View style={styles.secureChip}>
              <MaterialCommunityIcons
                name="lock-check-outline"
                size={11}
                color="#16A34A"
              />

              <Text style={styles.secureChipText}>
                SECURE
              </Text>
            </View>
          </View>

          <View style={styles.card}>
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.limitRow}
              onPress={() =>
                setLimitModalVisible(true)
              }
            >
              <View style={styles.settingIconBlue}>
                <MaterialCommunityIcons
                  name="calendar-today"
                  size={20}
                  color="#2563EB"
                />
              </View>

              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>
                  Daily Transaction Limit
                </Text>

                <Text style={styles.settingSubtitle}>
                  Maximum total payments per day
                </Text>
              </View>

              <View style={styles.limitRight}>
                <Text style={styles.limitValue}>
                  {formatCurrency(dailyLimit)}
                </Text>

                <Ionicons
                  name="chevron-forward"
                  size={15}
                  color="#94A3B8"
                />
              </View>
            </TouchableOpacity>

            <View style={styles.divider} />

            <View style={styles.limitRow}>
              <View style={styles.settingIconPurple}>
                <MaterialCommunityIcons
                  name="cash-fast"
                  size={21}
                  color="#7C3AED"
                />
              </View>

              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>
                  Per-Transaction Limit
                </Text>

                <Text style={styles.settingSubtitle}>
                  Maximum allowed in one payment
                </Text>
              </View>

              <Text style={styles.staticLimitValue}>
                ₹50,000
              </Text>
            </View>
          </View>

          {/* PAYMENT CONTROLS */}

          <Text style={styles.sectionTitle}>
            Payment Controls
          </Text>

          <View style={styles.card}>
            <PaymentToggle
              icon="qrcode-scan"
              title="UPI Payments"
              subtitle="Allow UPI transactions"
              value={upiEnabled}
              onValueChange={setUpiEnabled}
              iconColor="#2563EB"
              iconBackground="#EFF6FF"
            />

            <View style={styles.divider} />

            <PaymentToggle
              icon="bank-transfer"
              title="Bank Transfers"
              subtitle="NEFT, IMPS and account transfers"
              value={bankTransferEnabled}
              onValueChange={setBankTransferEnabled}
              iconColor="#7C3AED"
              iconBackground="#F5F3FF"
            />

            <View style={styles.divider} />

            <PaymentToggle
              icon="credit-card-outline"
              title="Online & Card Payments"
              subtitle="Card and online merchant payments"
              value={cardEnabled}
              onValueChange={setCardEnabled}
              iconColor="#0F766E"
              iconBackground="#F0FDFA"
            />

            <View style={styles.divider} />

            <PaymentToggle
              icon="earth"
              title="International Payments"
              subtitle="Payments outside India"
              value={internationalEnabled}
              onValueChange={setInternationalEnabled}
              iconColor="#D97706"
              iconBackground="#FFFBEB"
            />
          </View>

          {/* BENEFICIARY SECURITY */}

          <Text style={styles.sectionTitle}>
            Beneficiary Security
          </Text>

          <View style={styles.card}>
            <View style={styles.toggleRow}>
              <View style={styles.settingIconGreen}>
                <MaterialCommunityIcons
                  name="account-lock-outline"
                  size={21}
                  color="#16A34A"
                />
              </View>

              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>
                  New Beneficiary Lock
                </Text>

                <Text style={styles.settingSubtitle}>
                  Extra protection for newly added
                  beneficiaries
                </Text>
              </View>

              <Switch
                value={beneficiaryLock}
                onValueChange={setBeneficiaryLock}
                trackColor={{
                  false: "#CBD5E1",
                  true: "#86EFAC",
                }}
                thumbColor={
                  beneficiaryLock
                    ? "#16A34A"
                    : "#F8FAFC"
                }
              />
            </View>

            {beneficiaryLock && (
              <>
                <View style={styles.divider} />

                <View style={styles.coolingRow}>
                  <View>
                    <Text style={styles.coolingLabel}>
                      SECURITY COOLING PERIOD
                    </Text>

                    <Text style={styles.coolingValue}>
                      30 Minutes
                    </Text>
                  </View>

                  <View style={styles.lockChip}>
                    <MaterialCommunityIcons
                      name="shield-lock-outline"
                      size={14}
                      color="#16A34A"
                    />

                    <Text style={styles.lockChipText}>
                      ENABLED
                    </Text>
                  </View>
                </View>
              </>
            )}
          </View>

          {/* AI SMART LIMIT */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Twin Smart Limits
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
            <View style={styles.aiTop}>
              <View style={styles.aiIcon}>
                <MaterialCommunityIcons
                  name="creation"
                  size={22}
                  color="#7C3AED"
                />
              </View>

              <View style={styles.aiHeading}>
                <Text style={styles.aiTitle}>
                  Smarter limits for your behaviour
                </Text>

                <Text style={styles.aiSubtitle}>
                  Personalized by Twin AI
                </Text>
              </View>
            </View>

            <Text style={styles.aiDescription}>
              Based on your normal spending behaviour,
              Twin recommends a slightly lower daily
              limit. This can reduce exposure to
              high-value fraudulent transactions while
              keeping your regular payments unaffected.
            </Text>

            <View style={styles.recommendationBox}>
              <View>
                <Text
                  style={
                    styles.recommendationLabel
                  }
                >
                  SUGGESTED SAFE LIMIT
                </Text>

                <Text
                  style={
                    styles.recommendationValue
                  }
                >
                  ₹75,000
                </Text>
              </View>

              <View
                style={
                  styles.recommendedBadge
                }
              >
                <MaterialCommunityIcons
                  name="shield-star-outline"
                  size={14}
                  color="#7C3AED"
                />

                <Text
                  style={
                    styles.recommendedBadgeText
                  }
                >
                  RECOMMENDED
                </Text>
              </View>
            </View>

            <View style={styles.confidenceHeader}>
              <Text style={styles.confidenceLabel}>
                AI Confidence
              </Text>

              <Text style={styles.confidenceValue}>
                96%
              </Text>
            </View>

            <View style={styles.confidenceTrack}>
              <View style={styles.confidenceFill} />
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.applyButton}
              onPress={applyAIRecommendation}
            >
              <MaterialCommunityIcons
                name="creation"
                size={17}
                color="#FFFFFF"
              />

              <Text style={styles.applyButtonText}>
                Apply AI Recommendation
              </Text>
            </TouchableOpacity>
          </View>

          {/* INFO */}

          <View style={styles.infoCard}>
            <View style={styles.infoIcon}>
              <Ionicons
                name="information-circle-outline"
                size={21}
                color="#2563EB"
              />
            </View>

            <Text style={styles.infoText}>
              Changes to sensitive transaction
              controls may require additional
              verification when connected to your
              bank account.
            </Text>
          </View>

          <View style={styles.footer}>
            <MaterialCommunityIcons
              name="shield-lock-outline"
              size={13}
              color="#94A3B8"
            />

            <Text style={styles.footerText}>
              Transaction controls protected by Twin Shield
            </Text>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>

        {/* LIMIT MODAL */}

        <Modal
          visible={limitModalVisible}
          transparent
          animationType="slide"
          onRequestClose={() =>
            setLimitModalVisible(false)
          }
        >
          <View style={styles.modalOverlay}>
            <TouchableOpacity
              style={styles.modalBackdrop}
              activeOpacity={1}
              onPress={() =>
                setLimitModalVisible(false)
              }
            />

            <View style={styles.modalSheet}>
              <View style={styles.modalHandle} />

              <View style={styles.modalHeader}>
                <View>
                  <Text style={styles.modalTitle}>
                    Daily Transaction Limit
                  </Text>

                  <Text style={styles.modalSubtitle}>
                    Choose your maximum daily limit
                  </Text>
                </View>

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.modalClose}
                  onPress={() =>
                    setLimitModalVisible(false)
                  }
                >
                  <Ionicons
                    name="close"
                    size={20}
                    color="#64748B"
                  />
                </TouchableOpacity>
              </View>

              {LIMIT_OPTIONS.map((limit) => {
                const selected =
                  dailyLimit === limit;

                return (
                  <TouchableOpacity
                    key={limit}
                    activeOpacity={0.75}
                    style={[
                      styles.limitOption,
                      selected &&
                        styles.limitOptionSelected,
                    ]}
                    onPress={() =>
                      selectLimit(limit)
                    }
                  >
                    <View>
                      <Text
                        style={[
                          styles.limitOptionValue,
                          selected &&
                            styles.limitOptionValueSelected,
                        ]}
                      >
                        {formatCurrency(limit)}
                      </Text>

                      {limit === 75000 && (
                        <Text
                          style={
                            styles.aiRecommendedText
                          }
                        >
                          Twin AI recommended
                        </Text>
                      )}
                    </View>

                    {selected ? (
                      <Ionicons
                        name="checkmark-circle"
                        size={22}
                        color="#2563EB"
                      />
                    ) : (
                      <View
                        style={
                          styles.unselectedCircle
                        }
                      />
                    )}
                  </TouchableOpacity>
                );
              })}

              <Text style={styles.modalSecurityText}>
                Lower limits can help reduce your
                exposure to unauthorized high-value
                transactions.
              </Text>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
}

/* =========================
   PAYMENT TOGGLE
========================= */

type PaymentToggleProps = {
  icon: React.ComponentProps<
    typeof MaterialCommunityIcons
  >["name"];

  title: string;
  subtitle: string;
  value: boolean;

  onValueChange: (
    value: boolean
  ) => void;

  iconColor: string;
  iconBackground: string;
};

function PaymentToggle({
  icon,
  title,
  subtitle,
  value,
  onValueChange,
  iconColor,
  iconBackground,
}: PaymentToggleProps) {
  return (
    <View style={styles.toggleRow}>
      <View
        style={[
          styles.paymentIcon,
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
          value ? "#2563EB" : "#F8FAFC"
        }
      />
    </View>
  );
}