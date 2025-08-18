import { FONTS } from "@/styles/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type MovesListProps = {
  moves: { move: { name: string } }[];
};

export default function PokemonMovesList({ moves }: MovesListProps) {
  return (
    <View>
      {moves.slice(0, 2).map((move, index) => (
        <Text key={index} style={styles.moveText}>
          {move.move.name}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  moveText: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: "#222",
    textTransform: "capitalize",
  },
});
