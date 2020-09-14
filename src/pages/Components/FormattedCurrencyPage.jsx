import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';
import FormattedCurrency from '../../components/FormattedCurrency';

const FormattedCurrencyPage = () => {
    return (
        <section id="formatted-currency" className="mb-5">
            <Breadcrumbs>
                <BreadcrumbItem as={Link} to="/components">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem current>Formatted Currency</BreadcrumbItem>
            </Breadcrumbs>
            <h2>Formatted Currency</h2>
            <hr />
            <p>
                Format any numerical <code>value</code> as a currency based on the given <code>currency</code> prop and
                return a <code>String</code>.
            </p>
            <p>
                This uses the <code>window.Intl.NumberFormat</code> function, you may need to include a{' '}
                <a href="https://polyfill.io">polyfill</a>.
            </p>

            <p>
                <FormattedCurrency value={10.56} currency="USD" />
            </p>
            <p>
                <FormattedCurrency value="230.99" currency="EUR" />
            </p>
            <p>
                <FormattedCurrency value={16.75} currency="JPY" />
            </p>
            <p>
                <FormattedCurrency value={123456.789} currency="CAD" />
            </p>
        </section>
    );
};

export default FormattedCurrencyPage;
