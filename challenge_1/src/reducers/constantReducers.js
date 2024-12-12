import * as CONSTANTS from '../constants/types';

const initState = {
    language: 'language'
}

const constantReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case CONSTANTS.SET_LANGUAGE:
            return {
                ...constantReducer,
                language: action.language
            }
        default:
            return state;
    }
}
export default constantReducer;