import {combineReducers} from 'redux'
import { authReducers } from './auth'
import { currentUser } from './current-users'
import { loaderReducer } from './loader'
import { notifyReducer } from './notifyReducers'
export const rootReducers = combineReducers({
    authReducers,
    currentUser,
    loaderReducer,
    notifyReducer
})