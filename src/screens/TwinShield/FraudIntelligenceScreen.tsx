import React, {
  useEffect,
  useState,
} from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { router } from "expo-router";

import styles from "./fraudStyles";
import { fraudService } from "@/services/fraudService";
import type { FraudCheckResponse } from "@/types/fraud";

type ScanState =
  | "idle"
  | "scanning"
  | "complete";

type AnalysisItem = {
  id: string;
  title: string;
  description: string;
  result: string;
  icon:
    | "account-check-outline"
    | "chart-line"
    | "cellphone-check"
    | "radar";
};

const analysisItems: AnalysisItem[] = [
  {
    id: "behaviour",
    title: "Transaction Behaviour",
    description:
      "Compared recent payments with your normal spending patterns.",
    result: "Normal",
    icon: "chart-line",
  },
  {
    id: "device",
    title: "Device Trust",
    description:
      "Checked your active device, session and login environment.",
    result: "Trusted",
    icon: "cellphone-check",
  },
  {
    id: "identity",
    title: "Identity Signals",
    description:
      "Verified account activity against known identity patterns.",
    result: "Verified",
    icon: "account-check-outline",
  },
  {
    id: "intelligence",
    title: "Fraud Intelligence",
    description:
      "Analysed suspicious indicators across recent financial activity.",
    result: "Clear",
    icon: "radar",
  },
];

