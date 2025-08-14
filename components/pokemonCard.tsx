import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type PokemonCardProps = {
  name: string;
  number: string;
  image: any;
};

export default function PokemonCard({ name, number, image }: PokemonCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.number}>{number}</Text>
      <View style={styles.ground} />
      <Image source={image} style={styles.image} resizeMode="contain" />

      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#F6F7F9",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    minWidth: 100,
    maxWidth: 120,
  },
  number: {
    alignSelf: "flex-end",
    color: "#A1A1A1",
    fontWeight: "bold",
    fontSize: 13,
    marginRight: 8,
    marginBottom: 4,
  },
  image: {
    width: 64,
    height: 64,
    marginBottom: 8,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#222",
    marginTop: 4,
  },
  ground: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
    backgroundColor: "#ECECEC",
    borderRadius: 16,
    zIndex: 0,
  },
});
