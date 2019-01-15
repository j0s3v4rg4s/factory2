import firebase from 'firebase/auth'
import Firebase from '../../config/firebase/fire'
import { all, put } from 'redux-saga/effects'
import { setFactoryInfo } from './factory.actions'

export function* loadFactory(user: firebase.User) {
    const domain = user.email.split('@')[1]
    const { firestore } = Firebase.getInstance()
    const query = firestore.collection('factory').where('domain', '==', domain)
    const snap: firebase.firestore.QuerySnapshot = yield query.get()
    const data = snap.docs[0].data()
    yield put(setFactoryInfo(data))
}

export default function*() {
    yield all([])
}
