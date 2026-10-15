import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import Animated,{useSharedValue,useAnimatedStyle,withRepeat,withSequence,withTiming,Easing} from "react-native-reanimated";
import styles from "../Login.styles";
import HeroImage from "@/assets/images/login-hero.png";

export default function Hero() {
  const y=useSharedValue(0);

  useEffect(()=>{
    y.value=withRepeat(
      withSequence(
        withTiming(-8,{duration:1800,easing:Easing.inOut(Easing.ease)}),
        withTiming(8,{duration:1800,easing:Easing.inOut(Easing.ease)})
      ),
      -1,
      true
    );
  },[]);

  const anim=useAnimatedStyle(()=>({transform:[{translateY:y.value}]}));

  return (
    <View>
      <Animated.View style={anim}>
        <Image source={HeroImage} style={styles.heroImage}/>
      </Animated.View>

      <Text style={styles.heroTitle}>Intelligent Wealth Growth</Text>

      <Text style={styles.heroSubtitle}>
        Secure your finances with AI-powered fraud protection,
        smart insights and seamless banking.
      </Text>
    </View>
  );
}
