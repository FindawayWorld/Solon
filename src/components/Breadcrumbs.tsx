import React from 'react';
import classnames from 'classnames';

interface BreadcrumbsProps {
    className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ children, className }) => {
    return (
        <nav aria-label="breadcrumb" className={classnames(className)}>
            <ol className="breadcrumb">{children}</ol>
        </nav>
    );
};

interface BreadcrumbItemProps {
    current?: boolean;
    as?: React.ElementType;
    to?: string;
    href?: string;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
    children = null,
    current = false,
    as = 'a',
    ...props
}) => {
    const Comp = as;
    return (
        <li className={classnames('breadcrumb-item', { active: current })} aria-current={current ? 'page' : undefined}>
            {current && children}
            {!current && <Comp {...props}>{children}</Comp>}
        </li>
    );
};
