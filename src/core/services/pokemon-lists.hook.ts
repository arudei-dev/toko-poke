import { useQuery } from '@apollo/client'
import { pokemons_pokemons, pokemonsVariables, pokemons } from './types/pokemons'
import { GET_LIST_POKE } from './pokemon-lists.gql'
import { TQueryHook } from './types/base'


const useQPokemonLists: TQueryHook<pokemonsVariables, pokemons_pokemons> = ({limit, offset}: pokemonsVariables) => {
  const { data, loading, error, networkStatus } = useQuery<pokemons, pokemonsVariables>(
    GET_LIST_POKE, 
    {
      variables: {
        limit,
        offset,
      }
    }
  )

  return { data: data?.pokemons!, loading, error, networkStatus }
}

export {
  useQPokemonLists
}