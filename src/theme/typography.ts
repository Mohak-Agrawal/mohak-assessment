/**
 * Typography System
 * Consistent font sizes and weights
 */

import { StyleSheet } from "react-native";

export const typography = {
  // Font sizes
  sizes: {
    xs: 10,
    sm: 12,
    base: 14,
    lg: 16,
    xl: 18,
    "2xl": 20,
    "3xl": 24,
    "4xl": 28,
    "5xl": 32,
    "6xl": 36,
  },

  // Font weights
  weights: {
    light: "200" as const,
    normal: "300" as const,
    medium: "400" as const,
    semibold: "500" as const,
    bold: "600" as const,
    extrabold: "700" as const,
  },

  // Line heights (in multiplier) - Increased values
  lineHeights: {
    tight: 1.3, // was 1.2
    normal: 1.6, // was 1.5
    relaxed: 1.75, // was 1.625
    loose: 2.2, // was 2
  },
} as const;

// Text styles shortcuts
export const textStyles = StyleSheet.create({
  // Headings
  h1: {
    fontFamily: "Inter",
    fontSize: typography.sizes["5xl"],
    fontWeight: typography.weights.bold,
    lineHeight: typography.sizes["5xl"] * typography.lineHeights.tight,
    letterSpacing: 0.4,
  },
  h2: {
    fontFamily: "Inter",
    fontSize: typography.sizes["4xl"],
    fontWeight: typography.weights.bold,
    lineHeight: typography.sizes["4xl"] * typography.lineHeights.tight,
    letterSpacing: 0.4,
  },
  h3: {
    fontFamily: "Inter",
    fontSize: typography.sizes["3xl"],
    fontWeight: typography.weights.semibold,
    lineHeight: typography.sizes["3xl"] * typography.lineHeights.tight,
    letterSpacing: 0.3,
  },
  h4: {
    fontFamily: "Inter",
    fontSize: typography.sizes["2xl"],
    fontWeight: typography.weights.semibold,
    lineHeight: typography.sizes["2xl"] * typography.lineHeights.normal,
    letterSpacing: 0.3,
  },

  // Body text
  body: {
    fontFamily: "Inter",
    fontSize: typography.sizes.base,
    fontWeight: typography.weights.normal,
    lineHeight: typography.sizes.base * typography.lineHeights.normal,
    letterSpacing: 0.4,
  },
  bodyMedium: {
    fontFamily: "Inter",
    fontSize: typography.sizes.base,
    fontWeight: typography.weights.medium,
    lineHeight: typography.sizes.base * typography.lineHeights.normal,
    letterSpacing: 0.4,
  },
  bodySmall: {
    fontFamily: "Inter",
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.normal,
    lineHeight: typography.sizes.sm * typography.lineHeights.normal,
    letterSpacing: 0.15,
  },
  bodySmallMedium: {
    fontFamily: "Inter",
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    lineHeight: typography.sizes.sm * typography.lineHeights.normal,
    letterSpacing: 0.15,
  },

  // Caption
  caption: {
    fontFamily: "Inter",
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.normal,
    lineHeight: typography.sizes.xs * typography.lineHeights.normal,
    letterSpacing: 0.1,
  },
  captionMedium: {
    fontFamily: "Inter",
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.medium,
    lineHeight: typography.sizes.xs * typography.lineHeights.normal,
    letterSpacing: 0.1,
  },

  // Label
  label: {
    fontFamily: "Inter",
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.semibold,
    lineHeight: typography.sizes.sm * typography.lineHeights.tight,
    letterSpacing: 0.4,
  },
  labelSmall: {
    fontFamily: "Inter",
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.semibold,
    lineHeight: typography.sizes.xs * typography.lineHeights.tight,
    letterSpacing: 0.15,
  },
});

export type Typography = typeof typography;
