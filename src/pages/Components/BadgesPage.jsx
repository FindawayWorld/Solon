import React from 'react';
import { titleCase } from '../../utils';
import classnames from 'classnames';
import { brandColors, colors } from '../Content';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Breadcrumbs, BreadcrumbItem } from '../../components/Breadcrumbs';

const BadgesPage = () => (
    <section className="mb-5">
        <Breadcrumbs>
            <BreadcrumbItem as={Link} to="/components">
                Components
            </BreadcrumbItem>
            <BreadcrumbItem current>Badges</BreadcrumbItem>
        </Breadcrumbs>
        <h2>Badges</h2>
        <hr />
        <p>
            <strong>Required assets:</strong> <code>scss/components/_badges.scss</code>,{' '}
            <code>scss/_settings.scss</code>, and <code>scss/_functions.scss</code>
        </p>
        <div className="mb-4">
            {brandColors.map((color) => (
                <div key={`badge-${color}`} className={classnames('badge mr-4', `badge-${color}`)}>
                    {titleCase(color)}
                </div>
            ))}

            <div className="badge badge-primary mr-4">
                Primary, with <a href="#demo">anchor link</a>
            </div>
            <div className="badge badge-primary">
                With Icon <FaStar />
            </div>
        </div>
        <div className="mb-4">
            {colors.map((color) => (
                <div key={`badge-${color}`} className={classnames('badge mr-4', `badge-${color}`)}>
                    {titleCase(color)}
                </div>
            ))}
        </div>

        <h3>Outline Badges</h3>
        <p>
            <code>light</code> and <code>warning</code> omitted due to poor visibility.
        </p>
        <div className="mb-4">
            {brandColors
                .filter((color) => !['light', 'warning'].includes(color))
                .map((color) => (
                    <div
                        key={`badge-outline-${color}`}
                        className={classnames('badge fixed mr-4', ` badge-outline-${color}`)}
                    >
                        {titleCase(color)}
                    </div>
                ))}
        </div>
        <div>
            {colors
                .filter((color) => !['white', 'silver'].includes(color))
                .map((color) => (
                    <div
                        key={`badge-outline-${color}`}
                        className={classnames('badge fixed mr-4', ` badge-outline-${color}`)}
                    >
                        {titleCase(color)}
                    </div>
                ))}
        </div>
    </section>
);

export default BadgesPage;
