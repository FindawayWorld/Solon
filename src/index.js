import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';

import './scss/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';

<<<<<<< HEAD
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

Amplify.configure({
    Auth: {
        userPoolId: process.env.REACT_APP_USER_POOL_ID,
        userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID,
        region: process.env.REACT_APP_AWS_REGION
    }
});

const AppWrapper = () => (
    <Router>
        <AuthProvider>
            <App />
        </AuthProvider>
    </Router>
);

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
=======
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
>>>>>>> 4d2fb651ac1a4a5de1d41a0a7bf5e3fc50283d49
