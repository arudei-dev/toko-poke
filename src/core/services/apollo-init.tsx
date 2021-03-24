import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const API_GQL_URL = 'https://graphql-pokeapi.vercel.app/api/graphql'

const client = new ApolloClient({
  uri: API_GQL_URL,
  cache: new InMemoryCache(),
})

const RootApolloProvider: React.FC = ({ children }) => (
  <ApolloProvider client={client}>
    { children }
  </ApolloProvider>
)

export {
  RootApolloProvider
}