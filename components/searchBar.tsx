import { FONTS } from "@/styles/theme";
import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;

  mode: "name" | "number";
};

export default function SearchBar({ value, onChangeText, mode }: SearchBarProps) {
  const handleChange = (text: string) => {
    if (mode === "number") {
      onChangeText(text.replace(/\D/g, ""));
    } else {
      onChangeText(text.replace(/[^a-zA-Z]/g, ""));
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/search.png")} style={styles.icon} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={mode === "number" ? "Search by number" : "Search by name"}
        keyboardType={mode === "number" ? "numeric" : "default"}
        autoCapitalize="none"
        placeholderTextColor="#BDBDBD"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 280,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginLeft: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "#DC0A2D",
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    fontFamily: FONTS.regular,
  },
});
