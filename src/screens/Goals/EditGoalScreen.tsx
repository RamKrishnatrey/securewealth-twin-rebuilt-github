import React, { useMemo, useState } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import {
  router,
  useLocalSearchParams,
} from "expo-router";

import styles from "./editGoalStyles";

/* =========================
   HELPERS
========================= */

const cleanNumber = (value: string) =>
  Number(value.replace(/[^0-9]/g, "")) || 0;

const formatCurrency = (amount: number) =>
  `₹${Math.round(amount).toLocaleString("en-IN")}`;

/* =========================
   SCREEN
========================= */

export default function EditGoalScreen() {
  const params = useLocalSearchParams<{
    id?: string;
    title?: string;
    target?: string;
    saved?: string;
    monthly?: string;
    deadline?: string;
  }>();

  /* =========================
     ORIGINAL VALUES
  ========================= */

  const originalTitle =
    typeof params.title === "string"
      ? params.title
      : "Emergency Fund";

  const originalTarget =
    Number(params.target) || 300000;

  const originalSaved =
    Number(params.saved) || 186000;

  const originalMonthly =
    Number(params.monthly) || 12000;

  const originalDeadline =
    typeof params.deadline === "string"
      ? params.deadline
      : "Dec 2026";

  /* =========================
     EDITABLE STATE
  ========================= */

  const [goalName, setGoalName] =
    useState(originalTitle);

  const [targetAmount, setTargetAmount] =
    useState(String(originalTarget));

  const [savedAmount, setSavedAmount] =
    useState(String(originalSaved));

  const [monthlyContribution, setMonthlyContribution] =
    useState(String(originalMonthly));

  const [deadline, setDeadline] =
    useState(originalDeadline);

  /* =========================
     CALCULATIONS
  ========================= */

  const calculation = useMemo(() => {
    const target = cleanNumber(targetAmount);
    const saved = cleanNumber(savedAmount);
    const monthly = cleanNumber(
      monthlyContribution
    );

    const remaining = Math.max(
      target - saved,
      0
    );

    const progress =
      target > 0
        ? Math.min(
            Math.round(
              (saved / target) * 100
            ),
            100
          )
        : 0;

    const monthsRemaining =
      monthly > 0
        ? Math.ceil(
            remaining / monthly
          )
        : 0;

    const originalRemaining =
      Math.max(
        originalTarget -
          originalSaved,
        0
      );

    const originalMonths =
      originalMonthly > 0
        ? Math.ceil(
            originalRemaining /
              originalMonthly
          )
        : 0;

    const monthsDifference =
      originalMonths -
      monthsRemaining;

    return {
      target,
      saved,
      monthly,
      remaining,
      progress,
      monthsRemaining,
      originalMonths,
      monthsDifference,
    };
  }, [
    targetAmount,
    savedAmount,
    monthlyContribution,
    originalTarget,
    originalSaved,
    originalMonthly,
  ]);

  /* =========================
     VALIDATION + SAVE
  ========================= */

  const handleSave = () => {
    if (!goalName.trim()) {
      Alert.alert(
        "Goal name required",
        "Please enter a name for your goal."
      );

      return;
    }

    if (calculation.target <= 0) {
      Alert.alert(
        "Invalid target",
        "Please enter a valid target amount."
      );

      return;
    }

    if (
      calculation.saved >
      calculation.target
    ) {
      Alert.alert(
        "Check saved amount",
        "Saved amount cannot be greater than the target amount."
      );

      return;
    }

    if (calculation.monthly <= 0) {
      Alert.alert(
        "Invalid contribution",
        "Please enter a valid monthly contribution."
      );

      return;
    }

    if (!deadline.trim()) {
      Alert.alert(
        "Target date required",
        "Please enter a target date."
      );

      return;
    }

    /*
      BACKEND INTEGRATION LATER

      This is where we'll call the
      goal update endpoint.

      For now this remains a frontend
      simulation.
    */

    Alert.alert(
      "Goal Updated",
      `${goalName} has been successfully updated.`,
      [
        {
          text: "Done",
          onPress: () => router.back(),
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
        {/* =====================
            HEADER
        ===================== */}

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
              Update Goal
            </Text>

            <Text style={styles.headerSubtitle}>
              Adjust your financial plan
            </Text>
          </View>

          <View
            style={styles.headerPlaceholder}
          />
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={
            styles.content
          }
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* =====================
              INTRO
          ===================== */}

          <View style={styles.intro}>
            <View style={styles.introIcon}>
              <MaterialCommunityIcons
                name="bullseye-arrow"
                size={27}
                color="#2563EB"
              />
            </View>

            <View style={styles.introContent}>
              <Text style={styles.pageTitle}>
                Refine your goal
              </Text>

              <Text style={styles.pageSubtitle}>
                Update your target or contribution
                and Twin will recalculate your plan.
              </Text>
            </View>
          </View>

          {/* =====================
              CURRENT STATUS
          ===================== */}

          <View style={styles.statusCard}>
            <View style={styles.statusTop}>
              <View>
                <Text style={styles.statusLabel}>
                  CURRENT GOAL
                </Text>

                <Text style={styles.statusTitle}>
                  {originalTitle}
                </Text>
              </View>

              <View style={styles.onTrackBadge}>
                <View style={styles.onTrackDot} />

                <Text style={styles.onTrackText}>
                  ON TRACK
                </Text>
              </View>
            </View>

            <View style={styles.statusProgressHeader}>
              <Text style={styles.statusProgressLabel}>
                Current progress
              </Text>

              <Text style={styles.statusProgressValue}>
                {calculation.progress}%
              </Text>
            </View>

            <View style={styles.statusTrack}>
              <View
                style={[
                  styles.statusFill,
                  {
                    width: `${calculation.progress}%`,
                  },
                ]}
              />
            </View>

            <View style={styles.statusAmounts}>
              <View>
                <Text style={styles.amountLabel}>
                  SAVED
                </Text>

                <Text style={styles.amountValue}>
                  {formatCurrency(
                    calculation.saved
                  )}
                </Text>
              </View>

              <View style={styles.amountRight}>
                <Text style={styles.amountLabel}>
                  TARGET
                </Text>

                <Text style={styles.amountValue}>
                  {formatCurrency(
                    calculation.target
                  )}
                </Text>
              </View>
            </View>
          </View>

          {/* =====================
              GOAL INFORMATION
          ===================== */}

          <Text style={styles.sectionTitle}>
            Goal Information
          </Text>

          {/* NAME */}

          <Text style={styles.inputLabel}>
            GOAL NAME
          </Text>

          <View style={styles.inputContainer}>
            <MaterialCommunityIcons
              name="flag-outline"
              size={19}
              color="#64748B"
            />

            <TextInput
              value={goalName}
              onChangeText={setGoalName}
              placeholder="Goal name"
              placeholderTextColor="#94A3B8"
              style={styles.input}
            />
          </View>

          {/* TARGET */}

          <Text style={styles.inputLabel}>
            TARGET AMOUNT
          </Text>

          <View style={styles.amountInputContainer}>
            <Text style={styles.currencySymbol}>
              ₹
            </Text>

            <TextInput
              value={targetAmount}
              onChangeText={setTargetAmount}
              keyboardType="number-pad"
              placeholder="0"
              placeholderTextColor="#94A3B8"
              style={styles.amountInput}
            />

            <Text style={styles.inputPreview}>
              {formatCurrency(
                calculation.target
              )}
            </Text>
          </View>

          {/* SAVED */}

          <Text style={styles.inputLabel}>
            CURRENTLY SAVED
          </Text>

          <View style={styles.amountInputContainer}>
            <Text style={styles.currencySymbol}>
              ₹
            </Text>

            <TextInput
              value={savedAmount}
              onChangeText={setSavedAmount}
              keyboardType="number-pad"
              placeholder="0"
              placeholderTextColor="#94A3B8"
              style={styles.amountInput}
            />

            <Text style={styles.inputPreview}>
              {formatCurrency(
                calculation.saved
              )}
            </Text>
          </View>

          {/* MONTHLY */}

          <Text style={styles.inputLabel}>
            MONTHLY CONTRIBUTION
          </Text>

          <View style={styles.amountInputContainer}>
            <Text style={styles.currencySymbol}>
              ₹
            </Text>

            <TextInput
              value={monthlyContribution}
              onChangeText={
                setMonthlyContribution
              }
              keyboardType="number-pad"
              placeholder="0"
              placeholderTextColor="#94A3B8"
              style={styles.amountInput}
            />

            <Text style={styles.monthSuffix}>
              / month
            </Text>
          </View>

          {/* TARGET DATE */}

          <Text style={styles.inputLabel}>
            TARGET DATE
          </Text>

          <View style={styles.inputContainer}>
            <MaterialCommunityIcons
              name="calendar-month-outline"
              size={19}
              color="#64748B"
            />

            <TextInput
              value={deadline}
              onChangeText={setDeadline}
              placeholder="e.g. Dec 2026"
              placeholderTextColor="#94A3B8"
              style={styles.input}
            />
          </View>

          {/* =====================
              TWIN AI ANALYSIS
          ===================== */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Twin AI Impact
            </Text>

            <View style={styles.liveBadge}>
              <View style={styles.liveDot} />

              <Text style={styles.liveText}>
                LIVE
              </Text>
            </View>
          </View>

          <View style={styles.aiCard}>
            <View style={styles.aiHeader}>
              <View style={styles.aiIcon}>
                <MaterialCommunityIcons
                  name="creation"
                  size={23}
                  color="#7C3AED"
                />
              </View>

              <View style={styles.aiHeaderContent}>
                <Text style={styles.aiTitle}>
                  Updated projection
                </Text>

                <Text style={styles.aiSubtitle}>
                  Recalculated as you edit
                </Text>
              </View>

              <Text style={styles.confidenceTop}>
                94%
              </Text>
            </View>

            {/* CURRENT VS NEW */}

            <View style={styles.comparisonCard}>
              <View style={styles.comparisonItem}>
                <Text
                  style={styles.comparisonLabel}
                >
                  PREVIOUS PLAN
                </Text>

                <Text
                  style={styles.comparisonValue}
                >
                  {calculation.originalMonths}
                </Text>

                <Text
                  style={styles.comparisonSuffix}
                >
                  months
                </Text>
              </View>

              <View style={styles.comparisonArrow}>
                <Ionicons
                  name="arrow-forward"
                  size={18}
                  color="#94A3B8"
                />
              </View>

              <View style={styles.comparisonItem}>
                <Text
                  style={styles.comparisonLabel}
                >
                  UPDATED PLAN
                </Text>

                <Text
                  style={styles.newComparisonValue}
                >
                  {calculation.monthsRemaining}
                </Text>

                <Text
                  style={styles.comparisonSuffix}
                >
                  months
                </Text>
              </View>
            </View>

            {/* AI IMPACT */}

            {calculation.monthsDifference > 0 ? (
              <View style={styles.positiveImpact}>
                <View
                  style={styles.positiveImpactIcon}
                >
                  <Ionicons
                    name="flash"
                    size={18}
                    color="#16A34A"
                  />
                </View>

                <View style={styles.impactContent}>
                  <Text
                    style={styles.positiveTitle}
                  >
                    Faster goal completion
                  </Text>

                  <Text
                    style={
                      styles.positiveDescription
                    }
                  >
                    This plan could help you reach
                    your goal approximately{" "}
                    {calculation.monthsDifference}{" "}
                    month
                    {calculation.monthsDifference !==
                    1
                      ? "s"
                      : ""}{" "}
                    earlier.
                  </Text>
                </View>
              </View>
            ) : calculation.monthsDifference < 0 ? (
              <View style={styles.warningImpact}>
                <View
                  style={styles.warningImpactIcon}
                >
                  <Ionicons
                    name="time-outline"
                    size={18}
                    color="#D97706"
                  />
                </View>

                <View style={styles.impactContent}>
                  <Text
                    style={styles.warningTitle}
                  >
                    Longer completion time
                  </Text>

                  <Text
                    style={
                      styles.warningDescription
                    }
                  >
                    Your updated plan may take{" "}
                    {Math.abs(
                      calculation.monthsDifference
                    )}{" "}
                    additional month
                    {Math.abs(
                      calculation.monthsDifference
                    ) !== 1
                      ? "s"
                      : ""}{" "}
                    to complete.
                  </Text>
                </View>
              </View>
            ) : (
              <View style={styles.neutralImpact}>
                <MaterialCommunityIcons
                  name="check-circle-outline"
                  size={18}
                  color="#2563EB"
                />

                <Text
                  style={styles.neutralText}
                >
                  Your estimated completion time
                  remains unchanged.
                </Text>
              </View>
            )}

            {/* PLAN STATS */}

            <View style={styles.aiStats}>
              <View style={styles.aiStat}>
                <Text style={styles.aiStatLabel}>
                  REMAINING
                </Text>

                <Text style={styles.aiStatValue}>
                  {formatCurrency(
                    calculation.remaining
                  )}
                </Text>
              </View>

              <View style={styles.aiDivider} />

              <View style={styles.aiStat}>
                <Text style={styles.aiStatLabel}>
                  MONTHLY
                </Text>

                <Text style={styles.aiStatValue}>
                  {formatCurrency(
                    calculation.monthly
                  )}
                </Text>
              </View>

              <View style={styles.aiDivider} />

              <View style={styles.aiStat}>
                <Text style={styles.aiStatLabel}>
                  PROGRESS
                </Text>

                <Text style={styles.aiStatValue}>
                  {calculation.progress}%
                </Text>
              </View>
            </View>

            {/* CONFIDENCE */}

            <View style={styles.confidenceHeader}>
              <Text
                style={styles.confidenceLabel}
              >
                Twin Confidence
              </Text>

              <Text
                style={styles.confidenceValue}
              >
                94%
              </Text>
            </View>

            <View style={styles.confidenceTrack}>
              <View
                style={styles.confidenceFill}
              />
            </View>
          </View>

          {/* =====================
              SAFETY MESSAGE
          ===================== */}

          <View style={styles.safetyCard}>
            <View style={styles.safetyIcon}>
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={21}
                color="#16A34A"
              />
            </View>

            <View style={styles.safetyContent}>
              <Text style={styles.safetyTitle}>
                Financial safety check
              </Text>

              <Text
                style={styles.safetyDescription}
              >
                Twin evaluates goal changes against
                your savings and spending behaviour
                before recommending adjustments.
              </Text>
            </View>

            <Ionicons
              name="checkmark-circle"
              size={20}
              color="#22C55E"
            />
          </View>

          {/* =====================
              SAVE
          ===================== */}

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.saveButton}
            onPress={handleSave}
          >
            <View>
              <Text style={styles.saveButtonTitle}>
                Save Changes
              </Text>

              <Text
                style={styles.saveButtonSubtitle}
              >
                Update your financial plan
              </Text>
            </View>

            <View style={styles.saveArrow}>
              <Ionicons
                name="checkmark"
                size={19}
                color="#2563EB"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.cancelButton}
            onPress={() => router.back()}
          >
            <Text style={styles.cancelText}>
              Cancel
            </Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <MaterialCommunityIcons
              name="creation"
              size={12}
              color="#94A3B8"
            />

            <Text style={styles.footerText}>
              Goal optimization powered by Twin AI
            </Text>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}