import CustomLoadingComponent from "@/components/customLoadingComponent";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PokemonCard from "../components/pokemonCard";
import SearchBar from "../components/searchBar";
import SortButton from "../components/sortButton";
import { usePokemonList } from "../hooks/usePokemonList";

export default function Index() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("number" as "number" | "name");
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();

  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } = usePokemonList();

  const pokemons = data?.pages.flatMap((page) => page.results) || [];

  const filteredPokemons = pokemons.filter((pokemon) => {
    if (!search) return true;
    if (sort === "number") {
      return pokemon.id.toString().includes(search.replace(/\D/g, ""));
    } else {
      return pokemon.name.toLowerCase().includes(search.toLowerCase());
    }
  });

  const handleRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  if (isLoading) return <CustomLoadingComponent />;
  if (error) return <Text>Error loading Pokémon data</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <SearchBar value={search} onChangeText={setSearch} mode={sort} />
        <SortButton value={sort} onChange={setSort} />
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          data={filteredPokemons}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          contentContainerStyle={styles.grid}
          renderItem={({ item: pokemon }) => (
            <TouchableOpacity
              key={pokemon.id}
              activeOpacity={0.8}
              style={styles.gridItem}
              onPress={() =>
                router.push({
                  pathname: "/pokemon_details",
                  params: {
                    pokemon: JSON.stringify(pokemon),
                  },
                })
              }
            >
              <PokemonCard
                name={pokemon.name}
                number={`#${String(pokemon.id).padStart(3, "0")}`}
                image={pokemon.image}
              />
            </TouchableOpacity>
          )}
          onEndReached={() => {
            if (hasNextPage && !isFetchingNextPage) fetchNextPage();
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={isFetchingNextPage ? <CustomLoadingComponent size="small" /> : null}
          ListFooterComponentStyle={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 16,
            flexDirection: "column",
            display: "flex",
          }}
        />
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
    marginBottom: 16,
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
    padding: 8,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  gridItem: {
    flexBasis: "33%",
    marginBottom: 12,
    paddingHorizontal: 4,
    alignItems: "center",
  },
  footerLoading: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
});
