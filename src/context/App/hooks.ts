import { Dispatch, useContext } from 'react'
import { TAppAction } from './actions'
import { TAppState } from './state'
import { AppState, AppDispatch } from './provider'


export const useAppState = (): TAppState => {
  const context = useContext(AppState)

  if (context === undefined) {
    throw new Error("Please use useAppState() within AppStateProvider.")
  }

  return context 
}

export const useAppDispatch = (): Dispatch<TAppAction> => {
  const context = useContext(AppDispatch)

  if (context === undefined) {
    throw new Error("Please use useAppDispatch() within AppStateProvider.")
  }

  return context 
}

export const useAppContext = (): [TAppState, Dispatch<TAppAction>] =>
  [useAppState(), useAppDispatch()]