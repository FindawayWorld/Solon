import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from '../../components/Breadcrumbs';
import { Link } from 'react-router-dom';

const BreadcrumbsPage = () => {
    return (
        <section className="mb-5">
            <Breadcrumbs>
                <BreadcrumbItem as={Link} to="/components">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem current>Breadcrumbs</BreadcrumbItem>
            </Breadcrumbs>
            <h2>Breadcrumbs</h2>
            <hr />

            <Breadcrumbs>
                <BreadcrumbItem as={Link} to="/utils">
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
        </section>
    );
};

export default BreadcrumbsPage;
