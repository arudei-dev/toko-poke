import { pokemons_pokemons_results } from './services/types/pokemons'

export type TAppTheme = 'light' | 'dark'

export type TMyProfile = {
  myPokeList: [pokemons_pokemons_results],
}

export type TRootState = {
  useTheme: TAppTheme,
  myProfile?: TMyProfile,
}