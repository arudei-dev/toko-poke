import { Dispatch, useContext } from 'react'
import { TRootAction } from './actions'
import { TRootState } from './types'
import { RootState, RootDispatch } from './init'


export const useRootState = (): TRootState => {
  const context = useContext(RootState)

  if (context === undefined) {
    throw new Error("Please use useRootState() within RootStateProvider.")
  }

  return context 
}

export const useRootDispatch = (): Dispatch<TRootAction> => {
  const context = useContext(RootDispatch)

  if (context === undefined) {
    throw new Error("Please use useRootDispatch() within RootStateProvider.")
  }

  return context 
}

export const useRootContext = (): [TRootState, Dispatch<TRootAction>] =>
  [useRootState(), useRootDispatch()]