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

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import {
  LinearGradient,
} from "expo-linear-gradient";

import {
  router,
  useLocalSearchParams,
} from "expo-router";


export default function AccountDetailsScreen() {
  const params = useLocalSearchParams<{
    id?: string;
    bank?: string;
    type?: string;
    accountNumber?: string;
    balance?: string;
    color?: string;
  }>();

  const bank =
    typeof params.bank === "string"
      ? params.bank
      : "Punjab & Sind Bank";

  const accountType =
    typeof params.type === "string"
      ? params.type
      : "Savings Account";

  const accountNumber =
    typeof params.accountNumber === "string"
      ? params.accountNumber
      : "•••• 4821";

  const balance =
    typeof params.balance === "string"
      ? params.balance
      : "₹3,42,680";

  const accountId =
    typeof params.id === "string"
      ? params.id
      : "1";

  const accentColor =
    typeof params.color === "string"
      ? params.color
      : "#2563EB";


  /*
   * Temporary account-specific metadata.
   * Backend can replace this later.
   */
  const getAccountMetadata = () => {
    switch (accountId) {
      case "2":
        return {
          ifsc: "HDFC0001234",
          branch: "Noida Sector 18",
          holder: "Shaurya Mishra",
        };

      case "3":
        return {
          ifsc: "ICIC0002456",
          branch: "Noida Sector 62",
          holder: "Shaurya Mishra",
        };

      default:
        return {
          ifsc: "PSIB0000123",
          branch: "Noida Main Branch",
          holder: "Shaurya Mishra",
        };
    }
  };

  const metadata =
    getAccountMetadata();


  const recentTransactions = [
    {
      id: "1",
      title: "Salary Credit",
      subtitle: "Today • 09:42 AM",
      amount: "+₹65,000",
      positive: true,
      icon: "arrow-down",
    },
    {
      id: "2",
      title: "Amazon",
      subtitle: "Yesterday • 06:18 PM",
      amount: "-₹2,499",
      positive: false,
      icon: "cart-outline",
    },
    {
      id: "3",
      title: "Electricity Bill",
      subtitle: "02 Aug • 11:26 AM",
      amount: "-₹3,240",
      positive: false,
      icon: "flash-outline",
    },
  ];


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
              Account Details
            </Text>

            <Text style={styles.headerSubtitle}>
              Secure banking overview
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.headerButton}
            onPress={() =>
              router.push(
                "/notifications" as any
              )
            }
          >
            <Ionicons
              name="notifications-outline"
              size={21}
              color="#0F172A"
            />

            <View
              style={
                styles.notificationDot
              }
            />
          </TouchableOpacity>
        </View>


        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            styles.content
          }
        >
          {/* ACCOUNT HERO */}

          <LinearGradient
            colors={[
              "#0F172A",
              "#172554",
              "#1E3A8A",
            ]}
            start={{
              x: 0,
              y: 0,
            }}
            end={{
              x: 1,
              y: 1,
            }}
            style={styles.heroCard}
          >
            <View
              style={styles.heroGlowOne}
            />

            <View
              style={styles.heroGlowTwo}
            />

            <View style={styles.heroTop}>
              <View
                style={[
                  styles.bankIcon,
                  {
                    borderColor:
                      `${accentColor}55`,
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="bank-outline"
                  size={25}
                  color="#FFFFFF"
                />
              </View>

              <View
                style={
                  styles.protectionBadge
                }
              >
                <MaterialCommunityIcons
                  name="shield-check-outline"
                  size={15}
                  color="#86EFAC"
                />

                <Text
                  style={
                    styles.protectionText
                  }
                >
                  PROTECTED
                </Text>
              </View>
            </View>


            <Text style={styles.bankName}>
              {bank}
            </Text>

            <Text style={styles.accountMeta}>
              {accountType} •{" "}
              {accountNumber}
            </Text>


            <View
              style={styles.heroDivider}
            />


            <Text
              style={
                styles.balanceLabel
              }
            >
              AVAILABLE BALANCE
            </Text>

            <Text style={styles.balance}>
              {balance}
            </Text>


            <View
              style={
                styles.heroBottom
              }
            >
              <View
                style={
                  styles.liveStatus
                }
              >
                <View
                  style={
                    styles.greenDot
                  }
                />

                <Text
                  style={
                    styles.liveStatusText
                  }
                >
                  Account Active
                </Text>
              </View>

              <View
                style={
                  styles.twinShieldRow
                }
              >
                <MaterialCommunityIcons
                  name="shield-lock-outline"
                  size={14}
                  color="#93C5FD"
                />

                <Text
                  style={
                    styles.twinShieldText
                  }
                >
                  Twin Shield
                </Text>
              </View>
            </View>
          </LinearGradient>


          {/* QUICK ACTIONS */}

          <Text
            style={styles.sectionTitle}
          >
            Quick Actions
          </Text>

          <View
            style={
              styles.quickActions
            }
          >
            <QuickAction
              icon="swap-horizontal"
              title="Transfer"
              color="#2563EB"
              background="#EFF6FF"
              onPress={() =>
                router.push(
                  "/transfer" as any
                )
              }
            />

            <QuickAction
              icon="qr-code-outline"
              title="Scan & Pay"
              color="#7C3AED"
              background="#F5F3FF"
              onPress={() =>
                router.push(
                  "/qr-scanner" as any
                )
              }
            />

            <QuickAction
              icon="receipt-outline"
              title="Activity"
              color="#0891B2"
              background="#ECFEFF"
              onPress={() =>
                router.push(
                  "/transactions" as any
                )
              }
            />

            <QuickAction
  icon="document-text-outline"
  title="Statement"
  color="#16A34A"
  background="#F0FDF4"
  onPress={() =>
    router.push({
      pathname:
        "/account-statement",

      params: {
        id: accountId,
        bank: bank,
        type: accountType,
        accountNumber:
          accountNumber,
        balance: balance,
      },
    } as any)
  }
/>
          </View>


          {/* ACCOUNT INFORMATION */}

          <View
            style={styles.sectionHeader}
          >
            <View>
              <Text
                style={
                  styles.sectionTitle
                }
              >
                Account Information
              </Text>

              <Text
                style={
                  styles.sectionSubtitle
                }
              >
                Banking and branch details
              </Text>
            </View>
          </View>


          <View style={styles.infoCard}>
            <InfoRow
              icon="person-outline"
              label="Account Holder"
              value={metadata.holder}
            />

            <View
              style={styles.infoDivider}
            />

            <InfoRow
              icon="wallet-outline"
              label="Account Type"
              value={accountType}
            />

            <View
              style={styles.infoDivider}
            />

            <InfoRow
              icon="card-outline"
              label="Account Number"
              value={accountNumber}
            />

            <View
              style={styles.infoDivider}
            />

            <InfoRow
              icon="business-outline"
              label="IFSC Code"
              value={metadata.ifsc}
            />

            <View
              style={styles.infoDivider}
            />

            <InfoRow
              icon="location-outline"
              label="Branch"
              value={metadata.branch}
            />
          </View>


          {/* TWIN SHIELD */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.securityCard}
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
                name="shield-check-outline"
                size={24}
                color="#16A34A"
              />
            </View>

            <View
              style={
                styles.securityContent
              }
            >
              <View
                style={
                  styles.securityTitleRow
                }
              >
                <Text
                  style={
                    styles.securityTitle
                  }
                >
                  Twin Shield Protection
                </Text>

                <View
                  style={
                    styles.secureBadge
                  }
                >
                  <Text
                    style={
                      styles.secureBadgeText
                    }
                  >
                    SECURE
                  </Text>
                </View>
              </View>

              <Text
                style={
                  styles.securityDescription
                }
              >
                AI-powered fraud monitoring
                is actively protecting this
                account.
              </Text>

              <Text
                style={
                  styles.securityAction
                }
              >
                View security status
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={19}
              color="#94A3B8"
            />
          </TouchableOpacity>


          {/* RECENT ACTIVITY */}

          <View
            style={styles.sectionHeader}
          >
            <View>
              <Text
                style={
                  styles.sectionTitle
                }
              >
                Recent Activity
              </Text>

              <Text
                style={
                  styles.sectionSubtitle
                }
              >
                Latest account transactions
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
              <Text
                style={styles.viewAll}
              >
                View all
              </Text>
            </TouchableOpacity>
          </View>


          <View
            style={styles.activityCard}
          >
            {recentTransactions.map(
              (
                transaction,
                index
              ) => (
                <TouchableOpacity
                  key={
                    transaction.id
                  }
                  activeOpacity={0.75}
                  style={[
                    styles.transactionRow,

                    index !==
                      recentTransactions.length -
                        1 &&
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
                      {
                        transaction.title
                      }
                    </Text>

                    <Text
                      style={
                        styles.transactionSubtitle
                      }
                    >
                      {
                        transaction.subtitle
                      }
                    </Text>
                  </View>

                  <Text
                    style={[
                      styles.transactionAmount,

                      transaction.positive &&
                        styles.positiveAmount,
                    ]}
                  >
                    {
                      transaction.amount
                    }
                  </Text>
                </TouchableOpacity>
              )
            )}
          </View>


          {/* ACCOUNT MANAGEMENT */}

          <View
            style={styles.sectionHeader}
          >
            <View>
              <Text
                style={
                  styles.sectionTitle
                }
              >
                Account Controls
              </Text>

              <Text
                style={
                  styles.sectionSubtitle
                }
              >
                Security and account settings
              </Text>
            </View>
          </View>


          <View
            style={
              styles.controlsCard
            }
          >
            <ControlRow
              icon="shield-checkmark-outline"
              title="Security Centre"
              subtitle="Review account protection"
              onPress={() =>
                router.push(
                  "/security-center" as any
                )
              }
            />

            <View
              style={
                styles.controlDivider
              }
            />

            <ControlRow
              icon="options-outline"
              title="Transaction Controls"
              subtitle="Manage transaction security"
              onPress={() =>
                router.push(
                  "/transaction-controls" as any
                )
              }
            />

            <View
              style={
                styles.controlDivider
              }
            />

            <ControlRow
              icon="help-circle-outline"
              title="Help & Support"
              subtitle="Get help with this account"
              onPress={() =>
                router.push(
                  "/help-support" as any
                )
              }
            />
          </View>


          <View
            style={styles.bottomSpace}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}


/* -------------------------------------------------
   QUICK ACTION
-------------------------------------------------- */

type QuickActionProps = {
  icon: React.ComponentProps<
    typeof Ionicons
  >["name"];

  title: string;

  color: string;

  background: string;

  onPress: () => void;
};


function QuickAction({
  icon,
  title,
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
          styles.quickActionIcon,
          {
            backgroundColor:
              background,
          },
        ]}
      >
        <Ionicons
          name={icon}
          size={21}
          color={color}
        />
      </View>

      <Text
        style={styles.quickActionText}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}


/* -------------------------------------------------
   INFORMATION ROW
-------------------------------------------------- */

type InfoRowProps = {
  icon: React.ComponentProps<
    typeof Ionicons
  >["name"];

  label: string;

  value: string;
};


function InfoRow({
  icon,
  label,
  value,
}: InfoRowProps) {
  return (
    <View style={styles.infoRow}>
      <View
        style={styles.infoIcon}
      >
        <Ionicons
          name={icon}
          size={18}
          color="#64748B"
        />
      </View>

      <View
        style={styles.infoContent}
      >
        <Text
          style={styles.infoLabel}
        >
          {label}
        </Text>

        <Text
          style={styles.infoValue}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}


/* -------------------------------------------------
   CONTROL ROW
-------------------------------------------------- */

type ControlRowProps = {
  icon: React.ComponentProps<
    typeof Ionicons
  >["name"];

  title: string;

  subtitle: string;

  onPress: () => void;
};


function ControlRow({
  icon,
  title,
  subtitle,
  onPress,
}: ControlRowProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.controlRow}
      onPress={onPress}
    >
      <View
        style={styles.controlIcon}
      >
        <Ionicons
          name={icon}
          size={19}
          color="#2563EB"
        />
      </View>

      <View
        style={styles.controlContent}
      >
        <Text
          style={styles.controlTitle}
        >
          {title}
        </Text>

        <Text
          style={
            styles.controlSubtitle
          }
        >
          {subtitle}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={18}
        color="#CBD5E1"
      />
    </TouchableOpacity>
  );
}


/* -------------------------------------------------
   STYLES
-------------------------------------------------- */

const styles =
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "#F8FAFC",
    },

    header: {
      height: 72,
      paddingHorizontal: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent:
        "space-between",
      backgroundColor: "#F8FAFC",
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

    notificationDot: {
      position: "absolute",
      width: 7,
      height: 7,
      borderRadius: 4,
      backgroundColor: "#2563EB",
      top: 9,
      right: 9,
      borderWidth: 1.5,
      borderColor: "#FFFFFF",
    },

    content: {
      paddingHorizontal: 20,
      paddingTop: 6,
    },

    heroCard: {
      borderRadius: 25,
      padding: 22,
      overflow: "hidden",
      marginBottom: 27,
      minHeight: 270,
    },

    heroGlowOne: {
      position: "absolute",
      width: 210,
      height: 210,
      borderRadius: 105,
      backgroundColor:
        "rgba(37,99,235,0.20)",
      right: -70,
      top: -80,
    },

    heroGlowTwo: {
      position: "absolute",
      width: 150,
      height: 150,
      borderRadius: 75,
      backgroundColor:
        "rgba(99,102,241,0.14)",
      left: -60,
      bottom: -70,
    },

    heroTop: {
      flexDirection: "row",
      justifyContent:
        "space-between",
      alignItems: "center",
      marginBottom: 19,
    },

    bankIcon: {
      width: 48,
      height: 48,
      borderRadius: 15,
      backgroundColor:
        "rgba(255,255,255,0.10)",
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
    },

    protectionBadge: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10,
      paddingVertical: 7,
      borderRadius: 10,
      backgroundColor:
        "rgba(22,163,74,0.14)",
      borderWidth: 1,
      borderColor:
        "rgba(134,239,172,0.16)",
    },

    protectionText: {
      fontSize: 8,
      fontWeight: "800",
      letterSpacing: 0.8,
      color: "#86EFAC",
      marginLeft: 5,
    },

    bankName: {
      fontSize: 20,
      fontWeight: "800",
      color: "#FFFFFF",
      letterSpacing: -0.3,
    },

    accountMeta: {
      color: "#94A3B8",
      fontSize: 11,
      marginTop: 6,
    },

    heroDivider: {
      height: 1,
      backgroundColor:
        "rgba(255,255,255,0.10)",
      marginVertical: 19,
    },

    balanceLabel: {
      fontSize: 9,
      fontWeight: "700",
      letterSpacing: 1.2,
      color: "#94A3B8",
    },

    balance: {
      color: "#FFFFFF",
      fontSize: 32,
      fontWeight: "800",
      letterSpacing: -0.8,
      marginTop: 6,
    },

    heroBottom: {
      flexDirection: "row",
      justifyContent:
        "space-between",
      alignItems: "center",
      marginTop: 18,
    },

    liveStatus: {
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

    liveStatusText: {
      color: "#CBD5E1",
      fontSize: 10,
      fontWeight: "600",
    },

    twinShieldRow: {
      flexDirection: "row",
      alignItems: "center",
    },

    twinShieldText: {
      color: "#93C5FD",
      fontSize: 10,
      fontWeight: "700",
      marginLeft: 5,
    },

    sectionHeader: {
      flexDirection: "row",
      justifyContent:
        "space-between",
      alignItems: "flex-end",
      marginTop: 7,
      marginBottom: 13,
    },

    sectionTitle: {
      fontSize: 18,
      fontWeight: "800",
      color: "#0F172A",
      marginBottom: 14,
    },

    sectionSubtitle: {
      fontSize: 10,
      color: "#94A3B8",
      marginTop: -9,
    },

    quickActions: {
      flexDirection: "row",
      justifyContent:
        "space-between",
      marginBottom: 28,
    },

    quickAction: {
      width: "23%",
      alignItems: "center",
    },

    quickActionIcon: {
      width: 54,
      height: 54,
      borderRadius: 17,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 8,
    },

    quickActionText: {
      fontSize: 10,
      fontWeight: "600",
      color: "#475569",
      textAlign: "center",
    },

    infoCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: 21,
      paddingHorizontal: 17,
      borderWidth: 1,
      borderColor: "#E2E8F0",
      marginBottom: 20,
    },

    infoRow: {
      minHeight: 70,
      flexDirection: "row",
      alignItems: "center",
    },

    infoIcon: {
      width: 39,
      height: 39,
      borderRadius: 12,
      backgroundColor: "#F8FAFC",
      alignItems: "center",
      justifyContent: "center",
    },

    infoContent: {
      flex: 1,
      marginLeft: 12,
    },

    infoLabel: {
      color: "#94A3B8",
      fontSize: 9,
      marginBottom: 4,
    },

    infoValue: {
      color: "#0F172A",
      fontSize: 13,
      fontWeight: "700",
    },

    infoDivider: {
      height: 1,
      backgroundColor: "#F1F5F9",
      marginLeft: 51,
    },

    securityCard: {
      backgroundColor: "#F0FDF4",
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "#DCFCE7",
      padding: 17,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 28,
    },

    securityIcon: {
      width: 48,
      height: 48,
      borderRadius: 15,
      backgroundColor: "#DCFCE7",
      alignItems: "center",
      justifyContent: "center",
    },

    securityContent: {
      flex: 1,
      marginHorizontal: 13,
    },

    securityTitleRow: {
      flexDirection: "row",
      alignItems: "center",
    },

    securityTitle: {
      fontSize: 13,
      fontWeight: "800",
      color: "#14532D",
    },

    secureBadge: {
      marginLeft: 7,
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: 5,
      backgroundColor: "#FFFFFF",
    },

    secureBadgeText: {
      color: "#16A34A",
      fontSize: 6,
      fontWeight: "800",
      letterSpacing: 0.4,
    },

    securityDescription: {
      color: "#64748B",
      fontSize: 10,
      lineHeight: 15,
      marginTop: 5,
    },

    securityAction: {
      color: "#16A34A",
      fontSize: 9,
      fontWeight: "700",
      marginTop: 6,
    },

    viewAll: {
      fontSize: 11,
      fontWeight: "700",
      color: "#2563EB",
      marginBottom: 14,
    },

    activityCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "#E2E8F0",
      paddingHorizontal: 16,
      marginBottom: 28,
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
      fontSize: 9,
      color: "#94A3B8",
      marginTop: 4,
    },

    transactionAmount: {
      fontSize: 12,
      fontWeight: "700",
      color: "#0F172A",
    },

    positiveAmount: {
      color: "#16A34A",
    },

    controlsCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "#E2E8F0",
      paddingHorizontal: 16,
    },

    controlRow: {
      minHeight: 73,
      flexDirection: "row",
      alignItems: "center",
    },

    controlIcon: {
      width: 40,
      height: 40,
      borderRadius: 13,
      backgroundColor: "#EFF6FF",
      alignItems: "center",
      justifyContent: "center",
    },

    controlContent: {
      flex: 1,
      marginLeft: 12,
    },

    controlTitle: {
      color: "#0F172A",
      fontSize: 12,
      fontWeight: "700",
    },

    controlSubtitle: {
      color: "#94A3B8",
      fontSize: 9,
      marginTop: 4,
    },

    controlDivider: {
      height: 1,
      backgroundColor: "#F1F5F9",
      marginLeft: 52,
    },

    bottomSpace: {
      height: 110,
    },
  });