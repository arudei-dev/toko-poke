/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PokemonDetailsByName
// ====================================================

export interface PokemonDetailsByName_pokemon_sprites {
  __typename: "Sprite";
  front_default: string | null;
}

export interface PokemonDetailsByName_pokemon_moves_move {
  __typename: "BaseName";
  name: string | null;
}

export interface PokemonDetailsByName_pokemon_moves {
  __typename: "Move";
  move: PokemonDetailsByName_pokemon_moves_move | null;
}

export interface PokemonDetailsByName_pokemon_types_type {
  __typename: "BaseName";
  name: string | null;
}

export interface PokemonDetailsByName_pokemon_types {
  __typename: "Type";
  type: PokemonDetailsByName_pokemon_types_type | null;
}

export interface PokemonDetailsByName_pokemon {
  __typename: "Pokemon";
  id: number | null;
  name: string | null;
  sprites: PokemonDetailsByName_pokemon_sprites | null;
  moves: (PokemonDetailsByName_pokemon_moves | null)[] | null;
  types: (PokemonDetailsByName_pokemon_types | null)[] | null;
}

export interface PokemonDetailsByName {
  pokemon: PokemonDetailsByName_pokemon | null;
}

export interface PokemonDetailsByNameVariables {
  poke_name: string;
}
