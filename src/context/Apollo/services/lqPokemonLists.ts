import { useLazyQuery } from '@apollo/client'
import { GET_LIST_POKE } from '../graphql/pokemon-lists.gql'
import { TLazyQueryHook } from '../types/base'
import { PokemonLists_pokemons, PokemonListsVariables, PokemonLists } from '../types/PokemonLists'


const useLQPokemonLists: TLazyQueryHook<PokemonListsVariables, PokemonLists_pokemons> = () => {
  const [loadData, {data, loading, error, called}] = useLazyQuery<PokemonLists, PokemonListsVariables>(
    GET_LIST_POKE
  )

  return [loadData, {data: data?.pokemons || undefined, loading, error, called}]
}

export {
  useLQPokemonLists
}