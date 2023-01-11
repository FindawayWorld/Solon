import React from 'react';
import Link from 'next/link';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';
import Code from '../../components/Code';
import FormattedCurrency from '../../components/FormattedCurrency';

const FormattedCurrencyPage = () => {
    return (
        <section id="formatted-currency" className="mb-5">
            <Breadcrumbs>
                <BreadcrumbItem as={Link} href="/components">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem current>Formatted Currency</BreadcrumbItem>
            </Breadcrumbs>
            <h2>Formatted Currency</h2>
            <p>
                Format any numerical <code>value</code> as a currency based on the given <code>currency</code> prop and
                return a <code>String</code>.
            </p>
            <hr />

            <p className="flash flash-warning">
                <strong>WARNING:</strong> This component uses the <code>window.Intl.NumberFormat</code> function, you
                may need to include a <a href="https://polyfill.io">polyfill</a>.
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
            <Code
                lang="jsx"
                code={`<FormattedCurrency value={10.56} currency="USD" />
<FormattedCurrency value="230.99" currency="EUR" />
<FormattedCurrency value={16.75} currency="JPY" />
<FormattedCurrency value={123456.789} currency="CAD" />`}
            />
        </section>
    );
};

export default FormattedCurrencyPage;
