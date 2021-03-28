import { AppThemeStyle } from 'core/types/general-types'
import { TMyProfile, TPokeBio } from "./state"

export type TAppActionType = "CHANGE_THEME" 
                              | "UPDATE_PROFILE_B" | "UPDATE_PROFILE_S" | "UPDATE_PROFILE_F"
                              | "ADD_POKEMON" | "REMOVE_POKEMON"

export type TPayload = AppThemeStyle 
                        | TMyProfile
                        | TPokeBio


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


export {
  actChangeTheme,
  actAddPokemon
}