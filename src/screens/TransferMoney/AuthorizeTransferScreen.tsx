import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import {
  router,
  useLocalSearchParams,
} from "expo-router";

import * as LocalAuthentication from "expo-local-authentication";

import styles from "./authorizeStyles";

type AuthState =
  | "ready"
  | "authenticating"
  | "processing";

export default function AuthorizeTransferScreen() {
  const params = useLocalSearchParams<{
    amount?: string;
    beneficiaryName?: string;
    beneficiaryBank?: string;
    beneficiaryAccount?: string;
    note?: string;
    riskScore?: string;
    riskLevel?: string;
  }>();

  const amount = Number(params.amount ?? 0);

  const beneficiaryName =
    params.beneficiaryName ?? "Beneficiary";

  const beneficiaryBank =
    params.beneficiaryBank ?? "Bank";

  const beneficiaryAccount =
    params.beneficiaryAccount ?? "••••";

  const note = params.note ?? "";

  const riskScore =
    params.riskScore ?? "98";

  const riskLevel =
    params.riskLevel ?? "LOW";

  const [authState, setAuthState] =
    useState<AuthState>("ready");

  const [biometricAvailable, setBiometricAvailable] =
    useState(false);

  const [biometricLabel, setBiometricLabel] =
    useState("Biometric");

  useEffect(() => {
    checkBiometricSupport();
  }, []);

  const checkBiometricSupport = async () => {
    try {
      const hasHardware =
        await LocalAuthentication.hasHardwareAsync();

      const isEnrolled =
        await LocalAuthentication.isEnrolledAsync();

      const types =
        await LocalAuthentication.supportedAuthenticationTypesAsync();

      const available =
        hasHardware && isEnrolled;

      setBiometricAvailable(available);

      if (
        types.includes(
          LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
        )
      ) {
        setBiometricLabel("Face Authentication");
      } else if (
        types.includes(
          LocalAuthentication.AuthenticationType.FINGERPRINT
        )
      ) {
        setBiometricLabel("Fingerprint");
      } else if (
        types.includes(
          LocalAuthentication.AuthenticationType.IRIS
        )
      ) {
        setBiometricLabel("Iris Authentication");
      }
    } catch (error) {
      console.log(
        "Biometric availability error:",
        error
      );

      setBiometricAvailable(false);
    }
  };

  const handleBiometricAuth = async () => {
    if (authState !== "ready") {
      return;
    }

    if (!biometricAvailable) {
      Alert.alert(
        "Biometric unavailable",
        "Biometric authentication is not configured on this device. Please use OTP verification."
      );

      return;
    }

    try {
      setAuthState("authenticating");

      const result =
        await LocalAuthentication.authenticateAsync({
          promptMessage:
            "Authorize SecureWealth Transfer",

          cancelLabel: "Cancel",

          fallbackLabel: "Use device passcode",

          disableDeviceFallback: false,
        });

      if (result.success) {
        await processTransfer();
      } else {
        setAuthState("ready");
      }
    } catch (error) {
      console.log(
        "Biometric authentication error:",
        error
      );

      setAuthState("ready");

      Alert.alert(
        "Authentication failed",
        "We couldn't verify your identity. Please try again or use OTP."
      );
    }
  };

  const handleOTP = () => {
  const processTransfer = async () => {
    setAuthState("processing");
    try {
      const transactionData = {
        title: `Transfer to ${beneficiaryName}`,
        category: "Transfer",
        amount: amount,
        type: "expense" as const,
        status: "Completed" as const,
        note: note,
      };
      await transactionService.createTransaction(transactionData);
      router.replace({
        pathname: "/transfer/success",
        params: {
          amount: amount.toString(),
          beneficiaryName,
          beneficiaryBank,
          beneficiaryAccount,
          note,
          riskScore,
        },
      } as any);
    } catch (err: any) {
      console.error("Transaction creation error:", err);
      Alert.alert(
        "Transfer Failed",
        err?.response?.data?.message || err?.message || "Failed to create transaction. Please try again."
      );
      setAuthState("ready");
    }
  };
    /*
      We'll reuse your OTP architecture later.

      For the prototype, this demonstrates the
      fallback authorization path.
    */

    Alert.alert(
      "OTP Authorization",
      "OTP payment authorization will use the registered mobile number.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },

        {
          text: "Continue",
          onPress: () => {
            processTransfer();
          },
        },
      ]
    );
  };

  const processing =
    authState === "processing";

  const authenticating =
    authState === "authenticating";

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
            style={styles.headerButton}
            onPress={() => router.back()}
            disabled={processing}
          >
            <Ionicons
              name="chevron-back"
              size={23}
              color="#0F172A"
            />
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>
              Authorize Transfer
            </Text>

            <Text style={styles.headerSubtitle}>
              Final security step
            </Text>
          </View>

          <View style={styles.secureBadge}>
            <MaterialCommunityIcons
              name="shield-check"
              size={18}
              color="#16A34A"
            />
          </View>
        </View>

        <View style={styles.content}>
          {/* TRANSACTION */}

          <View style={styles.transactionCard}>
            <Text style={styles.sendingLabel}>
              YOU'RE AUTHORIZING
            </Text>

            <Text style={styles.amount}>
              ₹{amount.toLocaleString("en-IN")}
            </Text>

            <Text style={styles.toLabel}>
              to
            </Text>

            <Text style={styles.beneficiaryName}>
              {beneficiaryName}
            </Text>

            <Text style={styles.bank}>
              {beneficiaryBank} •{" "}
              {beneficiaryAccount}
            </Text>
          </View>

          {/* TWIN SHIELD */}

          <View style={styles.shieldCard}>
            <View style={styles.shieldIcon}>
              <MaterialCommunityIcons
                name="shield-check"
                size={23}
                color="#16A34A"
              />
            </View>

            <View style={styles.shieldInfo}>
              <Text style={styles.shieldTitle}>
                Twin Shield Verified
              </Text>

              <Text style={styles.shieldText}>
                Transaction risk analysis completed
              </Text>
            </View>

            <View style={styles.scoreBadge}>
              <Text style={styles.score}>
                {riskScore}/100
              </Text>

              <Text style={styles.risk}>
                {riskLevel}
              </Text>
            </View>
          </View>

          {/* BIOMETRIC */}

          <View style={styles.authSection}>
            <LinearGradient
              colors={["#EEF4FF", "#F8FAFF"]}
              style={styles.biometricCircleOuter}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                disabled={
                  processing ||
                  authenticating
                }
                onPress={handleBiometricAuth}
                style={styles.biometricCircle}
              >
                {authenticating ? (
                  <ActivityIndicator
                    size="large"
                    color="#2563EB"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="fingerprint"
                    size={70}
                    color="#2563EB"
                  />
                )}
              </TouchableOpacity>
            </LinearGradient>

            <Text style={styles.authTitle}>
              {authenticating
                ? "Verifying identity..."
                : "Confirm it's you"}
            </Text>

            <Text style={styles.authDescription}>
              {biometricAvailable
                ? `Use ${biometricLabel} to securely authorize this transfer.`
                : "Biometric authentication is unavailable. You can authorize using OTP."}
            </Text>
          </View>

          {/* BIOMETRIC BUTTON */}

          <TouchableOpacity
            disabled={
              processing ||
              authenticating ||
              !biometricAvailable
            }
            activeOpacity={0.85}
            onPress={handleBiometricAuth}
            style={[
              styles.authorizeButton,

              !biometricAvailable &&
                styles.authorizeButtonDisabled,
            ]}
          >
            {processing ? (
              <>
                <ActivityIndicator
                  size="small"
                  color="#FFFFFF"
                />

                <Text style={styles.authorizeText}>
                  Processing Transfer...
                </Text>
              </>
            ) : (
              <>
                <MaterialCommunityIcons
                  name="fingerprint"
                  size={23}
                  color={
                    biometricAvailable
                      ? "#FFFFFF"
                      : "#94A3B8"
                  }
                />

                <Text
                  style={[
                    styles.authorizeText,

                    !biometricAvailable &&
                      styles.authorizeTextDisabled,
                  ]}
                >
                  Authorize with {biometricLabel}
                </Text>
              </>
            )}
          </TouchableOpacity>

          {/* OTP FALLBACK */}

          {!processing && (
            <>
              <View style={styles.orRow}>
                <View style={styles.line} />

                <Text style={styles.orText}>
                  OR
                </Text>

                <View style={styles.line} />
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleOTP}
                style={styles.otpButton}
              >
                <MaterialCommunityIcons
                  name="message-lock-outline"
                  size={20}
                  color="#2563EB"
                />

                <Text style={styles.otpText}>
                  Authorize with OTP
                </Text>

                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color="#2563EB"
                />
              </TouchableOpacity>
            </>
          )}

          {/* FOOTER */}

          <View style={styles.footer}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={13}
              color="#64748B"
            />

            <Text style={styles.footerText}>
              Your biometric data stays securely on
              your device and is never shared with
              SecureWealth Twin.
            </Text>
          </View>
        </View>

        {/* PROCESSING OVERLAY */}

        {processing && (
          <View style={styles.processingOverlay}>
            <View style={styles.processingCard}>
              <ActivityIndicator
                size="large"
                color="#2563EB"
              />

              <Text style={styles.processingTitle}>
                Processing Transfer
              </Text>

              <Text style={styles.processingText}>
                Please don't close the app while we
                securely process your payment.
              </Text>

              <View style={styles.processingSecurity}>
                <MaterialCommunityIcons
                  name="shield-check"
                  size={16}
                  color="#16A34A"
                />

                <Text style={styles.processingSecurityText}>
                  Protected by Twin Shield
                </Text>
              </View>
            </View>
          </View>
        )}
      </SafeAreaView>
    </>
  );
}