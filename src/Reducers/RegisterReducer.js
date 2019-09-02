import { FULLNAME_REGISTER_CHANGED,
         EMAIL_REGISTER_CHANGED,
         PASSWORD_REGISTER_CHANGED,
         CON_PASSWORD_REGISTER_CHANGED,
         REGISTER_USER, 
         REGISTER_USER_FAIL,
         REGISTER_USER_SUCCESS } from '../Actions/Types'

const INITIAL_STATE = {
        fullname: '',
        email: '',
        password: '',
        conPassword: '',
        loading: false,
        error: ''
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
                return { ...INITIAL_STATE, loading: false}
            default: 
            return state
        }
    }