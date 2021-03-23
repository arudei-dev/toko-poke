import { TRootState, TAppTheme } from "./rootStateTypes"
import { TRootAction } from './rootActions'


const rootReducer = (state: TRootState, action: TRootAction) => {
  switch (action.type) {
    case "CHANGE_THEME": 
      return {
        ...state,
        useTheme: action.payload as TAppTheme,
      }

    case "UPDATE_PROFILE_B":
    case "UPDATE_PROFILE_S":
    case "UPDATE_PROFILE_F":
      return state
  }
}

export {
  rootReducer
}