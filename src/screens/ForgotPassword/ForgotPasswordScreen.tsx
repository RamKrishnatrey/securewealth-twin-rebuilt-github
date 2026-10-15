import { View, Text } from "react-native";

export default function ForgotPasswordScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0B1220",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        Forgot Password
      </Text>
    </View>
  );
}