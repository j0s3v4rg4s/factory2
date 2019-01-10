import { UserState } from 'redux_store/user/share'

export interface Action<U=string> {
    type: string
    payload?: U
}

export interface State {
    userReducer: UserState
}
