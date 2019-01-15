import { all, put, takeLatest } from 'redux-saga/effects'
import { completeValidate, isLogin, loginComplete, loginError } from 'redux_store/user/user.actions'
import { LOAD_FIRST_INFO, LOGIN } from 'redux_store/user/user.share'
import { Action } from 'redux_store/share'
import Firebase from 'config/firebase/fire'
import firebase from 'firebase/app'
import Router from 'next/router'
import { loadFactory } from 'redux_store/factory/factory.saga'

function* login(action: Action) {
    const { email, pass, redirect } = action.payload
    yield put(isLogin())
    try {
        const userCredential: firebase.auth.UserCredential = yield Firebase.getInstance().auth.signInWithEmailAndPassword(
            email,
            pass
        )
        yield loadFactory(userCredential.user)
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

function* loadInitInfo(action: Action) {
    const user: firebase.User = action.payload
    yield loadFactory(user)
    yield put(loginComplete(user))
    yield put(completeValidate())
}

export default function*() {
    yield all([yield takeLatest(LOGIN, login), yield takeLatest(LOAD_FIRST_INFO, loadInitInfo)])
}
