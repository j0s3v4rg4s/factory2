import firebase from 'firebase/app'

export const LOGIN          = '[user] go to login'
export const LOGIN_COMPLETE = '[user] login complete'
export const LOGIN_ERROR    = '[user] login error'
export const IS_LOGIN       = '[user] is login'

export interface UserState {
    isLoading: boolean
    errorLoading: string
    user: firebase.auth.UserCredential
}

export const userDefaultState: UserState = {
    isLoading: false,
    errorLoading: null,
    user: null
}
