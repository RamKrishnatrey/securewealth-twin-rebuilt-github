import React, { useMemo, useState } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Modal,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import {
  router,
  useLocalSearchParams,
} from "expo-router";

type Period =
  | "This Month"
  | "Last Month"
  | "3 Months"
  | "6 Months";

type Transaction = {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  value: number;
  positive: boolean;
  icon: React.ComponentProps<
    typeof Ionicons
  >["name"];
};

const transactions: Transaction[] = [
  {
    id: "1",
    title: "Salary Credit",
    subtitle: "04 Aug 2026 • 09:42 AM",
    amount: "+₹65,000",
    value: 65000,
    positive: true,
    icon: "arrow-down",
  },
  {
    id: "2",
    title: "Amazon",
    subtitle: "03 Aug 2026 • 06:18 PM",
    amount: "-₹2,499",
    value: 2499,
    positive: false,
    icon: "cart-outline",
  },
  {
    id: "3",
    title: "Electricity Bill",
    subtitle: "02 Aug 2026 • 11:26 AM",
    amount: "-₹3,240",
    value: 3240,
    positive: false,
    icon: "flash-outline",
  },
  {
    id: "4",
    title: "UPI Transfer",
    subtitle: "01 Aug 2026 • 08:14 PM",
    amount: "-₹5,000",
    value: 5000,
    positive: false,
    icon: "swap-horizontal-outline",
  },
  {
    id: "5",
    title: "Interest Credit",
    subtitle: "01 Aug 2026 • 10:05 AM",
    amount: "+₹1,240",
    value: 1240,
    positive: true,
    icon: "trending-up-outline",
  },
];

const periods: Period[] = [
  "This Month",
  "Last Month",
  "3 Months",
  "6 Months",
];

