import { RootApolloProvider } from './Apollo/provider'
import { RootStateProvider } from './App/provider'


interface Props {
  children: React.ReactNode
}

export const RootProviders: React.FC<Props> = ({ children }) => {
  return (
    <RootApolloProvider>
      <RootStateProvider>
        {children}
      </RootStateProvider>
    </RootApolloProvider>
  )
}
