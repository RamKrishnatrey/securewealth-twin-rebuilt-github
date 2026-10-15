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

import styles from "./spendingAnalyticsStyles";

type MaterialIconName = React.ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

type CategoryData = {
  id: string;
  title: string;
  amount: number;
  percentage: number;
  icon: MaterialIconName;
  color: string;
  background: string;
};

type MonthData = {
  month: string;
  amount: number;
};

const categories: CategoryData[] = [
  {
    id: "food",
    title: "Food & Dining",
    amount: 8200,
    percentage: 32,
    icon: "silverware-fork-knife",
    color: "#EA580C",
    background: "#FFF7ED",
  },
  {
    id: "shopping",
    title: "Shopping",
    amount: 6100,
    percentage: 24,
    icon: "shopping-outline",
    color: "#7C3AED",
    background: "#F5F3FF",
  },
  {
    id: "transport",
    title: "Transport",
    amount: 4200,
    percentage: 16,
    icon: "car-outline",
    color: "#2563EB",
    background: "#EFF6FF",
  },
  {
    id: "bills",
    title: "Bills & Utilities",
    amount: 3900,
    percentage: 15,
    icon: "receipt-text-outline",
    color: "#0891B2",
    background: "#ECFEFF",
  },
  {
    id: "entertainment",
    title: "Entertainment",
    amount: 3300,
    percentage: 13,
    icon: "movie-open-outline",
    color: "#DC2626",
    background: "#FEF2F2",
  },
];

const monthlyData: MonthData[] = [
  { month: "Mar", amount: 21200 },
  { month: "Apr", amount: 24800 },
  { month: "May", amount: 22600 },
  { month: "Jun", amount: 27400 },
  { month: "Jul", amount: 23900 },
  { month: "Aug", amount: 25700 },
];

const formatCurrency = (value: number) =>
  `₹${value.toLocaleString("en-IN")}`;

