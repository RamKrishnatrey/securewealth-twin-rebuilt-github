import React, { useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from "react-native";

import { router } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";

import FingerprintSheet from "./components/FingerprintSheet";


const BIOMETRIC_ENABLED_KEY =
  "securewealth_biometric_enabled";


export default function BiometricSetupScreen() {
  const [
    fingerprintVisible,
    setFingerprintVisible,
  ] = useState(false);

  const [
    isSaving,
    setIsSaving,
  ] = useState(false);


  const handleEnableBiometrics = () => {
    setFingerprintVisible(true);
  };


  const handleCancelFingerprint = () => {
    setFingerprintVisible(false);
  };


  const handleBiometricSuccess =
    async () => {
      try {
        setIsSaving(true);

        /*
         * Persist biometric setup.
         *
         * Later this can also be synchronized
         * with the authenticated backend user.
         */

        await AsyncStorage.setItem(
          BIOMETRIC_ENABLED_KEY,
          "true"
        );

        /*
         * Small delay so the user can actually
         * see the successful Twin Shield state.
         */

        await new Promise(
          (resolve) =>
            setTimeout(resolve, 700)
        );

        setFingerprintVisible(false);

        router.replace(
          "/(tabs)/dashboard"
        );
      } catch (error) {
        console.error(
          "Failed to save biometric state:",
          error
        );

        setFingerprintVisible(false);

        router.replace(
          "/(tabs)/dashboard"
        );
      } finally {
        setIsSaving(false);
      }
    };


  const handleSkip = () => {
    router.replace(
      "/(tabs)/dashboard"
    );
  };


  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F8FAFC"
      />

      <SafeAreaView
        style={styles.safeArea}
      >
        <View
          style={styles.container}
        >

          {/* SECURITY ICON */}

          <View
            style={styles.iconContainer}
          >
            <View
              style={styles.iconCircle}
            >
              <Text
                style={
                  styles.securityEmoji
                }
              >
                🔐
              </Text>
            </View>
          </View>


          {/* TITLE */}

          <Text
            style={styles.title}
          >
            Enable Biometric Login
          </Text>


          {/* DESCRIPTION */}

          <Text
            style={styles.description}
          >
            Sign in faster and securely
            using your fingerprint or
            Face ID.
          </Text>


          {/* SECURITY INFORMATION */}

          <View
            style={
              styles.infoCard
            }
          >
            <View
              style={
                styles.infoIcon
              }
            >
              <Text
                style={
                  styles.infoEmoji
                }
              >
                🛡️
              </Text>
            </View>

            <View
              style={
                styles.infoContent
              }
            >
              <Text
                style={
                  styles.infoTitle
                }
              >
                Protected by Twin Shield
              </Text>

              <Text
                style={
                  styles.infoText
                }
              >
                Your biometric data stays
                securely on your device.
              </Text>
            </View>
          </View>


          {/* ENABLE BUTTON */}

          <TouchableOpacity
            activeOpacity={
              isSaving ? 1 : 0.82
            }
            disabled={isSaving}
            onPress={
              handleEnableBiometrics
            }
            style={
              styles.enableButton
            }
          >
            {isSaving ? (
              <ActivityIndicator
                size="small"
                color="#FFFFFF"
              />
            ) : (
              <Text
                style={
                  styles.enableButtonText
                }
              >
                Enable Biometrics
              </Text>
            )}
          </TouchableOpacity>


          {/* SKIP */}

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleSkip}
            style={styles.skipButton}
          >
            <Text
              style={styles.skipText}
            >
              Skip for Now
            </Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>


      {/* BIOMETRIC SHEET */}

      <FingerprintSheet
        visible={
          fingerprintVisible
        }

        onCancel={
          handleCancelFingerprint
        }

        onSuccess={
          handleBiometricSuccess
        }
      />
    </>
  );
}


/* =========================================================
   STYLES
========================================================= */

const styles =
  StyleSheet.create({

    safeArea: {
      flex: 1,
      backgroundColor: "#F8FAFC",
    },

    container: {
      flex: 1,

      justifyContent: "center",

      alignItems: "center",

      paddingHorizontal: 24,
    },

    /* -----------------------------------------------------
       ICON
    ----------------------------------------------------- */

    iconContainer: {
      alignItems: "center",
      justifyContent: "center",

      marginBottom: 4,
    },

    iconCircle: {
      width: 108,
      height: 108,

      borderRadius: 54,

      backgroundColor: "#EFF6FF",

      alignItems: "center",
      justifyContent: "center",

      borderWidth: 1,
      borderColor: "#DBEAFE",

      shadowColor: "#2563EB",

      shadowOffset: {
        width: 0,
        height: 8,
      },

      shadowOpacity: 0.08,
      shadowRadius: 16,
      elevation: 3,
    },

    securityEmoji: {
      fontSize: 58,
    },

    /* -----------------------------------------------------
       TITLE
    ----------------------------------------------------- */

    title: {
      color: "#0F172A",

      fontSize: 28,
      fontWeight: "800",
      textAlign: "center",
      marginTop: 22,
    },

    /* -----------------------------------------------------
       DESCRIPTION
    ----------------------------------------------------- */

    description: {
      color: "#64748B",
      fontSize: 14,
      lineHeight: 21,
      textAlign: "center",
      marginTop: 11,
      maxWidth: 330,
    },

    /* -----------------------------------------------------
       INFORMATION CARD
    ----------------------------------------------------- */

    infoCard: {
      width: "100%",
      backgroundColor: "#FFFFFF",
      borderRadius: 18,
      borderWidth: 1,
      borderColor: "#E2E8F0",
      padding: 14,
      flexDirection: "row",
      alignItems: "center",
      marginTop: 26,
    },

    infoIcon: {
      width: 45,
      height: 45,
      borderRadius: 14,
      backgroundColor: "#F0FDF4",
      alignItems: "center",
      justifyContent: "center",
    },

    infoEmoji: {
      fontSize: 22,
    },

    infoContent: {
      flex: 1,
      marginLeft: 12,
    },

    infoTitle: {
      color: "#0F172A",
      fontSize: 12,
      fontWeight: "800",
    },

    infoText: {
      color: "#94A3B8",
      fontSize: 9,
      lineHeight: 14,
      marginTop: 4,
    },

    /* -----------------------------------------------------
       ENABLE BUTTON
    ----------------------------------------------------- */

    enableButton: {
      height: 56,
      width: "100%",
      backgroundColor: "#2563EB",
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 18,
      shadowColor: "#2563EB",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.18,
      shadowRadius: 14,
      elevation: 5,
    },

    enableButtonText: {
      color: "#FFFFFF",
      fontSize: 14,
      fontWeight: "800",
    },

    /* -----------------------------------------------------
       SKIP
    ----------------------------------------------------- */

    skipButton: {
      paddingVertical: 16,
      paddingHorizontal: 20,
      marginTop: 1,
    },

    skipText: {
      color: "#64748B",
      fontSize: 13,
      fontWeight: "600",
    },
  });