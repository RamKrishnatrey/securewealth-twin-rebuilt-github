
import React,{useState} from "react";
import { View, Text, TextInput } from "react-native";

export default function MobileInput(){
 const [mobile,setMobile]=useState("");
 return(
  <View>
    <Text style={{fontWeight:"700",marginBottom:8}}>Mobile Number</Text>
    <View style={{
      borderWidth:1,
      borderColor:"#CBD5E1",
      borderRadius:16,
      flexDirection:"row",
      alignItems:"center",
      paddingHorizontal:16,
      height:56
    }}>
      <Text style={{fontSize:16}}>🇮🇳 +91</Text>
      <TextInput
        value={mobile}
        onChangeText={setMobile}
        keyboardType="phone-pad"
        placeholder="Enter mobile number"
        style={{flex:1,marginLeft:12,fontSize:16}}
        maxLength={10}
      />
    </View>
  </View>
 );
}
