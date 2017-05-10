import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { ApolloProvider, compose } from 'react-apollo'
import client from './apolloClient'

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(client.middleware()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  <ApolloProvider client={ client } store={ store }>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
