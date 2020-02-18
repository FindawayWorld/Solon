import React from 'react';
import classnames from 'classnames';
import { brandColors } from './Content';

const UtilsPage = () => (
    <>
        <section id="color-utils" className="mb-5">
            <h2 className="mb-0">Color Utils</h2>
            <p><small>Based on <a href="https://getbootstrap.com/docs/4.3/utilities/colors/">Bootstrap Color Utils</a></small></p>
            <hr/>

            <h3>Text color</h3>
            <p className="bd-lead">Convey meaning through color with a handful of color utility classes.</p>
            <div className="bd-example">
                {brandColors.map(color => <p key={`txt-${color}`} className={classnames(`txt-${color}`, {'bg-dark': ['white', 'light'].includes(color)})}>{`.txt-${color}`}</p>)}
            </div>

            <h3>Background color</h3>
            <p>Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities <strong>do not set <code className="highlighter-rouge">color</code></strong>, so in some cases you’ll want to use <code className="highlighter-rouge">.text-*</code> utilities.</p>

            <div className="bd-example">
                {brandColors.map(color => {
                    return (
                        <p key={`txt-${color}`} className={classnames('p-3 mb-2', `bg-${color}`, {
                            'txt-dark': ['white', 'light'].includes(color),
                            'txt-white': !['white', 'light'].includes(color)
                        })}>{`.bg-${color}`}</p>
                    )
                })}
            </div>
        </section>

        <section id="spacing-utils" className="mb-5">
            <h2 className="mb-0">Spacing Utils</h2>
            <p><small>Based on <a href="https://getbootstrap.com/docs/4.3/utilities/spacing/" target="_blank" rel="noopener noreferrer">Bootstrap Spacing Utils</a>.</small></p>

            <hr/>

            <p className="lead">we include a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.</p>

            <p>How it works</p>

            <p>Assign responsive-friendly <code>margin</code> or <code>padding</code> values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from <code>.25rem</code> to <code>3rem</code>.</p>

            <p>Notation</p>

            <p>Spacing utilities that apply to all breakpoints, from <code>xs</code> to <code>xl</code>, have no breakpoint abbreviation in them. This is because those classes are applied from <code>min-width: 0</code> and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.</p>

            <p>The classes are named using the format <code>{`{property}{sides}-{size}`}</code> for <code>xs</code> and <code>{`{property}{sides}-{breakpoint}-{size}`}</code> for <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.</p>

            <p>Where <em>property</em> is one of:</p>

            <ul>
                <li><code>m</code> - for classes that set <code>margin</code></li>
                <li><code>p</code> - for classes that set <code>padding</code></li>
            </ul>

            <p>Where <em>sides</em> is one of:</p>

            <ul>
                <li><code>t</code> - for classes that set <code>margin-top</code> or <code>padding-top</code></li>
                <li><code>b</code> - for classes that set <code>margin-bottom</code> or <code>padding-bottom</code></li>
                <li><code>l</code> - for classes that set <code>margin-left</code> or <code>padding-left</code></li>
                <li><code>r</code> - for classes that set <code>margin-right</code> or <code>padding-right</code></li>
                <li><code>x</code> - for classes that set both <code>*-left</code> and <code>*-right</code></li>
                <li><code>y</code> - for classes that set both <code>*-top</code> and <code>*-bottom</code></li>
                <li>blank - for classes that set a <code>margin</code> or <code>padding</code> on all 4 sides of the element</li>
            </ul>

            <p>Where <em>size</em> is one of:</p>

            <ul>
                <li><code>0</code> - for classes that eliminate the <code>margin</code> or <code>padding</code> by setting it to <code>0</code></li>
                <li><code>1</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer * .25</code></li>
                <li><code>2</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer * .5</code></li>
                <li><code>3</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer</code></li>
                <li><code>4</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer * 1.5</code></li>
                <li><code>5</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer * 3</code></li>
                <li><code>auto</code> - for classes that set the <code>margin</code> to auto</li>
            </ul>

            <h3>Margin Examples</h3>

            <div className="row mb-5">
                <div className="col-xs-12 col-md-4 col-lg-2">
                    <p><strong>Top</strong> <code>.mt-#</code></p>
                    <div className="box p-0"><div className="box-nested mt-3"></div></div>
                </div>
                <div className="col-xs-12 col-md-4 col-lg-2">
                    <p><strong>Right</strong> <code>.mr-#</code></p>
                    <div className="box p-0"><div className="box-nested mr-3"></div></div>
                </div>
                <div className="col-xs-12 col-md-4 col-lg-2">
                    <p><strong>Bottom</strong> <code>.mb-#</code></p>
                    <div className="box p-0"><div className="box-nested mb-3"></div></div>
                </div>
                <div className="col-xs-12 col-md-4 col-lg-2">
                    <p><strong>Left</strong> <code>.ml-#</code></p>
                    <div className="box p-0"><div className="box-nested ml-3"></div></div>
                </div>
                <div className="col-xs-12 col-md-4 col-lg-2">
                    <p><strong>All</strong> <code>.m-#</code></p>
                    <div className="box p-0"><div className="box-nested m-3"></div></div>
                </div>
                <div className="col-xs-12 col-md-4 col-lg-2">
                    <p><strong>Top/Bottom (y axis)</strong> <code>.my-#</code></p>
                    <div className="box p-0"><div className="box-nested my-3"></div></div>
                </div>
                <div className="col-xs-12 col-md-4 col-lg-2">
                    <p><strong>Right/Left (x axis)</strong> <code>.mx-#</code></p>
                    <div className="box p-0"><div className="box-nested mx-3"></div></div>
                </div>
            </div>

            <h3>Padding Examples</h3>

            <div className="row">
                <div className="col-xs-12 col-md-4 col-lg-2">
                    <p><strong>Top</strong> <code>.pt-#</code></p>
                    <div className="box-first p-0 pt-3"><div className="box-nested"></div></div>
                </div>
                <div className="col-xs-12 col-md-4 col-lg-2">
                    <p><strong>Right</strong> <code>.pr-#</code></p>
                    <div className="box-first p-0 pr-3"><div className="box-nested"></div></div>
                </div>
                <div className="col-xs-12 col-md-4 col-lg-2">
                    <p><strong>Bottom</strong> <code>.pb-#</code></p>
                    <div className="box-first p-0 pb-3"><div className="box-nested"></div></div>
                </div>
                <div className="col-xs-12 col-md-4 col-lg-2">
                    <p><strong>Left</strong> <code>.pl-#</code></p>
                    <div className="box-first p-0 pl-3"><div className="box-nested"></div></div>
                </div>
                <div className="col-xs-12 col-md-4 col-lg-2">
                    <p><strong>All</strong> <code>.p-#</code></p>
                    <div className="box-first p-0 p-3"><div className="box-nested"></div></div>
                </div>
                <div className="col-xs-12 col-md-4 col-lg-2">
                    <p><strong>Top/Bottom (y axis)</strong> <code>.py-#</code></p>
                    <div className="box-first p-0 py-3"><div className="box-nested"></div></div>
                </div>
                <div className="col-xs-12 col-md-4 col-lg-2">
                    <p><strong>Right/Left (x axis)</strong> <code>.px-#</code></p>
                    <div className="box-first p-0 px-3"><div className="box-nested"></div></div>
                </div>
            </div>

        </section>

        <section id="grids" className="mb-5">
            <h2 className="mb-1">Grids</h2>
            <p><small>Based on <a href="http://flexboxgrid.com/" target="_blank" rel="noopener noreferrer">Flexbox Grid</a>.</small></p>
            <hr/>

            <section className="page-section">
                <h3>Simple Syntax</h3>
                <p>All you need to remember is <code>.row</code> and <code>{`.col-{breakpoint}-{column count}`}</code>.</p>
                <pre>&lt;div className="row"&gt;&lt;div className="col-xs-12"&gt;&lt;/div&gt;&lt;/div&gt;</pre>
            </section>

            <section className="page-section mb-5">
                <h3 className="mb-1">Responsive</h3>
                <p className="mb-3">Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md &amp; lg viewport widths.</p>

                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-2 col-lg-1"><div className="box-row"></div></div>
                    <div className="col-xs-6 col-sm-6 col-md-8 col-lg-10"><div className="box-row"></div></div>
                    <div className="col-xs-6 col-sm-3 col-md-2 col-lg-1"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-2 col-lg-1"><div className="box-row"></div></div>
                    <div className="col-xs-12 col-sm-9 col-md-10 col-lg-11"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-sm-6 col-md-8 col-lg-10"><div className="box-row"></div></div>
                    <div className="col-xs-2 col-sm-6 col-md-4 col-lg-2"><div className="box-row"></div></div>
                </div>
            </section>

            <section className="page-section mb-5">
                <h3 className="mb-1">Fluid</h3>
                <p className="mb-3">Percent based widths allow fluid resizing of columns and rows.</p>

                <div className="row">
                    <div className="col-xs-12"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs-1"><div className="box-row"></div></div>
                    <div className="col-xs-11"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs-2"><div className="box-row"></div></div>
                    <div className="col-xs-10"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs-3"><div className="box-row"></div></div>
                    <div className="col-xs-9"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs-4"><div className="box-row"></div></div>
                    <div className="col-xs-8"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs-5"><div className="box-row"></div></div>
                    <div className="col-xs-7"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs-6"><div className="box-row"></div></div>
                    <div className="col-xs-6"><div className="box-row"></div></div>
                </div>
            </section>

            <section className="page-section mb-5">
                <h3 className="mb-1">Offsets</h3>
                <p className="mb-3">Offset a column. <code>{`.col-{breakpoint}-offset-{column count}`}</code></p>

                <div className="row">
                    <div className="col-xs-offset-11 col-xs-1"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs-offset-10 col-xs-2"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs-offset-9 col-xs-3"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs-offset-8 col-xs-4"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs-offset-7 col-xs-5"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs-offset-6 col-xs-6"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs-offset-5 col-xs-7"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs-offset-4 col-xs-8"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs-offset-3 col-xs-9"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-10"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs-offset-1 col-xs-11"><div className="box-row"></div></div>
                </div>
            </section>

            <section className="page-section mb-5">
                <h3 className="mb-1">Auto Width</h3>
                <p className="mb-3">Add any number of auto sizing columns to a row. Let the grid figure it out. <code>{`.col-{breakpoint}`}</code></p>
                <div className="row">
                    <div className="col-xs"><div className="box-row"></div></div>
                    <div className="col-xs"><div className="box-row"></div></div>
                </div>
                <div className="row">
                    <div className="col-xs"><div className="box-row"></div></div>
                    <div className="col-xs"><div className="box-row"></div></div>
                    <div className="col-xs"><div className="box-row"></div></div>
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
                                            <div className="col-xs-4"><div className="box-nested"></div></div>
                                            <div className="col-xs-8"><div className="box-nested"></div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-3">
                                    <div className="box-first box-container">
                                        <div className="row">
                                            <div className="col-xs"><div className="box-nested"></div></div>
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
                                            <div className="col-xs-6"><div className="box-nested"></div></div>
                                            <div className="col-xs-6"><div className="box-nested"></div></div>
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
                <p className="mb-3">Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column.</p>

                <p><code>{`.start-{breakpoint}`}</code></p>
                <div className="row mb-3">
                    <div className="col-xs-12">
                        <div className="box box-container">
                            <div className="row start-xs">
                                <div className="col-xs-6"><div className="box-nested"></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <p><code>{`.center-{breakpoint}`}</code></p>
                <div className="row mb-3">
                    <div className="col-xs-12">
                        <div className="box box-container">
                            <div className="row center-xs">
                                <div className="col-xs-6"><div className="box-nested"></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <p><code>{`.end-{breakpoint}`}</code></p>
                <div className="row mb-3">
                    <div className="col-xs-12">
                        <div className="box box-container">
                            <div className="row end-xs">
                                <div className="col-xs-6"><div className="box-nested"></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <p>Here is an example of using the modifiers in conjunction to acheive different alignment at different viewport sizes.</p>
                <div className="row mb-3">
                    <div className="col-xs-12">
                        <div className="box box-container">
                            <div className="row center-xs end-sm start-lg">
                                <div className="col-xs-6"><div className="box-nested"></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <p><code>{`.top-{breakpoint}`}</code></p>
                <div className="row top-xs mb-3">
                    <div className="col-xs-6"><div className="box-large"></div></div>
                    <div className="col-xs-6"><div className="box"></div></div>
                </div>

                <p><code>{`.middle-{breakpoint}`}</code></p>
                <div className="row middle-xs mb-3">
                    <div className="col-xs-6"><div className="box-large"></div></div>
                    <div className="col-xs-6"><div className="box"></div></div>
                </div>

                <p><code>{`.bottom-{breakpoint}`}</code></p>
                <div className="row bottom-xs mb-3">
                    <div className="col-xs-6"><div className="box-large"></div></div>
                    <div className="col-xs-6"><div className="box"></div></div>
                </div>
            </section>

            <section className="page-section mb-5">
                <h3 className="mb-1">Distribution</h3>
                <p className="mb-3">Add classes to distribute the contents of a row or column.</p>

                <p><code>{`.around-{breakpoint}`}</code></p>
                <div className="row mb-3">
                    <div className="col-xs-12">
                        <div className="box box-container">
                            <div className="row around-xs">
                                <div className="col-xs-2"><div className="box-nested"></div></div>
                                <div className="col-xs-2"><div className="box-nested"></div></div>
                                <div className="col-xs-2"><div className="box-nested"></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <p><code>{`.between-{breakpoint}`}</code></p>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box box-container">
                            <div className="row between-xs">
                                <div className="col-xs-2"><div className="box-nested"></div></div>
                                <div className="col-xs-2"><div className="box-nested"></div></div>
                                <div className="col-xs-2"><div className="box-nested"></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section mb-5">
                <h3 className="mb-1">Reordering</h3>
                <p className="mb-3">Add classes to reorder columns.</p>

                <p><code>{`.first-{breakpoint}`}</code></p>
                <div className="row mb-4">
                    <div className="col-xs-12">
                        <div className="box box-container">
                            <div className="row">
                                <div className="col-xs-2"><div className="box-first">1</div></div>
                                <div className="col-xs-2"><div className="box-first">2</div></div>
                                <div className="col-xs-2"><div className="box-first">3</div></div>
                                <div className="col-xs-2"><div className="box-first">4</div></div>
                                <div className="col-xs-2"><div className="box-first">5</div></div>
                                <div className="col-xs-2 first-xs">
                                    <div className="box-nested">6</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p><code>{`.last-{breakpoint}`}</code></p>
                <div className="row mb-4">
                    <div className="col-xs-12">
                        <div className="box box-container">
                            <div className="row">
                                <div className="col-xs-2 last-xs"><div className="box-nested">1</div></div>
                                <div className="col-xs-2"><div className="box-first">2</div></div>
                                <div className="col-xs-2"><div className="box-first">3</div></div>
                                <div className="col-xs-2"><div className="box-first">4</div></div>
                                <div className="col-xs-2"><div className="box-first">5</div></div>
                                <div className="col-xs-2"><div className="box-first">6</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <h3 className="mb-3">Reversing</h3>

                <p className="mb-2"><code>.row.reverse</code></p>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box box-container">
                            <div className="row reverse">
                                <div className="col-xs-2"><div className="box-nested">1</div></div>
                                <div className="col-xs-2"><div className="box-nested">2</div></div>
                                <div className="col-xs-2"><div className="box-nested">3</div></div>
                                <div className="col-xs-2"><div className="box-nested">4</div></div>
                                <div className="col-xs-2"><div className="box-nested">5</div></div>
                                <div className="col-xs-2"><div className="box-nested">6</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </>
);

export default UtilsPage;