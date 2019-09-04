import {
    EMAIL_REGISTER_CHANGED,
    PASSWORD_REGISTER_CHANGED,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER
}
from './Types';
import Axios from 'axios';
import { API_URL } from '../Helpers/API_URL';


export const emailLoginChanged = (text) => {
    return {
        type: EMAIL_REGISTER_CHANGED,
        payload: text
    }
}

export const passwordLoginChanged = (text) => {
    return {
        type: PASSWORD_REGISTER_CHANGED,
        payload: text
    }
}

export const onUserLogout = () => {
    localStorage.removeItem('keeplogged')
    return {
        type: LOGOUT_USER
    }
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER})

        if(email === '' || password === ''){
            dispatch({type: LOGIN_USER_FAIL, payload: 'All Form Must Be Filled'})
        }else{
            Axios.get(API_URL + '/users/user?email=' + email)
            .then((res)=> {
                console.log(res.data);
                if(res.data.length === 0 ){
                    dispatch({type: LOGIN_USER_FAIL, payload: 'Email Not Registered'})
                }else if(res.data[0].status === 0 ){
                    dispatch({type: LOGIN_USER_FAIL, payload: 'Please Verify Your Account First'})
                }else{
                    dispatch({type: LOGIN_USER_SUCCESS, payload: res.data})
                    // Axios.post(API_URL + '/users/login', { email, password })
                    // .then((res)=> {
                    //         dispatch({type: LOGIN_USER_SUCCESS, payload: res.data})
                    // })
                    // .catch((err)=> {
                    //     console.log(err);
                    //     dispatch({type: LOGIN_USER_FAIL, payload: 'login failed ' + err})
                    // })
                }
            })
            .catch((err)=> {
                console.log(err)
                dispatch({ type: LOGIN_USER_FAIL, payload: 'error ' + err})
            })
        }
    }
}
