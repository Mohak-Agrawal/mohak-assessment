import { Text } from "@/components";
import { colors } from "@/theme";
import React from "react";
import { View } from "react-native";

export default function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.bgPrimary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: colors.textPrimary, fontSize: 18 }}>
        Profile Screen
      </Text>
      <Text style={{ color: colors.textTertiary, marginTop: 8 }}>
        Placeholder Content
      </Text>
    </View>
  );
}
