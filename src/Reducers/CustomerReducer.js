import { SEARCH_BOX_CHANGE, SEARCH_PRODUCTS, SEARCH_FAIL, SEARCH_SUCCESS, ADD, REDUCE, CART_ADDED, WAITING_PAYMENT, PAYMENT_SUCCESS_OR_FAILED } from '../Actions/Types'

const INITIAL_STATE = {
    searchInput: '',
    loading: false,
    cartContent: 0,
    productQty: 0,
    checkoutStatus: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_BOX_CHANGE:
            return {...state, searchInput: action.payload}
        case SEARCH_PRODUCTS:
            return { ...state,  loading: true}
        case SEARCH_SUCCESS: 
            return {...state, loading: false}
        case SEARCH_FAIL:
            return { ...INITIAL_STATE }
        case CART_ADDED:
            return {...state, cartContent: action.payload}
        case WAITING_PAYMENT:
            return {...state, checkoutStatus: state.checkoutStatus + 1 }
        case PAYMENT_SUCCESS_OR_FAILED:
            return {...INITIAL_STATE }
        case ADD:
            return {...INITIAL_STATE, productQty: state.productQty + 1}
        case REDUCE:
            return {...INITIAL_STATE, productQty: state.productQty -1}    
        default:
            return state
    }
}
