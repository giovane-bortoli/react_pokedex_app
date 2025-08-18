import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

type CustomLoadingComponentProps = {
  size?: number | "small" | "large";
  style?: object;
};

export default function CustomLoadingComponent({ size = "large", style = {} }: CustomLoadingComponentProps) {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color="#DC0A2D" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
