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

import styles from "./budgetFormStyles";

/* =========================
   TYPES
========================= */

type MaterialIconName = React.ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

type BudgetCategoryOption = {
  id: string;
  title: string;
  icon: MaterialIconName;
};

/* =========================
   CATEGORY OPTIONS
========================= */

const categoryOptions: BudgetCategoryOption[] = [
  {
    id: "food",
    title: "Food & Dining",
    icon: "silverware-fork-knife",
  },
  {
    id: "shopping",
    title: "Shopping",
    icon: "shopping-outline",
  },
  {
    id: "transport",
    title: "Transport",
    icon: "car-outline",
  },
  {
    id: "bills",
    title: "Bills & Utilities",
    icon: "receipt-text-outline",
  },
  {
    id: "entertainment",
    title: "Entertainment",
    icon: "movie-open-outline",
  },
  {
    id: "health",
    title: "Health",
    icon: "heart-pulse",
  },
];

/* =========================
   HELPERS
========================= */

const cleanNumber = (value: string) =>
  Number(value.replace(/[^0-9]/g, "")) || 0;

const formatCurrency = (amount: number) =>
  `₹${Math.round(amount).toLocaleString("en-IN")}`;

/* =========================
   PROPS
========================= */

type BudgetFormScreenProps = {
  mode: "create" | "edit";
};

/* =========================
   SCREEN
========================= */

