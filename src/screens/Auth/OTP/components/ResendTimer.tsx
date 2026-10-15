import React from "react";
import {Text} from "react-native";

type ResendTimerProps = {
  secondsRemaining: number;
  onResend: () => void;
};

export default function ResendTimer({secondsRemaining, onResend}: ResendTimerProps) {
  return (
    <Text
      style={{marginTop: 24, textAlign: "center"}}
      onPress={onResend}
    >
      {secondsRemaining > 0 ? (
        `Resend OTP in ${secondsRemaining}s`
      ) : (
        "You can resend OTP now."
      )}
    </Text>
  );
}