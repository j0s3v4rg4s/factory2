import { COMPLETE_VALIDATE, IS_LOGIN, LOGIN_COMPLETE, LOGIN_ERROR, userDefaultState } from './user.share'
import { Action } from 'redux_store/share'

function userReducer(state = userDefaultState, action: Action) {
    switch (action.type) {
        case IS_LOGIN:
            return {...state, ...{isLoading: true, errorLoading: null}}
        case LOGIN_COMPLETE:
            return {...state, ...{isLoading: false, user: action.payload}}
        case LOGIN_ERROR:
            return {...state, ...{isLoading: false, errorLoading: action.payload}}
        case COMPLETE_VALIDATE:
            return {...state, ...{completeValidate: true}}
        default:
            return state
    }
}

export default userReducer;

