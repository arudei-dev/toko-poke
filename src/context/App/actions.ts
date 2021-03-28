import { TAppTheme, TMyProfile } from "./types"

export type TRootActionType = "CHANGE_THEME" 
                              | "UPDATE_PROFILE_B" | "UPDATE_PROFILE_S" | "UPDATE_PROFILE_F"

export type TPayload = TAppTheme 
                        | TMyProfile


export type TRootAction = {
  type: TRootActionType,
  payload?: TPayload,
}

const actChangeTheme = (theme: TAppTheme): TRootAction => ({
  type: "CHANGE_THEME",
  payload: theme,
})


export {
  actChangeTheme
}