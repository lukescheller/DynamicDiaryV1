import axios from 'axios'
import { ALL_RECORDS } from '../types/actionTypes'

//REGISTER USER
//when this action is called within the frontend it will take 3 parameters
export const allRecords = () => async dispatch => {
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
        const res = await axios.get('http://localhost:9000/record', config)
        dispatch({
            type: ALL_RECORDS,
            //res.data is the token
            payload: res.data.record
        })
    } catch (err) {
        //whether there's something missing in the body 
        //whether 
        const errors = err.response
        console.log('ERRORS' + ' ' + errors)
    }
}