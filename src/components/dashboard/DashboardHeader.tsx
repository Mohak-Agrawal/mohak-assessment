import { colors, spacing } from "@/theme";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Text } from "../ui/Text";

interface DashboardHeaderProps {
  name: string;
  username: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  name,
  username,
}) => {
  return (
    <View
      style={{
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.md,
        paddingBottom: spacing.xs,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: spacing.sm,
        }}
      >
        <View
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: "#161618",
            borderWidth: 1,
            borderColor: "#222224",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="user" size={16} color={colors.gold} />
        </View>
        <View>
          <Text size="base" weight="semibold" color="textPrimary">
            Hi, {name}
          </Text>
          <Text
            variant="caption"
            color="textTertiary"
            style={{ marginTop: 0, fontSize: 10 }}
          >
            @{username}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 34,
          height: 34,
          borderRadius: 10,
          backgroundColor: "#161618",
          borderWidth: 1,
          borderColor: "#222224",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Feather name="bell" size={16} color={colors.gold} />
      </View>
    </View>
  );
};
