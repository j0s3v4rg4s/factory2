import { COMPLETE_VALIDATE, IS_LOGIN, LOGIN, LOGIN_COMPLETE, LOGIN_ERROR } from './user.share'
import { Action } from 'redux_store/share'
import firebase from 'firebase/app'

export const loginComplete = (user: firebase.User): Action => ({
    type: LOGIN_COMPLETE,
    payload: user
})

export const loginError = (errMsg: string): Action => ({ type: LOGIN_ERROR, payload: errMsg })

export const login = (email: string, pass: string, redirect: string): Action => ({
    type: LOGIN,
    payload: { email, pass, redirect }
})

export function isLogin(): Action {
    return { type: IS_LOGIN }
}

export function completeValidate(): Action {
    return {
        type: COMPLETE_VALIDATE
    }
}
