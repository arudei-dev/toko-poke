import { createContext, Dispatch } from 'react'
import { TRootAction } from './actions'
import {
  TAppTheme,
  TMyProfile,
  TRootState
} from './types'


export const initialState: TRootState = {
  useTheme: 'light'
}

export const RootState    = createContext<TRootState | undefined>(undefined)
export const RootDispatch = createContext<Dispatch<TRootAction> | undefined>(undefined)

