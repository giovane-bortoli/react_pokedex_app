import httpClient from "./http";
import { Pokemon } from "./models/pokemon";

export async function fetchPokemonList(): Promise<Pokemon[]> {
  try {
    // Faz a requisição inicial para obter a lista de Pokémon
    const response = await httpClient.get("/pokemon");
    console.log("API Response Data:", response.data);
    const results = response.data.results;

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
        console.log("Details data:", detailData);

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
            },
          })),
          image: detailData.sprites.front_default,
          color: pokemonColor ? pokemonColor.name : "unknown",
        } as Pokemon;
        console.log("Mapped Pokémon:", JSON.stringify(mappedPokemon, null, 2));
        return mappedPokemon;
      })
    );

    return pokemonDetails;
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    throw error;
  }
}
