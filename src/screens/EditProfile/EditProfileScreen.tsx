import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { router } from "expo-router";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import { styles } from "./editProfileStyles";

export default function EditProfileScreen() {
  const [fullName, setFullName] =
    useState("Shaurya Mishra");

  const [email, setEmail] =
    useState("shaurya.mishra@example.com");

  const [phone, setPhone] =
    useState("+91 98765 43210");

  const [city, setCity] =
    useState("New Delhi");

  const [saving, setSaving] =
    useState(false);

  const hasChanges =
    fullName !== "Shaurya Mishra" ||
    email !== "shaurya.mishra@example.com" ||
    phone !== "+91 98765 43210" ||
    city !== "Noida";

  const handleSave = () => {
    if (!fullName.trim()) {
      Alert.alert(
        "Name required",
        "Please enter your full name."
      );

      return;
    }

    if (
      !email.trim() ||
      !email.includes("@")
    ) {
      Alert.alert(
        "Invalid email",
        "Please enter a valid email address."
      );

      return;
    }

    if (!phone.trim()) {
      Alert.alert(
        "Phone required",
        "Please enter your mobile number."
      );

      return;
    }

    setSaving(true);

    /*
      Temporary frontend save.

      During backend integration this will
      call the profile update API.
    */

    setTimeout(() => {
      setSaving(false);

      Alert.alert(
        "Profile Updated",
        "Your profile information has been updated successfully.",
        [
          {
            text: "Done",
            onPress: () => router.back(),
          },
        ]
      );
    }, 500);
  };

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top"]}
    >
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : undefined
        }
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
              Edit Profile
            </Text>

            <Text style={styles.headerSubtitle}>
              Update your personal information
            </Text>
          </View>

          <View style={styles.headerSpacer} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={
            styles.scrollContent
          }
        >
          {/* AVATAR */}

          <View style={styles.avatarSection}>
            <View style={styles.avatarWrapper}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  SM
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.75}
                style={styles.cameraButton}
                onPress={() =>
                  Alert.alert(
                    "Profile Photo",
                    "Photo upload will be connected during device and backend integration."
                  )
                }
              >
                <Ionicons
                  name="camera"
                  size={16}
                  color="#FFFFFF"
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.avatarTitle}>
              Profile Photo
            </Text>

            <Text style={styles.avatarSubtitle}>
              Personalize your SecureWealth account
            </Text>
          </View>

          {/* PERSONAL INFORMATION */}

          <Text style={styles.sectionLabel}>
            PERSONAL INFORMATION
          </Text>

          <View style={styles.formCard}>
            <ProfileInput
              label="FULL NAME"
              value={fullName}
              onChangeText={setFullName}
              placeholder="Enter full name"
              icon="account-outline"
              autoCapitalize="words"
            />

            <View style={styles.divider} />

            <ProfileInput
              label="EMAIL ADDRESS"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter email"
              icon="email-outline"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <View style={styles.divider} />

            <ProfileInput
              label="MOBILE NUMBER"
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter mobile number"
              icon="phone-outline"
              keyboardType="phone-pad"
            />

            <View style={styles.divider} />

            <ProfileInput
              label="CITY"
              value={city}
              onChangeText={setCity}
              placeholder="Enter city"
              icon="map-marker-outline"
              autoCapitalize="words"
            />
          </View>

          {/* VERIFICATION */}

          <View style={styles.verificationCard}>
            <View
              style={styles.verificationIcon}
            >
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={23}
                color="#16A34A"
              />
            </View>

            <View
              style={styles.verificationContent}
            >
              <Text
                style={styles.verificationTitle}
              >
                Identity Verified
              </Text>

              <Text
                style={styles.verificationText}
              >
                Your account identity has been
                successfully verified.
              </Text>
            </View>

            <Ionicons
              name="checkmark-circle"
              size={21}
              color="#16A34A"
            />
          </View>

          {/* SECURITY NOTE */}

          <View style={styles.infoCard}>
            <Ionicons
              name="information-circle-outline"
              size={20}
              color="#2563EB"
            />

            <Text style={styles.infoText}>
              Changes to sensitive account
              information may require additional
              verification for your security.
            </Text>
          </View>

          {/* SAVE */}

          <TouchableOpacity
            activeOpacity={0.82}
            disabled={saving}
            style={[
              styles.saveButton,
              (!hasChanges || saving) &&
                styles.saveButtonMuted,
            ]}
            onPress={handleSave}
          >
            {saving ? (
              <Text
                style={styles.saveButtonText}
              >
                Saving...
              </Text>
            ) : (
              <>
                <Ionicons
                  name="checkmark-circle-outline"
                  size={19}
                  color="#FFFFFF"
                />

                <Text
                  style={styles.saveButtonText}
                >
                  Save Changes
                </Text>
              </>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.cancelButton}
            onPress={() => router.back()}
          >
            <Text style={styles.cancelText}>
              Cancel
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

/* =========================
   PROFILE INPUT
========================= */

type ProfileInputProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;

  icon: React.ComponentProps<
    typeof MaterialCommunityIcons
  >["name"];

  keyboardType?:
    | "default"
    | "email-address"
    | "phone-pad";

  autoCapitalize?:
    | "none"
    | "sentences"
    | "words"
    | "characters";
};

function ProfileInput({
  label,
  value,
  onChangeText,
  placeholder,
  icon,
  keyboardType = "default",
  autoCapitalize = "sentences",
}: ProfileInputProps) {
  return (
    <View style={styles.inputSection}>
      <Text style={styles.inputLabel}>
        {label}
      </Text>

      <View style={styles.inputRow}>
        <View style={styles.inputIcon}>
          <MaterialCommunityIcons
            name={icon}
            size={19}
            color="#64748B"
          />
        </View>

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#94A3B8"
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          style={styles.input}
        />
      </View>
    </View>
  );
}