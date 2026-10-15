import React from "react";

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

import { router } from "expo-router";

import styles from "./budgetPlannerStyles";

/* =========================
   TYPES
========================= */

type MaterialIconName = React.ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

type BudgetCategory = {
  id: string;
  title: string;
  icon: MaterialIconName;
  spent: number;
  limit: number;
  iconColor: string;
  iconBackground: string;
};

/* =========================
   MOCK DATA
========================= */

const categories: BudgetCategory[] = [
  {
    id: "food",
    title: "Food & Dining",
    icon: "silverware-fork-knife",
    spent: 8200,
    limit: 12000,
    iconColor: "#EA580C",
    iconBackground: "#FFF7ED",
  },
  {
    id: "shopping",
    title: "Shopping",
    icon: "shopping-outline",
    spent: 6700,
    limit: 8000,
    iconColor: "#7C3AED",
    iconBackground: "#F5F3FF",
  },
  {
    id: "transport",
    title: "Transport",
    icon: "car-outline",
    spent: 3200,
    limit: 6000,
    iconColor: "#2563EB",
    iconBackground: "#EFF6FF",
  },
  {
    id: "bills",
    title: "Bills & Utilities",
    icon: "receipt-text-outline",
    spent: 5100,
    limit: 7000,
    iconColor: "#0891B2",
    iconBackground: "#ECFEFF",
  },
  {
    id: "entertainment",
    title: "Entertainment",
    icon: "movie-open-outline",
    spent: 3800,
    limit: 4000,
    iconColor: "#DC2626",
    iconBackground: "#FEF2F2",
  },
];

/* =========================
   HELPERS
========================= */

const formatCurrency = (amount: number) =>
  `₹${amount.toLocaleString("en-IN")}`;

const getPercentage = (
  spent: number,
  limit: number
) => {
  if (limit <= 0) {
    return 0;
  }

  return Math.min(
    Math.round((spent / limit) * 100),
    100
  );
};

/* =========================
   SCREEN
========================= */

