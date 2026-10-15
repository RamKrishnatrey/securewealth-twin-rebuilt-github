import React, { useMemo, useState } from "react";

import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { router } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./helpSupportStyles";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    id: 1,
    question: "How does Twin Shield protect my account?",
    answer:
      "Twin Shield monitors transaction activity and helps identify suspicious financial behaviour and potential fraud risks.",
  },
  {
    id: 2,
    question: "How do I review my transactions?",
    answer:
      "Open Activity to search, filter and review your transaction history and transaction details.",
  },
  {
    id: 3,
    question: "What is Twin AI?",
    answer:
      "Twin AI provides personalized financial insights based on your financial activity and goals.",
  },
  {
    id: 4,
    question: "How do I update my personal information?",
    answer:
      "Open Profile and select Edit Profile or Personal Information to update your account details.",
  },
  {
    id: 5,
    question: "How can I change my security settings?",
    answer:
      "Open the Security Center from Profile or Settings to review protection controls and trusted devices.",
  },
];

export default function HelpSupportScreen() {
  const [search, setSearch] = useState("");
  const [expandedFAQ, setExpandedFAQ] =
    useState<number | null>(null);

  const filteredFAQs = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return faqs;
    }

    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    );
  }, [search]);

  const toggleFAQ = (id: number) => {
    setExpandedFAQ((current) =>
      current === id ? null : id
    );
  };

  return (
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

        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>
            Help & Support
          </Text>

          <Text style={styles.headerSubtitle}>
            We're here when you need us
          </Text>
        </View>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
      >
        {/* HERO */}

        <View style={styles.heroCard}>
          <View style={styles.heroIcon}>
            <MaterialCommunityIcons
              name="lifebuoy"
              size={27}
              color="#2563EB"
            />
          </View>

          <Text style={styles.heroTitle}>
            How can we help?
          </Text>

          <Text style={styles.heroSubtitle}>
            Find answers or get assistance with your
            SecureWealth Twin account.
          </Text>

          <View style={styles.searchContainer}>
            <Ionicons
              name="search-outline"
              size={19}
              color="#94A3B8"
            />

            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Search help topics"
              placeholderTextColor="#94A3B8"
              style={styles.searchInput}
            />

            {search.length > 0 && (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setSearch("")}
              >
                <Ionicons
                  name="close-circle"
                  size={18}
                  color="#CBD5E1"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* QUICK HELP */}

        <Text style={styles.sectionLabel}>
          QUICK HELP
        </Text>

        <View style={styles.quickGrid}>
          <QuickHelpCard
            icon="swap-horizontal"
            title="Transactions"
            subtitle="Activity & payments"
            color="#2563EB"
            background="#EFF6FF"
            onPress={() =>
              router.push("/transactions" as any)
            }
          />

          <QuickHelpCard
            icon="shield-alert-outline"
            title="Security"
            subtitle="Fraud & protection"
            color="#16A34A"
            background="#F0FDF4"
            onPress={() =>
              router.push("/security-center" as any)
            }
          />

          <QuickHelpCard
            icon="robot-outline"
            title="Twin AI"
            subtitle="AI assistance"
            color="#7C3AED"
            background="#F5F3FF"
            onPress={() =>
              router.push("/chat" as any)
            }
          />

          <QuickHelpCard
            icon="account-outline"
            title="Account"
            subtitle="Profile & settings"
            color="#D97706"
            background="#FFFBEB"
            onPress={() =>
              router.push("/(tabs)/profile" as any)
            }
          />
        </View>

        {/* FAQ */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Frequently Asked Questions
          </Text>

          <Text style={styles.sectionSubtitle}>
            Answers to common questions
          </Text>
        </View>

        {filteredFAQs.length > 0 ? (
          <View style={styles.faqCard}>
            {filteredFAQs.map((faq, index) => {
              const expanded =
                expandedFAQ === faq.id;

              return (
                <View key={faq.id}>
                  <TouchableOpacity
                    activeOpacity={0.72}
                    style={styles.faqQuestion}
                    onPress={() =>
                      toggleFAQ(faq.id)
                    }
                  >
                    <View
                      style={
                        styles.faqQuestionContent
                      }
                    >
                      <Text
                        style={
                          styles.faqQuestionText
                        }
                      >
                        {faq.question}
                      </Text>
                    </View>

                    <Ionicons
                      name={
                        expanded
                          ? "chevron-up"
                          : "chevron-down"
                      }
                      size={17}
                      color="#64748B"
                    />
                  </TouchableOpacity>

                  {expanded && (
                    <View style={styles.faqAnswer}>
                      <Text
                        style={
                          styles.faqAnswerText
                        }
                      >
                        {faq.answer}
                      </Text>
                    </View>
                  )}

                  {index <
                    filteredFAQs.length - 1 && (
                    <View style={styles.divider} />
                  )}
                </View>
              );
            })}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <View style={styles.emptyIcon}>
              <Ionicons
                name="search-outline"
                size={23}
                color="#64748B"
              />
            </View>

            <Text style={styles.emptyTitle}>
              No help topics found
            </Text>

            <Text style={styles.emptyText}>
              Try searching with a different keyword.
            </Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setSearch("")}
            >
              <Text style={styles.clearSearch}>
                Clear Search
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* CONTACT SUPPORT */}

        <Text style={styles.sectionLabel}>
          NEED MORE HELP?
        </Text>

        <View style={styles.contactCard}>
          <View style={styles.contactHeader}>
            <View style={styles.supportIcon}>
              <MaterialCommunityIcons
                name="headset"
                size={23}
                color="#2563EB"
              />
            </View>

            <View style={styles.contactContent}>
              <Text style={styles.contactTitle}>
                Contact Support
              </Text>

              <Text style={styles.contactSubtitle}>
                Our support team is ready to help
              </Text>
            </View>
          </View>

          <View style={styles.contactActions}>
            <TouchableOpacity
              activeOpacity={0.78}
              style={styles.primarySupportButton}
              onPress={() =>
                Alert.alert(
                  "Support Chat",
                  "Live support chat will be connected during final service integration."
                )
              }
            >
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={18}
                color="#FFFFFF"
              />

              <Text
                style={styles.primarySupportText}
              >
                Chat with Support
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.78}
              style={styles.secondarySupportButton}
              onPress={() =>
                Alert.alert(
                  "Email Support",
                  "Support email integration will be connected during final service integration."
                )
              }
            >
              <Ionicons
                name="mail-outline"
                size={18}
                color="#2563EB"
              />

              <Text
                style={styles.secondarySupportText}
              >
                Email
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* FRAUD HELP */}

        <TouchableOpacity
          activeOpacity={0.78}
          style={styles.securityCard}
          onPress={() =>
            router.push("/security-center" as any)
          }
        >
          <View style={styles.securityIcon}>
            <MaterialCommunityIcons
              name="shield-alert-outline"
              size={22}
              color="#DC2626"
            />
          </View>

          <View style={styles.securityContent}>
            <Text style={styles.securityTitle}>
              Concerned about fraud?
            </Text>

            <Text style={styles.securityText}>
              Review your account protection
              immediately with Twin Shield.
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={17}
            color="#DC2626"
          />
        </TouchableOpacity>

        <View style={styles.footer}>
          <MaterialCommunityIcons
            name="shield-check-outline"
            size={17}
            color="#16A34A"
          />

          <Text style={styles.footerText}>
            Your financial security is our priority
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type QuickHelpCardProps = {
  icon: React.ComponentProps<
    typeof MaterialCommunityIcons
  >["name"];

  title: string;
  subtitle: string;
  color: string;
  background: string;
  onPress: () => void;
};

function QuickHelpCard({
  icon,
  title,
  subtitle,
  color,
  background,
  onPress,
}: QuickHelpCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={styles.quickCard}
      onPress={onPress}
    >
      <View
        style={[
          styles.quickIcon,
          { backgroundColor: background },
        ]}
      >
        <MaterialCommunityIcons
          name={icon}
          size={22}
          color={color}
        />
      </View>

      <Text style={styles.quickTitle}>
        {title}
      </Text>

      <Text style={styles.quickSubtitle}>
        {subtitle}
      </Text>

      <View style={styles.quickArrow}>
        <Ionicons
          name="arrow-forward"
          size={14}
          color={color}
        />
      </View>
    </TouchableOpacity>
  );
}