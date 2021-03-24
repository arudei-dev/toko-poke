import { useQuery } from '@apollo/client'
import { pokemons_pokemons, pokemonsVariables } from './types/pokemons'
import { GET_LIST_POKE } from './pokemon-lists.gql'
import { TQueryHook } from './types/base'


const useQPokemonLists: TQueryHook<pokemonsVariables, pokemons_pokemons> = ({limit, offset}: pokemonsVariables) => {
  const { data, loading, error, networkStatus } = useQuery<pokemons_pokemons, pokemonsVariables>(
    GET_LIST_POKE, 
    {
      variables: {
        limit,
        offset,
      }
    }
  )

  return { data, loading, error, networkStatus }
}

export {
  useQPokemonLists
}