import { useReducer } from 'react'
import { appReducer} from './reducer'
import {
  initialState,
  AppState,
  AppDispatch
} from './init'


export const AppStateProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppState.Provider value={state}>
      <AppDispatch.Provider value={dispatch}>
        { children }
      </AppDispatch.Provider>
    </AppState.Provider>
  )
}
