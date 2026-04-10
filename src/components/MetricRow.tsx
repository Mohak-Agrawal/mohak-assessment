/**
 * Metric Row Component
 * Label + value pair, commonly used in summaries
 */

import { colors, spacing } from "@/theme";
import React from "react";
import { View, ViewStyle } from "react-native";
import { Text } from "./ui/Text";

interface MetricRowProps {
  label: string;
  value: string | number | React.ReactNode;
  valueColor?: string;
  style?: ViewStyle;
  testID?: string;
}

export const MetricRow: React.FC<MetricRowProps> = ({
  label,
  value,
  valueColor = "textPrimary",
  style,
  testID,
}) => {
  const isReactNode = typeof value === "object";

  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: spacing.md,
          paddingHorizontal: spacing.lg,
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
        },
        style,
      ]}
      testID={testID}
    >
      <Text variant="body" color="textSecondary">
        {label}
      </Text>
      {isReactNode ? (
        value
      ) : (
        <Text variant="bodyMedium" weight="semibold" color={valueColor}>
          {value}
        </Text>
      )}
    </View>
  );
};
