import React from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

type Account = {
  id: string;
  bank: string;
  type: string;
  accountNumber: string;
  balance: string;
  icon: React.ComponentProps<
    typeof MaterialCommunityIcons
  >["name"];
  color: string;
  background: string;
  primary?: boolean;
};

const accounts: Account[] = [
  {
    id: "1",
    bank: "Punjab & Sind Bank",
    type: "Savings Account",
    accountNumber: "•••• 4821",
    balance: "₹3,42,680",
    icon: "bank-outline",
    color: "#2563EB",
    background: "#EFF6FF",
    primary: true,
  },
  {
    id: "2",
    bank: "HDFC Bank",
    type: "Savings Account",
    accountNumber: "•••• 7194",
    balance: "₹1,28,450",
    icon: "bank-outline",
    color: "#7C3AED",
    background: "#F5F3FF",
  },
  {
    id: "3",
    bank: "ICICI Bank",
    type: "Savings Account",
    accountNumber: "•••• 2358",
    balance: "₹48,870",
    icon: "bank-outline",
    color: "#0891B2",
    background: "#ECFEFF",
  },
];

const recentActivity = [
  {
    id: "1",
    title: "Salary Credit",
    subtitle: "Punjab & Sind Bank",
    amount: "+₹65,000",
    date: "Today",
    positive: true,
    icon: "arrow-down",
  },
  {
    id: "2",
    title: "Amazon",
    subtitle: "HDFC Bank",
    amount: "-₹2,499",
    date: "Yesterday",
    positive: false,
    icon: "cart-outline",
  },
  {
    id: "3",
    title: "Electricity Bill",
    subtitle: "Punjab & Sind Bank",
    amount: "-₹3,240",
    date: "02 Aug",
    positive: false,
    icon: "flash-outline",
  },
];

