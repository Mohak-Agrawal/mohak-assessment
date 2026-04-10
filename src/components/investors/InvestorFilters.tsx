import { Text } from "@/components";
import { colors, spacing } from "@/theme";
import React from "react";
import { TouchableOpacity, View } from "react-native";

interface FilterOption {
  id: string;
  label: string;
}

interface InvestorFiltersProps {
  filters: FilterOption[];
  activeFilter: string;
  onFilterChange: (id: string) => void;
}

export const InvestorFilters: React.FC<InvestorFiltersProps> = ({
  filters,
  activeFilter,
  onFilterChange,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: spacing.lg,
        marginBottom: spacing.lg,
        gap: spacing.sm,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {filters.map((filter) => {
        const isActive = activeFilter === filter.id;
        return (
          <TouchableOpacity
            key={filter.id}
            onPress={() => onFilterChange(filter.id)}
            style={{
              paddingHorizontal: spacing.lg,
              paddingVertical: 8,
              backgroundColor: "#1C1C1E",
              borderRadius: 12,
              borderWidth: 1,
              borderColor: isActive ? colors.gold : "transparent",
            }}
          >
            <Text
              variant="bodySmall"
              style={{
                color: isActive ? "#FFFFFF" : "#A0A0A5",
              }}
            >
              {filter.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
