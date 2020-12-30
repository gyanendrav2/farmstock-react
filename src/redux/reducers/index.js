import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { animalReducer } from './animalReducer';

export const rootReducer = combineReducers({
    uiReducer,
    animalReducer,
});
