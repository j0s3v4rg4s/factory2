import * as factory from './factory.share'
import { Action } from '../share'

function factoryReducer(state = factory.factoryDefault, action: Action) {
    switch (action.type) {
        case factory.SET_FACTORY_INFO:
            return { ...state, ...{ factory: action.payload } }
        default:
            return state
    }
}

export default factoryReducer
