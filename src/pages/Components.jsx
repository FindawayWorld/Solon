import React, { useState } from 'react';
import classnames from 'classnames';

import {titleCase} from '../utils';

import {Link} from 'react-router-dom';
import Layout from '../components/Layout';
import Input from '../components/form/Input';
import Select from '../components/form/Select';
import TextArea from '../components/form/TextArea';
import Checkbox from '../components/form/Checkbox';
import Pagination from '../components/Pagination';
import Modal from '../components/Modal';
import FormattedCurrency from '../components/FormattedCurrency';

import {useFormik} from 'formik';
import {object, string, boolean, array} from 'yup';
import {brandColors} from './Content';

import {  Menu,  MenuList,  MenuButton,  MenuItem,  MenuLink} from "@reach/menu-button";
import FormattedPlural from '../components/FormattedPlural';
import Loading from '../components/Loading';
import DisplayFormikState from '../components/DisplayFormikState';

const ComponentsPage = () => {
    const [currentModal, setCurrentModal] = useState(null);
    let fruits = ['apple', 'banana', 'orange', 'avocado'];
    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        touched
    } = useFormik({
        initialValues: {
            name: 'Test Name',
            signup: false,
            fav_fruit: 'avocado',
            jobType: [],
        },
        validationSchema: object().shape({
            name: string().required(),
            signup: boolean().oneOf(
                [true],
                'Please sign up for news'
            ),
            fav_fruit: string().required('Please choose a fruit'),
            jobType: array(),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 4));
        }
    });

    return (
        <Layout>
            <section id="Buttons" className="mb-5">
                <h2>Buttons</h2>
                <hr />

                <p>
                    {brandColors.map(color => (
                        <button
                            key={`btn-${color}`}
                            className={classnames('btn mr-1', `btn-${color}`)}
                        >
                            {titleCase(color)}
                        </button>
                    ))}
                    <button className="btn btn-link">Link</button>
                </p>
                <p>
                    {brandColors.map(color => (
                        <button
                            key={`btn-outline-${color}`}
                            className={classnames(
                                'btn mr-1',
                                `btn-outline-${color}`
                            )}
                        >
                            {titleCase(color)}
                        </button>
                    ))}
                </p>

                <h3>Button Tags</h3>
                <p>
                    The .btn classes are designed to be used with the{' '}
                    <code>&lt;button&gt;</code> element. However, you can also
                    use these classes on <code>&lt;a&gt;</code> or{' '}
                    <code>&lt;input&gt;</code> elements (though some browsers
                    may apply a slightly different rendering).
                </p>
                <p>
                    <a
                        className="btn btn-primary mr-1"
                        href="#demo"
                        role="button"
                    >
                        Link/Anchor
                    </a>
                    <button className="btn btn-primary mr-1" type="submit">
                        Button
                    </button>
                    <input
                        className="btn btn-primary mr-1"
                        type="button"
                        value="Input"
                    />
                    <input
                        className="btn btn-primary mr-1"
                        type="submit"
                        value="Submit"
                    />
                    <input
                        className="btn btn-primary mr-1"
                        type="reset"
                        value="Reset"
                    />
                </p>

                <h3>Button Sizes</h3>

                <p>
                    <button className="btn btn-primary btn-lg mr-3">Large</button>
                    <button className="btn btn-primary mr-3">Normal</button>
                    <button className="btn btn-primary btn-sm">Small</button>
                </p>

                <h3>Reach-UI MenuButton</h3>
                <Menu>
                    <MenuButton className="btn btn-primary mr-1">Actions</MenuButton>
                    <MenuList className="dropdown-menu">
                        <MenuItem onSelect={() => alert('Download')}>Download</MenuItem>
                        <MenuItem onSelect={() => alert('Copy')}>Create a Copy</MenuItem>
                        <MenuItem onSelect={() => alert('Mark as Draft')}>Mark as Draft</MenuItem>
                        <MenuItem onSelect={() => alert('Delete')}>Delete</MenuItem>
                        <MenuLink as={Link} to="/content">Go to Content Page</MenuLink>
                    </MenuList>
                </Menu>
            </section>

            <section className="mb-5">
                <h2>Pagination</h2>
                <hr />

                <Pagination as={Link} toProp="to" numPages={100} perPage={10} currentPage={1} />
                <Pagination as={Link} toProp="to" numPages={1000} perPage={20} currentPage={60} />
                <Pagination as={Link} toProp="to"
                    numPages={1000}
                    perPage={20}
                    currentPage={60}
                    pagesToShow={5}
                />
                <Pagination
                    numPages={1000}
                    perPage={20}
                    currentPage={60}
                    pagesToShow={5}
                    showJumpFirst
                    showJumpLast
                />
            </section>

            <section id="formatted-currency" className="mb-5">
                <h2>Formatted Currency</h2>
                <hr/>
                <p>Format any numerical <code>value</code> as a currency based on the given <code>currency</code> prop and return a <code>String</code>.</p>
                <p>This uses the <code>window.Intl.NumberFormat</code> function, you may need to include a <a href="https://polyfill.io">polyfill</a>.</p>

                <p><FormattedCurrency value={10.56} currency="USD" /></p>
                <p><FormattedCurrency value="230.99" currency="EUR" /></p>
                <p><FormattedCurrency value={16.75} currency="JPY" /></p>
                <p><FormattedCurrency value={123456.789} curency="CAD" /></p>
            </section>

            <section id="formatted-currency" className="mb-5">
                <h2>Formatted Plural</h2>
                <hr/>
                <p>Return a plural string based on a given <code>value</code>.</p>

                <p>10 <FormattedPlural value={10} one="Car" many="Cars" /></p>
                <p>1 <FormattedPlural value={1} one="Bike" many="Bikes" /></p>
                <p>0 <FormattedPlural value={0} one="Scooter" many="Scooters" /></p>
            </section>

            <section>
                <h2>Loading Animation</h2>
                <hr/>

                <Loading />

                <p>Inline Loading <Loading inline /></p>

                <p className="bg-dark txt-white p-3">
                    Inverted <Loading invert />
                </p>
            </section>

            <section id="modal" className="mb-5">
                <h2>Modal</h2>
                <hr />

                <button
                    className="btn btn-primary mb-3"
                    onClick={() => setCurrentModal('a')}
                >
                    Show Modal
                </button>
                <Modal
                    visible={currentModal === 'a'}
                    onClose={() => setCurrentModal(null)}
                >
                    <h1>Modal</h1>
                    <p>
                        By default modal windows will be centered horizontally,
                        and fixed to <code>2rem</code> from the top of the
                        window. To center a modal both vertically and
                        horizontally use the <code>center</code> prop.
                    </p>
                </Modal>

                <button
                    className="btn btn-primary"
                    onClick={() => setCurrentModal('centered')}
                >
                    Show Centered Modal
                </button>
                <Modal
                    visible={currentModal === 'centered'}
                    onClose={() => setCurrentModal(null)}
                    center
                >
                    <h1>Centered Modal</h1>
                    <p>
                        This modal will always be centered both vertically and
                        horizontally in the window. <strong>WARNING:</strong>{' '}
                        This could cause content to get cut off on certain
                        screen heights.
                    </p>
                </Modal>
            </section>

            <section id="forms" className="mb-5">
                <h2>Forms</h2>
                <p>
                    Forms should be built with{' '}
                    <a href="https://jaredpalmer.com/formik/">Formik</a>.
                </p>
                <p>Form markup is derrived from Bootstrap.</p>
                <hr />

                <h3>Input and Label</h3>
                <hr />
                <Input label="Text Input" placeholder="Placeholder Text" />

                <Input
                    id="input_prepend"
                    label="Prepend Label"
                    prependLabel={true}
                />

                <Input
                    id="input_append"
                    label="Appended Component"
                    append={<button className="btn btn-primary">Submit</button>}
                />

                <Input
                    id="input_error"
                    label="With Error"
                    error="This is an error message."
                    touched={true}
                />

                <Input
                    id="input_search"
                    label="Search"
                    type="search"
                />

                <Input
                    id="input_file"
                    label="File Upload"
                    type="file"
                />

                <h3>Select</h3>
                <hr />
                <div>
                    <Select id="select" label="Single Select">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="4">Option 4</option>
                        <option value="5">Option 5</option>
                    </Select>

                    <Select
                        id="select_multiple"
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

                <h3>Text Area</h3>
                <hr />
                <TextArea id="text_area" label="Text Area" />

                <h3>Checkbox</h3>
                <hr />
                <Checkbox label="Checkbox" id="checkbox_1" />

                <Checkbox
                    label="With Errors"
                    id="error_checkbox"
                    error="Checkbox error message"
                    touched={true}
                />

                <h3>Formik Example</h3>
                <hr />
                    <form onSubmit={handleSubmit} noValidate>
                        <Input
                            id="name"
                            label="name"
                            value={values.name}
                            error={errors.name}
                            touched={touched.name}
                            onChange={handleChange}
                        />
                        <Checkbox
                            id="signup"
                            label="Sign up for news"
                            value={values.signup}
                            error={errors.signup}
                            touched={touched.signup}
                            onChange={handleChange}
                            required
                        />
                        <Select
                            id="fav_fruit"
                            label="Favorite Fruit"
                            value={values.fav_fruit}
                            error={errors.fav_fruit}
                            touched={touched.fav_fruit}
                            onChange={handleChange}
                        >
                            <option value="">Select a fruit</option>
                            {fruits.map(item => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </Select>
                        <div className="label">
                            What best describes you? (check all that apply)
                        </div>
                        <fieldset>
                            <Checkbox
                                label="Designer"
                                name="jobType"
                                value="designer"
                                checked={values.jobType.includes('designer')}
                                error={errors.jobType}
                                touched={touched.jobType}
                                onChange={handleChange}
                            />
                            <Checkbox
                                label="Developer"
                                name="jobType"
                                value="developer"
                                checked={values.jobType.includes('developer')}
                                error={errors.jobType}
                                touched={touched.jobType}
                                onChange={handleChange}
                            />
                            <Checkbox
                                label="Product Manager"
                                name="jobType"
                                value="product"
                                checked={values.jobType.includes('product')}
                                error={errors.jobType}
                                touched={touched.jobType}
                                onChange={handleChange}
                            />
                        </fieldset>
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </form>
                    <DisplayFormikState {...{errors, values, touched}} />
            </section>
        </Layout>
    );
};

export default ComponentsPage;
