import { colors, spacing } from "@/theme";
import React from "react";
import { View } from "react-native";
import { Card } from "../ui/Card";
import { Text } from "../ui/Text";

interface LifetimeEarningsCardProps {
  amount: number;
  usdtAmount: number;
  metrics: {
    yesterday: { amount: number; subsidy: string };
    thisMonth: { amount: number; subsidy: string };
    lastMonth: { amount: number; subsidy: string };
  };
}

export const LifetimeEarningsCard: React.FC<LifetimeEarningsCardProps> = ({
  amount,
  usdtAmount,
  metrics,
}) => {
  return (
    <Card style={{ alignItems: "center", gap: spacing.md }}>
      <Text variant="caption" color="textTertiary" weight="semibold">
        LIFETIME EARNINGS
      </Text>

      <View style={{ alignItems: "center" }}>
        <Text size="5xl" weight="bold" color="gold">
          ₹{amount?.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
        </Text>
        <Text size="lg" color="textTertiary" style={{ marginTop: spacing.md }}>
          {usdtAmount?.toLocaleString("en-IN")} USDT
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: spacing.lg,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <Text variant="caption" color="textTertiary">
            YESTERDAY
          </Text>
          <Text size="lg" color="textPrimary" style={{ marginTop: spacing.xs }}>
            ₹{metrics.yesterday.amount?.toLocaleString("en-IN")}
          </Text>
          <Text variant="caption" color={colors.green} style={{ marginTop: 2 }}>
            ${metrics.yesterday.subsidy}
          </Text>
        </View>

        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <Text variant="caption" color="textTertiary">
            THIS MONTH
          </Text>
          <Text size="lg" color="textPrimary" style={{ marginTop: spacing.xs }}>
            ₹{metrics.thisMonth.amount?.toLocaleString("en-IN")}
          </Text>
          <Text variant="caption" color={colors.green} style={{ marginTop: 2 }}>
            ${metrics.thisMonth.subsidy}
          </Text>
        </View>

        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <Text variant="caption" color="textTertiary">
            LAST MONTH
          </Text>
          <Text size="lg" color="textPrimary" style={{ marginTop: spacing.xs }}>
            ₹{metrics.lastMonth.amount?.toLocaleString("en-IN")}
          </Text>
          <Text variant="caption" color={colors.green} style={{ marginTop: 2 }}>
            ${metrics.lastMonth.subsidy}
          </Text>
        </View>
      </View>
    </Card>
  );
};
