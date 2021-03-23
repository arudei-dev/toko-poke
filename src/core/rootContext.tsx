import { createContext, Dispatch, useContext, useReducer } from 'react'
import { TRootState } from './rootStateTypes'
import { TRootAction } from './rootActions'
import { rootReducer } from './rootReducer'


const initialState: TRootState = {
  useTheme: 'light'
}

const rootState    = createContext<TRootState | undefined>(undefined)
const rootDispatch = createContext<Dispatch<TRootAction> | undefined>(undefined)

const RootStateProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <rootState.Provider value={state}>
      <rootDispatch.Provider value={dispatch}>
        { children }
      </rootDispatch.Provider>
    </rootState.Provider>
  )
}

const useRootState = (): TRootState => {
  const context = useContext(rootState)

  if (context === undefined) {
    throw new Error("Please use useRootState() within RootStateProvider.")
  }

  return context 
}

const useRootDispatch = (): Dispatch<TRootAction> => {
  const context = useContext(rootDispatch)

  if (context === undefined) {
    throw new Error("Please use useRootDispatch() within RootStateProvider.")
  }

  return context 
}

const useRootContext = (): [TRootState, Dispatch<TRootAction>] =>
  [useRootState(), useRootDispatch()]

export {
  RootStateProvider,
  useRootState,
  useRootDispatch,
  useRootContext
}