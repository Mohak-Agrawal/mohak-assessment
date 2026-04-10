import { colors, radius, spacing } from "@/theme";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Card } from "../ui/Card";
import { Text } from "../ui/Text";

interface QuickAction {
  icon: string;
  label: string;
  subtitle: string;
}

interface QuickActionsGridProps {
  actions: QuickAction[];
  onActionPress: (action: QuickAction) => void;
}

export const QuickActionsGrid: React.FC<QuickActionsGridProps> = ({
  actions,
  onActionPress,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: spacing.sm,
      }}
    >
      {actions.map((action, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.7}
          style={{ width: "31%", marginBottom: spacing.xs }}
          onPress={() => onActionPress(action)}
        >
          <Card
            style={{
              width: "100%",
              aspectRatio: 1,
              borderRadius: radius.lg,
              borderWidth: 1,
              borderColor: "#222224",
              justifyContent: "center",
              alignItems: "center",
              padding: 4,
              gap: 0,
            }}
          >
            <View
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                backgroundColor: "rgba(255, 184, 0, 0.1)",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 4,
              }}
            >
              <Feather
                name={action.icon as any}
                size={14}
                color={colors.gold}
              />
            </View>
            <Text
              variant="bodySmall"
              weight="semibold"
              color="textPrimary"
              style={{ textAlign: "center", fontSize: 9 }}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {action.label}
            </Text>
            <Text
              variant="caption"
              color="textTertiary"
              style={{ textAlign: "center", fontSize: 7, marginTop: 0 }}
              numberOfLines={1}
            >
              {action.subtitle}
            </Text>
          </Card>
        </TouchableOpacity>
      ))}
    </View>
  );
};
