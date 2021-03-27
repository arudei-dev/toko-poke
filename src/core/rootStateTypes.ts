import { PokemonLists_pokemons_results } from './api/types/PokemonLists'

export type TAppTheme = 'light' | 'dark'

export type TMyProfile = {
  myPokeList: {
    nickname: string,
    species: PokemonLists_pokemons_results,
  }[],
}

export type TRootState = {
  useTheme: TAppTheme,
  myProfile?: TMyProfile,
}