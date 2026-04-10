/**
 * Action Button Component
 * Large CTA button for primary actions
 */

import React from "react";
import { ViewStyle } from "react-native";
import { Button } from "./ui/Button";

interface ActionButtonProps {
  label: string;
  onPress: () => void;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
  style?: ViewStyle;
  testID?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onPress,
  icon,
  fullWidth = true,
  loading = false,
  disabled = false,
  variant = "primary",
  style,
  testID,
}) => {
  return (
    <Button
      label={label}
      onPress={onPress}
      icon={icon}
      variant={variant}
      size="lg"
      fullWidth={fullWidth}
      loading={loading}
      disabled={disabled}
      style={style}
      testID={testID}
    />
  );
};
