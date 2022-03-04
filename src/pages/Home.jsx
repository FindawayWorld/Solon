import React from 'react';

const HomePage = () => (
    <>
        <div className="mb-12">
            <h1>Findaway's boilerplate for React sites/applications.</h1>
            <p className="lead">
                By default this repository contains CSS (SCSS), React Components, and utilities to help any project get
                up-and-running quickly with consistency to all other projects.
            </p>
        </div>

        <section className="mb-12">
            <h2>
                Using with{' '}
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    React
                </a>
            </h2>
            <hr />
            <p>
                Solon contains all our re-useable React components, so it's a perfect starter for any new React project.
            </p>
            <p>
                Solon is already bootstrapped with Create-React-App. To use this as a starter for a new React project,
                you can "Use Template" in Github.{' '}
                <a href="https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template">
                    Learn more here.
                </a>
            </p>
            <p>
                If you want to use the React components with an existing project, find the component you want, copy it's
                JSX, SCSS, and any other supported assets to your project.
            </p>
            <div className="flash flash-warning">
                <p>
                    <strong>WARNING:</strong> There is a good chance you will need to update/change some or all of the
                    SCSS variable in the Component SCSS to match your project/theme/design.
                </p>
            </div>
        </section>

        <section className="mb-12">
            <h2>Using with static site</h2>
            <hr />
            <p>
                Solon is built with React but the underlying HTML and CSS are useable for any static project. If using
                Sass on your static project, copy the <code>scss</code> folder to your project. If not using Sass,
                compile the css with a Sass tool and inclue in your project.
            </p>
        </section>

        <section className="mb-12">
            <h2>
                Using with{' '}
                <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
                    Gatsby
                </a>
            </h2>
            <hr />
            <p>
                Unfortunately this repository cannot be used as a template for Gatsby. However, the components can be
                used in a Gatsby project.
            </p>
            <div className="flash flash-warning">
                <p>
                    <strong>WARNING:</strong> This project uses <code>react-router-dom</code>, any routing specific
                    Components (Pagination) will have to be updated to work with Gatsby's router. Any components
                    affected should include notes on Gatsby compat.
                </p>
            </div>
        </section>
    </>
);

export default HomePage;
