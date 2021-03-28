import { Dispatch, useContext } from 'react'
import {
  TRootState,
  TRootAction,
  rootState,
  rootDispatch,
} from 'core/rootContext'

export const useRootState = (): TRootState => {
  const context = useContext(rootState)

  if (context === undefined) {
    throw new Error("Please use useRootState() within RootStateProvider.")
  }

  return context 
}

export const useRootDispatch = (): Dispatch<TRootAction> => {
  const context = useContext(rootDispatch)

  if (context === undefined) {
    throw new Error("Please use useRootDispatch() within RootStateProvider.")
  }

  return context 
}

export const useRootContext = (): [TRootState, Dispatch<TRootAction>] =>
  [useRootState(), useRootDispatch()]