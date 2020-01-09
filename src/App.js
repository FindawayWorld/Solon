import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ComponentsPage from './pages/Components';
import ContentPage from './pages/Content';
import UtilsPage from './pages/Utils';

function App() {
    return (
        <Router>
            <div className="p-5">
                <h1>Gateway</h1>
                <p>Gateway is Findaway's boilerplate for React sites/applications.</p>
                <p>This repository can be copied to start any react project.</p>
                <p>By default this repository contains CSS (SCSS), React Components, and utilities to help get any project up-and-running quickly with consistency to all other projects.</p>

                <ul className="list-inline">
                    <li><Link to="content">Content</Link></li>
                    <li><Link to="components">Components</Link></li>
                    <li><Link to="utils">Utils</Link></li>
                </ul>

                <Switch>
                    <Route path="/components">
                        <ComponentsPage />
                    </Route>
                    <Route path="/content">
                        <ContentPage />
                    </Route>
                    <Route path="/utils">
                        <UtilsPage />
                    </Route>
                </Switch>
            </div>
        </Router>


    );
}

export default App;
