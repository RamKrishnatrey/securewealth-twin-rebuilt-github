import React, { useMemo, useState } from "react";

import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { router } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./beneficiariesStyles";

import {
  Beneficiary,
  useBeneficiaries,
} from "@/context/BeneficiaryContext";

export default function BeneficiariesScreen() {
  const {
    beneficiaries,
    selectBeneficiary,
  } = useBeneficiaries();

  const [searchQuery, setSearchQuery] =
    useState("");

  const filteredBeneficiaries = useMemo(() => {
    const query = searchQuery
      .trim()
      .toLowerCase();

    if (!query) {
      return beneficiaries;
    }

    return beneficiaries.filter(
      (beneficiary) =>
        beneficiary.name
          .toLowerCase()
          .includes(query) ||
        beneficiary.bank
          .toLowerCase()
          .includes(query) ||
        beneficiary.account
          .toLowerCase()
          .includes(query)
    );
  }, [searchQuery]);

  const handleSelectBeneficiary = (
  beneficiary: Beneficiary
) => {
  selectBeneficiary(beneficiary);

  router.push("/transfer" as any);
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
        {/* HEADER */}

        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
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
              Beneficiaries
            </Text>

            <Text style={styles.headerSubtitle}>
              Manage trusted recipients
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.addHeaderButton}
            onPress={() =>
              router.push(
                "/add-beneficiary" as any
              )
            }
          >
            <Ionicons
              name="add"
              size={22}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={
            styles.content
          }
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* HERO */}

          <View style={styles.heroCard}>
            <View style={styles.heroIcon}>
              <MaterialCommunityIcons
                name="account-group-outline"
                size={29}
                color="#2563EB"
              />
            </View>

            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>
                Trusted Beneficiaries
              </Text>

              <Text style={styles.heroText}>
                Manage people and accounts you
                frequently transfer money to.
              </Text>
            </View>

            <View style={styles.countBadge}>
              <Text style={styles.countValue}>
                {beneficiaries.length}
              </Text>

              <Text style={styles.countLabel}>
                SAVED
              </Text>
            </View>
          </View>

          {/* SECURITY */}

          <View style={styles.securityStrip}>
            <MaterialCommunityIcons
              name="shield-check-outline"
              size={18}
              color="#16A34A"
            />

            <Text style={styles.securityText}>
              Beneficiaries are protected by Twin
              Shield verification
            </Text>
          </View>

          {/* SEARCH */}

          <View style={styles.searchContainer}>
            <Ionicons
              name="search-outline"
              size={20}
              color="#64748B"
            />

            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search beneficiaries"
              placeholderTextColor="#94A3B8"
              style={styles.searchInput}
            />

            {searchQuery.length > 0 && (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  setSearchQuery("")
                }
              >
                <Ionicons
                  name="close-circle"
                  size={19}
                  color="#94A3B8"
                />
              </TouchableOpacity>
            )}
          </View>

          {/* SECTION HEADER */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Saved Beneficiaries
            </Text>

            <Text style={styles.sectionCount}>
              {filteredBeneficiaries.length}
            </Text>
          </View>

          {/* BENEFICIARIES */}

          {filteredBeneficiaries.map(
            (beneficiary) => (
              <TouchableOpacity
                key={beneficiary.id}
                activeOpacity={0.78}
                style={
                  styles.beneficiaryCard
                }
                onPress={() =>
                  handleSelectBeneficiary(
                    beneficiary
                  )
                }
              >
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>
                    {beneficiary.initials}
                  </Text>
                </View>

                <View
                  style={
                    styles.beneficiaryContent
                  }
                >
                  <View
                    style={styles.nameRow}
                  >
                    <Text
                      style={
                        styles.beneficiaryName
                      }
                    >
                      {beneficiary.name}
                    </Text>

                    <MaterialCommunityIcons
                      name="check-decagram"
                      size={15}
                      color="#16A34A"
                    />
                  </View>

                  <Text
                    style={
                      styles.beneficiaryBank
                    }
                  >
                    {beneficiary.bank}
                  </Text>

                  <Text
                    style={
                      styles.beneficiaryAccount
                    }
                  >
                    {beneficiary.account}
                  </Text>
                </View>

                <View
                  style={styles.cardActions}
                >
                  <View
                    style={
                      styles.trustedBadge
                    }
                  >
                    <Text
                      style={
                        styles.trustedText
                      }
                    >
                      TRUSTED
                    </Text>
                  </View>

                  <Ionicons
                    name="chevron-forward"
                    size={18}
                    color="#94A3B8"
                  />
                </View>
              </TouchableOpacity>
            )
          )}

          {/* EMPTY SEARCH */}

          {filteredBeneficiaries.length ===
            0 && (
            <View style={styles.emptyState}>
              <View style={styles.emptyIcon}>
                <MaterialCommunityIcons
                  name="account-search-outline"
                  size={31}
                  color="#64748B"
                />
              </View>

              <Text style={styles.emptyTitle}>
                No beneficiaries found
              </Text>

              <Text style={styles.emptyText}>
                Try another name, bank or account
                number.
              </Text>
            </View>
          )}

          {/* ADD NEW */}

          <TouchableOpacity
            activeOpacity={0.78}
            style={styles.addCard}
            onPress={() =>
              router.push(
                "/add-beneficiary" as any
              )
            }
          >
            <View style={styles.addIcon}>
              <Ionicons
                name="add"
                size={24}
                color="#2563EB"
              />
            </View>

            <View style={styles.addContent}>
              <Text style={styles.addTitle}>
                Add New Beneficiary
              </Text>

              <Text style={styles.addText}>
                Add another trusted recipient for
                faster transfers.
              </Text>
            </View>

            <Ionicons
              name="arrow-forward"
              size={19}
              color="#2563EB"
            />
          </TouchableOpacity>

          <View style={styles.footer}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={13}
              color="#64748B"
            />

            <Text style={styles.footerText}>
              Recipient information is encrypted
              and securely stored
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}