//boilerplate
import { createStore, applyMiddleware } from 'redux'
//boilerplate
import { composeWithDevTools } from 'redux-devtools-extension'
//optional, useful
import thunk from 'redux-thunk'
//boilerplate
import rootReducer from './rootReducer'

//boilerplate
const initialState = {}
//if you want to add more just add it to this array
const middleware = [thunk]
//entire store
//to get every function within middleware use the spread operator -> ...
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store