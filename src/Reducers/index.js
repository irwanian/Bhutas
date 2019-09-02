import { combineReducers } from 'redux'
import RegisterReducer from './RegisterReducer'
import LoginReducer from './LoginReducer'
import AuthReducer from './AuthReducer'
import CustomerReducer from './CustomerReducer';

export default combineReducers({
   registration: RegisterReducer,
   login: LoginReducer,
   auth: AuthReducer,
   customer: CustomerReducer
})