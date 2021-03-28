import { useReducer } from 'react'
import {
  rootState,
  rootDispatch,
  rootReducer,
  initialState,
} from 'core/rootContext'


export const RootStateProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <rootState.Provider value={state}>
      <rootDispatch.Provider value={dispatch}>
        { children }
      </rootDispatch.Provider>
    </rootState.Provider>
  )
}
