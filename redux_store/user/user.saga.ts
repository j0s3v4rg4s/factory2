import { all, put, takeLatest } from 'redux-saga/effects'
import { isLogin, loginComplete, loginError } from 'redux_store/user/user.actions'
import { LOGIN } from 'redux_store/user/user.share'
import { Action } from 'redux_store/share'
import Firebase from 'config/firebase/fire'
import firebase from 'firebase/app'
import Router from 'next/router'

function* login(action: Action) {
    const { email, pass, redirect } = action.payload
    yield put(isLogin())
    try {
        const userCredential: firebase.auth.UserCredential = yield Firebase.getInstance().auth.signInWithEmailAndPassword(
            email,
            pass
        )
        yield Router.push(redirect)
        yield put(loginComplete(userCredential.user))
    } catch (e) {
        switch (e.code) {
            case 'auth/user-not-found':
                return yield put(loginError('Correo o contraseña invalida'))
            default:
                return yield put(loginError('No pudimos procesar la acción, inténtalo más tarde'))
        }
    }
}

function* watchLogin() {
    yield takeLatest(LOGIN, login)
}

export default function*() {
    yield all([watchLogin()])
}
