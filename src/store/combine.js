import { combineReducers } from "redux";
import languageReducer from "./reducer/languageReducer";
export default  combineReducers({
    language:languageReducer,
  })