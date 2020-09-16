import React from 'react';

import { componentsNav } from '../App';

import { Link, Route, Switch } from 'react-router-dom';

import ButtonsPage from './Components/ButtonsPage';
import PaginationPage from './Components/PaginationPage';
import BreadcrumbsPage from './Components/BreadcrumbsPage';
import FlashesPage from './Components/FlashesPage';
import FormattedCurrencyPage from './Components/FormattedCurrencyPage';
import FormattedPluralPage from './Components/FormattedPluralPage';
import LoadingPage from './Components/LoadingPage';
import ModalPage from './Components/ModalPage';
import FormsPage from './Components/FormsPage';

const ComponentsPage = () => {
    return (
        <Switch>
            <Route path="/components/breadcrumbs" default>
                <BreadcrumbsPage />
            </Route>
            <Route path="/components/buttons">
                <ButtonsPage />
            </Route>
            <Route path="/components/flashes">
                <FlashesPage />
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
                        <li className="nav-item">
                            <Link to={page[0]}>{page[1]}</Link>
                        </li>
                    ))}
                </ul>
            </Route>
        </Switch>
    );
};

export default ComponentsPage;
