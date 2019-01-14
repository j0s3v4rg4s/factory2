import { UserState } from 'redux_store/user/user.share'

export interface Action {
    type: string
    payload?: any
}

export interface State {
    userReducer: UserState
}
