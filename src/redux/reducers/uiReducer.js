import { LOADER, MESSAGES, BACKGROUND_COLOR } from '../actionTypes/uiTypes';

const initialState = {
    loader: false,
    messages: null,
    backgroundColor: ''
};

export const uiReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case LOADER: {
            newState.loader = action.payload;
            return newState;
        }
        case MESSAGES: {
            newState.messages = action.payload;
            return newState;
        }
        case BACKGROUND_COLOR: {
            newState.backgroundColor = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
