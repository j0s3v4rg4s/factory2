import { applyMiddleware, combineReducers, createStore } from 'redux'
import userReducer from './user/user.reducer'
import { userDefaultState } from './user/user.share'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import userSaga from 'redux_store/user/user.saga'


const reducers = combineReducers({
    userReducer
})

const initStore = (initStore = { userReducer: userDefaultState }) => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(reducers, initStore, composeWithDevTools(applyMiddleware(sagaMiddleware)))

    store['runSagaTask'] = () => {
        store['sagaTask'] = sagaMiddleware.run(userSaga)
    }
    store['runSagaTask']()

    return store
}

export default initStore
