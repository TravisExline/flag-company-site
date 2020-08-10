import {ADD_FLAG, SET_FLAGS} from '../actions/flagActions'

export default (state = [], action) => {
    switch(action.type) {
        case ADD_FLAG:
            return [...state, action.flag]
        case SET_FLAGS:
            return action.flags
        default:
            return state
    }
}