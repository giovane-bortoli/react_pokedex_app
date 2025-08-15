import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../services/api/fetchPokemonList";

export function usePokemonList() {
  return useQuery({
    queryKey: ["pokemonList"],
    queryFn: fetchPokemonList,
  });
}
