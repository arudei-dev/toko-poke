import { TAppTheme, TMyProfile } from "./types"

export type TAppActionType = "CHANGE_THEME" 
                              | "UPDATE_PROFILE_B" | "UPDATE_PROFILE_S" | "UPDATE_PROFILE_F"

export type TPayload = TAppTheme 
                        | TMyProfile


export type TAppAction = {
  type: TAppActionType,
  payload?: TPayload,
}

const actChangeTheme = (theme: TAppTheme): TAppAction => ({
  type: "CHANGE_THEME",
  payload: theme,
})


export {
  actChangeTheme
}