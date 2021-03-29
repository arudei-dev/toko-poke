import { AppThemeStyle } from 'core/types/general-types'
import { TMyProfile, TPokeBio } from "./state"

export type TAppActionType = "CHANGE_THEME" 
                              | "UPDATE_PROFILE_B" | "UPDATE_PROFILE_S" | "UPDATE_PROFILE_F"
                              | "ADD_POKEMON" | "REMOVE_POKEMON"

export type TPokemonId = number

export type TPayload = AppThemeStyle 
                        | TMyProfile
                        | TPokeBio
                        | TPokemonId


export type TAppAction = {
  type: TAppActionType,
  payload?: TPayload,
}

const actChangeTheme = (theme: AppThemeStyle): TAppAction => ({
  type: "CHANGE_THEME",
  payload: theme,
})

const actAddPokemon = (payload: TPokeBio): TAppAction => ({
  type: "ADD_POKEMON",
  payload: payload
})

const actRemovePokemon = (id: number): TAppAction => ({
  type: 'REMOVE_POKEMON',
  payload: id
})


export {
  actChangeTheme,
  actAddPokemon,
  actRemovePokemon
}