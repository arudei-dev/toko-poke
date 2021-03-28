import { TAppState, TAppTheme } from "./types"
import { TAppAction } from './actions'


const appReducer = (state: TAppState, action: TAppAction): TAppState => {
  switch (action.type) {
    case "CHANGE_THEME": 
      return {
        ...state,
        useTheme: action.payload as TAppTheme,
      }

    case "UPDATE_PROFILE_B":
    case "UPDATE_PROFILE_S":
    case "UPDATE_PROFILE_F":
    default:
      return state
  }
}

export {
  appReducer
}