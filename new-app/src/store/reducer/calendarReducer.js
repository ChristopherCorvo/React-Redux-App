// notes: 
// When an action is dispatched, it flows through every reducer in a script.

// Reducers are pure functions, meaning they don't produce any side-effects.

// Reducers take in two arguments:
//  1) the current state from the Redux store
//  2) the action object, sent via action creator functions. 

// Remember that an action gives us a packet of information as an object 
// with a type and payload field that we can use. The type tells the reducer 
// what to do, and the payload tells the reducer what to update on state.

// Reducers will NEVER update state directly, they only return a new object 
// Remember this as you craft your reducers - that they are not only functional and pure, 
// but they lend themselves to the pattern of immutability well.



// ------------ Import Actions ----------------------
import {
    FETCH_HOLIDAYS_START,
    FETCH_HOLIDAYS_SUCCESS,
    FETCH_HOLIDAYS_FAILURE,
} from '../actions/calendarActions'

// ------------ Set InitialState Value ---------------
const initialState = {
    isLoading: false,
    holidayData: [],
    error: ''
}

// --------- Reducer function with default set to initialState ----------
export const calendarReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_HOLIDAYS_START:
            // We are returning a brand new object. 
            // We do NOT update the state object and return that.
            // We are using the spread operator to "spread" in our old state
            // We then update the one piece of data we want to update 
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_HOLIDAYS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                holidayData: action.payload
            };
        case FETCH_HOLIDAYS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }    
        default:
            return state;
    }

}
