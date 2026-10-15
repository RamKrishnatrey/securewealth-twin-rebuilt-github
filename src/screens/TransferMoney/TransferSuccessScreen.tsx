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

import {
  router,
  useLocalSearchParams,
} from "expo-router";

import styles from "./successStyles";

export default function TransferSuccessScreen() {
  const params = useLocalSearchParams<{
    amount?: string;
    beneficiaryName?: string;
    beneficiaryBank?: string;
    beneficiaryAccount?: string;
    note?: string;
    riskScore?: string;
  }>();

  const amount = Number(params.amount ?? 0);

  const beneficiaryName =
    params.beneficiaryName ?? "Beneficiary";

  const beneficiaryBank =
    params.beneficiaryBank ?? "Bank";

  const beneficiaryAccount =
    params.beneficiaryAccount ?? "••••";

  const note =
    params.note && params.note.length > 0
      ? params.note
      : "—";

  const riskScore =
    params.riskScore ?? "98";

  /*
    Prototype transaction ID.

    Backend should provide the actual transaction ID
    after the transfer request succeeds.
  */

  const transactionId =
    "SWT-" +
    Date.now()
      .toString()
      .slice(-10);

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
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* SUCCESS */}

          <View style={styles.successArea}>
            <LinearGradient
              colors={["#16A34A", "#22C55E"]}
              style={styles.successCircle}
            >
              <Ionicons
                name="checkmark"
                size={52}
                color="#FFFFFF"
              />
            </LinearGradient>

            <Text style={styles.successTitle}>
              Transfer Successful
            </Text>

            <Text style={styles.successSubtitle}>
              Your money has been sent securely.
            </Text>
          </View>

          {/* AMOUNT */}

          <View style={styles.amountCard}>
            <Text style={styles.sentLabel}>
              AMOUNT SENT
            </Text>

            <Text style={styles.amount}>
              ₹{amount.toLocaleString("en-IN")}
            </Text>

            <Text style={styles.recipient}>
              to {beneficiaryName}
            </Text>

            <View style={styles.completedBadge}>
              <View style={styles.completedDot} />

              <Text style={styles.completedText}>
                COMPLETED
              </Text>
            </View>
          </View>

          {/* RECEIPT */}

          <Text style={styles.sectionLabel}>
            TRANSFER RECEIPT
          </Text>

          <View style={styles.receiptCard}>
            <ReceiptRow
              label="Recipient"
              value={beneficiaryName}
            />

            <ReceiptRow
              label="Bank"
              value={beneficiaryBank}
            />

            <ReceiptRow
              label="Account"
              value={beneficiaryAccount}
            />

            <ReceiptRow
              label="Paid From"
              value="SecureWealth •••• 8294"
            />

            <ReceiptRow
              label="Transaction ID"
              value={transactionId}
            />

            <ReceiptRow
              label="Payment Note"
              value={note}
            />

            <ReceiptRow
              label="Transfer Fee"
              value="₹0"
              success
              last
            />
          </View>

          {/* SHIELD */}

          <View style={styles.shieldCard}>
            <MaterialCommunityIcons
              name="shield-check"
              size={27}
              color="#16A34A"
            />

            <View style={styles.shieldContent}>
              <Text style={styles.shieldTitle}>
                Protected by Twin Shield
              </Text>

              <Text style={styles.shieldSubtitle}>
                Security score {riskScore}/100 • Low
                risk transaction
              </Text>
            </View>

            <Ionicons
              name="checkmark-circle"
              size={22}
              color="#22C55E"
            />
          </View>

          {/* RECEIPT ACTION */}

          <TouchableOpacity
            style={styles.receiptButton}
          >
            <Ionicons
              name="download-outline"
              size={20}
              color="#2563EB"
            />

            <Text style={styles.receiptButtonText}>
              Download Receipt
            </Text>
          </TouchableOpacity>

          {/* DONE */}

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.doneButton}
            onPress={() =>
              router.replace(
                "/(tabs)/dashboard" as any
              )
            }
          >
            <Text style={styles.doneText}>
              Back to Dashboard
            </Text>

            <Ionicons
              name="arrow-forward"
              size={19}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              router.replace(
                "/(tabs)/transactions" as any
              )
            }
            style={styles.activityButton}
          >
            <Text style={styles.activityText}>
              View Activity
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

function ReceiptRow({
  label,
  value,
  success = false,
  last = false,
}: {
  label: string;
  value: string;
  success?: boolean;
  last?: boolean;
}) {
  return (
    <View
      style={[
        styles.receiptRow,
        last && styles.receiptRowLast,
      ]}
    >
      <Text style={styles.receiptLabel}>
        {label}
      </Text>

      <Text
        numberOfLines={2}
        style={[
          styles.receiptValue,
          success &&
            styles.receiptValueSuccess,
        ]}
      >
        {value}
      </Text>
    </View>
  );
}