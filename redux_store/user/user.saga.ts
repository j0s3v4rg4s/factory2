import { all, put, takeLatest } from 'redux-saga/effects'
import { isLogin, loginComplete, loginError } from 'redux_store/user/user.actions'
import { LOGIN } from 'redux_store/user/share'
import { Action } from 'redux_store/share'
import Firebase from 'config/firebase/fire'
import firebase from 'firebase/app'

function* login(action: Action<{ email: string; pass: string }>) {
    const {email, pass} = action.payload
    yield put(isLogin())
    try {
        const userCredential: firebase.auth.UserCredential = yield Firebase.getInstance().auth.signInWithEmailAndPassword(
            email,
            pass
        )
        yield put(loginComplete(userCredential))
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
