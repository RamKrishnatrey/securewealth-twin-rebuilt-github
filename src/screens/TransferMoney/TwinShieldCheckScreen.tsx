import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Animated,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";

import styles from "./twinShieldStyles";

type ScanStatus =
  | "waiting"
  | "scanning"
  | "complete";

export default function TwinShieldCheckScreen() {
  const params = useLocalSearchParams<{
    amount?: string;
    beneficiaryName?: string;
    beneficiaryBank?: string;
    beneficiaryAccount?: string;
    note?: string;
  }>();

  const amount = Number(params.amount ?? 0);

  const beneficiaryName =
    params.beneficiaryName ?? "Beneficiary";

  const beneficiaryBank =
    params.beneficiaryBank ?? "Bank";

  const beneficiaryAccount =
    params.beneficiaryAccount ?? "••••";

  const note = params.note ?? "";

  const [scanStatus, setScanStatus] =
    useState<ScanStatus>("scanning");

  const [currentStep, setCurrentStep] =
    useState(0);

  const [progress, setProgress] =
    useState(0);

  const pulseAnim = useRef(
    new Animated.Value(1)
  ).current;

  const rotateAnim = useRef(
    new Animated.Value(0)
  ).current;

  const progressAnim = useRef(
    new Animated.Value(0)
  ).current;

  type MaterialIconName =
  React.ComponentProps<typeof MaterialCommunityIcons>["name"];

type SecurityCheck = {
  title: string;
  description: string;
  icon: MaterialIconName;
};

const checks: SecurityCheck[] = [
  {
    title: "Recipient Verification",
    description:
      "Checking beneficiary identity and account details",
    icon: "account-check-outline",
  },
  {
    title: "Transaction Behaviour",
    description:
      "Comparing this payment with your spending patterns",
    icon: "chart-line",
  },
  {
    title: "Device Trust",
    description:
      "Verifying device, session and login environment",
    icon: "cellphone-check",
  },
  {
    title: "Fraud Intelligence",
    description:
      "Analysing suspicious transaction indicators",
    icon: "shield-search",
  },
];

  useEffect(() => {
  startPulseAnimation();
  startRotateAnimation();
  startSecurityScan();

  return () => {
    progressAnim.stopAnimation();
    pulseAnim.stopAnimation();
    rotateAnim.stopAnimation();
  };
}, []);

  const startPulseAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.08,
          duration: 900,
          useNativeDriver: true,
        }),

        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const startRotateAnimation = () => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      })
    ).start();
  };

  const startSecurityScan = () => {
    setScanStatus("scanning");

    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 5200,
      useNativeDriver: false,
    }).start();

    const progressListener =
      progressAnim.addListener(({ value }) => {
        setProgress(
          Math.min(100, Math.round(value * 100))
        );
      });

    const timers = [
      setTimeout(() => {
        setCurrentStep(1);
      }, 1200),

      setTimeout(() => {
        setCurrentStep(2);
      }, 2400),

      setTimeout(() => {
        setCurrentStep(3);
      }, 3600),

      setTimeout(() => {
        setCurrentStep(4);
        setProgress(100);
        setScanStatus("complete");
      }, 5200),
    ];

    return () => {
      timers.forEach(clearTimeout);

      progressAnim.removeListener(
        progressListener
      );
    };
  };

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const progressWidth =
    progressAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
    });

  const handleContinue = () => {
    router.push({
      pathname: "/transfer/authorize",
      params: {
        amount: amount.toString(),
        beneficiaryName,
        beneficiaryBank,
        beneficiaryAccount,
        note,
        riskScore: "98",
        riskLevel: "LOW",
      },
    } as any);
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F8FAFC"
      />

      <SafeAreaView
        style={styles.container}
        edges={["top"]}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={
            styles.content
          }
          showsVerticalScrollIndicator={false}
        >
          {/* HEADER */}

          <View style={styles.header}>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => router.back()}
            >
              <Ionicons
                name="chevron-back"
                size={23}
                color="#0F172A"
              />
            </TouchableOpacity>

            <View style={styles.headerCenter}>
              <Text style={styles.headerTitle}>
                Twin Shield
              </Text>

              <Text style={styles.headerSubtitle}>
                AI Security Verification
              </Text>
            </View>

            <View style={styles.liveBadge}>
              <View style={styles.liveDot} />

              <Text style={styles.liveText}>
                LIVE
              </Text>
            </View>
          </View>

          {/* SCANNER */}

          <View style={styles.scannerSection}>
            <Animated.View
              style={[
                styles.outerScannerRing,
                {
                  transform: [
                    {
                      rotate,
                    },
                  ],
                },
              ]}
            >
              <View
                style={
                  styles.scannerRingMarker
                }
              />
            </Animated.View>

            <Animated.View
              style={[
                styles.shieldCircle,
                {
                  transform: [
                    {
                      scale: pulseAnim,
                    },
                  ],
                },
              ]}
            >
              <LinearGradient
                colors={
                  scanStatus === "complete"
                    ? ["#16A34A", "#22C55E"]
                    : ["#2563EB", "#4F46E5"]
                }
                style={styles.shieldGradient}
              >
                <MaterialCommunityIcons
                  name={
                    scanStatus === "complete"
                      ? "shield-check"
                      : "shield-search"
                  }
                  size={50}
                  color="#FFFFFF"
                />
              </LinearGradient>
            </Animated.View>
          </View>

          {/* STATUS */}

          <Text style={styles.scanTitle}>
            {scanStatus === "complete"
              ? "Transaction Verified"
              : "Analysing Transaction"}
          </Text>

          <Text style={styles.scanSubtitle}>
            {scanStatus === "complete"
              ? "Twin Shield found no significant security threats."
              : "Twin AI is checking multiple fraud and security signals."}
          </Text>

          {/* PROGRESS */}

          <View
            style={
              styles.progressHeader
            }
          >
            <Text
              style={
                styles.progressLabel
              }
            >
              Security Analysis
            </Text>

            <Text
              style={
                styles.progressPercent
              }
            >
              {progress}%
            </Text>
          </View>

          <View
            style={
              styles.progressBackground
            }
          >
            <Animated.View
              style={[
                styles.progressFill,
                {
                  width: progressWidth,
                },
              ]}
            />
          </View>

          {/* TRANSFER INFO */}

          <View style={styles.transferCard}>
            <View>
              <Text
                style={
                  styles.transferLabel
                }
              >
                VERIFYING TRANSFER
              </Text>

              <Text
                style={
                  styles.transferName
                }
              >
                {beneficiaryName}
              </Text>

              <Text
                style={
                  styles.transferBank
                }
              >
                {beneficiaryBank} •{" "}
                {beneficiaryAccount}
              </Text>
            </View>

            <Text
              style={
                styles.transferAmount
              }
            >
              ₹
              {amount.toLocaleString(
                "en-IN"
              )}
            </Text>
          </View>

          {/* SECURITY CHECKS */}

          <Text style={styles.sectionLabel}>
            SECURITY ANALYSIS
          </Text>

          <View style={styles.checksCard}>
            {checks.map(
              (check, index) => {
                const completed =
                  currentStep > index;

                const active =
                  currentStep === index &&
                  scanStatus !==
                    "complete";

                return (
                  <View
                    key={check.title}
                    style={[
                      styles.checkRow,

                      index ===
                        checks.length - 1 &&
                        styles.checkRowLast,
                    ]}
                  >
                    <View
                      style={[
                        styles.checkIcon,

                        completed &&
                          styles.checkIconComplete,

                        active &&
                          styles.checkIconActive,
                      ]}
                    >
                      {completed ? (
                        <Ionicons
                          name="checkmark"
                          size={18}
                          color="#FFFFFF"
                        />
                      ) : (
                        <MaterialCommunityIcons
                          name={check.icon}
                          size={19}
                          color={
                            active
                              ? "#2563EB"
                              : "#94A3B8"
                          }
                        />
                      )}
                    </View>

                    <View
                      style={
                        styles.checkContent
                      }
                    >
                      <Text
                        style={[
                          styles.checkTitle,

                          active &&
                            styles.checkTitleActive,
                        ]}
                      >
                        {check.title}
                      </Text>

                      <Text
                        style={
                          styles.checkDescription
                        }
                      >
                        {completed
                          ? "Check completed successfully"
                          : check.description}
                      </Text>
                    </View>

                    {completed && (
                      <Text
                        style={
                          styles.passedText
                        }
                      >
                        PASSED
                      </Text>
                    )}

                    {active && (
                      <View
                        style={
                          styles.scanningChip
                        }
                      >
                        <Text
                          style={
                            styles.scanningText
                          }
                        >
                          SCANNING
                        </Text>
                      </View>
                    )}
                  </View>
                );
              }
            )}
          </View>

          {/* RESULT */}

          {scanStatus === "complete" && (
            <>
              <LinearGradient
                colors={[
                  "#F0FDF4",
                  "#ECFDF5",
                ]}
                style={
                  styles.resultCard
                }
              >
                <View
                  style={
                    styles.resultHeader
                  }
                >
                  <View
                    style={
                      styles.resultShield
                    }
                  >
                    <MaterialCommunityIcons
                      name="shield-check"
                      size={27}
                      color="#16A34A"
                    />
                  </View>

                  <View
                    style={
                      styles.resultHeaderText
                    }
                  >
                    <Text
                      style={
                        styles.resultTitle
                      }
                    >
                      Safe to Proceed
                    </Text>

                    <Text
                      style={
                        styles.resultSubtitle
                      }
                    >
                      No suspicious behaviour
                      detected
                    </Text>
                  </View>

                  <View
                    style={
                      styles.lowRiskBadge
                    }
                  >
                    <Text
                      style={
                        styles.lowRiskText
                      }
                    >
                      LOW RISK
                    </Text>
                  </View>
                </View>

                <View
                  style={
                    styles.resultDivider
                  }
                />

                <View
                  style={
                    styles.scoreRow
                  }
                >
                  <View>
                    <Text
                      style={
                        styles.scoreLabel
                      }
                    >
                      TWIN SHIELD SCORE
                    </Text>

                    <Text
                      style={
                        styles.score
                      }
                    >
                      98
                      <Text
                        style={
                          styles.scoreOutOf
                        }
                      >
                        /100
                      </Text>
                    </Text>
                  </View>

                  <View
                    style={
                      styles.scoreDetails
                    }
                  >
                    <ScoreItem
                      label="Fraud"
                      value="0.8%"
                    />

                    <ScoreItem
                      label="Device"
                      value="Trusted"
                    />

                    <ScoreItem
                      label="Behaviour"
                      value="Normal"
                    />
                  </View>
                </View>
              </LinearGradient>

              <TouchableOpacity
                activeOpacity={0.85}
                style={
                  styles.continueButton
                }
                onPress={handleContinue}
              >
                <MaterialCommunityIcons
                  name="fingerprint"
                  size={23}
                  color="#FFFFFF"
                />

                <Text
                  style={
                    styles.continueText
                  }
                >
                  Authorize Transfer
                </Text>

                <Ionicons
                  name="arrow-forward"
                  size={19}
                  color="#FFFFFF"
                />
              </TouchableOpacity>

              <View
                style={
                  styles.securityFooter
                }
              >
                <MaterialCommunityIcons
                  name="lock-outline"
                  size={13}
                  color="#64748B"
                />

                <Text
                  style={
                    styles.securityFooterText
                  }
                >
                  Final authorization is
                  required before money is
                  transferred.
                </Text>
              </View>
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

function ScoreItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View style={styles.scoreItem}>
      <Text style={styles.scoreItemLabel}>
        {label}
      </Text>

      <Text style={styles.scoreItemValue}>
        {value}
      </Text>
    </View>
  );
}