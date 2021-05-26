import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const state = useSelector((state) => state.auth);
    return (
        <Route
            {...rest}
            render={(props) => {
                return state.user ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                );
            }}
        />
    );
};

export default PrivateRoute;
