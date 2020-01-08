import React from 'react';
import Input from './components/form/Input';
import Select from './components/form/Select';
import TextArea from './components/form/TextArea';
import Checkbox from './components/form/Checkbox';

function App() {
    return (
        <div className="p-5">
            <h1>Gateway</h1>
            <p>Gateway is Findaway's boilerplate for React sites/applications.</p>
            <p>This repository can be copied to start any react project.</p>
            <p>By default this repository contains CSS (SCSS), React Components, and utilities to help get any project up-and-running quickly with consistency to all other projects.</p>

            <section id="headings" className="mb-5">
                <h2>Headings</h2>
                <hr/>
                <div>
                    <h1>Header 1</h1>
                    <h2>Header 2</h2>
                    <h3>Header 3</h3>
                    <h4>Header 4/5/6</h4>
                </div>
            </section>

            <section id="body-copy" className="mb-5">
            <h2>Body copy</h2>
            <hr/>

            <p>Findaway is a global leader in digital content delivery. With the invention of Playaway Preloaded Products, they transformed the way that audiobooks, eBooks, videos and learning tools are circulated in 40,000 libraries, schools, and military installations.</p>

            <p>Findaway also revolutionized digital audiobook delivery with AudioEngine, which is quickly becoming the industry’s largest B2B audiobook delivery platform that enables brands to deliver one of the world’s largest collections of digital audiobooks within their own experience.</p>

            <p>To learn more about Findaway and the Findawayers who make it all happen, visit www.findaway.com</p>
        </section>

        <section id="lead-text" className="mb-5">
            <h2>Lead text</h2>
            <hr/>
            <div>
                <p className="lead">Findaway is a global leader in digital content delivery. With the invention of Playaway Preloaded Products, they transformed the way that audiobooks, eBooks, videos and learning tools are circulated in 40,000 libraries, schools, and military installations.</p>
            </div>
        </section>

        <section id="links" className="mb-5">
            <h2>Links/Anchors</h2>
            <hr/>

            <ul className="list-flat">
                <li><a href="#link">Standard</a></li>
                <li><a href="#link" className="cta">Call To Action</a></li>
            </ul>
        </section>

        <section id="lists" className="mb-5">
            <h2 className="mb-2">List Types</h2>
            <hr/>

            <h3 className="mb-0">Unordered <small><code>ul</code></small></h3>
            <ul>
                <li>lorem ipsum</li>
                <li>dolor sit amet</li>
                <li>adipisicing elit</li>
            </ul>

            <h3 className="mb-0">Ordered <small><code>ol</code></small></h3>
            <ol>
                <li>lorem ipsum</li>
                <li>dolor sit amet</li>
                <li>adipisicing elit</li>
            </ol>

            <h3 className="mb-0">Inline <small><code>.list-inline</code></small></h3>
            <ul className="list-inline">
                <li><a href="#link">lorem ipsum</a></li>
                <li><a href="#link">dolor sit amet</a></li>
                <li><a href="#link">adipisicing elit</a></li>
            </ul>

            <h3 className="mb-0">Flat <small><code>.list-flat</code></small></h3>
            <ul className="list-flat">
                <li><a href="#link">lorem ipsum</a></li>
                <li><a href="#link">dolor sit amet</a></li>
                <li><a href="#link">adipisicing elit</a></li>
            </ul>
        </section>

        <section id="Buttons" className="mb-5">
            <h2>Buttons</h2>
            <hr/>

            <p>
                <button className="btn mr-3">Default</button>
                <button className="btn btn-primary">Primary</button>
            </p>
        </section>

        <section id="forms" className="mb-5">
            <h2>Forms</h2>
            <p>Forms should be built with <a href="https://jaredpalmer.com/formik/">Formik</a>.</p>
            <p>Form markup is derrived from Bootstrap.</p>
            <hr/>

            <h3>Input and Label</h3>
            <hr/>
            <Input
                label="Text Input"
                placeholder="Placeholder Text"
            />

            <Input
                label="Prepend Label"
                prependLabel={true}
            />

            <Input
                label="Appended Component"
                append={<button className="btn btn-primary">Submit</button>}
            />

            <Input
                label="With Error"
                errors="This is an error message."
                touched={true}
            />

            <h3>Select</h3>
            <hr/>
            <div>
                <Select
                    label="Single Select"
                >
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    <option value="4">Option 4</option>
                    <option value="5">Option 5</option>
                </Select>

                <Select
                    label="Multiple Select"
                    multiple
                >
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    <option value="4">Option 4</option>
                    <option value="5">Option 5</option>
                </Select>
            </div>

            <div className="row">
                <div className="col-xs-12 col-md-4">
                    <h3>Text Area</h3>
                    <pre><code>{`
                        <TextArea
                            label = ''
                            prependLabel = false
                            placeholder = null
                            id = 'textarea'
                            validators = []
                            errorMessage = ''
                            defaultValue = undefined
                            value = undefined
                            required = false
                            showRequired = false
                            hidden = false
                            className = ''
                            collapse = false
                            hideLabel = false
                            inputStyles = {}
                            restricted = []
                            autoComplete = null
                            rows = 3

                            flex = false
                            labelClass = null
                            append = null
                            prepend = null
                            small = false
                            help = null
                            disabled = false
                            readOnly = false
                            children = null

                            errors = false
                            touched = false

                            onChange = () => {}
                            onBlur = () => {}
                            onFocus = () => {}
                            onKeyUp = () => {}
                            onKeyDown = () => {}
                            onKeyPress = () => {}
                        />`.trim()}
                    </code></pre>
                </div>
                <div className="col-xs-12 col-md-8">
                    <TextArea
                        label="Text Area"
                    />
                </div>
            </div>

            <Checkbox
                label="Checkbox"
                id="checkbox_1"
            />

            <Checkbox
                label="With Errors"
                id="error_checkbox"
                errors="Checkbox error message"
                touched={true}
            />


        </section>

        <section id="spacing-utils" className="mb-5">
            <h2 className="mb-1">Spacing Utils</h2>
            <p><small>Based on <a href="https://getbootstrap.com/docs/4.3/utilities/spacing/" target="_blank" rel="noopener noreferrer">Bootstrap Spacing Utils</a>.</small></p>

            <hr/>

            <p class="lead">we include a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.</p>

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
            <p><small>Based on <a href="flexboxgrid.com" target="_blank" rel="noopener noreferrer">Flexbox Grid</a>.</small></p>
            <hr/>

            <section class="page-section">
                <h3>Simple Syntax</h3>
                <p>All you need to remember is <code>.row</code> and <code>{`.col-{breakpoint}-{column count}`}</code>.</p>
                <pre>&lt;div class="row"&gt;&lt;div class="col-xs-12"&gt;&lt;/div&gt;&lt;/div&gt;</pre>
            </section>

            <section class="page-section mb-5">
                <h3 className="mb-1">Responsive</h3>
                <p className="mb-3">Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md &amp; lg viewport widths.</p>

                <div class="row">
                    <div class="col-xs-12 col-sm-3 col-md-2 col-lg-1"><div class="box-row"></div></div>
                    <div class="col-xs-6 col-sm-6 col-md-8 col-lg-10"><div class="box-row"></div></div>
                    <div class="col-xs-6 col-sm-3 col-md-2 col-lg-1"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-3 col-md-2 col-lg-1"><div class="box-row"></div></div>
                    <div class="col-xs-12 col-sm-9 col-md-10 col-lg-11"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs-10 col-sm-6 col-md-8 col-lg-10"><div class="box-row"></div></div>
                    <div class="col-xs-2 col-sm-6 col-md-4 col-lg-2"><div class="box-row"></div></div>
                </div>
            </section>

            <section class="page-section mb-5">
                <h3 className="mb-1">Fluid</h3>
                <p className="mb-3">Percent based widths allow fluid resizing of columns and rows.</p>

                <div class="row">
                    <div class="col-xs-12"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs-1"><div class="box-row"></div></div>
                    <div class="col-xs-11"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs-2"><div class="box-row"></div></div>
                    <div class="col-xs-10"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs-3"><div class="box-row"></div></div>
                    <div class="col-xs-9"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs-4"><div class="box-row"></div></div>
                    <div class="col-xs-8"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs-5"><div class="box-row"></div></div>
                    <div class="col-xs-7"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs-6"><div class="box-row"></div></div>
                    <div class="col-xs-6"><div class="box-row"></div></div>
                </div>
            </section>

            <section class="page-section mb-5">
                <h3 className="mb-1">Offsets</h3>
                <p className="mb-3">Offset a column. <code>{`.col-{breakpoint}-offset-{column count}`}</code></p>

                <div class="row">
                    <div class="col-xs-offset-11 col-xs-1"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs-offset-10 col-xs-2"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs-offset-9 col-xs-3"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs-offset-8 col-xs-4"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs-offset-7 col-xs-5"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs-offset-6 col-xs-6"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs-offset-5 col-xs-7"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs-offset-4 col-xs-8"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs-offset-3 col-xs-9"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs-offset-2 col-xs-10"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs-offset-1 col-xs-11"><div class="box-row"></div></div>
                </div>
            </section>

            <section class="page-section mb-5">
                <h3 className="mb-1">Auto Width</h3>
                <p className="mb-3">Add any number of auto sizing columns to a row. Let the grid figure it out. <code>{`.col-{breakpoint}`}</code></p>
                <div class="row">
                    <div class="col-xs"><div class="box-row"></div></div>
                    <div class="col-xs"><div class="box-row"></div></div>
                </div>
                <div class="row">
                    <div class="col-xs"><div class="box-row"></div></div>
                    <div class="col-xs"><div class="box-row"></div></div>
                    <div class="col-xs"><div class="box-row"></div></div>
                </div>
            </section>

            <section class="page-section mb-5">
                <h3 className="mb-1">Nested Grids</h3>
                <p className="mb-3">Nest grids inside grids inside grids.</p>
                <div class="row">
                    <div class="col-xs-7">
                        <div class="box box-container">
                            <div class="row">
                                <div class="col-xs-9">
                                    <div class="box-first box-container">
                                        <div class="row">
                                            <div class="col-xs-4"><div class="box-nested"></div></div>
                                            <div class="col-xs-8"><div class="box-nested"></div></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-3">
                                    <div class="box-first box-container">
                                        <div class="row">
                                            <div class="col-xs"><div class="box-nested"></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-5">
                        <div class="box box-container">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="box-first box-container">
                                        <div class="row">
                                            <div class="col-xs-6"><div class="box-nested"></div></div>
                                            <div class="col-xs-6"><div class="box-nested"></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="page-section mb-5">
                <h3 className="mb-1">Alignment</h3>
                <p className="mb-3">Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column.</p>

                <p><code>{`.start-{breakpoint}`}</code></p>
                <div class="row mb-3">
                    <div class="col-xs-12">
                        <div class="box box-container">
                            <div class="row start-xs">
                                <div class="col-xs-6"><div class="box-nested"></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <p><code>{`.center-{breakpoint}`}</code></p>
                <div class="row mb-3">
                    <div class="col-xs-12">
                        <div class="box box-container">
                            <div class="row center-xs">
                                <div class="col-xs-6"><div class="box-nested"></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <p><code>{`.end-{breakpoint}`}</code></p>
                <div class="row mb-3">
                    <div class="col-xs-12">
                        <div class="box box-container">
                            <div class="row end-xs">
                                <div class="col-xs-6"><div class="box-nested"></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <p>Here is an example of using the modifiers in conjunction to acheive different alignment at different viewport sizes.</p>
                <div class="row mb-3">
                    <div class="col-xs-12">
                        <div class="box box-container">
                            <div class="row center-xs end-sm start-lg">
                                <div class="col-xs-6"><div class="box-nested"></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <p><code>{`.top-{breakpoint}`}</code></p>
                <div class="row top-xs mb-3">
                    <div class="col-xs-6"><div class="box-large"></div></div>
                    <div class="col-xs-6"><div class="box"></div></div>
                </div>

                <p><code>{`.middle-{breakpoint}`}</code></p>
                <div class="row middle-xs mb-3">
                    <div class="col-xs-6"><div class="box-large"></div></div>
                    <div class="col-xs-6"><div class="box"></div></div>
                </div>

                <p><code>{`.bottom-{breakpoint}`}</code></p>
                <div class="row bottom-xs mb-3">
                    <div class="col-xs-6"><div class="box-large"></div></div>
                    <div class="col-xs-6"><div class="box"></div></div>
                </div>
            </section>

            <section class="page-section mb-5">
                <h3 className="mb-1">Distribution</h3>
                <p className="mb-3">Add classes to distribute the contents of a row or column.</p>

                <p><code>{`.around-{breakpoint}`}</code></p>
                <div class="row mb-3">
                    <div class="col-xs-12">
                        <div class="box box-container">
                            <div class="row around-xs">
                                <div class="col-xs-2"><div class="box-nested"></div></div>
                                <div class="col-xs-2"><div class="box-nested"></div></div>
                                <div class="col-xs-2"><div class="box-nested"></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <p><code>{`.between-{breakpoint}`}</code></p>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="box box-container">
                            <div class="row between-xs">
                                <div class="col-xs-2"><div class="box-nested"></div></div>
                                <div class="col-xs-2"><div class="box-nested"></div></div>
                                <div class="col-xs-2"><div class="box-nested"></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="page-section mb-5">
                <h3 className="mb-1">Reordering</h3>
                <p className="mb-3">Add classes to reorder columns.</p>

                <p><code>{`.first-{breakpoint}`}</code></p>
                <div class="row mb-4">
                    <div class="col-xs-12">
                        <div class="box box-container">
                            <div class="row">
                                <div class="col-xs-2"><div class="box-first">1</div></div>
                                <div class="col-xs-2"><div class="box-first">2</div></div>
                                <div class="col-xs-2"><div class="box-first">3</div></div>
                                <div class="col-xs-2"><div class="box-first">4</div></div>
                                <div class="col-xs-2"><div class="box-first">5</div></div>
                                <div class="col-xs-2 first-xs">
                                    <div class="box-nested">6</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p><code>{`.last-{breakpoint}`}</code></p>
                <div class="row mb-4">
                    <div class="col-xs-12">
                        <div class="box box-container">
                            <div class="row">
                                <div class="col-xs-2 last-xs"><div class="box-nested">1</div></div>
                                <div class="col-xs-2"><div class="box-first">2</div></div>
                                <div class="col-xs-2"><div class="box-first">3</div></div>
                                <div class="col-xs-2"><div class="box-first">4</div></div>
                                <div class="col-xs-2"><div class="box-first">5</div></div>
                                <div class="col-xs-2"><div class="box-first">6</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="page-section">
                <h3 className="mb-3">Reversing</h3>

                <p className="mb-2"><code>.row.reverse</code></p>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="box box-container">
                            <div class="row reverse">
                                <div class="col-xs-2"><div class="box-nested">1</div></div>
                                <div class="col-xs-2"><div class="box-nested">2</div></div>
                                <div class="col-xs-2"><div class="box-nested">3</div></div>
                                <div class="col-xs-2"><div class="box-nested">4</div></div>
                                <div class="col-xs-2"><div class="box-nested">5</div></div>
                                <div class="col-xs-2"><div class="box-nested">6</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>



        </div>
    );
}

export default App;
