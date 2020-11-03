import React from 'react';

import { componentsNav } from '../../App';

import { Link, Route, Switch } from 'react-router-dom';

import ButtonsPage from './ButtonsPage';
import PaginationPage from './PaginationPage';
import BreadcrumbsPage from './BreadcrumbsPage';
import FlashesPage from './FlashesPage';
import FormattedCurrencyPage from './FormattedCurrencyPage';
import FormattedPluralPage from './FormattedPluralPage';
import LoadingPage from './LoadingPage';
import ModalPage from './ModalPage';
import FormsPage from './FormsPage';
import BadgesPage from './BadgesPage';
import NotificationsPage from './NotificationsPage';

const ComponentsPage = () => {
    return (
        <Switch>
            <Route path="/components/badges">
                <BadgesPage />
            </Route>
            <Route path="/components/breadcrumbs">
                <BreadcrumbsPage />
            </Route>
            <Route path="/components/buttons">
                <ButtonsPage />
            </Route>
            <Route path="/components/flashes">
                <FlashesPage />
            </Route>
            <Route path="/components/notifications">
                <NotificationsPage />
            </Route>
            <Route path="/components/formatted-currency">
                <FormattedCurrencyPage />
            </Route>
            <Route path="/components/formatted-plural">
                <FormattedPluralPage />
            </Route>
            <Route path="/components/pagination">
                <PaginationPage />
            </Route>
            <Route path="/components/loading">
                <LoadingPage />
            </Route>
            <Route path="/components/modal">
                <ModalPage />
            </Route>
            <Route path="/components/forms">
                <FormsPage />
            </Route>

            <Route path="/">
                <h2>Components</h2>
                <hr />
                <ul className="list-flat">
                    {componentsNav.map((page) => (
                        <li key={page[0]} className="nav-item">
                            <Link to={page[0]}>{page[1]}</Link>
                        </li>
                    ))}
                </ul>
            </Route>
        </Switch>
    );
};

export default ComponentsPage;
