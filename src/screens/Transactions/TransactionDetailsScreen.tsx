import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";

export default function TransactionDetailsScreen() {
    const params = useLocalSearchParams<{
    id?: string;
    title?: string;
    category?: string;
    date?: string;
    amount?: string;
    type?: "income" | "expense";
    status?: string;
  }>();

  const title = params.title ?? "Transaction";
  const category = params.category ?? "Other";
  const date = params.date ?? "—";
  const amount = Number(params.amount ?? 0);
  const type = params.type ?? "expense";
  const status = params.status ?? "Completed";
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#F8FAFC" }}
        edges={["top"]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingTop: 8,
            paddingBottom: 40,
          }}
        >
          {/* HEADER */}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 28,
            }}
          >
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: "#FFFFFF",
                alignItems: "center",
                justifyContent: "center",
                elevation: 3,
              }}
            >
              <Ionicons
                name="chevron-back"
                size={23}
                color="#0F172A"
              />
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 18,
                fontWeight: "800",
                color: "#0F172A",
              }}
            >
              Transaction Details
            </Text>

            <TouchableOpacity
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: "#FFFFFF",
                alignItems: "center",
                justifyContent: "center",
                elevation: 3,
              }}
            >
              <Ionicons
                name="share-social-outline"
                size={21}
                color="#0F172A"
              />
            </TouchableOpacity>
          </View>

          {/* HERO */}

          <LinearGradient
            colors={["#2563EB", "#4F46E5"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              borderRadius: 28,
              padding: 24,
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <View
              style={{
                width: 68,
                height: 68,
                borderRadius: 22,
                backgroundColor: "rgba(255,255,255,0.16)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="shopping-outline"
                size={34}
                color="#FFFFFF"
              />
            </View>

            <Text
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: 13,
                marginTop: 16,
              }}
            >
              Payment to
            </Text>

            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 21,
                fontWeight: "800",
                marginTop: 4,
              }}
            >
              {title}
            </Text>

            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 36,
                fontWeight: "800",
                marginTop: 14,
              }}
            >
              {type === "income" ? "+" : "-"}₹{amount.toLocaleString("en-IN")}
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.15)",
                paddingHorizontal: 12,
                paddingVertical: 7,
                borderRadius: 20,
                marginTop: 14,
              }}
            >
              <MaterialCommunityIcons
                name="check-circle"
                size={16}
                color="#BBF7D0"
              />

              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 12,
                  fontWeight: "700",
                  marginLeft: 6,
                }}
              >
                {type === "income"
  ? "Money Received Successfully"
  : status === "Completed"
  ? "Payment Successful"
  : status}
              </Text>
            </View>
          </LinearGradient>

          {/* DETAILS */}

          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 24,
              padding: 20,
              marginBottom: 18,
              elevation: 3,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "800",
                color: "#0F172A",
                marginBottom: 20,
              }}
            >
              Payment Information
            </Text>

            <DetailRow
  label="Date & Time"
  value={date}
/>

            <DetailRow
  label="Category"
  value={category}
/>

            <DetailRow
              label="Payment Method"
              value="SecureWealth Account"
            />

            <DetailRow
              label="Transaction ID"
              value="SWT829104528"
            />

            <DetailRow
              label="Reference No."
              value="UPI/6291845021"
              last
            />
          </View>

          {/* TWIN SHIELD */}

          <View
            style={{
              backgroundColor: "#F0FDF4",
              borderRadius: 22,
              padding: 18,
              marginBottom: 18,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 23,
                  backgroundColor: "#DCFCE7",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="shield-check"
                  size={25}
                  color="#16A34A"
                />
              </View>

              <View
                style={{
                  flex: 1,
                  marginLeft: 13,
                }}
              >
                <Text
                  style={{
                    color: "#166534",
                    fontSize: 15,
                    fontWeight: "800",
                  }}
                >
                  Verified by Twin Shield
                </Text>

                <Text
                  style={{
                    color: "#15803D",
                    fontSize: 12,
                    lineHeight: 18,
                    marginTop: 3,
                  }}
                >
                  No suspicious behaviour detected for this transaction.
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 18,
              }}
            >
              <SecurityMetric label="Risk" value="LOW" />
              <SecurityMetric label="AI Score" value="98/100" />
              <SecurityMetric label="Status" value="SAFE" />
            </View>
          </View>

          {/* ACTIONS */}

          <TouchableOpacity
            style={{
              height: 54,
              borderRadius: 18,
              backgroundColor: "#2563EB",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 12,
            }}
          >
            <MaterialCommunityIcons
              name="receipt-text-outline"
              size={20}
              color="#FFFFFF"
            />

            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: "800",
                marginLeft: 8,
              }}
            >
              Download Receipt
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 54,
              borderRadius: 18,
              backgroundColor: "#FFFFFF",
              borderWidth: 1,
              borderColor: "#E2E8F0",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="help-circle-outline"
              size={20}
              color="#475569"
            />

            <Text
              style={{
                color: "#334155",
                fontSize: 14,
                fontWeight: "700",
                marginLeft: 8,
              }}
            >
              Report an Issue
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

function DetailRow({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 14,
        borderBottomWidth: last ? 0 : 1,
        borderBottomColor: "#F1F5F9",
      }}
    >
      <Text
        style={{
          color: "#64748B",
          fontSize: 13,
        }}
      >
        {label}
      </Text>

      <Text
        style={{
          color: "#0F172A",
          fontSize: 13,
          fontWeight: "700",
          maxWidth: "58%",
          textAlign: "right",
        }}
      >
        {value}
      </Text>
    </View>
  );
}

function SecurityMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View>
      <Text
        style={{
          color: "#64748B",
          fontSize: 10,
          fontWeight: "600",
        }}
      >
        {label}
      </Text>

      <Text
        style={{
          color: "#15803D",
          fontSize: 12,
          fontWeight: "800",
          marginTop: 3,
        }}
      >
        {value}
      </Text>
    </View>
  );
}