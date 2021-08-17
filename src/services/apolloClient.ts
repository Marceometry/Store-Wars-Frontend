import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_APOLLO_CLIENT_URL,
  cache: new InMemoryCache(),
})