export default function FraudIntelligenceScreen() {
  const [scanState, setScanState] = useState<ScanState>("idle");
  const [progress, setProgress] = useState(0);
  const [activeCheck, setActiveCheck] = useState(0);
  const [fraudResult, setFraudResult] = useState<FraudCheckResponse | null>(null);
  const [scanError, setScanError] = useState<string | null>(null);

  const runScanAgain = async () => {
    setScanState("scanning");
    setProgress(10);
    setActiveCheck(0);
    setScanError(null);

    try {
      // Clearly labelled demo payment; not a real bank transaction.
      const result = await fraudService.checkFraud({
        amount: 1200,
        payee_id: "demo-payee",
        usual_amount: 1000,
        context: "payment",
      });

      setFraudResult(result);
      setProgress(100);
      setActiveCheck(analysisItems.length);
      setScanState("complete");
    } catch (error) {
      setProgress(0);
      setActiveCheck(0);
      setScanError(
        error instanceof Error
          ? error.message
          : "Could not connect to the fraud detection API."
      );
      setScanState("idle");
    }
  };

  useEffect(() => {
    void runScanAgain();
  }, []);

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
        {/* HEADER */}

        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.headerButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="chevron-back"
              size={22}
              color="#0F172A"
            />
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>
              Fraud Intelligence
            </Text>

            <Text
              style={styles.headerSubtitle}
            >
              Powered by Twin Shield
            </Text>
          </View>

          <View style={styles.liveButton}>
            <View style={styles.liveDot} />

            <Text style={styles.liveText}>
              LIVE
            </Text>
          </View>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={
            styles.content
          }
          showsVerticalScrollIndicator={
            false
          }
        >
          {/* SCAN HERO */}

          <View style={styles.scanCard}>
            <View style={styles.scanGlowOne} />
            <View style={styles.scanGlowTwo} />

            <View style={styles.scanBadge}>
              <MaterialCommunityIcons
                name="radar"
                size={13}
                color="#BFDBFE"
              />

              <Text
                style={styles.scanBadgeText}
              >
                AI FRAUD SCAN
              </Text>
            </View>

            <View
              style={styles.radarOuter}
            >
              <View
                style={styles.radarMiddle}
              >
                <View
                  style={styles.radarInner}
                >
                  <MaterialCommunityIcons
                    name={
                      scanState ===
                      "complete"
                        ? "shield-check"
                        : "radar"
                    }
                    size={35}
                    color="#FFFFFF"
                  />
                </View>
              </View>
            </View>

            {scanState === "scanning" ? (
              <>
                <Text
                  style={styles.scanTitle}
                >
                  Analysing your security
                </Text>

                <Text
                  style={
                    styles.scanDescription
                  }
                >
                  Twin is checking transaction
                  behaviour, devices and fraud
                  signals.
                </Text>

                <View
                  style={
                    styles.scanProgressHeader
                  }
                >
                  <Text
                    style={
                      styles.scanProgressLabel
                    }
                  >
                    FRAUD ANALYSIS
                  </Text>

                  <Text
                    style={
                      styles.scanProgressValue
                    }
                  >
                    {progress}%
                  </Text>
                </View>

                <View
                  style={
                    styles.scanProgressTrack
                  }
                >
                  <View
                    style={[
                      styles.scanProgressFill,
                      {
                        width: `${progress}%`,
                      },
                    ]}
                  />
                </View>

                <Text
                  style={
                    styles.currentCheckText
                  }
                >
                  {
                    analysisItems[
                      Math.min(
                        activeCheck,
                        analysisItems.length -
                          1
                      )
                    ].title
                  }
                </Text>
              </>
            ) : (
              <>
                <Text
                  style={styles.scanTitle}
                >
                  No major threats detected
                </Text>

                <Text
                  style={
                    styles.scanDescription
                  }
                >
                  Your current financial
                  environment appears secure.
                  Twin will continue monitoring
                  activity in real time.
                </Text>

                <View
                  style={
                    styles.completedBadge
                  }
                >
                  <Ionicons
                    name="checkmark-circle"
                    size={15}
                    color="#4ADE80"
                  />

                  <Text
                    style={
                      styles.completedBadgeText
                    }
                  >
                    SCAN COMPLETE
                  </Text>
                </View>
              </>
            )}
          </View>

          {/* RISK SCORE */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Risk Assessment
            </Text>

            <Text style={styles.updatedText}>
              Updated now
            </Text>
          </View>

          <View style={styles.riskCard}>
            <View style={styles.riskTop}>
              <View>
                <Text
                  style={styles.riskLabel}
                >
                  OVERALL FRAUD RISK
                </Text>

                <View
                  style={
                    styles.riskValueRow
                  }
                >
                  <Text
                    style={styles.riskValue}
                  >{fraudResult ? String(fraudResult.risk_score).padStart(2, "0") : "?"}</Text>

                  <Text
                    style={styles.riskMax}
                  >
                    /100
                  </Text>
                </View>
              </View>

              <View
                style={styles.lowRiskBadge}
              >
                <View
                  style={
                    styles.lowRiskDot
                  }
                />

                <Text
                  style={
                    styles.lowRiskText
                  }
                >{fraudResult ? `${fraudResult.risk_level} RISK` : scanState === "scanning" ? "SCANNING" : "NOT SCANNED"}</Text>
              </View>
            </View>

            <View
              style={styles.riskScale}
            >
              <View
                style={styles.riskIndicator}
              />
            </View>

            <View
              style={styles.scaleLabels}
            >
              <Text
                style={styles.scaleText}
              >
                Low
              </Text>

              <Text
                style={styles.scaleText}
              >
                Moderate
              </Text>

              <Text
                style={styles.scaleText}
              >
                High
              </Text>
            </View>

            <View
              style={styles.riskDivider}
            />

            <View
              style={styles.riskFooter}
            >
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={17}
                color="#16A34A"
              />

              <Text
                style={
                  styles.riskFooterText
                }
              >
                {fraudResult ? fraudResult.message : scanError ?? "Run a scan to evaluate a demo transaction."}
              </Text>
            </View>
          </View>

          {/* SECURITY CHECKS */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Security Analysis
            </Text>

            <View
              style={styles.checkCountBadge}
            >
              <Text
                style={
                  styles.checkCountText
                }
              >
                4 CHECKS
              </Text>
            </View>
          </View>

          <View
            style={styles.analysisContainer}
          >
            {analysisItems.map(
              (item, index) => {
                const complete =
                  scanState ===
                    "complete" ||
                  activeCheck > index;

                const active =
                  scanState ===
                    "scanning" &&
                  activeCheck === index;

                return (
                  <View key={item.id}>
                    <View
                      style={
                        styles.analysisItem
                      }
                    >
                      <View
                        style={[
                          styles.analysisIcon,
                          active &&
                            styles.analysisIconActive,
                          complete &&
                            styles.analysisIconComplete,
                        ]}
                      >
                        <MaterialCommunityIcons
                          name={item.icon}
                          size={20}
                          color={
                            complete
                              ? "#16A34A"
                              : active
                              ? "#2563EB"
                              : "#94A3B8"
                          }
                        />
                      </View>

                      <View
                        style={
                          styles.analysisContent
                        }
                      >
                        <View
                          style={
                            styles.analysisTitleRow
                          }
                        >
                          <Text
                            style={
                              styles.analysisTitle
                            }
                          >
                            {item.title}
                          </Text>

                          {complete ? (
                            <View
                              style={
                                styles.resultBadge
                              }
                            >
                              <Ionicons
                                name="checkmark"
                                size={10}
                                color="#16A34A"
                              />

                              <Text
                                style={
                                  styles.resultText
                                }
                              >
                                {item.result}
                              </Text>
                            </View>
                          ) : active ? (
                            <Text
                              style={
                                styles.analysingText
                              }
                            >
                              Analysing...
                            </Text>
                          ) : (
                            <Text
                              style={
                                styles.pendingText
                              }
                            >
                              Pending
                            </Text>
                          )}
                        </View>

                        <Text
                          style={
                            styles.analysisDescription
                          }
                        >
                          {item.description}
                        </Text>
                      </View>
                    </View>

                    {index !==
                      analysisItems.length -
                        1 && (
                      <View
                        style={
                          styles.analysisDivider
                        }
                      />
                    )}
                  </View>
                );
              }
            )}
          </View>

          {/* AI ASSESSMENT */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Twin AI Assessment
            </Text>

            <View style={styles.aiBadge}>
              <MaterialCommunityIcons
                name="creation"
                size={10}
                color="#7C3AED"
              />

              <Text
                style={styles.aiBadgeText}
              >
                AI
              </Text>
            </View>
          </View>

          <View style={styles.aiCard}>
            <View style={styles.aiHeader}>
              <View style={styles.aiIcon}>
                <MaterialCommunityIcons
                  name="creation"
                  size={21}
                  color="#7C3AED"
                />
              </View>

              <View style={styles.aiHeading}>
                <Text style={styles.aiTitle}>
                  {fraudResult ? (fraudResult.decision === "BLOCK" ? "High-risk activity detected" : fraudResult.decision === "WARN" ? "Activity needs review" : "No configured risk flags") : "Awaiting scan"}
                </Text>

                <Text
                  style={styles.aiSubtitle}
                >
                  Twin Fraud Intelligence
                </Text>
              </View>
            </View>

            <Text
              style={styles.aiDescription}
            >
              {fraudResult ? `${fraudResult.message}${fraudResult.reasons.length ? " Reasons: " + fraudResult.reasons.join("; ") : ""}` : scanError ?? "Run a scan to view the backend assessment."}
            </Text>

            <View
              style={styles.aiInsightBox}
            >
              <View
                style={styles.aiInsightRow}
              >
                <Text
                  style={
                    styles.aiInsightLabel
                  }
                >
                  Suspicious transactions
                </Text>

                <Text
                  style={
                    styles.aiInsightValue
                  }
                >
                  0
                </Text>
              </View>

              <View
                style={styles.aiInsightRow}
              >
                <Text
                  style={
                    styles.aiInsightLabel
                  }
                >
                  Untrusted devices
                </Text>

                <Text
                  style={
                    styles.aiInsightValue
                  }
                >
                  0
                </Text>
              </View>

              <View
                style={styles.aiInsightRow}
              >
                <Text
                  style={
                    styles.aiInsightLabel
                  }
                >
                  Behaviour anomalies
                </Text>

                <Text
                  style={
                    styles.aiInsightValue
                  }
                >
                  None
                </Text>
              </View>
            </View>

            <View
              style={styles.confidenceHeader}
            >
              <Text
                style={styles.confidenceLabel}
              >
                Detection Method
              </Text>

              <Text
                style={styles.confidenceValue}
              >Rule-based baseline</Text>
            </View>

            <View
              style={styles.confidenceTrack}
            >
              <View
                style={styles.confidenceFill}
              />
            </View>
          </View>

          {/* ACTIONS */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.primaryButton}
            onPress={runScanAgain}
          >
            <MaterialCommunityIcons
              name="radar"
              size={19}
              color="#FFFFFF"
            />

            <Text
              style={styles.primaryButtonText}
            >
              Run New Fraud Scan
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.secondaryButton}
          >
            <MaterialCommunityIcons
              name="shield-check-outline"
              size={18}
              color="#2563EB"
            />

            <Text
              style={styles.secondaryButtonText}
            >
              View Security Center
            </Text>

            <Ionicons
              name="chevron-forward"
              size={17}
              color="#2563EB"
            />
          </TouchableOpacity>

          <View
            style={styles.securityFooter}
          >
            <MaterialCommunityIcons
              name="shield-lock-outline"
              size={13}
              color="#94A3B8"
            />

            <Text
              style={
                styles.securityFooterText
              }
            >
              Analysis protected by Twin Shield
              security intelligence
            </Text>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}