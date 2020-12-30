import { LOADER, MESSAGES, BACKGROUND_COLOR } from '../actionTypes/uiTypes'

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

export const setBackgroundColor = (value)=> {
    return {
        type: BACKGROUND_COLOR,
        payload: value
    }
}