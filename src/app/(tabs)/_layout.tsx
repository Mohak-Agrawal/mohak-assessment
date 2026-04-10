import { colors } from "@/theme";
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.bgSecondary,
    borderTopColor: colors.border,
    borderTopWidth: 1,
    // Removed fixed height. Let React Navigation size it based on padding.
    // Adjust padding based on platform so it respects iOS home indicators.
    paddingTop: 1,
    paddingBottom: Platform.OS === "ios" ? 28 : 8,
    minHeight: Platform.OS === "ios" ? 85 : 65,
  },
});

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.gold,
        tabBarInactiveTintColor: colors.textTertiary,
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "400",
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="investors/index"
        options={{
          tabBarLabel: "Investors",
          tabBarIcon: ({ color }) => (
            <Feather name="users" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="earnings"
        options={{
          tabBarLabel: "Earnings",
          tabBarIcon: ({ color }) => (
            <Feather name="credit-card" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="investors/[id]"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
