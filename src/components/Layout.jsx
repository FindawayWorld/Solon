import React from 'react';

import {FiExternalLink} from 'react-icons/fi';
import {ReactComponent as GatewayLogo} from '../svg/GatewayLogo.svg';
import NavLink from './NavLink';
import {Link} from 'react-router-dom';

const Layout = ({children}) => {
    return (<>
        <div className="site-header">
            <div className="container">
                <h1 className="branding"><NavLink activeClass="active" activeWhenExact to="/"><GatewayLogo height="1.5em" width="auto" /> Gateway</NavLink></h1>
                <ul className="list-inline">
                    <li><NavLink className="reverse-cta" activeClass="active" activeWhenExact to="/content">Content</NavLink></li>
                    <li><NavLink className="reverse-cta" activeClass="active" activeWhenExact to="/components">Components</NavLink></li>
                    <li><NavLink className="reverse-cta" activeClass="active" activeWhenExact to="/utils">Utils</NavLink></li>
                    <li><NavLink className="reverse-cta" activeClass="active" activeWhenExact to="/javascript">Javascript</NavLink></li>
                    <li><Link to="/log-in" className="btn btn-primary">Sign In</Link></li>
                    <li><a href="https://github.com/FindawayWorld/gateway" target="_blank" rel="noopener noreferrer">Github <FiExternalLink width=".875em" height=".875em" /></a></li>
                </ul>
            </div>
        </div>
        <div className="container">{children}</div>
    </>);
};

export default Layout;