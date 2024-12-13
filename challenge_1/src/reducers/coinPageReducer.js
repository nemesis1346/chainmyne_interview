import * as CONSTANTS from '../constants/types';
import * as ERRORS from '../constants/errors';
const initState = {
    coins: [],
    error: ''
}

const coinPageReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case CONSTANTS.GET_COINS_SUCCESS:
            return {
                ...state,
                coins: action.coins
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

export default coinPageReducer;