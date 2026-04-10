import { Card, Text } from "@/components/ui";
import { spacing } from "@/theme";
import React from "react";
import { View } from "react-native";

interface LifetimeEarningsCardProps {
  totalInr: string;
  totalUsd: string;
  withdrawnInr: string;
  withdrawnUsd: string;
}

export const LifetimeEarningsCard: React.FC<LifetimeEarningsCardProps> = ({
  totalInr,
  totalUsd,
  withdrawnInr,
  withdrawnUsd,
}) => {
  return (
    <Card>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text
            variant="caption"
            color="textTertiary"
            style={{ marginBottom: spacing.sm }}
          >
            Total Earned (Lifetime)
          </Text>
          <Text size="2xl" weight="semibold" style={{ color: "#4ADE80" }}>
            ₹{totalInr}
          </Text>
          <Text variant="bodyMedium" style={{ color: "#4ADE80", marginTop: 4 }}>
            ${totalUsd}
          </Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text
            variant="caption"
            color="textTertiary"
            style={{ marginBottom: spacing.sm }}
          >
            Withdrawn
          </Text>
          <Text size="2xl" weight="semibold" color="textPrimary">
            ₹{withdrawnInr}
          </Text>
          <Text
            variant="bodyMedium"
            color="textSecondary"
            style={{ marginTop: 4 }}
          >
            ${withdrawnUsd}
          </Text>
        </View>
      </View>
    </Card>
  );
};
