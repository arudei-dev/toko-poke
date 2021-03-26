import { gql } from '@apollo/client';

const GET_POKE_DETAILS = gql`
  fragment PokeDetails on Pokemon {
    id
    name
    sprites {
      front_default
    }
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
  }

  query PokemonDetailsByName($poke_name: String!) {
    pokemon(name: $poke_name) {
      ...PokeDetails
    }
  }

  # ... sadly we can't get by id yet.
  # query PokemonDetailsById($id: number!) {
  #   pokemon(id: $id) {
  #     ...PokeDetails
  #   }
  # }
  
`

export {
  GET_POKE_DETAILS
}