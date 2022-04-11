import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { titleCase } from '../../utils';
import { brandColors } from '../Content';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';
import { FaInfoCircle } from 'react-icons/fa';

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
                {brandColors.map(([color]) => (
                    <div key={`flash-${color}`} className={classnames('flash mb-4', `flash-${color}`)}>
                        {titleCase(color)} <a href="#demo">anchor link</a>
                    </div>
                ))}

                <div className="flash flash-primary flash-dismissible mb-4">
                    Primary, dismissible. <button className="close">&times;</button>
                </div>
                <div className="flash flash-success mb-4" role="alert">
                    <h4>Success!</h4>
                    <p>
                        This example text is going to run a bit longer so that you can see how spacing within flashes
                        works with this kind of content.
                    </p>
                    <hr />
                    <p class="mb-0">
                        Whenever you need to, be sure to use <Link to="/utils/spacing">spacing utilities</Link> to keep
                        things nice and tidy.
                    </p>
                </div>
                <div className="flash flash-danger mb-4" role="alert">
                    <h6>Errors</h6>
                    <ul className="mb-0">
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                    </ul>
                </div>
                <div className="flash flash-info d-flex middle">
                    <FaInfoCircle className="mr-2" />
                    <div>This is a Flash with an Icon.</div>
                </div>
            </div>
        </section>
    );
};

export default FlashesPage;
