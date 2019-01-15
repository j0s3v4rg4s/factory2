import { Action } from '../share'
import * as factory from './factory.share'

export function setFactoryInfo(data: factory.FactoryInfo): Action {
    return {
        type: factory.SET_FACTORY_INFO,
        payload: data
    }
}