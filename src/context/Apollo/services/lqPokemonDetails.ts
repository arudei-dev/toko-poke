import { useLazyQuery } from '@apollo/client'
import { TQueryHook, TLazyQueryHook } from 'context/Apollo/types/base'
import { GET_POKE_DETAILS } from '../graphql/pokemon-details.gql'
import { 
  PokemonDetailsByName,
  PokemonDetailsByNameVariables, 
  PokemonDetailsByName_pokemon 
} from '../types/PokemonDetailsByName'


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