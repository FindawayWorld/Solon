import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { titleCase } from '../../utils';
import { brandColors, colors, onDarkOutline } from '../Content';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';

const FlashesPage = () => {
    return (
        <section className="mb-5">
            <Breadcrumbs>
                <BreadcrumbItem as={Link} to="/components">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem current>Flashes (alerts)</BreadcrumbItem>
            </Breadcrumbs>
            <div className="mb-4">
                <h2>Flashes (alerts)</h2>
                <hr />
                <p>
                    <strong>Required assets:</strong> <code>scss/components/_flashes.scss</code>,{' '}
                    <code>scss/_settings.scss</code>, and <code>scss/_functions.scss</code>
                </p>
                {[...brandColors, ...colors].map(([color]) => (
                    <div key={`flash-${color}`} className={classnames('flash mb-4', `flash-${color}`)}>
                        {titleCase(color)} <a href="#demo">anchor link</a>
                        <a href="#close" className="close">
                            &times;
                        </a>
                    </div>
                ))}

                <div className="flash flash-primary">Primary, no close.</div>
            </div>

            <h3>Outline Flashes</h3>
            <p>
                <code>light</code> and <code>warning</code> omitted due to poor visibility.
            </p>
            {[...brandColors, ...colors].map(([color]) => (
                <div
                    className={classnames('rounded mb-4', {
                        'bg-dark p-2': onDarkOutline.includes(color)
                    })}
                >
                    <div
                        key={`flash-outline-${color}`}
                        className={classnames('flash fixed', ` flash-outline-${color}`)}
                    >
                        {titleCase(color)} <a href="#demo">anchor link</a>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default FlashesPage;
