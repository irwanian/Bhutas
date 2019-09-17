import { SEARCH_BOX_CHANGE, ADD, REDUCE, CART_ADDED, WAITING_PAYMENT, PAYMENT_SUCCESS_OR_FAILED } from "./Types";


export const customerSearching = (text) => {
    return {
        type: SEARCH_BOX_CHANGE,
        payload: text
    }
}

export const addQuantity = () => {
    return{
        type: ADD
    }
}


export const reduceQuantity = () => {
    return {
        type: REDUCE
    }
}

export const addedCartContent = (add) => {
    return {
        type: CART_ADDED,
        payload: add
    }
}

export const  checkingOut = () => {
    return {
        type: WAITING_PAYMENT
    }
}

export const  trxPaidorCanceled = () => {
    return {
        type: PAYMENT_SUCCESS_OR_FAILED
    }
}