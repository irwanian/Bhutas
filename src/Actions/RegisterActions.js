import { API_URL } from '../Helpers/API_URL'
import { FULLNAME_REGISTER_CHANGED,
         EMAIL_REGISTER_CHANGED,
         PASSWORD_REGISTER_CHANGED,
         CON_PASSWORD_REGISTER_CHANGED,
         REGISTER_USER, 
         REGISTER_USER_FAIL,
         REGISTER_USER_SUCCESS, 
         LOGIN_USER_SUCCESS } from '../Actions/Types'
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

export const registerUser = ( fullname, email, password, conPassword) => {
    return (dispatch) => {
        dispatch({type: REGISTER_USER})
        if(fullname !== '' || email !== '' || password !== '' || conPassword !== ''){
            Axios.post(API_URL + '/users/addnewuser', fullname, email, password)
            .then((res)=> {
                console.log(res.data)
                
                dispatch({type: LOGIN_USER_SUCCESS, payload: res.data})
            })
            .catch((err)=> {
                console.log(err);
                dispatch({type: REGISTER_USER_FAIL, payload: 'disini nih ' + err})
            })
            .then(()=> {
                dispatch({type: REGISTER_USER_SUCCESS})
            })    
            .catch((err)=> {
                console.log(err.data)
                dispatch({type: REGISTER_USER_FAIL, payload: 'error disini ' + err})
            })
        }else{ dispatch({type: REGISTER_USER_FAIL, payload: 'All Form Must Be'})}
    }
}