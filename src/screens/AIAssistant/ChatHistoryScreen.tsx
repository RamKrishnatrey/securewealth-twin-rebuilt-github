import React, {
  useCallback,
  useState,
} from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
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
  useFocusEffect,
} from "expo-router";

import {
  getAIChatHistory,
} from "@/services/aiService";

import type {
  AIHistoryItem,
} from "@/types/ai";

import styles from "./historyStyles";

export default function ChatHistoryScreen() {
  const [
    conversations,
    setConversations,
  ] = useState<AIHistoryItem[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const loadHistory = async () => {
    try {
      setLoading(true);
      setError(null);

      const response =
        await getAIChatHistory();

      setConversations(
        response.conversations
      );
    } catch (err: any) {
      setError(
        err?.message ||
          "Unable to load chat history."
      );
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadHistory();
    }, [])
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

          <View
            style={styles.headerCenter}
          >
            <Text
              style={styles.headerTitle}
            >
              Twin History
            </Text>

            <Text
              style={
                styles.headerSubtitle
              }
            >
              Previous conversations
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.newChatButton}
            onPress={() =>
              router.replace(
                "/ai/chat" as any
              )
            }
          >
            <Ionicons
              name="add"
              size={22}
              color="#2563EB"
            />
          </TouchableOpacity>
        </View>

        {/* BODY */}

        {loading ? (
          <View
            style={styles.centerState}
          >
            <ActivityIndicator
              size="large"
              color="#2563EB"
            />

            <Text
              style={
                styles.stateText
              }
            >
              Loading conversations...
            </Text>
          </View>
        ) : error ? (
          <View
            style={styles.centerState}
          >
            <View
              style={
                styles.errorIcon
              }
            >
              <Ionicons
                name="cloud-offline-outline"
                size={28}
                color="#DC2626"
              />
            </View>

            <Text
              style={
                styles.errorTitle
              }
            >
              Couldn't load history
            </Text>

            <Text
              style={
                styles.stateText
              }
            >
              {error}
            </Text>

            <TouchableOpacity
              activeOpacity={0.75}
              style={
                styles.retryHistoryButton
              }
              onPress={loadHistory}
            >
              <Ionicons
                name="refresh"
                size={16}
                color="#FFFFFF"
              />

              <Text
                style={
                  styles.retryHistoryText
                }
              >
                Try Again
              </Text>
            </TouchableOpacity>
          </View>
        ) : conversations.length ===
          0 ? (
          <View
            style={styles.centerState}
          >
            <View
              style={
                styles.emptyIcon
              }
            >
              <MaterialCommunityIcons
                name="creation"
                size={30}
                color="#7C3AED"
              />
            </View>

            <Text
              style={
                styles.emptyTitle
              }
            >
              No conversations yet
            </Text>

            <Text
              style={
                styles.stateText
              }
            >
              Start asking Twin about your
              finances and your conversations
              will appear here.
            </Text>

            <TouchableOpacity
              style={
                styles.startChatButton
              }
              onPress={() =>
                router.replace(
                  "/ai/chat" as any
                )
              }
            >
              <Text
                style={
                  styles.startChatText
                }
              >
                Start Conversation
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={
              false
            }
            contentContainerStyle={
              styles.content
            }
          >
            <View
              style={
                styles.securityCard
              }
            >
              <MaterialCommunityIcons
                name="shield-lock-outline"
                size={20}
                color="#16A34A"
              />

              <View
                style={
                  styles.securityContent
                }
              >
                <Text
                  style={
                    styles.securityTitle
                  }
                >
                  Private & Secure
                </Text>

                <Text
                  style={
                    styles.securityText
                  }
                >
                  Your Twin conversations
                  are linked securely to your
                  account.
                </Text>
              </View>
            </View>

            <Text
              style={styles.sectionLabel}
            >
              RECENT CONVERSATIONS
            </Text>

            {conversations.map(
              (conversation) => (
                <TouchableOpacity
                  key={conversation.id}
                  activeOpacity={0.75}
                  style={
                    styles.historyCard
                  }
                  onPress={() =>
                    router.push({
                      pathname:
                        "/ai/chat",

                      params: {
                        conversationId:
                          conversation.id,
                      },
                    } as any)
                  }
                >
                  <View
                    style={
                      styles.historyIcon
                    }
                  >
                    <MaterialCommunityIcons
                      name="creation"
                      size={19}
                      color="#7C3AED"
                    />
                  </View>

                  <View
                    style={
                      styles.historyContent
                    }
                  >
                    <Text
                      numberOfLines={1}
                      style={
                        styles.historyTitle
                      }
                    >
                      {
                        conversation.title
                      }
                    </Text>

                    <Text
                      numberOfLines={2}
                      style={
                        styles.historyPreview
                      }
                    >
                      {
                        conversation.preview
                      }
                    </Text>

                    <Text
                      style={
                        styles.historyDate
                      }
                    >
                      {formatDate(
                        conversation.updatedAt
                      )}
                    </Text>
                  </View>

                  <Ionicons
                    name="chevron-forward"
                    size={17}
                    color="#94A3B8"
                  />
                </TouchableOpacity>
              )
            )}

            <View
              style={
                styles.bottomSpace
              }
            />
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
}

function formatDate(
  date: string
) {
  const value =
    new Date(date);

  const today =
    new Date();

  const difference =
    today.getTime() -
    value.getTime();

  const days =
    Math.floor(
      difference /
        (1000 * 60 * 60 * 24)
    );

  if (days === 0) {
    return "Today";
  }

  if (days === 1) {
    return "Yesterday";
  }

  return value.toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
    }
  );
}