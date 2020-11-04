import React from 'react';
import ReactDOM from 'react-dom';

// ----- Import createStore, applyMiddleware, compose functions from redux --------------
import { createStore, applyMiddleware, compose } from 'redux'

// ------- Import Provider from react-redux ------------
import { Provider } from 'react-redux'

// -------- Import thunk from redux-thunk -----------
import thunk from 'redux-thunk'

// --------- Import Logger from redux-logger --------
import logger from 'redux-logger'

// -------- Imported Styles -----------
import './index.css';

// -------- Imported Components ------------
import App from './App';

// --------- Import Reducer Function -----------
import { reducer } from './store/reducer/calendarReducer'

// ---------- create your 'store' variable ------------
const store = createStore(reducer, applyMiddleware(thunk, logger) )

// ----- wrap <Provider>  <App>  </Provider> -----
// ----- connect <Provider> to your store variable -------
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

