import * as CONSTANTS from '../constants/types';
import * as ERRORS from '../constants/errors';
const initState = {
    projects: [],
    error: ''
}

const softwareProjectsPageReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case CONSTANTS.GET_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: action.projects
            }
        case ERRORS.ERROR_MIDDLEWARE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export default softwareProjectsPageReducer;