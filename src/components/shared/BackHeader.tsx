import { colors, spacing } from "@/theme";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../ui/Text";

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

export const BackHeader: React.FC<HeaderProps> = ({ title, onBack }) => {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.md,
        paddingBottom: spacing.md,
        // Added the subtle bottom border
        borderBottomWidth: 1,
        borderBottomColor: "#1C1C1E",
      }}
    >
      <TouchableOpacity
        onPress={handleBack}
        style={{ marginRight: spacing.md }}
        activeOpacity={0.7}
      >
        <LinearGradient
          // Added the subtle gold gradient fill for the button background
          colors={["rgba(254, 190, 47, 0.15)", "rgba(254, 190, 47, 0.02)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            width: 36,
            height: 36,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "rgba(254, 190, 47, 0.3)", // Golden border
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="chevron-left" size={20} color={colors.gold} />
        </LinearGradient>
      </TouchableOpacity>
      <Text
        size="xl"
        weight="semibold"
        color="textPrimary"
        style={{ letterSpacing: 0.5 }}
      >
        {title}
      </Text>
    </View>
  );
};
