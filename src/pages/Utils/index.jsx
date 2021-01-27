import React from 'react';
import { Link } from 'react-router-dom';
import { asc } from '../../utils/sorts';

import { Switch, Route } from 'react-router-dom';
import SpacingPage from './SpacingPage';
import BreakpointsPage from './BreakpointsPage';
import ColorsPage from './ColorsPage';
import { utilsNav } from '../../App';
import GridsPage from './GridsPage';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';

const BorderRadiusPage = () => (
    <section id="border-radius" className="mb-5">
        <Breadcrumbs>
            <BreadcrumbItem as={Link} to="/utils">
                Utils
            </BreadcrumbItem>
            <BreadcrumbItem current>Border Radius</BreadcrumbItem>
        </Breadcrumbs>
        <h2>Border Radius</h2>
        <p>Classes to add pre-defined border radius to an element.</p>
        <hr />

        <div className="bg-dark rounded mb-3 p-3">
            <code>.rounded</code>
        </div>
        <div className="bg-dark rounded-pill p-3">
            <code>.rounded-pill</code>
        </div>
    </section>
);

const UtilsPage = () => (
    <Switch>
        <Route path="/utils/colors">
            <ColorsPage />
        </Route>
        <Route path="/utils/spacing">
            <SpacingPage />
        </Route>
        <Route path="/utils/breakpoints">
            <BreakpointsPage />
        </Route>
        <Route path="/utils/grids">
            <GridsPage />
        </Route>
        <Route path="/utils/border-radius">
            <BorderRadiusPage />
        </Route>
        <Route path="/utils" exact>
            <h2>Utils</h2>
            <hr />
            <ul className="list-flat">
                {utilsNav
                    .sort((a, b) => asc(a[1], b[1]))
                    .map((page) => (
                        <li key={page[0]} className="nav-item">
                            <Link to={page[0]}>{page[1]}</Link>
                        </li>
                    ))}
            </ul>
        </Route>
    </Switch>
);

export default UtilsPage;
