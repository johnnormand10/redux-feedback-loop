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
        case 'ADD_FEELING': {
            //checking what payload is (from Feeling)
            console.log('ADD_FEELING payload is:', action.payload);
            return [...state, action.payload]
        }
        case 'ADD_UNDERSTANDING': {
            //checking what payload is (from Understanding)
            console.log('ADD_UNDERSTANDING payload is:', action.payload);
            return [...state, action.payload]
        }
        case 'ADD_SUPPORT': {
            //checking what payload is (from Support)
            console.log('ADD_SUPPORT payload is:', action.payload);
            return [...state, action.payload]
        }
        case 'ADD_COMMENTS': {
            //checking what payload is (from Comment)
            console.log('ADD_COMMENTS payload is:', action.payload);
            return [...state, action.payload]
        }
        case 'CLEAR_FEEDBACK': {
            return []
        }
        default:
            return state
    }

    return state;
}

const store = createStore(
    combineReducers({
        userRating
    }),
    applyMiddleware(logger)
)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>, 
    document.getElementById('root'));
registerServiceWorker();
