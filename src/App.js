import React, { useEffect } from 'react';
import classnames from 'classnames';
import { useLocation, NavLink } from 'react-router-dom';

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
    FaUniversalAccess
} from 'react-icons/fa';
import { ReactComponent as SolonLogo } from './svg/solon_logo.svg';
import { ReactComponent as SolonIcon } from './svg/solon_icon.svg';
import { asc } from './utils/sorts';
import useDisabledLinks from './hooks/useDisabledLinks';
import classNames from 'classnames';
import AppRoutes from './AppRoutes';
import VisuallyHidden from '@reach/visually-hidden';

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
    ['/components/pagination', 'Pagination'],
    ['/components/progress-bar', 'Progress Bar']
];

componentsNav.sort((a, b) => asc(a[1], b[1]));

export const utilsNav = [
    ['/utils/breakpoints', 'Breakpoints'],
    ['/utils/spacing', 'Spacing'],
    ['/utils/colors', 'Colors'],
    ['/utils/grids', 'Grids'],
    ['/utils/borders', 'Borders'],
    ['/utils/display', 'Display']
];

utilsNav.sort((a, b) => asc(a[1], b[1]));

const App = () => {
    const medium = window.matchMedia('(max-width: 768px)');
    const [collapseSidebar, setCollapseSidebar] = React.useState(medium.matches);
    const location = useLocation();
    useDisabledLinks();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="site-row">
            <nav
                className={classnames('sidebar', {
                    'sidebar-slim': collapseSidebar
                })}
            >
                <div className="sidebar-wrapper">
                    <div className="sidebar-header">
                        <NavLink
                            className={({ isActive }) =>
                                classNames('logo', {
                                    active: isActive
                                })
                            }
                            to="/"
                        >
                            <SolonIcon width={50} className="small-logo" />
                            <SolonLogo className="full-logo" />
                        </NavLink>
                        <button className="btn collapse-button" onClick={() => setCollapseSidebar(!collapseSidebar)}>
                            <VisuallyHidden>{`${collapseSidebar ? 'expand' : 'collapse'} sidebar`}</VisuallyHidden>
                            <FaChevronLeft aria-hidden />
                        </button>
                    </div>

                    <ul className="nav flex-column">
                        {[
                            { path: 'content', icon: <FaFileAlt aria-label="Content" /> },
                            {
                                path: 'components',
                                icon: <FaPuzzlePiece aria-label="Components" />,
                                child: (
                                    <ul className="nav">
                                        {componentsNav.map((page) => (
                                            <li key={page[0]} className="nav-item">
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        classNames('nav-link', {
                                                            active: isActive
                                                        })
                                                    }
                                                    to={page[0]}
                                                >
                                                    {page[1]}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )
                            },
                            {
                                path: 'utils',
                                icon: <FaTools aria-label="Utils" />,
                                child: (
                                    <ul className="nav">
                                        {utilsNav.map((page) => (
                                            <li key={page[0]} className="nav-item">
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        classNames('nav-link', {
                                                            active: isActive
                                                        })
                                                    }
                                                    to={page[0]}
                                                >
                                                    {page[1]}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )
                            },
                            { path: 'javascript', icon: <FaJsSquare aria-label="Javascript" /> },
                            { path: 'color-tester', icon: <FaPalette aria-label="Color-tester" /> },
                            { path: 'font-tester', icon: <FaFont aria-label="Font-tester" /> },
                            { path: 'brand-settings', icon: <FaCog aria-label="Brand-settings" /> },
                            { path: 'accessibility', icon: <FaUniversalAccess aria-label="Accessibility" /> }
                        ].map((item) => (
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        classNames('nav-link', {
                                            active: isActive
                                        })
                                    }
                                    to={`/${item.path}`}
                                >
                                    {item.icon}
                                    <span aria-hidden className="capitalize" focusable="false">
                                        {item.path.split('-').join(' ')}
                                    </span>
                                </NavLink>
                                {item?.child && item.child}
                            </li>
                        ))}
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
                                <FaGithub aria-label="Github" />{' '}
                                <span aria-hidden focusable="false">
                                    Github
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="main-wrapper px-4 px-md-12 py-8">
                <main className="page" role="main">
                    <AppRoutes />
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
