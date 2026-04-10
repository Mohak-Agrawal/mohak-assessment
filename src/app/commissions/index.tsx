/**
 * Commission Screen
 * View and manage commission earnings
 */

import {
  AvailableBalanceCard,
  BackHeader,
  Button,
  Card,
  CommissionTimelineCard,
  LifetimeEarningsCard,
  MonthlyAverageCard,
  TargetMilestonesCard,
  Text,
} from "@/components";
import { colors, spacing } from "@/theme";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";

export default function CommissionScreen() {
  // Mock Data matching the screenshot
  const balance = "2,450.00";
  const balanceUsdt = "5,450";

  const totalEarnedInr = "32,000.80";
  const totalEarnedUsd = "3,200.80";
  const withdrawnInr = "7,500.00";
  const withdrawnUsd = "750.00";

  const timeline = [
    { label: "Yesterday", amount: "+$8.42" },
    { label: "This Month (Mar)", amount: "+$380.40" },
    { label: "Last Month (Feb)", amount: "+$310.20" },
  ];

  const milestones = [
    { label: "₹2L", active: false },
    { label: "₹5L", active: false },
    { label: "₹20L", active: true },
    { label: "₹50L", active: false },
    { label: "₹1cr", active: false },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bgPrimary }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.bgPrimary} />

      <BackHeader title="Commissions" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: spacing.lg,
          paddingBottom: spacing["5xl"],
        }}
      >
        {/* Available Balance Card */}
        <View style={{ marginTop: spacing.md }}>
          <AvailableBalanceCard
            balance={balance}
            balanceUsdt={balanceUsdt}
            onWithdraw={() => {}}
            onAddToApp={() => {}}
          />
        </View>

        {/* Total Earned (Lifetime) */}
        <View style={{ marginTop: spacing.lg }}>
          <LifetimeEarningsCard
            totalInr={totalEarnedInr}
            totalUsd={totalEarnedUsd}
            withdrawnInr={withdrawnInr}
            withdrawnUsd={withdrawnUsd}
          />
        </View>

        {/* Commission Timeline */}
        <View style={{ marginTop: spacing.xl }}>
          <Text
            variant="caption"
            color="textTertiary"
            style={{
              textTransform: "uppercase",
              letterSpacing: 0.5,
              marginBottom: spacing.md,
              marginLeft: spacing.xs,
            }}
          >
            Commission Timeline
          </Text>
          <CommissionTimelineCard timeline={timeline} />
        </View>

        {/* Breakdown */}
        <View style={{ marginTop: spacing.xl }}>
          <Text
            variant="caption"
            color="textTertiary"
            style={{
              textTransform: "uppercase",
              letterSpacing: 0.5,
              marginBottom: spacing.md,
              marginLeft: spacing.xs,
            }}
          >
            Breakdown
          </Text>
          <View style={{ flexDirection: "row", gap: spacing.sm }}>
            <Card style={{ flex: 1, paddingVertical: spacing.lg, paddingHorizontal: spacing.sm }}>
              <Text
                variant="caption"
                color="textTertiary"
                style={{ marginBottom: spacing.sm }}
                numberOfLines={1}
              >
                One-Time Earned
              </Text>
              <Text size="xl" weight="semibold" color="textPrimary" numberOfLines={1} adjustsFontSizeToFit>
                $1,800
              </Text>
            </Card>
            <Card style={{ flex: 1, paddingVertical: spacing.lg, paddingHorizontal: spacing.sm }}>
              <Text
                variant="caption"
                color="textTertiary"
                style={{ marginBottom: spacing.sm }}
                numberOfLines={1}
              >
                Recurring Accrued
              </Text>
              <Text size="xl" weight="semibold" color="textPrimary" numberOfLines={1} adjustsFontSizeToFit>
                $650.80
              </Text>
            </Card>
          </View>
        </View>

        {/* Monthly Average */}
        <View style={{ marginTop: spacing.xl }}>
          <Text
            variant="caption"
            color="textTertiary"
            style={{
              textTransform: "uppercase",
              letterSpacing: 0.5,
              marginBottom: spacing.md,
              marginLeft: spacing.xs,
            }}
          >
            Monthly Average
          </Text>
          <MonthlyAverageCard
            avgTotal="320.08"
            months={10}
            avgOneTime="180.00"
            avgRecurring="140.08"
          />
        </View>

        {/* Target Milestones */}
        <View style={{ marginTop: spacing.xl }}>
          <Text
            variant="caption"
            color="textTertiary"
            style={{
              textTransform: "uppercase",
              letterSpacing: 0.5,
              marginBottom: spacing.md,
              marginLeft: spacing.xs,
            }}
          >
            Target Milestones
          </Text>
          <TargetMilestonesCard
            milestones={milestones}
            currentCommission={27720}
          />
        </View>

        {/* Bottom CTA Button */}
        <View style={{ marginTop: spacing.xl }}>
          <Button
            variant="outline-gold"
            size="lg"
            fullWidth
            onPress={() => {}}
            label="View Full Commission History"
            icon={
              <Feather
                name="file-text"
                size={18}
                color={colors.gold}
                style={{ marginRight: 2 }}
              />
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