export default function SpendingAnalyticsScreen() {
  const income = 60000;
  const expenses = 25700;
  const savings = income - expenses;

  const savingsRate = Math.round(
    (savings / income) * 100
  );

  const expenseRate = Math.round(
    (expenses / income) * 100
  );

  const previousMonth = 23900;

  const change = Math.round(
    ((expenses - previousMonth) /
      previousMonth) *
      100
  );

  const averageSpend = Math.round(
    monthlyData.reduce(
      (total, item) => total + item.amount,
      0
    ) / monthlyData.length
  );

  const maxMonthlySpend = Math.max(
    ...monthlyData.map((item) => item.amount)
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
              Spending Analytics
            </Text>

            <Text style={styles.headerSubtitle}>
              Twin financial intelligence
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.headerButton}
          >
            <Ionicons
              name="calendar-outline"
              size={19}
              color="#0F172A"
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* PERIOD */}

          <View style={styles.periodRow}>
            <View>
              <Text style={styles.periodLabel}>
                FINANCIAL OVERVIEW
              </Text>

              <Text style={styles.periodTitle}>
                August 2026
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.periodButton}
            >
              <Text style={styles.periodButtonText}>
                This Month
              </Text>

              <Ionicons
                name="chevron-down"
                size={14}
                color="#2563EB"
              />
            </TouchableOpacity>
          </View>

          {/* HERO */}

          <View style={styles.heroCard}>
            <View style={styles.heroGlowOne} />
            <View style={styles.heroGlowTwo} />

            <View style={styles.heroHeader}>
              <View>
                <Text style={styles.heroLabel}>
                  TOTAL SPENDING
                </Text>

                <Text style={styles.heroAmount}>
                  {formatCurrency(expenses)}
                </Text>

                <View style={styles.changeRow}>
                  <View
                    style={[
                      styles.changeBadge,
                      change > 0
                        ? styles.changeBadgeDanger
                        : styles.changeBadgeHealthy,
                    ]}
                  >
                    <MaterialCommunityIcons
                      name={
                        change > 0
                          ? "trending-up"
                          : "trending-down"
                      }
                      size={12}
                      color={
                        change > 0
                          ? "#FCA5A5"
                          : "#86EFAC"
                      }
                    />

                    <Text
                      style={[
                        styles.changeText,
                        change > 0
                          ? styles.changeTextDanger
                          : styles.changeTextHealthy,
                      ]}
                    >
                      {Math.abs(change)}%
                    </Text>
                  </View>

                  <Text style={styles.changeDescription}>
                    vs last month
                  </Text>
                </View>
              </View>

              <View style={styles.heroIcon}>
                <MaterialCommunityIcons
                  name="chart-areaspline"
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </View>

            <View style={styles.heroDivider} />

            <View style={styles.heroStats}>
              <View style={styles.heroStat}>
                <Text style={styles.heroStatLabel}>
                  MONTHLY AVG
                </Text>

                <Text style={styles.heroStatValue}>
                  {formatCurrency(averageSpend)}
                </Text>
              </View>

              <View style={styles.statDivider} />

              <View style={styles.heroStat}>
                <Text style={styles.heroStatLabel}>
                  SAVINGS
                </Text>

                <Text style={styles.heroStatValue}>
                  {formatCurrency(savings)}
                </Text>
              </View>

              <View style={styles.statDivider} />

              <View style={styles.heroStat}>
                <Text style={styles.heroStatLabel}>
                  SAVINGS RATE
                </Text>

                <Text style={styles.heroStatValue}>
                  {savingsRate}%
                </Text>
              </View>
            </View>
          </View>

          {/* CASH FLOW */}

          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>
                Cash Flow
              </Text>

              <Text style={styles.sectionSubtitle}>
                Income vs monthly expenses
              </Text>
            </View>

            <View style={styles.liveBadge}>
              <View style={styles.liveDot} />

              <Text style={styles.liveText}>
                LIVE
              </Text>
            </View>
          </View>

          <View style={styles.cashFlowCard}>
            <View style={styles.cashFlowRow}>
              <View style={styles.cashFlowIconIncome}>
                <MaterialCommunityIcons
                  name="arrow-down-left"
                  size={21}
                  color="#16A34A"
                />
              </View>

              <View style={styles.cashFlowContent}>
                <Text style={styles.cashFlowLabel}>
                  MONTHLY INCOME
                </Text>

                <Text style={styles.cashFlowValue}>
                  {formatCurrency(income)}
                </Text>
              </View>

              <Text style={styles.incomeText}>
                +100%
              </Text>
            </View>

            <View style={styles.rowDivider} />

            <View style={styles.cashFlowRow}>
              <View style={styles.cashFlowIconExpense}>
                <MaterialCommunityIcons
                  name="arrow-up-right"
                  size={21}
                  color="#DC2626"
                />
              </View>

              <View style={styles.cashFlowContent}>
                <Text style={styles.cashFlowLabel}>
                  MONTHLY EXPENSES
                </Text>

                <Text style={styles.cashFlowValue}>
                  {formatCurrency(expenses)}
                </Text>
              </View>

              <Text style={styles.expenseText}>
                -{expenseRate}%
              </Text>
            </View>

            <View style={styles.balanceBox}>
              <View>
                <Text style={styles.balanceLabel}>
                  AVAILABLE AFTER EXPENSES
                </Text>

                <Text style={styles.balanceAmount}>
                  {formatCurrency(savings)}
                </Text>
              </View>

              <View style={styles.balanceBadge}>
                <MaterialCommunityIcons
                  name="check-circle-outline"
                  size={14}
                  color="#16A34A"
                />

                <Text style={styles.balanceBadgeText}>
                  Healthy
                </Text>
              </View>
            </View>
          </View>

          {/* MONTHLY TREND */}

          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>
                Spending Trend
              </Text>

              <Text style={styles.sectionSubtitle}>
                Last 6 months
              </Text>
            </View>

            <Text style={styles.averageText}>
              Avg {formatCurrency(averageSpend)}
            </Text>
          </View>

          <View style={styles.trendCard}>
            <View style={styles.trendHeader}>
              <View>
                <Text style={styles.trendLabel}>
                  SIX MONTH TREND
                </Text>

                <Text style={styles.trendTitle}>
                  Monthly Expenses
                </Text>
              </View>

              <View style={styles.trendIcon}>
                <MaterialCommunityIcons
                  name="finance"
                  size={21}
                  color="#2563EB"
                />
              </View>
            </View>

            {/* BAR CHART */}

            <View style={styles.chart}>
              {monthlyData.map((item) => {
                const height =
                  (item.amount /
                    maxMonthlySpend) *
                  115;

                const active =
                  item.month === "Aug";

                return (
                  <View
                    key={item.month}
                    style={styles.barColumn}
                  >
                    <Text style={styles.barValue}>
                      {(item.amount / 1000).toFixed(1)}k
                    </Text>

                    <View style={styles.barArea}>
                      <View
                        style={[
                          styles.bar,
                          {
                            height,
                          },
                          active &&
                            styles.activeBar,
                        ]}
                      />
                    </View>

                    <Text
                      style={[
                        styles.barMonth,
                        active &&
                          styles.activeBarMonth,
                      ]}
                    >
                      {item.month}
                    </Text>
                  </View>
                );
              })}
            </View>

            <View style={styles.trendInsight}>
              <MaterialCommunityIcons
                name="information-outline"
                size={17}
                color="#2563EB"
              />

              <Text style={styles.trendInsightText}>
                Spending increased by {Math.abs(change)}%
                compared with July, but remains below
                your six-month peak.
              </Text>
            </View>
          </View>

          {/* CATEGORY DISTRIBUTION */}

          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>
                Spending by Category
              </Text>

              <Text style={styles.sectionSubtitle}>
                Where your money goes
              </Text>
            </View>

            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAll}>
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categoryCard}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={category.id}
                activeOpacity={0.75}
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
                      title: category.title,
                      spent: String(
                        category.amount
                      ),
                      limit: String(
                        getCategoryLimit(
                          category.id
                        )
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
                        category.background,
                    },
                  ]}
                >
                  <MaterialCommunityIcons
                    name={category.icon}
                    size={20}
                    color={category.color}
                  />
                </View>

                <View style={styles.categoryContent}>
                  <View style={styles.categoryTop}>
                    <Text style={styles.categoryTitle}>
                      {category.title}
                    </Text>

                    <Text style={styles.categoryAmount}>
                      {formatCurrency(
                        category.amount
                      )}
                    </Text>
                  </View>

                  <View style={styles.categoryBottom}>
                    <View
                      style={styles.categoryTrack}
                    >
                      <View
                        style={[
                          styles.categoryFill,
                          {
                            width: `${category.percentage}%`,
                            backgroundColor:
                              category.color,
                          },
                        ]}
                      />
                    </View>

                    <Text
                      style={styles.categoryPercentage}
                    >
                      {category.percentage}%
                    </Text>
                  </View>
                </View>

                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color="#CBD5E1"
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* SAVINGS */}

          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>
                Savings Performance
              </Text>

              <Text style={styles.sectionSubtitle}>
                Monthly financial efficiency
              </Text>
            </View>

            <View style={styles.savingsBadge}>
              <Text style={styles.savingsBadgeText}>
                {savingsRate}%
              </Text>
            </View>
          </View>

          <View style={styles.savingsCard}>
            <View style={styles.savingsHeader}>
              <View style={styles.savingsIcon}>
                <MaterialCommunityIcons
                  name="piggy-bank-outline"
                  size={25}
                  color="#16A34A"
                />
              </View>

              <View style={styles.savingsContent}>
                <Text style={styles.savingsLabel}>
                  SAVED THIS MONTH
                </Text>

                <Text style={styles.savingsAmount}>
                  {formatCurrency(savings)}
                </Text>
              </View>

              <View style={styles.savingsStatus}>
                <MaterialCommunityIcons
                  name="trending-up"
                  size={16}
                  color="#16A34A"
                />

                <Text style={styles.savingsStatusText}>
                  Strong
                </Text>
              </View>
            </View>

            <View style={styles.savingsTrack}>
              <View
                style={[
                  styles.savingsFill,
                  {
                    width: `${savingsRate}%`,
                  },
                ]}
              />
            </View>

            <View style={styles.savingsFooter}>
              <Text style={styles.savingsFooterText}>
                0%
              </Text>

              <Text style={styles.savingsGoal}>
                Target 40%
              </Text>

              <Text style={styles.savingsFooterText}>
                100%
              </Text>
            </View>
          </View>

          {/* TWIN AI */}

          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>
                Twin AI Insights
              </Text>

              <Text style={styles.sectionSubtitle}>
                Personalized financial observations
              </Text>
            </View>

            <View style={styles.aiBadge}>
              <MaterialCommunityIcons
                name="creation"
                size={11}
                color="#7C3AED"
              />

              <Text style={styles.aiBadgeText}>
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
                  Your finances look healthy
                </Text>

                <Text style={styles.aiSubtitle}>
                  Twin behavioural analysis
                </Text>
              </View>

              <View style={styles.confidenceBadge}>
                <Text style={styles.confidenceBadgeText}>
                  94%
                </Text>
              </View>
            </View>

            <Text style={styles.aiDescription}>
              You are currently saving {savingsRate}% of
              your monthly income. Spending has increased
              slightly this month, primarily due to Food &
              Dining and Shopping activity.
            </Text>

            {/* INSIGHT 1 */}

            <View style={styles.insightRow}>
              <View style={styles.insightIconBlue}>
                <MaterialCommunityIcons
                  name="silverware-fork-knife"
                  size={18}
                  color="#2563EB"
                />
              </View>

              <View style={styles.insightContent}>
                <Text style={styles.insightTitle}>
                  Food spending is your largest category
                </Text>

                <Text style={styles.insightDescription}>
                  It represents 32% of tracked monthly
                  spending.
                </Text>
              </View>
            </View>

            {/* INSIGHT 2 */}

            <View style={styles.insightRow}>
              <View style={styles.insightIconGreen}>
                <MaterialCommunityIcons
                  name="piggy-bank-outline"
                  size={18}
                  color="#16A34A"
                />
              </View>

              <View style={styles.insightContent}>
                <Text style={styles.insightTitle}>
                  Savings remain strong
                </Text>

                <Text style={styles.insightDescription}>
                  You retained {formatCurrency(savings)} of
                  your income this month.
                </Text>
              </View>
            </View>

            {/* RECOMMENDATION */}

            <View style={styles.recommendationBox}>
              <View style={styles.recommendationIcon}>
                <MaterialCommunityIcons
                  name="lightbulb-outline"
                  size={19}
                  color="#7C3AED"
                />
              </View>

              <View style={styles.recommendationContent}>
                <Text style={styles.recommendationTitle}>
                  Twin Recommendation
                </Text>

                <Text style={styles.recommendationText}>
                  Reducing Food & Dining spending by
                  ₹1,500–₹2,000 next month could further
                  improve your savings rate without
                  significantly changing your lifestyle.
                </Text>
              </View>
            </View>

            <View style={styles.confidenceHeader}>
              <Text style={styles.confidenceLabel}>
                Twin Confidence
              </Text>

              <Text style={styles.confidenceValue}>
                94%
              </Text>
            </View>

            <View style={styles.confidenceTrack}>
              <View style={styles.confidenceFill} />
            </View>
          </View>

          {/* FOOTER */}

          <View style={styles.footer}>
            <MaterialCommunityIcons
              name="shield-check-outline"
              size={13}
              color="#94A3B8"
            />

            <Text style={styles.footerText}>
              Financial intelligence powered by Twin AI
            </Text>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

function getCategoryLimit(id: string) {
  switch (id) {
    case "food":
      return 12000;

    case "shopping":
      return 10000;

    case "transport":
      return 7000;

    case "bills":
      return 6000;

    case "entertainment":
      return 4000;

    default:
      return 10000;
  }
}