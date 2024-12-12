import { combineReducers } from 'redux';
import userReducer from './userReducer';
import softwareProjectsPageReducer from './softwareProjectsPageReducer';
import constantReducer from './constantReducers';
//This is for comining all different reducers
export default combineReducers({
    userReducer,
    softwareProjectsPageReducer,
    constantReducer
});