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
}

export interface PokeDetails_moves_move {
  __typename: "BaseName";
  name: string | null;
}

export interface PokeDetails_moves {
  __typename: "Move";
  move: PokeDetails_moves_move | null;
}

export interface PokeDetails_types_type {
  __typename: "BaseName";
  name: string | null;
}

export interface PokeDetails_types {
  __typename: "Type";
  type: PokeDetails_types_type | null;
}

export interface PokeDetails {
  __typename: "Pokemon";
  id: number | null;
  name: string | null;
  sprites: PokeDetails_sprites | null;
  moves: (PokeDetails_moves | null)[] | null;
  types: (PokeDetails_types | null)[] | null;
}
