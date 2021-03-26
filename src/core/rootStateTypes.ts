import { PokemonLists_pokemons_results } from './services/types/PokemonLists'

export type TAppTheme = 'light' | 'dark'

export type TMyProfile = {
  myPokeList: [PokemonLists_pokemons_results],
}

export type TRootState = {
  useTheme: TAppTheme,
  myProfile?: TMyProfile,
}