import { SEARCH_BOX_CHANGE, ADD, REDUCE } from "./Types";


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

