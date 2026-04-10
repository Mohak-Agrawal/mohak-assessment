/**
 * Color Palette
 * Dark-first design system with gold accents
 */

export const colors = {
  // Neutrals - Dark theme base
  black: "#000000",
  charcoal: "#0F0F0F",
  darkGray: "#1A1A1A",
  mediumGray: "#2A2A2A",
  lightGray: "#3A3A3A",
  gray: "#6B7280",
  border: "#151515",

  // Accents
  gold: "#FDB913",
  goldLight: "#FFD700",
  goldDark: "#DAA520",

  // Status - Semantic
  green: "#00D66A", // Profit/gain
  greenLight: "#34D399",
  red: "#EF4444", // Loss
  redLight: "#F87171",
  orange: "#F97316", // Warning
  blue: "#3B82F6", // Info

  // Text
  textPrimary: "#FFFFFF",
  textSecondary: "#D1D5DB",
  textTertiary: "#9CA3AF",
  textDisabled: "#6B7280",

  // Backgrounds
  bgPrimary: "#0E0E0E",
  bgSecondary: "#0A0A0B",
  bgTertiary: "#1A1A1A",
  bgSurface: "#2A2A2A",

  // Interactive
  buttonPrimary: "#FDB913",
  buttonPrimaryText: "#000000",
  buttonSecondary: "#3A3A3A",
  buttonSecondaryText: "#FFFFFF",
  buttonDisabled: "#6B7280",

  // Overlays
  overlay: "rgba(0, 0, 0, 0.5)",
  overlayDark: "rgba(0, 0, 0, 0.8)",
  overlayLight: "rgba(0, 0, 0, 0.3)",

  // Brand gradients
  gradientGold: ["#FDB913", "#FFD700"],
  gradientGreen: ["#10B981", "#34D399"],
  gradientRed: ["#EF4444", "#F87171"],
} as const;

export type Colors = typeof colors;
