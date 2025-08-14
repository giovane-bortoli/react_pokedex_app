import PokemonStatsBar from "@/components/pokemonStatsBar";
import PokemonTypeTag from "@/components/pokemonTypeTag";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PokemonDetails() {
  const { name = "Charmander", number = "#004" } = useLocalSearchParams();
  const router = useRouter();
  const data = {
    name: name as string,
    number: number as string,
    color: "#F57D31",
    image: require("../assets/images/Charmander.png"),
    types: [{ label: "Fire", color: "#F57D31" }],
    weight: "8,5 kg",
    height: "0,6 m",
    moves: ["Mega-Punch", "Fire-Punch"],
    description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    stats: [
      { label: "HP", value: 39, color: "#F57D31" },
      { label: "ATK", value: 52, color: "#F57D31" },
      { label: "DEF", value: 43, color: "#F57D31" },
      { label: "SATK", value: 60, color: "#F57D31" },
      { label: "SDEF", value: 50, color: "#F57D31" },
      { label: "SPD", value: 65, color: "#F57D31" },
    ],
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: data.color }}>
      <View style={[styles.header, { backgroundColor: data.color }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerName}>{data.name}</Text>
        </View>
        <Text style={styles.headerNumber}>{data.number}</Text>
      </View>
      <Image source={require("../assets/images/pokeball.png")} style={styles.pokeballBg} resizeMode="contain" />
      <Image source={data.image} style={styles.pokemonImage} />
      <View style={styles.detailsContainer}>
        <PokemonTypeTag label={data.types[0].label} color={data.types[0].color} />

        <Text style={styles.sectionTitle}>About</Text>
        <View style={styles.aboutRow}>
          <View style={styles.aboutItem}>
            <Text style={styles.aboutValue}>{data.weight}</Text>
            <Text style={styles.aboutLabel}>Weight</Text>
          </View>
          <View style={styles.aboutItem}>
            <Text style={styles.aboutValue}>{data.height}</Text>
            <Text style={styles.aboutLabel}>Height</Text>
          </View>
          <View style={styles.aboutItem}>
            <Text style={styles.aboutValue}>{data.moves.join("\n")}</Text>
            <Text style={styles.aboutLabel}>Moves</Text>
          </View>
        </View>
        <Text style={styles.description}>{data.description}</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>Base Stats</Text>
          <View>
            {data.stats.map((stat) => (
              <PokemonStatsBar key={stat.label} label={stat.label} value={stat.value} color={stat.color} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 48,
    paddingHorizontal: 16,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  backButton: {
    position: "absolute",
    left: 12,
    top: 52,
    padding: 6,
  },

  headerNumber: {
    position: "absolute",
    right: 12,
    top: 60,
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerName: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
    paddingRight: 150,
    paddingBottom: 16,
  },

  pokeballBg: {
    position: "absolute",
    top: 150,
    left: 140,
    right: 0,
    height: 250,
    width: 250,
    opacity: 0.08,
    zIndex: 0,
    alignSelf: "center",
  },
  pokemonImage: {
    width: 250,
    height: 250,
    alignSelf: "center",
    marginTop: 120,
    zIndex: 2,
  },
  detailsContainer: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    marginHorizontal: 16,
    padding: 24,
    marginTop: -70,
    flexDirection: "column",
  },

  sectionTitle: {
    color: "#F57D31",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 16,
    marginBottom: 8,
    justifyContent: "center",
    textAlign: "center",
  },
  aboutRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  aboutItem: {
    alignItems: "center",
    flex: 1,
  },
  aboutValue: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 2,
  },
  aboutLabel: {
    color: "#A1A1A1",
    fontSize: 12,
    alignItems: "center",
  },
  description: {
    color: "#222",
    fontSize: 14,
    marginVertical: 12,
    textAlign: "left",
  },
  statsContainer: {
    flex: 1,
    marginTop: 0,
  },
});
