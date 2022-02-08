import { combineReducers } from "redux";
import languageReducer from "./reducer/languageReducer";
import filterMoodReducer from "./reducer/filterMoodReducer";
export default  combineReducers({
    language:languageReducer,
    filterListByMood: filterMoodReducer,
  })