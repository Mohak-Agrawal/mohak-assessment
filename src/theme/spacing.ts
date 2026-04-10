/**
 * Spacing System
 * 4px base unit for consistency
 */

export const spacing = {
  // Compact
  xs: 4,
  sm: 8,

  // Standard
  md: 12,
  lg: 16,
  xl: 20,

  // Large
  "2xl": 24,
  "3xl": 32,
  "4xl": 40,
  "5xl": 48,
  "6xl": 56,
  "7xl": 64,
} as const;

export type Spacing = typeof spacing;
