import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import contactReducer from './reducers/contacts'

const rootReducer = combineReducers({
  routing: routerReducer,
  contacts: contactReducer
})

export default rootReducer