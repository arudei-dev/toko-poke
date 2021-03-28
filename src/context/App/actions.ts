import { AppThemeStyle } from 'core/types/general-types'
import { TMyProfile } from "./state"

export type TAppActionType = "CHANGE_THEME" 
                              | "UPDATE_PROFILE_B" | "UPDATE_PROFILE_S" | "UPDATE_PROFILE_F"

export type TPayload = AppThemeStyle 
                        | TMyProfile


export type TAppAction = {
  type: TAppActionType,
  payload?: TPayload,
}

const actChangeTheme = (theme: AppThemeStyle): TAppAction => ({
  type: "CHANGE_THEME",
  payload: theme,
})


export {
  actChangeTheme
}