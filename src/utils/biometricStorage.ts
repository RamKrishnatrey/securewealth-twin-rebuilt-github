import AsyncStorage from "@react-native-async-storage/async-storage";

const BIOMETRIC_ENABLED_KEY =
  "securewealth_biometric_enabled";

export async function setBiometricEnabled(
  enabled: boolean
) {
  await AsyncStorage.setItem(
    BIOMETRIC_ENABLED_KEY,
    enabled ? "true" : "false"
  );
}

export async function isBiometricEnabled() {
  const value =
    await AsyncStorage.getItem(
      BIOMETRIC_ENABLED_KEY
    );

  return value === "true";
}

export async function clearBiometricEnabled() {
  await AsyncStorage.removeItem(
    BIOMETRIC_ENABLED_KEY
  );
}