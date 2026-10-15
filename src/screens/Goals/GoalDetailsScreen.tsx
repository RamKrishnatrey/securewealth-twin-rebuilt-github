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

import {
  router,
  useLocalSearchParams,
} from "expo-router";

import styles from "./goalDetailsStyles";

/* =========================
   HELPERS
========================= */

const formatCurrency = (amount: number) =>
  `₹${amount.toLocaleString("en-IN")}`;

/* =========================
   SCREEN
========================= */

export default function GoalDetailsScreen() {
  const params = useLocalSearchParams<{
    id?: string;
    title?: string;
    target?: string;
    saved?: string;
    monthly?: string;
    deadline?: string;
  }>();

  const title =
    typeof params.title === "string"
      ? params.title
      : "Emergency Fund";

  const target =
    Number(params.target) || 300000;

  const saved =
    Number(params.saved) || 186000;

  const monthly =
    Number(params.monthly) || 12000;

  const deadline =
    typeof params.deadline === "string"
      ? params.deadline
      : "Dec 2026";

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
      ? Math.ceil(remaining / monthly)
      : 0;

  const optimizedMonthly =
    monthly + 3000;

  const optimizedMonths =
    optimizedMonthly > 0
      ? Math.ceil(
          remaining / optimizedMonthly
        )
      : 0;

  const monthsSaved = Math.max(
    monthsRemaining - optimizedMonths,
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
              Goal Details
            </Text>

            <Text
              style={styles.headerSubtitle}
            >
              Twin-powered planning
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
              GOAL HERO
          ===================== */}

          <View style={styles.heroCard}>
            <View style={styles.heroGlowOne} />

            <View style={styles.heroGlowTwo} />

            <View style={styles.heroTop}>
              <View style={styles.goalIcon}>
                <MaterialCommunityIcons
                  name="shield-check-outline"
                  size={28}
                  color="#FFFFFF"
                />
              </View>

              <View
                style={
                  styles.statusBadge
                }
              >
                <View
                  style={styles.statusDot}
                />

                <Text
                  style={
                    styles.statusText
                  }
                >
                  ON TRACK
                </Text>
              </View>
            </View>

            <Text style={styles.goalTitle}>
              {title}
            </Text>

            <Text
              style={styles.goalDescription}
            >
              Your savings are progressing
              consistently toward this financial
              goal.
            </Text>

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
                GOAL PROGRESS
              </Text>

              <Text
                style={
                  styles.progressPercentage
                }
              >
                {progress}%
              </Text>
            </View>

            <View
              style={styles.progressTrack}
            >
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${progress}%`,
                  },
                ]}
              />
            </View>

            <View
              style={styles.heroAmounts}
            >
              <View>
                <Text
                  style={
                    styles.heroAmountLabel
                  }
                >
                  SAVED
                </Text>

                <Text
                  style={
                    styles.heroAmountValue
                  }
                >
                  {formatCurrency(saved)}
                </Text>
              </View>

              <View
                style={
                  styles.heroAmountRight
                }
              >
                <Text
                  style={
                    styles.heroAmountLabel
                  }
                >
                  TARGET
                </Text>

                <Text
                  style={
                    styles.heroAmountValue
                  }
                >
                  {formatCurrency(target)}
                </Text>
              </View>
            </View>
          </View>

          {/* =====================
              OVERVIEW
          ===================== */}

          <Text style={styles.sectionTitle}>
            Goal Overview
          </Text>

          <View
            style={styles.overviewGrid}
          >
            <OverviewCard
              icon="cash-plus"
              label="MONTHLY"
              value={formatCurrency(monthly)}
              subtitle="Contribution"
              iconColor="#2563EB"
              iconBackground="#EFF6FF"
            />

            <OverviewCard
              icon="calendar-month-outline"
              label="TARGET DATE"
              value={deadline}
              subtitle="Planned"
              iconColor="#7C3AED"
              iconBackground="#F5F3FF"
            />

            <OverviewCard
              icon="wallet-outline"
              label="REMAINING"
              value={formatCurrency(
                remaining
              )}
              subtitle="To achieve"
              iconColor="#D97706"
              iconBackground="#FFFBEB"
            />

            <OverviewCard
              icon="timer-sand"
              label="ESTIMATED"
              value={`${monthsRemaining} mo`}
              subtitle="At current pace"
              iconColor="#16A34A"
              iconBackground="#F0FDF4"
            />
          </View>

          {/* =====================
              TWIN AI
          ===================== */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Twin AI Optimization
            </Text>

            <View style={styles.aiBadge}>
              <MaterialCommunityIcons
                name="creation"
                size={11}
                color="#7C3AED"
              />

              <Text
                style={styles.aiBadgeText}
              >
                PERSONALIZED
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
                  Reach this goal faster
                </Text>

                <Text
                  style={styles.aiSubtitle}
                >
                  Twin found a safe optimization
                </Text>
              </View>

              <View
                style={
                  styles.confidenceBadge
                }
              >
                <Text
                  style={
                    styles.confidenceBadgeText
                  }
                >
                  94%
                </Text>
              </View>
            </View>

            <Text
              style={styles.aiDescription}
            >
              Based on your recent savings and
              spending pattern, you could increase
              your monthly contribution by ₹3,000
              while maintaining your current
              financial safety margin.
            </Text>

            <View
              style={
                styles.optimizationBox
              }
            >
              <View>
                <Text
                  style={
                    styles.optimizationLabel
                  }
                >
                  CURRENT
                </Text>

                <Text
                  style={
                    styles.optimizationOldValue
                  }
                >
                  {formatCurrency(monthly)}
                </Text>
              </View>

              <Ionicons
                name="arrow-forward"
                size={19}
                color="#94A3B8"
              />

              <View>
                <Text
                  style={
                    styles.optimizationLabel
                  }
                >
                  RECOMMENDED
                </Text>

                <Text
                  style={
                    styles.optimizationNewValue
                  }
                >
                  {formatCurrency(
                    optimizedMonthly
                  )}
                </Text>
              </View>
            </View>

            <View style={styles.impactBox}>
              <View
                style={
                  styles.impactIcon
                }
              >
                <Ionicons
                  name="flash"
                  size={18}
                  color="#16A34A"
                />
              </View>

              <View
                style={
                  styles.impactContent
                }
              >
                <Text
                  style={styles.impactTitle}
                >
                  Optimization impact
                </Text>

                <Text
                  style={
                    styles.impactDescription
                  }
                >
                  You could reach this goal
                  {monthsSaved > 0
                    ? ` approximately ${monthsSaved} month${
                        monthsSaved > 1
                          ? "s"
                          : ""
                      } earlier.`
                    : " sooner with a higher monthly contribution."}
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
                94%
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
              MILESTONES
          ===================== */}

          <Text style={styles.sectionTitle}>
            Goal Milestones
          </Text>

          <View
            style={styles.milestoneCard}
          >
            <Milestone
              percentage="25%"
              title="Foundation"
              amount={target * 0.25}
              complete={progress >= 25}
              first
            />

            <Milestone
              percentage="50%"
              title="Halfway"
              amount={target * 0.5}
              complete={progress >= 50}
            />

            <Milestone
              percentage="75%"
              title="Final Stretch"
              amount={target * 0.75}
              complete={progress >= 75}
            />

            <Milestone
              percentage="100%"
              title="Goal Achieved"
              amount={target}
              complete={progress >= 100}
              last
            />
          </View>

          {/* =====================
              CONTRIBUTION
          ===================== */}

          <Text style={styles.sectionTitle}>
            Monthly Contribution
          </Text>

          <View
            style={
              styles.contributionCard
            }
          >
            <View
              style={
                styles.contributionIcon
              }
            >
              <MaterialCommunityIcons
                name="calendar-sync-outline"
                size={23}
                color="#2563EB"
              />
            </View>

            <View
              style={
                styles.contributionContent
              }
            >
              <Text
                style={
                  styles.contributionLabel
                }
              >
                CURRENT MONTHLY PLAN
              </Text>

              <Text
                style={
                  styles.contributionValue
                }
              >
                {formatCurrency(monthly)}
              </Text>

              <Text
                style={
                  styles.contributionDescription
                }
              >
                Included in your monthly wealth
                allocation
              </Text>
            </View>

            <View
              style={
                styles.activeBadge
              }
            >
              <View
                style={
                  styles.activeDot
                }
              />

              <Text
                style={
                  styles.activeText
                }
              >
                ACTIVE
              </Text>
            </View>
          </View>

          {/* =====================
              ACTIVITY
          ===================== */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Recent Activity
            </Text>

            <TouchableOpacity>
              <Text style={styles.seeAll}>
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.activityCard}>
            <ActivityRow
              icon="arrow-down"
              title="Monthly contribution"
              date="01 Aug 2026"
              amount={`+${formatCurrency(
                monthly
              )}`}
              first
            />

            <ActivityRow
              icon="sparkles"
              title="Twin optimization"
              date="28 Jul 2026"
              amount="Plan updated"
            />

            <ActivityRow
              icon="checkmark"
              title="Milestone reached"
              date="12 Jul 2026"
              amount="50% complete"
              last
            />
          </View>

          {/* =====================
              UPDATE CTA
          ===================== */}

          <TouchableOpacity
  activeOpacity={0.84}
  style={styles.updateButton}
  onPress={() =>
    router.push({
      pathname: "/edit-goal" as any,
      params: {
        id: params.id,
        title,
        target: String(target),
        saved: String(saved),
        monthly: String(monthly),
        deadline,
      },
    })
  }
>
            <View>
              <Text
                style={
                  styles.updateButtonTitle
                }
              >
                Update Goal
              </Text>

              <Text
                style={
                  styles.updateButtonSubtitle
                }
              >
                Adjust target, timeline or
                contribution
              </Text>
            </View>

            <View
              style={
                styles.updateButtonArrow
              }
            >
              <Ionicons
                name="arrow-forward"
                size={18}
                color="#2563EB"
              />
            </View>
          </TouchableOpacity>

          <View style={styles.footer}>
            <MaterialCommunityIcons
              name="creation"
              size={12}
              color="#94A3B8"
            />

            <Text style={styles.footerText}>
              Goal intelligence powered by Twin AI
            </Text>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

/* =========================
   OVERVIEW CARD
========================= */

function OverviewCard({
  icon,
  label,
  value,
  subtitle,
  iconColor,
  iconBackground,
}: {
  icon: React.ComponentProps<
    typeof MaterialCommunityIcons
  >["name"];
  label: string;
  value: string;
  subtitle: string;
  iconColor: string;
  iconBackground: string;
}) {
  return (
    <View style={styles.overviewCard}>
      <View
        style={[
          styles.overviewIcon,
          {
            backgroundColor:
              iconBackground,
          },
        ]}
      >
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={iconColor}
        />
      </View>

      <Text style={styles.overviewLabel}>
        {label}
      </Text>

      <Text style={styles.overviewValue}>
        {value}
      </Text>

      <Text
        style={styles.overviewSubtitle}
      >
        {subtitle}
      </Text>
    </View>
  );
}

/* =========================
   MILESTONE
========================= */

function Milestone({
  percentage,
  title,
  amount,
  complete,
  first = false,
  last = false,
}: {
  percentage: string;
  title: string;
  amount: number;
  complete: boolean;
  first?: boolean;
  last?: boolean;
}) {
  return (
    <View style={styles.milestoneRow}>
      <View
        style={
          styles.milestoneTimeline
        }
      >
        {!first && (
          <View
            style={[
              styles.timelineLineTop,
              complete &&
                styles.timelineLineComplete,
            ]}
          />
        )}

        <View
          style={[
            styles.milestoneCircle,
            complete &&
              styles.milestoneCircleComplete,
          ]}
        >
          {complete ? (
            <Ionicons
              name="checkmark"
              size={12}
              color="#FFFFFF"
            />
          ) : (
            <View
              style={
                styles.milestoneInnerDot
              }
            />
          )}
        </View>

        {!last && (
          <View
            style={[
              styles.timelineLineBottom,
              complete &&
                styles.timelineLineComplete,
            ]}
          />
        )}
      </View>

      <View
        style={styles.milestoneContent}
      >
        <View
          style={styles.milestoneTop}
        >
          <View>
            <Text
              style={
                styles.milestoneTitle
              }
            >
              {title}
            </Text>

            <Text
              style={
                styles.milestoneAmount
              }
            >
              {formatCurrency(amount)}
            </Text>
          </View>

          <Text
            style={[
              styles.milestonePercentage,
              complete &&
                styles.milestonePercentageComplete,
            ]}
          >
            {percentage}
          </Text>
        </View>
      </View>
    </View>
  );
}

/* =========================
   ACTIVITY
========================= */

function ActivityRow({
  icon,
  title,
  date,
  amount,
  first = false,
  last = false,
}: {
  icon: React.ComponentProps<
    typeof Ionicons
  >["name"];
  title: string;
  date: string;
  amount: string;
  first?: boolean;
  last?: boolean;
}) {
  return (
    <View
      style={[
        styles.activityRow,
        first &&
          styles.activityRowFirst,
        last &&
          styles.activityRowLast,
      ]}
    >
      <View style={styles.activityIcon}>
        <Ionicons
          name={icon}
          size={17}
          color="#2563EB"
        />
      </View>

      <View
        style={styles.activityContent}
      >
        <Text
          style={styles.activityTitle}
        >
          {title}
        </Text>

        <Text
          style={styles.activityDate}
        >
          {date}
        </Text>
      </View>

      <Text
        style={styles.activityAmount}
      >
        {amount}
      </Text>
    </View>
  );
}