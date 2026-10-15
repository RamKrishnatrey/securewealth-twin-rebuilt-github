import React, {
  useMemo,
  useState,
} from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import {
  router,
} from "expo-router";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import { styles } from "./notificationStyles";

type NotificationType =
  | "security"
  | "transaction"
  | "ai"
  | "goal"
  | "investment";

type NotificationItem = {
  id: number;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  unread: boolean;
};

const initialNotifications: NotificationItem[] = [
  {
    id: 1,
    type: "security",
    title: "Twin Shield Alert",
    message:
      "A ₹12,500 transaction was reviewed and verified as safe.",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    type: "transaction",
    title: "Payment Successful",
    message:
      "₹2,450 was successfully paid to Amazon India.",
    time: "18 min ago",
    unread: true,
  },
  {
    id: 3,
    type: "ai",
    title: "Twin AI Insight",
    message:
      "Your spending is 12% lower than last month. Great progress.",
    time: "1 hr ago",
    unread: true,
  },
  {
    id: 4,
    type: "goal",
    title: "Goal Progress",
    message:
      "You have completed 68% of your Emergency Fund goal.",
    time: "3 hrs ago",
    unread: false,
  },
  {
    id: 5,
    type: "investment",
    title: "Investment Insight",
    message:
      "Twin Invest has a new low-risk portfolio insight for you.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 6,
    type: "transaction",
    title: "Salary Credited",
    message:
      "₹45,000 has been credited to your primary account.",
    time: "Yesterday",
    unread: false,
  },
];

export default function NotificationsScreen() {
  const [notifications, setNotifications] =
    useState(initialNotifications);

  const unreadCount = useMemo(
    () =>
      notifications.filter(
        (item) => item.unread
      ).length,
    [notifications]
  );

  const markAllRead = () => {
    setNotifications((current) =>
      current.map((item) => ({
        ...item,
        unread: false,
      }))
    );
  };

  const markRead = (id: number) => {
    setNotifications((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              unread: false,
            }
          : item
      )
    );
  };

  const openNotification = (
    notification: NotificationItem
  ) => {
    markRead(notification.id);

    switch (notification.type) {
      case "security":
        router.push(
          "/twin-shield" as any
        );
        break;

      case "transaction":
        router.push(
          "/transactions" as any
        );
        break;

      case "ai":
        router.push(
          "/chat" as any
        );
        break;

      case "goal":
        router.push(
          "/goals" as any
        );
        break;

      case "investment":
        router.push(
          "/investment-intelligence" as any
        );
        break;
    }
  };

  const renderIcon = (
    type: NotificationType
  ) => {
    switch (type) {
      case "security":
        return (
          <MaterialCommunityIcons
            name="shield-check-outline"
            size={22}
            color="#16A34A"
          />
        );

      case "transaction":
        return (
          <MaterialCommunityIcons
            name="swap-horizontal"
            size={22}
            color="#2563EB"
          />
        );

      case "ai":
        return (
          <MaterialCommunityIcons
            name="robot-outline"
            size={22}
            color="#7C3AED"
          />
        );

      case "goal":
        return (
          <MaterialCommunityIcons
            name="bullseye-arrow"
            size={22}
            color="#D97706"
          />
        );

      case "investment":
        return (
          <MaterialCommunityIcons
            name="finance"
            size={22}
            color="#0891B2"
          />
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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

        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>
            Notifications
          </Text>

          <Text style={styles.headerSubtitle}>
            Stay updated with your financial twin
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.headerButton}
          onPress={markAllRead}
        >
          <Ionicons
            name="checkmark-done-outline"
            size={22}
            color="#2563EB"
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          styles.scrollContent
        }
      >
        <View style={styles.summaryRow}>
          <View>
            <Text style={styles.sectionTitle}>
              Recent Updates
            </Text>

            <Text style={styles.summaryText}>
              {unreadCount === 0
                ? "You're all caught up"
                : `${unreadCount} unread ${
                    unreadCount === 1
                      ? "notification"
                      : "notifications"
                  }`}
            </Text>
          </View>

          {unreadCount > 0 && (
            <View style={styles.unreadBadge}>
              <Text
                style={styles.unreadBadgeText}
              >
                {unreadCount}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.notificationList}>
          {notifications.map(
            (notification) => (
              <TouchableOpacity
                key={notification.id}
                activeOpacity={0.78}
                style={[
                  styles.notificationCard,
                  notification.unread &&
                    styles.notificationUnread,
                ]}
                onPress={() =>
                  openNotification(
                    notification
                  )
                }
              >
                <View
                  style={[
                    styles.iconContainer,
                    notification.type ===
                      "security" &&
                      styles.securityIcon,

                    notification.type ===
                      "transaction" &&
                      styles.transactionIcon,

                    notification.type ===
                      "ai" &&
                      styles.aiIcon,

                    notification.type ===
                      "goal" &&
                      styles.goalIcon,

                    notification.type ===
                      "investment" &&
                      styles.investmentIcon,
                  ]}
                >
                  {renderIcon(
                    notification.type
                  )}
                </View>

                <View
                  style={
                    styles.notificationContent
                  }
                >
                  <View
                    style={
                      styles.notificationHeader
                    }
                  >
                    <Text
                      style={
                        styles.notificationTitle
                      }
                    >
                      {notification.title}
                    </Text>

                    {notification.unread && (
                      <View
                        style={styles.unreadDot}
                      />
                    )}
                  </View>

                  <Text
                    style={
                      styles.notificationMessage
                    }
                  >
                    {notification.message}
                  </Text>

                  <Text
                    style={
                      styles.notificationTime
                    }
                  >
                    {notification.time}
                  </Text>
                </View>

                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color="#CBD5E1"
                />
              </TouchableOpacity>
            )
          )}
        </View>

        <View style={styles.securityFooter}>
          <MaterialCommunityIcons
            name="shield-check-outline"
            size={19}
            color="#16A34A"
          />

          <Text style={styles.securityText}>
            Security alerts are monitored by
            Twin Shield in real time.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}