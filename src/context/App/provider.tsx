import { useReducer } from 'react'
import { rootReducer } from './reducer'
import {
  initialState,
  RootState,
  RootDispatch
} from './init'


export const RootStateProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <RootState.Provider value={state}>
      <RootDispatch.Provider value={dispatch}>
        { children }
      </RootDispatch.Provider>
    </RootState.Provider>
  )
}
