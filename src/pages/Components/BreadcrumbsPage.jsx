import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from '../../components/Breadcrumbs';
import { Link } from 'react-router-dom';

const BreadcrumbsPage = () => (
    <section className="mb-5">
        <Breadcrumbs>
            <BreadcrumbItem as={Link} to="/components">
                Components
            </BreadcrumbItem>
            <BreadcrumbItem current>Breadcrumbs</BreadcrumbItem>
        </Breadcrumbs>

        <h2>Breadcrumbs</h2>
        <hr />

        <p>
            <strong>Required assets:</strong> <code>scss/mods/_breadcrumbs.scss</code>, <code>scss/_settings.scss</code>
            , and <code>scss/_functions.scss</code>
        </p>

        <Breadcrumbs>
            <BreadcrumbItem as={Link} to="/components">
                Components
            </BreadcrumbItem>
            <BreadcrumbItem current>Breadcrumbs</BreadcrumbItem>
        </Breadcrumbs>

        <Breadcrumbs>
            <BreadcrumbItem as={Link} to="/utils">
                Title Management
            </BreadcrumbItem>
            <BreadcrumbItem current>You're Never Weird on the Internet (Almost) [94189]</BreadcrumbItem>
        </Breadcrumbs>

        <Breadcrumbs>
            <BreadcrumbItem href="#a">Page A</BreadcrumbItem>
            <BreadcrumbItem href="#b">Page B</BreadcrumbItem>
            <BreadcrumbItem href="#c">Page C</BreadcrumbItem>
            <BreadcrumbItem current>Page D</BreadcrumbItem>
        </Breadcrumbs>

        <pre>
            <code>
                {`<Breadcrumbs>
    // Use with react-router-dom Link component
    <BreadcrumbItem as={Link} to="#a">Page A</BreadcrumbItem>

    <BreadcrumbItem href="#b">Page B</BreadcrumbItem>
    <BreadcrumbItem href="#c">Page C</BreadcrumbItem>

    // Set current page
    <BreadcrumbItem current>Page D</BreadcrumbItem>
</Breadcrumbs>`}
            </code>
        </pre>
    </section>
);

export default BreadcrumbsPage;
