import { Easing } from "react-native-reanimated";

/**
 * Splash Animation Durations (milliseconds)
 */
export const SplashDuration = {
  logoEntrance: 900,
  logoFloat: 2200,

  orbitRotation: 30000,

  radarRotation: 2500,
  radarPulse: 1200,

  progressFill: 2500,
  shimmer: 1200,

  backgroundGlow: 3500,
  particleFloat: 2200,

  screenNavigation: 3000,
} as const;

/**
 * Common Easing Functions
 */
export const SplashEasing = {
  linear: Easing.linear,

  easeInOut: Easing.inOut(Easing.ease),

  easeOut: Easing.out(Easing.cubic),

  easeIn: Easing.in(Easing.ease),
} as const;

/**
 * Shared Scale Values
 */
export const SplashScale = {
  logoInitial: 0.4,
  logoFinal: 1,

  glowMin: 1,
  glowMax: 1.12,

  pulseMin: 1,
  pulseMax: 1.12,
} as const;

/**
 * Rotation Angles
 */
export const SplashRotation = {
  logoLeft: -4,
  logoRight: 4,

  fullCircle: 360,
} as const;

/**
 * Orbit Radius
 */
export const OrbitRadius = {
  large: 85,
  medium: 70,
  small: 55,
  outer: 92,
} as const;

/**
 * Particle Sizes
 */
export const ParticleSize = {
  large: 10,
  medium: 8,
  small: 6,
} as const;

/**
 * Progress Bar
 */
export const ProgressConfig = {
  start: 0,
  end: 100,
  interval: 25,
} as const;