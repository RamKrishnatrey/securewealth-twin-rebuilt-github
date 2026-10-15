import { useEffect, useState } from "react";
import { router } from "expo-router";

import {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
  withSpring,
  Easing,
} from "react-native-reanimated";

const messages = [
  "Initializing SecureWealth...",
  "Securing Banking Environment...",
  "Loading AI Engine...",
  "Preparing Dashboard...",
];

export default function useSplash() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState(messages[0]);

  /* --------------------------
     Shared Values
  -------------------------- */

  const rotation = useSharedValue(0);

  const floatY = useSharedValue(0);

  const radarScale = useSharedValue(1);

  const radarOpacity = useSharedValue(0.35);

  const contentOpacity = useSharedValue(0);

  /* --------------------------
     Screen Fade
  -------------------------- */

  useEffect(() => {
    contentOpacity.value = withTiming(1, {
      duration: 800,
      easing: Easing.out(Easing.ease),
    });
  }, []);

  /* --------------------------
     Floating Logo
  -------------------------- */

  useEffect(() => {
    floatY.value = withRepeat(
      withSequence(
        withTiming(-8, {
          duration: 1800,
          easing: Easing.inOut(Easing.ease),
        }),
        withTiming(8, {
          duration: 1800,
          easing: Easing.inOut(Easing.ease),
        })
      ),
      -1,
      true
    );
  }, []);

  /* --------------------------
     Orbit Rotation
  -------------------------- */

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 14000,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, []);

  /* --------------------------
     Radar Pulse
  -------------------------- */

  useEffect(() => {
    radarScale.value = withRepeat(
      withSequence(
        withTiming(1.12, {
          duration: 1400,
        }),
        withTiming(1, {
          duration: 1400,
        })
      ),
      -1,
      false
    );

    radarOpacity.value = withRepeat(
      withSequence(
        withTiming(0.08, {
          duration: 1400,
        }),
        withTiming(0.35, {
          duration: 1400,
        })
      ),
      -1,
      false
    );
  }, []);

  /* --------------------------
     Progress
  -------------------------- */

  useEffect(() => {
    let value = 0;

    const timer = setInterval(() => {
      value += 0.02;

      if (value > 1) {
        value = 1;
      }

      setProgress(value);

      if (value < 0.25) {
        setLoadingText(messages[0]);
      } else if (value < 0.5) {
        setLoadingText(messages[1]);
      } else if (value < 0.8) {
        setLoadingText(messages[2]);
      } else {
        setLoadingText(messages[3]);
      }

      if (value >= 1) {
        clearInterval(timer);

        setTimeout(() => {
          router.replace("/(auth)/login");
        }, 700);
      }
    }, 70);

    return () => clearInterval(timer);
  }, []);

  /* --------------------------
     Animated Styles
  -------------------------- */

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: floatY.value,
      },
    ],
  }));

  const orbitAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${rotation.value}deg`,
      },
    ],
  }));

  const radarAnimatedStyle = useAnimatedStyle(() => ({
    opacity: radarOpacity.value,
    transform: [
      {
        scale: radarScale.value,
      },
    ],
  }));

  const contentAnimatedStyle = useAnimatedStyle(() => ({
    opacity: contentOpacity.value,
    transform: [
      {
        translateY: withSpring(0),
      },
    ],
  }));

  return {
    progress,
    loadingText,

    logoAnimatedStyle,
    orbitAnimatedStyle,
    radarAnimatedStyle,
    contentAnimatedStyle,
  };
}