export default function AccountStatementScreen() {
  const params = useLocalSearchParams<{
    id?: string;
    bank?: string;
    type?: string;
    accountNumber?: string;
    balance?: string;
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

  const [period, setPeriod] =
    useState<Period>("This Month");

  const [
    periodModalVisible,
    setPeriodModalVisible,
  ] = useState(false);

  const totals = useMemo(() => {
    let credit = 0;
    let debit = 0;

    transactions.forEach(
      (transaction) => {
        if (transaction.positive) {
          credit += transaction.value;
        } else {
          debit += transaction.value;
        }
      }
    );

    return {
      credit,
      debit,
    };
  }, []);

  const formatAmount = (
    value: number
  ) => {
    return `₹${value.toLocaleString(
      "en-IN"
    )}`;
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
            onPress={() =>
              router.back()
            }
          >
            <Ionicons
              name="chevron-back"
              size={22}
              color="#0F172A"
            />
          </TouchableOpacity>

          <View
            style={
              styles.headerCenter
            }
          >
            <Text
              style={
                styles.headerTitle
              }
            >
              Account Statement
            </Text>

            <Text
              style={
                styles.headerSubtitle
              }
            >
              Transaction history
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.headerButton}
            onPress={() => {
              /*
               * Actual export functionality
               * can be connected later.
               */
            }}
          >
            <Ionicons
              name="download-outline"
              size={21}
              color="#2563EB"
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
          {/* ACCOUNT CARD */}

          <View
            style={
              styles.accountCard
            }
          >
            <View
              style={
                styles.accountTop
              }
            >
              <View
                style={
                  styles.bankIcon
                }
              >
                <MaterialCommunityIcons
                  name="bank-outline"
                  size={23}
                  color="#2563EB"
                />
              </View>

              <View
                style={
                  styles.accountInfo
                }
              >
                <Text
                  style={
                    styles.bankName
                  }
                >
                  {bank}
                </Text>

                <Text
                  style={
                    styles.accountMeta
                  }
                >
                  {accountType} •{" "}
                  {accountNumber}
                </Text>
              </View>

              <View
                style={
                  styles.verifiedBadge
                }
              >
                <MaterialCommunityIcons
                  name="shield-check-outline"
                  size={15}
                  color="#16A34A"
                />

                <Text
                  style={
                    styles.verifiedText
                  }
                >
                  SECURE
                </Text>
              </View>
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
                  CURRENT BALANCE
                </Text>

                <Text
                  style={
                    styles.balance
                  }
                >
                  {balance}
                </Text>
              </View>

              <View
                style={
                  styles.activeContainer
                }
              >
                <View
                  style={
                    styles.activeDot
                  }
                />

                <Text
                  style={
                    styles.activeText
                  }
                >
                  Active
                </Text>
              </View>
            </View>
          </View>

          {/* PERIOD */}

          <View
            style={
              styles.sectionHeader
            }
          >
            <View>
              <Text
                style={
                  styles.sectionTitle
                }
              >
                Statement Period
              </Text>

              <Text
                style={
                  styles.sectionSubtitle
                }
              >
                Choose transaction range
              </Text>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.75}
            style={
              styles.periodSelector
            }
            onPress={() =>
              setPeriodModalVisible(
                true
              )
            }
          >
            <View
              style={
                styles.periodIcon
              }
            >
              <Ionicons
                name="calendar-outline"
                size={20}
                color="#2563EB"
              />
            </View>

            <View
              style={
                styles.periodContent
              }
            >
              <Text
                style={
                  styles.periodLabel
                }
              >
                Selected Period
              </Text>

              <Text
                style={
                  styles.periodValue
                }
              >
                {period}
              </Text>
            </View>

            <Ionicons
              name="chevron-down"
              size={19}
              color="#64748B"
            />
          </TouchableOpacity>

          {/* SUMMARY */}

          <View
            style={
              styles.summaryGrid
            }
          >
            <View
              style={
                styles.summaryCard
              }
            >
              <View
                style={[
                  styles.summaryIcon,
                  {
                    backgroundColor:
                      "#F0FDF4",
                  },
                ]}
              >
                <Ionicons
                  name="arrow-down"
                  size={18}
                  color="#16A34A"
                />
              </View>

              <Text
                style={
                  styles.summaryLabel
                }
              >
                TOTAL CREDIT
              </Text>

              <Text
                style={[
                  styles.summaryValue,
                  styles.creditValue,
                ]}
              >
                {formatAmount(
                  totals.credit
                )}
              </Text>
            </View>

            <View
              style={
                styles.summaryCard
              }
            >
              <View
                style={[
                  styles.summaryIcon,
                  {
                    backgroundColor:
                      "#FEF2F2",
                  },
                ]}
              >
                <Ionicons
                  name="arrow-up"
                  size={18}
                  color="#DC2626"
                />
              </View>

              <Text
                style={
                  styles.summaryLabel
                }
              >
                TOTAL DEBIT
              </Text>

              <Text
                style={[
                  styles.summaryValue,
                  styles.debitValue,
                ]}
              >
                {formatAmount(
                  totals.debit
                )}
              </Text>
            </View>
          </View>

          {/* STATEMENT INFO */}

          <View
            style={
              styles.statementInfo
            }
          >
            <StatementMetric
              label="Opening Balance"
              value="₹2,87,179"
            />

            <View
              style={
                styles.metricDivider
              }
            />

            <StatementMetric
              label="Transactions"
              value={`${transactions.length}`}
            />

            <View
              style={
                styles.metricDivider
              }
            />

            <StatementMetric
              label="Closing Balance"
              value={balance}
            />
          </View>

          {/* TRANSACTIONS */}

          <View
            style={
              styles.sectionHeader
            }
          >
            <View>
              <Text
                style={
                  styles.sectionTitle
                }
              >
                Transactions
              </Text>

              <Text
                style={
                  styles.sectionSubtitle
                }
              >
                {transactions.length}{" "}
                transactions in{" "}
                {period.toLowerCase()}
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
                style={
                  styles.viewAll
                }
              >
                Full activity
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={
              styles.transactionsCard
            }
          >
            {transactions.map(
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
                      transactions.length -
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
                        transaction.icon
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

          {/* EXPORT */}

          <TouchableOpacity
            activeOpacity={0.82}
            style={
              styles.exportButton
            }
            onPress={() => {
              /*
               * PDF/export functionality
               * comes later.
               */
            }}
          >
            <View
              style={
                styles.exportIcon
              }
            >
              <Ionicons
                name="document-text-outline"
                size={21}
                color="#FFFFFF"
              />
            </View>

            <View
              style={
                styles.exportContent
              }
            >
              <Text
                style={
                  styles.exportTitle
                }
              >
                Export Statement
              </Text>

              <Text
                style={
                  styles.exportSubtitle
                }
              >
                Download account
                statement
              </Text>
            </View>

            <Ionicons
              name="download-outline"
              size={21}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          {/* SECURITY */}

          <View
            style={
              styles.securityNote
            }
          >
            <MaterialCommunityIcons
              name="shield-lock-outline"
              size={18}
              color="#16A34A"
            />

            <Text
              style={
                styles.securityText
              }
            >
              Statement data is protected
              by Twin Shield encryption.
            </Text>
          </View>

          <View
            style={
              styles.bottomSpace
            }
          />
        </ScrollView>

        {/* PERIOD MODAL */}

        <Modal
          transparent
          animationType="fade"
          visible={
            periodModalVisible
          }
          onRequestClose={() =>
            setPeriodModalVisible(
              false
            )
          }
        >
          <TouchableOpacity
            activeOpacity={1}
            style={
              styles.modalOverlay
            }
            onPress={() =>
              setPeriodModalVisible(
                false
              )
            }
          >
            <TouchableOpacity
              activeOpacity={1}
              style={
                styles.modalCard
              }
              onPress={() => {}}
            >
              <View
                style={
                  styles.modalHandle
                }
              />

              <Text
                style={
                  styles.modalTitle
                }
              >
                Statement Period
              </Text>

              <Text
                style={
                  styles.modalSubtitle
                }
              >
                Select the transaction
                period you want to view
              </Text>

              {periods.map(
                (item) => {
                  const selected =
                    period === item;

                  return (
                    <TouchableOpacity
                      key={item}
                      activeOpacity={0.7}
                      style={[
                        styles.periodOption,

                        selected &&
                          styles.periodOptionSelected,
                      ]}
                      onPress={() => {
                        setPeriod(item);

                        setPeriodModalVisible(
                          false
                        );
                      }}
                    >
                      <View>
                        <Text
                          style={[
                            styles.periodOptionText,

                            selected &&
                              styles.periodOptionTextSelected,
                          ]}
                        >
                          {item}
                        </Text>
                      </View>

                      {selected && (
                        <View
                          style={
                            styles.selectedCircle
                          }
                        >
                          <Ionicons
                            name="checkmark"
                            size={13}
                            color="#FFFFFF"
                          />
                        </View>
                      )}
                    </TouchableOpacity>
                  );
                }
              )}

              <TouchableOpacity
                activeOpacity={0.75}
                style={
                  styles.modalCancel
                }
                onPress={() =>
                  setPeriodModalVisible(
                    false
                  )
                }
              >
                <Text
                  style={
                    styles.modalCancelText
                  }
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      </SafeAreaView>
    </>
  );
}

type StatementMetricProps = {
  label: string;
  value: string;
};

function StatementMetric({
  label,
  value,
}: StatementMetricProps) {
  return (
    <View
      style={
        styles.metricContainer
      }
    >
      <Text
        style={styles.metricLabel}
      >
        {label}
      </Text>

      <Text
        style={styles.metricValue}
      >
        {value}
      </Text>
    </View>
  );
}

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

    accountCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: 22,
      padding: 18,
      borderWidth: 1,
      borderColor: "#E2E8F0",
      marginBottom: 26,
    },

    accountTop: {
      flexDirection: "row",
      alignItems: "center",
    },

    bankIcon: {
      width: 48,
      height: 48,
      borderRadius: 15,
      backgroundColor: "#EFF6FF",
      alignItems: "center",
      justifyContent: "center",
    },

    accountInfo: {
      flex: 1,
      marginLeft: 13,
    },

    bankName: {
      fontSize: 14,
      fontWeight: "800",
      color: "#0F172A",
    },

    accountMeta: {
      color: "#94A3B8",
      fontSize: 10,
      marginTop: 5,
    },

    verifiedBadge: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#F0FDF4",
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 9,
    },

    verifiedText: {
      color: "#16A34A",
      fontSize: 7,
      fontWeight: "800",
      marginLeft: 4,
      letterSpacing: 0.5,
    },

    accountDivider: {
      height: 1,
      backgroundColor: "#F1F5F9",
      marginVertical: 17,
    },

    balanceRow: {
      flexDirection: "row",
      justifyContent:
        "space-between",
      alignItems: "flex-end",
    },

    balanceLabel: {
      color: "#94A3B8",
      fontSize: 8,
      fontWeight: "700",
      letterSpacing: 1,
    },

    balance: {
      color: "#0F172A",
      fontSize: 25,
      fontWeight: "800",
      marginTop: 6,
    },

    activeContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5,
    },

    activeDot: {
      width: 7,
      height: 7,
      borderRadius: 4,
      backgroundColor: "#22C55E",
      marginRight: 6,
    },

    activeText: {
      color: "#16A34A",
      fontSize: 9,
      fontWeight: "700",
    },

    sectionHeader: {
      flexDirection: "row",
      justifyContent:
        "space-between",
      alignItems: "flex-end",
      marginBottom: 13,
      marginTop: 3,
    },

    sectionTitle: {
      color: "#0F172A",
      fontSize: 18,
      fontWeight: "800",
    },

    sectionSubtitle: {
      color: "#94A3B8",
      fontSize: 10,
      marginTop: 4,
    },

    periodSelector: {
      minHeight: 70,
      backgroundColor: "#FFFFFF",
      borderRadius: 18,
      borderWidth: 1,
      borderColor: "#E2E8F0",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 15,
      marginBottom: 18,
    },

    periodIcon: {
      width: 42,
      height: 42,
      borderRadius: 13,
      backgroundColor: "#EFF6FF",
      alignItems: "center",
      justifyContent: "center",
    },

    periodContent: {
      flex: 1,
      marginLeft: 12,
    },

    periodLabel: {
      fontSize: 9,
      color: "#94A3B8",
    },

    periodValue: {
      fontSize: 13,
      fontWeight: "700",
      color: "#0F172A",
      marginTop: 4,
    },

    summaryGrid: {
      flexDirection: "row",
      justifyContent:
        "space-between",
      marginBottom: 16,
    },

    summaryCard: {
      width: "48.5%",
      backgroundColor: "#FFFFFF",
      borderRadius: 18,
      borderWidth: 1,
      borderColor: "#E2E8F0",
      padding: 15,
    },

    summaryIcon: {
      width: 36,
      height: 36,
      borderRadius: 11,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 13,
    },

    summaryLabel: {
      fontSize: 8,
      fontWeight: "700",
      color: "#94A3B8",
      letterSpacing: 0.7,
    },

    summaryValue: {
      fontSize: 17,
      fontWeight: "800",
      marginTop: 6,
    },

    creditValue: {
      color: "#16A34A",
    },

    debitValue: {
      color: "#DC2626",
    },

    statementInfo: {
      backgroundColor: "#FFFFFF",
      borderRadius: 18,
      borderWidth: 1,
      borderColor: "#E2E8F0",
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 16,
      marginBottom: 27,
    },

    metricContainer: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: 5,
    },

    metricLabel: {
      fontSize: 8,
      color: "#94A3B8",
      textAlign: "center",
    },

    metricValue: {
      fontSize: 10,
      fontWeight: "800",
      color: "#0F172A",
      marginTop: 6,
      textAlign: "center",
    },

    metricDivider: {
      width: 1,
      height: 30,
      backgroundColor: "#E2E8F0",
    },

    viewAll: {
      color: "#2563EB",
      fontSize: 10,
      fontWeight: "700",
    },

    transactionsCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "#E2E8F0",
      paddingHorizontal: 16,
      marginBottom: 20,
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
      fontSize: 12,
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

    exportButton: {
      minHeight: 70,
      borderRadius: 19,
      backgroundColor: "#2563EB",
      paddingHorizontal: 17,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 14,
    },

    exportIcon: {
      width: 42,
      height: 42,
      borderRadius: 13,
      backgroundColor:
        "rgba(255,255,255,0.14)",
      alignItems: "center",
      justifyContent: "center",
    },

    exportContent: {
      flex: 1,
      marginLeft: 12,
    },

    exportTitle: {
      color: "#FFFFFF",
      fontSize: 13,
      fontWeight: "800",
    },

    exportSubtitle: {
      color: "#BFDBFE",
      fontSize: 9,
      marginTop: 4,
    },

    securityNote: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
    },

    securityText: {
      color: "#64748B",
      fontSize: 9,
      marginLeft: 7,
    },

    modalOverlay: {
      flex: 1,
      backgroundColor:
        "rgba(15,23,42,0.42)",
      justifyContent: "flex-end",
    },

    modalCard: {
      backgroundColor: "#FFFFFF",
      borderTopLeftRadius: 28,
      borderTopRightRadius: 28,
      paddingHorizontal: 20,
      paddingTop: 12,
      paddingBottom: 30,
    },

    modalHandle: {
      width: 42,
      height: 4,
      borderRadius: 2,
      backgroundColor: "#CBD5E1",
      alignSelf: "center",
      marginBottom: 20,
    },

    modalTitle: {
      color: "#0F172A",
      fontSize: 20,
      fontWeight: "800",
    },

    modalSubtitle: {
      color: "#94A3B8",
      fontSize: 11,
      marginTop: 5,
      marginBottom: 18,
    },

    periodOption: {
      minHeight: 58,
      borderRadius: 15,
      paddingHorizontal: 15,
      flexDirection: "row",
      alignItems: "center",
      justifyContent:
        "space-between",
      marginBottom: 8,
      borderWidth: 1,
      borderColor: "#E2E8F0",
    },

    periodOptionSelected: {
      backgroundColor: "#EFF6FF",
      borderColor: "#BFDBFE",
    },

    periodOptionText: {
      color: "#475569",
      fontSize: 12,
      fontWeight: "600",
    },

    periodOptionTextSelected: {
      color: "#2563EB",
      fontWeight: "800",
    },

    selectedCircle: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: "#2563EB",
      alignItems: "center",
      justifyContent: "center",
    },

    modalCancel: {
      minHeight: 52,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 6,
    },

    modalCancelText: {
      color: "#64748B",
      fontSize: 12,
      fontWeight: "700",
    },

    bottomSpace: {
      height: 80,
    },
  });