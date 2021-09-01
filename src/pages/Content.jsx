import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import DescriptionList from '../components/DescriptionList';

const spacer = 1;
export const spacers = {
    // 0px
    0: 0,
    //  4px
    1: spacer * 0.25,
    // 8px
    2: spacer * 0.5,
    // 12px
    3: spacer * 0.75,
    // 16px
    4: spacer * 1,
    // 20px
    5: spacer * 1.25,
    // 24px
    6: spacer * 1.5,
    // 32px
    8: spacer * 2,
    // 40px
    10: spacer * 2.5,
    // 48px
    12: spacer * 3,
    // 64px
    16: spacer * 4,
    // 80px
    20: spacer * 5,
    // 96px
    24: spacer * 6,
    // 128px
    32: spacer * 8,
    // 160px
    40: spacer * 10,
    // 192px
    48: spacer * 12,
    // 224px
    56: spacer * 14,
    // 256px
    64: spacer * 16
};

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
export const brandColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'muted'];

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
                        {colors.map((color) => (
                            <div key={`colors-${color}`} className="col-6 col-md-2 txt-center">
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
                        {brandColors.map((color) => (
                            <div key={`brand-${color}`} className="col-6 col-md-2 txt-center">
                                <div className={`swatch bg-${color}`}></div>
                                <p>
                                    <code>${color}</code>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <h2>Native font stack</h2>
                <hr />

                <p>Solon uses a “native font stack” for optimum text rendering on every device and OS. . </p>
                <pre>
                    <code>
                        {`// Safari for macOS and iOS (San Francisco)
-apple-system,
// Chrome < 56 for macOS (San Francisco)
BlinkMacSystemFont,
// Windows
"Segoe UI",
// Android
Roboto,
// Basic web fallback
"Helvetica Neue", Arial,
// Linux
"Noto Sans",
// Sans serif fallback
sans-serif,
// Emoji fonts
"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;`}
                    </code>
                </pre>
                <p>
                    Read more about native font stacks in this{' '}
                    <a
                        href="https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Smashing Magazine article
                    </a>
                </p>
            </section>

            <section id="headings" className="mb-5">
                <h2>Headings</h2>
                <hr />
                <div>
                    <h1>Header 1 (16 * 2.5 = 40px)</h1>
                    <h2>Header 2 (16 * 2 = 32px)</h2>
                    <h3>Header 3 (16 * 1.75 = 28px)</h3>
                    <h4>Header 4 (16 * 1.5 = 24px)</h4>
                    <h5>Header 5 (16 * 1.25 = 20px)</h5>
                    <h6>Header 6 (16px)</h6>
                </div>
            </section>

            <section id="body-copy" className="mb-5">
                <h2>Body copy</h2>
                <hr />
                <p>
                    Findaway is a global leader in digital content delivery. With the invention of Playaway Preloaded
                    Products, they transformed the way that audiobooks, eBooks, videos and learning tools are circulated
                    in 40,000 libraries, schools, and military installations.
                </p>

                <p>
                    Findaway also revolutionized digital audiobook delivery with AudioEngine, which is quickly becoming
                    the industry’s largest B2B audiobook delivery platform that enables brands to deliver one of the
                    world’s largest collections of digital audiobooks within their own experience.
                </p>

                <p>To learn more about Findaway and the Findawayers who make it all happen, visit www.findaway.com</p>
            </section>

            <section id="text-alignment" className="mb-5">
                <h2>Text Alignment</h2>
                <hr />
                <p>
                    Text alignment can be changed based on responsive breakpoints using{' '}
                    <code>{`txt-<breakpoint>-<left|right|center>`}</code>
                </p>

                <p className="txt-left">
                    Text aligned left (default) <code>.txt-left</code>
                </p>
                <p className="txt-right">
                    Text aligned right <code>.txt-right</code>
                </p>
                <p className="txt-center">
                    Text aligned center <code>.txt-center</code>
                </p>
            </section>

            <section id="text-alignment" className="mb-5">
                <h2>Vertical Alignment</h2>
                <hr />
                {['top', 'middle', 'bottom', 'baseline'].map((al) => (
                    <p key={`align-${al}`} className="px-2 bg-gray">
                        <span style={{ lineHeight: '3rem' }}>Text aligned {al}</span>{' '}
                        <span className={`align-${al}`}>.align-{al}</span>
                    </p>
                ))}
            </section>

            <section id="text-weight" className="mb-5">
                <h2>Font Weight</h2>
                <hr />
                <p>
                    Font weight can be applied using <code>{`fw-<light|normal|bold>`}</code>
                </p>

                <p className="fw-light">Light</p>
                <p className="fw-normal">Normal</p>
                <p className="fw-bold">Bold</p>
            </section>

            <section id="font-style" className="mb-5">
                <h2>Font Style</h2>
                <hr />

                <p>
                    Font style can be applied using <code>italic</code> or <code>not-italic</code>
                </p>

                <p>
                    <span className="italic">italic</span> adds italic styles
                </p>
                <p className="italic">
                    <span className="not-italic">not-italic</span> removes italic styles
                </p>
            </section>

            <section id="line-height" className="mb-5">
                <h2>Line Height</h2>
                <hr />
                <p>
                    <code>.lh-1</code>
                </p>
                <p className="lh-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos impedit non id quo quas expedita dolor,
                    accusantium perspiciatis doloribus aliquam nostrum provident quidem natus voluptatibus asperiores?
                    Quo cum dicta incidunt? Nostrum perferendis atque tempora dolorum magni beatae dignissimos odio eius
                    maiores nesciunt facilis, earum suscipit nam praesentium amet doloremque incidunt deserunt
                    exercitationem, nulla voluptatibus ea voluptatum error nemo fugiat. Quisquam. Iure ratione nam
                    perspiciatis dolor? Iste doloremque, laudantium architecto enim eos facilis sit impedit ducimus
                    pariatur consectetur eum atque tempore sunt laborum sapiente hic minus reiciendis? Doloremque iste
                    qui iusto.
                </p>
                <p>
                    <code>.lh-sm</code> 1.25
                </p>
                <p className="lh-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos impedit non id quo quas expedita dolor,
                    accusantium perspiciatis doloribus aliquam nostrum provident quidem natus voluptatibus asperiores?
                    Quo cum dicta incidunt? Nostrum perferendis atque tempora dolorum magni beatae dignissimos odio eius
                    maiores nesciunt facilis, earum suscipit nam praesentium amet doloremque incidunt deserunt
                    exercitationem, nulla voluptatibus ea voluptatum error nemo fugiat. Quisquam. Iure ratione nam
                    perspiciatis dolor? Iste doloremque, laudantium architecto enim eos facilis sit impedit ducimus
                    pariatur consectetur eum atque tempore sunt laborum sapiente hic minus reiciendis? Doloremque iste
                    qui iusto.
                </p>

                <p>
                    <code>.lh-base</code> 1.5
                </p>
                <p className="lh-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos impedit non id quo quas expedita dolor,
                    accusantium perspiciatis doloribus aliquam nostrum provident quidem natus voluptatibus asperiores?
                    Quo cum dicta incidunt? Nostrum perferendis atque tempora dolorum magni beatae dignissimos odio eius
                    maiores nesciunt facilis, earum suscipit nam praesentium amet doloremque incidunt deserunt
                    exercitationem, nulla voluptatibus ea voluptatum error nemo fugiat. Quisquam. Iure ratione nam
                    perspiciatis dolor? Iste doloremque, laudantium architecto enim eos facilis sit impedit ducimus
                    pariatur consectetur eum atque tempore sunt laborum sapiente hic minus reiciendis? Doloremque iste
                    qui iusto.
                </p>

                <p>
                    <code>.lh-lg</code> 2
                </p>
                <p className="lh-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos impedit non id quo quas expedita dolor,
                    accusantium perspiciatis doloribus aliquam nostrum provident quidem natus voluptatibus asperiores?
                    Quo cum dicta incidunt? Nostrum perferendis atque tempora dolorum magni beatae dignissimos odio eius
                    maiores nesciunt facilis, earum suscipit nam praesentium amet doloremque incidunt deserunt
                    exercitationem, nulla voluptatibus ea voluptatum error nemo fugiat. Quisquam. Iure ratione nam
                    perspiciatis dolor? Iste doloremque, laudantium architecto enim eos facilis sit impedit ducimus
                    pariatur consectetur eum atque tempore sunt laborum sapiente hic minus reiciendis? Doloremque iste
                    qui iusto.
                </p>
            </section>

            <section id="lead-text" className="mb-5">
                <h2>Lead text</h2>
                <hr />
                <p className="flash flash-light">
                    <strong>Font Size:</strong> 1.5rem (24px). <strong>Line Height:</strong> 2.5rem (40px).{' '}
                    <strong>Font Weight:</strong> Light (300)
                </p>
                <p className="lead">
                    Findaway is a global leader in digital content delivery. With the invention of Playaway Preloaded
                    Products, they transformed the way that audiobooks, eBooks, videos and learning tools are circulated
                    in 40,000 libraries, schools, and military installations.
                </p>
            </section>

            <section id="font-size" className="mb-5">
                <h2>Font Sizes</h2>
                <hr />
                <div className="bg-light p-6 rounded overflow-x-auto">
                    {Object.keys(spacers)
                        .filter((key) => key >= 3)
                        .map((key) => (
                            <p key={`txt-${key}`} className={`txt-${key} text-nowrap`}>
                                Text {spacers[key]}rem ({spacers[key] * 16}px)
                            </p>
                        ))}
                </div>
            </section>

            <section id="links" className="mb-5">
                <h2>Links/Anchors</h2>
                <hr />

                <ul className="list-flat">
                    <li>
                        <a href="#links:standard">Standard</a>
                    </li>
                    <li>
                        <a href="https://findaway.com" disabled>
                            Disabled
                        </a>
                    </li>
                    <li>
                        <Link to="/components" disabled>
                            Link Disabled
                        </Link>
                    </li>
                    <li>
                        <a href="#links:cta" className="cta">
                            Call To Action
                        </a>
                    </li>
                    <li>
                        <a href="#links:revCta" className="reverse-cta">
                            Reverse CTA
                        </a>
                    </li>
                    <li>
                        <a href="#links:fancyCta" className="fancy-cta">
                            Fancy CTA w/ SVG <FiArrowRight width="1em" height="1em" />
                        </a>
                    </li>
                </ul>
                <p>
                    {[...brandColors, ...colors].map((color) => (
                        <a
                            key={`link-${color}`}
                            href="#links"
                            className={classnames(`link-${color} d-inline-block mr-4`, {
                                'bg-dark p-2 ': color === 'light' || color === 'white' || color === 'silver'
                            })}
                        >
                            Link {color}
                        </a>
                    ))}
                </p>
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

                <h3 id="description-list" className="mb-0">
                    Description{' '}
                    <small>
                        <code>dl or DescriptionList</code>
                    </small>
                </h3>
                <p className="mt-2">
                    A description list is useful for displaying a glossary, metadata, and other key-value pairs.
                </p>
                <DescriptionList
                    labelValuePairs={[
                        ['Author', 'Stephen King'],
                        [
                            'Narrators',
                            <ul className="comma-delimited">
                                <li>Morgan Freeman</li>
                                <li>James Earl Jones</li>
                            </ul>
                        ],
                        ['Page Count', 297],
                        [
                            'Release Date',
                            <>
                                <span>2021-09-01</span>
                                <br />
                                <a href="#description-list">Learn more about release date</a>
                            </>
                        ]
                    ]}
                />

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
                    Use <a href="https://react-icons.netlify.com/#/">React Icons</a> for all your icon needs. Unless
                    provided from creative.
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
