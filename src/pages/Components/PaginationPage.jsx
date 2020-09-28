import React from 'react';
import Pagination from '../../components/Pagination';
import { Link } from 'react-router-dom';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';

const PaginationPage = () => {
    return (
        <section className="mb-5">
            <Breadcrumbs>
                <BreadcrumbItem as={Link} to="/components">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem current>Pagination</BreadcrumbItem>
            </Breadcrumbs>
            <h2>Pagination</h2>
            <hr />

            <Pagination as={Link} toProp="to" numPages={100} perPage={10} currentPage={1} />
            <Pagination as={Link} toProp="to" numPages={1000} perPage={20} currentPage={60} />
            <Pagination as={Link} toProp="to" numPages={1000} perPage={20} currentPage={60} pagesToShow={5} />
            <Pagination numPages={1000} perPage={20} currentPage={60} pagesToShow={5} showJumpFirst showJumpLast />

            <pre>
                <code>{`<Pagination as={Link} toProp="to" numPages={100} perPage={10} currentPage={1} />
<Pagination as={Link} toProp="to" numPages={1000} perPage={20} currentPage={60} />
<Pagination as={Link} toProp="to" numPages={1000} perPage={20} currentPage={60} pagesToShow={5} />
<Pagination numPages={1000} perPage={20} currentPage={60} pagesToShow={5} showJumpFirst showJumpLast />`}</code>
            </pre>
        </section>
    );
};

export default PaginationPage;
