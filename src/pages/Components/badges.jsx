import React from 'react';
import { titleCase } from '../../utils';
import classnames from 'classnames';
import { brandColors, colors, onDarkOutline, onDarkSolid } from '../content';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';
import { Breadcrumbs, BreadcrumbItem } from '../../components/Breadcrumbs';

const BadgesPage = () => (
    <section className="mb-5">
        <Breadcrumbs>
            <BreadcrumbItem as={Link} href="/components">
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
            {brandColors.map(([color]) => (
                <div
                    key={`badge-${color}`}
                    className={classnames('d-inline-block mr-1 mb-1 rounded', {
                        'bg-dark p-2': onDarkSolid.includes(color)
                    })}
                >
                    <div className={classnames('badge', ` badge-${color}`)}>{titleCase(color)}</div>
                </div>
            ))}
            <div className="badge badge-primary">
                With Icon <FaStar />
            </div>
        </div>
        <div className="mb-4">
            {colors.map(([color]) => (
                <div
                    key={`badge-${color}`}
                    className={classnames('d-inline-block mr-1 mb-1 rounded', {
                        'bg-dark p-2': onDarkSolid.includes(color)
                    })}
                >
                    <div className={classnames('badge', ` badge-${color}`)}>{titleCase(color)}</div>
                </div>
            ))}
        </div>

        <h3>Outline Badges</h3>
        <div className="mb-4">
            {brandColors.map(([color]) => (
                <div
                    key={`badge-outline-${color}`}
                    className={classnames('d-inline-block mr-1 mb-1 rounded', {
                        'bg-dark p-2': onDarkOutline.includes(color)
                    })}
                >
                    <div className={classnames('badge', ` badge-outline-${color}`)}>{titleCase(color)}</div>
                </div>
            ))}
        </div>
        <div>
            {colors.map(([color]) => (
                <div
                    key={`badge-outline-${color}`}
                    className={classnames('d-inline-block mr-1 mb-1 rounded', {
                        'bg-dark p-2': onDarkOutline.includes(color)
                    })}
                >
                    <div className={classnames('badge', ` badge-outline-${color}`)}>{titleCase(color)}</div>
                </div>
            ))}
        </div>
    </section>
);

export default BadgesPage;
