import { gql } from '@apollo/client';

const GET_LIST_POKE = gql`
  query PokemonLists($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        url
        name
        image
      }
    }
  }
`

export {
  GET_LIST_POKE
}