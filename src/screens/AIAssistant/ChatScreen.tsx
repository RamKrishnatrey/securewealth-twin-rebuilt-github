import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import {
  router,
  useLocalSearchParams,
} from "expo-router";

import ChatBubble from "./ChatBubble";
import ChatTypingIndicator from "./ChatTypingIndicator";
import MessageInput from "./MessageInput";

import {
  sendAIMessage,
} from "@/services/aiService";

import type {
  AIChatMessage,
} from "@/types/ai";

import styles from "./chatStyles";

const INITIAL_MESSAGE: AIChatMessage = {
  id: "welcome",

  role: "assistant",

  text:
    "Hi Shaurya 👋 I'm Twin, your AI financial intelligence assistant. I can analyse your spending, savings, investments and transaction security. What would you like to know?",

  time: "Now",
};

const suggestions = [
  "Analyse my spending",
  "Can I invest ₹10,000?",
  "Check my recent transactions",
];

export default function ChatScreen() {
  const params =
    useLocalSearchParams<{
      prompt?: string;
    }>();

  const scrollRef =
    useRef<ScrollView>(null);

  const initialPromptHandled =
    useRef(false);

  const [messages, setMessages] =
    useState<AIChatMessage[]>([
      INITIAL_MESSAGE,
    ]);

  const [input, setInput] =
    useState("");

  const [typing, setTyping] =
    useState(false);

  const [
    conversationId,
    setConversationId,
  ] = useState<string | undefined>();

  const [
    failedMessage,
    setFailedMessage,
  ] = useState<string | null>(null);

  useEffect(() => {
    if (
      params.prompt &&
      !initialPromptHandled.current
    ) {
      initialPromptHandled.current =
        true;

      const timer = setTimeout(() => {
        handleSend(params.prompt);
      }, 350);

      return () =>
        clearTimeout(timer);
    }
  }, [params.prompt]);

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollRef.current?.scrollToEnd({
        animated: true,
      });
    }, 120);

    return () =>
      clearTimeout(timer);
  }, [messages, typing]);

  const getTime = () => {
    return new Date().toLocaleTimeString(
      "en-IN",
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );
  };

  const handleSend = async (
    customMessage?: string
  ) => {
    const message =
      customMessage?.trim() ||
      input.trim();

    if (!message || typing) {
      return;
    }

    setFailedMessage(null);

    const userMessage: AIChatMessage = {
      id: `user-${Date.now()}`,

      role: "user",

      text: message,

      time: getTime(),
    };

    setMessages((current) => [
      ...current,
      userMessage,
    ]);

    setInput("");

    setTyping(true);

    try {
      const response =
        await sendAIMessage({
          message,
          conversationId,
        });

      if (response.conversationId) {
        setConversationId(
          response.conversationId
        );
      }

      const aiMessage: AIChatMessage = {
        id:
          response.message.id ??
          `ai-${Date.now()}`,

        role: "assistant",

        text:
          response.message.text,

        time: getTime(),

        insight:
          response.insight,
      };

      setMessages((current) => [
        ...current,
        aiMessage,
      ]);
    } catch (error: any) {
      setFailedMessage(message);

      const errorMessage: AIChatMessage = {
        id: `error-${Date.now()}`,

        role: "assistant",

        text:
          error?.message ||
          "I couldn't complete that analysis right now. Please try again.",

        time: getTime(),
      };

      setMessages((current) => [
        ...current,
        errorMessage,
      ]);
    } finally {
      setTyping(false);
    }
  };

  const retryLastMessage = () => {
    if (!failedMessage || typing) {
      return;
    }

    const message =
      failedMessage;

    setFailedMessage(null);

    /*
      Remove the error response before retrying.
    */

    setMessages((current) =>
      current.filter(
        (item) =>
          !item.id.startsWith(
            "error-"
          )
      )
    );

    handleSend(message);
  };

  const startNewChat = () => {
    setMessages([
      INITIAL_MESSAGE,
    ]);

    setConversationId(undefined);

    setFailedMessage(null);

    setInput("");

    initialPromptHandled.current = true;
  };

  const openOptions = () => {
    Alert.alert(
      "Twin AI",
      "Conversation options",
      [
        {
          text: "New Conversation",
          onPress: startNewChat,
        },

        {
          text: "Chat History",
          onPress: () =>
            router.push(
              "/ai/history" as any
            ),
        },

        {
          text: "Cancel",
          style: "cancel",
        },
      ]
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
        <KeyboardAvoidingView
          style={styles.container}
          behavior={
            Platform.OS === "ios"
              ? "padding"
              : undefined
          }
        >
          {/* HEADER */}

          <View style={styles.header}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.headerButton}
              onPress={() =>
                router.back()
              }
            >
              <Ionicons
                name="chevron-back"
                size={23}
                color="#0F172A"
              />
            </TouchableOpacity>

            <View style={styles.headerAI}>
              <View
                style={
                  styles.headerAIIcon
                }
              >
                <MaterialCommunityIcons
                  name="creation"
                  size={19}
                  color="#FFFFFF"
                />

                <View
                  style={
                    styles.headerOnlineDot
                  }
                />
              </View>

              <View>
                <View
                  style={
                    styles.headerNameRow
                  }
                >
                  <Text
                    style={
                      styles.headerName
                    }
                  >
                    Twin AI
                  </Text>

                  <View
                    style={
                      styles.headerLiveBadge
                    }
                  >
                    <Text
                      style={
                        styles.headerLiveText
                      }
                    >
                      LIVE
                    </Text>
                  </View>
                </View>

                <Text
                  style={
                    styles.headerStatus
                  }
                >
                  Financial Intelligence
                </Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.headerButton}
              onPress={openOptions}
            >
              <Ionicons
                name="ellipsis-horizontal"
                size={21}
                color="#0F172A"
              />
            </TouchableOpacity>
          </View>

          {/* SECURITY */}

          <View
            style={styles.securityStrip}
          >
            <MaterialCommunityIcons
              name="shield-check"
              size={14}
              color="#16A34A"
            />

            <Text
              style={
                styles.securityStripText
              }
            >
              Secure financial conversation
            </Text>

            <View
              style={
                styles.securityStripDot
              }
            />

            <Text
              style={
                styles.securityStripText
              }
            >
              Context aware
            </Text>
          </View>

          {/* CHAT */}

          <ScrollView
            ref={scrollRef}
            style={styles.chat}
            contentContainerStyle={
              styles.chatContent
            }
            showsVerticalScrollIndicator={
              false
            }
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.dateRow}>
              <View
                style={styles.dateLine}
              />

              <Text
                style={styles.dateText}
              >
                TODAY
              </Text>

              <View
                style={styles.dateLine}
              />
            </View>

            {messages.map(
              (message) => (
                <ChatBubble
                  key={message.id}
                  message={message}
                />
              )
            )}

            {typing && (
              <ChatTypingIndicator />
            )}

            {failedMessage &&
              !typing && (
                <TouchableOpacity
                  activeOpacity={0.75}
                  style={
                    styles.retryButton
                  }
                  onPress={
                    retryLastMessage
                  }
                >
                  <Ionicons
                    name="refresh"
                    size={15}
                    color="#DC2626"
                  />

                  <Text
                    style={
                      styles.retryText
                    }
                  >
                    Retry last request
                  </Text>
                </TouchableOpacity>
              )}

            {!typing &&
              messages.length <= 2 &&
              !failedMessage && (
                <View
                  style={
                    styles.suggestions
                  }
                >
                  <Text
                    style={
                      styles.suggestionLabel
                    }
                  >
                    TRY ASKING
                  </Text>

                  {suggestions.map(
                    (suggestion) => (
                      <TouchableOpacity
                        key={suggestion}
                        activeOpacity={0.75}
                        style={
                          styles.suggestionChip
                        }
                        onPress={() =>
                          handleSend(
                            suggestion
                          )
                        }
                      >
                        <MaterialCommunityIcons
                          name="creation"
                          size={13}
                          color="#7C3AED"
                        />

                        <Text
                          style={
                            styles.suggestionText
                          }
                        >
                          {suggestion}
                        </Text>

                        <Ionicons
                          name="arrow-forward"
                          size={13}
                          color="#64748B"
                        />
                      </TouchableOpacity>
                    )
                  )}
                </View>
              )}

            <View
              style={
                styles.chatBottomSpace
              }
            />
          </ScrollView>

          {/* INPUT */}

          <View style={styles.inputArea}>
            <MessageInput
              value={input}
              onChangeText={setInput}
              onSend={() =>
                handleSend()
              }
            />

            <View
              style={styles.inputFooter}
            >
              <MaterialCommunityIcons
                name="shield-lock-outline"
                size={11}
                color="#94A3B8"
              />

              <Text
                style={
                  styles.inputFooterText
                }
              >
                Twin may make mistakes.
                Review important financial
                decisions.
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}