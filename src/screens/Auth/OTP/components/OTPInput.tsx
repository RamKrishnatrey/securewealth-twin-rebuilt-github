import React from "react";
import {View, TextInput} from "react-native";

type OTPInputProps = {
  value: string;
  onChange: (otp: string) => void;
};

export default function OTPInput({value, onChange}: OTPInputProps) {
  const handleChange = (text: string, index: number) => {
    // Update the OTP string by replacing the character at index
    let newValue = value.split('');
    if (index < newValue.length) {
      newValue[index] = text;
    } else {
      // If index is out of bounds, append
      newValue.push(text);
    }
    // Join and limit to 6 characters
    const otp = newValue.join('').slice(0, 6);
    onChange(otp);
  };

  return (
    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 30}}>
      {[1,2,3,4,5,6].map(i => (
        <TextInput
          key={i}
          maxLength={1}
          keyboardType="number-pad"
          style={{width: 48, height: 56, borderWidth: 1, borderColor: "#CBD5E1", borderRadius: 12, textAlign: "center", fontSize: 22}}
          value={value[i] ?? ''}
          onChangeText={(text) => handleChange(text, i-1)} // because i starts at 1, index is 0-based
        />
      ))}
    </View>
  );
}