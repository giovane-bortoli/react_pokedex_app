type PokemonStats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
};
type PokemonMoves = {
  moves: string;
  move: {
    name: string;
  };
};

type PokemonType = {
  type: {
    color: string;
    name: string;
  };
};

type PokemonColorBasedOnSpecie = {
  color: string;
  pokemon_species: {
    name: string;
  };
};

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: PokemonStats[];
  type: PokemonType[];
  moves: PokemonMoves[];
  image: string;
  color: PokemonColorBasedOnSpecie[];
}
