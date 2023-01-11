import React from 'react';
import Link from 'next/link';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';
import Loading from '../../components/Loading';

const LoadingPage = () => {
    return (
        <section>
            <Breadcrumbs>
                <BreadcrumbItem as={Link} href="/components">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem current>Loading</BreadcrumbItem>
            </Breadcrumbs>
            <h2>Loading Animation</h2>
            <hr />

            <p>
                <strong>Required assets:</strong> <code>scss/mods/_loading.scss</code>, <code>scss/_settings.scss</code>
                , and <code>scss/_functions.scss</code>
            </p>

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
