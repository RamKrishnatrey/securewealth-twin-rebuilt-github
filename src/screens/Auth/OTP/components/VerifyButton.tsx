import React from "react";
import {TouchableOpacity, Text} from "react-native";

type VerifyButtonProps = {
  onPress: () => void;
  isVerifying?: boolean;
  disabled?: boolean;
};

export default function VerifyButton({onPress, isVerifying = false, disabled = false}: VerifyButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 28,
        height: 56,
        borderRadius: 16,
        backgroundColor: disabled ? "#94A3B8" : "#2563EB",
        justifyContent: "center",
        alignItems: "center",
        opacity: isVerifying ? 0.7 : 1,
      }}
      disabled={disabled || isVerifying}
    >
      {isVerifying ? (
        <Text style={{color: "#FFF", fontWeight: "800", fontSize: 18}}>
          Verifying...
        </Text>
      ) : (
        <Text style={{color: "#FFF", fontWeight: "800", fontSize: 18}}>
          Verify OTP
        </Text>
      )}
    </TouchableOpacity>
  );
}