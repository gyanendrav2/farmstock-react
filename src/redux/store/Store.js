import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware));
const store = createStore(rootReducer, {}, middleware);

const dispatch = store.dispatch;

export { store, dispatch };
