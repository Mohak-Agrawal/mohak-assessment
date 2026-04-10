/**
 * Investor Detail Screen
 * Detailed view of individual investor with performance and commissions
 */

import { BackHeader, Button, Card, Text } from "@/components";
import { colors, spacing } from "@/theme";
import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";

interface InvestorDetailScreenProps {
  onBack?: () => void;
}

export const InvestorDetailScreen: React.FC<InvestorDetailScreenProps> = ({
  onBack,
}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bgPrimary }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.bgPrimary} />

      <BackHeader title="Investors Detail" onBack={onBack} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Profile Section */}
        <View style={{ paddingHorizontal: spacing.lg, marginTop: spacing.sm }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <View>
              <Text size="2xl" weight="bold" color="textPrimary">
                Priya Sharma
              </Text>
              <Text
                variant="caption"
                color="textTertiary"
                style={{ marginTop: 2 }}
              >
                Joined 15 Mar 2026
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "rgba(74, 222, 128, 0.15)",
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 12,
              }}
            >
              <View
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: 2,
                  backgroundColor: "#4ADE80",
                  marginRight: 6,
                }}
              />
              <Text
                variant="caption"
                style={{ color: "#4ADE80", fontWeight: "600" }}
              >
                KYC Verified
              </Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View
            style={{
              flexDirection: "row",
              gap: spacing.md,
              marginTop: spacing.lg,
            }}
          >
            <Button
              variant="outline-gold"
              fullWidth
              style={{
                flex: 1,
              }}
              onPress={() => {}}
              label="Call Investor"
              icon={
                <Feather
                  name="phone-call"
                  size={16}
                  color={colors.gold}
                  style={{ marginRight: 2 }}
                />
              }
            />
            <Button
              variant="outline-gold"
              fullWidth
              style={{
                flex: 1,
              }}
              onPress={() => {}}
              label="Message"
              icon={
                <Feather
                  name="message-circle"
                  size={16}
                  color={colors.gold}
                  style={{ marginRight: 2 }}
                />
              }
            />
          </View>
        </View>

        {/* Investment Card */}
        <View style={{ paddingHorizontal: spacing.lg, marginTop: spacing.xl }}>
          <Card>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: spacing.lg,
              }}
            >
              <View>
                <Text size="3xl" weight="bold" color="textPrimary">
                  $10,000
                </Text>
                <Text
                  variant="caption"
                  color="textTertiary"
                  style={{
                    marginTop: 4,
                    textTransform: "uppercase",
                    fontSize: 10,
                    letterSpacing: 0.5,
                  }}
                >
                  Total Invested
                </Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text size="3xl" weight="bold" style={{ color: "#4ADE80" }}>
                  $11,800
                </Text>
                <Text
                  variant="caption"
                  color="textTertiary"
                  style={{
                    marginTop: 4,
                    textTransform: "uppercase",
                    fontSize: 10,
                    letterSpacing: 0.5,
                  }}
                >
                  Current Value
                </Text>
              </View>
            </View>

            <View
              style={{
                height: 1,
                backgroundColor: "#2A2A2A",
                marginBottom: spacing.md,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: spacing.md,
              }}
            >
              <Text variant="bodySmall" color="textTertiary">
                Total Returns
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather
                  name="trending-up"
                  size={14}
                  color="#4ADE80"
                  style={{ marginRight: 4 }}
                />
                <Text
                  variant="bodyMedium"
                  weight="semibold"
                  style={{ color: "#4ADE80" }}
                >
                  +$1,800 (+18%)
                </Text>
              </View>
            </View>

            <View
              style={{
                height: 1,
                backgroundColor: "#2A2A2A",
                marginBottom: spacing.md,
              }}
            />

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  variant="caption"
                  color="textTertiary"
                  style={{
                    marginBottom: 4,
                    textTransform: "uppercase",
                    fontSize: 10,
                    letterSpacing: 0.5,
                  }}
                >
                  Wallet Balance
                </Text>
                <Text size="lg" weight="bold" color="gold">
                  $1,250.00 USDT
                </Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text
                  variant="caption"
                  color="textTertiary"
                  style={{
                    marginBottom: 4,
                    textTransform: "uppercase",
                    fontSize: 10,
                    letterSpacing: 0.5,
                  }}
                >
                  Active Investments
                </Text>
                <Text size="lg" weight="bold" color="textPrimary">
                  2
                </Text>
              </View>
            </View>
          </Card>
        </View>

        {/* Commission Card */}
        <View style={{ paddingHorizontal: spacing.lg, marginTop: spacing.md }}>
          <Card goldenBorder>
            <Text
              size="lg"
              weight="semibold"
              color="gold"
              style={{ marginBottom: spacing.lg }}
            >
              Your Commission (This Investor)
            </Text>

            <View style={{ flexDirection: "row", marginBottom: spacing.lg }}>
              <View style={{ flex: 1 }}>
                <Text
                  variant="caption"
                  color="textTertiary"
                  style={{ marginBottom: 4 }}
                >
                  Total Earned
                </Text>
                <Text size="2xl" weight="bold" color="textPrimary">
                  $245.80
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  variant="caption"
                  color="textTertiary"
                  style={{ marginBottom: 4 }}
                >
                  One-Time Earned
                </Text>
                <Text size="2xl" weight="bold" color="textPrimary">
                  $200.00
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginBottom: spacing.lg }}>
              <View style={{ flex: 1 }}>
                <Text
                  variant="caption"
                  color="textTertiary"
                  style={{ marginBottom: 4 }}
                >
                  Recurring (Monthly)
                </Text>
                <Text size="xl" weight="bold" color="textPrimary">
                  $15.27
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  variant="caption"
                  color="textTertiary"
                  style={{ marginBottom: 4 }}
                >
                  Recurring Accrued
                </Text>
                <Text size="xl" weight="bold" color="textPrimary">
                  $45.80
                </Text>
              </View>
            </View>

            {/* Projected Remaining Card */}
            <Card
              goldenGradient
              padding={spacing.md}
              style={{
                borderTopWidth: 1,
                borderColor: "rgba(254, 190, 47, 0.3)",
              }}
            >
              <Text
                variant="caption"
                color="gold"
                style={{
                  textTransform: "uppercase",
                  fontSize: 10,
                  letterSpacing: 0.5,
                  marginBottom: spacing.md,
                }}
              >
                Projected Remaining Commission
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <View>
                  <Text
                    variant="caption"
                    color="textTertiary"
                    style={{ marginBottom: 4 }}
                  >
                    Remaining Term
                  </Text>
                  <Text size="xl" color="textPrimary">
                    9 months
                  </Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text
                    variant="caption"
                    color="textTertiary"
                    style={{ marginBottom: 4 }}
                  >
                    Projected Recurring
                  </Text>
                  <Text size="xl" color="gold">
                    $137.43
                  </Text>
                </View>
              </View>
            </Card>
          </Card>
        </View>

        {/* Investments Header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: spacing.lg,
            marginTop: spacing.xl,
            marginBottom: spacing.md,
          }}
        >
          <Text
            variant="caption"
            color="textTertiary"
            style={{ textTransform: "uppercase", letterSpacing: 0.5 }}
          >
            Investments
          </Text>
          <TouchableOpacity>
            <Text variant="bodySmall" weight="semibold" color="gold">
              View All
            </Text>
          </TouchableOpacity>
        </View>

        {/* Investment Items */}
        <View style={{ paddingHorizontal: spacing.lg, gap: spacing.md }}>
          {/* Lumpsum Card */}
          <Card>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: spacing.lg,
              }}
            >
              <View>
                <Text size="lg" weight="semibold" color="textPrimary">
                  Basket Alpha
                </Text>
                <Text
                  variant="caption"
                  color="textTertiary"
                  style={{ marginTop: 2 }}
                >
                  Premium Gold Investment
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "rgba(254, 190, 47, 0.5)",
                  backgroundColor: "rgba(254, 190, 47, 0.1)",
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    color: colors.gold,
                    fontSize: 10,
                    fontWeight: "600",
                  }}
                >
                  LUMPSUM
                </Text>
              </View>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  variant="caption"
                  color="textTertiary"
                  style={{
                    marginBottom: 4,
                    textTransform: "uppercase",
                    fontSize: 10,
                  }}
                >
                  Invested
                </Text>
                <Text size="lg" color="textPrimary">
                  $7,000
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  variant="caption"
                  color="textTertiary"
                  style={{
                    marginBottom: 4,
                    textTransform: "uppercase",
                    fontSize: 10,
                  }}
                >
                  Current
                </Text>
                <Text size="lg" style={{ color: "#4ADE80" }}>
                  $8,260
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Text
                  variant="caption"
                  color="textTertiary"
                  style={{
                    marginBottom: 4,
                    textTransform: "uppercase",
                    fontSize: 10,
                  }}
                >
                  Maturity
                </Text>
                <Text size="lg" color="textPrimary">
                  9 mo
                </Text>
              </View>
            </View>
          </Card>

          {/* SIP Card */}
          <Card>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: spacing.lg,
              }}
            >
              <View>
                <Text size="lg" weight="semibold" color="textPrimary">
                  Basket Alpha
                </Text>
                <Text
                  variant="caption"
                  color="textTertiary"
                  style={{ marginTop: 2 }}
                >
                  Systematic Investment Plan
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "rgba(96, 165, 250, 0.5)",
                  backgroundColor: "rgba(96, 165, 250, 0.15)",
                  paddingHorizontal: 12,
                  paddingVertical: 4,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{ color: "#60A5FA", fontSize: 10, fontWeight: "600" }}
                >
                  SIP
                </Text>
              </View>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  variant="caption"
                  color="textTertiary"
                  style={{
                    marginBottom: 4,
                    textTransform: "uppercase",
                    fontSize: 10,
                  }}
                >
                  Monthly
                </Text>
                <Text size="lg" color="textPrimary">
                  $500
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  variant="caption"
                  color="textTertiary"
                  style={{
                    marginBottom: 4,
                    textTransform: "uppercase",
                    fontSize: 10,
                  }}
                >
                  Total In
                </Text>
                <Text size="lg" color="textPrimary">
                  $500
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Text
                  variant="caption"
                  color="textTertiary"
                  style={{
                    marginBottom: 4,
                    textTransform: "uppercase",
                    fontSize: 10,
                  }}
                >
                  Maturity
                </Text>
                <Text size="lg" color="textPrimary">
                  11 mo
                </Text>
              </View>
            </View>
          </Card>
        </View>

        {/* Download Button */}
        <View style={{ paddingHorizontal: spacing.lg, marginTop: spacing.xl }}>
          <Button
            variant="outline-gold"
            size="lg"
            fullWidth
            onPress={() => {}}
            label="Download Portfolio Summary"
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
};

export default InvestorDetailScreen;
