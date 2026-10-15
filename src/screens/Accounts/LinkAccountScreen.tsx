import React, { useMemo, useState } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  StyleSheet,
  Modal,
  ActivityIndicator,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import { router } from "expo-router";


type Bank = {
  id: string;
  name: string;
  shortName: string;
  color: string;
  background: string;
};


const banks: Bank[] = [
  {
    id: "1",
    name: "Punjab & Sind Bank",
    shortName: "PSB",
    color: "#2563EB",
    background: "#EFF6FF",
  },
  {
    id: "2",
    name: "HDFC Bank",
    shortName: "HDFC",
    color: "#DC2626",
    background: "#FEF2F2",
  },
  {
    id: "3",
    name: "ICICI Bank",
    shortName: "ICICI",
    color: "#EA580C",
    background: "#FFF7ED",
  },
  {
    id: "4",
    name: "State Bank of India",
    shortName: "SBI",
    color: "#0891B2",
    background: "#ECFEFF",
  },
  {
    id: "5",
    name: "Axis Bank",
    shortName: "AXIS",
    color: "#BE123C",
    background: "#FFF1F2",
  },
  {
    id: "6",
    name: "Kotak Mahindra Bank",
    shortName: "KOTAK",
    color: "#7C3AED",
    background: "#F5F3FF",
  },
];


