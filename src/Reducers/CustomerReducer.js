import { SEARCH_BOX_CHANGE, SEARCH_PRODUCTS, SEARCH_FAIL, SEARCH_SUCCESS, ADD, REDUCE } from '../Actions/Types'

const INITIAL_STATE = {
    searchInput: '',
    loading: false,
    cartContent: 0
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
        case ADD:
            return {...INITIAL_STATE, cartContent: state.cartContent + 1}
        case REDUCE:
            return {...INITIAL_STATE, cartContent: state.cartContent -1}    
        default:
            return state
    }
}
