import React from 'react';
import Link from 'next/link';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';

const BreakpointsPage = () => (
    <section>
        <Breadcrumbs>
            <BreadcrumbItem as={Link} href="/utils">
                Utils
            </BreadcrumbItem>
            <BreadcrumbItem current>Breakpoints</BreadcrumbItem>
        </Breadcrumbs>

        <h2>Responsive Breakpoints</h2>
        <p>Breakpoints for adjusting styles based on screen width</p>
        <hr />

        <p>
            The <code>breakpoint(classPrefix)</code> mixin can be used in the SCSS files to target that breakpoint using
            media queries. <code>{`@include breakpoint(classPrefix) {}`}</code>
        </p>
        <p>
            The <code>breakpoint-retina(classPrefix)</code> mixin can be used in the SCSS files to target that retina
            breakpoint using media queries. <code>{`@include breakpoint-retina(classPrefix) {}`}</code>
        </p>
        <p>
            <code>Class Prefix</code> can be used in conjunction with spacing utils, grids, or other class helpers.{' '}
            <code>{`.{helper}-{classPrefix}`}</code>
        </p>

        <h3>Breakpoints</h3>

        <table className="table full-width striped mb-6">
            <thead>
                <tr>
                    <th>Class Prefix</th>
                    <th>Min-Width</th>
                    <th>
                        <code>.container</code> Max-Width
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <code>xxl</code>
                    </td>
                    <td>1400px</td>
                    <td>1320px</td>
                </tr>
                <tr>
                    <td>
                        <code>xl</code>
                    </td>
                    <td>1200px</td>
                    <td>1140px</td>
                </tr>

                <tr>
                    <td>
                        <code>lg</code>
                    </td>
                    <td>992px</td>
                    <td>960px</td>
                </tr>

                <tr>
                    <td>
                        <code>md</code>
                    </td>
                    <td>768px</td>
                    <td>720px</td>
                </tr>

                <tr>
                    <td>
                        <code>sm</code>
                    </td>
                    <td>576px</td>
                    <td>540px</td>
                </tr>
            </tbody>
        </table>
    </section>
);

export default BreakpointsPage;
