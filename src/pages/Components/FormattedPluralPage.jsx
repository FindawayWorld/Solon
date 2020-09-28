import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';
import FormattedPlural from '../../components/FormattedPlural';

const FormattedPluralPage = () => {
    return (
        <section id="formatted-currency" className="mb-5">
            <Breadcrumbs>
                <BreadcrumbItem as={Link} to="/components">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem current>Formatted Plural</BreadcrumbItem>
            </Breadcrumbs>
            <h2>Formatted Plural</h2>
            <hr />
            <p>
                Return a plural string based on a given <code>value</code>.
            </p>

            <p>
                10 <FormattedPlural value={10} one="Car" many="Cars" />
            </p>
            <p>
                1 <FormattedPlural value={1} one="Bike" many="Bikes" />
            </p>
            <p>
                0 <FormattedPlural value={0} one="Scooter" many="Scooters" />
            </p>

            <pre>
                <code>{`<FormattedPlural value={10} one="Car" many="Cars" />
<FormattedPlural value={1} one="Bike" many="Bikes" />
<FormattedPlural value={0} one="Scooter" many="Scooters" />`}</code>
            </pre>
        </section>
    );
};

export default FormattedPluralPage;
