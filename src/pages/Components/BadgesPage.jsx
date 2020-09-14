import React from 'react';
import { titleCase } from '../../utils';
import classnames from 'classnames';
import { brandColors } from '../Content';
import { FaStar } from 'react-icons/fa';

const BadgesPage = () => {
    return (
        <section className="mb-5">
            <h2>Badges</h2>
            <hr />
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

            <h3>Outline Badges</h3>
            <p>
                <code>light</code> and <code>warning</code> omitted due to poor visibility.
            </p>
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
        </section>
    );
};

export default BadgesPage;
