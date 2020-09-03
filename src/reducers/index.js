import {combineReducers} from "redux";
import userReducer from "./userReducer";
import splashReducer from "./splashReducer";

export default combineReducers({
    splash: splashReducer,
    user: userReducer
});
