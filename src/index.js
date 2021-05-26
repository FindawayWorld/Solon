import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';

import './scss/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

Amplify.configure({
    Auth: {
        userPoolId: process.env.REACT_APP_USER_POOL_ID,
        userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID,
        region: process.env.REACT_APP_AWS_REGION
    }
});

const AppWrapper = () => (
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
);

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
