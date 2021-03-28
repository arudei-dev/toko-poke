import { TRootState, TAppTheme } from "./types"
import { TRootAction } from './actions'


const rootReducer = (state: TRootState, action: TRootAction): TRootState => {
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
  rootReducer
}