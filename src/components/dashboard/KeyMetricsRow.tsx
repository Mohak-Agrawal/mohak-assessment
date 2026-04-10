import { radius, spacing } from "@/theme";
import React from "react";
import { View } from "react-native";
import { Card } from "../ui/Card";
import { Text } from "../ui/Text";

interface Metric {
  label: string;
  value: string;
  valueColor: string;
}

interface KeyMetricsRowProps {
  metrics: Metric[];
}

export const KeyMetricsRow: React.FC<KeyMetricsRowProps> = ({ metrics }) => {
  return (
    <View style={{ flexDirection: "row", gap: spacing.sm }}>
      {metrics.map((metric, index) => (
        <Card
          key={index}
          style={{
            flex: 1,
            backgroundColor: "#161618",
            paddingVertical: spacing.md,
            paddingHorizontal: 2,
            borderRadius: radius.md,
            borderWidth: 1,
            borderColor: "#222224",
            alignItems: "center",
          }}
        >
          <Text
            size="lg"
            weight="semibold"
            color={metric.valueColor as any}
            style={{ letterSpacing: 0.2 }}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {metric.value}
          </Text>
          <Text
            variant="caption"
            color="textTertiary"
            style={{ marginTop: 4, fontSize: 9, letterSpacing: 0.4 }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {metric.label}
          </Text>
        </Card>
      ))}
    </View>
  );
};
