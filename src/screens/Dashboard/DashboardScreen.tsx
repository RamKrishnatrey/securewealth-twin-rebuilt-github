import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";

import { dashboardService } from "@/services/dashboardService";
import { transactionService } from "@/services/transactionService";

type AnyRecord = Record<string, any>;

const COLORS = {
  background: "#F8FAFC",
  white: "#FFFFFF",
  blue: "#2563EB",
  blueLight: "#3B82F6",
  purple: "#4F46E5",
  text: "#0F172A",
  muted: "#64748B",
  border: "#E2E8F0",
  green: "#16A34A",
  red: "#DC2626",
};

const money = (value: unknown): string => {
  if (value === null || value === undefined || value === "") {
    return "—";
  }

  const amount = Number(value);

  if (!Number.isFinite(amount)) {
    return "—";
  }

  return `₹${amount.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  })}`;
};

const getRecords = (response: any): AnyRecord[] => {
  if (Array.isArray(response)) {
    return response;
  }

  if (Array.isArray(response?.transactions)) {
    return response.transactions;
  }

  if (Array.isArray(response?.data)) {
    return response.data;
  }

  if (Array.isArray(response?.data?.transactions)) {
    return response.data?.transactions;
  }

  if (Array.isArray(response?.items)) {
    return response.items;
  }

  return [];
};

const getTransactionTitle = (item: AnyRecord): string => {
  return (
    item.title ??
    item.description ??
    item.merchant ??
    item.name ??
    item.category ??
    "Transaction"
  );
};

const getTransactionAmount = (item: AnyRecord): number => {
  const raw = item.amount ?? item.total ?? item.value ?? 0;
  const parsed = Number(raw);

  return Number.isFinite(parsed) ? parsed : 0;
};

const getTransactionDate = (item: AnyRecord): string => {
  const raw =
    item.created_at ??
    item.createdAt ??
    item.date ??
    item.timestamp;

  if (!raw) {
    return "Date unavailable";
  }

  const date = new Date(raw);

  if (Number.isNaN(date.getTime())) {
    return String(raw);
  }

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
  });
};

