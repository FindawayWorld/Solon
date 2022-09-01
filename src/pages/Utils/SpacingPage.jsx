import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';
import { spacers } from '../Content';

const SpacingPage = () => (
    <section id="spacing-utils">
        <Breadcrumbs>
            <BreadcrumbItem as={Link} to="/utils">
                Utils
            </BreadcrumbItem>
            <BreadcrumbItem current>Spacing</BreadcrumbItem>
        </Breadcrumbs>

        <h2>Spacing Utils</h2>

        <p>
            <small>
                Based on{' '}
                <a
                    href="https://getbootstrap.com/docs/4.3/utilities/spacing/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Bootstrap Spacing Utils
                </a>
                , and Tailwind CSS{' '}
                <a href="https://tailwindcss.com/docs/margin" target="_blank" rel="noopener noreferrer">
                    Margins
                </a>
                , and{' '}
                <a href="https://tailwindcss.com/docs/padding" target="_blank" rel="noopener noreferrer">
                    Padding
                </a>
                .
            </small>
        </p>

        <hr />

        <p>
            Assign responsive-friendly <code>margin</code> or <code>padding</code> values to an element or a subset of
            its sides with shorthand classes. Includes support for individual properties, all properties, and vertical
            and horizontal properties.
        </p>

        <p>
            The classes are named using the format <code>{`.{property}{sides}-{breakpoint}-{size}`}</code>.
        </p>

        <p>
            Where <code>{`{property}`}</code> is one of:
        </p>

        <ul>
            <li>
                <code>m</code> - <code>margin</code>
            </li>
            <li>
                <code>p</code> - <code>padding</code>
            </li>
            <li>
                <code>g</code> - <code>gap</code>
            </li>
        </ul>

        <p>
            Where <code>{`{sides}`}</code> is one of:
        </p>

        <ul>
            <li>
                <code>t</code> - <code>margin-top</code> or <code>padding-top</code>
            </li>
            <li>
                <code>b</code> - <code>margin-bottom</code> or <code>padding-bottom</code>
            </li>
            <li>
                <code>l</code> - <code>margin-left</code> or <code>padding-left</code>
            </li>
            <li>
                <code>r</code> - <code>margin-right</code> or <code>padding-right</code>
            </li>
            <li>
                <code>x</code> - both <code>*-left</code> and <code>*-right</code>. For <code>gap</code>, this is{' '}
                <code>row-gap</code>.
            </li>
            <li>
                <code>y</code> - both <code>*-top</code> and <code>*-bottom</code>. For <code>gap</code>, this is{' '}
                <code>column-gap</code>.
            </li>
            <li>
                blank - <code>margin</code>, <code>padding</code>, or <code>gap</code> on all sides of the element
            </li>
        </ul>

        <p>
            Where <code>{`{breakpoint}`}</code> is one of our <Link to="/utils/breakpoints">Breakpoint</Link> Class
            Prefixes.
        </p>

        <ul>
            <li>
                <code>xl</code> - Extra Large screens
            </li>
            <li>
                <code>lg</code> - Large screens
            </li>
            <li>
                <code>md</code> - Medium screens
            </li>
            <li>
                <code>sm</code> - Small screens
            </li>
            <li>blank - All screens</li>
        </ul>

        <p>
            Where <code>{`{size}`}</code> is one of:
        </p>

        <table className="table striped full-width mb-6">
            <thead>
                <tr>
                    <th>Size</th>
                    <th>PX</th>
                    <th>REMs</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(spacers).map((key) => (
                    <tr key={`spacer_${key}`}>
                        <td>{key}</td>
                        <td>{spacers[key] * 16}px</td>
                        <td>{spacers[key]}rem</td>
                    </tr>
                ))}
                <tr>
                    <td>auto</td>
                    <td>---</td>
                    <td>---</td>
                </tr>
            </tbody>
        </table>

        <h3>Margin Examples</h3>

        <div className="row mb-5">
            <div className="col-12 col-md-4 col-lg-2">
                <p>
                    <strong>Top</strong> <code>.mt-#</code>
                </p>
                <div className="box p-0">
                    <div className="box-nested mt-3"></div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
                <p>
                    <strong>Right</strong> <code>.mr-#</code>
                </p>
                <div className="box p-0">
                    <div className="box-nested mr-3"></div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
                <p>
                    <strong>Bottom</strong> <code>.mb-#</code>
                </p>
                <div className="box p-0">
                    <div className="box-nested mb-3"></div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
                <p>
                    <strong>Left</strong> <code>.ml-#</code>
                </p>
                <div className="box p-0">
                    <div className="box-nested ml-3"></div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
                <p>
                    <strong>All</strong> <code>.m-#</code>
                </p>
                <div className="box p-0">
                    <div className="box-nested m-3"></div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
                <p>
                    <strong>Top/Bottom (y axis)</strong> <code>.my-#</code>
                </p>
                <div className="box p-0">
                    <div className="box-nested my-3"></div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
                <p>
                    <strong>Right/Left (x axis)</strong> <code>.mx-#</code>
                </p>
                <div className="box p-0">
                    <div className="box-nested mx-3"></div>
                </div>
            </div>
        </div>

        <h3>Padding Examples</h3>

        <div className="row mb-5">
            <div className="col-12 col-md-4 col-lg-2">
                <p>
                    <strong>Top</strong> <code>.pt-#</code>
                </p>
                <div className="box-first p-0 pt-3">
                    <div className="box-nested"></div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
                <p>
                    <strong>Right</strong> <code>.pr-#</code>
                </p>
                <div className="box-first p-0 pr-3">
                    <div className="box-nested"></div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
                <p>
                    <strong>Bottom</strong> <code>.pb-#</code>
                </p>
                <div className="box-first p-0 pb-3">
                    <div className="box-nested"></div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
                <p>
                    <strong>Left</strong> <code>.pl-#</code>
                </p>
                <div className="box-first p-0 pl-3">
                    <div className="box-nested"></div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
                <p>
                    <strong>All</strong> <code>.p-#</code>
                </p>
                <div className="box-first p-0 p-3">
                    <div className="box-nested"></div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
                <p>
                    <strong>Top/Bottom (y axis)</strong> <code>.py-#</code>
                </p>
                <div className="box-first p-0 py-3">
                    <div className="box-nested"></div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
                <p>
                    <strong>Right/Left (x axis)</strong> <code>.px-#</code>
                </p>
                <div className="box-first p-0 px-3">
                    <div className="box-nested"></div>
                </div>
            </div>
        </div>

        <h3>Flex Examples</h3>

        <p>
            <strong>All</strong> <code>.g-#</code>
        </p>
        <div className="d-flex wrap g-2 mb-5">
            {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="box-nested" style={{ flexBasis: '200px' }}>
                    {i}
                </div>
            ))}
        </div>

        <p>
            <strong>Right/Left (x axis)</strong> <code>.gx-#</code>
        </p>
        <div className="d-flex wrap gx-2 mb-5">
            {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="box-nested" style={{ flexBasis: '200px' }}>
                    {i}
                </div>
            ))}
        </div>

        <p>
            <strong>Top/Bottom (y axis)</strong> <code>.gy-#</code>
        </p>
        <div className="d-flex wrap gy-2">
            {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="box-nested" style={{ flexBasis: '200px' }}>
                    {i}
                </div>
            ))}
        </div>
    </section>
);

export default SpacingPage;
