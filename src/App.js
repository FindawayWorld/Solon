import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import { Auth } from 'aws-amplify';

import ComponentsPage from './pages/Components';
import ContentPage from './pages/Content';
import UtilsPage from './pages/Utils';
import HomePage from './pages/Home';
import JSPage from './pages/Javascript';
import ColorTester from './pages/ColorTester';
import FontTester from './pages/FontTester';
import SignIn from './pages/auth/SignIn';
import ForgotPassword from './pages/auth/ForgotPassword';
import NewPasswordRequired from './pages/auth/NewPasswordRequired';

import ForgotPasswordVerification from './pages/auth/ForgotPasswordVerification';
import PrivateRoute from './components/PrivateRoute';
import AccountIndex from './pages/account';
import Register from './pages/auth/Register';

import BrandSettings from './pages/BrandSettings';
import { useDispatch } from 'react-redux';
import { authLoginFailure, authLoginStart, authLoginSuccess } from './slices/authSlice';
import useDisabledLinks from './hooks/useDisabledLinks';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function persistLogin() {
            dispatch(authLoginStart());
            try {
                const user = await Auth.currentAuthenticatedUser({ bypassCache: true });
                dispatch(authLoginSuccess({ user }));
            } catch (error) {
                dispatch(authLoginFailure({ error }));
            }
        }
        persistLogin();
    }, [dispatch]);

    useDisabledLinks();

    return (
        <Switch>
            <Route exact path="/">
                <ScrollToTop />
                <HomePage />
            </Route>
            <Route path="/components">
                <ScrollToTop />
                <ComponentsPage />
            </Route>
            <Route path="/content">
                <ScrollToTop />
                <ContentPage />
            </Route>
            <Route path="/utils">
                <ScrollToTop />
                <UtilsPage />
            </Route>
            <Route path="/javascript">
                <ScrollToTop />
                <JSPage />
            </Route>
            <Route path="/color-tester">
                <ScrollToTop />
                <ColorTester />
            </Route>
            <Route path="/font-tester">
                <ScrollToTop />
                <FontTester />
            </Route>
            <Route path="/brand-settings">
                <ScrollToTop />
                <BrandSettings />
            </Route>
            <Route path="/sign-in">
                <SignIn />
            </Route>
            <Route path="/forgot-password">
                <ForgotPassword />
            </Route>
            <Route path="/forgot-password-verification">
                <ForgotPasswordVerification />
            </Route>
            <Route path="/new-password-required">
                <NewPasswordRequired />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <PrivateRoute exact path="/account">
                <AccountIndex />
            </PrivateRoute>
        </Switch>
    );
};

export default App;
