import React, { useState } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Switch,
  Alert,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import { router } from "expo-router";

type Account = {
  id: string;
  bank: string;
  type: string;
  number: string;
  balance: string;
  primary: boolean;
  enabled: boolean;
  color: string;
  background: string;
};

const initialAccounts: Account[] = [
  {
    id: "1",
    bank: "Punjab & Sind Bank",
    type: "Savings Account",
    number: "•••• 4821",
    balance: "₹3,42,680",
    primary: true,
    enabled: true,
    color: "#2563EB",
    background: "#EFF6FF",
  },
  {
    id: "2",
    bank: "HDFC Bank",
    type: "Savings Account",
    number: "•••• 7194",
    balance: "₹1,28,450",
    primary: false,
    enabled: true,
    color: "#7C3AED",
    background: "#F5F3FF",
  },
  {
    id: "3",
    bank: "ICICI Bank",
    type: "Savings Account",
    number: "•••• 2358",
    balance: "₹48,870",
    primary: false,
    enabled: true,
    color: "#0891B2",
    background: "#ECFEFF",
  },
];

export default function ManageAccountsScreen() {
  const [accounts, setAccounts] =
    useState<Account[]>(initialAccounts);

  const setPrimary = (id: string) => {
    setAccounts((current) =>
      current.map((account) => ({
        ...account,
        primary: account.id === id,
      }))
    );
  };

  const toggleAccount = (id: string) => {
    setAccounts((current) =>
      current.map((account) =>
        account.id === id
          ? {
              ...account,
              enabled: !account.enabled,
            }
          : account
      )
    );
  };

  const removeAccount = (
    account: Account
  ) => {
    if (account.primary) {
      Alert.alert(
        "Primary Account",
        "Set another account as primary before removing this account."
      );

      return;
    }

    Alert.alert(
      "Remove Linked Account?",
      `Remove ${account.bank} ${account.number} from SecureWealth Twin?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => {
            setAccounts((current) =>
              current.filter(
                (item) =>
                  item.id !== account.id
              )
            );
          },
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
        style={styles.safeArea}
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
              Manage Accounts
            </Text>

            <Text style={styles.headerSubtitle}>
              Linked banking accounts
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.headerButton}
            onPress={() =>
              router.push(
                "/security-center" as any
              )
            }
          >
            <MaterialCommunityIcons
              name="shield-check-outline"
              size={21}
              color="#16A34A"
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={
            false
          }
          contentContainerStyle={
            styles.content
          }
        >
          {/* HERO */}

          <View style={styles.heroCard}>
            <View style={styles.heroTop}>
              <View
                style={styles.heroIcon}
              >
                <MaterialCommunityIcons
                  name="bank-check"
                  size={25}
                  color="#2563EB"
                />
              </View>

              <View
                style={styles.secureBadge}
              >
                <View
                  style={styles.greenDot}
                />

                <Text
                  style={
                    styles.secureBadgeText
                  }
                >
                  SECURE
                </Text>
              </View>
            </View>

            <Text style={styles.heroTitle}>
              Connected Banking
            </Text>

            <Text
              style={
                styles.heroDescription
              }
            >
              Manage accounts connected to
              SecureWealth Twin and control
              which account is used as your
              primary banking source.
            </Text>

            <View
              style={styles.heroStats}
            >
              <View>
                <Text
                  style={
                    styles.statLabel
                  }
                >
                  LINKED
                </Text>

                <Text
                  style={
                    styles.statValue
                  }
                >
                  {accounts.length}
                </Text>
              </View>

              <View
                style={
                  styles.statDivider
                }
              />

              <View>
                <Text
                  style={
                    styles.statLabel
                  }
                >
                  ACTIVE
                </Text>

                <Text
                  style={
                    styles.statValue
                  }
                >
                  {
                    accounts.filter(
                      (account) =>
                        account.enabled
                    ).length
                  }
                </Text>
              </View>

              <View
                style={
                  styles.statDivider
                }
              />

              <View>
                <Text
                  style={
                    styles.statLabel
                  }
                >
                  PROTECTION
                </Text>

                <Text
                  style={
                    styles.protectedValue
                  }
                >
                  ON
                </Text>
              </View>
            </View>
          </View>

          {/* SECTION */}

          <View
            style={styles.sectionHeader}
          >
            <View>
              <Text
                style={
                  styles.sectionTitle
                }
              >
                Linked Accounts
              </Text>

              <Text
                style={
                  styles.sectionSubtitle
                }
              >
                Control your connected banks
              </Text>
            </View>

            <Text
              style={styles.accountCount}
            >
              {accounts.length} linked
            </Text>
          </View>

          {/* ACCOUNT CARDS */}

          {accounts.map((account) => (
            <View
              key={account.id}
              style={[
                styles.accountCard,

                !account.enabled &&
                  styles.disabledAccount,
              ]}
            >
              <View
                style={
                  styles.accountHeader
                }
              >
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
                    name="bank-outline"
                    size={23}
                    color={
                      account.enabled
                        ? account.color
                        : "#94A3B8"
                    }
                  />
                </View>

                <View
                  style={
                    styles.accountInfo
                  }
                >
                  <View
                    style={
                      styles.bankNameRow
                    }
                  >
                    <Text
                      numberOfLines={1}
                      style={
                        styles.bankName
                      }
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
                    style={
                      styles.accountMeta
                    }
                  >
                    {account.type} •{" "}
                    {account.number}
                  </Text>
                </View>

                <Switch
                  value={account.enabled}
                  onValueChange={() =>
                    toggleAccount(
                      account.id
                    )
                  }
                  trackColor={{
                    false: "#CBD5E1",
                    true: "#BFDBFE",
                  }}
                  thumbColor={
                    account.enabled
                      ? "#2563EB"
                      : "#F8FAFC"
                  }
                />
              </View>

              <View
                style={
                  styles.accountDivider
                }
              />

              <View
                style={
                  styles.balanceRow
                }
              >
                <View>
                  <Text
                    style={
                      styles.balanceLabel
                    }
                  >
                    AVAILABLE BALANCE
                  </Text>

                  <Text
                    style={
                      styles.balance
                    }
                  >
                    {account.balance}
                  </Text>
                </View>

                <View
                  style={[
                    styles.statusBadge,

                    account.enabled
                      ? styles.activeBadge
                      : styles.inactiveBadge,
                  ]}
                >
                  <View
                    style={[
                      styles.statusDot,

                      {
                        backgroundColor:
                          account.enabled
                            ? "#22C55E"
                            : "#94A3B8",
                      },
                    ]}
                  />

                  <Text
                    style={[
                      styles.statusText,

                      {
                        color:
                          account.enabled
                            ? "#16A34A"
                            : "#64748B",
                      },
                    ]}
                  >
                    {account.enabled
                      ? "Active"
                      : "Disabled"}
                  </Text>
                </View>
              </View>

              {/* ACTIONS */}

              <View
                style={
                  styles.actionsContainer
                }
              >
                {!account.primary && (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={
                      styles.primaryAction
                    }
                    onPress={() =>
                      setPrimary(
                        account.id
                      )
                    }
                  >
                    <Ionicons
                      name="star-outline"
                      size={16}
                      color="#2563EB"
                    />

                    <Text
                      style={
                        styles.primaryActionText
                      }
                    >
                      Set Primary
                    </Text>
                  </TouchableOpacity>
                )}

                {account.primary && (
                  <View
                    style={
                      styles.currentPrimary
                    }
                  >
                    <Ionicons
                      name="star"
                      size={15}
                      color="#F59E0B"
                    />

                    <Text
                      style={
                        styles.currentPrimaryText
                      }
                    >
                      Primary Account
                    </Text>
                  </View>
                )}

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={
                    styles.removeButton
                  }
                  onPress={() =>
                    removeAccount(account)
                  }
                >
                  <Ionicons
                    name="trash-outline"
                    size={16}
                    color="#DC2626"
                  />

                  <Text
                    style={
                      styles.removeText
                    }
                  >
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {/* LINK NEW ACCOUNT */}

          <TouchableOpacity
  activeOpacity={0.8}
  style={styles.linkCard}
  onPress={() =>
    router.push(
      "/link-account" as any
    )
  }
>
            <View
              style={styles.linkIcon}
            >
              <Ionicons
                name="add"
                size={25}
                color="#2563EB"
              />
            </View>

            <View
              style={styles.linkContent}
            >
              <Text
                style={styles.linkTitle}
              >
                Link New Account
              </Text>

              <Text
                style={
                  styles.linkSubtitle
                }
              >
                Connect another bank account
                securely
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={19}
              color="#94A3B8"
            />
          </TouchableOpacity>

          {/* SECURITY INFO */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={
              styles.securityCard
            }
            onPress={() =>
              router.push(
                "/twin-shield" as any
              )
            }
          >
            <View
              style={
                styles.securityIcon
              }
            >
              <MaterialCommunityIcons
                name="shield-lock-outline"
                size={23}
                color="#16A34A"
              />
            </View>

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
                Twin Shield Protected
              </Text>

              <Text
                style={
                  styles.securityText
                }
              >
                Connected accounts are
                continuously monitored for
                suspicious activity.
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={18}
              color="#94A3B8"
            />
          </TouchableOpacity>

          <View
            style={styles.bottomSpace}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  header: {
    height: 72,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: "center",
    justifyContent: "center",
  },

  headerCenter: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 12,
  },

  headerTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#0F172A",
  },

  headerSubtitle: {
    fontSize: 10,
    color: "#94A3B8",
    marginTop: 3,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 6,
  },

  heroCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 27,
  },

  heroTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  heroIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
  },

  secureBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 9,
  },

  greenDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#22C55E",
    marginRight: 6,
  },

  secureBadgeText: {
    fontSize: 7,
    fontWeight: "800",
    color: "#16A34A",
    letterSpacing: 0.6,
  },

  heroTitle: {
    fontSize: 21,
    fontWeight: "800",
    color: "#0F172A",
    marginTop: 18,
  },

  heroDescription: {
    color: "#64748B",
    fontSize: 11,
    lineHeight: 18,
    marginTop: 7,
  },

  heroStats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#F8FAFC",
    borderRadius: 16,
    paddingVertical: 14,
    marginTop: 18,
  },

  statLabel: {
    color: "#94A3B8",
    fontSize: 7,
    fontWeight: "700",
    letterSpacing: 0.8,
    textAlign: "center",
  },

  statValue: {
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 4,
  },

  protectedValue: {
    color: "#16A34A",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 5,
  },

  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: "#E2E8F0",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A",
  },

  sectionSubtitle: {
    fontSize: 10,
    color: "#94A3B8",
    marginTop: 4,
  },

  accountCount: {
    color: "#2563EB",
    fontSize: 10,
    fontWeight: "700",
  },

  accountCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 21,
    padding: 17,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 13,
  },

  disabledAccount: {
    opacity: 0.65,
  },

  accountHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  bankIcon: {
    width: 47,
    height: 47,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  accountInfo: {
    flex: 1,
    marginLeft: 12,
  },

  bankNameRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  bankName: {
    maxWidth: "62%",
    fontSize: 13,
    fontWeight: "800",
    color: "#0F172A",
  },

  primaryBadge: {
    backgroundColor: "#EFF6FF",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginLeft: 6,
  },

  primaryText: {
    color: "#2563EB",
    fontSize: 6,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  accountMeta: {
    color: "#94A3B8",
    fontSize: 9,
    marginTop: 5,
  },

  accountDivider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginVertical: 15,
  },

  balanceRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },

  balanceLabel: {
    color: "#94A3B8",
    fontSize: 7,
    fontWeight: "700",
    letterSpacing: 0.8,
  },

  balance: {
    color: "#0F172A",
    fontSize: 18,
    fontWeight: "800",
    marginTop: 5,
  },

  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
  },

  activeBadge: {
    backgroundColor: "#F0FDF4",
  },

  inactiveBadge: {
    backgroundColor: "#F1F5F9",
  },

  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 5,
  },

  statusText: {
    fontSize: 8,
    fontWeight: "700",
  },

  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 17,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
  },

  primaryAction: {
    flexDirection: "row",
    alignItems: "center",
  },

  primaryActionText: {
    color: "#2563EB",
    fontSize: 10,
    fontWeight: "700",
    marginLeft: 5,
  },

  currentPrimary: {
    flexDirection: "row",
    alignItems: "center",
  },

  currentPrimaryText: {
    color: "#64748B",
    fontSize: 9,
    fontWeight: "700",
    marginLeft: 5,
  },

  removeButton: {
    flexDirection: "row",
    alignItems: "center",
  },

  removeText: {
    color: "#DC2626",
    fontSize: 10,
    fontWeight: "700",
    marginLeft: 5,
  },

  linkCard: {
    minHeight: 82,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#93C5FD",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  linkIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
  },

  linkContent: {
    flex: 1,
    marginLeft: 13,
  },

  linkTitle: {
    color: "#0F172A",
    fontSize: 13,
    fontWeight: "800",
  },

  linkSubtitle: {
    color: "#94A3B8",
    fontSize: 9,
    marginTop: 5,
  },

  securityCard: {
    backgroundColor: "#F0FDF4",
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#DCFCE7",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },

  securityIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
  },

  securityContent: {
    flex: 1,
    marginHorizontal: 12,
  },

  securityTitle: {
    color: "#14532D",
    fontSize: 12,
    fontWeight: "800",
  },

  securityText: {
    color: "#64748B",
    fontSize: 9,
    lineHeight: 14,
    marginTop: 5,
  },

  bottomSpace: {
    height: 100,
  },
});