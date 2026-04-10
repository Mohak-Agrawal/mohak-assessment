/**
 * Balance Card Component
 * Displays portfolio balance with trend indicator
 */

import { colors, radius, spacing } from "@/theme";
import React from "react";
import { View, ViewStyle } from "react-native";
import { Text } from "./ui/Text";

interface BalanceCardProps {
  title: string;
  amount: string | number;
  currency?: string;
  change?: {
    value: number;
    percentage: number;
    isPositive: boolean;
  };
  style?: ViewStyle;
  testID?: string;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({
  title,
  amount,
  currency = "₹",
  change,
  style,
  testID,
}) => {
  const formatAmount = (val: string | number) => {
    if (typeof val === "string") return val;
    return val.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const changeColor = change?.isPositive ? colors.green : colors.red;
  const changeSymbol = change?.isPositive ? "+" : "";

  return (
    <View
      style={[
        {
          backgroundColor: colors.bgSurface,
          borderRadius: radius.lg,
          padding: spacing.lg,
          gap: spacing.md,
        },
        style,
      ]}
      testID={testID}
    >
      <Text variant="bodySmall" color="textSecondary">
        {title}
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "baseline",
          gap: spacing.sm,
        }}
      >
        <Text color="gold" weight="bold" size="3xl">
          {currency}
        </Text>
        <Text color="textPrimary" weight="bold" size="3xl">
          {formatAmount(amount)}
        </Text>
      </View>

      {change && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: spacing.sm,
          }}
        >
          <Text color={changeColor} weight="semibold" size="sm">
            {changeSymbol}
            {formatAmount(change.value)}
          </Text>
          <Text color={changeColor} weight="semibold" size="sm">
            ({changeSymbol}
            {change.percentage.toFixed(2)}%)
          </Text>
        </View>
      )}
    </View>
  );
};
