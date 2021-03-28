import { AppThemeStyle } from 'core/types/general-types'
import { TAppState } from "./state"
import { TAppAction } from './actions'


const appReducer = (state: TAppState, action: TAppAction): TAppState => {
  switch (action.type) {
    case "CHANGE_THEME": 
      return {
        ...state,
        useTheme: action.payload as AppThemeStyle,
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