import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//importing stuff
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//REDUCERS

const userRating = (state = [], action) => {
    switch (action.type){
        case 'ADD_FEELING':
            //checking what payload is 
            console.log('ADD_FEELING payload is:', action.payload);
            return [...state, action.payload]
    }
}

const store = createStore(
    combineReducers({
        userRating
    }),
    applyMiddleware(logger)
)

ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>, 
    document.getElementById('root'));
registerServiceWorker();
