import { BACK_SUCCESS, FRONT_SUCCESS, IMAGE_UPLOADING, LEFT_SUCCESS, RIGHT_SUCCESS } from '../actionTypes/animalTypes';

const initialState = {
    isuploading: false,
    frontSuccess: false,
    rightSuccess: false,
    leftSuccess: false,
    backSuccess: false,
};

export const animalReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case IMAGE_UPLOADING: {
            newState.isuploading = action.payload;
            return newState;
        }
        case FRONT_SUCCESS: {
            newState.frontSuccess = action.payload;
            return newState;
        }
        case BACK_SUCCESS: {
            newState.backSuccess = action.payload;
            return newState;
        }
        case LEFT_SUCCESS: {
            newState.leftSuccess = action.payload;
            return newState;
        }
        case RIGHT_SUCCESS: {
            newState.rightSuccess = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
