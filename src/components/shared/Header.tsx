/**
 * Header Component
 * Screen header with title and actions
 */

import { colors, radius, spacing } from "@/theme";
import React from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import { Text } from "../ui/Text";

interface HeaderAction {
  icon: React.ReactNode;
  onPress: () => void;
  testID?: string;
}

interface HeaderProps {
  title: string;
  subtitle?: string;
  actions?: HeaderAction[];
  rightComponent?: React.ReactNode;
  style?: ViewStyle;
  testID?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  actions,
  rightComponent,
  style,
  testID,
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.bgPrimary,
          paddingHorizontal: spacing.lg,
          paddingVertical: spacing.lg,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
        style,
      ]}
      testID={testID}
    >
      <View style={{ flex: 1 }}>
        <Text variant="h2" color="textPrimary">
          {title}
        </Text>
        {subtitle && (
          <Text
            variant="body"
            color="textSecondary"
            style={{ marginTop: spacing.sm }}
          >
            {subtitle}
          </Text>
        )}
      </View>

      {rightComponent && rightComponent}

      {actions && actions.length > 0 && (
        <View
          style={{
            flexDirection: "row",
            gap: spacing.md,
            marginLeft: spacing.lg,
          }}
        >
          {actions.map((action, index) => (
            <TouchableOpacity
              key={index}
              onPress={action.onPress}
              style={{
                width: 40,
                height: 40,
                borderRadius: radius.md,
                backgroundColor: colors.bgSurface,
                justifyContent: "center",
                alignItems: "center",
              }}
              testID={action.testID}
              activeOpacity={0.7}
            >
              {action.icon}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
