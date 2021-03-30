import { useEffect, useReducer, createContext, Dispatch } from 'react'
import { useLocalStorage } from 'core/services/localStorage'
import { appReducer } from './reducer'
import { TAppAction } from './actions'
import {
  TAppState,
  initialState
} from './state'


export const AppState    = createContext<TAppState | undefined>(undefined)
export const AppDispatch = createContext<Dispatch<TAppAction> | undefined>(undefined)


export const AppStateProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [localState, setLocalState] = useLocalStorage<TAppState>({key: "appState", initialValue: initialState})

  const [state, dispatch] = useReducer(appReducer, localState)

  useEffect(() => {
    setLocalState(state)
  }, [state, setLocalState])

  return (
    <AppState.Provider value={state}>
      <AppDispatch.Provider value={dispatch}>
        { children }
      </AppDispatch.Provider>
    </AppState.Provider>
  )
}
