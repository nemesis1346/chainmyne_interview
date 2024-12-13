import { combineReducers } from 'redux';
import userReducer from './userReducer';
import coinPageReducer from './coinPageReducer';
import constantReducer from './constantReducers';
//This is for comining all different reducers
export default combineReducers({
    userReducer,
    coinPageReducer,
    constantReducer
});