export default function DashboardScreen() {
  const userName = "Shaurya";

  const [dashboardData, setDashboardData] =
    useState<AnyRecord | null>(null);

  const [recentTransactions, setRecentTransactions] =
    useState<AnyRecord[]>([]);

  const [dashboardLoading, setDashboardLoading] =
    useState(true);

  const [refreshing, setRefreshing] = useState(false);

  const [dashboardError, setDashboardError] =
    useState("");

  const loadDashboard = useCallback(async () => {
    setDashboardError("");

    try {
      const [dashboardResponse, transactionResponse] =
        await Promise.all([
          dashboardService.getDashboard(),
          transactionService.getTransactions(),
        ]);

      const dashboard =
        dashboardResponse?.dashboard ??
        dashboardResponse?.data?.dashboard ??
        dashboardResponse?.data ??
        dashboardResponse;

      setDashboardData(dashboard);
      setRecentTransactions(getRecords(transactionResponse));
    } catch (error) {
      console.error("Dashboard loading error:", error);

      setDashboardError(
        "Couldn't load your latest data. Check that the backend is running."
      );
    } finally {
      setDashboardLoading(false);
      setRefreshing(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadDashboard();
    }, [loadDashboard])
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await loadDashboard();
  };

  const netWorth =
    dashboardData?.net_worth ??
    dashboardData?.netWorth ??
    dashboardData?.total_net_worth;

  const growth =
    dashboardData?.growth_percentage ??
    dashboardData?.growth ??
    dashboardData?.growthPercentage;

  const twinScore =
    dashboardData?.twin_ai_score ??
    dashboardData?.ai_score ??
    dashboardData?.twinScore;

  const spending =
    dashboardData?.total_spending ??
    dashboardData?.total_expenses ??
    dashboardData?.monthly_spending ??
    dashboardData?.expenses;

  const income =
    dashboardData?.total_income ??
    dashboardData?.monthly_income ??
    dashboardData?.income;

  const totalTransactions =
    dashboardData?.total_transactions ??
    dashboardData?.transaction_count;

  const quickActions = [
    {
      label: "Transfer",
      icon: "bank-transfer" as const,
      route: "/transfer",
    },
    {
      label: "Currency",
      icon: "currency-usd" as const,
      route: "/currency-converter",
    },
    {
      label: "Scan QR",
      icon: "qrcode-scan" as const,
      route: "/qr-scanner",
    },
    {
      label: "Twin AI",
      icon: "robot-outline" as const,
      route: "/chat",
    },
    {
      label: "Invest",
      icon: "chart-line" as const,
      route: "/investment-intelligence",
    },
    {
      label: "Shield",
      icon: "shield-check-outline" as const,
      route: "/twin-shield",
    },
    {
      label: "Beneficiary",
      icon: "account-group-outline" as const,
      route: "/beneficiaries",
    },
    {
      label: "Goals",
      icon: "bullseye-arrow" as const,
      route: "/goals",
    },
    {
      label: "Budget",
      icon: "wallet-outline" as const,
      route: "/budget-planner",
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}
      edges={["top"]}
    >
      <StatusBar
        backgroundColor={COLORS.background}
        barStyle="dark-content"
      />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 12,
          paddingBottom: 35,
        }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[COLORS.blue]}
          />
        }
      >
        {/* HEADER */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 24,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 14,
                color: COLORS.muted,
              }}
            >
              Good Morning
            </Text>

            <Text
              style={{
                fontSize: 27,
                fontWeight: "800",
                color: COLORS.text,
                marginTop: 3,
              }}
            >
              {userName} 👋
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 7,
              }}
            >
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: COLORS.green,
                  marginRight: 7,
                }}
              />

              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.muted,
                }}
              >
                Twin AI Dashboard
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() =>
              router.push("/notifications" as any)
            }
            style={{
              width: 46,
              height: 46,
              backgroundColor: COLORS.white,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: COLORS.border,
            }}
          >
            <Ionicons
              name="notifications-outline"
              size={23}
              color={COLORS.text}
            />
          </TouchableOpacity>
        </View>

        {/* LOADING */}

        {dashboardLoading && (
          <View
            style={{
              paddingVertical: 12,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ActivityIndicator
              color={COLORS.blue}
              size="small"
            />

            <Text
              style={{
                marginLeft: 10,
                color: COLORS.muted,
                fontSize: 13,
              }}
            >
              Loading your financial data...
            </Text>
          </View>
        )}

        {/* ERROR */}

        {!!dashboardError && (
          <View
            style={{
              padding: 14,
              borderRadius: 14,
              backgroundColor: "#FEF2F2",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                color: COLORS.red,
                fontSize: 13,
                marginBottom: 8,
              }}
            >
              {dashboardError}
            </Text>

            <TouchableOpacity onPress={loadDashboard}>
              <Text
                style={{
                  color: COLORS.blue,
                  fontWeight: "700",
                }}
              >
                Try again
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* NET WORTH CARD */}

        <LinearGradient
          colors={[
            COLORS.blue,
            COLORS.blueLight,
            COLORS.purple,
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            borderRadius: 26,
            padding: 23,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: "#DBEAFE",
              fontSize: 12,
              fontWeight: "700",
              letterSpacing: 1,
            }}
          >
            RECORDED BALANCE
          </Text>

          <Text
            style={{
              color: COLORS.white,
              fontSize: 33,
              fontWeight: "800",
              marginTop: 10,
            }}
          >
            {money(netWorth)}
          </Text>

          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.18)",
              borderRadius: 20,
              paddingHorizontal: 11,
              paddingVertical: 7,
              marginTop: 12,
            }}
          >
            <MaterialCommunityIcons
              name="trending-up"
              size={17}
              color={COLORS.white}
            />

            <Text
              style={{
                color: COLORS.white,
                fontSize: 13,
                fontWeight: "700",
                marginLeft: 5,
              }}
            >
              {growth == null
                ? "Growth unavailable"
                : `${Number(growth) > 0 ? "+" : ""}${growth}%`}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 25,
              gap: 12,
            }}
          >
            <View
              style={{
                flex: 1,
                padding: 13,
                borderRadius: 16,
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
            >
              <Text
                style={{
                  color: "#DBEAFE",
                  fontSize: 12,
                }}
              >
                Twin AI Score
              </Text>

              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 21,
                  fontWeight: "800",
                  marginTop: 5,
                }}
              >
                {twinScore == null
                  ? "— / 100"
                  : `${twinScore} / 100`}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                padding: 13,
                borderRadius: 16,
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
            >
              <Text
                style={{
                  color: "#DBEAFE",
                  fontSize: 12,
                }}
              >
                Transactions
              </Text>

              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 21,
                  fontWeight: "800",
                  marginTop: 5,
                }}
              >
                {totalTransactions ?? recentTransactions.length}
              </Text>
            </View>
          </View>
        </LinearGradient>

        {/* FINANCIAL OVERVIEW */}

        <Text
          style={{
            fontSize: 19,
            fontWeight: "800",
            color: COLORS.text,
            marginBottom: 13,
          }}
        >
          Financial Overview
        </Text>

        <View
          style={{
            flexDirection: "row",
            gap: 12,
            marginBottom: 25,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.white,
              borderRadius: 20,
              padding: 17,
              borderWidth: 1,
              borderColor: COLORS.border,
            }}
          >
            <View
              style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                backgroundColor: "#DCFCE7",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 12,
              }}
            >
              <Ionicons
                name="arrow-down"
                size={21}
                color={COLORS.green}
              />
            </View>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.muted,
              }}
            >
              Total Income
            </Text>

            <Text
              style={{
                fontSize: 20,
                fontWeight: "800",
                color: COLORS.text,
                marginTop: 6,
              }}
            >
              {money(income)}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.white,
              borderRadius: 20,
              padding: 17,
              borderWidth: 1,
              borderColor: COLORS.border,
            }}
          >
            <View
              style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                backgroundColor: "#FEE2E2",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 12,
              }}
            >
              <Ionicons
                name="arrow-up"
                size={21}
                color={COLORS.red}
              />
            </View>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.muted,
              }}
            >
              Total Expenses
            </Text>

            <Text
              style={{
                fontSize: 20,
                fontWeight: "800",
                color: COLORS.text,
                marginTop: 6,
              }}
            >
              {money(spending)}
            </Text>
          </View>
        </View>

        {/* QUICK ACTIONS */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Text
            style={{
              fontSize: 19,
              fontWeight: "800",
              color: COLORS.text,
            }}
          >
            Quick Actions
          </Text>

          <Text
            style={{
              fontSize: 12,
              color: COLORS.muted,
            }}
          >
            Explore
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginBottom: 25,
          }}
        >
          {quickActions.map((action) => (
            <TouchableOpacity
              key={action.label}
              activeOpacity={0.75}
              onPress={() =>
                router.push(action.route as any)
              }
              style={{
                width: "23.5%",
                minHeight: 100,
                backgroundColor: COLORS.white,
                borderRadius: 18,
                borderWidth: 1,
                borderColor: COLORS.border,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 13,
                paddingHorizontal: 3,
                marginBottom: 10,
              }}
            >
              <MaterialCommunityIcons
                name={action.icon}
                size={27}
                color={COLORS.blue}
              />

              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "700",
                  color: COLORS.text,
                  marginTop: 9,
                  textAlign: "center",
                }}
              >
                {action.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* RECENT TRANSACTIONS */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Text
            style={{
              fontSize: 19,
              fontWeight: "800",
              color: COLORS.text,
            }}
          >
            Recent Transactions
          </Text>

          <TouchableOpacity
            onPress={() =>
              router.push("/transactions" as any)
            }
          >
            <Text
              style={{
                color: COLORS.blue,
                fontSize: 13,
                fontWeight: "700",
              }}
            >
              View All
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: COLORS.white,
            borderRadius: 22,
            paddingHorizontal: 15,
            borderWidth: 1,
            borderColor: COLORS.border,
          }}
        >
          {dashboardLoading && recentTransactions.length === 0 ? (
            <View
              style={{
                padding: 25,
                alignItems: "center",
              }}
            >
              <ActivityIndicator color={COLORS.blue} />

              <Text
                style={{
                  marginTop: 10,
                  color: COLORS.muted,
                  fontSize: 13,
                }}
              >
                Loading transactions...
              </Text>
            </View>
          ) : recentTransactions.length === 0 ? (
            <View
              style={{
                paddingVertical: 25,
                alignItems: "center",
              }}
            >
              <Ionicons
                name="receipt-outline"
                size={35}
                color={COLORS.muted}
              />

              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "700",
                  color: COLORS.text,
                  marginTop: 10,
                }}
              >
                No transactions yet
              </Text>

              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.muted,
                  marginTop: 5,
                  textAlign: "center",
                }}
              >
                Your transactions will appear here once they
                are saved.
              </Text>
            </View>
          ) : (
            recentTransactions.slice(0, 5).map((item, index) => {
              const amount = getTransactionAmount(item);

              const type = String(
                item.type ??
                  item.transaction_type ??
                  item.transactionType ??
                  ""
              ).toLowerCase();

              const isIncome =
                type.includes("income") ||
                type.includes("credit") ||
                type.includes("deposit") ||
                type.includes("received");

              const status = String(item.status ?? "").toLowerCase();

              return (
                <View
                  key={
                    item.id ??
                    item.transaction_id ??
                    `${getTransactionTitle(item)}-${index}`
                  }
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 15,
                    borderBottomWidth:
                      index === Math.min(recentTransactions.length, 5) - 1
                        ? 0
                        : 1,
                    borderBottomColor: COLORS.border,
                  }}
                >
                  <View
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 15,
                      backgroundColor: isIncome ? "#DCFCE7" : "#EFF6FF",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 12,
                    }}
                  >
                    <Ionicons
                      name={isIncome ? "arrow-down" : "arrow-up"}
                      size={22}
                      color={isIncome ? COLORS.green : COLORS.blue}
                    />
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text
                      numberOfLines={1}
                      style={{
                        fontSize: 14,
                        fontWeight: "700",
                        color: COLORS.text,
                      }}
                    >
                      {getTransactionTitle(item)}
                    </Text>

                    <Text
                      style={{
                        fontSize: 11,
                        color: COLORS.muted,
                        marginTop: 5,
                      }}
                    >
                      {getTransactionDate(item)}
                      {status ? ` • ${status}` : ""}
                    </Text>
                  </View>

                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "800",
                      color: isIncome ? COLORS.green : COLORS.text,
                      marginLeft: 8,
                    }}
                  >
                    {isIncome ? "+" : "-"}
                    {money(Math.abs(amount))}
                  </Text>
                </View>
              );
            })
          )}
        </View>

        {/* TWIN SHIELD */}

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => router.push("/twin-shield" as any)}
          style={{ marginTop: 22 }}
        >
          <LinearGradient
            colors={["#0F172A", "#1E3A8A"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              borderRadius: 22,
              padding: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1, paddingRight: 12 }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 17,
                  fontWeight: "800",
                }}
              >
                Twin Shield
              </Text>

              <Text
                style={{
                  color: "#CBD5E1",
                  fontSize: 12,
                  lineHeight: 18,
                  marginTop: 7,
                }}
              >
                Open your fraud protection tools and security
                features.
              </Text>

              <Text
                style={{
                  color: "#93C5FD",
                  fontSize: 12,
                  fontWeight: "700",
                  marginTop: 12,
                }}
              >
                Explore Security →
              </Text>
            </View>

            <MaterialCommunityIcons
              name="shield-check"
              size={54}
              color="#93C5FD"
            />
          </LinearGradient>
        </TouchableOpacity>

        {/* FOOTER */}

        <Text
          style={{
            color: COLORS.muted,
            fontSize: 11,
            textAlign: "center",
            marginTop: 22,
          }}
        >
          SecureWealth Twin • Financial Dashboard
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}