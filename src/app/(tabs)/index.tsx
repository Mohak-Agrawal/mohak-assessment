/**
 * Dashboard Screen
 */
import {
  DashboardBalanceCard,
  DashboardHeader,
  DashboardLifetimeEarningsCard,
  KeyMetricsRow,
  QuickActionsGrid,
  TargetMilestonesCard,
} from "@/components";
import { Section } from "@/components/shared";
import { colors, spacing } from "@/theme";
import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";

const DashboardScreen: React.FC = () => {
  const router = useRouter();
  const commissionBalance = 2450;
  const commissionBalanceUsdt = 5450;
  const oneTimeAmount = 129504;
  const oneTimeSubsidized = "1500.00";
  const recurringAmount = 50616;
  const recurringSubsidized = "650.80";

  const lifetimeEarnings = 4820.6;
  const lifetimeUsdt = 5450;

  const metrics = {
    yesterday: { amount: 317010, subsidy: "8.42" },
    thisMonth: { amount: 317010, subsidy: "380.40" },
    lastMonth: { amount: 317010, subsidy: "310.20" },
  };

  const keyMetrics = [
    { label: "INVESTORS", value: "12", valueColor: "textPrimary" },
    { label: "TOTAL AUM", value: "$48.2K", valueColor: "textPrimary" },
    { label: "CUM. RETURN", value: "+18%", valueColor: "green" },
  ];

  const milestones = [
    { label: "₹2L", active: false },
    { label: "₹5L", active: false },
    { label: "₹20L", active: true },
    { label: "₹50L", active: false },
    { label: "₹1cr", active: false },
  ];

  const quickActions = [
    {
      icon: "arrow-down-circle",
      label: "Withdraw",
      subtitle: "Transfer to bank",
    },
    { icon: "share-2", label: "Share", subtitle: "Invite new client" },
    {
      icon: "file-text",
      label: "Transactions",
      subtitle: "View all Transactions",
    },
    { icon: "bar-chart-2", label: "Commissions", subtitle: "View breakdown" },
    { icon: "package", label: "Baskets", subtitle: "Browse all" },
    { icon: "calculator", label: "Calculator", subtitle: "SIP & returns" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bgPrimary }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.bgPrimary} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User Profile Header */}
        <DashboardHeader name="Rahul Kapoor" username="rahul_kapoor" />

        {/* Commission Balance Card */}
        <Section style={{ paddingTop: spacing.md }}>
          <DashboardBalanceCard
            amount={commissionBalance}
            usdtAmount={commissionBalanceUsdt}
            oneTimeAmount={oneTimeAmount}
            oneTimeSubsidized={oneTimeSubsidized}
            recurringAmount={recurringAmount}
            recurringSubsidized={recurringSubsidized}
          />
        </Section>

        {/* Lifetime Earnings */}
        <Section style={{ paddingTop: spacing.xs }}>
          <DashboardLifetimeEarningsCard
            amount={lifetimeEarnings}
            usdtAmount={lifetimeUsdt}
            metrics={metrics}
          />
        </Section>

        {/* Key Metrics */}
        <Section style={{ paddingTop: spacing.xs }}>
          <KeyMetricsRow metrics={keyMetrics} />
        </Section>

        {/* Target Milestones */}
        <Section style={{ paddingTop: spacing.md }}>
          <TargetMilestonesCard
            milestones={milestones}
            currentCommission={27720}
          />
        </Section>

        {/* Quick Actions */}
        <Section style={{ paddingTop: spacing.md }}>
          <QuickActionsGrid
            actions={quickActions}
            onActionPress={(action) => {
              if (action.label === "Commissions") {
                router.push("/commissions");
              }
            }}
          />
        </Section>

        {/* Bottom Spacing */}
        <View style={{ height: spacing["5xl"] }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;
