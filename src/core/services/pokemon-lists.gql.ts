import { gql } from '@apollo/client';

const GET_LIST_POKE = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
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