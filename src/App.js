import React from 'react';
import classnames from 'classnames';
import { Switch, Route, Link, useRouteMatch, useLocation } from 'react-router-dom';

import ComponentsPage from './pages/Components';
import ContentPage from './pages/Content';
import UtilsPage from './pages/Utils';
import HomePage from './pages/Home';
import JSPage from './pages/Javascript';
import ColorTester from './pages/ColorTester';
import FontTester from './pages/FontTester';

import {
    FaFileAlt,
    FaHeart,
    FaPalette,
    FaPuzzlePiece,
    FaTools,
    FaJsSquare,
    FaFont,
    FaGithub,
    FaChevronLeft
} from 'react-icons/fa';
import { ReactComponent as GatewayLogo } from './svg/GatewayLogo.svg';

export const NavLink = ({ to, className, activeClass, activeWhenExact = true, ...props }) => {
    let match = useRouteMatch({
        path: to,
        exact: activeWhenExact
    });

    return (
        <Link
            className={classnames(className, {
                [activeClass]: match
            })}
            to={to}
            {...props}
        />
    );
};

export const componentsNav = [
    ['/components/breadcrumbs', 'Breadcrumbs'],
    ['/components/buttons', 'Buttons'],
    ['/components/flashes', 'Flashes (alerts)'],
    ['/components/formatted-currency', 'Formatted Currency'],
    ['/components/formatted-plural', 'Formatted Plural'],
    ['/components/loading', 'Loading'],
    ['/components/modal', 'Modal'],
    ['/components/pagination', 'Pagination']
];

const App = () => {
    const [collapseSidebar, setCollapseSidebar] = React.useState(false);
    const location = useLocation();

    return (
        <div className="site-row">
            <nav
                className={classnames('sidebar', {
                    'sidebar-slim': collapseSidebar
                })}
            >
                <div className="sidebar-wrapper py-8">
                    <NavLink className="logo" activeClass="active" activeWhenExact to="/">
                        <GatewayLogo height="1.5em" width="1.011em" /> <span>Gateway</span>
                    </NavLink>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClass="active" to="/content">
                                <FaFileAlt />
                                <span>Content</span>
                            </NavLink>
                        </li>
                        <li
                            className={classnames('nav-item', {
                                active: location.pathname.includes('/components')
                            })}
                        >
                            <NavLink className="nav-link" activeClass="active" activeWhenExact={false} to="/components">
                                <FaPuzzlePiece />
                                <span>Components</span>
                            </NavLink>
                            <ul className="nav">
                                {componentsNav.map((page) => (
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClass="active" to={page[0]}>
                                            {page[1]}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClass="active" to="/utils">
                                <FaTools />
                                <span>Utils</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClass="active" activeWhenExact to="/javascript">
                                <FaJsSquare />
                                <span>Javascript</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClass="active" activeWhenExact to="/color-tester">
                                <FaPalette />
                                <span>Color Tester</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClass="active" activeWhenExact to="/font-tester">
                                <FaFont />
                                <span>Font Tester</span>
                            </NavLink>
                        </li>
                    </ul>

                    <hr />

                    <ul className="nav">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://github.com/FindawayWorld/gateway"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub /> <span>Github</span>
                            </a>
                        </li>
                    </ul>
                    <button className="btn collapse-button" onClick={() => setCollapseSidebar(!collapseSidebar)}>
                        <FaChevronLeft />
                    </button>
                </div>
            </nav>
            <div className="main-wrapper px-12 py-8">
                <main className="page" role="main">
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
                        <Route path="/color-tester">
                            <ColorTester />
                        </Route>
                        <Route path="/font-tester">
                            <FontTester />
                        </Route>
                    </Switch>
                </main>
                <footer className={classnames('site-footer')}>
                    <small>
                        Built with <FaHeart style={{ color: 'red' }} /> by <a href="https://findaway.com">Findaway</a>,
                        in CLE.
                    </small>
                </footer>
            </div>
        </div>
    );
};

export default App;
