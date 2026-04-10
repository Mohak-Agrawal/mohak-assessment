/**
 * Text Component
 * Accessible typography with consistent styling
 */

import { colors, textStyles, typography } from "@/theme";
import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

interface TextProps extends RNTextProps {
  variant?: keyof typeof textStyles;
  weight?: keyof typeof typography.weights;
  size?: keyof typeof typography.sizes;
  color?: keyof typeof colors | string;
  center?: boolean;
  numberOfLines?: number;
  lineHeight?: number;
}

export const Text: React.FC<TextProps> = ({
  variant = "body",
  weight,
  size,
  color = "textPrimary",
  center,
  style,
  children,
  ...props
}) => {
  const baseStyle = textStyles[variant];
  const colorValue = color.startsWith("#")
    ? color
    : colors[color as keyof typeof colors];

  const customStyle = {
    fontFamily: "Inter",
    ...(baseStyle || {}),
    ...(weight && { fontWeight: typography.weights[weight] }),
    ...(size && { fontSize: typography.sizes[size] }),
    color: colorValue,
    textAlign: center ? "center" : "auto",
  };

  return (
    <RNText style={[customStyle, style]} {...props}>
      {children}
    </RNText>
  );
};
