import { useLazyQuery } from '@apollo/client'
import { pokemons_pokemons, pokemonsVariables, pokemons } from './types/pokemons'
import { GET_LIST_POKE } from './pokemon-lists.gql'
import { TQueryHook, TLazyQueryHook } from './types/base'


const useLQPokemonLists: TLazyQueryHook<pokemonsVariables, pokemons_pokemons> = () => {
  const [loadData, {data, loading, error, called}] = useLazyQuery<pokemons, pokemonsVariables>(
    GET_LIST_POKE
  )

  return [loadData, {data: data?.pokemons!, loading, error: error!, called}]
}

export {
  useLQPokemonLists
}