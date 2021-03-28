import { useLazyQuery } from '@apollo/client'
import { TQueryHook, TLazyQueryHook } from 'core/types/graphql/base'
import { GET_POKE_DETAILS } from './pokemon-details.gql'
import { 
  PokemonDetailsByName,
  PokemonDetailsByNameVariables, 
  PokemonDetailsByName_pokemon 
} from 'core/types/graphql/PokemonDetailsByName'


const useLQPokemonDetailsByName: TLazyQueryHook<PokemonDetailsByNameVariables, PokemonDetailsByName_pokemon> = () => {
  const [loadData, {data, loading, error, called}] 
    = useLazyQuery<PokemonDetailsByName, PokemonDetailsByNameVariables>(
    GET_POKE_DETAILS
  )

  return [loadData, {data: data?.pokemon || undefined, loading, error, called}]
}

export {
  useLQPokemonDetailsByName
}