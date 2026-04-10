/**
 * Commission Card Component
 * Shows commission earnings and withdrawal info
 */

import { colors, radius, spacing } from "@/theme";
import React from "react";
import { View, ViewStyle } from "react-native";
import { Text } from "./ui/Text";

interface CommissionCardProps {
  period: string; // 'Today', 'This Month', 'Historical'
  amount: string | number;
  commission: string | number;
  count?: number;
  style?: ViewStyle;
  testID?: string;
}

export const CommissionCard: React.FC<CommissionCardProps> = ({
  period,
  amount,
  commission,
  count,
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

  return (
    <View
      style={[
        {
          backgroundColor: colors.bgSurface,
          borderRadius: radius.lg,
          padding: spacing.lg,
          borderWidth: 1,
          borderColor: colors.border,
        },
        style,
      ]}
      testID={testID}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text variant="bodyMedium" weight="semibold" color="textPrimary">
          {period}
        </Text>
        {count && (
          <View
            style={{
              backgroundColor: colors.gold,
              borderRadius: radius.full,
              paddingHorizontal: spacing.md,
              paddingVertical: spacing.xs,
            }}
          >
            <Text color={colors.buttonPrimaryText} weight="semibold" size="sm">
              {count}
            </Text>
          </View>
        )}
      </View>

      {/* Amount */}
      <View style={{ marginTop: spacing.lg, gap: spacing.sm }}>
        <Text variant="caption" color="textTertiary">
          Commission Earned
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            gap: spacing.sm,
          }}
        >
          <Text color="gold" weight="bold" size="2xl">
            ₹
          </Text>
          <Text color="textPrimary" weight="bold" size="2xl">
            {formatAmount(commission)}
          </Text>
        </View>
      </View>

      {/* Transaction Value */}
      <View
        style={{
          marginTop: spacing.md,
          paddingTop: spacing.md,
          borderTopWidth: 1,
          borderTopColor: colors.border,
        }}
      >
        <Text variant="caption" color="textTertiary">
          Transaction Value
        </Text>
        <Text
          variant="bodySmall"
          weight="medium"
          color="textSecondary"
          style={{ marginTop: spacing.xs }}
        >
          ₹{formatAmount(amount)}
        </Text>
      </View>
    </View>
  );
};
