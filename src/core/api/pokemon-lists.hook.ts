import { useLazyQuery } from '@apollo/client'
import { TQueryHook, TLazyQueryHook } from 'core/types/graphql/base'
import { GET_LIST_POKE } from './pokemon-lists.gql'
import { PokemonLists_pokemons, PokemonListsVariables, PokemonLists } from 'core/types/graphql/PokemonLists'


const useLQPokemonLists: TLazyQueryHook<PokemonListsVariables, PokemonLists_pokemons> = () => {
  const [loadData, {data, loading, error, called}] = useLazyQuery<PokemonLists, PokemonListsVariables>(
    GET_LIST_POKE
  )

  return [loadData, {data: data?.pokemons || undefined, loading, error, called}]
}

export {
  useLQPokemonLists
}