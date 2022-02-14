import axios from 'axios'
import { TIME } from '../types/actionTypes'

//REGISTER USER
//when this action is called within the frontend it will take 3 parameters
export const timeAction = () => async dispatch => {
    //like in postman, headers must be set
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        //this call will return 1 of 4 responses
        //make sure there is no httpS
        //make sure the axios is calling out to the right path
        const res = await axios.get('http://localhost:9000/time', config)
        dispatch({
            type: TIME,
            //res.data is the token
            payload: res.data
        })
    } catch (err) {
        //whether there's something missing in the body 
        //whether 
        const errors = err.response
        console.log('ERRORS' + ' ' + errors)
    }
}