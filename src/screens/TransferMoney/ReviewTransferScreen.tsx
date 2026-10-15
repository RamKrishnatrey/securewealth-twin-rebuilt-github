import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";

import styles from "./reviewStyles";

export default function ReviewTransferScreen() {
  const params = useLocalSearchParams<{
    amount?: string;
    beneficiaryName?: string;
    beneficiaryBank?: string;
    beneficiaryAccount?: string;
    note?: string;
    beneficiaryId?: string;
    originalAmount?: string;
    originalCurrency?: string;
  }>();

  const amount = Number(params.amount ?? 0);
  const originalAmount = Number(params.originalAmount ?? 0);
  const originalCurrency = params.originalCurrency ?? "INR";

  const beneficiaryName =
    params.beneficiaryName ?? "Beneficiary";

  const beneficiaryBank =
    params.beneficiaryBank ?? "Bank";

  const beneficiaryAccount =
    params.beneficiaryAccount ?? "••••";
  const beneficiaryId =
    params.beneficiaryId ?? "";

  const note =
    params.note && params.note.length > 0
      ? params.note
      : "No payment note";

  const handleConfirm = () => {
    router.push({
      pathname: "/transfer/fraud-check",
      params: {
        amount: amount.toString(),
        beneficiaryName,
        beneficiaryBank,
        beneficiaryAccount,
        note,
        beneficiaryId,
        originalAmount: originalAmount.toString(),
        originalCurrency,
      },
    } as any);
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
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* HEADER */}

          <View style={styles.header}>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => router.back()}
            >
              <Ionicons
                name="chevron-back"
                size={23}
                color="#0F172A"
              />
            </TouchableOpacity>

            <View style={styles.headerCenter}>
              <Text style={styles.headerTitle}>
                Review Transfer
              </Text>

              <Text style={styles.headerSubtitle}>
                Check everything carefully
              </Text>
            </View>

            <View style={styles.headerButton}>
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={22}
                color="#16A34A"
              />
            </View>
          </View>

          {/* AMOUNT HERO */}

          <LinearGradient
            colors={["#2563EB", "#4F46E5"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroCard}
          >
            <Text style={styles.heroLabel}>
              YOU'RE SENDING
            </Text>

            <Text style={styles.heroAmount}>
              ₹{amount.toLocaleString("en-IN")}
            </Text>

            <View style={styles.heroRecipient}>
              <View style={styles.heroAvatar}>
                <MaterialCommunityIcons
                  name="account"
                  size={24}
                  color="#FFFFFF"
                />
              </View>

              <View>
                <Text style={styles.heroTo}>
                  To
                </Text>

                <Text style={styles.heroName}>
                  {beneficiaryName}
                </Text>
              </View>
            </View>
          </LinearGradient>

          {/* TRANSFER DETAILS */}

          <Text style={styles.sectionLabel}>
            TRANSFER DETAILS
          </Text>

          <View style={styles.detailsCard}>
            <DetailRow
              icon="account-outline"
              label="Recipient"
              value={beneficiaryName}
            />

            <DetailRow
              icon="bank-outline"
              label="Bank"
              value={beneficiaryBank}
            />

            <DetailRow
              icon="credit-card-outline"
              label="Account"
              value={beneficiaryAccount}
            />

            <DetailRow
              icon="wallet-outline"
              label="Pay From"
              value="SecureWealth •••• 8294"
            />

            <DetailRow
              icon="message-text-outline"
              label="Note"
              value={note}
            />

            <DetailRow
              icon="cash"
              label="Transfer Fee"
              value="FREE"
              success
              last
            />
          </View>

          {/* TWIN AI PRE-CHECK */}

          <Text style={styles.sectionLabel}>
            TWIN SHIELD PRE-CHECK
          </Text>

          <View style={styles.shieldCard}>
            <View style={styles.shieldHeader}>
              <View style={styles.shieldIcon}>
                <MaterialCommunityIcons
                  name="shield-check"
                  size={26}
                  color="#16A34A"
                />
              </View>

              <View style={styles.shieldHeaderText}>
                <Text style={styles.shieldTitle}>
                  Initial checks passed
                </Text>

                <Text style={styles.shieldSubtitle}>
                  Twin AI found no immediate warning signs.
                </Text>
              </View>

              <View style={styles.safeChip}>
                <Text style={styles.safeText}>
                  SAFE
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

            <SecurityCheck
              icon="account-check-outline"
              title="Recipient verified"
              description="Beneficiary information matches."
            />

            <SecurityCheck
              icon="chart-bell-curve"
              title="Amount behaviour normal"
              description="Transfer is within your expected range."
            />

            <SecurityCheck
              icon="cellphone-check"
              title="Trusted device"
              description="This session is from your recognized device."
            />

            <View style={styles.riskRow}>
              <View>
                <Text style={styles.riskLabel}>
                  Estimated Risk
                </Text>

                <Text style={styles.riskValue}>
                  Low
                </Text>
              </View>

              <View style={styles.scoreContainer}>
                <Text style={styles.scoreLabel}>
                  TWIN SCORE
                </Text>

                <Text style={styles.scoreValue}>
                  98/100
                </Text>
              </View>
            </View>
          </View>

          {/* FINAL TOTAL */}

          <View style={styles.totalCard}>
            <View>
              <Text style={styles.totalLabel}>
                Total Debit
              </Text>

              <Text style={styles.totalSubtext}>
                Includes ₹0 transfer fee
              </Text>
            </View>

            <Text style={styles.totalAmount}>
              ₹{amount.toLocaleString("en-IN")}
            </Text>
          </View>

          {/* CONFIRM */}

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.confirmButton}
            onPress={handleConfirm}
          >
            <MaterialCommunityIcons
              name="shield-lock-outline"
              size={20}
              color="#FFFFFF"
            />

            <Text style={styles.confirmButtonText}>
              Verify with Twin Shield
            </Text>

            <Ionicons
              name="arrow-forward"
              size={19}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          <View style={styles.footer}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={13}
              color="#64748B"
            />

            <Text style={styles.footerText}>
              You will authorize the payment after the
              security verification.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

function DetailRow({
  icon,
  label,
  value,
  success = false,
  last = false,
}: {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  value: string;
  success?: boolean;
  last?: boolean;
}) {
  return (
    <View
      style={[
        styles.detailRow,
        last && styles.detailRowLast,
      ]}
    >
      <View style={styles.detailLeft}>
        <View style={styles.detailIcon}>
          <MaterialCommunityIcons
            name={icon}
            size={18}
            color="#64748B"
          />
        </View>

        <Text style={styles.detailLabel}>
          {label}
        </Text>
      </View>

      <Text
        numberOfLines={2}
        style={[
          styles.detailValue,
          success && styles.successValue,
        ]}
      >
        {value}
      </Text>
    </View>
  );
}

function SecurityCheck({
  icon,
  title,
  description,
}: {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
  description: string;
}) {
  return (
    <View style={styles.checkRow}>
      <View style={styles.checkIcon}>
        <MaterialCommunityIcons
          name={icon}
          size={19}
          color="#16A34A"
        />
      </View>

      <View style={styles.checkContent}>
        <Text style={styles.checkTitle}>
          {title}
        </Text>

        <Text style={styles.checkDescription}>
          {description}
        </Text>
      </View>

      <Ionicons
        name="checkmark-circle"
        size={20}
        color="#22C55E"
      />
    </View>
  );
}