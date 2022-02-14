//boilerplate
import { combineReducers } from 'redux'
// import entriesReducer from './reducers/entriesReducer'
import entriesReducer from './reducers/entriesReducer'
import keysCountReducer from './reducers/keysCountReducer'
import recordsReducer from './reducers/recordsReducer'
import timeReducer from './reducers/timeReducer'

//any reduer you create goes in here
export default combineReducers({
    entriesReducer, keysCountReducer, recordsReducer, timeReducer
})