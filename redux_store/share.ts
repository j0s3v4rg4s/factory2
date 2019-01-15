import { userDefaultState, UserState } from 'redux_store/user/user.share'
import { factoryDefault, FactoryState } from './factory/factory.share'
import { all } from 'redux-saga/effects'
import userSaga from './user/user.saga'
import factorySaga from './factory/factory.saga'

export interface Action {
    type: string
    payload?: any
}

export interface State {
    userReducer: UserState
    factoryReducer: FactoryState
}

export const stateDefault: State = {
    userReducer: userDefaultState,
    factoryReducer: factoryDefault
}

export function* sagaRoot() {
    yield all([userSaga(), factorySaga()])
}
