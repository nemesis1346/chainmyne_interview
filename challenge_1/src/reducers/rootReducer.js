import { combineReducers } from 'redux';
import userReducer from './userReducer';
import coinPageReducer from './coinPageReducer';
//This is for comining all different reducers
export default combineReducers({
    userReducer,
    coinPageReducer,
});