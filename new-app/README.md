React-Redux Data Flow: 

    1. 'Store' sets the state
    2. Event or user interaction happens 
    3. An action creator is called and dispatches an action.
    4. Actions tell us about the changes from the event and trigger reducer function.
    5. Reducers handle the actions and replace the store with a new state obj.

React Redux App Workflow:

    Install dependencies: 
        1. npx create-react-app name-app
        2. npm i
        3. npm react-redux redux
        4. npm i axios
        5. npm i redux thunk
        6. npm i redux-logger
        7. npm i redux-connect
        8. create store folder with two subfolders:
            9. reducer folder
            10. actions folder
        11. create component folder

    Index.js:
    
        Import installed dependencies:	
            12. import React from 'react';
            13. import ReactDOM from "react-dom";
            14. import { createStore, applyMiddleware } from 'redux';
            15. import { Provider } from 'react-redux';
            16. import logger from 'redux-logger'; 
            17. import thunk from 'redux-thunk';

        Import additional files and functions:
            18. import components
            19. import reducer function from reducer folder
            20. import styles

        Create 'store w/ middleware:
            21. const store = createStore(reducer, applyMiddleware(thunk, logger))
            22. wrap <App> in <Provider></Provider>
            23. connect <Provider> to the store via <Provider store = {store}>

    Setup Basic reducer outline:
        24. import actions file
        25. set up initialState variable
        26. sketch out standard reducer function:
            export const reducer = (state, action) => {
                switch(action.type) {
                    return{
                        ...state,
                    }
                }
                default:
                return state;
            }
        27. set up default by initializing the state parameter in the reducer function to the initial state value. i.e:
            export const reducer = (state = initialState, action) 
        
    App.js:
        28. import React from 'react';
        29. import components
        30. render component

    Actions: (build out actions suite)
        31. import axios from 'axios'
        32. Action types
        33. Action Creators
            33a. this is where you would build your api fetching function

    Component file:
        34. import React, { useEffect } from 'react'
        35. import { connect } from 'react-redux'
        36. import necessary action functions
        37. build mapStateToProps function: Example:
            
            const mapStateToProps = (state) => {
                return {
                    isLoading: state.isLoading,
                    holidays: state.holidayData,
                    error: state.error
                 };
            };

        38. use connect at the component export: 

            export default connect(mapStateToProps, { actionFunction }) (ComponentName)
        
    Reducer file:
        39. build out the rest of the reducer function
        40. go to index.js and replace reduceer with custom reducer






