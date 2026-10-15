import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, Alert } from "react-native";
import { router } from "expo-router";
import { mockOTPService } from "@/services/mockOTPService";
import OTPInput from "./components/OTPInput";
import ResendTimer from "./components/ResendTimer";
import VerifyButton from "./components/VerifyButton";
import { RESEND_SECONDS } from "./constants/otp.constants";

export default function OTPScreen() {
  const { mobile } = router.getQueryParams() as { mobile?: string };
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [resendTimeout, setResendTimeout] = useState<any | null>(null);
  const [secondsRemaining, setSecondsRemaining] = useState(RESEND_SECONDS);

  // Generate and send OTP when screen loads
  useEffect(() => {
    if (!mobile) {
      Alert.alert("Error", "Mobile number not provided");
      router.back();
      return;
    }

    mockOTPService.sendOTP(mobile);

    // Start resend timer
    const timeout = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timeout);
          setResendTimeout(null);
          return RESEND_SECONDS;
        }
        return prev - 1;
      });
    }, 1000);

    setResendTimeout(timeout);

    return () => {
      if (resendTimeout) clearInterval(resendTimeout);
    };
  }, [mobile]);

  const handleVerifyPress = async () => {
    if (otp.length !== 6) {
      Alert.alert("Error", "Please enter a 6-digit OTP");
      return;
    }

    setIsVerifying(true);
    try {
      const isValid = mockOTPService.verifyOTP(mobile ?? "", otp);
      if (isValid) {
        // Clear OTP after successful verification
        mockOTPService.clearOTP(mobile ?? "");
        // Navigate to biometric setup
        router.replace("/(auth)/biometric-setup");
      } else {
        Alert.alert("Error", "Invalid OTP. Please try again.");
        setOtp("");
      }
    } catch (error) {
      console.error("OTP verification failed:", error);
      Alert.alert("Error", "Verification failed. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendPress = () => {
    if (!mobile) return;

    mockOTPService.sendOTP(mobile);
    setSecondsRemaining(RESEND_SECONDS);
  };

  if (!mobile) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC", padding: 24, justifyContent: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "800" }}>Error</Text>
        <Text style={{ marginTop: 8, color: "#64748B" }}>Unable to process OTP verification</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC", padding: 24, justifyContent: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "800" }}>OTP Verification</Text>
      <Text style={{ marginTop: 8, color: "#64748B" }}>
        Enter the 6-digit code sent to {mobile}
      </Text>
      <OTPInput value={otp} onChange={setOtp} />
      <ResendTimer secondsRemaining={secondsRemaining} onResend={handleResendPress} />
      <VerifyButton
        onPress={handleVerifyPress}
        isVerifying={isVerifying}
        disabled={otp.length !== 6}
      />
    </SafeAreaView>
  );
}