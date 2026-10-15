import React from "react";

import {
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import styles from "./styles";

type Props = {
  value: string;
  onChangeText: (value: string) => void;
  onSend: () => void;
};

export default function MessageInput({
  value,
  onChangeText,
  onSend,
}: Props) {
  const hasMessage = value.trim().length > 0;

  return (
    <View style={styles.messageInputWrapper}>
      <View style={styles.inputSparkle}>
        <MaterialCommunityIcons
          name="creation"
          size={18}
          color="#7C3AED"
        />
      </View>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Ask Twin anything..."
        placeholderTextColor="#94A3B8"
        style={styles.messageInput}
        returnKeyType="send"
        onSubmitEditing={onSend}
      />

      <TouchableOpacity
        activeOpacity={0.8}
        disabled={!hasMessage}
        style={[
          styles.sendButton,
          !hasMessage &&
            styles.sendButtonDisabled,
        ]}
        onPress={onSend}
      >
        <Ionicons
          name="arrow-up"
          size={19}
          color={
            hasMessage
              ? "#FFFFFF"
              : "#94A3B8"
          }
        />
      </TouchableOpacity>
    </View>
  );
}