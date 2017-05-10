import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'localhost:3000/graphql'
})

const client = new ApolloClient({
  networkInterface
})

export default client
