import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import authReducer  from './authStore/authReducer'

export const store = () => {
    return createStore(combineReducers({
        authReducer
    }), applyMiddleware(thunkMiddleware))
}
