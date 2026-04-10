import { colors, spacing } from "@/theme";
import React from "react";
import { View } from "react-native";
import { Card } from "../ui/Card";
import { Text } from "../ui/Text";

interface BalanceCardProps {
  amount: number;
  usdtAmount: number;
  oneTimeAmount: number;
  oneTimeSubsidized: string;
  recurringAmount: number;
  recurringSubsidized: string;
}

export const DashboardBalanceCard: React.FC<BalanceCardProps> = ({
  amount,
  usdtAmount,
  oneTimeAmount,
  oneTimeSubsidized,
  recurringAmount,
  recurringSubsidized,
}) => {
  return (
    <Card style={{ alignItems: "center", gap: spacing.md }} goldenBorder>
      <Text variant="caption" color="textTertiary" weight="semibold">
        COMMISSION BALANCE
      </Text>

      <View style={{ alignItems: "center" }}>
        <Text size="5xl" weight="semibold" color="gold">
          ₹{amount?.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
        </Text>

        <Text
          size="lg"
          color="textTertiary"
          style={{ marginTop: spacing.md, fontWeight: "400" }}
        >
          {usdtAmount?.toLocaleString("en-IN")} USDT
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: spacing.md,
        }}
      >
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <Text variant="caption" color="textTertiary" weight="medium">
            ONE TIME
          </Text>
          <Text
            size="xl"
            weight="semibold"
            color={colors.green}
            style={{ marginTop: spacing.sm }}
          >
            ₹{oneTimeAmount?.toLocaleString("en-IN")}
          </Text>
          <Text
            variant="caption"
            color={colors.green}
            style={{ marginTop: spacing.xs, fontWeight: "400" }}
          >
            ${oneTimeSubsidized}
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <Text variant="caption" color="textTertiary" weight="medium">
            RECURRING
          </Text>
          <Text
            size="xl"
            weight="semibold"
            color={colors.green}
            style={{ marginTop: spacing.sm }}
          >
            ₹{recurringAmount?.toLocaleString("en-IN")}
          </Text>
          <Text
            variant="caption"
            color={colors.green}
            style={{ marginTop: spacing.xs, fontWeight: "400" }}
          >
            ${recurringSubsidized}
          </Text>
        </View>
      </View>
    </Card>
  );
};
