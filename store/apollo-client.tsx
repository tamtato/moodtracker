import { ApolloClient, InMemoryCache } from "@apollo/client";

// Initialize Apollo Client with a local-only cache
const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
