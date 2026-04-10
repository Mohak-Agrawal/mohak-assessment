import { Card, Text } from "@/components/ui";
import { spacing } from "@/theme";
import React from "react";
import { View } from "react-native";

interface MonthlyAverageCardProps {
  avgTotal: string;
  months: number;
  avgOneTime: string;
  avgRecurring: string;
}

export const MonthlyAverageCard: React.FC<MonthlyAverageCardProps> = ({
  avgTotal,
  months,
  avgOneTime,
  avgRecurring,
}) => {
  return (
    <Card>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: spacing.lg,
        }}
      >
        <View>
          <Text
            variant="caption"
            color="textTertiary"
            style={{ marginBottom: spacing.sm }}
          >
            Avg Commission / Month
          </Text>
          <Text size="3xl" weight="semibold" color="gold">
            ${avgTotal}
          </Text>
        </View>
        <View style={{ alignItems: "flex-end", paddingBottom: 4 }}>
          <Text variant="caption" color="textTertiary" style={{ fontSize: 10 }}>
            Based on
          </Text>
          <Text
            variant="bodyMedium"
            color="textSecondary"
            style={{ marginTop: 2 }}
          >
            {months} months
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text
            variant="caption"
            color="textTertiary"
            style={{ marginBottom: 4 }}
          >
            Avg One-Time / mo
          </Text>
          <Text size="lg" color="textPrimary">
            ${avgOneTime}
          </Text>
        </View>
        <View style={{ alignItems: "flex-start", width: "45%" }}>
          <Text
            variant="caption"
            color="textTertiary"
            style={{ marginBottom: 4 }}
          >
            Avg Recurring / mo
          </Text>
          <Text size="lg" color="textPrimary">
            ${avgRecurring}
          </Text>
        </View>
      </View>
    </Card>
  );
};
