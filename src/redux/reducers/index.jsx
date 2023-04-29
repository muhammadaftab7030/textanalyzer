import { combineReducers } from "redux";
import { counterReducer } from "./counter";


let rootReducer = combineReducers({
    counter: counterReducer
})

export default rootReducer