export default function AccountsScreen() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F8FAFC"
      />

      <SafeAreaView
        style={styles.safeArea}
        edges={["top"]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* HEADER */}

          <View style={styles.header}>
            <View>
              <Text style={styles.eyebrow}>
                SECUREWEALTH
              </Text>

              <Text style={styles.title}>
                My Accounts
              </Text>

              <Text style={styles.subtitle}>
                Your complete banking overview
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.75}
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

              <View style={styles.notificationDot} />
            </TouchableOpacity>
          </View>

          {/* TOTAL BALANCE */}

          <LinearGradient
            colors={[
              "#0F172A",
              "#172554",
              "#1E3A8A",
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.balanceCard}
          >
            <View style={styles.glowOne} />
            <View style={styles.glowTwo} />

            <View style={styles.balanceTop}>
              <View>
                <Text style={styles.balanceLabel}>
                  TOTAL AVAILABLE BALANCE
                </Text>

                <Text style={styles.balance}>
                  ₹5,20,000
                </Text>
              </View>

              <View style={styles.shieldBadge}>
                <MaterialCommunityIcons
                  name="shield-check-outline"
                  size={20}
                  color="#86EFAC"
                />
              </View>
            </View>

            <View style={styles.balanceDivider} />

            <View style={styles.balanceBottom}>
              <View>
                <Text style={styles.balanceMetaLabel}>
                  LINKED ACCOUNTS
                </Text>

                <Text style={styles.balanceMetaValue}>
                  3 Accounts
                </Text>
              </View>

              <View style={styles.protectedContainer}>
                <View style={styles.greenDot} />

                <Text style={styles.protectedText}>
                  Twin Shield Protected
                </Text>
              </View>
            </View>
          </LinearGradient>

          {/* QUICK ACTIONS */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Quick Actions
            </Text>
          </View>

          <View style={styles.quickActions}>
            <QuickAction
              icon="swap-horizontal"
              label="Transfer"
              color="#2563EB"
              background="#EFF6FF"
              onPress={() =>
                router.push("/transfer" as any)
              }
            />

            <QuickAction
              icon="qr-code-outline"
              label="Scan & Pay"
              color="#7C3AED"
              background="#F5F3FF"
              onPress={() =>
                router.push("/qr-scanner" as any)
              }
            />

            <QuickAction
              icon="receipt-outline"
              label="Activity"
              color="#0891B2"
              background="#ECFEFF"
              onPress={() =>
                router.push("/transactions" as any)
              }
            />

            <QuickAction
              icon="analytics-outline"
              label="Analytics"
              color="#16A34A"
              background="#F0FDF4"
              onPress={() =>
                router.push(
                  "/spending-analytics" as any
                )
              }
            />
          </View>

          {/* ACCOUNTS */}

          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>
                Linked Accounts
              </Text>

              <Text style={styles.sectionSubtitle}>
                3 accounts connected
              </Text>
            </View>

            <TouchableOpacity
  activeOpacity={0.7}
  onPress={() =>
    router.push(
      "/manage-accounts" as any
    )
  }
>
  <Text style={styles.manageText}>
    Manage
  </Text>
</TouchableOpacity>
          </View>

          <View style={styles.accountsContainer}>
            {accounts.map((account) => (
              <TouchableOpacity
  key={account.id}
  activeOpacity={0.8}
  style={styles.accountCard}
  onPress={() =>
    router.push({
      pathname: "/account-details",
      params: {
        id: account.id,
        bank: account.bank,
        type: account.type,
        accountNumber: account.accountNumber,
        balance: account.balance,
        color: account.color,
      },
    } as any)
  }
>
                <View style={styles.accountTop}>
                  <View
                    style={[
                      styles.bankIcon,
                      {
                        backgroundColor:
                          account.background,
                      },
                    ]}
                  >
                    <MaterialCommunityIcons
                      name={account.icon}
                      size={23}
                      color={account.color}
                    />
                  </View>

                  <View style={styles.accountInfo}>
                    <View style={styles.accountNameRow}>
                      <Text
                        style={styles.bankName}
                        numberOfLines={1}
                      >
                        {account.bank}
                      </Text>

                      {account.primary && (
                        <View
                          style={
                            styles.primaryBadge
                          }
                        >
                          <Text
                            style={
                              styles.primaryText
                            }
                          >
                            PRIMARY
                          </Text>
                        </View>
                      )}
                    </View>

                    <Text
                      style={styles.accountMeta}
                    >
                      {account.type}{" "}
                      <Text
                        style={
                          styles.accountBullet
                        }
                      >
                        •
                      </Text>{" "}
                      {account.accountNumber}
                    </Text>
                  </View>

                  <Ionicons
                    name="chevron-forward"
                    size={19}
                    color="#94A3B8"
                  />
                </View>

                <View style={styles.accountBottom}>
                  <Text
                    style={
                      styles.availableBalanceLabel
                    }
                  >
                    Available Balance
                  </Text>

                  <Text
                    style={styles.accountBalance}
                  >
                    {account.balance}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* AI INSIGHT */}

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.aiCard}
            onPress={() =>
              router.push("/ai/chat" as any)
            }
          >
            <LinearGradient
              colors={[
                "#EEF2FF",
                "#F8FAFF",
              ]}
              style={styles.aiGradient}
            >
              <View style={styles.aiIcon}>
                <MaterialCommunityIcons
                  name="creation-outline"
                  size={22}
                  color="#4F46E5"
                />
              </View>

              <View style={styles.aiContent}>
                <View style={styles.aiTitleRow}>
                  <Text style={styles.aiTitle}>
                    Twin AI Insight
                  </Text>

                  <View style={styles.aiBadge}>
                    <Text
                      style={styles.aiBadgeText}
                    >
                      SMART
                    </Text>
                  </View>
                </View>

                <Text style={styles.aiText}>
                  Your available balance increased
                  8.4% this month. You could move
                  ₹10,000 toward your savings goal.
                </Text>

                <Text style={styles.aiAction}>
                  Ask Twin AI
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={19}
                color="#6366F1"
              />
            </LinearGradient>
          </TouchableOpacity>

          {/* RECENT ACTIVITY */}

          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>
                Recent Activity
              </Text>

              <Text style={styles.sectionSubtitle}>
                Across all accounts
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                router.push(
                  "/transactions" as any
                )
              }
            >
              <Text style={styles.viewAll}>
                View all
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.activityCard}>
            {recentActivity.map(
              (transaction, index) => (
                <TouchableOpacity
                  key={transaction.id}
                  activeOpacity={0.75}
                  style={[
                    styles.transactionRow,
                    index !==
                      recentActivity.length - 1 &&
                      styles.transactionBorder,
                  ]}
                  onPress={() =>
                    router.push(
                      "/transactions" as any
                    )
                  }
                >
                  <View
                    style={[
                      styles.transactionIcon,
                      {
                        backgroundColor:
                          transaction.positive
                            ? "#F0FDF4"
                            : "#F8FAFC",
                      },
                    ]}
                  >
                    <Ionicons
                      name={
                        transaction.icon as any
                      }
                      size={19}
                      color={
                        transaction.positive
                          ? "#16A34A"
                          : "#475569"
                      }
                    />
                  </View>

                  <View
                    style={
                      styles.transactionInfo
                    }
                  >
                    <Text
                      style={
                        styles.transactionTitle
                      }
                    >
                      {transaction.title}
                    </Text>

                    <Text
                      style={
                        styles.transactionSubtitle
                      }
                    >
                      {transaction.subtitle} •{" "}
                      {transaction.date}
                    </Text>
                  </View>

                  <Text
                    style={[
                      styles.transactionAmount,
                      transaction.positive &&
                        styles.positiveAmount,
                    ]}
                  >
                    {transaction.amount}
                  </Text>
                </TouchableOpacity>
              )
            )}
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

type QuickActionProps = {
  icon: React.ComponentProps<
    typeof Ionicons
  >["name"];
  label: string;
  color: string;
  background: string;
  onPress: () => void;
};

function QuickAction({
  icon,
  label,
  color,
  background,
  onPress,
}: QuickActionProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={styles.quickAction}
      onPress={onPress}
    >
      <View
        style={[
          styles.quickIcon,
          {
            backgroundColor: background,
          },
        ]}
      >
        <Ionicons
          name={icon}
          size={22}
          color={color}
        />
      </View>

      <Text style={styles.quickLabel}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
  },

  eyebrow: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.6,
    color: "#2563EB",
    marginBottom: 4,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0F172A",
    letterSpacing: -0.7,
  },

  subtitle: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 4,
  },

  headerButton: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  notificationDot: {
    position: "absolute",
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#2563EB",
    top: 10,
    right: 10,
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
  },

  balanceCard: {
    borderRadius: 24,
    padding: 22,
    overflow: "hidden",
    marginBottom: 26,
    minHeight: 190,
  },

  glowOne: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(37,99,235,0.22)",
    right: -50,
    top: -70,
  },

  glowTwo: {
    position: "absolute",
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "rgba(99,102,241,0.16)",
    left: -50,
    bottom: -70,
  },

  balanceTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  balanceLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#94A3B8",
    letterSpacing: 1.2,
  },

  balance: {
    fontSize: 34,
    fontWeight: "800",
    color: "#FFFFFF",
    marginTop: 8,
    letterSpacing: -1,
  },

  shieldBadge: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "rgba(22,163,74,0.15)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(134,239,172,0.2)",
  },

  balanceDivider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    marginVertical: 20,
  },

  balanceBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  balanceMetaLabel: {
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1,
    color: "#64748B",
  },

  balanceMetaValue: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 5,
  },

  protectedContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  greenDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#22C55E",
    marginRight: 7,
  },

  protectedText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#86EFAC",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 14,
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A",
  },

  sectionSubtitle: {
    fontSize: 11,
    color: "#94A3B8",
    marginTop: 3,
  },

  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  quickAction: {
    width: "23%",
    alignItems: "center",
  },

  quickIcon: {
    width: 54,
    height: 54,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  quickLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "#475569",
    textAlign: "center",
  },

  manageText: {
    fontSize: 12,
    color: "#2563EB",
    fontWeight: "700",
  },

  accountsContainer: {
    marginBottom: 22,
  },

  accountCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 17,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 12,
  },

  accountTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  bankIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  accountInfo: {
    flex: 1,
    marginLeft: 13,
  },

  accountNameRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  bankName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
    maxWidth: "65%",
  },

  primaryBadge: {
    backgroundColor: "#EFF6FF",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginLeft: 7,
  },

  primaryText: {
    fontSize: 7,
    fontWeight: "800",
    color: "#2563EB",
    letterSpacing: 0.5,
  },

  accountMeta: {
    fontSize: 11,
    color: "#94A3B8",
    marginTop: 5,
  },

  accountBullet: {
    color: "#CBD5E1",
  },

  accountBottom: {
    marginTop: 16,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  availableBalanceLabel: {
    fontSize: 10,
    color: "#94A3B8",
  },

  accountBalance: {
    fontSize: 17,
    fontWeight: "800",
    color: "#0F172A",
  },

  aiCard: {
    marginBottom: 28,
    borderRadius: 20,
    overflow: "hidden",
  },

  aiGradient: {
    padding: 17,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E0E7FF",
    flexDirection: "row",
    alignItems: "center",
  },

  aiIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#E0E7FF",
    alignItems: "center",
    justifyContent: "center",
  },

  aiContent: {
    flex: 1,
    marginHorizontal: 13,
  },

  aiTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  aiTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#312E81",
  },

  aiBadge: {
    marginLeft: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },

  aiBadgeText: {
    fontSize: 6,
    color: "#6366F1",
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  aiText: {
    fontSize: 11,
    lineHeight: 17,
    color: "#64748B",
    marginTop: 6,
  },

  aiAction: {
    color: "#4F46E5",
    fontSize: 10,
    fontWeight: "700",
    marginTop: 7,
  },

  viewAll: {
    color: "#2563EB",
    fontSize: 12,
    fontWeight: "700",
  },

  activityCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 16,
  },

  transactionRow: {
    minHeight: 76,
    flexDirection: "row",
    alignItems: "center",
  },

  transactionBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  transactionIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  transactionInfo: {
    flex: 1,
    marginLeft: 12,
  },

  transactionTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0F172A",
  },

  transactionSubtitle: {
    fontSize: 10,
    color: "#94A3B8",
    marginTop: 4,
  },

  transactionAmount: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0F172A",
  },

  positiveAmount: {
    color: "#16A34A",
  },

  bottomSpace: {
    height: 110,
  },
});