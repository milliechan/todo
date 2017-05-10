import * as actions from './actions'
import { combineReducers } from 'redux'
import client from './apolloClient'

function kebabPhoto(state = { show: false }, action) {
  switch (action.type) {
    case actions.SHOW_KEBAB:
      return {...state, show: true}
    case actions.HIDE_KEBAB:
      return {...state, show: false}
    default:
      return state
  }
}
console.log(client.reducer())
const reducers = combineReducers({
  kebabPhoto,
  apollo: client.reducer()
})

export default reducers
