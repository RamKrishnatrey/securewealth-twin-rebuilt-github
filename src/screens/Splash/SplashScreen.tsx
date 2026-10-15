import React from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
} from "react-native";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./Splash.styles";

import Background from "./components/Background";
import Logo from "./components/Logo";
import Orbit from "./components/Orbit";
import Radar from "./components/Radar";
import ProgressBar from "./components/ProgressBar";
import Footer from "./components/Footer";

import useSplash from "./hooks/useSplash";

export default function SplashScreen() {
  const {
    progress,
    loadingText,
    logoAnimatedStyle,
    orbitAnimatedStyle,
    radarAnimatedStyle,
    contentAnimatedStyle,
  } = useSplash();

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <SafeAreaView style={styles.container}>
        <Background />

        <Animated.View
          style={[
            styles.content,
            contentAnimatedStyle,
          ]}
        >
          {/* ---------- Logo Section ---------- */}

          <Animated.View
            style={[
              styles.logoWrapper,
              logoAnimatedStyle,
            ]}
          >
            <Orbit animatedStyle={orbitAnimatedStyle} />

            <Logo />

            <Radar animatedStyle={radarAnimatedStyle} />
          </Animated.View>

          {/* ---------- Title ---------- */}

          <Text style={styles.title}>
            SecureWealth Twin
          </Text>

          <Text style={styles.subtitle}>
            Intelligent Wealth Growth{"\n"}
            with Built-In Fraud Protection
          </Text>

          {/* ---------- AI Card ---------- */}

          <LinearGradient
            colors={[
              "rgba(37,99,235,0.10)",
              "rgba(79,70,229,0.05)",
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.aiCard}
          >
            <View style={styles.aiHeader}>
              <View style={styles.aiDot} />

              <Text style={styles.aiTitle}>
                AI Security Engine
              </Text>
            </View>

            <Text style={styles.aiDescription}>
              Initializing fraud detection,
              financial insights and
              banking intelligence...
            </Text>
          </LinearGradient>

          {/* ---------- Progress ---------- */}

          <View style={styles.progressSection}>
            <ProgressBar progress={progress} />

            <View style={styles.progressRow}>
              <Text style={styles.loadingText}>
                {loadingText}
              </Text>

              <Text style={styles.progressValue}>
                {Math.round(progress * 100)}%
              </Text>
            </View>
          </View>
          {/* ---------- Spacer ---------- */}

          <View style={styles.flexSpacer} />

          {/* ---------- Bottom Glow ---------- */}

          <LinearGradient
            colors={[
              "rgba(37,99,235,0.08)",
              "rgba(79,70,229,0.03)",
              "transparent",
            ]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.bottomGlow}
          />

          {/* ---------- Footer ---------- */}

          <Footer />
        </Animated.View>
      </SafeAreaView>
    </>
  );
}