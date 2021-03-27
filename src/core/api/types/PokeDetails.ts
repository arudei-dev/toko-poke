/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PokeDetails
// ====================================================

export interface PokeDetails_sprites {
  __typename: "Sprite";
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface PokeDetails_types_type {
  __typename: "BaseName";
  name: string | null;
}

export interface PokeDetails_types {
  __typename: "Type";
  type: PokeDetails_types_type | null;
}

export interface PokeDetails_species {
  __typename: "BaseName";
  url: string | null;
  name: string | null;
}

export interface PokeDetails_stats_stat {
  __typename: "BaseName";
  url: string | null;
  name: string | null;
}

export interface PokeDetails_stats {
  __typename: "Stat";
  base_stat: number | null;
  effort: number | null;
  stat: PokeDetails_stats_stat | null;
}

export interface PokeDetails_moves_move {
  __typename: "BaseName";
  name: string | null;
}

export interface PokeDetails_moves {
  __typename: "Move";
  move: PokeDetails_moves_move | null;
}

export interface PokeDetails {
  __typename: "Pokemon";
  id: number | null;
  name: string | null;
  sprites: PokeDetails_sprites | null;
  weight: number | null;
  types: (PokeDetails_types | null)[] | null;
  species: PokeDetails_species | null;
  stats: (PokeDetails_stats | null)[] | null;
  moves: (PokeDetails_moves | null)[] | null;
}
