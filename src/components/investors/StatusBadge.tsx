import { Text } from "@/components";
import React from "react";
import { View } from "react-native";

interface StatusBadgeProps {
  status: "active" | "dormant" | "kyc_pending";
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let bgColor = "";
  let textColor = "";
  let label = "";

  switch (status) {
    case "active":
      bgColor = "rgba(74, 222, 128, 0.15)";
      textColor = "#4ADE80";
      label = "Active";
      break;
    case "dormant":
      bgColor = "rgba(248, 113, 113, 0.15)";
      textColor = "#F87171";
      label = "Dormant";
      break;
    case "kyc_pending":
      bgColor = "rgba(251, 191, 36, 0.15)";
      textColor = "#FBBF24";
      label = "KYC Pending";
      break;
  }

  return (
    <View
      style={{
        backgroundColor: bgColor,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
      }}
    >
      <Text variant="caption" style={{ color: textColor }}>
        {label}
      </Text>
    </View>
  );
};
