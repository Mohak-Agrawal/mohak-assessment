/**
 * Investor Card Component
 * List item showing investor summary
 */

import { colors, radius, spacing } from "@/theme";
import React from "react";
import { View, ViewStyle } from "react-native";
import { Badge } from "./ui/Badge";
import { Text } from "./ui/Text";

interface InvestorCardProps {
  name: string;
  invested: string | number;
  currentValue: string | number;
  returnPercentage: number;
  status?: "active" | "inactive";
  onPress?: () => void;
  style?: ViewStyle;
  testID?: string;
}

export const InvestorCard: React.FC<InvestorCardProps> = ({
  name,
  invested,
  currentValue,
  returnPercentage,
  status = "active",
  style,
  testID,
}) => {
  const isPositiveReturn = returnPercentage >= 0;
  const returnColor = isPositiveReturn ? colors.green : colors.red;

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
          gap: spacing.md,
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
          {name}
        </Text>
        <Badge
          label={status === "active" ? "Active" : "Inactive"}
          variant={status === "active" ? "success" : "default"}
          size="sm"
        />
      </View>

      {/* Metrics Grid */}
      <View style={{ gap: spacing.md }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text variant="caption" color="textTertiary">
              Invested
            </Text>
            <Text
              variant="bodyMedium"
              weight="semibold"
              color="textPrimary"
              style={{ marginTop: spacing.xs }}
            >
              ₹{formatAmount(invested)}
            </Text>
          </View>
          <View>
            <Text variant="caption" color="textTertiary">
              Current Value
            </Text>
            <Text
              variant="bodyMedium"
              weight="semibold"
              color="textPrimary"
              style={{ marginTop: spacing.xs }}
            >
              ₹{formatAmount(currentValue)}
            </Text>
          </View>
        </View>

        {/* Return */}
        <View
          style={{
            padding: spacing.md,
            backgroundColor: colors.darkGray,
            borderRadius: radius.md,
            alignItems: "center",
          }}
        >
          <Text variant="caption" color="textTertiary">
            Return
          </Text>
          <Text
            variant="bodyMedium"
            weight="bold"
            color={returnColor}
            style={{ marginTop: spacing.xs }}
          >
            {isPositiveReturn ? "+" : ""}
            {returnPercentage.toFixed(2)}%
          </Text>
        </View>
      </View>
    </View>
  );
};
