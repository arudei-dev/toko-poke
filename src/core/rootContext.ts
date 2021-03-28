import { createContext, Dispatch, useContext, useReducer } from 'react'
import { TRootState } from 'core/rootStateTypes'
import { TRootAction } from 'core/rootActions'
import { rootReducer } from 'core/rootReducer'


const initialState: TRootState = {
  useTheme: 'light'
}

export const rootState    = createContext<TRootState | undefined>(undefined)
export const rootDispatch = createContext<Dispatch<TRootAction> | undefined>(undefined)

export type {
  TRootState,
  TRootAction,
}

export {
  rootReducer,
  initialState
}