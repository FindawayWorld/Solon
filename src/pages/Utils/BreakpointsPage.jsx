import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';

const BreakpointsPage = () => (
    <section>
        <Breadcrumbs>
            <BreadcrumbItem as={Link} to="/utils">
                Utils
            </BreadcrumbItem>
            <BreadcrumbItem current>Breakpoints</BreadcrumbItem>
        </Breadcrumbs>

        <h2>Responsive Breakpoints</h2>
        <p>Breakpoints for adjusting styles based on screen width</p>
        <hr />

        <p>
            <code>SCSS Variable</code> can be used in the SCSS files to target that breakpoint using media queries.{' '}
            <code>{`@media #{$scssVariable} {}`}</code>
        </p>
        <p>
            <code>Class Prefix</code> can be used in conjunction with spacing utils, grids, or other class helpers.{' '}
            <code>{`.{helper}-{classPrefix}`}</code>
        </p>

        <h3>Standard Breakpoints</h3>

        <table className="table full-width striped mb-6">
            <thead>
                <tr>
                    <th>SCSS Variable</th>
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
                        <code>$xlarge</code>
                    </td>
                    <td>
                        <code>xl</code>
                    </td>
                    <td>1200px</td>
                    <td>1140px</td>
                </tr>

                <tr>
                    <td>
                        <code>$large</code>
                    </td>
                    <td>
                        <code>lg</code>
                    </td>
                    <td>992px</td>
                    <td>960px</td>
                </tr>

                <tr>
                    <td>
                        <code>$medium</code>
                    </td>
                    <td>
                        <code>md</code>
                    </td>
                    <td>768px</td>
                    <td>720px</td>
                </tr>

                <tr>
                    <td>
                        <code>$small</code>
                    </td>
                    <td>
                        <code>sm</code>
                    </td>
                    <td>576px</td>
                    <td>540px</td>
                </tr>
            </tbody>
        </table>

        <h3>Retina Breakpoints</h3>
        <table className="table full-width striped">
            <thead>
                <tr>
                    <th>SCSS Variable</th>
                    <th>Min-Width</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <code>$retina</code>
                    </td>
                    <td>∞</td>
                </tr>
                <tr>
                    <td>
                        <code>$xlarge2x</code>
                    </td>
                    <td>1200px</td>
                </tr>
                <tr>
                    <td>
                        <code>$large2x</code>
                    </td>
                    <td>992px</td>
                </tr>
                <tr>
                    <td>
                        <code>$medium2x</code>
                    </td>
                    <td>768px</td>
                </tr>
                <tr>
                    <td>
                        <code>$small2x</code>
                    </td>
                    <td>768px</td>
                </tr>
            </tbody>
        </table>
    </section>
);

export default BreakpointsPage;
