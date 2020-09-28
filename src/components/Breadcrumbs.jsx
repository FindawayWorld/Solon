import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Breadcrumbs = ({ children, className }) => {
    return (
        <nav aria-label="breadcrumb" className={classnames(className)}>
            <ol className="breadcrumb">{children}</ol>
        </nav>
    );
};

Breadcrumbs.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export const BreadcrumbItem = ({ children = null, current = false, as: Comp = 'a', ...props }) => {
    return (
        <li className={classnames('breadcrumb-item', { active: current })} aria-current={current ? 'page' : undefined}>
            {current && children}
            {!current && <Comp {...props}>{children}</Comp>}
        </li>
    );
};

BreadcrumbItem.propTypes = {
    children: PropTypes.node.isRequired,
    current: PropTypes.bool,
    as: PropTypes.elementType
};
