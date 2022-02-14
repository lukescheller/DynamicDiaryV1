import { KEYS_COUNT } from '../types/actionTypes'

//the state of this reducer starts out as an empty array
//errors in the form of objects will fill this array
const initialState = []

export default function (state = initialState, action) {
    switch (action.type) {
        case KEYS_COUNT:
            //return [] represents the updated state
            //you can't mutate state so it just gets replaced
            return action.payload
        //the spread operator adds everything that's already inside initialstate
        //this acts as initialState.push()
        //the payload refers to the payload thats sent via the action thats called
        default:
            return state
    }
}