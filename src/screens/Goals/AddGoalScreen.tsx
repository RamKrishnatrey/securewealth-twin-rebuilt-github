import React, { useMemo, useState } from "react";

import { goalService } from "@/services/goalService";

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

import { router } from "expo-router";

import styles from "./addGoalStyles";

/* =========================

   TYPES

\========================= */

type GoalType = {

  id: string;

  title: string;

  icon: React.ComponentProps<

    typeof MaterialCommunityIcons

  >["name"];

};

type DateOption = {

  id: string;

  title: string;

  months: number;

};

/* =========================

   DATA

\========================= */

const goalTypes: GoalType[] = [

  {

    id: "emergency",

    title: "Emergency",

    icon: "shield-check-outline",

  },

  {

    id: "travel",

    title: "Travel",

    icon: "airplane",

  },

  {

    id: "car",

    title: "Car",

    icon: "car-outline",

  },

  {

    id: "home",

    title: "Home",

    icon: "home-outline",

  },

  {

    id: "education",

    title: "Education",

    icon: "school-outline",

  },

  {

    id: "custom",

    title: "Custom",

    icon: "plus-circle-outline",

  },

];

const dateOptions: DateOption[] = [

  {

    id: "12",

    title: "1 Year",

    months: 12,

  },

  {

    id: "24",

    title: "2 Years",

    months: 24,

  },

  {

    id: "36",

    title: "3 Years",

    months: 36,

  },

];

/* =========================

   HELPERS

\========================= */

const cleanNumber = (value: string) =>

  Number(value.replace(/[^0-9]/g, "")) || 0;

const formatCurrency = (amount: number) =>

  `₹${amount.toLocaleString("en-IN")}`;

/* =========================

   SCREEN

\========================= */

