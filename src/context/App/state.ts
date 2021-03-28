import { PokemonLists_pokemons_results } from 'context/Apollo/types/PokemonLists'
import { AppThemeStyle } from 'core/types/general-types'

export type TMyProfile = {
  myPokeList: {
    nickname: string,
    species: PokemonLists_pokemons_results,
  }[],
}

export type TAppState = {
  useTheme: AppThemeStyle,
  myProfile?: TMyProfile,
}

export const initialState: TAppState = {
  useTheme: 'light'
}