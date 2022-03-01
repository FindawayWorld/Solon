import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';
import { FiAlertTriangle } from 'react-icons/fi';

const GridsPage = () => (
    <section id="grids" className="mb-5">
        <Breadcrumbs>
            <BreadcrumbItem as={Link} to="/utils">
                Utils
            </BreadcrumbItem>
            <BreadcrumbItem current>Grids</BreadcrumbItem>
        </Breadcrumbs>

        <h2 className="mb-1">Grids</h2>
        <p>
            <small>
                Based on{' '}
                <a href="http://flexboxgrid.com/" target="_blank" rel="noopener noreferrer">
                    Flexbox Grid
                </a>
                .
            </small>
        </p>
        <hr />

        <section className="page-section mb-8">
            <h3>Containers</h3>
            <p>
                Containers are used to contain, pad, and (sometimes) center the content within them. While containers
                can be nested, most layouts do not require a nested container.
            </p>

            <div className="flash flash-warning mb-4">
                <p>
                    <FiAlertTriangle className="icon-align" /> Containers are required when using our default grid
                    system.
                </p>
                <p>
                    <FiAlertTriangle className="icon-align" /> You might need to collapse the sidebar to see the
                    container's max-width at each breakpoint.
                </p>
            </div>

            <div className="container bg-blue py-4 mb-4">
                <code>.container</code>
            </div>
            <div className="container-fluid bg-blue py-4 mb-6">
                <code>.container-fluid</code>
            </div>

            <table className="table full-width">
                <thead>
                    <tr>
                        <td className="border-dark"></td>
                        <th scope="col">
                            Extra small
                            <br />
                            <span className="fw-normal">&lt;576px</span>
                        </th>
                        <th scope="col">
                            Small
                            <br />
                            <span className="fw-normal">≥576px</span>
                        </th>
                        <th scope="col">
                            Medium
                            <br />
                            <span className="fw-normal">≥768px</span>
                        </th>
                        <th scope="col">
                            Large
                            <br />
                            <span className="fw-normal">≥992px</span>
                        </th>
                        <th scope="col">
                            X-Large
                            <br />
                            <span className="fw-normal">≥1200px</span>
                        </th>
                        <th scope="col">
                            XX-Large
                            <br />
                            <span className="fw-normal">≥1400px</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" className="fw-normal">
                            <code>.container</code>
                        </th>
                        <td className="txt-muted">100%</td>
                        <td>540px</td>
                        <td>720px</td>
                        <td>960px</td>
                        <td>1140px</td>
                        <td>1320px</td>
                    </tr>
                    <tr>
                        <th scope="row" className="fw-normal">
                            <code>.container-fluid</code>
                        </th>
                        <td className="txt-muted">100%</td>
                        <td className="txt-muted">100%</td>
                        <td className="txt-muted">100%</td>
                        <td className="txt-muted">100%</td>
                        <td className="txt-muted">100%</td>
                        <td className="txt-muted">100%</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section className="page-section">
            <h3>Simple Syntax</h3>
            <p>
                All you need to remember is <code>.row</code> and <code>{`.col-{breakpoint}-{column count}`}</code>.
            </p>
            <p>
                <code>{`{breakpoint}`}</code> one of the pre-defined{' '}
                <Link to="/utils/breakpoints">responsive breakpoints</Link>
            </p>
            <p>
                <code>{`{column count}`}</code> - Number of columns to span between 1 - 12.
            </p>
            <pre>
                <code>{`<div className="row">
    <div className="col-12">100%</div>
    <div className="col-6">50%</div>
    <div className="col-4">33.333%</div>
    <div className="col-3">25%</div>
</div>`}</code>
            </pre>
        </section>

        <section className="page-section mb-5">
            <h3 className="mb-1">Responsive</h3>
            <p className="mb-3">
                Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at
                xs, sm, md &amp; lg viewport widths.
            </p>

            <div className="row">
                <div className="col-12 col-sm-3 col-md-2 col-lg-1">
                    <div className="box-row"></div>
                </div>
                <div className="col-6 col-sm-6 col-md-8 col-lg-10">
                    <div className="box-row"></div>
                </div>
                <div className="col-6 col-sm-3 col-md-2 col-lg-1">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-3 col-md-2 col-lg-1">
                    <div className="box-row"></div>
                </div>
                <div className="col-12 col-sm-9 col-md-10 col-lg-11">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-10 col-sm-6 col-md-8 col-lg-10">
                    <div className="box-row"></div>
                </div>
                <div className="col-2 col-sm-6 col-md-4 col-lg-2">
                    <div className="box-row"></div>
                </div>
            </div>
        </section>

        <section className="page-section mb-5">
            <h3 className="mb-1">Fluid</h3>
            <p className="mb-3">Percent based widths allow fluid resizing of columns and rows.</p>

            <div className="row">
                <div className="col-12">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-1">
                    <div className="box-row"></div>
                </div>
                <div className="col-11">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <div className="box-row"></div>
                </div>
                <div className="col-10">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <div className="box-row"></div>
                </div>
                <div className="col-9">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="box-row"></div>
                </div>
                <div className="col-8">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-5">
                    <div className="box-row"></div>
                </div>
                <div className="col-7">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="box-row"></div>
                </div>
                <div className="col-6">
                    <div className="box-row"></div>
                </div>
            </div>
        </section>

        <section className="page-section mb-5">
            <h3 className="mb-1">Offsets</h3>
            <p className="mb-3">
                Offset a column. <code>{`.col-{breakpoint}-offset-{column count}`}</code>
            </p>

            <div className="row">
                <div className="col-offset-11 col-1">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-offset-10 col-2">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-offset-9 col-3">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-offset-8 col-4">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-offset-7 col-5">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-offset-6 col-6">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-offset-5 col-7">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-offset-4 col-8">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-offset-3 col-9">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-offset-2 col-10">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-offset-1 col-11">
                    <div className="box-row"></div>
                </div>
            </div>
        </section>

        <section className="page-section mb-5">
            <h3 className="mb-1">Auto Width</h3>
            <p className="mb-3">
                Add any number of auto sizing columns to a row. Let the grid figure it out.{' '}
                <code>{`.col-{breakpoint}`}</code>
            </p>
            <div className="row">
                <div className="col">
                    <div className="box-row"></div>
                </div>
                <div className="col">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="box-row"></div>
                </div>
                <div className="col">
                    <div className="box-row"></div>
                </div>
                <div className="col">
                    <div className="box-row"></div>
                </div>
            </div>
        </section>

        <section className="page-section mb-5">
            <h3 className="mb-1">Nested Grids</h3>
            <p className="mb-3">Nest grids inside grids inside grids.</p>
            <div className="row">
                <div className="col-7">
                    <div className="box box-container">
                        <div className="row">
                            <div className="col-9">
                                <div className="box-first box-container">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="box-nested"></div>
                                        </div>
                                        <div className="col-8">
                                            <div className="box-nested"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="box-first box-container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="box-nested"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <div className="box box-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="box-first box-container">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="box-nested"></div>
                                        </div>
                                        <div className="col-6">
                                            <div className="box-nested"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="page-section mb-5">
            <h3 className="mb-1">Alignment</h3>
            <p className="mb-3">
                Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a
                column.
            </p>

            <p>
                <code>{`.start-{breakpoint}`}</code>
            </p>
            <div className="row mb-3">
                <div className="col-12">
                    <div className="box box-container">
                        <div className="row start">
                            <div className="col-6">
                                <div className="box-nested"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p>
                <code>{`.center-{breakpoint}`}</code>
            </p>
            <div className="row mb-3">
                <div className="col-12">
                    <div className="box box-container">
                        <div className="row center">
                            <div className="col-6">
                                <div className="box-nested"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p>
                <code>{`.end-{breakpoint}`}</code>
            </p>
            <div className="row mb-3">
                <div className="col-12">
                    <div className="box box-container">
                        <div className="row end">
                            <div className="col-6">
                                <div className="box-nested"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p>
                Here is an example of using the modifiers in conjunction to acheive different alignment at different
                viewport sizes.
            </p>
            <div className="row mb-3">
                <div className="col-12">
                    <div className="box box-container">
                        <div className="row center end-sm start-lg">
                            <div className="col-6">
                                <div className="box-nested"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p>
                <code>{`.top-{breakpoint}`}</code>
            </p>
            <div className="row top mb-3">
                <div className="col-6">
                    <div className="box-large"></div>
                </div>
                <div className="col-6">
                    <div className="box"></div>
                </div>
            </div>

            <p>
                <code>{`.middle-{breakpoint}`}</code>
            </p>
            <div className="row middle mb-3">
                <div className="col-6">
                    <div className="box-large"></div>
                </div>
                <div className="col-6">
                    <div className="box"></div>
                </div>
            </div>

            <p>
                <code>{`.bottom-{breakpoint}`}</code>
            </p>
            <div className="row bottom mb-3">
                <div className="col-6">
                    <div className="box-large"></div>
                </div>
                <div className="col-6">
                    <div className="box"></div>
                </div>
            </div>
        </section>

        <section className="page-section mb-5">
            <h3 className="mb-1">Distribution</h3>
            <p className="mb-3">Add classes to distribute the contents of a row or column.</p>

            <p>
                <code>{`.around-{breakpoint}`}</code>
            </p>
            <div className="row mb-3">
                <div className="col-12">
                    <div className="box box-container">
                        <div className="row around">
                            <div className="col-2">
                                <div className="box-nested"></div>
                            </div>
                            <div className="col-2">
                                <div className="box-nested"></div>
                            </div>
                            <div className="col-2">
                                <div className="box-nested"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p>
                <code>{`.between-{breakpoint}`}</code>
            </p>
            <div className="row">
                <div className="col-12">
                    <div className="box box-container">
                        <div className="row between">
                            <div className="col-2">
                                <div className="box-nested"></div>
                            </div>
                            <div className="col-2">
                                <div className="box-nested"></div>
                            </div>
                            <div className="col-2">
                                <div className="box-nested"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="page-section mb-5">
            <h3 className="mb-1">Reordering</h3>
            <p className="mb-3">Add classes to reorder columns.</p>

            <p>
                <code>{`.first-{breakpoint}`}</code>
            </p>
            <div className="row mb-4">
                <div className="col-12">
                    <div className="box box-container">
                        <div className="row">
                            <div className="col-2">
                                <div className="box-first">1</div>
                            </div>
                            <div className="col-2">
                                <div className="box-first">2</div>
                            </div>
                            <div className="col-2">
                                <div className="box-first">3</div>
                            </div>
                            <div className="col-2">
                                <div className="box-first">4</div>
                            </div>
                            <div className="col-2">
                                <div className="box-first">5</div>
                            </div>
                            <div className="col-2 first">
                                <div className="box-nested">6</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p>
                <code>{`.last-{breakpoint}`}</code>
            </p>
            <div className="row mb-4">
                <div className="col-12">
                    <div className="box box-container">
                        <div className="row">
                            <div className="col-2 last">
                                <div className="box-nested">1</div>
                            </div>
                            <div className="col-2">
                                <div className="box-first">2</div>
                            </div>
                            <div className="col-2">
                                <div className="box-first">3</div>
                            </div>
                            <div className="col-2">
                                <div className="box-first">4</div>
                            </div>
                            <div className="col-2">
                                <div className="box-first">5</div>
                            </div>
                            <div className="col-2">
                                <div className="box-first">6</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="page-section">
            <h3 className="mb-3">Reversing</h3>

            <p className="mb-2">
                <code>.row.reverse</code>
            </p>
            <div className="row">
                <div className="col-12">
                    <div className="box box-container">
                        <div className="row reverse">
                            <div className="col-2">
                                <div className="box-nested">1</div>
                            </div>
                            <div className="col-2">
                                <div className="box-nested">2</div>
                            </div>
                            <div className="col-2">
                                <div className="box-nested">3</div>
                            </div>
                            <div className="col-2">
                                <div className="box-nested">4</div>
                            </div>
                            <div className="col-2">
                                <div className="box-nested">5</div>
                            </div>
                            <div className="col-2">
                                <div className="box-nested">6</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
);

export default GridsPage;
