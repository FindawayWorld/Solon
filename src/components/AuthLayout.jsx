import React from 'react';
import {ReactComponent as GatewayLogo} from '../svg/GatewayLogo.svg';
import {Link} from 'react-router-dom';

const AuthLayout = ({children}) => {
    return (
        <div className="page-signin p-3">
            <div className="mb-4 txt-center">
                <Link to="/">
                    <GatewayLogo height="8em" width="auto" />
                </Link>
            </div>
            {children}
            <div className="signin-footer txt-center mt-5">
                <small>
                    &copy; {new Date().getFullYear()} Findaway. All rights reserved.
                </small>
            </div>
        </div>
    )
};

export default AuthLayout;