export default function BudgetFormScreen({
  mode,
}: BudgetFormScreenProps) {
  const params = useLocalSearchParams<{
    id?: string;
    title?: string;
    spent?: string;
    limit?: string;
  }>();

  const isEdit = mode === "edit";

  const initialCategoryId =
    typeof params.id === "string"
      ? params.id
      : "food";

  const initialTitle =
    typeof params.title === "string"
      ? params.title
      : "Food & Dining";

  const initialSpent =
    Number(params.spent) || 0;

  const initialLimit =
    Number(params.limit) ||
    (isEdit ? 12000 : 10000);

  /* =========================
     STATE
  ========================= */

  const [selectedCategory, setSelectedCategory] =
    useState(initialCategoryId);

  const [selectedTitle, setSelectedTitle] =
    useState(initialTitle);

  const [budgetLimit, setBudgetLimit] =
    useState(String(initialLimit));

  const [warningThreshold, setWarningThreshold] =
    useState(80);

  const [showCategories, setShowCategories] =
    useState(false);

  /* =========================
     CALCULATIONS
  ========================= */

  const calculations = useMemo(() => {
    const limit = cleanNumber(budgetLimit);

    const warningAmount = Math.round(
      limit * (warningThreshold / 100)
    );

    const remaining = Math.max(
      limit - initialSpent,
      0
    );

    const usage =
      limit > 0
        ? Math.min(
            Math.round(
              (initialSpent / limit) * 100
            ),
            100
          )
        : 0;

    const monthlyDifference =
      limit - initialLimit;

    return {
      limit,
      warningAmount,
      remaining,
      usage,
      monthlyDifference,
    };
  }, [
    budgetLimit,
    warningThreshold,
    initialSpent,
    initialLimit,
  ]);

  /* =========================
     CATEGORY SELECT
  ========================= */

  const handleCategorySelect = (
    category: BudgetCategoryOption
  ) => {
    setSelectedCategory(category.id);
    setSelectedTitle(category.title);
    setShowCategories(false);
  };

  /* =========================
     SAVE
  ========================= */

  const handleSave = () => {
    if (calculations.limit <= 0) {
      Alert.alert(
        "Invalid Budget",
        "Please enter a valid monthly budget limit."
      );

      return;
    }

    if (
      isEdit &&
      calculations.limit < initialSpent
    ) {
      Alert.alert(
        "Budget Below Spending",
        `You've already spent ${formatCurrency(
          initialSpent
        )}. Please set a budget of at least ${formatCurrency(
          initialSpent
        )}.`
      );

      return;
    }

    /*
      BACKEND INTEGRATION LATER

      CREATE:
      POST budget endpoint

      EDIT:
      PUT/PATCH budget endpoint

      For now this is frontend-only.
    */

    Alert.alert(
      isEdit
        ? "Budget Updated"
        : "Budget Created",
      isEdit
        ? `${selectedTitle} budget has been updated successfully.`
        : `${selectedTitle} budget has been created successfully.`,
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
              {isEdit
                ? "Edit Budget"
                : "Create Budget"}
            </Text>

            <Text style={styles.headerSubtitle}>
              {isEdit
                ? "Adjust your spending plan"
                : "Build a smarter spending plan"}
            </Text>
          </View>

          <View style={styles.headerPlaceholder} />
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* INTRO */}

          <View style={styles.intro}>
            <View style={styles.introIcon}>
              <MaterialCommunityIcons
                name={
                  isEdit
                    ? "pencil-outline"
                    : "wallet-plus-outline"
                }
                size={27}
                color="#2563EB"
              />
            </View>

            <View style={styles.introContent}>
              <Text style={styles.pageTitle}>
                {isEdit
                  ? "Refine your budget"
                  : "Set your spending limit"}
              </Text>

              <Text style={styles.pageSubtitle}>
                {isEdit
                  ? "Adjust the monthly limit and Twin will recalculate your spending plan."
                  : "Choose a category and Twin will help you stay within your monthly limit."}
              </Text>
            </View>
          </View>

          {/* EDIT STATUS */}

          {isEdit && (
            <View style={styles.currentCard}>
              <View style={styles.currentHeader}>
                <View>
                  <Text style={styles.currentLabel}>
                    CURRENT BUDGET
                  </Text>

                  <Text style={styles.currentTitle}>
                    {selectedTitle}
                  </Text>
                </View>

                <View style={styles.activeBadge}>
                  <View style={styles.activeDot} />

                  <Text style={styles.activeText}>
                    ACTIVE
                  </Text>
                </View>
              </View>

              <View style={styles.currentStats}>
                <View style={styles.currentStat}>
                  <Text style={styles.currentStatLabel}>
                    SPENT
                  </Text>

                  <Text style={styles.currentStatValue}>
                    {formatCurrency(initialSpent)}
                  </Text>
                </View>

                <View style={styles.currentDivider} />

                <View style={styles.currentStat}>
                  <Text style={styles.currentStatLabel}>
                    LIMIT
                  </Text>

                  <Text style={styles.currentStatValue}>
                    {formatCurrency(
                      calculations.limit
                    )}
                  </Text>
                </View>

                <View style={styles.currentDivider} />

                <View style={styles.currentStat}>
                  <Text style={styles.currentStatLabel}>
                    USED
                  </Text>

                  <Text style={styles.currentStatValue}>
                    {calculations.usage}%
                  </Text>
                </View>
              </View>

              <View style={styles.currentTrack}>
                <View
                  style={[
                    styles.currentFill,
                    {
                      width: `${calculations.usage}%`,
                    },
                  ]}
                />
              </View>
            </View>
          )}

          {/* CATEGORY */}

          <Text style={styles.sectionTitle}>
            Budget Details
          </Text>

          <Text style={styles.inputLabel}>
            CATEGORY
          </Text>

          <TouchableOpacity
            activeOpacity={isEdit ? 1 : 0.75}
            style={[
              styles.selector,
              isEdit && styles.disabledSelector,
            ]}
            onPress={() => {
              if (!isEdit) {
                setShowCategories(
                  !showCategories
                );
              }
            }}
          >
            <View style={styles.selectorIcon}>
              <MaterialCommunityIcons
                name={
                  categoryOptions.find(
                    (item) =>
                      item.id === selectedCategory
                  )?.icon ?? "wallet-outline"
                }
                size={20}
                color="#2563EB"
              />
            </View>

            <View style={styles.selectorContent}>
              <Text style={styles.selectorLabel}>
                SELECTED CATEGORY
              </Text>

              <Text style={styles.selectorValue}>
                {selectedTitle}
              </Text>
            </View>

            {!isEdit && (
              <Ionicons
                name={
                  showCategories
                    ? "chevron-up"
                    : "chevron-down"
                }
                size={18}
                color="#64748B"
              />
            )}

            {isEdit && (
              <MaterialCommunityIcons
                name="lock-outline"
                size={17}
                color="#94A3B8"
              />
            )}
          </TouchableOpacity>

          {/* CATEGORY DROPDOWN */}

          {!isEdit && showCategories && (
            <View style={styles.categoryMenu}>
              {categoryOptions.map(
                (category, index) => {
                  const selected =
                    selectedCategory ===
                    category.id;

                  return (
                    <TouchableOpacity
                      key={category.id}
                      activeOpacity={0.72}
                      style={[
                        styles.categoryOption,
                        index === 0 &&
                          styles.categoryOptionFirst,
                      ]}
                      onPress={() =>
                        handleCategorySelect(
                          category
                        )
                      }
                    >
                      <View
                        style={[
                          styles.categoryOptionIcon,
                          selected &&
                            styles.categoryOptionIconSelected,
                        ]}
                      >
                        <MaterialCommunityIcons
                          name={category.icon}
                          size={19}
                          color={
                            selected
                              ? "#2563EB"
                              : "#64748B"
                          }
                        />
                      </View>

                      <Text
                        style={[
                          styles.categoryOptionText,
                          selected &&
                            styles.categoryOptionTextSelected,
                        ]}
                      >
                        {category.title}
                      </Text>

                      {selected && (
                        <Ionicons
                          name="checkmark-circle"
                          size={19}
                          color="#2563EB"
                        />
                      )}
                    </TouchableOpacity>
                  );
                }
              )}
            </View>
          )}

          {/* LIMIT */}

          <Text style={styles.inputLabel}>
            MONTHLY LIMIT
          </Text>

          <View style={styles.amountInputContainer}>
            <Text style={styles.currencySymbol}>
              ₹
            </Text>

            <TextInput
              value={budgetLimit}
              onChangeText={setBudgetLimit}
              keyboardType="number-pad"
              placeholder="Enter budget"
              placeholderTextColor="#94A3B8"
              style={styles.amountInput}
            />

            <Text style={styles.amountPreview}>
              {formatCurrency(
                calculations.limit
              )}
            </Text>
          </View>

          {/* QUICK LIMITS */}

          <View style={styles.quickAmounts}>
            {[5000, 10000, 15000, 20000].map(
              (amount) => {
                const selected =
                  calculations.limit === amount;

                return (
                  <TouchableOpacity
                    key={amount}
                    activeOpacity={0.75}
                    style={[
                      styles.quickAmount,
                      selected &&
                        styles.quickAmountSelected,
                    ]}
                    onPress={() =>
                      setBudgetLimit(
                        String(amount)
                      )
                    }
                  >
                    <Text
                      style={[
                        styles.quickAmountText,
                        selected &&
                          styles.quickAmountTextSelected,
                      ]}
                    >
                      ₹
                      {amount >= 1000
                        ? `${amount / 1000}K`
                        : amount}
                    </Text>
                  </TouchableOpacity>
                );
              }
            )}
          </View>

          {/* WARNING THRESHOLD */}

          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>
                Spending Alert
              </Text>

              <Text style={styles.sectionSubtitle}>
                Choose when Twin should warn you
              </Text>
            </View>

            <View style={styles.thresholdBadge}>
              <Text style={styles.thresholdBadgeText}>
                {warningThreshold}%
              </Text>
            </View>
          </View>

          <View style={styles.thresholdCard}>
            <View style={styles.thresholdTop}>
              <View style={styles.thresholdIcon}>
                <MaterialCommunityIcons
                  name="bell-ring-outline"
                  size={21}
                  color="#D97706"
                />
              </View>

              <View style={styles.thresholdContent}>
                <Text style={styles.thresholdTitle}>
                  Alert Threshold
                </Text>

                <Text
                  style={styles.thresholdSubtitle}
                >
                  Notify me after this much of the
                  budget has been used
                </Text>
              </View>
            </View>

            <View style={styles.thresholdOptions}>
              {[70, 80, 90].map(
                (threshold) => {
                  const selected =
                    warningThreshold ===
                    threshold;

                  return (
                    <TouchableOpacity
                      key={threshold}
                      activeOpacity={0.75}
                      style={[
                        styles.thresholdOption,
                        selected &&
                          styles.thresholdOptionSelected,
                      ]}
                      onPress={() =>
                        setWarningThreshold(
                          threshold
                        )
                      }
                    >
                      <Text
                        style={[
                          styles.thresholdOptionValue,
                          selected &&
                            styles.thresholdOptionValueSelected,
                        ]}
                      >
                        {threshold}%
                      </Text>

                      <Text
                        style={[
                          styles.thresholdOptionLabel,
                          selected &&
                            styles.thresholdOptionLabelSelected,
                        ]}
                      >
                        {threshold === 70
                          ? "Early"
                          : threshold === 80
                          ? "Balanced"
                          : "Late"}
                      </Text>
                    </TouchableOpacity>
                  );
                }
              )}
            </View>

            <View style={styles.alertPreview}>
              <MaterialCommunityIcons
                name="information-outline"
                size={17}
                color="#D97706"
              />

              <Text style={styles.alertPreviewText}>
                Twin will alert you when spending
                reaches{" "}
                {formatCurrency(
                  calculations.warningAmount
                )}.
              </Text>
            </View>
          </View>

          {/* TWIN AI PREVIEW */}

          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>
                Twin AI Preview
              </Text>

              <Text style={styles.sectionSubtitle}>
                Impact of this budget
              </Text>
            </View>

            <View style={styles.aiBadge}>
              <MaterialCommunityIcons
                name="creation"
                size={11}
                color="#7C3AED"
              />

              <Text style={styles.aiBadgeText}>
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

              <View style={styles.aiHeading}>
                <Text style={styles.aiTitle}>
                  {isEdit
                    ? "Updated budget impact"
                    : "Smart budget setup"}
                </Text>

                <Text style={styles.aiSubtitle}>
                  Twin recalculates as you edit
                </Text>
              </View>

              <Text style={styles.aiConfidence}>
                91%
              </Text>
            </View>

            {isEdit ? (
              <>
                <View style={styles.comparisonBox}>
                  <View
                    style={styles.comparisonItem}
                  >
                    <Text
                      style={
                        styles.comparisonLabel
                      }
                    >
                      OLD LIMIT
                    </Text>

                    <Text
                      style={
                        styles.comparisonValue
                      }
                    >
                      {formatCurrency(
                        initialLimit
                      )}
                    </Text>
                  </View>

                  <Ionicons
                    name="arrow-forward"
                    size={18}
                    color="#94A3B8"
                  />

                  <View
                    style={[
                      styles.comparisonItem,
                      styles.comparisonRight,
                    ]}
                  >
                    <Text
                      style={
                        styles.comparisonLabel
                      }
                    >
                      NEW LIMIT
                    </Text>

                    <Text
                      style={
                        styles.newComparisonValue
                      }
                    >
                      {formatCurrency(
                        calculations.limit
                      )}
                    </Text>
                  </View>
                </View>

                <View style={styles.aiMessage}>
                  <MaterialCommunityIcons
                    name={
                      calculations
                        .monthlyDifference >= 0
                        ? "check-circle-outline"
                        : "alert-outline"
                    }
                    size={19}
                    color={
                      calculations
                        .monthlyDifference >= 0
                        ? "#16A34A"
                        : "#D97706"
                    }
                  />

                  <Text style={styles.aiMessageText}>
                    {calculations.monthlyDifference >
                    0
                      ? `You're increasing this budget by ${formatCurrency(
                          calculations.monthlyDifference
                        )}. This gives you more flexibility for the rest of the month.`
                      : calculations.monthlyDifference <
                        0
                      ? `You're reducing this budget by ${formatCurrency(
                          Math.abs(
                            calculations.monthlyDifference
                          )
                        )}. Twin recommends monitoring this category more closely.`
                      : "Your monthly limit remains unchanged."}
                  </Text>
                </View>
              </>
            ) : (
              <Text style={styles.aiDescription}>
                A {formatCurrency(
                  calculations.limit
                )} monthly limit for{" "}
                {selectedTitle.toLowerCase()} will
                help Twin identify unusual spending
                patterns and warn you before you
                approach your limit.
              </Text>
            )}

            <View style={styles.aiStats}>
              <View style={styles.aiStat}>
                <Text style={styles.aiStatLabel}>
                  LIMIT
                </Text>

                <Text style={styles.aiStatValue}>
                  {formatCurrency(
                    calculations.limit
                  )}
                </Text>
              </View>

              <View style={styles.aiDivider} />

              <View style={styles.aiStat}>
                <Text style={styles.aiStatLabel}>
                  ALERT AT
                </Text>

                <Text style={styles.aiStatValue}>
                  {formatCurrency(
                    calculations.warningAmount
                  )}
                </Text>
              </View>

              {isEdit && (
                <>
                  <View style={styles.aiDivider} />

                  <View style={styles.aiStat}>
                    <Text
                      style={styles.aiStatLabel}
                    >
                      REMAINING
                    </Text>

                    <Text
                      style={styles.aiStatValue}
                    >
                      {formatCurrency(
                        calculations.remaining
                      )}
                    </Text>
                  </View>
                </>
              )}
            </View>

            <View style={styles.confidenceHeader}>
              <Text
                style={styles.confidenceLabel}
              >
                Twin Confidence
              </Text>

              <Text
                style={styles.confidenceValue}
              >
                91%
              </Text>
            </View>

            <View style={styles.confidenceTrack}>
              <View style={styles.confidenceFill} />
            </View>
          </View>

          {/* PROTECTION */}

          <View style={styles.protectionCard}>
            <View style={styles.protectionIcon}>
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={21}
                color="#16A34A"
              />
            </View>

            <View style={styles.protectionContent}>
              <Text style={styles.protectionTitle}>
                Twin Budget Protection
              </Text>

              <Text
                style={
                  styles.protectionDescription
                }
              >
                Spending alerts and AI insights
                help you detect unusual category
                behaviour before it affects your
                financial plan.
              </Text>
            </View>

            <Ionicons
              name="checkmark-circle"
              size={20}
              color="#22C55E"
            />
          </View>

          {/* SAVE */}

          <TouchableOpacity
            activeOpacity={0.84}
            style={styles.saveButton}
            onPress={handleSave}
          >
            <View style={styles.saveIcon}>
              <Ionicons
                name={
                  isEdit
                    ? "checkmark"
                    : "add"
                }
                size={20}
                color="#2563EB"
              />
            </View>

            <View style={styles.saveContent}>
              <Text style={styles.saveTitle}>
                {isEdit
                  ? "Save Changes"
                  : "Create Budget"}
              </Text>

              <Text style={styles.saveSubtitle}>
                {isEdit
                  ? "Update your spending plan"
                  : "Activate smart budget tracking"}
              </Text>
            </View>

            <Ionicons
              name="arrow-forward"
              size={18}
              color="#FFFFFF"
            />
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
              Budget intelligence powered by Twin AI
            </Text>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}