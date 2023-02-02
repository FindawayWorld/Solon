import React from 'react';
import Link from 'next/link';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';
import Code from '../../components/Code';
import FormattedPlural from '../../components/FormattedPlural';

const FormattedPluralPage = () => {
    return (
        <section id="formatted-currency" className="mb-5">
            <Breadcrumbs>
                <BreadcrumbItem as={Link} href="/components">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem current>Formatted Plural</BreadcrumbItem>
            </Breadcrumbs>
            <h2>Formatted Plural</h2>
            <p>
                Return a plural string based on a given <code>value</code>.
            </p>
            <hr />

            <p>
                10 <FormattedPlural value={10} one="Car" many="Cars" />
            </p>
            <p>
                1 <FormattedPlural value={1} one="Bike" many="Bikes" />
            </p>
            <p>
                0 <FormattedPlural value={0} one="Scooter" many="Scooters" />
            </p>

            <Code
                lang="jsx"
                code={`<FormattedPlural value={10} one="Car" many="Cars" />
<FormattedPlural value={1} one="Bike" many="Bikes" />
<FormattedPlural value={0} one="Scooter" many="Scooters" />`}
            />
        </section>
    );
};

export default FormattedPluralPage;
