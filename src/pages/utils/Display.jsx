import React from 'react';
import Link from 'next/link';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';

const displayValues = ['none', 'inline', 'inline-block', 'block', 'flex', 'inline-flex'];

const DisplayPage = () => (
    <section id="display-utils">
        <Breadcrumbs>
            <BreadcrumbItem as={Link} href="/utils">
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
            <Link href="/utils/breakpoints">responsive breakpoints</Link>.
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
            <div key={display} className="mb-5">
                <p>
                    <strong>{display}</strong> <code>{`.d-{breakpoint}-${display}`}</code>
                </p>

                {Array.from({ length: 2 }, (_, i) => (
                    <div key={i} className={`d-${display} bg-blue p-4 m-8`}>
                        {Array.from({ length: 3 }, (_, i) => (
                            <span key={i} className="bg-gray p-4 txt-white m-1">
                                {i + 1}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        ))}

        <h3>Flex Wrap</h3>

        <p>
            Assign <code>flex-wrap: wrap</code> to an element.
        </p>

        <p>
            The classes are named using the format <code>{`.wrap-{breakpoint}`}</code>.
        </p>

        <p>
            <strong>Without Flex Wrap</strong> <code>{`.d-flex`}</code>
        </p>
        <div className={'d-flex bg-blue p-8 mb-5'}>
            {Array.from({ length: 20 }, (_, i) => (
                <span key={i} className="bg-gray py-4 px-12">
                    {i + 1}
                </span>
            ))}
        </div>

        <p>
            <strong>With Flex Wrap</strong> <code>{`.d-flex.wrap`}</code>
        </p>
        <div className={'d-flex wrap bg-blue p-8'}>
            {Array.from({ length: 20 }, (_, i) => (
                <span key={i} className="bg-gray py-4 px-12">
                    {i + 1}
                </span>
            ))}
        </div>
    </section>
);

export default DisplayPage;
