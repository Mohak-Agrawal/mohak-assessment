/**
 * Button Component
 * Primary and secondary action buttons
 */

import { colors, radius, spacing } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Text } from "./Text";

interface ButtonProps {
  onPress: () => void;
  label: string;
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "danger"
    | "outline-gold"
    | "gradient-gold";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  style?: any;
  textStyle?: any;
  testID?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  label,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  style,
  textStyle,
  testID,
}) => {
  const isDisabled = disabled || loading;

  const getBackgroundColor = () => {
    if (variant === "primary")
      return isDisabled ? colors.buttonDisabled : colors.buttonPrimary;
    if (variant === "secondary")
      return isDisabled ? colors.lightGray : colors.buttonSecondary;
    if (variant === "ghost") return "transparent";
    if (variant === "danger")
      return isDisabled ? colors.buttonDisabled : colors.red;
    if (variant === "outline-gold") return "rgba(254, 190, 47, 0.05)";
    // gradient-gold background is handled by LinearGradient
    return colors.buttonPrimary;
  };

  const getTextColor = () => {
    if (variant === "primary") return colors.buttonPrimaryText;
    if (variant === "secondary") return colors.buttonSecondaryText;
    if (variant === "ghost") return colors.gold;
    if (variant === "danger") return colors.textPrimary;
    if (variant === "outline-gold" || variant === "gradient-gold")
      return colors.gold;
    return colors.buttonPrimaryText;
  };

  const getPadding = () => {
    if (size === "sm") return { px: spacing.md, py: spacing.sm };
    if (size === "md") return { px: spacing.lg, py: spacing.md };
    if (size === "lg") return { px: spacing.xl, py: 14 };
    return { px: spacing.lg, py: spacing.md };
  };

  const paddingValues = getPadding();

  // Base styling for the content wrapper (used by both standard and gradient buttons)
  const baseInnerStyle: ViewStyle = {
    paddingHorizontal: paddingValues.px,
    paddingVertical: paddingValues.py,
    borderRadius: radius.md,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.sm,
  };

  const wrapperStyle: ViewStyle = {
    alignSelf: fullWidth ? "stretch" : "flex-start",
    opacity: isDisabled ? 0.5 : 1,
  };

  const renderContent = () => (
    <>
      {loading ? (
        <ActivityIndicator color={getTextColor() as any} size="small" />
      ) : (
        <>
          {icon && icon}
          <Text
            variant="bodyMedium"
            weight="semibold"
            style={[
              { color: getTextColor() as any, textAlign: "center" },
              textStyle,
            ]}
          >
            {label}
          </Text>
        </>
      )}
    </>
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={[wrapperStyle, style]}
      testID={testID}
      activeOpacity={0.7}
    >
      {variant === "gradient-gold" ? (
        <LinearGradient
          colors={["rgba(254, 190, 47, 0.15)", "rgba(254, 190, 47, 0.02)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }} // Top to bottom gradient
          style={[
            baseInnerStyle,
            {
              borderWidth: 1,
              borderColor: "rgba(254, 190, 47, 0.3)",
            },
          ]}
        >
          {renderContent()}
        </LinearGradient>
      ) : (
        <View
          style={[
            baseInnerStyle,
            {
              backgroundColor: getBackgroundColor(),
              borderWidth:
                variant === "ghost" || variant === "outline-gold" ? 1 : 0,
              borderColor:
                variant === "ghost"
                  ? colors.gold
                  : variant === "outline-gold"
                    ? "rgba(254, 190, 47, 0.5)"
                    : "transparent",
            },
          ]}
        >
          {renderContent()}
        </View>
      )}
    </TouchableOpacity>
  );
};
