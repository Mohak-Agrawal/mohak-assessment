/**
 * List Item Component
 * Flexible list item with thumbnail, content, and actions
 */

import { colors, radius, spacing } from "@/theme";
import React from "react";
import {
    Image,
    ImageSourcePropType,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";
import { Text } from "../ui/Text";

interface ListItemProps {
  title: string;
  subtitle?: string;
  description?: string;
  thumbnail?: ImageSourcePropType | string;
  rightContent?: React.ReactNode;
  onPress?: () => void;
  badge?: React.ReactNode;
  style?: ViewStyle;
  testID?: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  description,
  thumbnail,
  rightContent,
  onPress,
  badge,
  style,
  testID,
}) => {
  const content = (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: spacing.md,
          paddingHorizontal: spacing.lg,
          backgroundColor: colors.bgSurface,
          borderRadius: radius.lg,
          gap: spacing.lg,
        },
        style,
      ]}
    >
      {/* Thumbnail */}
      {thumbnail && (
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: radius.lg,
            backgroundColor: colors.darkGray,
            overflow: "hidden",
          }}
        >
          <Image
            source={
              typeof thumbnail === "string" ? { uri: thumbnail } : thumbnail
            }
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      )}

      {/* Content */}
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: spacing.sm,
          }}
        >
          <Text variant="bodyMedium" color="textPrimary">
            {title}
          </Text>
          {badge && badge}
        </View>
        {subtitle && (
          <Text
            variant="bodySmall"
            color="textSecondary"
            numberOfLines={1}
            style={{ marginTop: spacing.xs }}
          >
            {subtitle}
          </Text>
        )}
        {description && (
          <Text
            variant="caption"
            color="textTertiary"
            numberOfLines={1}
            style={{ marginTop: spacing.xs }}
          >
            {description}
          </Text>
        )}
      </View>

      {/* Right Content */}
      {rightContent && <View>{rightContent}</View>}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7} testID={testID}>
        {content}
      </TouchableOpacity>
    );
  }

  return <View testID={testID}>{content}</View>;
};