export default function LinkAccountScreen() {
  const [
    selectedBank,
    setSelectedBank,
  ] = useState<Bank | null>(null);

  const [
    bankModalVisible,
    setBankModalVisible,
  ] = useState(false);

  const [
    accountNumber,
    setAccountNumber,
  ] = useState("");

  const [
    confirmAccountNumber,
    setConfirmAccountNumber,
  ] = useState("");

  const [ifsc, setIfsc] =
    useState("");

  const [mobile, setMobile] =
    useState("");

  const [
    isVerifying,
    setIsVerifying,
  ] = useState(false);

  const [
    verificationComplete,
    setVerificationComplete,
  ] = useState(false);


  const accountNumbersMatch =
    accountNumber.length > 0 &&
    accountNumber ===
      confirmAccountNumber;


  const canVerify = useMemo(() => {
    return (
      selectedBank !== null &&
      accountNumber.length >= 8 &&
      confirmAccountNumber.length >= 8 &&
      accountNumbersMatch &&
      ifsc.trim().length >= 8 &&
      mobile.length === 10
    );
  }, [
    selectedBank,
    accountNumber,
    confirmAccountNumber,
    accountNumbersMatch,
    ifsc,
    mobile,
  ]);


  const cleanAccountNumber = (
    value: string
  ) => {
    return value.replace(
      /[^0-9]/g,
      ""
    );
  };


  const cleanMobile = (
    value: string
  ) => {
    return value
      .replace(/[^0-9]/g, "")
      .slice(0, 10);
  };


  const cleanIFSC = (
    value: string
  ) => {
    return value
      .replace(
        /[^a-zA-Z0-9]/g,
        ""
      )
      .toUpperCase()
      .slice(0, 11);
  };


  const handleVerify = () => {
    if (!canVerify) {
      return;
    }

    setIsVerifying(true);

    /*
     * Temporary frontend verification.
     *
     * Later replace this with:
     *
     * await accountService.verify(...)
     */

    setTimeout(() => {
      setIsVerifying(false);
      setVerificationComplete(
        true
      );
    }, 1400);
  };


  const handleFinish = () => {
    /*
     * Backend will eventually save
     * the verified linked account.
     */

    router.replace(
      "/manage-accounts" as any
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
        edges={["top"]}
      >
        {/* HEADER */}

        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={
              styles.headerButton
            }
            onPress={() =>
              router.back()
            }
          >
            <Ionicons
              name="chevron-back"
              size={22}
              color="#0F172A"
            />
          </TouchableOpacity>

          <View
            style={
              styles.headerCenter
            }
          >
            <Text
              style={
                styles.headerTitle
              }
            >
              Link Bank Account
            </Text>

            <Text
              style={
                styles.headerSubtitle
              }
            >
              Secure account connection
            </Text>
          </View>

          <View
            style={
              styles.securityHeader
            }
          >
            <MaterialCommunityIcons
              name="shield-check-outline"
              size={21}
              color="#16A34A"
            />
          </View>
        </View>


        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={
            false
          }
          contentContainerStyle={
            styles.content
          }
        >
          {/* PROGRESS */}

          <View
            style={
              styles.progressContainer
            }
          >
            <ProgressStep
              number="1"
              title="Details"
              active
            />

            <View
              style={
                styles.progressLine
              }
            />

            <ProgressStep
              number="2"
              title="Verify"
              active={
                isVerifying ||
                verificationComplete
              }
            />

            <View
              style={
                styles.progressLine
              }
            />

            <ProgressStep
              number="3"
              title="Secure"
              active={
                verificationComplete
              }
            />
          </View>


          {/* INTRO */}

          {!verificationComplete && (
            <>
              <View
                style={
                  styles.introCard
                }
              >
                <View
                  style={
                    styles.introIcon
                  }
                >
                  <MaterialCommunityIcons
                    name="bank-plus"
                    size={25}
                    color="#2563EB"
                  />
                </View>

                <View
                  style={
                    styles.introContent
                  }
                >
                  <Text
                    style={
                      styles.introTitle
                    }
                  >
                    Connect Your Bank
                  </Text>

                  <Text
                    style={
                      styles.introText
                    }
                  >
                    Link another bank
                    account to view your
                    complete financial
                    picture in one place.
                  </Text>
                </View>
              </View>


              {/* SELECT BANK */}

              <SectionHeader
                title="Select Bank"
                subtitle="Choose the bank you want to connect"
              />

              <TouchableOpacity
                activeOpacity={0.75}
                style={
                  styles.bankSelector
                }
                onPress={() =>
                  setBankModalVisible(
                    true
                  )
                }
              >
                {selectedBank ? (
                  <>
                    <View
                      style={[
                        styles.selectedBankIcon,
                        {
                          backgroundColor:
                            selectedBank.background,
                        },
                      ]}
                    >
                      <MaterialCommunityIcons
                        name="bank-outline"
                        size={22}
                        color={
                          selectedBank.color
                        }
                      />
                    </View>

                    <View
                      style={
                        styles.bankSelectorContent
                      }
                    >
                      <Text
                        style={
                          styles.bankSelectorLabel
                        }
                      >
                        SELECTED BANK
                      </Text>

                      <Text
                        style={
                          styles.selectedBankName
                        }
                      >
                        {
                          selectedBank.name
                        }
                      </Text>
                    </View>
                  </>
                ) : (
                  <>
                    <View
                      style={
                        styles.emptyBankIcon
                      }
                    >
                      <MaterialCommunityIcons
                        name="bank-outline"
                        size={22}
                        color="#64748B"
                      />
                    </View>

                    <View
                      style={
                        styles.bankSelectorContent
                      }
                    >
                      <Text
                        style={
                          styles.selectBankTitle
                        }
                      >
                        Choose your bank
                      </Text>

                      <Text
                        style={
                          styles.selectBankSubtitle
                        }
                      >
                        Select from supported
                        banks
                      </Text>
                    </View>
                  </>
                )}

                <Ionicons
                  name="chevron-down"
                  size={19}
                  color="#64748B"
                />
              </TouchableOpacity>


              {/* DETAILS */}

              <SectionHeader
                title="Account Details"
                subtitle="Enter your banking information"
              />


              <InputField
                label="ACCOUNT NUMBER"
                icon="card-outline"
                value={accountNumber}
                placeholder="Enter account number"
                keyboardType="number-pad"
                onChangeText={(value) => {
                  setAccountNumber(
                    cleanAccountNumber(
                      value
                    )
                  );
                }}
              />


              <InputField
                label="CONFIRM ACCOUNT NUMBER"
                icon="checkmark-circle-outline"
                value={
                  confirmAccountNumber
                }
                placeholder="Re-enter account number"
                keyboardType="number-pad"
                onChangeText={(value) => {
                  setConfirmAccountNumber(
                    cleanAccountNumber(
                      value
                    )
                  );
                }}
                success={
                  accountNumbersMatch
                }
                error={
                  confirmAccountNumber.length >
                    0 &&
                  !accountNumbersMatch
                }
              />


              {confirmAccountNumber.length >
                0 &&
                !accountNumbersMatch && (
                  <View
                    style={
                      styles.errorRow
                    }
                  >
                    <Ionicons
                      name="alert-circle-outline"
                      size={14}
                      color="#DC2626"
                    />

                    <Text
                      style={
                        styles.errorText
                      }
                    >
                      Account numbers do
                      not match
                    </Text>
                  </View>
                )}


              <InputField
                label="IFSC CODE"
                icon="business-outline"
                value={ifsc}
                placeholder="e.g. HDFC0001234"
                autoCapitalize="characters"
                onChangeText={(value) =>
                  setIfsc(
                    cleanIFSC(value)
                  )
                }
              />


              <InputField
                label="REGISTERED MOBILE NUMBER"
                icon="phone-portrait-outline"
                value={mobile}
                placeholder="10-digit mobile number"
                keyboardType="phone-pad"
                onChangeText={(value) =>
                  setMobile(
                    cleanMobile(value)
                  )
                }
              />


              {/* SECURITY */}

              <View
                style={
                  styles.securityCard
                }
              >
                <View
                  style={
                    styles.securityIcon
                  }
                >
                  <MaterialCommunityIcons
                    name="shield-lock-outline"
                    size={23}
                    color="#16A34A"
                  />
                </View>

                <View
                  style={
                    styles.securityContent
                  }
                >
                  <Text
                    style={
                      styles.securityTitle
                    }
                  >
                    Twin Shield Verification
                  </Text>

                  <Text
                    style={
                      styles.securityText
                    }
                  >
                    Your account details
                    will be verified and
                    protected using
                    SecureWealth Twin's
                    security layer.
                  </Text>
                </View>
              </View>


              {/* VERIFY */}

              <TouchableOpacity
                activeOpacity={
                  canVerify
                    ? 0.82
                    : 1
                }
                disabled={
                  !canVerify ||
                  isVerifying
                }
                style={[
                  styles.verifyButton,

                  !canVerify &&
                    styles.verifyButtonDisabled,
                ]}
                onPress={
                  handleVerify
                }
              >
                {isVerifying ? (
                  <>
                    <ActivityIndicator
                      size="small"
                      color="#FFFFFF"
                    />

                    <Text
                      style={
                        styles.verifyText
                      }
                    >
                      Verifying Account...
                    </Text>
                  </>
                ) : (
                  <>
                    <MaterialCommunityIcons
                      name="shield-search"
                      size={20}
                      color="#FFFFFF"
                    />

                    <Text
                      style={
                        styles.verifyText
                      }
                    >
                      Verify & Link Account
                    </Text>

                    <Ionicons
                      name="arrow-forward"
                      size={19}
                      color="#FFFFFF"
                    />
                  </>
                )}
              </TouchableOpacity>


              <Text
                style={
                  styles.consentText
                }
              >
                By continuing, you
                authorize SecureWealth
                Twin to verify and securely
                connect this bank account.
              </Text>
            </>
          )}


          {/* SUCCESS */}

          {verificationComplete && (
            <View
              style={
                styles.successContainer
              }
            >
              <View
                style={
                  styles.successOuter
                }
              >
                <View
                  style={
                    styles.successCircle
                  }
                >
                  <Ionicons
                    name="checkmark"
                    size={42}
                    color="#FFFFFF"
                  />
                </View>
              </View>

              <View
                style={
                  styles.successBadge
                }
              >
                <MaterialCommunityIcons
                  name="shield-check-outline"
                  size={15}
                  color="#16A34A"
                />

                <Text
                  style={
                    styles.successBadgeText
                  }
                >
                  TWIN SHIELD VERIFIED
                </Text>
              </View>

              <Text
                style={
                  styles.successTitle
                }
              >
                Account Verified
              </Text>

              <Text
                style={
                  styles.successSubtitle
                }
              >
                Your bank account has
                passed the SecureWealth
                Twin verification check.
              </Text>


              {/* LINKED ACCOUNT */}

              <View
                style={
                  styles.linkedAccountCard
                }
              >
                <View
                  style={[
                    styles.linkedBankIcon,
                    {
                      backgroundColor:
                        selectedBank
                          ?.background ??
                        "#EFF6FF",
                    },
                  ]}
                >
                  <MaterialCommunityIcons
                    name="bank-outline"
                    size={24}
                    color={
                      selectedBank
                        ?.color ??
                      "#2563EB"
                    }
                  />
                </View>

                <View
                  style={
                    styles.linkedAccountInfo
                  }
                >
                  <Text
                    style={
                      styles.linkedBankName
                    }
                  >
                    {selectedBank?.name ??
                      "Bank Account"}
                  </Text>

                  <Text
                    style={
                      styles.linkedAccountNumber
                    }
                  >
                    Savings Account ••••{" "}
                    {accountNumber.slice(
                      -4
                    )}
                  </Text>
                </View>

                <MaterialCommunityIcons
                  name="shield-check"
                  size={22}
                  color="#16A34A"
                />
              </View>


              {/* SECURITY CHECKS */}

              <View
                style={
                  styles.checksCard
                }
              >
                <SecurityCheck
                  title="Account verified"
                  subtitle="Bank account details matched"
                />

                <View
                  style={
                    styles.checkDivider
                  }
                />

                <SecurityCheck
                  title="IFSC validated"
                  subtitle={ifsc}
                />

                <View
                  style={
                    styles.checkDivider
                  }
                />

                <SecurityCheck
                  title="Twin Shield enabled"
                  subtitle="Continuous fraud monitoring active"
                />
              </View>


              <TouchableOpacity
                activeOpacity={0.82}
                style={
                  styles.finishButton
                }
                onPress={
                  handleFinish
                }
              >
                <Text
                  style={
                    styles.finishButtonText
                  }
                >
                  Continue to Accounts
                </Text>

                <Ionicons
                  name="arrow-forward"
                  size={19}
                  color="#FFFFFF"
                />
              </TouchableOpacity>
            </View>
          )}


          <View
            style={
              styles.bottomSpace
            }
          />
        </ScrollView>


        {/* BANK SELECTOR */}

        <Modal
          transparent
          visible={
            bankModalVisible
          }
          animationType="fade"
          onRequestClose={() =>
            setBankModalVisible(
              false
            )
          }
        >
          <TouchableOpacity
            activeOpacity={1}
            style={
              styles.modalOverlay
            }
            onPress={() =>
              setBankModalVisible(
                false
              )
            }
          >
            <TouchableOpacity
              activeOpacity={1}
              style={
                styles.modalCard
              }
              onPress={() => {}}
            >
              <View
                style={
                  styles.modalHandle
                }
              />

              <Text
                style={
                  styles.modalTitle
                }
              >
                Select Your Bank
              </Text>

              <Text
                style={
                  styles.modalSubtitle
                }
              >
                Choose the bank account
                you want to connect
              </Text>


              {banks.map((bank) => {
                const selected =
                  selectedBank?.id ===
                  bank.id;

                return (
                  <TouchableOpacity
                    key={bank.id}
                    activeOpacity={0.7}
                    style={[
                      styles.bankOption,

                      selected &&
                        styles.bankOptionSelected,
                    ]}
                    onPress={() => {
                      setSelectedBank(
                        bank
                      );

                      setBankModalVisible(
                        false
                      );
                    }}
                  >
                    <View
                      style={[
                        styles.modalBankIcon,
                        {
                          backgroundColor:
                            bank.background,
                        },
                      ]}
                    >
                      <MaterialCommunityIcons
                        name="bank-outline"
                        size={21}
                        color={
                          bank.color
                        }
                      />
                    </View>

                    <View
                      style={
                        styles.modalBankContent
                      }
                    >
                      <Text
                        style={
                          styles.modalBankName
                        }
                      >
                        {bank.name}
                      </Text>

                      <Text
                        style={
                          styles.modalBankCode
                        }
                      >
                        {bank.shortName}
                      </Text>
                    </View>

                    {selected ? (
                      <View
                        style={
                          styles.selectedCircle
                        }
                      >
                        <Ionicons
                          name="checkmark"
                          size={13}
                          color="#FFFFFF"
                        />
                      </View>
                    ) : (
                      <Ionicons
                        name="chevron-forward"
                        size={18}
                        color="#CBD5E1"
                      />
                    )}
                  </TouchableOpacity>
                );
              })}


              <TouchableOpacity
                activeOpacity={0.7}
                style={
                  styles.cancelButton
                }
                onPress={() =>
                  setBankModalVisible(
                    false
                  )
                }
              >
                <Text
                  style={
                    styles.cancelText
                  }
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      </SafeAreaView>
    </>
  );
}


/* ---------------------------------------------
   PROGRESS STEP
---------------------------------------------- */

type ProgressStepProps = {
  number: string;
  title: string;
  active?: boolean;
};

function ProgressStep({
  number,
  title,
  active = false,
}: ProgressStepProps) {
  return (
    <View
      style={
        styles.progressStep
      }
    >
      <View
        style={[
          styles.progressCircle,

          active &&
            styles.progressCircleActive,
        ]}
      >
        <Text
          style={[
            styles.progressNumber,

            active &&
              styles.progressNumberActive,
          ]}
        >
          {number}
        </Text>
      </View>

      <Text
        style={[
          styles.progressTitle,

          active &&
            styles.progressTitleActive,
        ]}
      >
        {title}
      </Text>
    </View>
  );
}


/* ---------------------------------------------
   SECTION HEADER
---------------------------------------------- */

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <View
      style={
        styles.sectionHeader
      }
    >
      <Text
        style={styles.sectionTitle}
      >
        {title}
      </Text>

      <Text
        style={
          styles.sectionSubtitle
        }
      >
        {subtitle}
      </Text>
    </View>
  );
}


