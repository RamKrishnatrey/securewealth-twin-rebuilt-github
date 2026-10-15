import React, { useMemo, useState } from "react";

import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import {
  router,
  useLocalSearchParams,
} from "expo-router";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import { styles } from "./scanResultStyles";

export default function ScanResultScreen() {
  const params = useLocalSearchParams<{
    data?: string;
  }>();

  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  /*
    QR data will eventually be parsed according
    to the payment format supported by the backend.

    For the frontend phase, we preserve the scanned
    payload and show a verified payment experience.
  */

  const scannedData = useMemo(() => {
    if (typeof params.data === "string") {
      return params.data;
    }

    return "";
  }, [params.data]);

  const displayRecipient = useMemo(() => {
    /*
      Temporary frontend recipient.

      In backend integration this will come from
      parsed QR / UPI / merchant information.
    */

    if (
      scannedData
        .toLowerCase()
        .includes("securewealth")
    ) {
      return "SecureWealth Merchant";
    }

    return "Verified QR Recipient";
  }, [scannedData]);

  const numericAmount = Number(
    amount.replace(/,/g, "")
  );

  const amountIsValid =
    amount.trim().length > 0 &&
    !Number.isNaN(numericAmount) &&
    numericAmount > 0;

  const handleAmountChange = (
    value: string
  ) => {
    const sanitized = value.replace(
      /[^0-9.]/g,
      ""
    );

    const parts = sanitized.split(".");

    if (parts.length > 2) {
      return;
    }

    if (
      parts[1] &&
      parts[1].length > 2
    ) {
      return;
    }

    setAmount(sanitized);
  };

  const handleContinue = () => {
  if (!amountIsValid) {
    Alert.alert(
      "Enter Amount",
      "Please enter a valid payment amount."
    );

    return;
  }

  router.push({
    pathname: "/transfer/review",

    params: {
      amount: numericAmount.toString(),

      beneficiaryName:
        displayRecipient,

      beneficiaryBank:
        "QR Payment",

      beneficiaryAccount:
        "Scanned QR",

      note:
        note.trim().length > 0
          ? note
          : "QR payment",
    },
  } as any);
};

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top"]}
    >
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : undefined
        }
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
              Payment Details
            </Text>

            <Text
              style={styles.headerSubtitle}
            >
              QR Payment
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.headerButton}
            onPress={() =>
              router.replace(
                "/qr-scanner" as any
              )
            }
          >
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={20}
              color="#2563EB"
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={
            styles.scrollContent
          }
        >
          {/* VERIFIED RESULT */}

          <View style={styles.verifiedCard}>
            <View style={styles.verifiedIcon}>
              <MaterialCommunityIcons
                name="check-decagram"
                size={31}
                color="#16A34A"
              />
            </View>

            <Text style={styles.verifiedTitle}>
              QR Code Detected
            </Text>

            <Text style={styles.verifiedText}>
              Payment information has been
              successfully scanned.
            </Text>

            <View style={styles.securityBadge}>
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={15}
                color="#15803D"
              />

              <Text
                style={styles.securityBadgeText}
              >
                Verified by Twin Shield
              </Text>
            </View>
          </View>

          {/* RECIPIENT */}

          <Text style={styles.sectionLabel}>
            PAYING TO
          </Text>

          <View style={styles.recipientCard}>
            <View style={styles.avatar}>
              <MaterialCommunityIcons
                name="store-outline"
                size={25}
                color="#2563EB"
              />
            </View>

            <View style={styles.recipientContent}>
              <Text
                style={styles.recipientName}
              >
                {displayRecipient}
              </Text>

              <View
                style={
                  styles.verifiedRecipientRow
                }
              >
                <MaterialCommunityIcons
                  name="check-circle"
                  size={13}
                  color="#16A34A"
                />

                <Text
                  style={
                    styles.verifiedRecipientText
                  }
                >
                  Verified recipient
                </Text>
              </View>
            </View>

            <View style={styles.qrIcon}>
              <MaterialCommunityIcons
                name="qrcode"
                size={22}
                color="#64748B"
              />
            </View>
          </View>

          {/* AMOUNT */}

          <Text style={styles.sectionLabel}>
            PAYMENT AMOUNT
          </Text>

          <View style={styles.amountCard}>
            <Text style={styles.amountLabel}>
              Enter amount
            </Text>

            <View style={styles.amountRow}>
              <Text style={styles.currency}>
                ₹
              </Text>

              <TextInput
                value={amount}
                onChangeText={
                  handleAmountChange
                }
                placeholder="0"
                placeholderTextColor="#CBD5E1"
                keyboardType="decimal-pad"
                style={styles.amountInput}
                maxLength={10}
              />
            </View>

            <View style={styles.amountDivider} />

            <View style={styles.balanceRow}>
              <Text style={styles.balanceLabel}>
                Available balance
              </Text>

              <Text style={styles.balanceValue}>
                ₹1,24,580.00
              </Text>
            </View>
          </View>

          {/* QUICK AMOUNTS */}

          <View style={styles.quickAmounts}>
            {["500", "1000", "2000"].map(
              (value) => (
                <TouchableOpacity
                  key={value}
                  activeOpacity={0.72}
                  style={
                    styles.quickAmountButton
                  }
                  onPress={() =>
                    setAmount(value)
                  }
                >
                  <Text
                    style={
                      styles.quickAmountText
                    }
                  >
                    ₹{value}
                  </Text>
                </TouchableOpacity>
              )
            )}
          </View>

          {/* NOTE */}

          <Text style={styles.sectionLabel}>
            NOTE
          </Text>

          <View style={styles.noteCard}>
            <MaterialCommunityIcons
              name="message-text-outline"
              size={19}
              color="#64748B"
            />

            <TextInput
              value={note}
              onChangeText={setNote}
              placeholder="Add a note (optional)"
              placeholderTextColor="#94A3B8"
              style={styles.noteInput}
              maxLength={80}
            />
          </View>

          {/* SECURITY */}

          <View style={styles.shieldCard}>
            <View style={styles.shieldIcon}>
              <MaterialCommunityIcons
                name="shield-lock-outline"
                size={22}
                color="#16A34A"
              />
            </View>

            <View style={styles.shieldContent}>
              <Text style={styles.shieldTitle}>
                Twin Shield Protection
              </Text>

              <Text style={styles.shieldText}>
                This payment will be checked for
                suspicious activity before
                authorization.
              </Text>
            </View>
          </View>

          {/* RAW QR INFORMATION */}

          {scannedData.length > 0 && (
            <View style={styles.qrDataCard}>
              <View style={styles.qrDataHeader}>
                <MaterialCommunityIcons
                  name="information-outline"
                  size={16}
                  color="#64748B"
                />

                <Text style={styles.qrDataTitle}>
                  QR Information
                </Text>
              </View>

              <Text
                style={styles.qrDataText}
                numberOfLines={2}
              >
                {scannedData}
              </Text>
            </View>
          )}
        </ScrollView>

        {/* CONTINUE */}

        <View style={styles.bottomBar}>
          <TouchableOpacity
            activeOpacity={
              amountIsValid ? 0.8 : 1
            }
            style={[
              styles.continueButton,
              !amountIsValid &&
                styles.continueButtonDisabled,
            ]}
            onPress={handleContinue}
          >
            <Text
              style={styles.continueButtonText}
            >
              Continue Securely
            </Text>

            <Ionicons
              name="arrow-forward"
              size={18}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          <View style={styles.bottomSecurity}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={13}
              color="#64748B"
            />

            <Text
              style={styles.bottomSecurityText}
            >
              Secure payment protected by Twin
              Shield
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}