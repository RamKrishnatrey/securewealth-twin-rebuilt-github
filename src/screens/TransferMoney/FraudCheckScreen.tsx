import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";

import { fraudService } from "@/services/fraudService";
import type { FraudCheckRequest, FraudCheckResponse } from "@/types/fraud";

export default function FraudCheckScreen() {
  const params = useLocalSearchParams<{
    amount?: string;
    beneficiaryName?: string;
    beneficiaryBank?: string;
    beneficiaryAccount?: string;
    note?: string;
    beneficiaryId?: string;
  }>();

  const amount = Number(params.amount ?? 0);
  const beneficiaryName = params.beneficiaryName ?? "Beneficiary";
  const beneficiaryBank = params.beneficiaryBank ?? "Bank";
  const beneficiaryAccount = params.beneficiaryAccount ?? "••••";
  const note = params.note ?? "";
  const beneficiaryId = params.beneficiaryId ?? "";

  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<FraudCheckResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkFraud = async () => {
      setLoading(true);
      setError(null);
      try {
        const request: FraudCheckRequest = {
          amount,
          payee_id: beneficiaryId,
          is_new_payee: false, // we don't have this info; default false
          unusual_time: false,
          collect_request: false,
          refund_wording: false,
          suspicious_qr_mismatch: false,
          remote_access_suspected: false,
          mule_account_signal: false,
          usual_amount: 1000, // default typical amount
          context: "payment",
        };

        const response = await fraudService.checkFraud(request);
        setResult(response);
      } catch (err: any) {
        setError(err?.message ?? "Failed to check fraud");
      } finally {
        setLoading(false);
      }
    };

    checkFraud();
  }, [amount, beneficiaryId, beneficiaryName, beneficiaryBank, beneficiaryAccount, note]);

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#2563EB" />
          <Text style={{ marginTop: 16, color: "#0F172A", fontSize: 16 }}>
            Checking transaction for fraud...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
          <MaterialCommunityIcons name="alert-circle-outline" size={48} color="#EF4444" />
          <Text style={{ marginTop: 24, textAlign: "center", color: "#0F172A", fontSize: 16 }}>
            {error}
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              marginTop: 32,
              backgroundColor: "#2563EB",
              paddingVertical: 12,
              paddingHorizontal: 24,
              borderRadius: 8,
            }}
            onPress={() => router.back()}
          >
            <Text style={{ color: "#FFFFFF", fontWeight: "600" }}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (!result) {
    return null; // fallback
  }

  const { decision, risk_score, risk_level, reasons, message } = result;

  const isBlocked = decision === "BLOCK";
  const isWarning = decision === "WARN";
  const isAllowed = decision === "ALLOW";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: "center", marginBottom: 32 }}>
          {isBlocked ? (
            <MaterialCommunityIcons name="alert-circle-outline" size={48} color="#EF4444" />
          ) : isWarning ? (
            <MaterialCommunityIcons name="alert-outline" size={48} color="#F59E0B" />
          ) : (
            <MaterialCommunityIcons name="check-circle-outline" size={48} color="#10B981" />
          )}
          <Text style={{ marginTop: 24, fontSize: 20, fontWeight: "600", color: "#0F172A" }}>
            {isBlocked ? "Transaction Blocked" : isWarning ? "Warning Detected" : "Transaction Looks Safe"}
          </Text>
          <Text style={{ marginTop: 12, textAlign: "center", color: "#64748B", fontSize: 15 }}>
            {message}
          </Text>
        </View>

        {reasons.length > 0 && (
          <View style={{ marginBottom: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 12, color: "#0F172A" }}>
              Risk Factors
            </Text>
            {reasons.map((reason, idx) => (
              <View key={idx} style={{ marginBottom: 8, paddingLeft: 4 }}>
                <MaterialCommunityIcons name="circle-small" size={6} color="#64748B" />
                <Text style={{ marginLeft: 8, color: "#0F172A", fontSize: 15 }}>{reason}</Text>
              </View>
            ))}
          </View>
        )}

        <View style={{ borderWidth: 1, borderColor: "#E2E8F0", borderRadius: 12, padding: 16, marginBottom: 24 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 15, color: "#64748B" }}>Risk Score</Text>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "#0F172A" }}>
              {risk_score}/100
            </Text>
          </View>
          <View style={{ marginTop: 8, flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 15, color: "#64748B" }}>Risk Level</Text>
            <Text style={{ fontSize: 18, fontWeight: "600",
              color: risk_level === "LOW" ? "#10B981" : risk_level === "MEDIUM" ? "#F59E0B" : "#EF4444" }}>
              {risk_level}
            </Text>
          </View>
        </View>

        {isBlocked ? (
          <View style={{ marginBottom: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 12, color: "#0F172A" }}>
              Next Steps
            </Text>
            <Text style={{ color: "#64748B", fontSize: 15 }}>
              Please review the transaction details or contact support if you believe this is an error.
            </Text>
          </View>
        ) : null}

        <View style={{ marginTop: 32 }}>
          {isBlocked ? (
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: "#EF4444",
                paddingVertical: 12,
                paddingHorizontal: 24,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => router.back()}
            >
              <Text style={{ color: "#FFFFFF", fontWeight: "600" }}>Go Back</Text>
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  backgroundColor: isWarning ? "#F59E0B" : "#10B981",
                  paddingVertical: 12,
                  paddingHorizontal: 24,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 12,
                }}
                onPress={() => {
                  router.push({
                    pathname: "/transfer/authorize",
                    params: {
                      amount: amount.toString(),
                      beneficiaryName,
                      beneficiaryBank,
                      beneficiaryAccount,
                      note,
                      beneficiaryId,
                      riskScore: risk_score.toString(),
                      riskLevel: risk_level,
                    },
                  } as any);
                }}
              >
                <Text style={{ color: "#FFFFFF", fontWeight: "600" }}>
                  {isWarning ? "Proceed with Caution" : "Authorize Transfer"}
                </Text>
              </TouchableOpacity>

              {isWarning && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    backgroundColor: "#FFFFFF",
                    paddingVertical: 12,
                    paddingHorizontal: 24,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "#F59E0B",
                  }}
                  onPress={() => router.back()}
                >
                  <Text style={{ color: "#F59E0B", fontWeight: "600" }}>Go Back</Text>
                </TouchableOpacity>
              )}
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}