import React, { useState } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

import AIHeader from "./AIHeader";
import AIInsightCard from "./AIInsightCard";
import SuggestionChip from "./SuggestionChip";
import MessageInput from "./MessageInput";

import styles from "./styles";

type QuickPrompt = {
  id: string;
  title: string;
  subtitle: string;
  icon:
    | "chart-line"
    | "shield-search"
    | "finance"
    | "piggy-bank-outline";
  prompt: string;
};

const quickPrompts: QuickPrompt[] = [
  {
    id: "spending",
    title: "Analyse Spending",
    subtitle: "Find where your money goes",
    icon: "chart-line",
    prompt: "Analyse my spending this month",
  },
  {
    id: "fraud",
    title: "Check Transaction",
    subtitle: "Analyse suspicious activity",
    icon: "shield-search",
    prompt: "Check my recent transactions for suspicious activity",
  },
  {
    id: "invest",
    title: "Investment Ideas",
    subtitle: "AI-powered opportunities",
    icon: "finance",
    prompt: "Where should I invest ₹10,000?",
  },
  {
    id: "saving",
    title: "Savings Plan",
    subtitle: "Reach your goals faster",
    icon: "piggy-bank-outline",
    prompt: "Help me create a savings plan",
  },
];

export default function AIAssistantScreen() {
  const [message, setMessage] = useState("");

  const openChat = (prompt?: string) => {
    router.push({
      pathname: "/ai/chat",
      params: prompt
        ? {
            prompt,
          }
        : {},
    } as any);
  };

  const handleSend = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    openChat(trimmedMessage);

    setMessage("");
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
        <AIHeader />

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.content}
        >
          {/* HERO */}

          <View style={styles.heroSection}>
            <View style={styles.aiOrbOuter}>
              <LinearGradient
                colors={[
                  "#2563EB",
                  "#4F46E5",
                  "#7C3AED",
                ]}
                style={styles.aiOrb}
              >
                <MaterialCommunityIcons
                  name="creation"
                  size={38}
                  color="#FFFFFF"
                />
              </LinearGradient>

              <View style={styles.onlineDot} />
            </View>

            <Text style={styles.greeting}>
              Good Morning, Shaurya 👋
            </Text>

            <Text style={styles.heroTitle}>
              Your finances look healthy today.
            </Text>

            <Text style={styles.heroDescription}>
              I've analysed your spending, savings,
              investments and security activity.
            </Text>
          </View>

          {/* FINANCIAL HEALTH */}

          <LinearGradient
            colors={[
              "#2563EB",
              "#3B5EF5",
              "#4F46E5",
            ]}
            start={{
              x: 0,
              y: 0,
            }}
            end={{
              x: 1,
              y: 1,
            }}
            style={styles.healthCard}
          >
            <View style={styles.healthTop}>
              <View>
                <Text style={styles.healthLabel}>
                  TWIN FINANCIAL HEALTH
                </Text>

                <Text style={styles.healthTitle}>
                  Excellent
                </Text>
              </View>

              <View style={styles.healthScoreCircle}>
                <Text style={styles.healthScore}>
                  92
                </Text>

                <Text style={styles.healthScoreOutOf}>
                  /100
                </Text>
              </View>
            </View>

            <View style={styles.healthProgressBackground}>
              <View style={styles.healthProgressFill} />
            </View>

            <View style={styles.healthMetrics}>
              <HealthMetric
                icon="trending-up"
                label="Savings"
                value="+18%"
              />

              <View style={styles.metricDivider} />

              <HealthMetric
                icon="shield-checkmark"
                label="Risk"
                value="Low"
              />

              <View style={styles.metricDivider} />

              <HealthMetric
                icon="analytics"
                label="Spending"
                value="-12%"
              />
            </View>
          </LinearGradient>

          {/* TODAY'S INSIGHT */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Today's Insight
            </Text>

            <View style={styles.aiGeneratedBadge}>
              <MaterialCommunityIcons
                name="creation"
                size={12}
                color="#7C3AED"
              />

              <Text style={styles.aiGeneratedText}>
                TWIN AI
              </Text>
            </View>
          </View>

          <AIInsightCard
            title="You're saving smarter"
            description="Your savings are 18% higher than last month. At this pace, you could save an additional ₹24,600 this year."
            actionText="Explore Insight"
            onPress={() =>
              openChat(
                "Explain why my savings increased this month"
              )
            }
          />

          {/* INTELLIGENCE SUMMARY */}

          <View style={styles.intelligenceRow}>
            <View style={styles.intelligenceCard}>
              <View
                style={[
                  styles.intelligenceIcon,
                  styles.greenIconBackground,
                ]}
              >
                <Ionicons
                  name="arrow-down"
                  size={17}
                  color="#16A34A"
                />
              </View>

              <Text style={styles.intelligenceValue}>
                12%
              </Text>

              <Text style={styles.intelligenceLabel}>
                Spending Down
              </Text>
            </View>

            <View style={styles.intelligenceCard}>
              <View
                style={[
                  styles.intelligenceIcon,
                  styles.blueIconBackground,
                ]}
              >
                <MaterialCommunityIcons
                  name="shield-check"
                  size={18}
                  color="#2563EB"
                />
              </View>

              <Text style={styles.intelligenceValue}>
                Low
              </Text>

              <Text style={styles.intelligenceLabel}>
                Fraud Risk
              </Text>
            </View>

            <View style={styles.intelligenceCard}>
              <View
                style={[
                  styles.intelligenceIcon,
                  styles.purpleIconBackground,
                ]}
              >
                <MaterialCommunityIcons
                  name="chart-line"
                  size={18}
                  color="#7C3AED"
                />
              </View>

              <Text style={styles.intelligenceValue}>
                +5.7%
              </Text>

              <Text style={styles.intelligenceLabel}>
                Wealth Growth
              </Text>
            </View>
          </View>

          {/* ASK TWIN */}

          <View style={styles.askHeader}>
            <View>
              <Text style={styles.sectionTitle}>
                Ask Twin
              </Text>

              <Text style={styles.askSubtitle}>
                What would you like to understand?
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => openChat()}
            >
              <Text style={styles.openChat}>
                Open Chat
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.promptGrid}>
            {quickPrompts.map((item) => (
              <SuggestionChip
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
                onPress={() =>
                  openChat(item.prompt)
                }
              />
            ))}
          </View>

          {/* PROACTIVE INSIGHT */}

          <View style={styles.proactiveCard}>
            <View style={styles.proactiveHeader}>
              <View style={styles.proactiveIcon}>
                <MaterialCommunityIcons
                  name="lightbulb-on-outline"
                  size={21}
                  color="#F59E0B"
                />
              </View>

              <View style={styles.proactiveHeading}>
                <Text style={styles.proactiveTitle}>
                  Twin noticed something
                </Text>

                <Text style={styles.proactiveTime}>
                  Just now
                </Text>
              </View>
            </View>

            <Text style={styles.proactiveText}>
              Your food delivery spending increased
              this week. Reducing it by ₹800 could
              keep your monthly savings goal ahead of
              schedule.
            </Text>

            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.proactiveAction}
              onPress={() =>
                openChat(
                  "Show me how my food spending changed this week"
                )
              }
            >
              <Text style={styles.proactiveActionText}>
                Analyse this
              </Text>

              <Ionicons
                name="arrow-forward"
                size={15}
                color="#2563EB"
              />
            </TouchableOpacity>
          </View>

          {/* PRIVACY */}

          <View style={styles.privacyRow}>
            <MaterialCommunityIcons
              name="shield-lock-outline"
              size={14}
              color="#64748B"
            />

            <Text style={styles.privacyText}>
              Twin uses your financial data securely
              to provide personalized insights.
            </Text>
          </View>
        </ScrollView>

        {/* INPUT */}

        <View style={styles.inputContainer}>
          <MessageInput
            value={message}
            onChangeText={setMessage}
            onSend={handleSend}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

function HealthMetric({
  icon,
  label,
  value,
}: {
  icon:
    | "trending-up"
    | "shield-checkmark"
    | "analytics";
  label: string;
  value: string;
}) {
  return (
    <View style={styles.healthMetric}>
      <Ionicons
        name={icon}
        size={15}
        color="#FFFFFF"
      />

      <Text style={styles.healthMetricValue}>
        {value}
      </Text>

      <Text style={styles.healthMetricLabel}>
        {label}
      </Text>
    </View>
  );
}