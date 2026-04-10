/**
 * Input Component
 * Text input with consistent styling and validation
 */

import { colors, radius, spacing, textStyles } from "@/theme";
import React, { useState } from "react";
import {
    TextInputProps as RNTextInputProps,
    TextInput,
    View,
    ViewStyle,
} from "react-native";
import { Text } from "./Text";

interface InputProps extends RNTextInputProps {
  label?: string;
  placeholder?: string;
  error?: string;
  icon?: React.ReactNode;
  style?: ViewStyle;
  testID?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  error,
  icon,
  style,
  testID,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const containerStyle: ViewStyle = {
    marginBottom: error ? spacing.md : 0,
  };

  const inputContainerStyle: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.bgSurface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: isFocused ? colors.gold : error ? colors.red : colors.border,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: spacing.sm,
  };

  return (
    <View style={containerStyle}>
      {label && (
        <Text
          variant="label"
          color="textSecondary"
          style={{ marginBottom: spacing.sm }}
        >
          {label}
        </Text>
      )}
      <View style={inputContainerStyle}>
        {icon && icon}
        <TextInput
          {...props}
          placeholder={placeholder}
          placeholderTextColor={colors.textTertiary}
          style={[
            {
              ...textStyles.body,
              color: colors.textPrimary,
              flex: 1,
            },
            style,
          ]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          testID={testID}
        />
      </View>
      {error && (
        <Text size="sm" color="red" style={{ marginTop: spacing.sm }}>
          {error}
        </Text>
      )}
    </View>
  );
};
