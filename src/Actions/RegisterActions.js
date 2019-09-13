import { API_URL } from '../Helpers/API_URL'
import { FULLNAME_REGISTER_CHANGED,
         EMAIL_REGISTER_CHANGED,
         PASSWORD_REGISTER_CHANGED,
         CON_PASSWORD_REGISTER_CHANGED,
         REGISTER_USER, 
         REGISTER_USER_FAIL,
         REGISTER_USER_SUCCESS } from '../Actions/Types'
import Axios from 'axios'

export const emailRegisterChanged = (text) => {
return {
    type: EMAIL_REGISTER_CHANGED,
    payload: text
    }
}

export const fullnameRegisterChanged = (text) => {
    return {
        type: FULLNAME_REGISTER_CHANGED,
        payload: text
    }
}

export const passwordRegisterChanged = (text) => {
    return{
        type: PASSWORD_REGISTER_CHANGED,
        payload: text
    }
}
export const conPasswordRegisterChanged = (text) => {
    return{
        type: CON_PASSWORD_REGISTER_CHANGED,
        payload: text
    }
}

export const registerUser = ({ fullname, email, password, conPassword }) => {
    return (dispatch) => {
        dispatch({type: REGISTER_USER})
        if(fullname === '' || email === '' || password === '' || conPassword === ''){
                dispatch({type: REGISTER_USER_FAIL, payload: 'All Form Must Be Filled'})
            }else if(password !== conPassword){
                dispatch({type: REGISTER_USER_FAIL, payload: 'The Specified Passwords Do Not Match'})
            }else if(password.length < 6){
                dispatch({type: REGISTER_USER_FAIL, payload: 'Password Must Contain at Least 6 Characters'})
            }else{
                Axios.get(API_URL + '/users/user?email=' + email)
                 .then((res)=> {
                     console.log(res.data)
                if(res.data.length > 0){
                    dispatch({type: REGISTER_USER_FAIL, payload: 'Email is Not Available'})
                }else{
                    Axios.post(API_URL + '/users/addnewuser', {fullname, email, password})
                    .then((res)=> {
                        console.log(res.data)
                        localStorage.setItem('keeplogged', res.data.email)    
                        dispatch({type: REGISTER_USER_SUCCESS,
                                  payload:{
                                    userId: res.data[0].id,
                                    email: res.data[0].email,
                                    fullname: res.data[0].fullname,
                                    password: res.data[0].password,
                                    role_id: res.data[0].role_id,
                                    loading: false,
                                    error: '',
                                    justRegistered: true
                                  }})
                    })
                    .catch((err)=> {
                        console.log(err);
                        dispatch({type: REGISTER_USER_FAIL, payload: 'Server caught an error' + err})
                    })                    
                }
            })
                .catch((err)=> {
                    console.log(err);
                    dispatch({type: REGISTER_USER_FAIL, payload: 'Internal Server Error'})
            })
            }
    }
}


