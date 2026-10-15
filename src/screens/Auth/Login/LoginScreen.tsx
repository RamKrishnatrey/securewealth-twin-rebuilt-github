import React, { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import styles from "./Login.styles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LoginCard from "./components/LoginCard";
import SocialLogin from "./components/SocialLogin";
import BiometricButton from "./components/BiometricButton";
import SecurityBadges from "./components/SecurityBadges";
import Footer from "./components/Footer";
import { router } from "expo-router";

export default function LoginScreen() {
  const [mobile, setMobile] = useState("");
  const [isSendingOTP, setIsSendingOTP] = useState(false);

  const handleMobileChange = (value: string) => {
    setMobile(value);
  };

  const handleContinuePress = async () => {
    if (!mobile.trim()) {
      alert("Please enter a mobile number");
      return;
    }

    setIsSendingOTP(true);
    try {
      // Navigate to OTP screen, passing mobile number as param
      router.push(`/auth/otp?mobile=${encodeURIComponent(mobile)}`);
    } catch (error) {
      console.error("Failed to navigate to OTP screen:", error);
      alert("Failed to proceed. Please try again.");
    } finally {
      setIsSendingOTP(false);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <Header />
          <Hero />

          <LoginCard
            mobile={mobile}
            onMobileChange={handleMobileChange}
            onContinuePress={handleContinuePress}
            isSendingOTP={isSendingOTP}
          />

          <SocialLogin />
          <BiometricButton />
          <SecurityBadges />
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}