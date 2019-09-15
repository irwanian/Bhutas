import { FULLNAME_REGISTER_CHANGED,
         EMAIL_REGISTER_CHANGED,
         PASSWORD_REGISTER_CHANGED,
         CON_PASSWORD_REGISTER_CHANGED,
         REGISTER_USER, 
         REGISTER_USER_FAIL,
         REGISTER_USER_SUCCESS,
         LOGIN_USER,
         LOGIN_USER_FAIL,
         LOGIN_USER_SUCCESS,
         LOGOUT_USER, 
         KEEP_LOGIN } from '../Actions/Types'

const INITIAL_STATE = {
        userId: 0,
        fullname: '',
        email: '',
        password: '',
        conPassword: '',
        loading: false,
        error: '',
        justRegistered: false,
        justLogin: false,
        role_id: ''
    }

    export default (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case FULLNAME_REGISTER_CHANGED:
                return { ...state, fullname: action.payload }
            case EMAIL_REGISTER_CHANGED:
                return { ...state, email: action.payload }
            case PASSWORD_REGISTER_CHANGED:
                return { ...state, password: action.payload }
            case CON_PASSWORD_REGISTER_CHANGED:
                return { ...state, conPassword: action.payload }
            case REGISTER_USER:
                return { ...state, loading: true, error: ''}
            case REGISTER_USER_FAIL:
                return { ...state, error: action.payload, loading: false}
            case REGISTER_USER_SUCCESS:
                return { ...state, ...action.payload }
            case LOGIN_USER:
                return {...state, loading: true, error: ''}
            case LOGIN_USER_FAIL:
                return {...state, error: action.payload, loading: false}
            case LOGIN_USER_SUCCESS:
                return {...state, ...action.payload}
            case KEEP_LOGIN:
                console.log(action.payload)
                console.log(state)
                return  {...state, ...action.payload}  
                case LOGOUT_USER: 
                return {...INITIAL_STATE} 
            default: 
                return state
        }
    }