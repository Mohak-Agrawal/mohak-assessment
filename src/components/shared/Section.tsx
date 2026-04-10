/**
 * Section Component
 * Reusable section wrapper for grouping content
 */

import { spacing } from "@/theme";
import React from "react";
import { View, ViewStyle } from "react-native";
import { Text } from "../ui/Text";

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  spacing?: number;
  gap?: number;
  centerTitle?: boolean;
  style?: ViewStyle;
  testID?: string;
}

export const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  spacing: paddingSpacing = spacing.lg,
  gap = spacing.md,
  centerTitle = false,
  style,
  testID,
}) => {
  return (
    <View
      style={[
        {
          paddingHorizontal: paddingSpacing,
          paddingVertical: spacing.md,
        },
        style,
      ]}
      testID={testID}
    >
      {title && (
        <View style={{ marginBottom: spacing.lg }}>
          <Text variant="h4" color="textPrimary" center={centerTitle}>
            {title}
          </Text>
          {subtitle && (
            <Text
              variant="body"
              color="textSecondary"
              center={centerTitle}
              style={{ marginTop: spacing.sm }}
            >
              {subtitle}
            </Text>
          )}
        </View>
      )}
      <View style={{ gap }}>{children}</View>
    </View>
  );
};
