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
    FaChevronLeft,
    FaCog
} from 'react-icons/fa';
import { ReactComponent as SolonLogo } from './svg/solon_logo.svg';
import { ReactComponent as SolonIcon } from './svg/solon_icon.svg';
import { asc } from './utils/sorts';
import BrandSettings from './pages/BrandSettings';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export const componentsNav = [
    ['/components/badges', 'Badges'],
    ['/components/breadcrumbs', 'Breadcrumbs'],
    ['/components/buttons', 'Buttons'],
    ['/components/flashes', 'Flashes (alerts)'],
    ['/components/forms', 'Forms'],
    ['/components/formatted-currency', 'Formatted Currency'],
    ['/components/formatted-plural', 'Formatted Plural'],
    ['/components/loading', 'Loading'],
    ['/components/modal', 'Modal'],
    ['/components/pagination', 'Pagination']
];

componentsNav.sort((a, b) => asc(a[1], b[1]));

export const utilsNav = [
    ['/utils/breakpoints', 'Breakpoints'],
    ['/utils/spacing', 'Spacing'],
    ['/utils/colors', 'Colors'],
    ['/utils/grids', 'Grids'],
    ['/utils/border-radius', 'Border Radius']
];

utilsNav.sort((a, b) => asc(a[1], b[1]));

const App = () => {
    const medium = window.matchMedia('(max-width: 768px)');
    const [collapseSidebar, setCollapseSidebar] = React.useState(medium.matches);
    const location = useLocation();

    const NavLink = ({ to, className, activeClass, activeWhenExact = true, ...props }) => {
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
                onClick={() => {
                    if (medium.matches) {
                        setCollapseSidebar(true);
                    }
                }}
                {...props}
            />
        );
    };

    return (
        <div className="site-row">
            <nav
                className={classnames('sidebar', {
                    'sidebar-slim': collapseSidebar
                })}
            >
                <div className="sidebar-wrapper">
                    <div className="sidebar-header">
                        <NavLink className="logo" activeClass="active" activeWhenExact to="/">
                            <SolonIcon width={50} className="small-logo" />
                            <SolonLogo className="full-logo" />
                        </NavLink>
                        <button className="btn collapse-button" onClick={() => setCollapseSidebar(!collapseSidebar)}>
                            <FaChevronLeft />
                        </button>
                    </div>

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
                                    <li key={page[0]} className="nav-item">
                                        <NavLink className="nav-link" activeClass="active" to={page[0]}>
                                            {page[1]}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li
                            className={classnames('nav-item', {
                                active: location.pathname.includes('/utils')
                            })}
                        >
                            <NavLink className="nav-link" activeClass="active" activeWhenExact={false} to="/utils">
                                <FaTools />
                                <span>Utils</span>
                            </NavLink>
                            <ul className="nav">
                                {utilsNav.map((page) => (
                                    <li key={page[0]} className="nav-item">
                                        <NavLink className="nav-link" activeClass="active" to={page[0]}>
                                            {page[1]}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
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
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClass="active" activeWhenExact to="/brand-settings">
                                <FaCog />
                                <span>Brand Settings</span>
                            </NavLink>
                        </li>
                    </ul>

                    <hr />

                    <ul className="nav">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://github.com/FindawayWorld/Solon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub /> <span>Github</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="main-wrapper px-4 px-md-12 py-8">
                <main className="page" role="main">
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
