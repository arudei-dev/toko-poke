import { createContext, Dispatch } from 'react'
import { TAppAction } from './actions'
import {
  TAppTheme,
  TMyProfile,
  TAppState
} from './types'


export const initialState: TAppState = {
  useTheme: 'light'
}

export const AppState    = createContext<TAppState | undefined>(undefined)
export const AppDispatch = createContext<Dispatch<TAppAction> | undefined>(undefined)