/* ---------------------------------------------
   INPUT
---------------------------------------------- */

type InputFieldProps = {
  label: string;

  icon: React.ComponentProps<
    typeof Ionicons
  >["name"];

  value: string;

  placeholder: string;

  keyboardType?:
    | "default"
    | "number-pad"
    | "phone-pad";

  autoCapitalize?:
    | "none"
    | "sentences"
    | "words"
    | "characters";

  success?: boolean;

  error?: boolean;

  onChangeText: (
    value: string
  ) => void;
};


function InputField({
  label,
  icon,
  value,
  placeholder,
  keyboardType = "default",
  autoCapitalize = "none",
  success = false,
  error = false,
  onChangeText,
}: InputFieldProps) {
  return (
    <View
      style={
        styles.inputGroup
      }
    >
      <Text
        style={styles.inputLabel}
      >
        {label}
      </Text>

      <View
        style={[
          styles.inputContainer,

          success &&
            styles.inputSuccess,

          error &&
            styles.inputError,
        ]}
      >
        <Ionicons
          name={icon}
          size={19}
          color={
            error
              ? "#DC2626"
              : success
              ? "#16A34A"
              : "#64748B"
          }
        />

        <TextInput
          value={value}
          onChangeText={
            onChangeText
          }
          placeholder={
            placeholder
          }
          placeholderTextColor="#94A3B8"
          keyboardType={
            keyboardType
          }
          autoCapitalize={
            autoCapitalize
          }
          style={
            styles.input
          }
        />

        {success && (
          <Ionicons
            name="checkmark-circle"
            size={19}
            color="#16A34A"
          />
        )}
      </View>
    </View>
  );
}


