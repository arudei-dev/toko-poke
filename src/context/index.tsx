import { RootApolloProvider } from './Apollo/provider'
import { AppStateProvider } from './App/provider'
import { AppModalStateProvider } from './Modal/provider'

interface Props {
  children: React.ReactNode
}

export const RootProviders: React.FC<Props> = ({ children }) => {
  return (
    <RootApolloProvider>
      <AppStateProvider>
        <AppModalStateProvider>
          {children}
        </AppModalStateProvider>
      </AppStateProvider>
    </RootApolloProvider>
  )
}
