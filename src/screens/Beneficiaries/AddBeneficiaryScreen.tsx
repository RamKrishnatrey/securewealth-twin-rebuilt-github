import React, { useMemo, useState } from "react";
import { useBeneficiaries } from "@/context/BeneficiaryContext";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { router } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./addBeneficiaryStyles";

export default function AddBeneficiaryScreen() {
  const {
  addBeneficiary,
} = useBeneficiaries();
  const [name, setName] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] =
    useState("");
  const [confirmAccountNumber, setConfirmAccountNumber] =
    useState("");
  const [ifsc, setIfsc] = useState("");

  const [verified, setVerified] = useState(false);
  const [isVerifying, setIsVerifying] =
    useState(false);

  /* ========================================
     VALIDATION
  ======================================== */

  const accountMatches =
    accountNumber.length > 0 &&
    accountNumber === confirmAccountNumber;

  const ifscValid = useMemo(() => {
    const cleaned = ifsc
      .trim()
      .toUpperCase();

    return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(
      cleaned
    );
  }, [ifsc]);

  const formValid =
    name.trim().length >= 3 &&
    bankName.trim().length >= 2 &&
    accountNumber.length >= 8 &&
    accountMatches &&
    ifscValid;

  /* ========================================
     ACCOUNT INPUT
  ======================================== */

  const handleAccountChange = (
    value: string
  ) => {
    const cleaned = value.replace(
      /[^0-9]/g,
      ""
    );

    setAccountNumber(cleaned);
    setVerified(false);
  };

  const handleConfirmAccountChange = (
    value: string
  ) => {
    const cleaned = value.replace(
      /[^0-9]/g,
      ""
    );

    setConfirmAccountNumber(cleaned);
    setVerified(false);
  };

  const handleIFSCChange = (
    value: string
  ) => {
    const cleaned = value
      .replace(/[^a-zA-Z0-9]/g, "")
      .toUpperCase();

    setIfsc(cleaned);
    setVerified(false);
  };

  /* ========================================
     VERIFY
  ======================================== */

  const handleVerify = () => {
    if (name.trim().length < 3) {
      Alert.alert(
        "Enter Account Holder",
        "Please enter the beneficiary's full name."
      );
      return;
    }

    if (bankName.trim().length < 2) {
      Alert.alert(
        "Enter Bank",
        "Please enter the beneficiary's bank name."
      );
      return;
    }

    if (accountNumber.length < 8) {
      Alert.alert(
        "Invalid Account Number",
        "Please enter a valid bank account number."
      );
      return;
    }

    if (!accountMatches) {
      Alert.alert(
        "Account Numbers Don't Match",
        "Please make sure both account numbers are identical."
      );
      return;
    }

    if (!ifscValid) {
      Alert.alert(
        "Invalid IFSC",
        "Please enter a valid 11-character IFSC code."
      );
      return;
    }

    setIsVerifying(true);

    /*
      FRONTEND MOCK VERIFICATION

      Backend integration will later replace
      this with the real beneficiary/account
      verification API.
    */

    setTimeout(() => {
      setIsVerifying(false);
      setVerified(true);
    }, 700);
  };

  /* ========================================
     SAVE
  ======================================== */

  const handleSave = () => {
  if (!verified) {
    Alert.alert(
      "Verification Required",
      "Verify the beneficiary details before saving."
    );

    return;
  }

  addBeneficiary({
    name,
    bank: bankName,
    account: accountNumber,
    ifsc,
  });

  Alert.alert(
    "Beneficiary Added",
    `${name.trim()} has been added as a trusted beneficiary.`,
    [
      {
        text: "Done",

        onPress: () =>
          router.replace(
            "/beneficiaries" as any
          ),
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
                size={23}
                color="#0F172A"
              />
            </TouchableOpacity>

            <View style={styles.headerCenter}>
              <Text style={styles.headerTitle}>
                Add Beneficiary
              </Text>

              <Text style={styles.headerSubtitle}>
                Add a trusted recipient
              </Text>
            </View>

            <View style={styles.headerSpacer} />
          </View>

          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={
              styles.content
            }
            showsVerticalScrollIndicator={
              false
            }
            keyboardShouldPersistTaps="handled"
          >
            {/* HERO */}

            <View style={styles.heroCard}>
              <View style={styles.heroIcon}>
                <MaterialCommunityIcons
                  name="account-plus-outline"
                  size={29}
                  color="#2563EB"
                />
              </View>

              <View style={styles.heroContent}>
                <Text style={styles.heroTitle}>
                  New Beneficiary
                </Text>

                <Text style={styles.heroText}>
                  Enter the recipient's bank
                  information. We'll verify the
                  details before saving.
                </Text>
              </View>
            </View>

            {/* SECURITY */}

            <View style={styles.securityStrip}>
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={18}
                color="#16A34A"
              />

              <Text
                style={styles.securityStripText}
              >
                Protected by Twin Shield
              </Text>

              <View style={styles.secureBadge}>
                <Text
                  style={styles.secureBadgeText}
                >
                  SECURE
                </Text>
              </View>
            </View>

            {/* FORM TITLE */}

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                Bank Account Details
              </Text>

              <Text
                style={styles.sectionSubtitle}
              >
                All fields are required
              </Text>
            </View>

            {/* ACCOUNT HOLDER */}

            <Text style={styles.label}>
              ACCOUNT HOLDER NAME
            </Text>

            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="account-outline"
                size={20}
                color="#64748B"
              />

              <TextInput
                value={name}
                onChangeText={(value) => {
                  setName(value);
                  setVerified(false);
                }}
                placeholder="Enter full name"
                placeholderTextColor="#94A3B8"
                style={styles.input}
                autoCapitalize="words"
              />
            </View>

            {/* BANK */}

            <Text style={styles.label}>
              BANK NAME
            </Text>

            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="bank-outline"
                size={20}
                color="#64748B"
              />

              <TextInput
                value={bankName}
                onChangeText={(value) => {
                  setBankName(value);
                  setVerified(false);
                }}
                placeholder="e.g. HDFC Bank"
                placeholderTextColor="#94A3B8"
                style={styles.input}
                autoCapitalize="words"
              />
            </View>

            {/* ACCOUNT NUMBER */}

            <Text style={styles.label}>
              ACCOUNT NUMBER
            </Text>

            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="credit-card-outline"
                size={20}
                color="#64748B"
              />

              <TextInput
                value={accountNumber}
                onChangeText={
                  handleAccountChange
                }
                placeholder="Enter account number"
                placeholderTextColor="#94A3B8"
                style={styles.input}
                keyboardType="number-pad"
                maxLength={18}
              />
            </View>

            {/* CONFIRM */}

            <Text style={styles.label}>
              CONFIRM ACCOUNT NUMBER
            </Text>

            <View
              style={[
                styles.inputContainer,

                confirmAccountNumber.length >
                  0 &&
                  !accountMatches &&
                  styles.inputError,

                accountMatches &&
                  styles.inputSuccess,
              ]}
            >
              <MaterialCommunityIcons
                name={
                  accountMatches
                    ? "check-circle-outline"
                    : "credit-card-check-outline"
                }
                size={20}
                color={
                  accountMatches
                    ? "#16A34A"
                    : "#64748B"
                }
              />

              <TextInput
                value={confirmAccountNumber}
                onChangeText={
                  handleConfirmAccountChange
                }
                placeholder="Re-enter account number"
                placeholderTextColor="#94A3B8"
                style={styles.input}
                keyboardType="number-pad"
                maxLength={18}
              />

              {accountMatches && (
                <Ionicons
                  name="checkmark-circle"
                  size={19}
                  color="#16A34A"
                />
              )}
            </View>

            {confirmAccountNumber.length >
              0 &&
              !accountMatches && (
                <Text style={styles.errorText}>
                  Account numbers do not match
                </Text>
              )}

            {/* IFSC */}

            <Text style={styles.label}>
              IFSC CODE
            </Text>

            <View
              style={[
                styles.inputContainer,
                ifsc.length === 11 &&
                  ifscValid &&
                  styles.inputSuccess,
              ]}
            >
              <MaterialCommunityIcons
                name="bank-check"
                size={20}
                color={
                  ifsc.length === 11 &&
                  ifscValid
                    ? "#16A34A"
                    : "#64748B"
                }
              />

              <TextInput
                value={ifsc}
                onChangeText={
                  handleIFSCChange
                }
                placeholder="e.g. HDFC0001234"
                placeholderTextColor="#94A3B8"
                style={styles.input}
                autoCapitalize="characters"
                maxLength={11}
              />

              {ifsc.length === 11 &&
                ifscValid && (
                  <Ionicons
                    name="checkmark-circle"
                    size={19}
                    color="#16A34A"
                  />
                )}
            </View>

            <Text style={styles.helperText}>
              IFSC is an 11-character code used to
              identify the recipient's bank branch.
            </Text>

            {/* VERIFY */}

            {!verified && (
              <TouchableOpacity
                activeOpacity={
                  formValid ? 0.8 : 1
                }
                style={[
                  styles.verifyButton,
                  !formValid &&
                    styles.disabledButton,
                ]}
                onPress={handleVerify}
              >
                <MaterialCommunityIcons
  name={
    isVerifying
      ? "shield-check-outline"
      : "shield-search"
  }
  size={20}
  color="#FFFFFF"
/>

                <Text
                  style={styles.verifyButtonText}
                >
                  {isVerifying
                    ? "Verifying..."
                    : "Verify Details"}
                </Text>
              </TouchableOpacity>
            )}

            {/* VERIFIED CARD */}

            {verified && (
              <View style={styles.verifiedCard}>
                <View
                  style={styles.verifiedIcon}
                >
                  <MaterialCommunityIcons
                    name="check-decagram"
                    size={27}
                    color="#16A34A"
                  />
                </View>

                <View
                  style={styles.verifiedContent}
                >
                  <Text
                    style={styles.verifiedTitle}
                  >
                    Beneficiary Verified
                  </Text>

                  <Text
                    style={styles.verifiedText}
                  >
                    Account details passed the
                    frontend verification check.
                  </Text>
                </View>

                <View
                  style={styles.verifiedBadge}
                >
                  <Text
                    style={
                      styles.verifiedBadgeText
                    }
                  >
                    VERIFIED
                  </Text>
                </View>
              </View>
            )}

            {/* FRAUD PROTECTION */}

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
                  New beneficiaries will be
                  checked for suspicious account
                  activity before transfers are
                  authorized.
                </Text>
              </View>
            </View>
          </ScrollView>

          {/* BOTTOM */}

          <View style={styles.bottomBar}>
            <TouchableOpacity
              activeOpacity={
                verified ? 0.8 : 1
              }
              style={[
                styles.saveButton,
                !verified &&
                  styles.disabledButton,
              ]}
              onPress={handleSave}
            >
              <Text
                style={styles.saveButtonText}
              >
                Save Beneficiary
              </Text>

              <Ionicons
                name="arrow-forward"
                size={18}
                color="#FFFFFF"
              />
            </TouchableOpacity>

            <View
              style={styles.bottomSecurity}
            >
              <MaterialCommunityIcons
                name="lock-outline"
                size={13}
                color="#64748B"
              />

              <Text
                style={
                  styles.bottomSecurityText
                }
              >
                Beneficiary details are encrypted
                and securely stored
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}