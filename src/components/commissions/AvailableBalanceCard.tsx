import { Card, Text } from "@/components/ui";
import { colors, radius, spacing } from "@/theme";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity, View } from "react-native";

interface AvailableBalanceCardProps {
  balance: string;
  balanceUsdt: string;
  onWithdraw?: () => void;
  onAddToApp?: () => void;
}

export const AvailableBalanceCard: React.FC<AvailableBalanceCardProps> = ({
  balance,
  balanceUsdt,
  onWithdraw,
  onAddToApp,
}) => {
  return (
    <Card style={{ alignItems: "center", paddingVertical: spacing.xl }}>
      <Text
        variant="caption"
        color="textTertiary"
        style={{ textTransform: "uppercase", letterSpacing: 0.5 }}
      >
        Available Balance
      </Text>

      <View
        style={{
          alignItems: "center",
          marginTop: spacing.sm,
          marginBottom: spacing.xs,
        }}
      >
        <MaskedView
          maskElement={
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text
                size="5xl"
                weight="bold"
                style={{ backgroundColor: "transparent" }}
              >
                ₹{balance}
              </Text>
            </View>
          }
        >
          <LinearGradient
            colors={["#FDD990", "#FDBD30"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text size="5xl" weight="bold" style={{ opacity: 0 }}>
              ₹{balance}
            </Text>
          </LinearGradient>
        </MaskedView>

        <Text size="lg" color="textTertiary" style={{ marginTop: 4 }}>
          {balanceUsdt} USDT
        </Text>
      </View>

      <TouchableOpacity
        onPress={onWithdraw}
        style={{
          width: "100%",
          marginTop: spacing.xl,
          paddingVertical: 14,
          borderRadius: radius.md,
          borderWidth: 1,
          borderColor: "rgba(254, 190, 47, 0.4)",
          alignItems: "center",
        }}
      >
        <Text color="textSecondary" weight="semibold">
          Withdraw to Bank
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onAddToApp} style={{ marginTop: spacing.lg }}>
        <Text
          variant="bodySmall"
          color="textTertiary"
          style={{ textDecorationLine: "underline" }}
        >
          Add to your Investor App
        </Text>
      </TouchableOpacity>
    </Card>
  );
};
