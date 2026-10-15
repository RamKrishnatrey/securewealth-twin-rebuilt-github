import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import {
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import styles from "./styles";

type MaterialIconName =
  React.ComponentProps<
    typeof MaterialCommunityIcons
  >["name"];

type Props = {
  title: string;
  subtitle: string;
  icon: MaterialIconName;
  onPress: () => void;
};

export default function SuggestionChip({
  title,
  subtitle,
  icon,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={styles.suggestionCard}
      onPress={onPress}
    >
      <View style={styles.suggestionIcon}>
        <MaterialCommunityIcons
          name={icon}
          size={21}
          color="#2563EB"
        />
      </View>

      <Text style={styles.suggestionTitle}>
        {title}
      </Text>

      <Text style={styles.suggestionSubtitle}>
        {subtitle}
      </Text>
    </TouchableOpacity>
  );
}