export default function BudgetPlannerScreen() {
  const totalBudget = 50000;
  const totalSpent = 31200;

  const remaining = Math.max(
    totalBudget - totalSpent,
    0
  );

  const utilization = getPercentage(
    totalSpent,
    totalBudget
  );

  const daysRemaining = 12;

  const projectedSpend = 46800;

  const projectedSaving = Math.max(
    totalBudget - projectedSpend,
    0
  );

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
              Budget Planner
            </Text>

            <Text style={styles.headerSubtitle}>
              Smart spending with Twin
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
              MONTH
          ===================== */}

          <View style={styles.monthRow}>
            <View>
              <Text style={styles.pageLabel}>
                MONTHLY PLAN
              </Text>

              <Text style={styles.pageTitle}>
                August 2026
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.monthSelector}
            >
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={17}
                color="#2563EB"
              />

              <Text
                style={
                  styles.monthSelectorText
                }
              >
                This Month
              </Text>

              <Ionicons
                name="chevron-down"
                size={14}
                color="#2563EB"
              />
            </TouchableOpacity>
          </View>

          {/* =====================
              HERO
          ===================== */}

          <View style={styles.heroCard}>
            <View style={styles.heroGlowOne} />

            <View style={styles.heroGlowTwo} />

            <View style={styles.heroHeader}>
              <View>
                <Text
                  style={styles.heroLabel}
                >
                  MONTHLY BUDGET
                </Text>

                <Text
                  style={styles.heroAmount}
                >
                  {formatCurrency(
                    totalBudget
                  )}
                </Text>
              </View>

              <View style={styles.healthBadge}>
                <View
                  style={styles.healthDot}
                />

                <Text
                  style={styles.healthText}
                >
                  HEALTHY
                </Text>
              </View>
            </View>

            <View
              style={
                styles.progressHeader
              }
            >
              <Text
                style={
                  styles.progressLabel
                }
              >
                SPENT
              </Text>

              <Text
                style={
                  styles.progressPercentage
                }
              >
                {utilization}%
              </Text>
            </View>

            <View
              style={styles.progressTrack}
            >
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${utilization}%`,
                  },
                ]}
              />
            </View>

            <View style={styles.heroStats}>
              <View
                style={styles.heroStat}
              >
                <Text
                  style={
                    styles.heroStatLabel
                  }
                >
                  SPENT
                </Text>

                <Text
                  style={
                    styles.heroStatValue
                  }
                >
                  {formatCurrency(
                    totalSpent
                  )}
                </Text>
              </View>

              <View
                style={
                  styles.heroDivider
                }
              />

              <View
                style={styles.heroStat}
              >
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
                    remaining
                  )}
                </Text>
              </View>

              <View
                style={
                  styles.heroDivider
                }
              />

              <View
                style={styles.heroStat}
              >
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
            </View>
          </View>

          {/* =====================
              QUICK STATS
          ===================== */}

          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <View
                style={[
                  styles.statIcon,
                  {
                    backgroundColor:
                      "#F0FDF4",
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="chart-line"
                  size={20}
                  color="#16A34A"
                />
              </View>

              <Text
                style={styles.statLabel}
              >
                PROJECTED
              </Text>

              <Text
                style={styles.statValue}
              >
                {formatCurrency(
                  projectedSpend
                )}
              </Text>

              <Text
                style={styles.statSubtitle}
              >
                Month-end spend
              </Text>
            </View>

            <View style={styles.statCard}>
              <View
                style={[
                  styles.statIcon,
                  {
                    backgroundColor:
                      "#EFF6FF",
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="piggy-bank-outline"
                  size={20}
                  color="#2563EB"
                />
              </View>

              <Text
                style={styles.statLabel}
              >
                BUFFER
              </Text>

              <Text
                style={styles.statValue}
              >
                {formatCurrency(
                  projectedSaving
                )}
              </Text>

              <Text
                style={styles.statSubtitle}
              >
                Expected surplus
              </Text>
            </View>
          </View>

{/* =====================
    SPENDING ANALYTICS
===================== */}

<TouchableOpacity
  activeOpacity={0.78}
  onPress={() =>
    router.push(
      "/spending-analytics" as any
    )
  }
  style={{
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 16,
    marginTop: 14,
    marginBottom: 26,
    flexDirection: "row",
    alignItems: "center",
  }}
>
  <View
    style={{
      width: 46,
      height: 46,
      borderRadius: 15,
      backgroundColor: "#EFF6FF",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 12,
    }}
  >
    <MaterialCommunityIcons
      name="chart-areaspline"
      size={24}
      color="#2563EB"
    />
  </View>

  <View style={{ flex: 1 }}>
    <Text
      style={{
        color: "#0F172A",
        fontSize: 13,
        fontWeight: "800",
      }}
    >
      Spending Analytics
    </Text>

    <Text
      style={{
        color: "#64748B",
        fontSize: 8,
        marginTop: 4,
      }}
    >
      Explore trends, categories and AI insights
    </Text>
  </View>

  <View
    style={{
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor: "#F8FAFC",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Ionicons
      name="arrow-forward"
      size={17}
      color="#2563EB"
    />
  </View>
</TouchableOpacity>

{/* =====================
    CATEGORIES
===================== */}

          <View style={styles.sectionHeader}>
            <View>
              <Text
                style={styles.sectionTitle}
              >
                Category Budgets
              </Text>

              <Text
                style={
                  styles.sectionSubtitle
                }
              >
                Spending limits by category
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
            >
              <Text style={styles.seeAll}>
                Manage
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={
              styles.categoriesContainer
            }
          >
            {categories.map(
              (category, index) => {
                const percentage =
                  getPercentage(
                    category.spent,
                    category.limit
                  );

                const isWarning =
                  percentage >= 80;

                return (
                  <TouchableOpacity
                    key={category.id}
                    activeOpacity={0.78}
                    style={[
                      styles.categoryRow,
                      index === 0 &&
                        styles.categoryRowFirst,
                    ]}
                    onPress={() =>
                      router.push({
                        pathname:
                          "/budget-category" as any,
                        params: {
                          id: category.id,
                          title:
                            category.title,
                          spent: String(
                            category.spent
                          ),
                          limit: String(
                            category.limit
                          ),
                        },
                      })
                    }
                  >
                    <View
                      style={[
                        styles.categoryIcon,
                        {
                          backgroundColor:
                            category.iconBackground,
                        },
                      ]}
                    >
                      <MaterialCommunityIcons
                        name={category.icon}
                        size={21}
                        color={
                          category.iconColor
                        }
                      />
                    </View>

                    <View
                      style={
                        styles.categoryContent
                      }
                    >
                      <View
                        style={
                          styles.categoryTop
                        }
                      >
                        <Text
                          style={
                            styles.categoryTitle
                          }
                        >
                          {category.title}
                        </Text>

                        <Text
                          style={[
                            styles.categoryPercentage,
                            isWarning &&
                              styles.warningPercentage,
                          ]}
                        >
                          {percentage}%
                        </Text>
                      </View>

                      <Text
                        style={
                          styles.categoryAmount
                        }
                      >
                        {formatCurrency(
                          category.spent
                        )}{" "}
                        of{" "}
                        {formatCurrency(
                          category.limit
                        )}
                      </Text>

                      <View
                        style={
                          styles.categoryTrack
                        }
                      >
                        <View
                          style={[
                            styles.categoryFill,
                            {
                              width: `${percentage}%`,
                            },
                            isWarning &&
                              styles.categoryWarningFill,
                          ]}
                        />
                      </View>
                    </View>

                    <Ionicons
                      name="chevron-forward"
                      size={16}
                      color="#94A3B8"
                    />
                  </TouchableOpacity>
                );
              }
            )}
          </View>

          {/* =====================
              ALERT
          ===================== */}

          <Text style={styles.sectionTitle}>
            Spending Alert
          </Text>

          <View style={styles.alertCard}>
            <View style={styles.alertIcon}>
              <MaterialCommunityIcons
                name="alert-outline"
                size={22}
                color="#D97706"
              />
            </View>

            <View style={styles.alertContent}>
              <View
                style={
                  styles.alertTitleRow
                }
              >
                <Text
                  style={styles.alertTitle}
                >
                  Entertainment is near its limit
                </Text>

                <View
                  style={
                    styles.warningBadge
                  }
                >
                  <Text
                    style={
                      styles.warningBadgeText
                    }
                  >
                    95%
                  </Text>
                </View>
              </View>

              <Text
                style={
                  styles.alertDescription
                }
              >
                You've used ₹3,800 of your ₹4,000
                entertainment budget. Only ₹200
                remains this month.
              </Text>
            </View>
          </View>

          {/* =====================
              TWIN AI
          ===================== */}

          <View style={styles.sectionHeader}>
            <View>
              <Text
                style={styles.sectionTitle}
              >
                Twin AI Insight
              </Text>

              <Text
                style={
                  styles.sectionSubtitle
                }
              >
                Personalized budget intelligence
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
                  Your budget is on track
                </Text>

                <Text
                  style={styles.aiSubtitle}
                >
                  Twin analyzed your spending
                  behaviour
                </Text>
              </View>

              <View
                style={
                  styles.confidenceBadge
                }
              >
                <Text
                  style={
                    styles.confidenceText
                  }
                >
                  92%
                </Text>
              </View>
            </View>

            <Text
              style={styles.aiDescription}
            >
              At your current spending pace, you're
              projected to finish August about
              ₹3,200 below your total budget.
              Shopping and entertainment are the
              categories to watch most closely.
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
                  Twin Recommendation
                </Text>

                <Text
                  style={
                    styles.recommendationText
                  }
                >
                  Keep discretionary spending below
                  ₹450/day for the rest of the
                  month to maintain a comfortable
                  safety buffer.
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
                92%
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
              RECENT SPENDING
          ===================== */}

          <View style={styles.sectionHeader}>
            <View>
              <Text
                style={styles.sectionTitle}
              >
                Recent Spending
              </Text>

              <Text
                style={
                  styles.sectionSubtitle
                }
              >
                Latest budget activity
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

          <View style={styles.recentCard}>
            <RecentRow
              icon="shopping-outline"
              title="Amazon India"
              category="Shopping"
              amount={2499}
              date="Today"
              first
            />

            <RecentRow
              icon="food-outline"
              title="Swiggy"
              category="Food & Dining"
              amount={649}
              date="Today"
            />

            <RecentRow
              icon="movie-open-outline"
              title="PVR Cinemas"
              category="Entertainment"
              amount={890}
              date="Yesterday"
              last
            />
          </View>

          {/* =====================
              ADD BUDGET
          ===================== */}

          <TouchableOpacity
            activeOpacity={0.84}
            style={styles.addBudgetButton}
            onPress={() =>
              router.push(
                "/create-budget" as any
              )
            }
          >
            <View
              style={
                styles.addBudgetButtonIcon
              }
            >
              <Ionicons
                name="add"
                size={20}
                color="#2563EB"
              />
            </View>

            <View
              style={
                styles.addBudgetContent
              }
            >
              <Text
                style={
                  styles.addBudgetTitle
                }
              >
                Create a Budget
              </Text>

              <Text
                style={
                  styles.addBudgetSubtitle
                }
              >
                Set a new category spending limit
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
              Spending intelligence powered by
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
   RECENT ROW
========================= */

function RecentRow({
  icon,
  title,
  category,
  amount,
  date,
  first = false,
  last = false,
}: {
  icon: MaterialIconName;
  title: string;
  category: string;
  amount: number;
  date: string;
  first?: boolean;
  last?: boolean;
}) {
  return (
    <View
      style={[
        styles.recentRow,
        first && styles.recentRowFirst,
        last && styles.recentRowLast,
      ]}
    >
      <View style={styles.recentIcon}>
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color="#2563EB"
        />
      </View>

      <View style={styles.recentContent}>
        <Text style={styles.recentTitle}>
          {title}
        </Text>

        <Text style={styles.recentSubtitle}>
          {category} • {date}
        </Text>
      </View>

      <Text style={styles.recentAmount}>
        -{formatCurrency(amount)}
      </Text>
    </View>
  );
}