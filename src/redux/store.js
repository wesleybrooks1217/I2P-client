import {createStore, applyMiddleware} from 'redux-toolkit'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store
