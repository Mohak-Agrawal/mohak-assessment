import { Card, Text } from "@/components/ui";
import { spacing } from "@/theme";
import React from "react";
import { View } from "react-native";

interface TimelineItem {
  label: string;
  amount: string;
}

interface CommissionTimelineCardProps {
  timeline: TimelineItem[];
}

export const CommissionTimelineCard: React.FC<CommissionTimelineCardProps> = ({
  timeline,
}) => {
  return (
    <Card style={{ gap: spacing.lg }}>
      {timeline.map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text size="lg" color="textPrimary">
            {item.label}
          </Text>
          <Text size="lg" style={{ color: "#4ADE80" }}>
            {item.amount}
          </Text>
        </View>
      ))}
    </Card>
  );
};
