import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import filmsApp from './reducers/index';
import App from './components/App';

const store = createStore(filmsApp);

render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('app')
);