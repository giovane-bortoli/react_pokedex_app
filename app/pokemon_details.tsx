import PokemonAbout from "@/components/pokemonAbout";
import StatsBar from "@/components/pokemonStatsBar";
import PokemonTypeTag from "@/components/pokemonTypeTag";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PokemonDetails() {
  const { pokemon } = useLocalSearchParams();
  const router = useRouter();

  if (pokemon === null) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: Pokémon data not found.</Text>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={{ color: "white", fontSize: 18 }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const parsedPokemon = JSON.parse(pokemon as string);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: parsedPokemon.color }}>
      <View style={[styles.header, { backgroundColor: parsedPokemon.color }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerName}>{parsedPokemon.name}</Text>
        </View>
        <Text style={styles.headerNumber}>{`#${parsedPokemon.id.toString().padStart(3, "0")}`}</Text>
      </View>
      <Image source={require("../assets/images/pokeball.png")} style={styles.pokeballBg} resizeMode="contain" />
      <Image source={{ uri: parsedPokemon.image }} style={styles.pokemonImage} />
      <View style={styles.detailsContainer}>
        <PokemonTypeTag types={parsedPokemon.type} color={parsedPokemon.type.color} />
        <Text style={styles.sectionTitle}>About</Text>
        <PokemonAbout weight={parsedPokemon.weight} height={parsedPokemon.height} moves={parsedPokemon.moves} />
        <Text style={styles.description}>testestestestetestestestestetestestestestetestestestestetestestesteste</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>Base Stats</Text>
          <View>
            <StatsBar stats={parsedPokemon.stats} color={parsedPokemon.color} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingHorizontal: 16,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  divider: {
    width: 2,
    height: "100%",
    backgroundColor: "#ECECEC",
    marginHorizontal: 8,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DC0A2D",
  },
  errorText: {
    color: "white",
    fontSize: 18,
    marginBottom: 16,
  },

  backButton: {
    position: "absolute",
    left: 12,

    padding: 6,
  },

  headerNumber: {
    position: "absolute",
    right: 12,

    color: "#FFF",
    fontSize: 16,
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
    marginTop: 100,
    zIndex: 2,
  },
  detailsContainer: {
    backgroundColor: "#FFF",
    borderRadius: 24,
    marginHorizontal: 16,
    padding: 24,
    marginTop: -80,
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

  description: {
    color: "#222",
    fontSize: 14,
    marginVertical: 12,
    textAlign: "left",
  },
  statsContainer: {
    marginTop: 0,
  },
});
