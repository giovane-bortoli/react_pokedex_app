import { useState } from "react";
import { StyleSheet, View } from "react-native";
import PokemonCard from "./components/pokemonCard";
import SearchBar from "./components/searchBar";
import SortButton from "./components/sortButton";

const mockPokemons = [
  { name: "Charmander", number: "#004", image: require("../assets/images/Charmander.png") },
  { name: "Charmander", number: "#004", image: require("../assets/images/Charmander.png") },
  { name: "Charmander", number: "#004", image: require("../assets/images/Charmander.png") },
  { name: "Charmander", number: "#004", image: require("../assets/images/Charmander.png") },
  { name: "Charmander", number: "#004", image: require("../assets/images/Charmander.png") },
  { name: "Charmander", number: "#004", image: require("../assets/images/Charmander.png") },
  { name: "Charmander", number: "#004", image: require("../assets/images/Charmander.png") },
  { name: "Charmander", number: "#004", image: require("../assets/images/Charmander.png") },
  { name: "Charmander", number: "#004", image: require("../assets/images/Charmander.png") },
];

export default function Index() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("number" as "number" | "name");
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <SearchBar value={search} onChangeText={setSearch} />
        <SortButton value={sort} onChange={setSort} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.grid}>
          {mockPokemons.map((p, i) => (
            <PokemonCard key={i} name={p.name} number={p.number} image={p.image} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#DC0A2D",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bodyContainer: {
    flex: 1,
    width: "95%",
    marginTop: 24,
    marginBottom: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 8,
  },
});
