import { Dispatch, useContext } from 'react'
import { TModalAction } from './actions'
import { TModalState } from './state'
import { AppModalState, AppModalDispatch } from './provider'


export const useModalState = (): TModalState => {
  const context = useContext(AppModalState)

  if (context === undefined) {
    throw new Error("Please use useModalState() within ModalStateProvider.")
  }

  return context 
}

export const useModalDispatch = (): Dispatch<TModalAction> => {
  const context = useContext(AppModalDispatch)

  if (context === undefined) {
    throw new Error("Please use useModalDispatch() within ModalStateProvider.")
  }

  return context 
}

export const useModalContext = (): [TModalState, Dispatch<TModalAction>] =>
  [useModalState(), useModalDispatch()]