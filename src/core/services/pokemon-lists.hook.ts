import { useLazyQuery } from '@apollo/client'
import { TQueryHook, TLazyQueryHook } from './types/base'
import { GET_LIST_POKE } from './pokemon-lists.gql'
import { pokemon_lists_pokemons, pokemon_listsVariables, pokemon_lists } from './types/pokemon_lists'


const useLQPokemonLists: TLazyQueryHook<pokemon_listsVariables, pokemon_lists_pokemons> = () => {
  const [loadData, {data, loading, error, called}] = useLazyQuery<pokemon_lists, pokemon_listsVariables>(
    GET_LIST_POKE
  )

  return [loadData, {data: data?.pokemons!, loading, error: error!, called}]
}

export {
  useLQPokemonLists
}