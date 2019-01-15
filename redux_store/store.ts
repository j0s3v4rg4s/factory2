import { applyMiddleware, combineReducers, createStore } from 'redux'
import userReducer from './user/user.reducer'
import factoryReducer from './factory/factory.reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { sagaRoot, State, stateDefault } from './share'


const reducers = combineReducers<State>({
    userReducer,
    factoryReducer
})

const initStore = (initStore = stateDefault) => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(reducers, initStore, composeWithDevTools(applyMiddleware(sagaMiddleware)))

    store['runSagaTask'] = () => {
        store['sagaTask'] = sagaMiddleware.run(sagaRoot)
    }
    store['runSagaTask']()

    return store
}

export default initStore
