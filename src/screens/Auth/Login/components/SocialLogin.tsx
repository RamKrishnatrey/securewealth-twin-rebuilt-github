
import React from "react";
import {View,TouchableOpacity,Text} from "react-native";
const B=({title}:{title:string})=><TouchableOpacity style={{height:54,borderWidth:1,borderColor:"#E2E8F0",borderRadius:16,justifyContent:"center",alignItems:"center",marginTop:12}}><Text style={{fontWeight:"700"}}>{title}</Text></TouchableOpacity>;
export default function SocialLogin(){return <View style={{marginTop:24}}><B title="Continue with Google"/><B title="Continue with Microsoft"/></View>}
