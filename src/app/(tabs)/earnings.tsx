import { colors } from "@/theme";
import { Text, View } from "react-native";

export default function EarningsScreen() {
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
        Earnings Screen
      </Text>
      <Text style={{ color: colors.textTertiary, marginTop: 8 }}>
        Placeholder Content
      </Text>
    </View>
  );
}
