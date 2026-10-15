
import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import styles from "./styles";
import { goalService } from "@/services/goalService";

type Goal = {
  id: string;
  title: string;
  subtitle: string;
  target: number;
  saved: number;
  monthlyContribution: number;
  deadline: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconColor: string;
  iconBackground: string;
  status: string;
};

const formatCurrency = (amount: number) =>
  `₹${amount.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;

function normalizeGoal(item: any, index: number): Goal {
  const title = String(item.name ?? item.title ?? "Financial Goal");
  const category = String(item.category ?? title).toLowerCase();

  let icon: Goal["icon"] = "wallet-outline";
  let iconColor = "#2563EB";
  let iconBackground = "#EFF6FF";

  if (category.includes("emergency")) {
    icon = "shield-check-outline";
  } else if (category.includes("travel") || category.includes("vacation")) {
    icon = "airplane";
    iconColor = "#7C3AED";
    iconBackground = "#F5F3FF";
  } else if (category.includes("car")) {
    icon = "car-outline";
    iconColor = "#D97706";
    iconBackground = "#FFFBEB";
  } else if (category.includes("home")) {
    icon = "home-outline";
  } else if (category.includes("education")) {
    icon = "school-outline";
  }

  const target = Math.max(
    0,
    Number(item.targetAmount ?? item.target_amount ?? item.target ?? 0)
  );
  const saved = Math.max(
    0,
    Number(item.savedAmount ?? item.saved_amount ?? item.saved ?? item.currentAmount ?? 0)
  );

  const targetDate = item.targetDate ?? item.target_date ?? item.deadline;

  let deadline = "No deadline";
  if (targetDate) {
    const parsed = new Date(targetDate);
    deadline = Number.isNaN(parsed.getTime())
      ? String(targetDate)
      : parsed.toLocaleDateString("en-IN", {
          month: "short",
          year: "numeric",
        });
  }

  return {
    id: String(item.id ?? item.goal_id ?? index + 1),
    title,
    subtitle: String(item.description ?? item.subtitle ?? item.note ?? "Financial goal"),
    target,
    saved,
    monthlyContribution: Math.max(
      0,
      Number(item.monthlyContribution ?? item.monthly_contribution ?? item.monthlyRequired ?? 0)
    ),
    deadline,
    icon,
    iconColor,
    iconBackground,
    status: String(item.status ?? "Active"),
  };
}

function extractGoals(response: any): any[] {
  if (Array.isArray(response)) return response;
  if (Array.isArray(response?.goals)) return response.goals;
  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response?.items)) return response.items;
  return [];
}

export default function GoalsScreen() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const loadGoals = useCallback(async () => {
    setLoading(true);
    setLoadError("");

    try {
      const response = await goalService.getGoals();
      setGoals(extractGoals(response).map(normalizeGoal));
    } catch (error) {
      console.error("Failed to load goals:", error);
      setLoadError("Couldn't load your goals. Check the backend connection and try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      let active = true;

      const fetchGoals = async () => {
        setLoading(true);
        setLoadError("");

        try {
          const response = await goalService.getGoals();

          if (active) {
            setGoals(extractGoals(response).map(normalizeGoal));
          }
        } catch (error) {
          console.error("Failed to load goals:", error);
          if (active) {
            setLoadError("Couldn't load your goals. Check the backend connection and try again.");
          }
        } finally {
          if (active) setLoading(false);
        }
      };

      fetchGoals();
      return () => {
        active = false;
      };
    }, [])
  );

  const totalSaved = goals.reduce((sum, goal) => sum + goal.saved, 0);
  const totalTarget = goals.reduce((sum, goal) => sum + goal.target, 0);
  const totalMonthly = goals.reduce(
    (sum, goal) => sum + goal.monthlyContribution,
    0
  );
  const overallProgress =
    totalTarget > 0
      ? Math.min(100, Math.round((totalSaved / totalTarget) * 100))
      : 0;

  const activeGoals = goals.filter(
    (goal) => !["completed", "paused"].includes(goal.status.toLowerCase())
  );

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

      <SafeAreaView style={styles.container} edges={["top"]}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.headerButton}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={22} color="#0F172A" />
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>Goals & Planning</Text>
            <Text style={styles.headerSubtitle}>Build your financial future</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.addHeaderButton}
            onPress={() => router.push("/add-goal" as any)}
          >
            <Ionicons name="add" size={22} color="#2563EB" />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.heroCard}>
            <View style={styles.heroGlowOne} />
            <View style={styles.heroGlowTwo} />

            <View style={styles.heroTop}>
              <View>
                <Text style={styles.heroLabel}>TOTAL SAVED TOWARD GOALS</Text>
                <Text style={styles.heroValue}>{formatCurrency(totalSaved)}</Text>
              </View>

              <View style={styles.progressBadge}>
                <MaterialCommunityIcons
                  name="trending-up"
                  size={14}
                  color="#BBF7D0"
                />
                <Text style={styles.progressBadgeText}>{overallProgress}%</Text>
              </View>
            </View>

            <Text style={styles.heroDescription}>
              Track your savings progress and work toward your financial goals.
            </Text>

            <View style={styles.heroProgressTrack}>
              <View
                style={[
                  styles.heroProgressFill,
                  { width: `${overallProgress}%` },
                ]}
              />
            </View>

            <View style={styles.heroBottom}>
              <View style={styles.heroMetric}>
                <Text style={styles.heroMetricLabel}>TARGET</Text>
                <Text style={styles.heroMetricValue}>
                  {formatCurrency(totalTarget)}
                </Text>
              </View>

              <View style={styles.heroDivider} />

              <View style={styles.heroMetric}>
                <Text style={styles.heroMetricLabel}>MONTHLY</Text>
                <Text style={styles.heroMetricValue}>
                  {formatCurrency(totalMonthly)}
                </Text>
              </View>

              <View style={styles.heroDivider} />

              <View style={styles.heroMetric}>
                <Text style={styles.heroMetricLabel}>ACTIVE GOALS</Text>
                <Text style={styles.heroMetricValue}>{activeGoals.length}</Text>
              </View>
            </View>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Active Goals</Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push("/add-goal" as any)}
            >
              <Text style={styles.addGoalText}>+ Add Goal</Text>
            </TouchableOpacity>
          </View>

          {loading && (
            <View style={{ padding: 24, alignItems: "center" }}>
              <ActivityIndicator size="small" color="#2563EB" />
              <Text style={{ marginTop: 8, color: "#64748B" }}>
                Loading goals...
              </Text>
            </View>
          )}

          {!loading && !!loadError && (
            <View style={styles.aiCard}>
              <Text style={styles.aiTitle}>Unable to load goals</Text>
              <Text style={styles.aiDescription}>{loadError}</Text>
              <TouchableOpacity onPress={loadGoals} style={{ marginTop: 12 }}>
                <Text style={{ color: "#2563EB", fontWeight: "600" }}>
                  Try again
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {!loading && !loadError && goals.length === 0 && (
            <View style={styles.aiCard}>
              <Text style={styles.aiTitle}>No goals yet</Text>
              <Text style={styles.aiDescription}>
                Create a financial goal to start tracking your progress.
              </Text>
            </View>
          )}

          {!loading &&
            !loadError &&
            goals.map((goal) => (
              <TouchableOpacity
                key={goal.id}
                activeOpacity={0.82}
                style={styles.goalCard}
                onPress={() =>
                  router.push({
                    pathname: "/goal-details" as any,
                    params: {
                      id: goal.id,
                      title: goal.title,
                      target: String(goal.target),
                      saved: String(goal.saved),
                      monthly: String(goal.monthlyContribution),
                      deadline: goal.deadline,
                    },
                  })
                }
              >
                <View style={styles.goalTop}>
                  <View
                    style={[
                      styles.goalIcon,
                      { backgroundColor: goal.iconBackground },
                    ]}
                  >
                    <MaterialCommunityIcons
                      name={goal.icon}
                      size={24}
                      color={goal.iconColor}
                    />
                  </View>

                  <View style={styles.goalContent}>
                    <Text style={styles.goalTitle}>{goal.title}</Text>
                    <Text style={styles.goalSubtitle}>{goal.subtitle}</Text>
                  </View>

                  <View style={styles.goalPercentage}>
                    <Text style={styles.goalPercentageValue}>
                      {goal.target > 0
                        ? Math.round((goal.saved / goal.target) * 100)
                        : 0}%
                    </Text>
                    <Text style={styles.goalPercentageLabel}>COMPLETE</Text>
                  </View>
                </View>

                <View style={styles.goalAmountRow}>
                  <View>
                    <Text style={styles.goalSavedLabel}>SAVED</Text>
                    <Text style={styles.goalSavedValue}>
                      {formatCurrency(goal.saved)}
                    </Text>
                  </View>

                  <View style={styles.goalTargetArea}>
                    <Text style={styles.goalSavedLabel}>TARGET</Text>
                    <Text style={styles.goalTargetValue}>
                      {formatCurrency(goal.target)}
                    </Text>
                  </View>
                </View>

                <View style={styles.goalProgressTrack}>
                  <View
                    style={[
                      styles.goalProgressFill,
                      {
                        width: `${
                          goal.target > 0
                            ? Math.min(100, (goal.saved / goal.target) * 100)
                            : 0
                        }%`,
                        backgroundColor: goal.iconColor,
                      },
                    ]}
                  />
                </View>

                <View style={styles.goalFooter}>
                  <View style={styles.goalFooterItem}>
                    <MaterialCommunityIcons
                      name="calendar-month-outline"
                      size={13}
                      color="#64748B"
                    />
                    <Text style={styles.goalFooterText}>{goal.deadline}</Text>
                  </View>

                  <View style={styles.goalFooterItem}>
                    <MaterialCommunityIcons
                      name="cash-plus"
                      size={13}
                      color="#64748B"
                    />
                    <Text style={styles.goalFooterText}>
                      {formatCurrency(goal.monthlyContribution)}/mo
                    </Text>
                  </View>

                  <View style={styles.onTrackSmall}>
                    <View style={styles.onTrackDot} />
                    <Text style={styles.onTrackSmallText}>
                      {goal.status.toUpperCase()}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}

          <View style={styles.footer}>
            <MaterialCommunityIcons
              name="shield-check-outline"
              size={12}
              color="#94A3B8"
            />
            <Text style={styles.footerText}>
              Your financial goals are loaded from your saved records.
            </Text>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
