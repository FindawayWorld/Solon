import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import Amplify, { Auth } from 'aws-amplify';

import './scss/styles.scss';

import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

Amplify.configure({
    Auth: {
        authenticationFlowType: 'USER_SRP_AUTH',
        userPoolId: process.env.REACT_APP_USER_POOL_ID,
        userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID,
        region: 'us-east-1',
        mandatorySignin: false
    },
    API: {
        endpoints: [
            {
                name: 'audiobooks-api',
                endpoint: process.env.REACT_APP_NEW_ENDPOINT,
                custom_header: async () => {
                    return {
                        Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
                    };
                }
            },
            {
                name: 'catalog-api',
                endpoint: process.env.REACT_APP_CATALOG_DOWNLOAD_LINK_ENDPOINT,
                custom_header: async () => {
                    return {
                        Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
                    };
                }
            }
        ]
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
