import React from 'react';
import Pagination from '../../components/Pagination';
import Link from 'next/link';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';
import Code from '../../components/Code';

const PaginationPage = () => {
    return (
        <section className="mb-5">
            <Breadcrumbs>
                <BreadcrumbItem as={Link} href="/components">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem current>Pagination</BreadcrumbItem>
            </Breadcrumbs>
            <h2>Pagination</h2>
            <hr />

            <p>
                <strong>Required assets:</strong> <code>scss/mods/_pagination.scss</code>,{' '}
                <code>scss/_settings.scss</code>, and <code>scss/_functions.scss</code>
            </p>

            <Pagination as={Link} toProp="href" numPages={100} perPage={10} currentPage={1} />
            <Pagination as={Link} toProp="href" numPages={1000} perPage={20} currentPage={60} />
            <Pagination as={Link} toProp="href" numPages={1000} perPage={20} currentPage={60} pagesToShow={5} />
            <Pagination numPages={1000} perPage={20} currentPage={60} pagesToShow={5} showJumpFirst showJumpLast />

            <Code
                lang="html"
                code={`<Pagination as={Link} toProp="to" numPages={100} perPage={10} currentPage={1} />
<Pagination as={Link} toProp="to" numPages={1000} perPage={20} currentPage={60} />
<Pagination as={Link} toProp="to" numPages={1000} perPage={20} currentPage={60} pagesToShow={5} />
<Pagination numPages={1000} perPage={20} currentPage={60} pagesToShow={5} showJumpFirst showJumpLast />`}
            />
        </section>
    );
};

export default PaginationPage;
