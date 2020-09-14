import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import Input from '../components/form/Input';
import Select from '../components/form/Select';
import TextArea from '../components/form/TextArea';
import Checkbox from '../components/form/Checkbox';
import Modal from '../components/Modal';
import { ListInputBox, ListInputItem } from '../components/form/ListInputBox';

import { useFormik } from 'formik';
import { object, string, boolean, array } from 'yup';

import FormattedPlural from '../components/FormattedPlural';
import Loading from '../components/Loading';
import DisplayFormikState from '../components/DisplayFormikState';

import ButtonsPage from './Components/ButtonsPage';

import PaginationPage from './Components/PaginationPage';
import BreadcrumbsPage from './Components/BreadcrumbsPage';
import FlashesPage from './Components/FlashesPage';
import FormattedCurrencyPage from './Components/FormattedCurrencyPage';

const ComponentsPage = () => {
    const [currentModal, setCurrentModal] = React.useState(null);
    let fruits = ['apple', 'banana', 'orange', 'avocado'];
    let [kwds, setKwds] = React.useState(['test']);

    const { handleSubmit, handleChange, setFieldValue, values, errors, touched } = useFormik({
        initialValues: {
            name: 'Test Name',
            signup: false,
            fav_fruit: 'avocado',
            jobType: [],
            keywords: []
        },
        validationSchema: object().shape({
            name: string().required(),
            signup: boolean().oneOf([true], 'Please sign up for news'),
            fav_fruit: string().required('Please choose a fruit'),
            jobType: array(),
            keywords: array().required()
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 4));
        }
    });

    let old = (
        <>
            <section id="formatted-currency" className="mb-5">
                <h2>Formatted Plural</h2>
                <hr />
                <p>
                    Return a plural string based on a given <code>value</code>.
                </p>

                <p>
                    10 <FormattedPlural value={10} one="Car" many="Cars" />
                </p>
                <p>
                    1 <FormattedPlural value={1} one="Bike" many="Bikes" />
                </p>
                <p>
                    0 <FormattedPlural value={0} one="Scooter" many="Scooters" />
                </p>
            </section>

            <section>
                <h2>Loading Animation</h2>
                <hr />

                <Loading />

                <p>
                    Inline Loading <Loading inline />
                </p>

                <p className="bg-dark txt-white p-3">
                    Inverted <Loading invert />
                </p>
            </section>

            <section id="modal" className="mb-5">
                <h2>Modal</h2>
                <hr />

                <button className="btn btn-primary mb-3" onClick={() => setCurrentModal('a')}>
                    Show Modal
                </button>
                <Modal visible={currentModal === 'a'} onClose={() => setCurrentModal(null)}>
                    <h1>Modal</h1>
                    <p>
                        By default modal windows will be centered horizontally, and fixed to <code>2rem</code> from the
                        top of the window. To center a modal both vertically and horizontally use the{' '}
                        <code>center</code> prop.
                    </p>
                </Modal>

                <button className="btn btn-primary" onClick={() => setCurrentModal('centered')}>
                    Show Centered Modal
                </button>
                <Modal visible={currentModal === 'centered'} onClose={() => setCurrentModal(null)} center>
                    <h1>Centered Modal</h1>
                    <p>
                        This modal will always be centered both vertically and horizontally in the window.{' '}
                        <strong>WARNING:</strong> This could cause content to get cut off on certain screen heights.
                    </p>
                </Modal>
            </section>

            <section id="forms" className="mb-5">
                <h2>Forms</h2>
                <p>
                    Forms should be built with <a href="https://jaredpalmer.com/formik/">Formik</a>.
                </p>
                <p>Form markup is derrived from Bootstrap.</p>
                <hr />

                <h3>Input and Label</h3>
                <hr />
                <Input label="Text Input" placeholder="Placeholder Text" />

                <Input id="input_prepend" label="Prepend Label" prependLabel={true} />

                <Input id="input_prepend_append" label="Prepend and Append" prepend="Prepend" append="Append" />

                <Input
                    id="input_append"
                    label="Appended Component"
                    append={<button className="btn btn-primary">Submit</button>}
                />

                <Input id="input_error" label="With Error" error="This is an error message." touched={true} />

                <Input id="input_search" label="Search" type="search" />

                <Input id="input_file" label="File Upload" type="file" />

                <Input
                    label="No ID"
                    placeholder="This is an input without an ID prop. Gets an AutoID from @reach/auto-id"
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

                    <Select id="select_multiple" label="Multiple Select" multiple>
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

                <Checkbox label="With Errors" id="error_checkbox" error="Checkbox error message" touched={true} />

                <h3>List Input Box</h3>
                <hr />
                <ListInputBox
                    id="keywords1"
                    label="Keywords"
                    restricted={[';', '%', '$']}
                    placeholder=""
                    value={kwds}
                    onChange={(values) => setKwds(values)}
                    charLimit={956}
                    guidance="Add these one at a time"
                >
                    {({ items, removeItem }) => (
                        <ul className="list-flex-inline">
                            {items.map((item, index) => (
                                <ListInputItem index={index} key={`${item}_${index}`} onRemove={removeItem}>
                                    {item}
                                </ListInputItem>
                            ))}
                        </ul>
                    )}
                </ListInputBox>
                <ListInputBox
                    id="keywords2"
                    label="Keywords Read Only"
                    restricted={[';', '%', '$']}
                    placeholder=""
                    value={kwds}
                    onChange={(values) => setKwds(values)}
                    charLimit={956}
                    guidance="Add these one at a time"
                    readOnly
                >
                    {({ items, removeItem, readOnly }) => (
                        <ul className="list-flex-inline">
                            {items.map((item, index) => (
                                <ListInputItem
                                    index={index}
                                    key={`${item}_${index}`}
                                    readOnly={readOnly}
                                    onRemove={removeItem}
                                >
                                    {item}
                                </ListInputItem>
                            ))}
                        </ul>
                    )}
                </ListInputBox>

                <h3>Error Messages</h3>
                <p>
                    Form components will implement their own appropriate error message style. These classes can be used
                    to augment existing messages, or implement standalone error messages.
                </p>
                <div className="form-error mb-4">
                    <span>
                        <code>.form-error</code> error messages, will sit below the form input and appear "attached" to
                        the form input.
                    </span>
                </div>
                <div className="form-error standalone mb-8">
                    <span>
                        <code>.form-error.standalone</code> error messages, is self contained and sits below the form
                        input.
                    </span>
                </div>

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
                        {fruits.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </Select>
                    <div className="label">What best describes you? (check all that apply)</div>
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

                    <ListInputBox
                        id="keywords"
                        label="Keywords"
                        restricted={[';', '%', '$']}
                        placeholder=""
                        value={values.keywords}
                        charLimit={956}
                        guidance="Add these one at a time"
                        error={errors.keywords}
                        touched={errors.keywords}
                        onChange={(values) => setFieldValue('keywords', values)}
                        required
                    >
                        {({ items, removeItem }) => (
                            <ul className="list-flex-inline">
                                {items.map((item, index) => (
                                    <ListInputItem index={index} key={`${item}_${index}`} onRemove={removeItem}>
                                        {item}
                                    </ListInputItem>
                                ))}
                            </ul>
                        )}
                    </ListInputBox>
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </form>
                <DisplayFormikState {...{ errors, values, touched }} />
            </section>
        </>
    );

    return (
        <Switch>
            <Route path="/components/breadcrumbs" default>
                <BreadcrumbsPage />
            </Route>
            <Route path="/components/buttons">
                <ButtonsPage />
            </Route>
            <Route path="/components/flashes">
                <FlashesPage />
            </Route>
            <Route path="/components/formatted-currency">
                <FormattedCurrencyPage />
            </Route>
            <Route path="/components/pagination">
                <PaginationPage />
            </Route>
            <Route path="/components/old">{old}</Route>

            <Redirect from="/" to="/components/breadcrumbs" />
        </Switch>
    );
};

export default ComponentsPage;
