import counterReducer from "./counterReducer";
import signinReducer from "./signinReducer";
import { combineReducers } from "redux";

const allReducers=combineReducers(
    {
        counter:counterReducer,
        signin:signinReducer
    }
)

export default allReducers;