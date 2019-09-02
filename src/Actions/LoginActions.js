import {
    EMAIL_LOGIN_CHANGED,
    PASSWORD_LOGIN_CHANGED,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS
}
from './Types';
import Axios from 'axios';
import { API_URL } from '../Helpers/API_URL';


export const emailLoginChanged = (text) => {
    return {
        type: EMAIL_LOGIN_CHANGED,
        payload: text
    }
}

export const passwordLoginChanged = (text) => {
    return {
        type: PASSWORD_LOGIN_CHANGED,
        payload: text
    }
}

export const loginSuccess = (email, password) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER})

        if(email === '' || password === ''){
            dispatch({type: LOGIN_USER_FAIL, payload: 'All Form Must Be Filled'})
        }else{
            Axios.post(API_URL + '/users/login', { email, password })
            .then((res)=> {
                dispatch({type: LOGIN_USER_SUCCESS, payload: res.data})
            })
            .catch((err)=> {
                dispatch({type: LOGIN_USER_FAIL, payload: 'an Error Occurred, Please Try Again'})
            })
        }
    }
}
