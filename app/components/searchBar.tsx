import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export default function SearchBar({ value, onChangeText, placeholder = "Search" }: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/search.png")} // Adicione um ícone de lupa nesta pasta
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
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
  },
});
