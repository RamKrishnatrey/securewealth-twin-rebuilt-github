import React, { useState } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { router } from "expo-router";

import styles from "./styles";

type Recommendation = {
  id: string;
  name: string;
  category: string;
  returnValue: string;
  risk: "Low" | "Moderate";
  icon:
    | "chart-line"
    | "bank-outline"
    | "gold";
  iconColor: string;
  iconBackground: string;
};

const recommendations: Recommendation[] = [
  {
    id: "1",
    name: "Nifty 50 Index Fund",
    category: "Equity • Index Fund",
    returnValue: "+14.2%",
    risk: "Moderate",
    icon: "chart-line",
    iconColor: "#2563EB",
    iconBackground: "#EFF6FF",
  },
  {
    id: "2",
    name: "Short Duration Fund",
    category: "Debt • Mutual Fund",
    returnValue: "+7.8%",
    risk: "Low",
    icon: "bank-outline",
    iconColor: "#16A34A",
    iconBackground: "#F0FDF4",
  },
  {
    id: "3",
    name: "Gold Investment",
    category: "Commodity • Gold",
    returnValue: "+9.6%",
    risk: "Low",
    icon: "gold",
    iconColor: "#D97706",
    iconBackground: "#FFFBEB",
  },
];

export default function InvestmentIntelligenceScreen() {
  const [watchlisted, setWatchlisted] =
    useState<string[]>([]);

  const toggleWatchlist = (id: string) => {
    setWatchlisted((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const openInvestment = (name: string) => {
    Alert.alert(
      name,
      "Detailed investment execution will be connected during backend integration."
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
              Investment Intelligence
            </Text>

            <Text style={styles.headerSubtitle}>
              Powered by Twin AI
            </Text>
          </View>

          <TouchableOpacity
  activeOpacity={0.7}
  style={styles.headerButton}
  onPress={() =>
    router.push("/notifications" as any)
  }
>
  <Ionicons
    name="notifications-outline"
    size={22}
    color="#0F172A"
  />
</TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* PORTFOLIO HERO */}

          <View style={styles.heroCard}>
            <View style={styles.heroGlowOne} />
            <View style={styles.heroGlowTwo} />

            <View style={styles.heroTop}>
              <View>
                <Text style={styles.heroLabel}>
                  TOTAL INVESTMENTS
                </Text>

                <Text style={styles.portfolioValue}>
                  ₹2,84,650
                </Text>
              </View>

              <View style={styles.growthBadge}>
                <Ionicons
                  name="trending-up"
                  size={14}
                  color="#BBF7D0"
                />

                <Text style={styles.growthBadgeText}>
                  +12.4%
                </Text>
              </View>
            </View>

            <Text style={styles.heroCaption}>
              Your portfolio is outperforming your
              current wealth-growth target.
            </Text>

            {/* FAKE GROWTH GRAPH */}

            <View style={styles.graph}>
              <View
                style={[
                  styles.graphBar,
                  { height: 28 },
                ]}
              />

              <View
                style={[
                  styles.graphBar,
                  { height: 39 },
                ]}
              />

              <View
                style={[
                  styles.graphBar,
                  { height: 34 },
                ]}
              />

              <View
                style={[
                  styles.graphBar,
                  { height: 49 },
                ]}
              />

              <View
                style={[
                  styles.graphBar,
                  { height: 58 },
                ]}
              />

              <View
                style={[
                  styles.graphBar,
                  { height: 67 },
                ]}
              />

              <View
                style={[
                  styles.graphBar,
                  styles.graphBarActive,
                  { height: 78 },
                ]}
              />
            </View>

            <View style={styles.heroMetrics}>
              <View style={styles.heroMetric}>
                <Text style={styles.metricLabel}>
                  INVESTED
                </Text>

                <Text style={styles.metricValue}>
                  ₹2.53L
                </Text>
              </View>

              <View style={styles.metricDivider} />

              <View style={styles.heroMetric}>
                <Text style={styles.metricLabel}>
                  RETURNS
                </Text>

                <Text style={styles.metricPositive}>
                  +₹31,650
                </Text>
              </View>

              <View style={styles.metricDivider} />

              <View style={styles.heroMetric}>
                <Text style={styles.metricLabel}>
                  XIRR
                </Text>

                <Text style={styles.metricPositive}>
                  12.4%
                </Text>
              </View>
            </View>
          </View>

          {/* AI INSIGHT */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Twin AI Insight
            </Text>

            <View style={styles.aiBadge}>
              <MaterialCommunityIcons
                name="creation"
                size={11}
                color="#7C3AED"
              />

              <Text style={styles.aiBadgeText}>
                LIVE AI
              </Text>
            </View>
          </View>

          <View style={styles.aiInsightCard}>
            <View style={styles.aiInsightTop}>
              <View style={styles.aiIcon}>
                <MaterialCommunityIcons
                  name="creation"
                  size={23}
                  color="#7C3AED"
                />
              </View>

              <View style={styles.aiHeading}>
                <Text style={styles.aiTitle}>
                  Your portfolio can be optimized
                </Text>

                <Text style={styles.aiSubtitle}>
                  Personalized wealth intelligence
                </Text>
              </View>
            </View>

            <Text style={styles.aiDescription}>
              Your portfolio has strong equity exposure,
              but increasing debt allocation slightly
              could improve downside protection while
              preserving long-term growth potential.
            </Text>

            <View style={styles.recommendationBox}>
              <View style={styles.recommendationIcon}>
                <MaterialCommunityIcons
                  name="scale-balance"
                  size={20}
                  color="#2563EB"
                />
              </View>

              <View style={styles.recommendationContent}>
                <Text
                  style={styles.recommendationLabel}
                >
                  TWIN RECOMMENDATION
                </Text>

                <Text
                  style={styles.recommendationText}
                >
                  Rebalance approximately 8% toward
                  low-volatility debt assets.
                </Text>
              </View>
            </View>

            <View style={styles.confidenceHeader}>
              <Text style={styles.confidenceLabel}>
                AI Confidence
              </Text>

              <Text style={styles.confidenceValue}>
                96%
              </Text>
            </View>

            <View style={styles.confidenceTrack}>
              <View style={styles.confidenceFill} />
            </View>
          </View>

          {/* ASSET ALLOCATION */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Asset Allocation
            </Text>

            <TouchableOpacity
              activeOpacity={0.7}
            >
              <Text style={styles.seeDetails}>
                Details
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.allocationCard}>
            <View style={styles.allocationVisual}>
              <View style={styles.allocationRing}>
                <View
                  style={styles.allocationRingInner}
                >
                  <Text style={styles.allocationTotal}>
                    ₹2.85L
                  </Text>

                  <Text
                    style={styles.allocationTotalLabel}
                  >
                    PORTFOLIO
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.allocationLegend}>
              <AllocationItem
                color="#2563EB"
                title="Equity"
                value="62%"
                amount="₹1.76L"
              />

              <AllocationItem
                color="#7C3AED"
                title="Debt"
                value="23%"
                amount="₹65.5K"
              />

              <AllocationItem
                color="#D97706"
                title="Gold"
                value="10%"
                amount="₹28.4K"
              />

              <AllocationItem
                color="#16A34A"
                title="Cash"
                value="5%"
                amount="₹14.2K"
              />
            </View>
          </View>

          {/* RISK PROFILE */}

          <Text style={styles.sectionTitle}>
            Your Investment Profile
          </Text>

          <View style={styles.riskCard}>
            <View style={styles.riskTop}>
              <View style={styles.riskIcon}>
                <MaterialCommunityIcons
                  name="speedometer"
                  size={23}
                  color="#2563EB"
                />
              </View>

              <View style={styles.riskContent}>
                <Text style={styles.riskLabel}>
                  RISK PROFILE
                </Text>

                <Text style={styles.riskTitle}>
                  Moderate Growth
                </Text>
              </View>

              <View style={styles.moderateBadge}>
                <Text style={styles.moderateText}>
                  MODERATE
                </Text>
              </View>
            </View>

            <Text style={styles.riskDescription}>
              You prefer long-term growth while
              maintaining reasonable downside
              protection and portfolio stability.
            </Text>

            <View style={styles.riskScale}>
              <View style={styles.riskScaleFill} />
              <View style={styles.riskMarker} />
            </View>

            <View style={styles.riskLabels}>
              <Text style={styles.riskScaleLabel}>
                Conservative
              </Text>

              <Text style={styles.riskScaleLabel}>
                Balanced
              </Text>

              <Text style={styles.riskScaleLabel}>
                Aggressive
              </Text>
            </View>
          </View>

          {/* OPPORTUNITIES */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Recommended for You
            </Text>

            <View style={styles.personalizedBadge}>
              <MaterialCommunityIcons
                name="creation"
                size={10}
                color="#7C3AED"
              />

              <Text
                style={styles.personalizedText}
              >
                PERSONALIZED
              </Text>
            </View>
          </View>

          {recommendations.map((item) => {
            const saved =
              watchlisted.includes(item.id);

            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.82}
                style={styles.investmentCard}
                onPress={() =>
                  openInvestment(item.name)
                }
              >
                <View
                  style={[
                    styles.investmentIcon,
                    {
                      backgroundColor:
                        item.iconBackground,
                    },
                  ]}
                >
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={24}
                    color={item.iconColor}
                  />
                </View>

                <View style={styles.investmentContent}>
                  <Text style={styles.investmentName}>
                    {item.name}
                  </Text>

                  <Text
                    style={styles.investmentCategory}
                  >
                    {item.category}
                  </Text>

                  <View
                    style={styles.investmentMeta}
                  >
                    <Text
                      style={
                        styles.expectedReturnLabel
                      }
                    >
                      Historical return
                    </Text>

                    <Text
                      style={styles.expectedReturn}
                    >
                      {item.returnValue}
                    </Text>

                    <View
                      style={[
                        styles.riskBadge,
                        item.risk === "Low"
                          ? styles.lowRiskBadge
                          : styles.mediumRiskBadge,
                      ]}
                    >
                      <Text
                        style={[
                          styles.riskBadgeText,
                          item.risk === "Low"
                            ? styles.lowRiskText
                            : styles.mediumRiskText,
                        ]}
                      >
                        {item.risk}
                      </Text>
                    </View>
                  </View>
                </View>

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.bookmarkButton}
                  onPress={() =>
                    toggleWatchlist(item.id)
                  }
                >
                  <Ionicons
                    name={
                      saved
                        ? "bookmark"
                        : "bookmark-outline"
                    }
                    size={20}
                    color={
                      saved
                        ? "#2563EB"
                        : "#94A3B8"
                    }
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            );
          })}

          {/* WEALTH PROJECTION */}

          <Text style={styles.sectionTitle}>
            Wealth Projection
          </Text>

          <View style={styles.projectionCard}>
            <View style={styles.projectionHeader}>
              <View>
                <Text style={styles.projectionLabel}>
                  PROJECTED VALUE
                </Text>

                <Text style={styles.projectionValue}>
                  ₹8.7L
                </Text>

                <Text
                  style={styles.projectionTimeline}
                >
                  In 5 years
                </Text>
              </View>

              <View style={styles.projectionIcon}>
                <MaterialCommunityIcons
                  name="finance"
                  size={25}
                  color="#16A34A"
                />
              </View>
            </View>

            <View style={styles.projectionGraph}>
              <View
                style={[
                  styles.projectionBar,
                  { height: 25 },
                ]}
              />

              <View
                style={[
                  styles.projectionBar,
                  { height: 35 },
                ]}
              />

              <View
                style={[
                  styles.projectionBar,
                  { height: 47 },
                ]}
              />

              <View
                style={[
                  styles.projectionBar,
                  { height: 62 },
                ]}
              />

              <View
                style={[
                  styles.projectionBar,
                  { height: 79 },
                ]}
              />
            </View>

            <View style={styles.projectionFooter}>
              <Text
                style={styles.projectionFooterText}
              >
                Current ₹2.85L
              </Text>

              <Text
                style={styles.projectionGrowthText}
              >
                Potential +205%
              </Text>
            </View>
          </View>

          <View style={styles.disclaimer}>
            <MaterialCommunityIcons
              name="information-outline"
              size={14}
              color="#64748B"
            />

            <Text style={styles.disclaimerText}>
              Investment insights are informational.
              Market-linked investments involve risk
              and returns are not guaranteed.
            </Text>
          </View>

          <View style={styles.footer}>
            <MaterialCommunityIcons
              name="creation"
              size={12}
              color="#94A3B8"
            />

            <Text style={styles.footerText}>
              Wealth intelligence powered by Twin AI
            </Text>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

/* =========================
   ALLOCATION ITEM
========================= */

type AllocationItemProps = {
  color: string;
  title: string;
  value: string;
  amount: string;
};

function AllocationItem({
  color,
  title,
  value,
  amount,
}: AllocationItemProps) {
  return (
    <View style={styles.allocationItem}>
      <View style={styles.allocationItemLeft}>
        <View
          style={[
            styles.allocationDot,
            { backgroundColor: color },
          ]}
        />

        <View>
          <Text style={styles.allocationTitle}>
            {title}
          </Text>

          <Text style={styles.allocationAmount}>
            {amount}
          </Text>
        </View>
      </View>

      <Text style={styles.allocationPercentage}>
        {value}
      </Text>
    </View>
  );
}