// notes: 
// Actions are an object with up to two properties: 
//      1) a type prop: is a string that explains what interaction just happened i.e 'LOGIN_USER' 
//      2) an optional payload: data that goes along with that interaction

// Actions are "dispatched" to our reducer - aka, passed into the reducer 
// function as an argument. When our reducer recieves an action, it will 
// update the state according to the type and payload on the action.

// In Redux, reducers are the only place we can update our state.

// Actions tell our reducers "how" to update the state, and perhaps 
// with what data it should be updated to.


// --------- import axios ------------
import axios from 'axios'

// --------- build out action types ---------------
// The reason we use action types instead of strings is that:
//      1) strings can be easily misspelled creating bugs you'll have to scower the code to find
//      2) it makes changing the names of an action very easy. 

export const FETCH_HOLIDAYS_START = 'FETCH_HOLIDAYS';
export const FETCH_HOLIDAYS_SUCCESS = 'FETCH_HOLIDAYS_SUCCESS';
export const FETCH_HOLIDAYS_FAILURE = 'FETCH_HOLIDAYS_FAILURE';

// ---------- Action creators -------------
// Action creators are functions that return an action object.

// Action creators are a middle step between events/interactions and the 
// dispatch process. They make it possible to write reusable functions that 
// can create actions on the fly, rather than us hard coding actions 
// into our components.

// ----------fetchHolidays function provides the axios request and data from API ----------
export const fetchHolidays = () => dispatch => {
        // do async actions here
        dispatch({ type: FETCH_HOLIDAYS_START });

        axios
            .get('https://calendarific.com/api/v2/holidays?api_key=c96de2ed0c05a24203876dd3b2ceca300ca51b6f&country=US&year=2020')
            .then((res) => {
                console.log(res)
                dispatch({ type: FETCH_HOLIDAYS_SUCCESS, payload: res.data.response.holidays})
            })
            .catch((err) => {
                dispatch({ type: FETCH_HOLIDAYS_FAILURE, payload: err.message})
            });
    };
