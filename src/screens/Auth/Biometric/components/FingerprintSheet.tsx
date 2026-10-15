import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  Modal,
  Pressable,
  Platform,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import * as LocalAuthentication from "expo-local-authentication";
import * as Haptics from "expo-haptics";

const { height: SCREEN_HEIGHT } =
  Dimensions.get("window");

type FingerprintSheetProps = {
  visible: boolean;
  onCancel: () => void;
  onSuccess?: () => void;
};

type ScanState =
  | "idle"
  | "checking"
  | "scanning"
  | "success"
  | "error";

type BiometricType =
  | "fingerprint"
  | "face"
  | "iris"
  | "generic";

export default function FingerprintSheet({
  visible,
  onCancel,
  onSuccess,
}: FingerprintSheetProps) {
  const [scanState, setScanState] =
    useState<ScanState>("idle");

  const [errorMessage, setErrorMessage] =
    useState("");

  const [biometricType, setBiometricType] =
    useState<BiometricType>("generic");

  const [progress, setProgress] =
    useState(0);

  const sheetY = useRef(
    new Animated.Value(SCREEN_HEIGHT)
  ).current;

  const backdropOpacity = useRef(
    new Animated.Value(0)
  ).current;

  const fingerprintScale = useRef(
    new Animated.Value(1)
  ).current;

  const fingerprintOpacity = useRef(
    new Animated.Value(0.75)
  ).current;

  const ringScale = useRef(
    new Animated.Value(0.85)
  ).current;

  const ringOpacity = useRef(
    new Animated.Value(0.35)
  ).current;

  const scanLineY = useRef(
    new Animated.Value(-35)
  ).current;

  const progressWidth =
    useRef(
      new Animated.Value(0)
    ).current;

  const pulseLoop =
    useRef<Animated.CompositeAnimation | null>(
      null
    ).current;

  const ringLoop =
    useRef<Animated.CompositeAnimation | null>(
      null
    ).current;

  const scanLoop =
    useRef<Animated.CompositeAnimation | null>(
      null
    ).current;

  useEffect(() => {
    if (!visible) {
      stopAnimations();

      Animated.parallel([
        Animated.timing(sheetY, {
          toValue: SCREEN_HEIGHT,
          duration: 220,
          useNativeDriver: true,
        }),

        Animated.timing(
          backdropOpacity,
          {
            toValue: 0,
            duration: 180,
            useNativeDriver: true,
          }
        ),
      ]).start();

      return;
    }

    setScanState("idle");
    setErrorMessage("");
    setProgress(0);

    progressWidth.setValue(0);

    Animated.parallel([
      Animated.spring(sheetY, {
        toValue: 0,
        damping: 22,
        stiffness: 180,
        mass: 0.8,
        useNativeDriver: true,
      }),

      Animated.timing(
        backdropOpacity,
        {
          toValue: 1,
          duration: 220,
          useNativeDriver: true,
        }
      ),
    ]).start();

    detectBiometricType();
  }, [visible]);


  const detectBiometricType = async () => {
  try {
    const types =
      await LocalAuthentication.supportedAuthenticationTypesAsync();

    if (Platform.OS === "ios") {
      if (
        types.includes(
          LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
        )
      ) {
        setBiometricType("face");
        return;
      }

      if (
        types.includes(
          LocalAuthentication.AuthenticationType.FINGERPRINT
        )
      ) {
        setBiometricType("fingerprint");
        return;
      }
    }

    // Android biometric prompt can use
    // the device's enrolled biometric.
    if (
      types.includes(
        LocalAuthentication.AuthenticationType.FINGERPRINT
      )
    ) {
      setBiometricType("fingerprint");
      return;
    }

    if (
      types.includes(
        LocalAuthentication.AuthenticationType.IRIS
      )
    ) {
      setBiometricType("iris");
      return;
    }

    setBiometricType("generic");
  } catch {
    setBiometricType("generic");
  }
};


  const stopAnimations = () => {
    pulseLoop?.stop();
    ringLoop?.stop();
    scanLoop?.stop();
  };


  const startAnimations = () => {
    stopAnimations();

    fingerprintScale.setValue(1);
    fingerprintOpacity.setValue(0.75);

    ringScale.setValue(0.85);
    ringOpacity.setValue(0.35);

    scanLineY.setValue(-35);

    progressWidth.setValue(0);

    /*
     * Fingerprint pulse
     */

    const pulse =
      Animated.loop(
        Animated.parallel([
          Animated.sequence([
            Animated.timing(
              fingerprintScale,
              {
                toValue: 1.08,
                duration: 700,
                useNativeDriver: true,
              }
            ),

            Animated.timing(
              fingerprintScale,
              {
                toValue: 1,
                duration: 700,
                useNativeDriver: true,
              }
            ),
          ]),

          Animated.sequence([
            Animated.timing(
              fingerprintOpacity,
              {
                toValue: 1,
                duration: 700,
                useNativeDriver: true,
              }
            ),

            Animated.timing(
              fingerprintOpacity,
              {
                toValue: 0.65,
                duration: 700,
                useNativeDriver: true,
              }
            ),
          ]),
        ])
      );


    /*
     * Expanding security ring
     */

    const ring =
      Animated.loop(
        Animated.sequence([
          Animated.parallel([
            Animated.timing(
              ringScale,
              {
                toValue: 1.2,
                duration: 1200,
                useNativeDriver: true,
              }
            ),

            Animated.timing(
              ringOpacity,
              {
                toValue: 0,
                duration: 1200,
                useNativeDriver: true,
              }
            ),
          ]),

          Animated.parallel([
            Animated.timing(
              ringScale,
              {
                toValue: 0.85,
                duration: 0,
                useNativeDriver: true,
              }
            ),

            Animated.timing(
              ringOpacity,
              {
                toValue: 0.35,
                duration: 0,
                useNativeDriver: true,
              }
            ),
          ]),
        ])
      );


    /*
     * Scanner line
     */

    const scan =
      Animated.loop(
        Animated.sequence([
          Animated.timing(
            scanLineY,
            {
              toValue: 35,
              duration: 900,
              useNativeDriver: true,
            }
          ),

          Animated.timing(
            scanLineY,
            {
              toValue: -35,
              duration: 900,
              useNativeDriver: true,
            }
          ),
        ])
      );


    pulse.start();
    ring.start();
    scan.start();


    /*
     * Progress animation
     */

    Animated.timing(
      progressWidth,
      {
        toValue: 0.88,
        duration: 3200,
        useNativeDriver: false,
      }
    ).start();
  };


  const runHaptic = async (
    type:
      | "light"
      | "medium"
      | "success"
      | "error"
  ) => {
    try {
      if (type === "success") {
        await Haptics.notificationAsync(
          Haptics.NotificationFeedbackType.Success
        );
        return;
      }

      if (type === "error") {
        await Haptics.notificationAsync(
          Haptics.NotificationFeedbackType.Error
        );
        return;
      }

      await Haptics.impactAsync(
        type === "medium"
          ? Haptics.ImpactFeedbackStyle.Medium
          : Haptics.ImpactFeedbackStyle.Light
      );
    } catch {
      // Haptics may be unavailable on some devices.
    }
  };


  const beginAuthentication =
    async () => {
      try {
        setErrorMessage("");
        setProgress(0);

        setScanState("checking");

        await runHaptic("light");

        const hasHardware =
          await LocalAuthentication.hasHardwareAsync();

        if (!hasHardware) {
          setScanState("error");

          setErrorMessage(
            "This device does not have a supported biometric sensor."
          );

          await runHaptic("error");

          return;
        }


        const isEnrolled =
          await LocalAuthentication.isEnrolledAsync();

        if (!isEnrolled) {
          setScanState("error");

          setErrorMessage(
            "No fingerprint or Face ID is enrolled on this device."
          );

          await runHaptic("error");

          return;
        }


        setScanState("scanning");

        startAnimations();

        await runHaptic("medium");


        const result =
          await LocalAuthentication.authenticateAsync(
            {
              promptMessage:
                biometricType === "face"
                  ? "Verify with Face ID"
                  : biometricType ===
                    "fingerprint"
                  ? "Verify with Fingerprint"
                  : "Verify your identity",

              promptDescription:
                "Securely verify your identity to enable biometric login.",

              cancelLabel:
                "Cancel",

              disableDeviceFallback:
                false,

              requireConfirmation:
                true,
            }
          );


        stopAnimations();


        if (result.success) {
          setProgress(1);

          Animated.timing(
            progressWidth,
            {
              toValue: 1,
              duration: 300,
              useNativeDriver: false,
            }
          ).start();

          setScanState("success");

          await runHaptic("success");

          return;
        }


        if (
          result.error ===
            "user_cancel" ||
          result.error ===
            "system_cancel"
        ) {
          setScanState("idle");
          setProgress(0);

          return;
        }


        if (
          result.error ===
          "lockout"
        ) {
          setScanState("error");

          setErrorMessage(
            "Biometric authentication is temporarily locked. Try again later."
          );

          await runHaptic("error");

          return;
        }


        if (
          result.error ===
          "not_enrolled"
        ) {
          setScanState("error");

          setErrorMessage(
            "No biometric credential is enrolled on this device."
          );

          await runHaptic("error");

          return;
        }


        setScanState("error");

        setErrorMessage(
          "Biometric verification failed. Please try again."
        );

        await runHaptic("error");
      } catch {
        stopAnimations();

        setScanState("error");

        setErrorMessage(
          "Unable to start biometric authentication."
        );

        await runHaptic("error");
      }
    };


  const handleCancel =
    async () => {
      try {
        await LocalAuthentication.cancelAuthenticate();
      } catch {
        // Some platforms do not support this.
      }

      stopAnimations();

      setProgress(0);

      setScanState("idle");

      onCancel();
    };


  const handleRetry = () => {
    beginAuthentication();
  };


  const handleContinue = () => {
    onSuccess?.();
  };


  const getBiometricTitle = () => {
    if (
      biometricType ===
      "face"
    ) {
      return "Face ID";
    }

    if (
      biometricType ===
      "fingerprint"
    ) {
      return "Fingerprint";
    }

    if (
      biometricType ===
      "iris"
    ) {
      return "Iris Scan";
    }

    return "Biometric";
  };


  const getInstruction = () => {
    if (
      scanState ===
      "success"
    ) {
      return "Your identity has been securely verified.";
    }

    if (
      scanState ===
      "error"
    ) {
      return "We couldn't verify your identity.";
    }

    if (
      scanState ===
      "checking"
    ) {
      return "Preparing secure biometric verification...";
    }

    if (
      biometricType ===
      "face"
    ) {
      return "Look at the camera to verify your identity.";
    }

    if (
      biometricType ===
      "fingerprint"
    ) {
      return "Place your finger on the sensor to continue.";
    }

    return "Use your device biometric sensor to continue.";
  };


  const getStatusText = () => {
    if (
      scanState ===
      "checking"
    ) {
      return "Checking biometric security...";
    }

    if (
      scanState ===
      "scanning"
    ) {
      return `Scanning ${getBiometricTitle()}...`;
    }

    if (
      scanState ===
      "success"
    ) {
      return "Identity verified successfully";
    }

    if (
      scanState ===
      "error"
    ) {
      return "Authentication unsuccessful";
    }

    return "Ready for biometric verification";
  };


  const getIconName =
    (): React.ComponentProps<
      typeof MaterialCommunityIcons
    >["name"] => {
      if (
        biometricType ===
        "face"
      ) {
        return "face-recognition";
      }

      if (
        biometricType ===
        "fingerprint"
      ) {
        return "fingerprint";
      }

      if (
        biometricType ===
        "iris"
      ) {
        return "eye-outline";
      }

      return "shield-lock-outline";
    };


  const progressColor =
    scanState ===
    "success"
      ? "#16A34A"
      : scanState ===
        "error"
      ? "#DC2626"
      : "#2563EB";


  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={
        handleCancel
      }
    >
      <View
        style={styles.container}
      >

        {/* BACKDROP */}

        <Animated.View
          pointerEvents="none"
          style={[
            styles.backdrop,
            {
              opacity:
                backdropOpacity,
            },
          ]}
        />


        {/* OUTSIDE */}

        <Pressable
          style={
            styles.outsidePress
          }
          onPress={
            handleCancel
          }
        />


        {/* SHEET */}

        <Animated.View
          style={[
            styles.sheet,
            {
              transform: [
                {
                  translateY:
                    sheetY,
                },
              ],
            },
          ]}
        >

          {/* HANDLE */}

          <View
            style={styles.handle}
          />


          {/* TITLE */}

          <Text
            style={styles.title}
          >
            {scanState ===
            "success"
              ? `${getBiometricTitle()} Verified`
              : `Verify with ${getBiometricTitle()}`}
          </Text>


          <Text
            style={styles.subtitle}
          >
            {getInstruction()}
          </Text>


          {/* BIOMETRIC AREA */}

          <View
            style={
              styles.biometricArea
            }
          >

            {scanState !==
              "success" &&
              scanState !==
                "error" && (
                <Animated.View
                  style={[
                    styles.pulseRing,
                    {
                      opacity:
                        ringOpacity,
                      transform: [
                        {
                          scale:
                            ringScale,
                        },
                      ],
                    },
                  ]}
                />
              )}


            <View
              style={[
                styles.biometricCircle,
                {
                  borderColor:
                    scanState ===
                    "success"
                      ? "#BBF7D0"
                      : scanState ===
                        "error"
                      ? "#FECACA"
                      : "#DBEAFE",

                  backgroundColor:
                    scanState ===
                    "success"
                      ? "#F0FDF4"
                      : scanState ===
                        "error"
                      ? "#FEF2F2"
                      : "#F8FAFF",
                },
              ]}
            >

              {scanState ===
              "success" ? (
                <View
                  style={
                    styles.successCircle
                  }
                >
                  <Ionicons
                    name="checkmark"
                    size={54}
                    color="#FFFFFF"
                  />
                </View>
              ) : scanState ===
                "error" ? (
                <View
                  style={
                    styles.errorCircle
                  }
                >
                  <Ionicons
                    name="close"
                    size={50}
                    color="#FFFFFF"
                  />
                </View>
              ) : (
                <Animated.View
                  style={{
                    transform: [
                      {
                        scale:
                          fingerprintScale,
                      },
                    ],
                    opacity:
                      fingerprintOpacity,
                  }}
                >
                  <MaterialCommunityIcons
                    name={
                      getIconName()
                    }
                    size={78}
                    color="#2563EB"
                  />

                  {scanState ===
                    "scanning" && (
                    <Animated.View
                      style={[
                        styles.scanLine,
                        {
                          transform: [
                            {
                              translateY:
                                scanLineY,
                            },
                          ],
                        },
                      ]}
                    />
                  )}
                </Animated.View>
              )}

            </View>
          </View>


          {/* STATUS */}

          <View
            style={
              styles.statusContainer
            }
          >
            <View
              style={[
                styles.statusDot,
                {
                  backgroundColor:
                    progressColor,
                },
              ]}
            />

            <Text
              style={
                styles.statusText
              }
            >
              {getStatusText()}
            </Text>
          </View>


          {/* PROGRESS */}

          {(scanState ===
            "scanning" ||
            scanState ===
              "success") && (
            <View
              style={
                styles.progressContainer
              }
            >
              <View
                style={
                  styles.progressTrack
                }
              >
                <Animated.View
                  style={[
                    styles.progressFill,
                    {
                      backgroundColor:
                        progressColor,
                      width:
                        progressWidth.interpolate(
                          {
                            inputRange: [
                              0,
                              1,
                            ],
                            outputRange: [
                              "0%",
                              "100%",
                            ],
                          }
                        ),
                    },
                  ]}
                />
              </View>

              <Text
                style={
                  styles.progressText
                }
              >
                {Math.round(
                  progress * 100
                )}
                %
              </Text>
            </View>
          )}


          {/* ERROR */}

          {scanState ===
            "error" && (
            <View
              style={
                styles.errorMessage
              }
            >
              <Ionicons
                name="alert-circle-outline"
                size={17}
                color="#DC2626"
              />

              <Text
                style={
                  styles.errorMessageText
                }
              >
                {errorMessage}
              </Text>
            </View>
          )}


          {/* SECURITY */}

          {scanState ===
            "success" ? (
            <View
              style={
                styles.successBadge
              }
            >
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={18}
                color="#16A34A"
              />

              <Text
                style={
                  styles.successBadgeText
                }
              >
                Twin Shield Verified
              </Text>
            </View>
          ) : (
            <View
              style={
                styles.securityBadge
              }
            >
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={18}
                color="#2563EB"
              />

              <Text
                style={
                  styles.securityText
                }
              >
                Secured by Twin Shield
              </Text>
            </View>
          )}


          {/* RETRY */}

          {scanState ===
            "error" && (
            <TouchableOpacity
              activeOpacity={0.8}
              style={
                styles.retryButton
              }
              onPress={
                handleRetry
              }
            >
              <Ionicons
                name="refresh"
                size={18}
                color="#FFFFFF"
              />

              <Text
                style={
                  styles.retryText
                }
              >
                Try Again
              </Text>
            </TouchableOpacity>
          )}


          {/* SUCCESS */}

          {scanState ===
            "success" && (
            <TouchableOpacity
              activeOpacity={0.8}
              style={
                styles.successButton
              }
              onPress={
                handleContinue
              }
            >
              <Text
                style={
                  styles.successButtonText
                }
              >
                Continue
              </Text>

              <Ionicons
                name="arrow-forward"
                size={19}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          )}


          {/* START */}

          {scanState ===
            "idle" && (
            <TouchableOpacity
              activeOpacity={0.8}
              style={
                styles.startButton
              }
              onPress={
                beginAuthentication
              }
            >
              <MaterialCommunityIcons
                name="shield-search"
                size={19}
                color="#FFFFFF"
              />

              <Text
                style={
                  styles.startButtonText
                }
              >
                Start Verification
              </Text>
            </TouchableOpacity>
          )}


          {/* CANCEL */}

          {scanState !==
            "success" && (
            <TouchableOpacity
              activeOpacity={0.7}
              style={
                styles.cancelButton
              }
              onPress={
                handleCancel
              }
            >
              <Ionicons
                name="close-circle-outline"
                size={19}
                color="#64748B"
              />

              <Text
                style={
                  styles.cancelText
                }
              >
                Cancel
              </Text>
            </TouchableOpacity>
          )}

        </Animated.View>
      </View>
    </Modal>
  );
}


