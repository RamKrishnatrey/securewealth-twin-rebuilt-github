
import React from "react";
import { View } from "react-native";
import MobileInput from "./MobileInput";
import ContinueButton from "./ContinueButton";

export default function LoginCard(){
  return(
    <View style={{
      marginTop:28,
      backgroundColor:"#FFF",
      borderRadius:24,
      padding:20,
      shadowColor:"#000",
      shadowOpacity:0.08,
      shadowRadius:18,
      elevation:6
    }}>
      <MobileInput />
      <ContinueButton />
      
    </View>
  );
}