/* ---------------------------------------------
   SECURITY CHECK
---------------------------------------------- */

function SecurityCheck({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <View
      style={styles.checkRow}
    >
      <View
        style={
          styles.checkIcon
        }
      >
        <Ionicons
          name="checkmark"
          size={14}
          color="#FFFFFF"
        />
      </View>

      <View
        style={
          styles.checkContent
        }
      >
        <Text
          style={styles.checkTitle}
        >
          {title}
        </Text>

        <Text
          style={
            styles.checkSubtitle
          }
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
}


/* ---------------------------------------------
   STYLES
---------------------------------------------- */

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  header: {
    height: 72,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: "center",
    justifyContent: "center",
  },

  headerCenter: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
  },

  headerTitle: {
    color: "#0F172A",
    fontSize: 17,
    fontWeight: "800",
  },

  headerSubtitle: {
    color: "#94A3B8",
    fontSize: 9,
    marginTop: 3,
  },

  securityHeader: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#F0FDF4",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#DCFCE7",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 5,
  },

  progressContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 28,
  },

  progressStep: {
    width: 62,
    alignItems: "center",
  },

  progressCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#E2E8F0",
    alignItems: "center",
    justifyContent: "center",
  },

  progressCircleActive: {
    backgroundColor: "#2563EB",
  },

  progressNumber: {
    fontSize: 10,
    fontWeight: "800",
    color: "#64748B",
  },

  progressNumberActive: {
    color: "#FFFFFF",
  },

  progressTitle: {
    color: "#94A3B8",
    fontSize: 8,
    fontWeight: "700",
    marginTop: 6,
  },

  progressTitleActive: {
    color: "#2563EB",
  },

  progressLine: {
    width: 44,
    height: 2,
    backgroundColor: "#E2E8F0",
    marginTop: 14,
  },

  introCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 21,
    padding: 17,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 27,
  },

  introIcon: {
    width: 49,
    height: 49,
    borderRadius: 15,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
  },

  introContent: {
    flex: 1,
    marginLeft: 13,
  },

  introTitle: {
    color: "#0F172A",
    fontSize: 14,
    fontWeight: "800",
  },

  introText: {
    color: "#64748B",
    fontSize: 9,
    lineHeight: 14,
    marginTop: 5,
  },

  sectionHeader: {
    marginBottom: 12,
    marginTop: 2,
  },

  sectionTitle: {
    color: "#0F172A",
    fontSize: 18,
    fontWeight: "800",
  },

  sectionSubtitle: {
    color: "#94A3B8",
    fontSize: 10,
    marginTop: 4,
  },

  bankSelector: {
    minHeight: 72,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 26,
  },

  selectedBankIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyBankIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
  },

  bankSelectorContent: {
    flex: 1,
    marginLeft: 12,
  },

  bankSelectorLabel: {
    color: "#94A3B8",
    fontSize: 7,
    fontWeight: "700",
    letterSpacing: 0.7,
  },

  selectedBankName: {
    color: "#0F172A",
    fontSize: 12,
    fontWeight: "800",
    marginTop: 4,
  },

  selectBankTitle: {
    color: "#0F172A",
    fontSize: 12,
    fontWeight: "700",
  },

  selectBankSubtitle: {
    color: "#94A3B8",
    fontSize: 9,
    marginTop: 4,
  },

  inputGroup: {
    marginBottom: 15,
  },

  inputLabel: {
    color: "#64748B",
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 0.8,
    marginBottom: 7,
    marginLeft: 2,
  },

  inputContainer: {
    minHeight: 58,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  inputSuccess: {
    borderColor: "#86EFAC",
    backgroundColor: "#F0FDF4",
  },

  inputError: {
    borderColor: "#FCA5A5",
    backgroundColor: "#FEF2F2",
  },

  input: {
    flex: 1,
    color: "#0F172A",
    fontSize: 13,
    fontWeight: "600",
    marginLeft: 11,
  },

  errorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -7,
    marginBottom: 13,
    marginLeft: 3,
  },

  errorText: {
    color: "#DC2626",
    fontSize: 9,
    marginLeft: 5,
  },

  securityCard: {
    backgroundColor: "#F0FDF4",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#DCFCE7",
    padding: 15,
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 18,
  },

  securityIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
  },

  securityContent: {
    flex: 1,
    marginLeft: 12,
  },

  securityTitle: {
    color: "#14532D",
    fontSize: 12,
    fontWeight: "800",
  },

  securityText: {
    color: "#64748B",
    fontSize: 9,
    lineHeight: 14,
    marginTop: 5,
  },

  verifyButton: {
    minHeight: 58,
    borderRadius: 17,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
  },

  verifyButtonDisabled: {
    backgroundColor: "#94A3B8",
  },

  verifyText: {
    flex: 1,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
    marginHorizontal: 10,
  },

  consentText: {
    color: "#94A3B8",
    fontSize: 8,
    lineHeight: 13,
    textAlign: "center",
    paddingHorizontal: 15,
    marginTop: 12,
  },

  successContainer: {
    alignItems: "center",
    paddingTop: 20,
  },

  successOuter: {
    width: 102,
    height: 102,
    borderRadius: 51,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
  },

  successCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "#16A34A",
    alignItems: "center",
    justifyContent: "center",
  },

  successBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 9,
    paddingHorizontal: 9,
    paddingVertical: 6,
    marginTop: 19,
  },

  successBadgeText: {
    color: "#16A34A",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 0.6,
    marginLeft: 5,
  },

  successTitle: {
    color: "#0F172A",
    fontSize: 25,
    fontWeight: "800",
    marginTop: 16,
  },

  successSubtitle: {
    color: "#64748B",
    fontSize: 11,
    lineHeight: 17,
    textAlign: "center",
    maxWidth: 290,
    marginTop: 7,
  },

  linkedAccountCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 26,
  },

  linkedBankIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  linkedAccountInfo: {
    flex: 1,
    marginLeft: 12,
  },

  linkedBankName: {
    color: "#0F172A",
    fontSize: 13,
    fontWeight: "800",
  },

  linkedAccountNumber: {
    color: "#94A3B8",
    fontSize: 9,
    marginTop: 5,
  },

  checksCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 16,
    marginTop: 15,
  },

  checkRow: {
    minHeight: 67,
    flexDirection: "row",
    alignItems: "center",
  },

  checkIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#16A34A",
    alignItems: "center",
    justifyContent: "center",
  },

  checkContent: {
    flex: 1,
    marginLeft: 11,
  },

  checkTitle: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "700",
  },

  checkSubtitle: {
    color: "#94A3B8",
    fontSize: 8,
    marginTop: 4,
  },

  checkDivider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginLeft: 39,
  },

  finishButton: {
    width: "100%",
    minHeight: 58,
    borderRadius: 17,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },

  finishButtonText: {
    flex: 1,
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "800",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor:
      "rgba(15,23,42,0.42)",
    justifyContent: "flex-end",
  },

  modalCard: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 30,
  },

  modalHandle: {
    width: 42,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#CBD5E1",
    alignSelf: "center",
    marginBottom: 20,
  },

  modalTitle: {
    color: "#0F172A",
    fontSize: 20,
    fontWeight: "800",
  },

  modalSubtitle: {
    color: "#94A3B8",
    fontSize: 10,
    marginTop: 5,
    marginBottom: 18,
  },

  bankOption: {
    minHeight: 63,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  bankOptionSelected: {
    backgroundColor: "#EFF6FF",
    borderColor: "#BFDBFE",
  },

  modalBankIcon: {
    width: 41,
    height: 41,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },

  modalBankContent: {
    flex: 1,
    marginLeft: 11,
  },

  modalBankName: {
    color: "#0F172A",
    fontSize: 11,
    fontWeight: "700",
  },

  modalBankCode: {
    color: "#94A3B8",
    fontSize: 8,
    marginTop: 3,
  },

  selectedCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
  },

  cancelButton: {
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },

  cancelText: {
    color: "#64748B",
    fontSize: 11,
    fontWeight: "700",
  },

  bottomSpace: {
    height: 90,
  },
});