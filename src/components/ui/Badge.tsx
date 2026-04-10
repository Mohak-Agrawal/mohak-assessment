/**
 * Badge Component
 * Status indicators and labels
 */

import { colors, radius, spacing } from "@/theme";
import React from "react";
import { View, ViewStyle } from "react-native";
import { Text } from "./Text";

type BadgeVariant = "success" | "danger" | "warning" | "info" | "default";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: "sm" | "md";
  icon?: React.ReactNode;
  style?: ViewStyle;
  testID?: string;
}

const getVariantColors = (variant: BadgeVariant) => {
  switch (variant) {
    case "success":
      return { bg: colors.green, text: colors.textPrimary };
    case "danger":
      return { bg: colors.red, text: colors.textPrimary };
    case "warning":
      return { bg: colors.orange, text: colors.textPrimary };
    case "info":
      return { bg: colors.blue, text: colors.textPrimary };
    case "default":
    default:
      return { bg: colors.gold, text: colors.buttonPrimaryText };
  }
};

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = "default",
  size = "md",
  icon,
  style,
  testID,
}) => {
  const { bg, text } = getVariantColors(variant);
  const isPadding = size === "sm" ? spacing.sm : spacing.md;

  const badgeStyle: ViewStyle = {
    backgroundColor: bg,
    paddingHorizontal: isPadding,
    paddingVertical: size === "sm" ? spacing.xs : spacing.sm,
    borderRadius: radius.full,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: spacing.xs,
  };

  return (
    <View style={[badgeStyle, style]} testID={testID}>
      {icon && icon}
      <Text color={text} size={size === "sm" ? "xs" : "sm"} weight="semibold">
        {label}
      </Text>
    </View>
  );
};
