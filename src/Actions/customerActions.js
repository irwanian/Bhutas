import { SEARCH_BOX_CHANGE } from "./Types";


export const customerSearching = (text) => {
    return {
        type: SEARCH_BOX_CHANGE,
        payload: text
    }
}


