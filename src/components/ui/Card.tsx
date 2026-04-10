/**
 * Card Component
 * Reusable card container with consistent styling
 */

import { colors, radius, shadows, spacing } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, ViewStyle } from "react-native";

interface CardProps {
  children: React.ReactNode;
  padding?: number;
  borderColor?: string;
  borderWidth?: number;
  variant?: "default" | "bordered" | "elevated";
  goldenBorder?: boolean;
  goldenGradient?: boolean;
  style?: ViewStyle;
  testID?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  padding = spacing.lg,
  borderColor = colors.border,
  borderWidth = 0,
  variant = "default",
  goldenBorder = false,
  goldenGradient = false,
  style,
  testID,
}) => {
  const getVariantStyle = (): ViewStyle => {
    switch (variant) {
      case "bordered":
        return {
          borderWidth: 1, // Changed from "3px" to a valid React Native number
          borderColor: borderColor,
          backgroundColor: colors.bgSurface,
        };
      case "elevated":
        return {
          backgroundColor: colors.bgSurface,
          ...(shadows.md as ViewStyle),
        };
      case "default":
      default:
        return {
          // Use 0.5 for a very fine, subtle hairline border
          borderWidth: 1,
          // Reduced opacities significantly for a softer look
          borderColor: goldenBorder
            ? "rgba(254, 190, 47, 0.15)"
            : "rgba(52, 56, 68, 0.3)",
          overflow: "hidden",
        };
    }
  };

  const cardStyle: ViewStyle = {
    borderRadius: radius.lg,
    padding,
    ...getVariantStyle(),
  };

  if (variant === "default") {
    // 15% opacity to 5% opacity for the gold gradient
    const gradientColors = goldenGradient
      ? ["rgba(254, 190, 47, 0.15)", "rgba(254, 190, 47, 0.05)"]
      : ["#151517", "#171719", "#18181A", "#1A1A1C", "#1C1C1E"];

    const gradientLocations = goldenGradient
      ? [0, 1] // Standard top-to-bottom fill for the gold gradient
      : [0.6, 0.65, 0.7, 0.75, 0.8];

    return (
      <LinearGradient
        colors={gradientColors}
        locations={gradientLocations}
        style={[cardStyle, style]}
        testID={testID}
      >
        {children}
      </LinearGradient>
    );
  }

  return (
    <View style={[cardStyle, style]} testID={testID}>
      {children}
    </View>
  );
};
