import { radius, spacing } from "@/theme";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";

interface InvestorSearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const InvestorSearchBar: React.FC<InvestorSearchBarProps> = ({
  value,
  onChangeText,
}) => {
  return (
    <View
      style={{
        paddingHorizontal: spacing.lg,
        marginBottom: spacing.md,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderRadius: radius.md,
          borderWidth: 1,
          borderColor: "#2A2A2A",
          paddingHorizontal: spacing.md,
          height: 48,
        }}
      >
        <Feather name="search" size={18} color="#A0A0A5" />
        <TextInput
          style={{
            flex: 1,
            marginLeft: spacing.sm,
            color: "#FFFFFF",
            fontSize: 16,
          }}
          placeholder="Search Transactions"
          placeholderTextColor="#A0A0A5"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};
