import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import CustomerReducer from './CustomerReducer';

export default combineReducers({
   auth: AuthReducer,
   customer: CustomerReducer
})