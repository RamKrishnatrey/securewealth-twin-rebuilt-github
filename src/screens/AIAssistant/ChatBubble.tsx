import React from "react";

import {
  View,
  Text,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import type {
  AIChatMessage,
} from "@/types/ai";

import styles from "./chatStyles";

type Props = {
  message: AIChatMessage;
};

export default function ChatBubble({
  message,
}: Props) {
  const isUser =
    message.role === "user";

  if (isUser) {
    return (
      <View style={styles.userMessageRow}>
        <View style={styles.userBubble}>
          <Text style={styles.userText}>
            {message.text}
          </Text>

          <View
            style={
              styles.userMessageFooter
            }
          >
            <Text
              style={styles.userTime}
            >
              {message.time}
            </Text>

            <Ionicons
              name="checkmark-done"
              size={13}
              color="rgba(255,255,255,0.72)"
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.aiMessageRow}>
      {/* AI AVATAR */}

      <View style={styles.aiAvatar}>
        <MaterialCommunityIcons
          name="creation"
          size={16}
          color="#FFFFFF"
        />
      </View>

      <View style={styles.aiMessageContent}>
        <View style={styles.aiBubble}>
          <View
            style={styles.aiBubbleHeader}
          >
            <Text
              style={styles.aiBubbleName}
            >
              Twin
            </Text>

            <View
              style={styles.aiBadge}
            >
              <MaterialCommunityIcons
                name="creation"
                size={9}
                color="#7C3AED"
              />

              <Text
                style={
                  styles.aiBadgeText
                }
              >
                AI
              </Text>
            </View>
          </View>

          <Text style={styles.aiText}>
            {message.text}
          </Text>

          {message.insight && (
            <InsightCard
              insight={
                message.insight
              }
            />
          )}

          <View
            style={styles.aiFooter}
          >
            <Text
              style={styles.aiTime}
            >
              {message.time}
            </Text>

            <View
              style={
                styles.aiConfidenceMini
              }
            >
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={11}
                color="#16A34A"
              />

              <Text
                style={
                  styles.aiConfidenceMiniText
                }
              >
                Twin verified
              </Text>
            </View>
          </View>
        </View>

        {/* FEEDBACK */}

        <View
          style={styles.feedbackRow}
        >
          <Ionicons
            name="thumbs-up-outline"
            size={14}
            color="#94A3B8"
          />

          <Ionicons
            name="thumbs-down-outline"
            size={14}
            color="#94A3B8"
          />

          <Ionicons
            name="copy-outline"
            size={14}
            color="#94A3B8"
          />
        </View>
      </View>
    </View>
  );
}

function InsightCard({
  insight,
}: {
  insight: NonNullable<
  AIChatMessage["insight"]
>;
}) {
  const positive =
    insight.type === "positive";

  const warning =
    insight.type === "warning";

  const valueColor = positive
    ? "#16A34A"
    : warning
    ? "#D97706"
    : "#2563EB";

  return (
    <View style={styles.insightBox}>
      <View
        style={styles.insightBoxTop}
      >
        <View>
          <Text
            style={
              styles.insightBoxLabel
            }
          >
            {insight.title}
          </Text>

          <Text
            style={[
              styles.insightBoxValue,
              {
                color: valueColor,
              },
            ]}
          >
            {insight.value}
          </Text>

          <Text
            style={
              styles.insightBoxSubtitle
            }
          >
            {insight.subtitle}
          </Text>
        </View>

        <View
          style={
            styles.insightChartIcon
          }
        >
          <MaterialCommunityIcons
            name={
              positive
                ? "trending-up"
                : warning
                ? "alert-outline"
                : "chart-line"
            }
            size={22}
            color={valueColor}
          />
        </View>
      </View>

      {insight.confidence !==
        undefined && (
        <View
          style={
            styles.confidenceSection
          }
        >
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
              {insight.confidence}%
            </Text>
          </View>

          <View
            style={
              styles.confidenceTrack
            }
          >
            <View
              style={[
                styles.confidenceFill,
                {
                  width:
                    `${insight.confidence}%`,
                },
              ]}
            />
          </View>
        </View>
      )}
    </View>
  );
}