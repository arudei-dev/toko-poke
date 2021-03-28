import { gql } from '@apollo/client';

const GET_POKE_DETAILS = gql`
  fragment PokeDetails on Pokemon {
    id
    name
    sprites {
      front_default
      front_female
      front_shiny
      front_shiny_female
    }
    weight
    types {
      type {
        name
      }
    }
    species {
      url
      name
    }
    stats {
      base_stat
      effort
      stat {
        url
        name
      }
    }
    moves {
      move {
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