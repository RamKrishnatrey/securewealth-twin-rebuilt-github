import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { verificationService } from "@/services/verificationService";

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

const CURRENCIES = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "INR", name: "Indian Rupee", symbol: "₹" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥" },
  { code: "AUD", name: "Australian Dollar", symbol: "$" },
  { code: "CAD", name: "Canadian Dollar", symbol: "$" },
  { code: "SGD", name: "Singapore Dollar", symbol: "$" },
];

export default function CurrencyConverterScreen() {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("INR");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  const handleConvert = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      Alert.alert("Invalid amount", "Please enter a valid amount greater than zero.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await verificationService.convertAmount(
        parseFloat(amount),
        baseCurrency,
        targetCurrency
      );
      setConvertedAmount(response.converted_amount);
      // Calculate the exchange rate: converted_amount / original_amount
      const calculatedRate = response.converted_amount / response.original_amount;
      setRate(calculatedRate);
    } catch (err: any) {
      console.error("Conversion error:", err);
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to convert currency. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const swapCurrencies = () => {
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency);
    // Clear the result when swapping
    setConvertedAmount(null);
    setRate(null);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      <LinearGradient
        colors={[COLORS.blue, COLORS.purple]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 26,
          padding: 20,
          marginBottom: 20,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ color: "#DBEAFE", fontSize: 12, fontWeight: "700" }}>
            CURRENCY CONVERTER
          </Text>
          <MaterialCommunityIcons
            name="refresh"
            size={24}
            color="#93C5FD"
            onPress={swapCurrencies}
          />
        </View>
      </LinearGradient>

      <View style={{ backgroundColor: COLORS.white, borderRadius: 20, padding: 20, marginHorizontal: 15 }}>
        <Text style={{ fontSize: 16, fontWeight: "600", color: COLORS.text, marginBottom: 10 }}>
          Convert Amount
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={{ fontSize: 12, color: COLORS.muted, marginBottom: 5 }}>From</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                height: 50,
                borderWidth: 1,
                borderColor: COLORS.border,
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
              onPress={() => setShowFromDropdown(!showFromDropdown)}
            >
              <Text style={{ fontSize: 16, color: COLORS.text }}>
                {baseCurrency}
              </Text>
              <MaterialCommunityIcons name="chevron-down" size={20} color={COLORS.blue} />
            </TouchableOpacity>
            {showFromDropdown && (
              <View style={{ position: 'absolute', top: 70, left: 20, right: 20, backgroundColor: COLORS.white, borderRadius: 12, borderWidth: 1, borderColor: COLORS.border, zIndex: 100 }}>
                {CURRENCIES.map((currency) => (
                  <TouchableOpacity
                    key={currency.code}
                    style={{ paddingVertical: 12, paddingHorizontal: 16 }}
                    onPress={() => {
                      setBaseCurrency(currency.code);
                      setShowFromDropdown(false);
                    }}
                  >
                    <Text style={{ fontSize: 16, color: COLORS.text }}>
                      {currency.symbol} {currency.code}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={swapCurrencies}
            style={{ padding: 10, backgroundColor: "#F0F9FF", borderRadius: 10 }}
          >
            <MaterialCommunityIcons name="swap-horizontal" size={24} color={COLORS.blue} />
          </TouchableOpacity>

          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={{ fontSize: 12, color: COLORS.muted, marginBottom: 5 }}>To</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                height: 50,
                borderWidth: 1,
                borderColor: COLORS.border,
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
              onPress={() => setShowToDropdown(!showToDropdown)}
            >
              <Text style={{ fontSize: 16, color: COLORS.text }}>
                {targetCurrency}
              </Text>
              <MaterialCommunityIcons name="chevron-down" size={20} color={COLORS.blue} />
            </TouchableOpacity>
            {showToDropdown && (
              <View style={{ position: 'absolute', top: 70, left: 20, right: 20, backgroundColor: COLORS.white, borderRadius: 12, borderWidth: 1, borderColor: COLORS.border, zIndex: 100 }}>
                {CURRENCIES.map((currency) => (
                  <TouchableOpacity
                    key={currency.code}
                    style={{ paddingVertical: 12, paddingHorizontal: 16 }}
                    onPress={() => {
                      setTargetCurrency(currency.code);
                      setShowToDropdown(false);
                    }}
                  >
                    <Text style={{ fontSize: 16, color: COLORS.text }}>
                      {currency.symbol} {currency.code}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        <TextInput
          placeholder="Enter amount"
          keyboardType="numeric"
          style={{
            height: 50,
            borderWidth: 1,
            borderColor: COLORS.border,
            borderRadius: 12,
            paddingHorizontal: 12,
            fontSize: 18,
            marginVertical: 15,
          }}
          value={amount}
          onChangeText={setAmount}
        />

        {loading ? (
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 10 }}>
            <ActivityIndicator size="small" color={COLORS.blue} />
            <Text style={{ marginLeft: 10, color: COLORS.muted, fontSize: 14 }}>Converting...</Text>
          </View>
        ) : error ? (
          <Text style={{ color: COLORS.red, textAlign: "center", marginVertical: 10, fontSize: 14 }}>
            {error}
          </Text>
        ) : convertedAmount !== null ? (
          <View style={{ backgroundColor: "#F0F9FF", borderRadius: 16, padding: 20, marginVertical: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: COLORS.text, marginBottom: 10 }}>
              Conversion Result
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <View>
                <Text style={{ fontSize: 14, color: COLORS.muted }}>{
                  amount
                } {baseCurrency}</Text>
                <Text style={{ fontSize: 24, fontWeight: "800", color: COLORS.text }}>
                  {amount} {baseCurrency}
                </Text>
              </View>
              <MaterialCommunityIcons name="arrow-right" size={28} color={COLORS.blue} />
              <View>
                <Text style={{ fontSize: 14, color: COLORS.muted }}>{
                  convertedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                } {targetCurrency}</Text>
                <Text style={{ fontSize: 24, fontWeight: "800", color: COLORS.text }}>
                  {convertedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {targetCurrency}
                </Text>
              </View>
            </View>
            {rate !== null && (
              <View style={{ marginTop: 10, alignItems: "center" }}>
                <Text style={{ fontSize: 12, color: COLORS.muted }}>
                  1 {baseCurrency} = {rate.toFixed(4)} {targetCurrency}
                </Text>
              </View>
            )}
          </View>
        ) : (
          <View style={{ minHeight: 100, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: COLORS.muted, textAlign: "center" }}>
              Enter an amount and press Convert to see the result.
            </Text>
          </View>
        )}
      </View>

      <View style={{ marginTop: 20, alignItems: "center" }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleConvert}
          style={{
            backgroundColor: COLORS.blue,
            paddingVertical: 14,
            paddingHorizontal: 30,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: COLORS.white, fontWeight: "600", fontSize: 16 }}>
            Convert
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}