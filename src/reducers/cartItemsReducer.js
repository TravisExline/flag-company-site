import {ADD_ITEM} from '../actions/cartItemAction'

export default (state = [], action) => {
    switch(action.type) {
        case ADD_ITEM:
            return [...state, action.item]
        default:
            return state
    }
}