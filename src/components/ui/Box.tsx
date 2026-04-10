/**
 * Box Component
 * Base view wrapper with flexible styling
 */

import React from "react";
import { View, ViewStyle } from "react-native";

interface BoxProps {
  children: React.ReactNode;
  style?: ViewStyle;
  row?: boolean;
  centered?: boolean;
  gap?: number;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  marginTop?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  testID?: string;
}

export const Box: React.FC<BoxProps> = ({
  children,
  style,
  row,
  centered,
  gap,
  padding,
  paddingHorizontal,
  paddingVertical,
  marginTop,
  marginBottom,
  marginHorizontal,
  testID,
}) => {
  const baseStyle: ViewStyle = {
    flexDirection: row ? "row" : "column",
    justifyContent: centered ? "center" : "flex-start",
    alignItems: centered ? "center" : "stretch",
    gap,
    padding,
    paddingHorizontal,
    paddingVertical,
    marginTop,
    marginBottom,
    marginHorizontal,
  };

  return (
    <View style={[baseStyle, style]} testID={testID}>
      {children}
    </View>
  );
};
