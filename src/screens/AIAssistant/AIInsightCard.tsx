import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import styles from "./styles";

type Props = {
  title: string;
  description: string;
  actionText: string;
  onPress: () => void;
};

export default function AIInsightCard({
  title,
  description,
  actionText,
  onPress,
}: Props) {
  return (
    <View style={styles.insightCard}>
      <View style={styles.insightTop}>
        <View style={styles.insightIcon}>
          <MaterialCommunityIcons
            name="chart-timeline-variant-shimmer"
            size={23}
            color="#2563EB"
          />
        </View>

        <View style={styles.insightContent}>
          <Text style={styles.insightTitle}>
            {title}
          </Text>

          <Text style={styles.insightDescription}>
            {description}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.75}
        style={styles.insightAction}
        onPress={onPress}
      >
        <Text style={styles.insightActionText}>
          {actionText}
        </Text>

        <Ionicons
          name="arrow-forward"
          size={15}
          color="#2563EB"
        />
      </TouchableOpacity>
    </View>
  );
}