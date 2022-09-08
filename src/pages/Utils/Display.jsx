import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';

const displayValues = [
    'none',
    'inline',
    'inline-block',
    'block',
    'table',
    'table-row',
    'table-cell',
    'flex',
    'inline-flex'
];

const DisplayPage = () => (
    <section id="display-utils">
        <Breadcrumbs>
            <BreadcrumbItem as={Link} to="/utils">
                Utils
            </BreadcrumbItem>
            <BreadcrumbItem current>Display</BreadcrumbItem>
        </Breadcrumbs>

        <h2>Display Utils</h2>

        <hr />

        <p>
            Assign <code>display</code> values to an element.
        </p>

        <p>
            The classes are named using the format <code>{`.d-{breakpoint}-{display}`}</code>.
        </p>

        <p>
            Where <code>{`{breakpoint}`}</code> is one of the pre-defined{' '}
            <Link to="/utils/breakpoints">responsive breakpoints</Link>.
        </p>

        <p>
            Where <code>{`{display}`}</code> is one of:
        </p>

        <ul>
            {displayValues.map((display) => (
                <li key={display}>
                    <code>{display}</code>
                </li>
            ))}
        </ul>

        <h3>Display Examples</h3>

        {displayValues.map((display) => (
            <div className="mb-5">
                <p>
                    <strong>{display}</strong> <code>{`.d-{breakpoint}-${display}`}</code>
                </p>

                {Array.from({ length: 2 }, (_, i) => (
                    <div key={i} className={`d-${display} bg-blue p-4 m-8`}>
                        {Array.from({ length: 3 }, (_, i) => (
                            <span key={i} className="bg-gray p-4 txt-white m-1">
                                {i}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        ))}
    </section>
);

export default DisplayPage;
