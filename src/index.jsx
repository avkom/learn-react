import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import filmsApp from './reducers';
import App from './components/App';

const store = createStore(filmsApp, applyMiddleware(thunk));

render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('app')
);