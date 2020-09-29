import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';

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
    <div className="col-xs-12">100%</div>
    <div className="col-xs-6">50%</div>
    <div className="col-xs-4">33.333%</div>
    <div className="col-xs-3">25%</div>
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
                <div className="col-xs-12 col-sm-3 col-md-2 col-lg-1">
                    <div className="box-row"></div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-8 col-lg-10">
                    <div className="box-row"></div>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-2 col-lg-1">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-3 col-md-2 col-lg-1">
                    <div className="box-row"></div>
                </div>
                <div className="col-xs-12 col-sm-9 col-md-10 col-lg-11">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-10 col-sm-6 col-md-8 col-lg-10">
                    <div className="box-row"></div>
                </div>
                <div className="col-xs-2 col-sm-6 col-md-4 col-lg-2">
                    <div className="box-row"></div>
                </div>
            </div>
        </section>

        <section className="page-section mb-5">
            <h3 className="mb-1">Fluid</h3>
            <p className="mb-3">Percent based widths allow fluid resizing of columns and rows.</p>

            <div className="row">
                <div className="col-xs-12">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-1">
                    <div className="box-row"></div>
                </div>
                <div className="col-xs-11">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2">
                    <div className="box-row"></div>
                </div>
                <div className="col-xs-10">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-3">
                    <div className="box-row"></div>
                </div>
                <div className="col-xs-9">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-4">
                    <div className="box-row"></div>
                </div>
                <div className="col-xs-8">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-5">
                    <div className="box-row"></div>
                </div>
                <div className="col-xs-7">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-6">
                    <div className="box-row"></div>
                </div>
                <div className="col-xs-6">
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
                <div className="col-xs-offset-11 col-xs-1">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-offset-10 col-xs-2">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-offset-9 col-xs-3">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-offset-8 col-xs-4">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-offset-7 col-xs-5">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-offset-6 col-xs-6">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-offset-5 col-xs-7">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-offset-4 col-xs-8">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-offset-3 col-xs-9">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-10">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-offset-1 col-xs-11">
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
                <div className="col-xs">
                    <div className="box-row"></div>
                </div>
                <div className="col-xs">
                    <div className="box-row"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs">
                    <div className="box-row"></div>
                </div>
                <div className="col-xs">
                    <div className="box-row"></div>
                </div>
                <div className="col-xs">
                    <div className="box-row"></div>
                </div>
            </div>
        </section>

        <section className="page-section mb-5">
            <h3 className="mb-1">Nested Grids</h3>
            <p className="mb-3">Nest grids inside grids inside grids.</p>
            <div className="row">
                <div className="col-xs-7">
                    <div className="box box-container">
                        <div className="row">
                            <div className="col-xs-9">
                                <div className="box-first box-container">
                                    <div className="row">
                                        <div className="col-xs-4">
                                            <div className="box-nested"></div>
                                        </div>
                                        <div className="col-xs-8">
                                            <div className="box-nested"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-3">
                                <div className="box-first box-container">
                                    <div className="row">
                                        <div className="col-xs">
                                            <div className="box-nested"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-5">
                    <div className="box box-container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="box-first box-container">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <div className="box-nested"></div>
                                        </div>
                                        <div className="col-xs-6">
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
                <div className="col-xs-12">
                    <div className="box box-container">
                        <div className="row start-xs">
                            <div className="col-xs-6">
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
                <div className="col-xs-12">
                    <div className="box box-container">
                        <div className="row center-xs">
                            <div className="col-xs-6">
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
                <div className="col-xs-12">
                    <div className="box box-container">
                        <div className="row end-xs">
                            <div className="col-xs-6">
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
                <div className="col-xs-12">
                    <div className="box box-container">
                        <div className="row center-xs end-sm start-lg">
                            <div className="col-xs-6">
                                <div className="box-nested"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p>
                <code>{`.top-{breakpoint}`}</code>
            </p>
            <div className="row top-xs mb-3">
                <div className="col-xs-6">
                    <div className="box-large"></div>
                </div>
                <div className="col-xs-6">
                    <div className="box"></div>
                </div>
            </div>

            <p>
                <code>{`.middle-{breakpoint}`}</code>
            </p>
            <div className="row middle-xs mb-3">
                <div className="col-xs-6">
                    <div className="box-large"></div>
                </div>
                <div className="col-xs-6">
                    <div className="box"></div>
                </div>
            </div>

            <p>
                <code>{`.bottom-{breakpoint}`}</code>
            </p>
            <div className="row bottom-xs mb-3">
                <div className="col-xs-6">
                    <div className="box-large"></div>
                </div>
                <div className="col-xs-6">
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
                <div className="col-xs-12">
                    <div className="box box-container">
                        <div className="row around-xs">
                            <div className="col-xs-2">
                                <div className="box-nested"></div>
                            </div>
                            <div className="col-xs-2">
                                <div className="box-nested"></div>
                            </div>
                            <div className="col-xs-2">
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
                <div className="col-xs-12">
                    <div className="box box-container">
                        <div className="row between-xs">
                            <div className="col-xs-2">
                                <div className="box-nested"></div>
                            </div>
                            <div className="col-xs-2">
                                <div className="box-nested"></div>
                            </div>
                            <div className="col-xs-2">
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
                <div className="col-xs-12">
                    <div className="box box-container">
                        <div className="row">
                            <div className="col-xs-2">
                                <div className="box-first">1</div>
                            </div>
                            <div className="col-xs-2">
                                <div className="box-first">2</div>
                            </div>
                            <div className="col-xs-2">
                                <div className="box-first">3</div>
                            </div>
                            <div className="col-xs-2">
                                <div className="box-first">4</div>
                            </div>
                            <div className="col-xs-2">
                                <div className="box-first">5</div>
                            </div>
                            <div className="col-xs-2 first-xs">
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
                <div className="col-xs-12">
                    <div className="box box-container">
                        <div className="row">
                            <div className="col-xs-2 last-xs">
                                <div className="box-nested">1</div>
                            </div>
                            <div className="col-xs-2">
                                <div className="box-first">2</div>
                            </div>
                            <div className="col-xs-2">
                                <div className="box-first">3</div>
                            </div>
                            <div className="col-xs-2">
                                <div className="box-first">4</div>
                            </div>
                            <div className="col-xs-2">
                                <div className="box-first">5</div>
                            </div>
                            <div className="col-xs-2">
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
                <div className="col-xs-12">
                    <div className="box box-container">
                        <div className="row reverse">
                            <div className="col-xs-2">
                                <div className="box-nested">1</div>
                            </div>
                            <div className="col-xs-2">
                                <div className="box-nested">2</div>
                            </div>
                            <div className="col-xs-2">
                                <div className="box-nested">3</div>
                            </div>
                            <div className="col-xs-2">
                                <div className="box-nested">4</div>
                            </div>
                            <div className="col-xs-2">
                                <div className="box-nested">5</div>
                            </div>
                            <div className="col-xs-2">
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
