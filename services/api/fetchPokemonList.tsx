import { TYPE_COLORS } from "@/styles/pokemonTypeColors";
import httpClient from "./http";
import { Pokemon } from "./models/pokemon";

type FetchPokemonListResult = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

export async function fetchPokemonList(offset = 0, limit = 20): Promise<FetchPokemonListResult> {
  try {
    const response = await httpClient.get(`/pokemon?offset=${offset}&limit=${limit}`);
    const { results, count, next, previous } = response.data;

    if (!results) {
      throw new Error("Results not found in API response");
    }

    const colorResponse = await httpClient.get("/pokemon-color");
    const colorData = colorResponse.data.results;

    const colorDetails = await Promise.all(
      colorData.map(async (color: { name: string; url: string }) => {
        const colorDetailResponse = await httpClient.get(color.url);
        return {
          name: color.name,
          pokemon_species: colorDetailResponse.data.pokemon_species,
        };
      })
    );

    const pokemonDetails = await Promise.all(
      results.map(async (pokemon: { name: string; url: string }) => {
        const detailResponse = await httpClient.get(pokemon.url);
        const detailData = detailResponse.data;

        const pokemonColor = colorDetails.find((color) =>
          color.pokemon_species.some((species: { name: string }) => species.name === pokemon.name)
        );

        const mappedPokemon = {
          id: detailData.id,
          name: detailData.name,
          height: detailData.height,
          weight: detailData.weight,
          stats: detailData.stats.map((stat: any) => ({
            base_stat: stat.base_stat,
            effort: stat.effort,
            stat: {
              name: stat.stat.name,
            },
          })),
          type: detailData.types.map((type: any) => ({
            type: {
              name: type.type.name,
              color: TYPE_COLORS[type.type.name] || "#AAA67F",
            },
          })),
          moves: detailData.moves.map((move: any) => ({
            move: {
              name: move.move.name,
            },
          })),
          image: detailData.sprites.front_default,
          color: pokemonColor ? pokemonColor.name : "unknown",
        } as Pokemon;
        return mappedPokemon;
      })
    );

    return {
      count,
      next,
      previous,
      results: pokemonDetails,
    };
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    throw error;
  }
}
