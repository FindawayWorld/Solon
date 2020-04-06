import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import classnames from 'classnames';

const NavLink = ({to, children, className, activeClass, activeWhenExact = true}) => {
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
};

export default NavLink;