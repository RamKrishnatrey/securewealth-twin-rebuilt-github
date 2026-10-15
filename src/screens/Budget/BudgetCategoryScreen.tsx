import React, { useMemo } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
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

import styles from "./budgetCategoryStyles";

/* =========================
   TYPES
========================= */

type MaterialIconName = React.ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

type CategoryTransaction = {
  id: string;
  title: string;
  subtitle: string;
  amount: number;
  icon: MaterialIconName;
};

/* =========================
   HELPERS
========================= */

const formatCurrency = (amount: number) =>
  `₹${Math.round(amount).toLocaleString("en-IN")}`;

const clampPercentage = (value: number) =>
  Math.min(Math.max(value, 0), 100);

/* =========================
   SCREEN
========================= */

export default function BudgetCategoryScreen() {
  const params = useLocalSearchParams<{
    id?: string;
    title?: string;
    spent?: string;
    limit?: string;
  }>();

  /* =========================
     PARAM VALUES
  ========================= */

  const categoryId =
    typeof params.id === "string"
      ? params.id
      : "food";

  const title =
    typeof params.title === "string"
      ? params.title
      : "Food & Dining";

  const spent =
    Number(params.spent) || 8200;

  const limit =
    Number(params.limit) || 12000;

  /* =========================
     MOCK MONTH DATA
  ========================= */

  const daysRemaining = 12;

  /*
    This will eventually come
    from backend analytics.
  */

  const projectedSpend =
    categoryId === "entertainment"
      ? 4600
      : categoryId === "shopping"
      ? 9100
      : Math.round(spent * 1.32);

  /* =========================
     CALCULATIONS
  ========================= */

  const analytics = useMemo(() => {
    const remaining = Math.max(
      limit - spent,
      0
    );

    const percentage =
      limit > 0
        ? clampPercentage(
            Math.round(
              (spent / limit) * 100
            )
          )
        : 0;

    const dailySafeSpend =
      daysRemaining > 0
        ? Math.floor(
            remaining / daysRemaining
          )
        : 0;

    const projectedDifference =
      limit - projectedSpend;

    const isProjectedOver =
      projectedSpend > limit;

    const projectedPercentage =
      limit > 0
        ? Math.round(
            (projectedSpend / limit) *
              100
          )
        : 0;

    return {
      remaining,
      percentage,
      dailySafeSpend,
      projectedDifference,
      isProjectedOver,
      projectedPercentage,
    };
  }, [
    spent,
    limit,
    projectedSpend,
  ]);

  /* =========================
     CATEGORY CONFIG
  ========================= */

  const categoryConfig =
    getCategoryConfig(categoryId);

  const transactions =
    getTransactions(categoryId);

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
              Budget Details
            </Text>

            <Text style={styles.headerSubtitle}>
              Category intelligence
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.headerButton}
          >
            <Ionicons
              name="ellipsis-horizontal"
              size={20}
              color="#0F172A"
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={
            styles.content
          }
          showsVerticalScrollIndicator={false}
        >
          {/* =====================
              CATEGORY INTRO
          ===================== */}

          <View style={styles.categoryIntro}>
            <View
              style={[
                styles.categoryIcon,
                {
                  backgroundColor:
                    categoryConfig.background,
                },
              ]}
            >
              <MaterialCommunityIcons
                name={categoryConfig.icon}
                size={28}
                color={
                  categoryConfig.color
                }
              />
            </View>

            <View style={styles.categoryHeading}>
              <Text
                style={styles.categoryLabel}
              >
                CATEGORY BUDGET
              </Text>

              <Text
                style={styles.categoryTitle}
              >
                {title}
              </Text>

              <Text
                style={
                  styles.categorySubtitle
                }
              >
                August 2026
              </Text>
            </View>

            <View
              style={[
                styles.statusBadge,
                analytics.percentage >= 90
                  ? styles.statusBadgeDanger
                  : analytics.percentage >= 75
                  ? styles.statusBadgeWarning
                  : styles.statusBadgeHealthy,
              ]}
            >
              <Text
                style={[
                  styles.statusBadgeText,
                  analytics.percentage >= 90
                    ? styles.statusTextDanger
                    : analytics.percentage >=
                      75
                    ? styles.statusTextWarning
                    : styles.statusTextHealthy,
                ]}
              >
                {analytics.percentage >= 90
                  ? "HIGH"
                  : analytics.percentage >= 75
                  ? "WATCH"
                  : "HEALTHY"}
              </Text>
            </View>
          </View>

          {/* =====================
              HERO CARD
          ===================== */}

          <View style={styles.heroCard}>
            <View style={styles.heroGlowOne} />
            <View style={styles.heroGlowTwo} />

            <View style={styles.heroTop}>
              <View>
                <Text style={styles.heroLabel}>
                  SPENT THIS MONTH
                </Text>

                <Text style={styles.heroAmount}>
                  {formatCurrency(spent)}
                </Text>

                <Text
                  style={styles.heroTarget}
                >
                  of {formatCurrency(limit)}
                </Text>
              </View>

              <View
                style={
                  styles.percentageCircle
                }
              >
                <Text
                  style={
                    styles.percentageValue
                  }
                >
                  {analytics.percentage}%
                </Text>

                <Text
                  style={
                    styles.percentageLabel
                  }
                >
                  USED
                </Text>
              </View>
            </View>

            <View
              style={styles.progressTrack}
            >
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${analytics.percentage}%`,
                  },
                  analytics.percentage >=
                    90 &&
                    styles.progressDanger,
                ]}
              />
            </View>

            <View style={styles.heroStats}>
              <View style={styles.heroStat}>
                <Text
                  style={
                    styles.heroStatLabel
                  }
                >
                  REMAINING
                </Text>

                <Text
                  style={
                    styles.heroStatValue
                  }
                >
                  {formatCurrency(
                    analytics.remaining
                  )}
                </Text>
              </View>

              <View
                style={styles.heroDivider}
              />

              <View style={styles.heroStat}>
                <Text
                  style={
                    styles.heroStatLabel
                  }
                >
                  DAYS LEFT
                </Text>

                <Text
                  style={
                    styles.heroStatValue
                  }
                >
                  {daysRemaining}
                </Text>
              </View>

              <View
                style={styles.heroDivider}
              />

              <View style={styles.heroStat}>
                <Text
                  style={
                    styles.heroStatLabel
                  }
                >
                  SAFE / DAY
                </Text>

                <Text
                  style={
                    styles.heroStatValue
                  }
                >
                  {formatCurrency(
                    analytics.dailySafeSpend
                  )}
                </Text>
              </View>
            </View>
          </View>

          {/* =====================
              SPENDING PACE
          ===================== */}

          <View style={styles.sectionHeader}>
            <View>
              <Text
                style={styles.sectionTitle}
              >
                Spending Pace
              </Text>

              <Text
                style={
                  styles.sectionSubtitle
                }
              >
                Expected month-end position
              </Text>
            </View>

            <View style={styles.liveBadge}>
              <View style={styles.liveDot} />

              <Text style={styles.liveText}>
                LIVE
              </Text>
            </View>
          </View>

          <View style={styles.paceCard}>
            <View style={styles.paceTop}>
              <View
                style={
                  styles.projectionIcon
                }
              >
                <MaterialCommunityIcons
                  name="chart-line"
                  size={23}
                  color={
                    analytics.isProjectedOver
                      ? "#DC2626"
                      : "#16A34A"
                  }
                />
              </View>

              <View style={styles.paceHeading}>
                <Text
                  style={styles.paceLabel}
                >
                  PROJECTED SPEND
                </Text>

                <Text
                  style={styles.paceAmount}
                >
                  {formatCurrency(
                    projectedSpend
                  )}
                </Text>
              </View>

              <View
                style={[
                  styles.projectionBadge,
                  analytics.isProjectedOver
                    ? styles.projectionDanger
                    : styles.projectionHealthy,
                ]}
              >
                <Text
                  style={[
                    styles.projectionBadgeText,
                    analytics.isProjectedOver
                      ? styles.projectionDangerText
                      : styles.projectionHealthyText,
                  ]}
                >
                  {analytics.projectedPercentage}%
                </Text>
              </View>
            </View>

            <View
              style={
                styles.projectionComparison
              }
            >
              <View
                style={
                  styles.comparisonColumn
                }
              >
                <Text
                  style={
                    styles.comparisonLabel
                  }
                >
                  BUDGET LIMIT
                </Text>

                <Text
                  style={
                    styles.comparisonValue
                  }
                >
                  {formatCurrency(limit)}
                </Text>
              </View>

              <Ionicons
                name="arrow-forward"
                size={17}
                color="#94A3B8"
              />

              <View
                style={[
                  styles.comparisonColumn,
                  styles.comparisonRight,
                ]}
              >
                <Text
                  style={
                    styles.comparisonLabel
                  }
                >
                  PROJECTION
                </Text>

                <Text
                  style={[
                    styles.comparisonValue,
                    analytics.isProjectedOver
                      ? styles.dangerValue
                      : styles.healthyValue,
                  ]}
                >
                  {formatCurrency(
                    projectedSpend
                  )}
                </Text>
              </View>
            </View>

            {analytics.isProjectedOver ? (
              <View style={styles.warningBox}>
                <View
                  style={styles.warningIcon}
                >
                  <MaterialCommunityIcons
                    name="alert-outline"
                    size={19}
                    color="#D97706"
                  />
                </View>

                <View
                  style={styles.warningContent}
                >
                  <Text
                    style={styles.warningTitle}
                  >
                    Overspending risk
                  </Text>

                  <Text
                    style={
                      styles.warningDescription
                    }
                  >
                    At your current pace, you may
                    exceed this budget by{" "}
                    {formatCurrency(
                      Math.abs(
                        analytics
                          .projectedDifference
                      )
                    )}
                    .
                  </Text>
                </View>
              </View>
            ) : (
              <View style={styles.healthyBox}>
                <View
                  style={styles.healthyIcon}
                >
                  <MaterialCommunityIcons
                    name="check-circle-outline"
                    size={19}
                    color="#16A34A"
                  />
                </View>

                <View
                  style={styles.warningContent}
                >
                  <Text
                    style={styles.healthyTitle}
                  >
                    On track
                  </Text>

                  <Text
                    style={
                      styles.healthyDescription
                    }
                  >
                    You're projected to remain{" "}
                    {formatCurrency(
                      Math.abs(
                        analytics
                          .projectedDifference
                      )
                    )}{" "}
                    below this category limit.
                  </Text>
                </View>
              </View>
            )}
          </View>

          {/* =====================
              TWIN AI
          ===================== */}

          <View style={styles.sectionHeader}>
            <View>
              <Text
                style={styles.sectionTitle}
              >
                Twin AI Analysis
              </Text>

              <Text
                style={
                  styles.sectionSubtitle
                }
              >
                Personalized spending intelligence
              </Text>
            </View>

            <View style={styles.aiBadge}>
              <MaterialCommunityIcons
                name="creation"
                size={11}
                color="#7C3AED"
              />

              <Text
                style={styles.aiBadgeText}
              >
                AI
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
                  {analytics.isProjectedOver
                    ? "Twin detected budget pressure"
                    : "Your spending looks controlled"}
                </Text>

                <Text
                  style={styles.aiSubtitle}
                >
                  Behavioural spending analysis
                </Text>
              </View>

              <View
                style={
                  styles.aiConfidenceBadge
                }
              >
                <Text
                  style={
                    styles.aiConfidenceText
                  }
                >
                  93%
                </Text>
              </View>
            </View>

            <Text
              style={styles.aiDescription}
            >
              {getAIMessage(
                categoryId,
                analytics.isProjectedOver
              )}
            </Text>

            <View
              style={
                styles.recommendationBox
              }
            >
              <View
                style={
                  styles.recommendationIcon
                }
              >
                <MaterialCommunityIcons
                  name="lightbulb-outline"
                  size={19}
                  color="#2563EB"
                />
              </View>

              <View
                style={
                  styles.recommendationContent
                }
              >
                <Text
                  style={
                    styles.recommendationTitle
                  }
                >
                  Recommended action
                </Text>

                <Text
                  style={
                    styles.recommendationText
                  }
                >
                  {analytics.isProjectedOver
                    ? `Try keeping ${title.toLowerCase()} spending below ${formatCurrency(
                        analytics.dailySafeSpend
                      )}/day for the rest of the month.`
                    : `You can spend approximately ${formatCurrency(
                        analytics.dailySafeSpend
                      )}/day and remain within this budget.`}
                </Text>
              </View>
            </View>

            <View
              style={
                styles.confidenceHeader
              }
            >
              <Text
                style={
                  styles.confidenceLabel
                }
              >
                Twin Confidence
              </Text>

              <Text
                style={
                  styles.confidenceValue
                }
              >
                93%
              </Text>
            </View>

            <View
              style={
                styles.confidenceTrack
              }
            >
              <View
                style={
                  styles.confidenceFill
                }
              />
            </View>
          </View>

          {/* =====================
              TRANSACTIONS
          ===================== */}

          <View style={styles.sectionHeader}>
            <View>
              <Text
                style={styles.sectionTitle}
              >
                Recent Transactions
              </Text>

              <Text
                style={
                  styles.sectionSubtitle
                }
              >
                Activity in {title}
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
            >
              <Text style={styles.seeAll}>
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={
              styles.transactionsCard
            }
          >
            {transactions.map(
              (transaction, index) => (
                <View
                  key={transaction.id}
                  style={[
                    styles.transactionRow,
                    index === 0 &&
                      styles.transactionRowFirst,
                  ]}
                >
                  <View
                    style={
                      styles.transactionIcon
                    }
                  >
                    <MaterialCommunityIcons
                      name={transaction.icon}
                      size={20}
                      color="#2563EB"
                    />
                  </View>

                  <View
                    style={
                      styles.transactionContent
                    }
                  >
                    <Text
                      style={
                        styles.transactionTitle
                      }
                    >
                      {transaction.title}
                    </Text>

                    <Text
                      style={
                        styles.transactionSubtitle
                      }
                    >
                      {transaction.subtitle}
                    </Text>
                  </View>

                  <Text
                    style={
                      styles.transactionAmount
                    }
                  >
                    -
                    {formatCurrency(
                      transaction.amount
                    )}
                  </Text>
                </View>
              )
            )}
          </View>

          {/* =====================
              EDIT BUDGET
          ===================== */}

          <TouchableOpacity
            activeOpacity={0.84}
            style={styles.editButton}
            onPress={() =>
              router.push({
                pathname:
                  "/edit-budget" as any,
                params: {
                  id: categoryId,
                  title,
                  spent: String(spent),
                  limit: String(limit),
                },
              })
            }
          >
            <View style={styles.editIcon}>
              <MaterialCommunityIcons
                name="pencil-outline"
                size={20}
                color="#2563EB"
              />
            </View>

            <View style={styles.editContent}>
              <Text
                style={styles.editTitle}
              >
                Edit Budget
              </Text>

              <Text
                style={styles.editSubtitle}
              >
                Adjust category spending limit
              </Text>
            </View>

            <Ionicons
              name="arrow-forward"
              size={18}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          <View style={styles.footer}>
            <MaterialCommunityIcons
              name="creation"
              size={12}
              color="#94A3B8"
            />

            <Text style={styles.footerText}>
              Category intelligence powered by
              Twin AI
            </Text>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

/* =========================
   CATEGORY CONFIG
========================= */

function getCategoryConfig(
  id: string
): {
  icon: MaterialIconName;
  color: string;
  background: string;
} {
  switch (id) {
    case "shopping":
      return {
        icon: "shopping-outline",
        color: "#7C3AED",
        background: "#F5F3FF",
      };

    case "transport":
      return {
        icon: "car-outline",
        color: "#2563EB",
        background: "#EFF6FF",
      };

    case "bills":
      return {
        icon: "receipt-text-outline",
        color: "#0891B2",
        background: "#ECFEFF",
      };

    case "entertainment":
      return {
        icon: "movie-open-outline",
        color: "#DC2626",
        background: "#FEF2F2",
      };

    default:
      return {
        icon: "silverware-fork-knife",
        color: "#EA580C",
        background: "#FFF7ED",
      };
  }
}

/* =========================
   AI MESSAGE
========================= */

function getAIMessage(
  id: string,
  isOver: boolean
) {
  if (id === "entertainment") {
    return "Entertainment spending has accelerated compared with your usual monthly pattern. Most of the increase occurred during the second half of the month.";
  }

  if (id === "shopping") {
    return "Shopping activity is currently above your typical pace. A few higher-value purchases are contributing significantly to this month's usage.";
  }

  if (id === "food") {
    return "Food and dining spending remains relatively stable. Delivery orders are slightly higher than your recent average, but the category is still manageable.";
  }

  if (isOver) {
    return "Your recent transaction pattern indicates that this category may exceed its monthly limit unless spending slows during the remaining days.";
  }

  return "Your recent spending pattern remains consistent with this category's monthly budget and historical behaviour.";
}

/* =========================
   MOCK TRANSACTIONS
========================= */

function getTransactions(
  id: string
): CategoryTransaction[] {
  switch (id) {
    case "shopping":
      return [
        {
          id: "1",
          title: "Amazon India",
          subtitle: "Today • Online purchase",
          amount: 2499,
          icon: "shopping-outline",
        },
        {
          id: "2",
          title: "Myntra",
          subtitle: "28 Jul • Clothing",
          amount: 1899,
          icon: "tshirt-crew-outline",
        },
        {
          id: "3",
          title: "Flipkart",
          subtitle: "25 Jul • Electronics",
          amount: 1499,
          icon: "shopping-outline",
        },
      ];

    case "transport":
      return [
        {
          id: "1",
          title: "Uber",
          subtitle: "Today • Cab ride",
          amount: 340,
          icon: "car-outline",
        },
        {
          id: "2",
          title: "Delhi Metro",
          subtitle: "Yesterday • Travel",
          amount: 120,
          icon: "train",
        },
        {
          id: "3",
          title: "Uber",
          subtitle: "27 Jul • Cab ride",
          amount: 280,
          icon: "car-outline",
        },
      ];

    case "bills":
      return [
        {
          id: "1",
          title: "Airtel",
          subtitle: "29 Jul • Mobile bill",
          amount: 799,
          icon: "cellphone",
        },
        {
          id: "2",
          title: "Electricity Bill",
          subtitle: "24 Jul • Utilities",
          amount: 2100,
          icon: "flash-outline",
        },
        {
          id: "3",
          title: "JioFiber",
          subtitle: "20 Jul • Broadband",
          amount: 999,
          icon: "wifi",
        },
      ];

    case "entertainment":
      return [
        {
          id: "1",
          title: "PVR Cinemas",
          subtitle: "Yesterday • Movies",
          amount: 890,
          icon: "movie-open-outline",
        },
        {
          id: "2",
          title: "Spotify",
          subtitle: "26 Jul • Subscription",
          amount: 119,
          icon: "music",
        },
        {
          id: "3",
          title: "BookMyShow",
          subtitle: "22 Jul • Entertainment",
          amount: 1299,
          icon: "ticket-outline",
        },
      ];

    default:
      return [
        {
          id: "1",
          title: "Swiggy",
          subtitle: "Today • Food delivery",
          amount: 649,
          icon: "food-outline",
        },
        {
          id: "2",
          title: "Starbucks",
          subtitle: "Yesterday • Cafe",
          amount: 485,
          icon: "coffee-outline",
        },
        {
          id: "3",
          title: "Zomato",
          subtitle: "27 Jul • Food delivery",
          amount: 720,
          icon: "food-outline",
        },
      ];
  }
}