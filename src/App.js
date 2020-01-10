import React from 'react';
import classnames from 'classnames';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import ComponentsPage from './pages/Components';
import ContentPage from './pages/Content';
import UtilsPage from './pages/Utils';
import HomePage from './pages/Home';
import {ReactComponent as ExternalLinkIcon} from './svg/external-link.svg';

const NavLink = ({to, children, className, activeClass, activeWhenExact =  true}) => {
    let match = useRouteMatch({
        path: to,
        exact: activeWhenExact
    });

    return (
        <Link className={classnames(
            className,
            {
                [activeClass]:  match
            }
        )} to={to}>{children}</Link>
    );
}

function App() {
    return (
        <Router>
            <div className="site-header">
                <div className="container">
                    <h1 className="branding"><NavLink className="reverse-cta" activeClass="active" activeWhenExact to="/">Gateway</NavLink></h1>
                    <ul className="list-inline">
                        <li><NavLink className="reverse-cta" activeClass="active" activeWhenExact to="/content">Content</NavLink></li>
                        <li><NavLink className="reverse-cta" activeClass="active" activeWhenExact to="/components">Components</NavLink></li>
                        <li><NavLink className="reverse-cta" activeClass="active" activeWhenExact to="/utils">Utils</NavLink></li>
                        <li><a href="https://github.com/FindawayWorld/gateway" target="_blank" rel="noopener noreferrer">Github <ExternalLinkIcon width=".875em" height=".875em" /></a></li>
                    </ul>
                </div>
            </div>

                <div className="container">
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
                </Switch>
                </div>

        </Router>


    );
}

export default App;