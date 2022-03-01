import React from 'react';
import classnames from 'classnames';
import { brandColors, colors, onDarkOutline } from '../Content';
import { Link } from 'react-router-dom';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';
import { FiAlertTriangle } from 'react-icons/fi';

const ColorsPage = () => (
    <section id="color-utils" className="mb-5">
        <Breadcrumbs>
            <BreadcrumbItem as={Link} to="/utils">
                Utils
            </BreadcrumbItem>
            <BreadcrumbItem current>Color Utils</BreadcrumbItem>
        </Breadcrumbs>

        <h2 className="mb-0">Color Utils</h2>
        <p>
            <small>
                Based on <a href="https://getbootstrap.com/docs/4.3/utilities/colors/">Bootstrap Color Utils</a>
            </small>
        </p>
        <hr />

        <h3>Text color</h3>
        <p>Convey meaning through color with a handful of color utility classes.</p>
        <div>
            {[...brandColors, ...colors].map(([color]) => (
                <p
                    key={`txt-${color}`}
                    className={classnames(`txt-${color}`, {
                        'bg-dark': onDarkOutline.includes(color)
                    })}
                >{`.txt-${color}`}</p>
            ))}
        </div>

        <h3>Background color</h3>
        <p>
            Similar to the contextual text color classes, easily set the background of an element to any contextual
            class.
        </p>
        <div className="flash flash-info mb-8">
            <p>
                <FiAlertTriangle className="icon-align" /> The background classes are confgiured to also apply
                foreground color that will maintain a minimum constrast ratio of 3.
            </p>
        </div>

        <div className="mb-8">
            {[...brandColors, ...colors].map(([color]) => {
                return <p key={`bg-${color}`} className={classnames('p-3 mb-2', `bg-${color}`)}>{`.bg-${color}`}</p>;
            })}
            <p className="p-3 mb-2 bg-primary txt-dark">
                .bg-primary.txt-dark - override default font color with .txt-*color class.
            </p>
        </div>
        <div>
            <h4 className="mb-0">Table Backgrounds</h4>
            <p>
                When applying a background color to table rows, you can apply the <code>.bg-$color</code> class to the{' '}
                <code>TR</code>.
            </p>
            <table className="table mb-8">
                <thead>
                    <tr className="bg-fuchsia">
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Department</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">John Doe</th>
                        <td>jdoe@example.com</td>
                        <td>Finance</td>
                    </tr>
                    <tr className="bg-blue">
                        <th scope="row">Jane Smith</th>
                        <td>jsmith@example.com</td>
                        <td>Web Development</td>
                    </tr>
                    <tr>
                        <th scope="row">Rick Sanchez</th>
                        <td>rsanchez@example.com</td>
                        <td>Science</td>
                    </tr>
                </tbody>
            </table>

            <h4 className="mb-0">Striped table backgrounds</h4>
            <p>
                Using <code>table.striped-$color</code> you can apply the color to every other row.
            </p>
            <table className="table striped-green">
                <thead>
                    <tr className="bg-light">
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Department</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">John Doe</th>
                        <td>jdoe@example.com</td>
                        <td>Finance</td>
                    </tr>
                    <tr>
                        <th scope="row">Jane Smith</th>
                        <td>jsmith@example.com</td>
                        <td>Web Development</td>
                    </tr>
                    <tr>
                        <th scope="row">Rick Sanchez</th>
                        <td>rsanchez@example.com</td>
                        <td>Science</td>
                    </tr>
                    <tr>
                        <th scope="row">John Doe</th>
                        <td>jdoe@example.com</td>
                        <td>Finance</td>
                    </tr>
                    <tr>
                        <th scope="row">Jane Smith</th>
                        <td>jsmith@example.com</td>
                        <td>Web Development</td>
                    </tr>
                    <tr>
                        <th scope="row">Rick Sanchez</th>
                        <td>rsanchez@example.com</td>
                        <td>Science</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
);

export default ColorsPage;
