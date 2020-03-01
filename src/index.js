import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import reminders from './reducers/index';
import './index.css'

const store = createStore(reminders);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)