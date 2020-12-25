import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/Store';
import App from './App';
import 'regenerator-runtime/runtime';
import './Styles/css/style.css';
import './Styles/scss/index.scss';



ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>,
    document.getElementById('root')
);
