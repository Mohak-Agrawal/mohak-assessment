/**
 * Tabs Component
 * Segmented control for switching between views
 */

import { colors, radius, spacing } from "@/theme";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "./Text";

interface Tab {
  id: string;
  label: string;
  badge?: number;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  variant?: "default" | "segmented";
  scrollable?: boolean;
  testID?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  variant = "default",
  scrollable = false,
  testID,
}) => {
  const isSegmented = variant === "segmented";

  const content = (
    <View
      style={[
        {
          flexDirection: "row",
          gap: isSegmented ? spacing.sm : spacing.lg,
          paddingHorizontal: spacing.lg,
          paddingVertical: spacing.lg,
          backgroundColor: isSegmented ? colors.bgSurface : "transparent",
          borderRadius: isSegmented ? radius.lg : 0,
        },
        !scrollable && { justifyContent: "space-between" },
      ]}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <TouchableOpacity
            key={tab.id}
            onPress={() => onTabChange(tab.id)}
            style={[
              {
                paddingVertical: spacing.md,
                paddingHorizontal: isSegmented ? spacing.lg : 0,
                borderBottomWidth: !isSegmented && isActive ? 2 : 0,
                borderBottomColor: colors.gold,
                backgroundColor:
                  isSegmented && isActive ? colors.darkGray : "transparent",
                borderRadius: isSegmented ? radius.md : 0,
                flexDirection: "row",
                alignItems: "center",
                gap: spacing.xs,
              },
            ]}
            activeOpacity={0.7}
          >
            <Text
              weight={isActive ? "semibold" : "normal"}
              color={isActive ? "gold" : "textSecondary"}
              size="base"
            >
              {tab.label}
            </Text>
            {tab.badge !== undefined && (
              <View
                style={{
                  backgroundColor: colors.gold,
                  borderRadius: radius.full,
                  minWidth: 20,
                  height: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text size="xs" weight="bold" color={colors.buttonPrimaryText}>
                  {tab.badge}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );

  if (scrollable) {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        testID={testID}
      >
        {content}
      </ScrollView>
    );
  }

  return <View testID={testID}>{content}</View>;
};
