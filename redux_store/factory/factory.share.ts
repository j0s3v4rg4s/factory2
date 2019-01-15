export const SET_FACTORY_INFO  = '[factory] set factory data'

export interface FactoryInfo {
    domain: string
    img: string
    imgName: string
    key: string
    name: string
}

export interface FactoryState {
    factory: FactoryInfo
}

export const factoryDefault: FactoryState = {
    factory: {
        domain: null,
        img: null,
        imgName: null,
        key: null,
        name: null
    }
}
