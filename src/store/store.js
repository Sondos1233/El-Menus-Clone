import { createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import combineReducers from './combine';
<<<<<<< HEAD
const store = createStore(combineReducers,composeWithDevTools())
=======

const store = createStore(combineReducers,composeWithDevTools())

>>>>>>> Footer
export default store;