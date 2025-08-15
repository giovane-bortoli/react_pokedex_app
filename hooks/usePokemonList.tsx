import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../services/api/fetchPokemonList";

export function usePokemonList() {
  return useInfiniteQuery({
    queryKey: ["pokemonList"],
    queryFn: ({ pageParam = 0 }) => fetchPokemonList(pageParam, 20),
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        try {
          const url = new URL(lastPage.next);
          const offset = url.searchParams.get("offset");
          return offset ? Number(offset) : undefined;
        } catch {
          return undefined;
        }
      }
      return undefined;
    },
    initialPageParam: 0,
  });
}
