import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { BeneficiaryProvider } from "@/context/BeneficiaryContext";
import { WebPushAutoSync } from "@/components/WebPushAutoSync";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>

        <BeneficiaryProvider>

          <WebPushAutoSync />

          <StatusBar style="dark" />

          <Stack
            screenOptions={{
              headerShown: false,
              animation: "slide_from_right",
              contentStyle: {
                backgroundColor: "#FFFFFF",
              },
            }}
          />

        </BeneficiaryProvider>

      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
