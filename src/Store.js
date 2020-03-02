import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const intialState = {}

// An array of all the middlewares used
const middleWare = [thunk]

// Creating the global store to which we pass the root reducer, initial state variables and middlewares
const store = createStore(rootReducer, intialState, composeWithDevTools(applyMiddleware(...middleWare)))

export default store

