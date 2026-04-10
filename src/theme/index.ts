/**
 * Theme Export
 * Central theme configuration
 */

import { colors } from "./colors";
import { radius } from "./radius";
import { shadows } from "./shadows";
import { spacing } from "./spacing";
import { textStyles, typography } from "./typography";

export { colors, type Colors } from "./colors";
export { radius, type Radius } from "./radius";
export { shadows } from "./shadows";
export { spacing, type Spacing } from "./spacing";
export { textStyles, typography, type Typography } from "./typography";

// Create default theme object
export const theme = {
  colors,
  spacing,
  typography,
  textStyles,
  radius,
  shadows,
} as const;

export type Theme = typeof theme;
