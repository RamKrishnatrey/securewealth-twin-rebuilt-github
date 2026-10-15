import React, {
  useEffect,
  useState,
} from "react";

import {
  View,
  Text,
} from "react-native";

import {
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import styles from "./chatStyles";

const states = [
  "Understanding your question...",
  "Analysing financial context...",
  "Preparing your insight...",
];

export default function ChatTypingIndicator() {
  const [index, setIndex] =
    useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setIndex((current) =>
          current ===
          states.length - 1
            ? 0
            : current + 1
        );
      },
      700
    );

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <View style={styles.aiMessageRow}>
      <View style={styles.aiAvatar}>
        <MaterialCommunityIcons
          name="creation"
          size={16}
          color="#FFFFFF"
        />
      </View>

      <View
        style={styles.typingBubble}
      >
        <View style={styles.typingDots}>
          <View
            style={styles.typingDot}
          />

          <View
            style={styles.typingDot}
          />

          <View
            style={styles.typingDot}
          />
        </View>

        <Text
          style={styles.typingText}
        >
          {states[index]}
        </Text>
      </View>
    </View>
  );
}