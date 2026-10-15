import React, { useMemo, useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

import { router } from "expo-router";
import {
  useBeneficiaries,
} from "@/context/BeneficiaryContext";

import { authService } from "@/services/authService";
import { verificationService } from "@/services/verificationService";

import styles from "./styles";

const quickAmounts = [
  500,
  1000,
  2500,
  5000,
];

export default function TransferMoneyScreen() {
  const {
    beneficiaries,
    selectedBeneficiary,
    selectBeneficiary,
  } = useBeneficiaries();

  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [currency, setCurrency] = useState("INR"); // INR, USD, EUR, GBP
  const [convertedAmountInr, setConvertedAmountInr] = useState(0);
  const [conversionRate, setConversionRate] = useState(1);
  const [loadingConversion, setLoadingConversion] = useState(false);
  const [conversionError, setConversionError] = useState<string | null>(null);

  const [profile, setProfile] = useState<{ email: string | null; phone_number: string | null; uid: string } | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [profileError, setProfileError] = useState<string | null>(null);

  const [emailVerification, setEmailVerification] = useState<{ verified: boolean; checking: boolean } | null>(null);
  const [phoneVerification, setPhoneVerification] = useState<{ verified: boolean; checking: boolean } | null>(null);

  const numericAmount =
    Number(amount || 0);

  const canContinue = useMemo(() => {
    return (
      numericAmount > 0 &&
      selectedBeneficiary !== null
    );
  }, [
    numericAmount,
    selectedBeneficiary,
  ]);

  const handleAmountChange = (value: string) => {
    const cleaned = value.replace(/[^0-9]/g, "");
    setAmount(cleaned);
  };

  const handleCurrencyChange = (selectedCurrency: string) => {
    setCurrency(selectedCurrency);
    // Trigger conversion
    convertAmountToInr();
  };

  const convertAmountToInr = async () => {
    if (numericAmount === 0 || currency === "INR") {
      setConvertedAmountInr(numericAmount);
      setConversionRate(1);
      setConversionError(null);
      return;
    }

    setLoadingConversion(true);
    setConversionError(null);
    try {
      const conversionResponse = await verificationService.convertAmount(
        numericAmount,
        currency,
        "INR"
      );
      setConvertedAmountInr(conversionResponse.converted_amount);
      setConversionRate(conversionResponse.converted_amount / numericAmount);
    } catch (err: any) {
      setConversionError(err?.message ?? "Failed to convert currency");
      setConvertedAmountInr(0);
      setConversionRate(0);
    } finally {
      setLoadingConversion(false);
    }
  };

  useEffect(() => {
    // Fetch user profile
    const fetchProfile = async () => {
      setLoadingProfile(true);
      setProfileError(null);
      try {
        const profileData = await authService.getProfile();
        setProfile(profileData);
      } catch (err: any) {
        setProfileError(err?.message ?? "Failed to fetch profile");
        setProfile(null);
      } finally {
        setLoadingProfile(false);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    // Verify email if we have profile
    if (profile?.email) {
      const verifyEmail = async () => {
        setEmailVerification(prev => ({ ...(prev ?? {}), checking: true }));
        try {
          const emailResult = await verificationService.verifyEmail(profile.email);
          setEmailVerification({ verified: emailResult.deliverable, checking: false });
        } catch (err: any) {
          setEmailVerification({ verified: false, checking: false });
          console.error("Email verification failed:", err);
        }
      };
      verifyEmail();
    }
  }, [profile]);

  useEffect(() => {
    // Verify phone if we have profile
    if (profile?.phone_number) {
      const verifyPhone = async () => {
        setPhoneVerification(prev => ({ ...(prev ?? {}), checking: true }));
        try {
          const phoneResult = await verificationService.verifyPhone(profile.phone_number);
          setPhoneVerification({ verified: phoneResult.valid, checking: false });
        } catch (err: any) {
          setPhoneVerification({ verified: false, checking: false });
          console.error("Phone verification failed:", err);
        }
      };
      verifyPhone();
    }
  }, [profile]);

  useEffect(() => {
    // Re-run conversion when amount or currency changes
    if (amount !== "") {
      convertAmountToInr();
    }
  }, [amount, currency]);

  const handleContinue = () => {
    if (!canContinue || !selectedBeneficiary) {
      return;
    }

    // Use the converted INR amount for the transfer
    const transferAmountInr = convertedAmountInr;

    router.push({
      pathname: "/transfer/review",
      params: {
        amount: transferAmountInr.toString(),
        beneficiaryName: selectedBeneficiary.name,
        beneficiaryBank: selectedBeneficiary.bank,
        beneficiaryAccount: selectedBeneficiary.account,
        beneficiaryId: selectedBeneficiary.id,
        note: note,
        // Also send the original currency and amount for display in the review screen if needed
        originalAmount: amount,
        originalCurrency: currency,
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
        <KeyboardAvoidingView
          style={styles.container}
          behavior={
            Platform.OS === "ios" ? "padding" : undefined
          }
        >
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* =========================================
                            HEADER
            ========================================= */}

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
                  Transfer Money
                </Text>

                <Text style={styles.headerSubtitle}>
                  Secure payment
                </Text>
              </View>

              <TouchableOpacity style={styles.headerButton}>
                <MaterialCommunityIcons
                  name="shield-check-outline"
                  size={22}
                  color="#16A34A"
                />
              </TouchableOpacity>
            </View>

            {/* =========================================
                        SECURITY INDICATOR
            ========================================= */}

            <View style={styles.securityStrip}>
              <View style={styles.securityIcon}>
                <MaterialCommunityIcons
                  name="shield-check"
                  size={19}
                  color="#16A34A"
                />
              </View>

              <View style={styles.securityContent}>
                <Text style={styles.securityTitle}>
                  Twin Shield Active
                </Text>

                <Text style={styles.securitySubtitle}>
                  This transfer will be verified by AI
                  before payment.
                </Text>
              </View>

              <View style={styles.activeDot} />
            </View>

            {/* =========================================
                        SOURCE ACCOUNT
            ========================================= */}

            <Text style={styles.sectionLabel}>
              PAY FROM
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.accountCard}
            >
              <View style={styles.bankIcon}>
                <MaterialCommunityIcons
                  name="bank-outline"
                  size={24}
                  color="#2563EB"
                />
              </View>

              <View style={styles.accountInfo}>
                <Text style={styles.accountName}>
                  SecureWealth Account
                </Text>

                <Text style={styles.accountNumber}>
                  Savings •••• 8294
                </Text>
              </View>

              <View style={styles.accountBalanceContainer}>
                <Text style={styles.balanceLabel}>
                  AVAILABLE
                </Text>

                <Text style={styles.accountBalance}>
                  ₹2,84,500
                </Text>
              </View>

              <Ionicons
                name="chevron-down"
                size={18}
                color="#64748B"
                style={styles.accountChevron}
              />
            </TouchableOpacity>

            {/* =========================================
                           AMOUNT
            ========================================= */}

            <Text style={styles.sectionLabel}>
              ENTER AMOUNT
            </Text>

            <LinearGradient
              colors={["#EEF4FF", "#F8FAFF"]}
              style={styles.amountCard}
            >
              <Text style={styles.amountHelper}>
                How much would you like to send?
              </Text>

              <View style={styles.amountInputRow}>
                <Text style={styles.currencySymbol}>
                  ₹
                </Text>

                <TextInput
                  value={amount}
                  onChangeText={handleAmountChange}
                  placeholder="0"
                  placeholderTextColor="#94A3B8"
                  keyboardType="number-pad"
                  maxLength={8}
                  style={styles.amountInput}
                />
              </View>

              <Text style={styles.availableBalance}>
                Available balance ₹2,84,500
              </Text>

              <View style={styles.quickAmountRow}>
                {quickAmounts.map((value) => {
                  const active =
                    numericAmount === value;

                  return (
                    <TouchableOpacity
                      key={value}
                      onPress={() =>
                        setAmount(value.toString())
                      }
                      style={[
                        styles.quickAmountButton,
                        active &&
                          styles.quickAmountButtonActive,
                      ]}
                    >
                      <Text
                        style={[
                          styles.quickAmountText,
                          active &&
                            styles.quickAmountTextActive,
                        ]}
                      >
                        +₹{value.toLocaleString("en-IN")}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              {/* Currency Selector */}
              {currency !== "INR" && (
                <View style={styles.currencySelectorContainer}>
                  <Text style={styles.currencySelectorLabel}>
                    Currency:
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      styles.currencySelectorButton,
                      currency === "USD" && styles.currencySelectorButtonActive,
                      currency === "EUR" && styles.currencySelectorButtonActive,
                      currency === "GBP" && styles.currencySelectorButtonActive,
                    ]}
                    onPress={() => handleCurrencyChange("USD")}
                  >
                    <Text style={styles.currencySelectorText}>USD</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      styles.currencySelectorButton,
                      currency === "USD" && styles.currencySelectorButtonActive,
                      currency === "EUR" && styles.currencySelectorButtonActive,
                      currency === "GBP" && styles.currencySelectorButtonActive,
                    ]}
                    onPress={() => handleCurrencyChange("EUR")}
                  >
                    <Text style={styles.currencySelectorText}>EUR</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      styles.currencySelectorButton,
                      currency === "USD" && styles.currencySelectorButtonActive,
                      currency === "EUR" && styles.currencySelectorButtonActive,
                      currency === "GBP" && styles.currencySelectorButtonActive,
                    ]}
                    onPress={() => handleCurrencyChange("GBP")}
                  >
                    <Text style={styles.currencySelectorText}>GBP</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      styles.currencySelectorButton,
                      currency === "INR" && styles.currencySelectorButtonActive,
                    ]}
                    onPress={() => handleCurrencyChange("INR")}
                  >
                    <Text style={styles.currencySelectorText}>INR</Text>
                  </TouchableOpacity>
                </View>
              )}

              {/* Conversion Info */}
              {currency !== "INR" && conversionRate > 0 && (
                <View style={styles.conversionInfoContainer}>
                  <Text style={styles.conversionInfoText}>
                    {amount} {currency} = ₹{convertedAmountInr.toLocaleString("en-IN")}
                    {loadingConversion && (
                      <Text style={styles.conversionInfoLoadingText}> (calculating...)</Text>
                    )}
                    {!loadingConversion && conversionError && (
                      <Text style={styles.conversionInfoErrorText}> ({conversionError})</Text>
                    )}
                  </Text>
                </View>
              )}
            </LinearGradient>

            {/* =========================================
                        BENEFICIARY
            ========================================= */}

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionLabelNoMargin}>
                SEND TO
              </Text>

              <TouchableOpacity
        activeOpacity={0.75}
        style={styles.addBeneficiaryButton}
        onPress={() =>
          router.push("/beneficiaries" as any)
        }
      >
                <Ionicons
                  name="add"
                  size={16}
                  color="#2563EB"
                />

                <Text style={styles.addBeneficiaryText}>
                  Add New
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={
                styles.beneficiaryContainer
              }
            >
              {beneficiaries.map((beneficiary) => {
                const selected =
                  selectedBeneficiary?.id ===
                  beneficiary.id;

                return (
                  <TouchableOpacity
                    key={beneficiary.id}
                    activeOpacity={0.8}
                    onPress={() =>
          selectBeneficiary(
            beneficiary
          )
        }
                    style={[
                      styles.beneficiaryCard,
                      selected &&
                        styles.beneficiaryCardSelected,
                    ]}
                  >
                    {selected && (
                      <View style={styles.selectedCheck}>
                        <Ionicons
                          name="checkmark"
                          size={12}
                          color="#FFFFFF"
                        />
                      </View>
                    )}

                    <View
                      style={[
                        styles.avatar,
                        {
                          backgroundColor:
                            beneficiary.color,
                        },
                      ]}
                    >
                      <Text style={styles.avatarText}>
                        {beneficiary.initials}
                      </Text>
                    </View>

                    <Text
                      numberOfLines={1}
                      style={styles.beneficiaryName}
                    >
                      {beneficiary.name}
                    </Text>

                    <Text style={styles.beneficiaryBank}>
                      {beneficiary.bank}
                    </Text>

                    <Text
                      style={styles.beneficiaryAccount}
                    >
                      {beneficiary.account}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            {/* =========================================
                            NOTE
            ========================================= */}

            <Text style={styles.sectionLabel}>
              PAYMENT NOTE
            </Text>

            <View style={styles.noteContainer}>
              <MaterialCommunityIcons
                name="message-text-outline"
                size={21}
                color="#64748B"
              />

              <TextInput
                value={note}
                onChangeText={setNote}
                placeholder="Add a note (optional)"
                placeholderTextColor="#94A3B8"
                maxLength={80}
                style={styles.noteInput}
              />

              <Text style={styles.noteCounter}>
                {note.length}/80
                {profileError && (
                  <Text style={styles.noteCounterError}> ({profileError})</Text>
                )}
              </Text>
            </View>

            {/* =========================================
                       TRANSFER SUMMARY
            ========================================= */}

            {canContinue && selectedBeneficiary && (
              <View style={styles.previewCard}>
                <View style={styles.previewHeader}>
                  <MaterialCommunityIcons
                    name="lightning-bolt"
                    size={18}
                    color="#2563EB"
                  />

                  <Text style={styles.previewTitle}>
                    Transfer Preview
                  </Text>
                </View>

                <View style={styles.previewRow}>
                  <Text style={styles.previewLabel}>
                    Recipient
                  </Text>

                  <Text style={styles.previewValue}>
                    {selectedBeneficiary.name}
                  </Text>
                </View>

                <View style={styles.previewRow}>
                  <Text style={styles.previewLabel}>
                    Amount
                  </Text>

                  <Text style={styles.previewAmount}>
                    ₹
                    {convertedAmountInr.toLocaleString(
                      "en-IN"
                    )}
                  </Text>
                </View>

                <View style={styles.previewRow}>
                  <Text style={styles.previewLabel}>
                    Original Amount
                  </Text>

                  <Text style={styles.previewAmount}>
                    {amount} {currency}
                  </Text>
                </View>

                <View style={styles.previewRow}>
                  <Text style={styles.previewLabel}>
                    Transfer Fee
                  </Text>

                  <Text style={styles.freeText}>
                    FREE
                  </Text>
                </View>
              </View>
            )}

            {/* =========================================
                          PROFILE & VERIFICATION
            ========================================= */}

            {!loadingProfile && profile && (
              <View style={styles.profileCard}>
                <View style={styles.profileHeader}>
                  <MaterialCommunityIcons
                    name="account-circle-outline"
                    size={18}
                    color="#2563EB"
                  />

                  <Text style={styles.profileTitle}>
                    Your Profile
                  </Text>
                </View>

                <View style={styles.profileRow}>
                  <Text style={styles.profileLabel}>
                    Email
                  </Text>

                  <Text style={styles.profileValue}>
                    {profile.email || "Not available"}
                  </Text>
                </View>

                <View style={styles.profileRow}>
                  <Text style={styles.profileLabel}>
                    Phone
                  </Text>

                  <Text style={styles.profileValue}>
                    {profile.phone_number || "Not available"}
                  </Text>
                </View>

                {/* Email Verification Status */}
                {emailVerification && (
                  <View style={styles.verificationRow}>
                    <Text style={styles.verificationLabel}>
                      Email Verified:
                    </Text>
                    <Text
                      style={[
                        styles.verificationValue,
                        emailVerification.verified && styles.verificationValueVerified,
                        !emailVerification.verified && styles.verificationValueNotVerified,
                      ]}
                    >
                      {emailVerification.checking ? "Checking..." : (emailVerification.verified ? "Yes" : "No")}
                    </Text>
                    {!emailVerification.verified && !emailVerification.checking && (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.verificationActionButton}
                        onPress={() => {
                          // Re-verification
                          setEmailVerification(prev => ({ ...(prev ?? {}), checking: true }));
                          verificationService.verifyEmail(profile.email ?? "").then(result => {
                            setEmailVerification({ verified: result.deliverable, checking: false });
                          });
                        }}
                      >
                        <Text style={styles.verificationActionText}>Re-check</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                )}

                {/* Phone Verification Status */}
                {phoneVerification && (
                  <View style={styles.verificationRow}>
                    <Text style={styles.verificationLabel}>
                      Phone Verified:
                    </Text>
                    <Text
                      style={[
                        styles.verificationValue,
                        phoneVerification.verified && styles.verificationValueVerified,
                        !phoneVerification.verified && styles.verificationValueNotVerified,
                      ]}
                    >
                      {phoneVerification.checking ? "Checking..." : (phoneVerification.verified ? "Yes" : "No")}
                    </Text>
                    {!phoneVerification.verified && !phoneVerification.checking && (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.verificationActionButton}
                        onPress={() => {
                          // Re-verification
                          setPhoneVerification(prev => ({ ...(prev ?? {}), checking: true }));
                          verificationService.verifyPhone(profile.phone_number ?? "").then(result => {
                            setPhoneVerification({ verified: result.valid, checking: false });
                          });
                        }}
                      >
                        <Text style={styles.verificationActionText}>Re-check</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                )}
              </View>
            )}

            {/* =========================================
                          CONTINUE
            ========================================= */}

            <TouchableOpacity
              disabled={!canContinue}
              activeOpacity={0.85}
              onPress={handleContinue}
              style={[
                styles.continueButton,
                !canContinue &&
                  styles.continueButtonDisabled,
              ]}
            >
              <Text
                style={[
                  styles.continueText,
                  !canContinue &&
                    styles.continueTextDisabled,
                ]}
              >
                Continue Securely
              </Text>

              <Ionicons
                name="arrow-forward"
                size={20}
                color={
                  canContinue
                    ? "#FFFFFF"
                    : "#94A3B8"
                }
              />
            </TouchableOpacity>

            <View style={styles.footerSecurity}>
              <MaterialCommunityIcons
                name="lock-outline"
                size={14}
                color="#64748B"
              />

              <Text style={styles.footerSecurityText}>
                End-to-end encrypted • Protected by
                Twin Shield
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}