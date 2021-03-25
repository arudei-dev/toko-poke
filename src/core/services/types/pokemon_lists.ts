/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: pokemon_lists
// ====================================================

export interface pokemon_lists_pokemons_results {
  __typename: "PokemonItem";
  id: number | null;
  url: string | null;
  name: string | null;
  image: string | null;
}

export interface pokemon_lists_pokemons {
  __typename: "PokemonList";
  count: number | null;
  next: string | null;
  previous: string | null;
  status: boolean | null;
  message: string | null;
  results: (pokemon_lists_pokemons_results | null)[] | null;
}

export interface pokemon_lists {
  pokemons: pokemon_lists_pokemons | null;
}

export interface pokemon_listsVariables {
  limit?: number | null;
  offset?: number | null;
}
