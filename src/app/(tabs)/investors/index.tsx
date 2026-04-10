/**
 * Investors List Screen
 * Search, filter, and browse investor portfolio
 */

import {
  BackHeader,
  InvestorFilters,
  InvestorItem,
  InvestorSearchBar,
} from "@/components";
import { colors } from "@/theme";
import { useRouter } from "expo-router";
import React, { useCallback, useMemo, useState } from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";

interface Investor {
  id: string;
  name: string;
  joinedDate: string;
  invested: number;
  currentValue: number;
  returnPercentage: number;
  status: "active" | "dormant" | "kyc_pending";
}

// Mock data matching the screenshot exactly
const mockInvestors: Investor[] = [
  {
    id: "1",
    name: "Priya Sharma",
    joinedDate: "15 Mar 2026",
    invested: 10000,
    currentValue: 11800,
    returnPercentage: 18,
    status: "active",
  },
  {
    id: "2",
    name: "Amit Kumar",
    joinedDate: "02 Feb 2026",
    invested: 5000,
    currentValue: 5750,
    returnPercentage: 15,
    status: "active",
  },
  {
    id: "3",
    name: "Neha Patel",
    joinedDate: "20 Jan 2026",
    invested: 8000,
    currentValue: 9520,
    returnPercentage: 19,
    status: "dormant",
  },
  {
    id: "4",
    name: "Vikram Gupta",
    joinedDate: "10 Dec 2025",
    invested: 2000,
    currentValue: 2000,
    returnPercentage: 0,
    status: "kyc_pending",
  },
];

export const InvestorsScreen: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setRefreshing(false);
  }, []);

  const filters = [
    { id: "all", label: "All" },
    { id: "active", label: "Active (13)" },
    { id: "dormant", label: "Dormant (1)" },
  ];

  // Filter and search logic
  const filteredInvestors = useMemo(() => {
    return mockInvestors.filter((investor) => {
      const matchesSearch = investor.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      let matchesFilter = true;
      if (activeFilter !== "all") {
        matchesFilter = investor.status === activeFilter;
      }

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const renderInvestorItem = useCallback(
    ({ item }: { item: Investor }) => (
      <InvestorItem
        {...item}
        onPress={(id) => router.push(`/(tabs)/investors/${id}`)}
      />
    ),
    [router],
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bgPrimary }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.bgPrimary} />

      {/* Custom Header */}
      <BackHeader title="My Investors" />

      <FlatList
        data={filteredInvestors}
        renderItem={renderInvestorItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.gold}
          />
        }
        ListHeaderComponent={
          <View>
            <InvestorSearchBar
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <InvestorFilters
              filters={filters}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default InvestorsScreen;
