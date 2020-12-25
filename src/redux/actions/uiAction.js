import { LOADER } from '../actionTypes/uiTypes'

export const spinner = (value)=> {
    return {
        type: LOADER,
        payload: value
    }
}