import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import {logger} from 'redux-logger'
import { rootReducers } from './reducers';
export const store = createStore(rootReducers,applyMiddleware(thunk,logger))