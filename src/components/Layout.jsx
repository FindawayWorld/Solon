import React, { useContext } from 'react';
import { Auth } from 'aws-amplify';

import { FiExternalLink } from 'react-icons/fi';

import { ReactComponent as GatewayLogo } from '../svg/GatewayLogo.svg';

import NavLink from './NavLink';
import { Link } from 'react-router-dom';
import { AuthContext, appActions } from '../context/AuthContext';

const Layout = ({ children }) => {
    const { state: authState, dispatch } = useContext(AuthContext);
    const handleLogOut = () => {
        try {
            Auth.signOut();
            dispatch({ type: appActions.LOGOUT });
        } catch (error) {
            console.log('\n', '\n', `Navbar, log-out error = `, error, '\n', '\n');
        }
    };
    return (
        <>
            <div className="site-header">
                <div className="container">
                    <h1 className="branding">
                        <NavLink activeClass="active" activeWhenExact to="/">
                            <GatewayLogo height="1.5em" width="auto" /> Gateway
                        </NavLink>
                    </h1>
                    <ul className="list-inline">
                        <li>
                            <NavLink className="reverse-cta" activeClass="active" activeWhenExact to="/content">
                                Content
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="reverse-cta" activeClass="active" activeWhenExact to="/components">
                                Components
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="reverse-cta" activeClass="active" activeWhenExact to="/utils">
                                Utils
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="reverse-cta" activeClass="active" activeWhenExact to="/javascript">
                                Javascript
                            </NavLink>
                        </li>
                        {authState.user && !authState.isLoading && (
                            <li>
                                <NavLink className="reverse-cta" activeClass="active" activeWhenExact to="/account">
                                    My Account
                                </NavLink>
                            </li>
                        )}
                        <li>
                            {!authState.user && !authState.isLoading && (
                                <Link to="/sign-in" className="btn btn-primary">
                                    Sign In
                                </Link>
                            )}
                            {authState.user && !authState.isLoading && (
                                <button className="btn btn-primary" onClick={handleLogOut}>
                                    Sign Out
                                </button>
                            )}
                        </li>
                        <li>
                            <a
                                href="https://github.com/FindawayWorld/gateway"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github <FiExternalLink width=".875em" height=".875em" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">{children}</div>
        </>
    );
};

export default Layout;
