import { LOADER, MESSAGES } from '../actionTypes/uiTypes'

export const spinner = (value)=> {
    return {
        type: LOADER,
        payload: value
    }
}

export const loaderMessages = (value)=> {
    return {
        type: MESSAGES,
        payload: value
    }
}