import {combineReducers} from "redux"
import flagsReducer from './flagsReducer'
import cartItemsReducer from './cartItemsReducer'
import testFlagReducer from './testFlagReducer'

export default combineReducers({
    flagsReducer,
    cartItemsReducer,
    testFlagReducer
})