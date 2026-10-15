
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { router } from "expo-router";

export default function ContinueButton(){
 return(
   <TouchableOpacity
     onPress={()=>router.push("/(auth)/otp")}
     style={{
      backgroundColor:"#2563EB",
      marginTop:24,
      height:56,
      borderRadius:16,
      justifyContent:"center",
      alignItems:"center"
     }}>
      <Text style={{color:"#FFF",fontSize:18,fontWeight:"700"}}>
        Continue
      </Text>
   </TouchableOpacity>
 );
}
