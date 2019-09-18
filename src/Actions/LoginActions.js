import {
    EMAIL_REGISTER_CHANGED,
    PASSWORD_REGISTER_CHANGED,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    KEEP_LOGIN
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
    return (dispatch) => {
        const user = localStorage.getItem('keeplogged')
        Axios.put(API_URL + '/users/logout?email=' + user)
        .then((res)=> {
            dispatch({ type: LOGOUT_USER })
            localStorage.removeItem('keeplogged')
        })
        .catch((err)=> {
            console.log(err)
        })
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
                console.log(password)
                console.log(res.data);
                if(res.data.length === 0 ){
                    dispatch({type: LOGIN_USER_FAIL, payload: 'Email is Not Registered'})
                }else if(res.data[0].status === 0 ){
                    dispatch({type: LOGIN_USER_FAIL, payload: 'Please Verify Your Account First'})
                }else{
                    dispatch({type: LOGIN_USER_SUCCESS, payload: {  
                                                                    userId: res.data[0].id,
                                                                    role_id: res.data[0].role_id,
                                                                    fullname: res.data[0].fullname,
                                                                    email: res.data[0].email,
                                                                    password,
                                                                    error: '',
                                                                    loading: false,
                                                                    is_login: true,
                                                                    justLogin: true
                    }})
                    Axios.post(API_URL + '/users/login', {
                                                           email: res.data[0].email,
                                                           password: res.data[0].password,
                                                           last_login: new Date()
                                                         })
                    .then((res)=> {
                              localStorage.setItem('keeplogged', res.data[0].email)
                            dispatch({type: LOGIN_USER_SUCCESS})
                    })
                    .catch((err)=> {
                        console.log(err);
                        dispatch({type: LOGIN_USER_FAIL, payload: 'login failed ' + err})
                    })
                }
            })
            .catch((err)=> {
                console.log(err)
                dispatch({ type: LOGIN_USER_FAIL, payload: 'error ' + err})
            })
        }
    }
}

export const keepLogin = (kept) => {
    console.log(kept)
    return {
        type: KEEP_LOGIN,
        payload: kept
    }
}