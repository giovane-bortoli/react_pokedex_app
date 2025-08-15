import PokemonMovesList from "@/components/pokemonMovesList";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const heightImage = require("../assets/images/weight.png");
const straightenImage = require("../assets/images/straighten.png");

type PokemonAboutProps = {
  weight: number;
  height: number;
  moves: { move: { name: string } }[];
};

export default function PokemonAbout({ weight, height, moves }: PokemonAboutProps) {
  return (
    <View style={styles.aboutContainer}>
      <View style={styles.aboutItem}>
        <View style={styles.valueRow}>
          <Image source={heightImage} style={styles.icon} />
          <Text style={styles.aboutValue}>{weight}</Text>
          <Text style={styles.unitText}> kg</Text>
        </View>
        <View style={styles.aboutLabelSpace}>
          <Text style={styles.aboutLabel}>Weight</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.aboutItem}>
        <View style={styles.valueRow}>
          <Image source={straightenImage} style={styles.icon} />
          <Text style={styles.aboutValue}>{height}</Text>
          <Text style={styles.unitText}> m</Text>
        </View>
        <View style={styles.aboutLabelSpace}>
          <Text style={styles.aboutLabel}>Height</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.aboutItem}>
        <PokemonMovesList moves={moves} />
        <Text style={styles.aboutLabel}>Moves</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  aboutItem: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  valueRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  unitText: {
    color: "#222",
    fontSize: 13,
    marginLeft: 2,
  },
  aboutValue: {
    color: "#222",
    fontSize: 16,
  },
  aboutLabelSpace: {
    paddingTop: 10,
  },
  aboutLabel: {
    color: "#A1A1A1",
    fontSize: 12,
    paddingTop: 10,
  },
  divider: {
    width: 2,
    height: "120%",
    backgroundColor: "#ECECEC",
    marginHorizontal: 8,
  },
});
