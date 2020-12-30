import { LOADER, MESSAGES } from '../actionTypes/uiTypes';

const initialState = {
    loader: false,
    messages: null
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
        default: {
            return newState;
        }
    }
};
