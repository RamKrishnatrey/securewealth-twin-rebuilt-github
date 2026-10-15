import React from 'react';
import {SafeAreaView,View,Text,TouchableOpacity} from 'react-native';
import {router} from 'expo-router';
export default function BiometricAuthScreen(){
return <SafeAreaView style={{flex:1,backgroundColor:'#F8FAFC',justifyContent:'center',padding:24}}>
<View style={{alignItems:'center'}}>
<Text style={{fontSize:90}}>👆</Text>
<Text style={{fontSize:30,fontWeight:'800',marginTop:20}}>Authenticate</Text>
<Text style={{marginTop:12,textAlign:'center',color:'#64748B'}}>Verify using Fingerprint or Face ID.</Text>
<TouchableOpacity onPress={()=>router.replace('/(tabs)/dashboard')} style={{marginTop:30,height:56,alignSelf:'stretch',backgroundColor:'#2563EB',borderRadius:16,justifyContent:'center',alignItems:'center'}}>
<Text style={{color:'#fff',fontWeight:'800'}}>Scan Fingerprint</Text></TouchableOpacity>
<TouchableOpacity onPress={()=>router.replace('/(auth)/login')}><Text style={{marginTop:18,color:'#64748B'}}>Use Mobile Number Instead</Text></TouchableOpacity>
</View></SafeAreaView>}