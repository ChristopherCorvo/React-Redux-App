import React from 'react';
import ReactDOM from 'react-dom';

// --------- Import Logger from redux-logger --------
// logger is a middleware library
import logger from 'redux-logger' 

// ----- Import createStore, applyMiddleware, compose functions from redux --------------
import { createStore, applyMiddleware } from 'redux'

// ------- Import Provider from react-redux ------------
import { Provider } from 'react-redux'

// -------- Import thunk from redux-thunk -----------
//  thunk is another form of middleware

//  When an action creator is called redux-thunk intercepts and acts 
//  on returned data. If the thing returned is an action, it forwards 
//  the action through to the reducer. But, if the thing returned is a 
//  function, aka a thunk (a function returned from a function), then it 
//  invokes the thunk and passes the dispatch function as an argument to it.
import thunk from 'redux-thunk'

// -------- Imported Styles -----------
import './index.css';

// -------- Imported Components ------------
import App from './App';

// --------- Import Reducer Function -----------
import { calendarReducer } from './store/reducer/calendarReducer'

// ---------- create your 'store' variable & apply middleware ------------
// 'createStore' will take in a single reducer that represents the state (data) of
// our application globally.

const store = createStore(calendarReducer, applyMiddleware(thunk, logger) )

// applyMiddleware and logger makeup a very basic middleware package that will console.log
// your actions as they flow through the action creators, before they hit the reducer. 
// Note: if you use redux-logger with other middleware packages, as in the above example, then 
// make sure logger is passed to applyMiddleware last.



// ----- wrap <Provider>  <App>  </Provider> -----
// ----- connect <Provider> to your store variable -------
// This is how we make our application aware that we are employing a store variable
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

