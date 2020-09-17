import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';
import Loading from '../../components/Loading';

const LoadingPage = () => {
    return (
        <section>
            <Breadcrumbs>
                <BreadcrumbItem as={Link} to="/components">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem current>Loading</BreadcrumbItem>
            </Breadcrumbs>
            <h2>Loading Animation</h2>
            <hr />

            <Loading />

            <p>
                Inline Loading <Loading inline />
            </p>

            <p className="bg-dark txt-white p-3">
                Inverted <Loading invert />
            </p>
        </section>
    );
};

export default LoadingPage;
