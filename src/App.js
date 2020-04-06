import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import ComponentsPage from './pages/Components';
import ContentPage from './pages/Content';
import UtilsPage from './pages/Utils';
import HomePage from './pages/Home';
import JSPage from './pages/Javascript';
import SignIn from './pages/auth/SignIn';
import ForgotPassword from './pages/auth/ForgotPassword';


import { AuthProvider } from './context/AuthContext';
import ForgotPasswordVerification from './pages/auth/ForgotPasswordVerification';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/components">
                        <ComponentsPage />
                    </Route>
                    <Route path="/content">
                        <ContentPage />
                    </Route>
                    <Route path="/utils">
                        <UtilsPage />
                    </Route>
                    <Route path="/javascript">
                        <JSPage />
                    </Route>
                    <Route path="/log-in">
                        <SignIn />
                    </Route>
                    <Route path="/forgot-password">
                        <ForgotPassword />
                    </Route>
                    <Route path="/forgot-password-verification">
                        <ForgotPasswordVerification />
                    </Route>
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;
