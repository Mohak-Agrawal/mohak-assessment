import { Card, Text } from "@/components";
import { radius, spacing } from "@/theme";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { StatusBadge } from "./StatusBadge";

interface InvestorItemProps {
  id: string;
  name: string;
  joinedDate: string;
  invested: number;
  currentValue: number;
  returnPercentage: number;
  status: "active" | "dormant" | "kyc_pending";
  onPress: (id: string) => void;
}

export const InvestorItem: React.FC<InvestorItemProps> = ({
  id,
  name,
  joinedDate,
  invested,
  currentValue,
  returnPercentage,
  status,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onPress(id)}>
      <Card
        style={{
          borderRadius: radius.lg,
          padding: spacing.lg,
          marginBottom: spacing.md,
          marginHorizontal: spacing.lg,
          borderWidth: 1,
          borderColor: "#2A2A2A",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: spacing.sm,
          }}
        >
          <View>
            <Text size="lg" weight="semibold" color="textPrimary" numberOfLines={1}>
              {name}
            </Text>
            <Text
              variant="caption"
              color="textTertiary"
              style={{ marginTop: 2, fontSize: 10 }}
              numberOfLines={1}
            >
              Joined {joinedDate}
            </Text>
          </View>
          <StatusBadge status={status} />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: spacing.md,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              variant="caption"
              color="textTertiary"
              style={{ marginBottom: 4 }}
            >
              Invested
            </Text>
            <Text size="lg" weight="semibold" color="textPrimary">
              ${invested.toLocaleString()}
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text
              variant="caption"
              color="textTertiary"
              style={{ marginBottom: 4 }}
            >
              Current
            </Text>
            <Text
              size="lg"
              weight="semibold"
              style={{
                color: returnPercentage > 0 ? "#4ADE80" : "#FFFFFF",
              }}
            >
              ${currentValue.toLocaleString()}
            </Text>
          </View>

          <View style={{ flex: 0.5, alignItems: "flex-end" }}>
            <Text
              variant="caption"
              color="textTertiary"
              style={{ marginBottom: 4 }}
            >
              Return
            </Text>
            <Text
              size="lg"
              weight="semibold"
              style={{
                color: returnPercentage > 0 ? "#4ADE80" : "#A0A0A5",
              }}
            >
              {returnPercentage > 0 ? "+" : ""}
              {returnPercentage}%
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};
