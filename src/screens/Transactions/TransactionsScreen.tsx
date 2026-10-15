
import React, { useCallback, useMemo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, useFocusEffect } from "expo-router";
import styles from "./styles";
import FilterModal, { TransactionFilters } from "./FilterModal";
import ExportModal, { ExportFormat, ExportPeriod } from "./ExportModal";
import { transactionService } from "@/services/transactionService";

type FilterType = "All" | "Income" | "Expense";

type Transaction = {
  id: string | number;
  title: string;
  category: string;
  date: string;
  amount: number;
  type: "income" | "expense";
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor: string;
  iconBackground: string;
  status: "Completed" | "Pending";
};

function formatDate(value: unknown): string {
  if (!value) return "Date unavailable";

  const date = new Date(String(value));
  if (Number.isNaN(date.getTime())) return String(value);

  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getIcon(category: string): Transaction["icon"] {
  const value = category.toLowerCase();

  if (value.includes("food") || value.includes("dining")) return "food-outline";
  if (value.includes("shop")) return "shopping-outline";
  if (value.includes("transport") || value.includes("travel")) return "car-outline";
  if (value.includes("entertainment")) return "television-play";
  if (value.includes("salary") || value.includes("income")) return "cash-plus";
  if (value.includes("freelance")) return "briefcase-outline";

  return "cash";
}

function normalizeTransaction(item: any, index: number): Transaction {
  const rawType = String(
    item.type ?? item.transaction_type ?? item.transactionType ?? "expense"
  ).toLowerCase();

  const type: Transaction["type"] = [
    "income",
    "credit",
    "received",
    "deposit",
  ].includes(rawType)
    ? "income"
    : "expense";

  const category = String(item.category ?? "Other");
  const statusValue = String(item.status ?? "Completed").toLowerCase();

  return {
    id: item.id ?? item.transaction_id ?? index + 1,
    title: String(
      item.title ??
        item.description ??
        item.payee ??
        item.merchant ??
        item.recipient ??
        "Transaction"
    ),
    category,
    date: formatDate(item.date ?? item.created_at ?? item.timestamp),
    amount: Math.abs(Number(item.amount ?? 0)),
    type,
    icon: getIcon(category),
    iconColor: type === "income" ? "#16A34A" : "#2563EB",
    iconBackground: type === "income" ? "#DCFCE7" : "#DBEAFE",
    status: statusValue === "pending" ? "Pending" : "Completed",
  };
}

function extractRecords(response: any): any[] {
  if (Array.isArray(response)) return response;
  if (Array.isArray(response?.transactions)) return response.transactions;
  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response?.items)) return response.items;
  return [];
}

