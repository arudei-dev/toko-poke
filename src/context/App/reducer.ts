import { AppThemeStyle } from 'core/types/GeneralTypes'
import { TAppState, TPokeBio } from "./state"
import { TAppAction, TPokemonId } from './actions'


const appReducer = (state: TAppState, action: TAppAction): TAppState => {
  switch (action.type) {
    case "CHANGE_THEME": 
      return {
        ...state,
        useTheme: action.payload as AppThemeStyle,
      }

    case "ADD_POKEMON": {
      const mpl = state.myProfile?.myPokeList || []

      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          myPokeList: [
            ...mpl,
            action.payload as TPokeBio
          ]
        }
      }
    }
    
    case "REMOVE_POKEMON": {
      const mpl = state.myProfile?.myPokeList || []

      if (!mpl) {
        return { ...state }
      }
      
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          myPokeList: mpl.filter((v, idx) => idx !== (action.payload as TPokemonId))
        }
      }

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