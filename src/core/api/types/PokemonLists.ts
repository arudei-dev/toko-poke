/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PokemonLists
// ====================================================

export interface PokemonLists_pokemons_results {
  __typename: "PokemonItem";
  id: number | null;
  url: string | null;
  name: string | null;
  image: string | null;
}

export interface PokemonLists_pokemons {
  __typename: "PokemonList";
  count: number | null;
  next: string | null;
  previous: string | null;
  status: boolean | null;
  message: string | null;
  results: (PokemonLists_pokemons_results | null)[] | null;
}

export interface PokemonLists {
  pokemons: PokemonLists_pokemons | null;
}

export interface PokemonListsVariables {
  limit?: number | null;
  offset?: number | null;
}
