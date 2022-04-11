import React from 'react';
import Input from '../../components/form/Input';
import Select from '../../components/form/Select';
import TextArea from '../../components/form/TextArea';
import Checkbox from '../../components/form/Checkbox';
import { ListInputBox, ListInputItem } from '../../components/form/ListInputBox';

import { useFormik } from 'formik';
import { object, string, boolean, array } from 'yup';

import DisplayFormikState from '../../components/DisplayFormikState';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import ReactSelect from '../../components/form/ReactSelect';

const FormsPage = () => {
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
            keywords: array().min(1).required()
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 4));
        }
    });
    let selectOpts = Array.from({ length: 50 }).map((v, i) => ({ label: `Option ${i}`, value: i }));
    let [rsValues, setRsValues] = React.useState(selectOpts);
    return (
        <section id="forms" className="mb-5">
            <Breadcrumbs>
                <BreadcrumbItem as={Link} to="/components">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem current>Forms</BreadcrumbItem>
            </Breadcrumbs>
            <h2>Forms</h2>
            <p>
                Forms should be built with <a href="https://jaredpalmer.com/formik/">Formik</a>.
            </p>
            <p>Form markup is derrived from Bootstrap.</p>
            <hr />

            <p>
                <strong>Required assets:</strong> <code>scss/components/_forms.scss</code>,{' '}
                <code>scss/_settings.scss</code>, and <code>scss/_functions.scss</code>
            </p>

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

            <Input
                id="input_append_button-group"
                label="Appended Button Group"
                append={
                    <div className="btn-group mb-4">
                        <button className="btn btn-primary">Save</button>
                        <button className="btn btn-outline-secondary">Cancel</button>
                    </div>
                }
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

            <h3>ReactSelect</h3>
            <hr />
            <div className="flash flash-warning mb-4">
                <p>
                    This component is still a <code>beta</code> implementation. Contribute any
                    fixes/additions/improvements back to the Framework.
                </p>
            </div>
            <ReactSelect label="React Select" id="rs-1" options={selectOpts} />
            <ReactSelect
                label="React Select multiple"
                id="rs-1"
                isMulti={true}
                value={rsValues}
                options={selectOpts}
                onChange={(v) => setRsValues(v)}
            />

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
                Form components will implement their own appropriate error message style. These classes can be used to
                augment existing messages, or implement standalone error messages.
            </p>
            <div className="form-error mb-4">
                <span>
                    <code>.form-error</code> error messages, will sit below the form input and appear "attached" to the
                    form input.
                </span>
            </div>
            <div className="form-error standalone mb-8">
                <span>
                    <code>.form-error.standalone</code> error messages, is self contained and sits below the form input.
                </span>
            </div>

            <h3>Formik Example</h3>
            <hr />
            <form className="mb-4" onSubmit={handleSubmit} noValidate>
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
    );
};
export default FormsPage;
