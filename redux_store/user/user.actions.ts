import { IS_LOGIN, LOGIN, LOGIN_COMPLETE, LOGIN_ERROR } from './share'
import { Action } from 'redux_store/share'
import firebase from 'firebase/app'

export const loginComplete = (user: firebase.auth.UserCredential): Action<firebase.auth.UserCredential> => ({
    type: LOGIN_COMPLETE,
    payload: user
})

export const loginError = (errMsg: string): Action => ({ type: LOGIN_ERROR, payload: errMsg })

export const login = (email: string, pass: string): Action<{ email: string; pass: string }> => ({
    type: LOGIN,
    payload: { email, pass }
})

export function isLogin(): Action {
    return { type: IS_LOGIN }
}
