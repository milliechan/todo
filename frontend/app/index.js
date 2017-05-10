import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { ApolloProvider } from 'react-apollo'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <ApolloProvider client={ client } store={ store }>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