const styles =
  StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: "flex-end",
    },

    backdrop: {
      ...StyleSheet.absoluteFill,
      backgroundColor:
        "rgba(15, 23, 42, 0.48)",
    },

    outsidePress: {
      ...StyleSheet.absoluteFill,
    },

    sheet: {
      backgroundColor: "#FFFFFF",

      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,

      minHeight: 560,

      paddingHorizontal: 24,
      paddingTop: 12,
      paddingBottom: 26,

      shadowColor: "#000000",

      shadowOffset: {
        width: 0,
        height: -5,
      },

      shadowOpacity: 0.12,

      shadowRadius: 20,

      elevation: 20,
    },

    handle: {
      width: 44,
      height: 5,

      borderRadius: 3,

      backgroundColor: "#CBD5E1",

      alignSelf: "center",

      marginBottom: 25,
    },

    title: {
      color: "#0F172A",

      fontSize: 21,

      fontWeight: "800",

      textAlign: "center",
    },

    subtitle: {
      color: "#64748B",

      fontSize: 12,

      lineHeight: 18,

      textAlign: "center",

      marginTop: 8,

      paddingHorizontal: 15,
    },

    biometricArea: {
      height: 190,

      alignItems: "center",

      justifyContent: "center",

      marginTop: 2,
    },

    pulseRing: {
      position: "absolute",

      width: 165,
      height: 165,

      borderRadius: 83,

      borderWidth: 2,

      borderColor: "#93C5FD",
    },

    biometricCircle: {
      width: 136,
      height: 136,

      borderRadius: 68,

      borderWidth: 2,

      alignItems: "center",

      justifyContent: "center",

      shadowColor: "#2563EB",

      shadowOffset: {
        width: 0,
        height: 0,
      },

      shadowOpacity: 0.12,

      shadowRadius: 18,

      elevation: 4,

      overflow: "hidden",
    },

    scanLine: {
      position: "absolute",

      left: 4,
      right: 4,

      top: "50%",

      height: 2,

      backgroundColor: "#60A5FA",

      opacity: 0.85,
    },

    successCircle: {
      width: 74,
      height: 74,

      borderRadius: 37,

      backgroundColor: "#16A34A",

      alignItems: "center",

      justifyContent: "center",
    },

    errorCircle: {
      width: 74,
      height: 74,

      borderRadius: 37,

      backgroundColor: "#DC2626",

      alignItems: "center",

      justifyContent: "center",
    },

    statusContainer: {
      flexDirection: "row",

      alignItems: "center",

      justifyContent: "center",

      marginTop: 0,
    },

    statusDot: {
      width: 8,
      height: 8,

      borderRadius: 4,

      marginRight: 7,
    },

    statusText: {
      color: "#475569",

      fontSize: 11,

      fontWeight: "600",
    },

    progressContainer: {
      flexDirection: "row",

      alignItems: "center",

      marginTop: 16,
    },

    progressTrack: {
      flex: 1,

      height: 6,

      borderRadius: 3,

      backgroundColor: "#E2E8F0",

      overflow: "hidden",
    },

    progressFill: {
      height: 6,

      borderRadius: 3,
    },

    progressText: {
      width: 36,

      color: "#64748B",

      fontSize: 9,

      fontWeight: "700",

      textAlign: "right",

      marginLeft: 8,
    },

    errorMessage: {
      flexDirection: "row",

      alignItems: "center",

      justifyContent: "center",

      backgroundColor: "#FEF2F2",

      borderRadius: 12,

      paddingHorizontal: 12,

      paddingVertical: 10,

      marginTop: 15,
    },

    errorMessageText: {
      flex: 1,

      color: "#B91C1C",

      fontSize: 10,

      lineHeight: 15,

      marginLeft: 7,

      textAlign: "center",
    },

    securityBadge: {
      flexDirection: "row",

      alignItems: "center",

      justifyContent: "center",

      alignSelf: "center",

      backgroundColor: "#EFF6FF",

      borderRadius: 12,

      paddingHorizontal: 13,

      paddingVertical: 9,

      marginTop: 19,
    },

    securityText: {
      color: "#2563EB",

      fontSize: 10,

      fontWeight: "700",

      marginLeft: 6,
    },

    successBadge: {
      flexDirection: "row",

      alignItems: "center",

      justifyContent: "center",

      alignSelf: "center",

      backgroundColor: "#F0FDF4",

      borderRadius: 12,

      paddingHorizontal: 13,

      paddingVertical: 9,

      marginTop: 19,
    },

    successBadgeText: {
      color: "#16A34A",

      fontSize: 10,

      fontWeight: "800",

      marginLeft: 6,
    },

    startButton: {
      height: 52,

      borderRadius: 16,

      backgroundColor: "#2563EB",

      flexDirection: "row",

      alignItems: "center",

      justifyContent: "center",

      marginTop: 18,
    },

    startButtonText: {
      color: "#FFFFFF",

      fontSize: 12,

      fontWeight: "800",

      marginLeft: 8,
    },

    retryButton: {
      height: 52,

      borderRadius: 16,

      backgroundColor: "#2563EB",

      flexDirection: "row",

      alignItems: "center",

      justifyContent: "center",

      marginTop: 18,
    },

    retryText: {
      color: "#FFFFFF",

      fontSize: 12,

      fontWeight: "800",

      marginLeft: 8,
    },

    successButton: {
      height: 52,

      borderRadius: 16,

      backgroundColor: "#16A34A",

      flexDirection: "row",

      alignItems: "center",

      justifyContent: "center",

      marginTop: 18,

      paddingHorizontal: 20,
    },

    successButtonText: {
      flex: 1,

      color: "#FFFFFF",

      fontSize: 12,

      fontWeight: "800",

      textAlign: "center",
    },

    cancelButton: {
      height: 45,

      flexDirection: "row",

      alignItems: "center",

      justifyContent: "center",

      marginTop: 7,
    },

    cancelText: {
      color: "#64748B",

      fontSize: 12,

      fontWeight: "700",

      marginLeft: 6,
    },
  });