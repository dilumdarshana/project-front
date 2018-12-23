import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ReactModal from 'react-modal';
import Routes from './routes';
import store from './store';
import './assets/styles/main.scss';

ReactModal.setAppElement('#main_container');

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('main_container'),
);
