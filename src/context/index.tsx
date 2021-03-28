import { RootApolloProvider } from './Apollo/provider'
import { AppStateProvider } from './App/provider'


interface Props {
  children: React.ReactNode
}

export const RootProviders: React.FC<Props> = ({ children }) => {
  return (
    <RootApolloProvider>
      <AppStateProvider>
        {children}
      </AppStateProvider>
    </RootApolloProvider>
  )
}