export default function AddGoalScreen() {

  const [selectedType, setSelectedType] =

    useState("car");

  const [goalName, setGoalName] =

    useState("Dream Car");

  const [targetAmount, setTargetAmount] =

    useState("800000");

  const [savedAmount, setSavedAmount] =

    useState("240000");

  const [selectedDate, setSelectedDate] =

    useState<DateOption>(dateOptions[1]);

  /* =========================

     CALCULATIONS

  ========================= */

  const calculation = useMemo(() => {

    const target =

      cleanNumber(targetAmount);

    const saved =

      cleanNumber(savedAmount);

    const remaining = Math.max(

      target - saved,

      0

    );

    const months =

      selectedDate.months;

    const monthly =

      months > 0

        ? Math.ceil(remaining / months)

        : 0;

    const progress =

      target > 0

        ? Math.min(

            Math.round(

              (saved / target) * 100

            ),

            100

          )

        : 0;

    return {

      target,

      saved,

      remaining,

      months,

      monthly,

      progress,

    };

  }, [

    targetAmount,

    savedAmount,

    selectedDate,

  ]);

  /* =========================

     CREATE GOAL

  ========================= */

const handleCreateGoal = async () => {

  const title = goalName.trim();

  const { target, saved, monthly } = calculation;

  if (!title) {

    Alert.alert("Goal name required", "Please enter a name for your goal.");

    return;

  }

  if (target <= 0) {

    Alert.alert("Invalid target", "Please enter a target amount greater than zero.");

    return;

  }

  if (saved > target) {

    Alert.alert("Invalid savings", "Your saved amount cannot exceed your target.");

    return;

  }

  try {

    const deadline = new Date();

    deadline.setMonth(deadline.getMonth() + selectedDate.months);

    await goalService.createGoal({

      title,

      subtitle: `${selectedType.charAt(0).toUpperCase()}${selectedType.slice(1)} goal`,

      target,

      saved,

      monthly_contribution: monthly,

      deadline: deadline.toISOString().slice(0, 10),

    });

    Alert.alert("Goal created!", "Your goal has been saved successfully.", [

      {

        text: "View goals",

        onPress: () => router.replace("/goals" as any),

      },

    ]);

  } catch (error: any) {

    console.error("Failed to create goal:", error);

    Alert.alert(

      "Couldn't save goal",

      error?.response?.data?.detail ??

        "Please check your backend connection and try again."

    );

  }

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

              Create Goal

            </Text>

            <Text

              style={styles.headerSubtitle}

            >

              Twin-powered wealth planning

            </Text>

          </View>

          <View

            style={styles.headerPlaceholder}

          />

        </View>

        {/* =====================

            CONTENT

        ===================== */}

        <ScrollView

          style={styles.scrollView}

          contentContainerStyle={

            styles.content

          }

          showsVerticalScrollIndicator={false}

          keyboardShouldPersistTaps="handled"

        >

          {/* INTRO */}

          <View style={styles.introRow}>

            <View>

              <Text style={styles.pageTitle}>

                What's your next goal?

              </Text>

              <Text

                style={styles.pageSubtitle}

              >

                Set your target and Twin AI will

                build a savings plan.

              </Text>

            </View>

            <View style={styles.twinBadge}>

              <MaterialCommunityIcons

                name="creation"

                size={12}

                color="#7C3AED"

              />

              <Text

                style={styles.twinBadgeText}

              >

                TWIN AI

              </Text>

            </View>

          </View>

          {/* =====================

              GOAL TYPE

          ===================== */}

          <Text style={styles.fieldTitle}>

            Goal Type

          </Text>

          <Text style={styles.fieldHint}>

            Choose what you're saving for

          </Text>

          <View

            style={styles.goalTypeGrid}

          >

            {goalTypes.map((goal) => {

              const active =

                selectedType === goal.id;

              return (

                <TouchableOpacity

                  key={goal.id}

                  activeOpacity={0.75}

                  style={[

                    styles.goalTypeCard,

                    active &&

                      styles.goalTypeCardActive,

                  ]}

                  onPress={() =>

                    setSelectedType(goal.id)

                  }

                >

                  <View

                    style={[

                      styles.goalTypeIcon,

                      active &&

                        styles.goalTypeIconActive,

                    ]}

                  >

                    <MaterialCommunityIcons

                      name={goal.icon}

                      size={23}

                      color={

                        active

                          ? "#FFFFFF"

                          : "#64748B"

                      }

                    />

                  </View>

                  <Text

                    style={[

                      styles.goalTypeText,

                      active &&

                        styles.goalTypeTextActive,

                    ]}

                  >

                    {goal.title}

                  </Text>

                  {active && (

                    <View

                      style={

                        styles.selectedCheck

                      }

                    >

                      <Ionicons

                        name="checkmark"

                        size={10}

                        color="#FFFFFF"

                      />

                    </View>

                  )}

                </TouchableOpacity>

              );

            })}

          </View>

          {/* =====================

              GOAL DETAILS

          ===================== */}

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>

              Goal Details

            </Text>

            <Text

              style={styles.requiredText}

            >

              REQUIRED

            </Text>

          </View>

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

              placeholder="e.g. Dream Car"

              placeholderTextColor="#94A3B8"

              style={styles.input}

            />

          </View>

          {/* TARGET */}

          <Text style={styles.inputLabel}>

            TARGET AMOUNT

          </Text>

          <View

            style={styles.amountInputContainer}

          >

            <Text

              style={styles.currencySymbol}

            >

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

            {calculation.target > 0 && (

              <Text

                style={styles.amountPreview}

              >

                {formatCurrency(

                  calculation.target

                )}

              </Text>

            )}

          </View>

          {/* SAVED */}

          <Text style={styles.inputLabel}>

            ALREADY SAVED

          </Text>

          <View

            style={styles.amountInputContainer}

          >

            <Text

              style={styles.currencySymbol}

            >

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

            {calculation.saved > 0 && (

              <Text

                style={styles.amountPreview}

              >

                {formatCurrency(

                  calculation.saved

                )}

              </Text>

            )}

          </View>

          {/* PROGRESS */}

          {calculation.target > 0 && (

            <View

              style={styles.progressArea}

            >

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

                  Current progress

                </Text>

                <Text

                  style={

                    styles.progressValue

                  }

                >

                  {calculation.progress}%

                </Text>

              </View>

              <View

                style={

                  styles.progressTrack

                }

              >

                <View

                  style={[

                    styles.progressFill,

                    {

                      width: `${calculation.progress}%`,

                    },

                  ]}

                />

              </View>

            </View>

          )}

          {/* =====================

              TARGET DATE

          ===================== */}

          <Text style={styles.fieldTitle}>

            Target Timeline

          </Text>

          <Text style={styles.fieldHint}>

            When would you like to achieve it?

          </Text>

          <View style={styles.dateRow}>

            {dateOptions.map((date) => {

              const active =

                selectedDate.id === date.id;

              return (

                <TouchableOpacity

                  key={date.id}

                  activeOpacity={0.75}

                  style={[

                    styles.dateCard,

                    active &&

                      styles.dateCardActive,

                  ]}

                  onPress={() =>

                    setSelectedDate(date)

                  }

                >

                  <Text

                    style={[

                      styles.dateTitle,

                      active &&

                        styles.dateTitleActive,

                    ]}

                  >

                    {date.title}

                  </Text>

                  <Text

                    style={[

                      styles.dateMonths,

                      active &&

                        styles.dateMonthsActive,

                    ]}

                  >

                    {date.months} months

                  </Text>

                </TouchableOpacity>

              );

            })}

          </View>

          {/* =====================

              AI CALCULATION

          ===================== */}

          <View style={styles.aiCard}>

            <View style={styles.aiHeader}>

              <View style={styles.aiIcon}>

                <MaterialCommunityIcons

                  name="creation"

                  size={22}

                  color="#7C3AED"

                />

              </View>

              <View style={styles.aiHeaderText}>

                <Text style={styles.aiTitle}>

                  Twin AI Savings Plan

                </Text>

                <Text

                  style={styles.aiSubtitle}

                >

                  Calculated from your goal

                  details

                </Text>

              </View>

              <View style={styles.liveBadge}>

                <View

                  style={styles.liveDot}

                />

                <Text

                  style={styles.liveText}

                >

                  LIVE

                </Text>

              </View>

            </View>

            {/* REMAINING */}

            <View style={styles.aiStats}>

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

                    calculation.remaining

                  )}

                </Text>

              </View>

              <View style={styles.aiDivider} />

              <View style={styles.aiStat}>

                <Text

                  style={styles.aiStatLabel}

                >

                  TIME LEFT

                </Text>

                <Text

                  style={styles.aiStatValue}

                >

                  {calculation.months} months

                </Text>

              </View>

            </View>

            {/* RECOMMENDED */}

            <View

              style={

                styles.recommendedCard

              }

            >

              <View>

                <Text

                  style={

                    styles.recommendedLabel

                  }

                >

                  RECOMMENDED MONTHLY SAVING

                </Text>

                <Text

                  style={

                    styles.recommendedValue

                  }

                >

                  {formatCurrency(

                    calculation.monthly

                  )}

                </Text>

                <Text

                  style={

                    styles.recommendedSuffix

                  }

                >

                  per month

                </Text>

              </View>

              <View

                style={

                  styles.recommendedIcon

                }

              >

                <MaterialCommunityIcons

                  name="chart-line"

                  size={24}

                  color="#16A34A"

                />

              </View>

            </View>

            {/* AI MESSAGE */}

            <View

              style={styles.aiMessage}

            >

              <MaterialCommunityIcons

                name="lightbulb-on-outline"

                size={17}

                color="#D97706"

              />

              <Text

                style={styles.aiMessageText}

              >

                Twin will monitor your monthly

                progress and adjust recommendations

                when your financial behaviour

                changes.

              </Text>

            </View>

            {/* CONFIDENCE */}

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

                AI Confidence

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

              AUTO SAVE

          ===================== */}

          <View

            style={styles.autoSaveCard}

          >

            <View

              style={styles.autoSaveIcon}

            >

              <MaterialCommunityIcons

                name="calendar-sync-outline"

                size={22}

                color="#2563EB"

              />

            </View>

            <View

              style={styles.autoSaveContent}

            >

              <Text

                style={styles.autoSaveTitle}

              >

                Smart monthly planning

              </Text>

              <Text

                style={

                  styles.autoSaveDescription

                }

              >

                Your goal will automatically appear

                in your monthly wealth plan.

              </Text>

            </View>

            <Ionicons

              name="checkmark-circle"

              size={21}

              color="#22C55E"

            />

          </View>

          {/* =====================

              CREATE

          ===================== */}

          <TouchableOpacity

            activeOpacity={0.85}

            style={styles.createButton}

            onPress={handleCreateGoal}

          >

            <View>

              <Text

                style={

                  styles.createButtonTitle

                }

              >

                Create Goal

              </Text>

              <Text

                style={

                  styles.createButtonSubtitle

                }

              >

                Start building your future

              </Text>

            </View>

            <View

              style={

                styles.createArrow

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

              name="shield-check-outline"

              size={12}

              color="#94A3B8"

            />

            <Text style={styles.footerText}>

              Your financial plan is protected by

              Twin Shield

            </Text>

          </View>

          <View style={styles.bottomSpace} />

        </ScrollView>

      </SafeAreaView>

    </>

  );

}