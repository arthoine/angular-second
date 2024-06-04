export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Cry {
  latest: string;
  legacy: string;
}

export interface Form {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: Array<{
    level_learned_at: number;
    version_group: {
      name: string;
      url: string;
    };
    move_learn_method: {
      name: string;
      url: string;
    };
  }>;
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprite {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonUnique {
  abilities: Ability[];
  base_experience: number;
  cries: Cry;
  forms: Form[];
  game_indices: GameIndex[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: Species;
  sprites: Sprite;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface PokemonUniqueResponse {
  results: PokemonUnique;
}

export interface PokemonList {
  name: string;
  url: string;
}
export interface PokemonResponse {
  results: PokemonList[];
}

export interface AbilityList {
  name: string;
  url: string;
}
export interface AbilityResponse {
  results: AbilityList[];
}
