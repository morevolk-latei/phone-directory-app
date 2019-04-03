import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import freeze from 'redux-freeze'
import promise from 'redux-promise'
import axios from 'axios'

import rootReducer from './rootReducer'

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(promise, thunk.withExtraArgument(axios), freeze, logger)(createStore)

const store = createStoreWithMiddleware(rootReducer)

export default store