export default function TransactionsScreen() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [selectedFilter, setSelectedFilter] = useState<FilterType>("All");
  const [search, setSearch] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);
  const [exportVisible, setExportVisible] = useState(false);

  const [advancedFilters, setAdvancedFilters] =
    useState<TransactionFilters>({
      category: "All",
      status: "All",
    });

  const loadTransactions = useCallback(async () => {
    setLoading(true);
    setLoadError("");

    try {
      const response = await transactionService.getTransactions();
      const records = extractRecords(response);
      setTransactions(records.map(normalizeTransaction));
    } catch (error) {
      console.error("Failed to load transactions:", error);
      setLoadError(
        "Unable to load transactions. Check that your backend is running."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      let active = true;

      const fetchData = async () => {
        setLoading(true);
        setLoadError("");

        try {
          const response = await transactionService.getTransactions();
          const records = extractRecords(response);

          if (active) {
            setTransactions(records.map(normalizeTransaction));
          }
        } catch (error) {
          console.error("Failed to load transactions:", error);
          if (active) {
            setLoadError(
              "Unable to load transactions. Check that your backend is running."
            );
          }
        } finally {
          if (active) setLoading(false);
        }
      };

      fetchData();

      return () => {
        active = false;
      };
    }, [])
  );

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const matchesFilter =
        selectedFilter === "All" ||
        (selectedFilter === "Income" && transaction.type === "income") ||
        (selectedFilter === "Expense" && transaction.type === "expense");

      const query = search.toLowerCase().trim();
      const matchesSearch =
        transaction.title.toLowerCase().includes(query) ||
        transaction.category.toLowerCase().includes(query);

      const matchesCategory =
        advancedFilters.category === "All" ||
        transaction.category === advancedFilters.category;

      const matchesStatus =
        advancedFilters.status === "All" ||
        transaction.status === advancedFilters.status;

      return (
        matchesFilter && matchesSearch && matchesCategory && matchesStatus
      );
    });
  }, [transactions, selectedFilter, search, advancedFilters]);

  const totals = useMemo(() => {
    return transactions.reduce(
      (result, transaction) => {
        if (transaction.type === "income") result.income += transaction.amount;
        else result.expenses += transaction.amount;
        return result;
      },
      { income: 0, expenses: 0 }
    );
  }, [transactions]);

  const currency = (amount: number) =>
    `₹${amount.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;

  const monthName = new Date().toLocaleDateString("en-IN", {
    month: "long",
  });

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

      <SafeAreaView style={styles.container} edges={["top"]}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <View>
              <Text style={styles.eyebrow}>SECUREWEALTH TWIN</Text>
              <Text style={styles.title}>Activity</Text>
              <Text style={styles.subtitle}>
                Track and understand every transaction
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.headerButton}
              onPress={() => setExportVisible(true)}
            >
              <Ionicons name="download-outline" size={22} color="#0F172A" />
            </TouchableOpacity>
          </View>

          <LinearGradient
            colors={["#2563EB", "#4F46E5"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.summaryCard}
          >
            <View style={styles.summaryTop}>
              <View>
                <Text style={styles.summaryLabel}>
                  {monthName.toUpperCase()} ACTIVITY
                </Text>
                <Text style={styles.summaryAmount}>
                  {currency(totals.expenses)}
                </Text>
                <Text style={styles.summaryCaption}>
                  Total spending in loaded records
                </Text>
              </View>

              <View style={styles.summaryChip}>
                <MaterialCommunityIcons
                  name="swap-vertical"
                  size={16}
                  color="#FFFFFF"
                />
                <Text style={styles.summaryChipText}>
                  {transactions.length}
                </Text>
              </View>
            </View>

            <View style={styles.summaryDivider} />

            <View style={styles.summaryMetrics}>
              <View style={styles.summaryMetric}>
                <Text style={styles.summaryMetricLabel}>Money In</Text>
                <Text style={styles.incomeValue}>
                  +{currency(totals.income)}
                </Text>
              </View>

              <View style={styles.verticalDivider} />

              <View style={styles.summaryMetric}>
                <Text style={styles.summaryMetricLabel}>Money Out</Text>
                <Text style={styles.expenseValue}>
                  -{currency(totals.expenses)}
                </Text>
              </View>
            </View>
          </LinearGradient>

          <View style={styles.aiCard}>
            <View style={styles.aiIcon}>
              <MaterialCommunityIcons
                name="brain"
                size={22}
                color="#2563EB"
              />
            </View>

            <View style={styles.aiContent}>
              <View style={styles.aiTitleRow}>
                <Text style={styles.aiTitle}>Transaction Summary</Text>
                <View style={styles.liveChip}>
                  <View style={styles.liveDot} />
                  <Text style={styles.liveText}>DATA</Text>
                </View>
              </View>

              <Text style={styles.aiText}>
                You have {transactions.length} loaded transactions, with{" "}
                <Text style={styles.aiHighlight}>
                  {currency(totals.expenses)}
                </Text>{" "}
                in expenses and {currency(totals.income)} in income. This is a
                summary of transaction records, not an AI-generated fraud
                assessment.
              </Text>
            </View>
          </View>

          <View style={styles.searchContainer}>
            <Ionicons name="search-outline" size={20} color="#94A3B8" />

            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Search transactions"
              placeholderTextColor="#94A3B8"
              style={styles.searchInput}
            />

            {search.length > 0 && (
              <TouchableOpacity onPress={() => setSearch("")}>
                <Ionicons
                  name="close-circle"
                  size={20}
                  color="#94A3B8"
                />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.filters}>
            {(["All", "Income", "Expense"] as FilterType[]).map((filter) => {
              const active = selectedFilter === filter;

              return (
                <TouchableOpacity
                  key={filter}
                  onPress={() => setSelectedFilter(filter)}
                  style={[
                    styles.filterChip,
                    active && styles.filterChipActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.filterText,
                      active && styles.filterTextActive,
                    ]}
                  >
                    {filter}
                  </Text>
                </TouchableOpacity>
              );
            })}

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.filterIconButton}
              onPress={() => setFilterVisible(true)}
            >
              <Ionicons
                name="options-outline"
                size={19}
                color={
                  advancedFilters.category !== "All" ||
                  advancedFilters.status !== "All"
                    ? "#2563EB"
                    : "#475569"
                }
              />

              {(advancedFilters.category !== "All" ||
                advancedFilters.status !== "All") && (
                <View
                  style={{
                    position: "absolute",
                    top: 6,
                    right: 6,
                    width: 7,
                    height: 7,
                    borderRadius: 4,
                    backgroundColor: "#2563EB",
                    borderWidth: 1.5,
                    borderColor: "#FFFFFF",
                  }}
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <Text style={styles.transactionCount}>
              {filteredTransactions.length} transactions
            </Text>
          </View>

          {loading && (
            <View style={{ paddingVertical: 24, alignItems: "center" }}>
              <ActivityIndicator size="small" color="#2563EB" />
              <Text style={{ color: "#64748B", marginTop: 8 }}>
                Loading transactions...
              </Text>
            </View>
          )}

          {!loading && !!loadError && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>Couldn't load transactions</Text>
              <Text style={styles.emptyText}>{loadError}</Text>
              <TouchableOpacity
                onPress={loadTransactions}
                style={{ marginTop: 14, padding: 10 }}
              >
                <Text style={{ color: "#2563EB", fontWeight: "600" }}>
                  Try again
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {!loading && !loadError && (
            <View style={styles.transactionList}>
              {filteredTransactions.map((transaction) => (
                <TouchableOpacity
                  key={String(transaction.id)}
                  activeOpacity={0.75}
                  style={styles.transactionCard}
                  onPress={() =>
                    router.push({
                      pathname: "/transaction-details",
                      params: {
                        id: String(transaction.id),
                        title: transaction.title,
                        category: transaction.category,
                        date: transaction.date,
                        amount: String(transaction.amount),
                        type: transaction.type,
                        status: transaction.status,
                      },
                    } as any)
                  }
                >
                  <View
                    style={[
                      styles.transactionIcon,
                      { backgroundColor: transaction.iconBackground },
                    ]}
                  >
                    <MaterialCommunityIcons
                      name={transaction.icon}
                      size={23}
                      color={transaction.iconColor}
                    />
                  </View>

                  <View style={styles.transactionInfo}>
                    <Text style={styles.transactionTitle}>
                      {transaction.title}
                    </Text>
                    <Text style={styles.transactionMeta}>
                      {transaction.category} • {transaction.date}
                    </Text>
                  </View>

                  <View style={styles.amountContainer}>
                    <Text
                      style={[
                        styles.transactionAmount,
                        transaction.type === "income"
                          ? styles.positiveAmount
                          : styles.negativeAmount,
                      ]}
                    >
                      {transaction.type === "income" ? "+" : "-"}
                      {currency(transaction.amount)}
                    </Text>

                    <View style={styles.completedRow}>
                      <View style={styles.completedDot} />
                      <Text style={styles.completedText}>
                        {transaction.status}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}

              {filteredTransactions.length === 0 && (
                <View style={styles.emptyState}>
                  <View style={styles.emptyIcon}>
                    <Ionicons
                      name="receipt-outline"
                      size={28}
                      color="#64748B"
                    />
                  </View>
                  <Text style={styles.emptyTitle}>
                    {transactions.length === 0
                      ? "No transactions yet"
                      : "No transactions found"}
                  </Text>
                  <Text style={styles.emptyText}>
                    {transactions.length === 0
                      ? "Transactions saved through your backend will appear here."
                      : "Try another search or transaction filter."}
                  </Text>
                </View>
              )}
            </View>
          )}

          <View style={styles.securityFooter}>
            <MaterialCommunityIcons
              name="shield-check-outline"
              size={18}
              color="#16A34A"
            />
            <Text style={styles.securityText}>
              Twin Shield helps monitor your activity for suspicious
              transactions.
            </Text>
          </View>
        </ScrollView>

        <FilterModal
          visible={filterVisible}
          filters={advancedFilters}
          onClose={() => setFilterVisible(false)}
          onApply={(filters) => {
            setAdvancedFilters(filters);
            setFilterVisible(false);
          }}
          onReset={() => {
            setAdvancedFilters({ category: "All", status: "All" });
            setFilterVisible(false);
          }}
        />

        <ExportModal
          visible={exportVisible}
          onClose={() => setExportVisible(false)}
          onExport={(
            _format: ExportFormat,
            _period: ExportPeriod
          ) => {
            // The existing modal callback is retained.
            // Actual file export can be implemented separately.
            setExportVisible(false);
          }}
        />
      </SafeAreaView>
    </>
  );
}
