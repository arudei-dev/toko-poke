import { useReducer, createContext, Dispatch } from 'react'
import { modalReducer } from './reducer'
import { TModalAction } from './actions'
import {
  TModalState,
  initialModalState
} from './state'


export const AppModalState    = createContext<TModalState | undefined>(undefined)
export const AppModalDispatch = createContext<Dispatch<TModalAction> | undefined>(undefined)


export const AppModalStateProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialModalState)

  return (
    <AppModalState.Provider value={state}>
      <AppModalDispatch.Provider value={dispatch}>
        { children }
      </AppModalDispatch.Provider>
    </AppModalState.Provider>
  )
}
