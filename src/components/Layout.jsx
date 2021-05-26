import React from 'react';
import { Auth } from 'aws-amplify';
import classnames from 'classnames';
import { asc } from '../utils/sorts';

import NavLink from './NavLink';
import { Link, useLocation } from 'react-router-dom';

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
    FaCog,
    FaLock,
    FaUserAlt
} from 'react-icons/fa';
import { ReactComponent as SolonLogo } from '../svg/solon_logo.svg';
import { ReactComponent as SolonIcon } from '../svg/solon_icon.svg';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { authLogout } from '../slices/authSlice';

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

const Layout = ({ children }) => {
    const medium = window.matchMedia('(max-width: 768px)');
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);
    const [collapseSidebar, setCollapseSidebar] = React.useState(medium.matches);
    const location = useLocation();

    const handleLogOut = () => {
        try {
            Auth.signOut();
            dispatch(authLogout());
        } catch (error) {
            console.log('\n', '\n', `Navbar, log-out error = `, error, '\n', '\n');
        }
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

                    <hr />

                    <ul className="nav">
                        {authState.user && !authState.isLoading && (
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClass="active" activeWhenExact to="/account">
                                    <FaUserAlt /> <span>My Account</span>
                                </NavLink>
                            </li>
                        )}
                        <li className="nav-item">
                            {!authState.user && !authState.isLoading && (
                                <Link to="/sign-in" className="nav-link">
                                    <FaLock /> <span>Sign In</span>
                                </Link>
                            )}
                            {authState.user && !authState.isLoading && (
                                <button className="btn btn-link nav-link" onClick={handleLogOut}>
                                    <FaLock /> <span>Sign Out</span>
                                </button>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="main-wrapper px-4 px-md-12 py-8">
                <main className="page" role="main">
                    {children}
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

export default Layout;
