import React from 'react';
import {FiArrowRight} from 'react-icons/fi';

export const colors = [
    'aqua',
    'blue',
    'navy',
    'teal',
    'green',
    'olive',
    'lime',
    'yellow',
    'orange',
    'red',
    'fuchsia',
    'purple',
    'maroon',
    'white',
    'silver',
    'gray',
    'black'
];
export const brandColors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
];

const ContentPage = () => {
    return (
        <>
            <section id="colors" className="mb-5">
                <h2>Colors</h2>
                <hr />

                <h3 className="mb-0">Generic Colors</h3>
                <p>
                    <small>
                        Colors from <a href="http://clrs.cc/">clrs.cc</a>
                    </small>
                </p>
                <div className="swatch-list mb-3">
                    <div className="row">
                        {colors.map(color => (
                            <div key={`colors-${color}`} className="col-xs-6 col-md-2 txt-center">
                                <div className={`swatch bg-${color}`}></div>
                                <p>
                                    <code>${color}</code>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <h3>Brand Colors</h3>
                <div className="swatch-list">
                    <div className="row">
                        {brandColors.map(color => (
                            <div key={`brand-${color}`} className="col-xs-6 col-md-2 txt-center">
                                <div className={`swatch bg-${color}`}></div>
                                <p>
                                    <code>${color}</code>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="headings" className="mb-5">
                <h2>Headings</h2>
                <hr />
                <div>
                    <h1>Header 1</h1>
                    <h2>Header 2</h2>
                    <h3>Header 3</h3>
                    <h4>Header 4</h4>
                    <h5>Header 5</h5>
                    <h6>Header 6</h6>
                </div>
            </section>

            <section id="body-copy" className="mb-5">
                <h2>Body copy</h2>
                <hr />

                <p>
                    Findaway is a global leader in digital content delivery.
                    With the invention of Playaway Preloaded Products, they
                    transformed the way that audiobooks, eBooks, videos and
                    learning tools are circulated in 40,000 libraries, schools,
                    and military installations.
                </p>

                <p>
                    Findaway also revolutionized digital audiobook delivery with
                    AudioEngine, which is quickly becoming the industry’s
                    largest B2B audiobook delivery platform that enables brands
                    to deliver one of the world’s largest collections of digital
                    audiobooks within their own experience.
                </p>

                <p>
                    To learn more about Findaway and the Findawayers who make it
                    all happen, visit www.findaway.com
                </p>
            </section>

            <section id="lead-text" className="mb-5">
                <h2>Lead text</h2>
                <hr />
                <div>
                    <p className="lead">
                        Findaway is a global leader in digital content delivery.
                        With the invention of Playaway Preloaded Products, they
                        transformed the way that audiobooks, eBooks, videos and
                        learning tools are circulated in 40,000 libraries,
                        schools, and military installations.
                    </p>
                </div>
            </section>

            <section id="links" className="mb-5">
                <h2>Links/Anchors</h2>
                <hr />

                <ul className="list-flat">
                    <li>
                        <a href="#link">Standard</a>
                    </li>
                    <li>
                        <a href="#link" className="cta">
                            Call To Action
                        </a>
                    </li>
                    <li>
                        <a href="#link" className="reverse-cta">
                            Reverse CTA
                        </a>
                    </li>
                    <li>
                        <a href="#link" className="fancy-cta">
                            Fancy CTA w/ SVG{' '}
                            <FiArrowRight width="1em" height="1em" />
                        </a>
                    </li>
                </ul>
            </section>

            <section id="lists" className="mb-5">
                <h2 className="mb-2">List Types</h2>
                <hr />

                <h3 className="mb-0">
                    Unordered{' '}
                    <small>
                        <code>ul</code>
                    </small>
                </h3>
                <ul>
                    <li>lorem ipsum</li>
                    <li>dolor sit amet</li>
                    <li>adipisicing elit</li>
                </ul>

                <h3 className="mb-0">
                    Ordered{' '}
                    <small>
                        <code>ol</code>
                    </small>
                </h3>
                <ol>
                    <li>lorem ipsum</li>
                    <li>dolor sit amet</li>
                    <li>adipisicing elit</li>
                </ol>

                <h3 className="mb-0">
                    Inline{' '}
                    <small>
                        <code>.list-inline</code>
                    </small>
                </h3>
                <ul className="list-inline">
                    <li>
                        <a href="#link">lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#link">dolor sit amet</a>
                    </li>
                    <li>
                        <a href="#link">adipisicing elit</a>
                    </li>
                </ul>

                <h3 className="mb-0">
                    Flat{' '}
                    <small>
                        <code>.list-flat</code>
                    </small>
                </h3>
                <ul className="list-flat">
                    <li>
                        <a href="#link">lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#link">dolor sit amet</a>
                    </li>
                    <li>
                        <a href="#link">adipisicing elit</a>
                    </li>
                </ul>
            </section>

            <section id="icons" className="mb-5">
                <h2>Icons</h2>
                <hr />
                <p>
                    Use <a href="https://react-icons.netlify.com/#/">React Icons</a>{' '}
                    for all your icon needs. Unless provided from creative.
                </p>
            </section>

            <section id="tables" className="mb-5">
                <h2>Tables</h2>
                <hr />

                <table className="table mb-4">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">John Doe</th>
                            <td>jdoe@example.com</td>
                            <td>Finance</td>
                        </tr>
                        <tr>
                            <th scope="row">Jane Smith</th>
                            <td>jsmith@example.com</td>
                            <td>Web Development</td>
                        </tr>
                        <tr>
                            <th scope="row">Rick Sanchez</th>
                            <td>rsanchez@example.com</td>
                            <td>Science</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Full Width (100%)</h3>

                <table className="table full-width mb-4">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">John Doe</th>
                            <td>jdoe@example.com</td>
                            <td>Finance</td>
                        </tr>
                        <tr>
                            <th scope="row">Jane Smith</th>
                            <td>jsmith@example.com</td>
                            <td>Web Development</td>
                        </tr>
                        <tr>
                            <th scope="row">Rick Sanchez</th>
                            <td>rsanchez@example.com</td>
                            <td>Science</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Sriped</h3>

                <table className="table striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">John Doe</th>
                            <td>jdoe@example.com</td>
                            <td>Finance</td>
                        </tr>
                        <tr>
                            <th scope="row">Jane Smith</th>
                            <td>jsmith@example.com</td>
                            <td>Web Development</td>
                        </tr>
                        <tr>
                            <th scope="row">Rick Sanchez</th>
                            <td>rsanchez@example.com</td>
                            <td>Science</td>
                        </tr>
                    </tbody>
                </table>

            </section>
        </>
    );
};

export default ContentPage;
