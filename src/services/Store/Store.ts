import {createStore, applyMiddleware} from 'redux';
import coreReducer from './Reducer/'
import thunk from 'redux-thunk';

export const store = createStore(coreReducer, applyMiddleware(thunk))

