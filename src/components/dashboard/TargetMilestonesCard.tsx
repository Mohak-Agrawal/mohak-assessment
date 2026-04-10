import { colors, radius, spacing } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";
import { Card } from "../ui/Card";
import { Text } from "../ui/Text";

interface Milestone {
  label: string;
  active: boolean;
}

interface TargetMilestonesCardProps {
  milestones: Milestone[];
  currentCommission: number;
}

export const TargetMilestonesCard: React.FC<TargetMilestonesCardProps> = ({
  milestones,
  currentCommission,
}) => {
  return (
    <Card style={{ gap: spacing.md }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text size="base" weight="semibold" color="textPrimary">
          This Month's Commission
        </Text>
        <Text size="xl" weight="bold" color="gold">
          ₹{currentCommission.toLocaleString("en-IN")}
        </Text>
      </View>

      <View style={{ marginTop: spacing.xs }}>
        <View
          style={{
            height: 6,
            backgroundColor: "#2A2A2A",
            borderRadius: radius.md,
            overflow: "hidden",
            marginBottom: spacing.sm,
          }}
        >
          <LinearGradient
            colors={["#FEE48A", "#FEBE2F"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              height: "100%",
              width: "45%",
              borderRadius: radius.md,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text variant="caption" color="textTertiary">
            ₹0
          </Text>
          <Text variant="caption" color="textTertiary">
            14% • ₹1,72,280 to reach ₹2L
          </Text>
          <Text variant="caption" color="textTertiary">
            ₹2L
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginTop: spacing.xl,
        }}
      >
        {milestones.map((m, index) => {
          const activeIndex = milestones.findIndex(
            (milestone) => milestone.active,
          );
          const isPassed = index < activeIndex;
          const isActive = m.active;
          const isLast = index === milestones.length - 1;
          const lineIsGold = index < activeIndex;

          return (
            <React.Fragment key={index}>
              <View
                style={{
                  zIndex: 1,
                  backgroundColor: "#1C1C1E",
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: isActive ? colors.gold : "#333",
                  paddingVertical: 8,
                  paddingHorizontal: 4,
                  width: "18%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 7,
                    borderWidth: 2,
                    borderColor: "#444",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: spacing.xs,
                    backgroundColor: "#1C1C1E",
                  }}
                >
                  <View
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: isActive ? colors.gold : "#555",
                    }}
                  />
                </View>
                <Text
                  variant="caption"
                  color={isActive || isPassed ? "textPrimary" : "textTertiary"}
                  style={{ fontSize: 13 }}
                >
                  {m.label}
                </Text>
              </View>

              {!isLast && (
                <View
                  style={{
                    flex: 1,
                    height: 2,
                    backgroundColor: lineIsGold ? colors.gold : "#333",
                    marginTop: 14,
                    marginLeft: -4,
                    marginRight: -4,
                    zIndex: 0,
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </View>
    </Card>
  );
};
