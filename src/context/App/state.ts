import { PokemonLists_pokemons_results } from 'context/Apollo/types/PokemonLists'
import { AppThemeStyle } from 'core/types/general-types'

export type TPokeBio = {
  nickname: string,
  species: Partial<PokemonLists_pokemons_results>,
}

export type TMyProfile = {
  myPokeList: TPokeBio[],
}

export type TAppState = {
  useTheme: AppThemeStyle,
  myProfile?: TMyProfile,
}

export const initialState: TAppState = {
  useTheme: 'light'
}