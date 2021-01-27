import React from 'react';
import classnames from 'classnames';
import { brandColors, colors } from '../Content';
import { Link } from 'react-router-dom';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';

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
            {brandColors.map((color) => (
                <p
                    key={`txt-${color}`}
                    className={classnames(`txt-${color}`, {
                        'bg-dark': ['white', 'light'].includes(color)
                    })}
                >{`.txt-${color}`}</p>
            ))}
            {colors.map((color) => (
                <p
                    key={`txt-${color}`}
                    className={classnames(`txt-${color}`, {
                        'bg-dark': ['white', 'light'].includes(color)
                    })}
                >{`.txt-${color}`}</p>
            ))}
        </div>

        <h3>Background color</h3>
        <p>
            Similar to the contextual text color classes, easily set the background of an element to any contextual
            class. <br />
            <strong>The element's text color will be set to a contrasting color based on the bg class.</strong>
        </p>

        <div>
            {brandColors.map((color) => {
                return <p key={`bg-${color}`} className={classnames('p-3 mb-2', `bg-${color}`)}>{`.bg-${color}`}</p>;
            })}
            {colors.map((color) => {
                return <p key={`bg-${color}`} className={classnames('p-3 mb-2', `bg-${color}`)}>{`.bg-${color}`}</p>;
            })}
            <p className="p-3 mb-2 bg-primary txt-dark">
                .bg-primary.txt-dark - override default font color with .txt-*color class.
            </p>
        </div>
    </section>
);

export default ColorsPage;
