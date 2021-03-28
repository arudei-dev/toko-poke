import { PokemonLists_pokemons_results } from 'context/Apollo/types/PokemonLists'

export type TAppTheme = 'light' | 'dark'

export type TMyProfile = {
  myPokeList: {
    nickname: string,
    species: PokemonLists_pokemons_results,
  }[],
}

export type TAppState = {
  useTheme: TAppTheme,
  myProfile?: TMyProfile,
}