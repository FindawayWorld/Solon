import React from 'react';
import Input from './form/Input';
import TextArea from './form/TextArea';
import Select from './form/Select';
import { Formik } from 'formik';
import classnames from 'classnames';
import axios from 'axios';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import Modal from './Modal';

const handleSend = (values,setIsOpen,setIsSuccessMessageOpen) => {
    axios({
        method: 'POST',
        url: `${process.env.REACT_APP_MRCONTACT_ENDPOINT}${values.id}`,
        dataType: 'json',
        headers: { 'content-type': 'application/json' },
        data: JSON.stringify({
            subject: 'New message via Contact Widget',
            email: values.email,
            organization_name: values.orgName,
            your_name: values.name,
            phone: values.phone,
            organization_type: values.orgType,
            additional_notes: values.notes,
            location: `${values.city}, ${values.state}`,
        }),
    }).then(
        function success(response) {
            setIsOpen(false);
            setIsSuccessMessageOpen(true);
        },
        function fail(status) {
            alert(`${status}:Something has gone wrong`);
        }
    );
}
const ContactWidget = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSuccessMessageOpen, setIsSuccessMessageOpen] = useState(false);
    return (
        <>
            <div
                className={classnames('contactWidgetContainer p-0', {
                    hide: !isOpen,
                })}
            >
                <button
                    className="button-one p-3"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    Request More Information
                    <span className="ml-5 span">
                        <FaChevronDown
                            className={classnames('', { hide: !isOpen })}
                            size={14}
                        />
                    </span>
                </button>
                <Formik
                    initialValues={{
                        email: '',
                        orgType: '',
                        name: '',
                        orgName: '',
                        notes: '',
                        phone: '',
                        city: '',
                        state: '',
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        values.id=props.id;
                        setTimeout(() => {
                            handleSend(values, setIsOpen,setIsSuccessMessageOpen)
                            setSubmitting(false);
                        }, 100);
                    }}
                >
                    {({
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form
                            id={props.id}
                            target="_blank"
                            className={classnames('pl-3 pr-3 pt-2 pb-2', {
                                hide: !isOpen,
                            })}
                            onSubmit={handleSubmit}
                        >
                            <legend className="pb-2">
                                Complete this form and we'll reach out within
                                24hours.
                            </legend>
                            <Input
                                id="email"
                                label="Email"
                                labelClass="mb-1"
                                value={values.email}
                                error={errors.email}
                                placeholder="Your Email Address"
                                type="email"
                                onChange={handleChange}
                                required
                            />
                            <Input
                                id="orgName"
                                label="Organization Name"
                                labelClass="mb-1"
                                value={values.orgName}
                                error={errors.orgName}
                                placeholder="Library or School Name"
                                type="text"
                                onChange={handleChange}
                                required
                            />
                            <Input
                                id="name"
                                label="Your Name"
                                labelClass="mb-1"
                                value={values.name}
                                error={errors.name}
                                placeholder="First and Last Name"
                                type="text"
                                onChange={handleChange}
                                required
                            />
                            <Input
                                id="phone"
                                label="Phone"
                                labelClass="mb-1"
                                value={values.phone}
                                error={errors.phone}
                                placeholder="Best Phone Number to Reach You"
                                onChange={handleChange}
                                type="phone"
                            />

                            <Select
                                id="orgType"
                                label="Organization Type"
                                labelClass="mb-1"
                                value={values.orgType}
                                onChange={handleChange}
                            >
                                <option value="">---</option>
                                <option value="School"> School</option>
                                <option value="Library">Library</option>
                                <option value="Government">Government</option>
                                <option value="Other">Other</option>
                            </Select>
                            <div className="row">
                                <div className="col-xs-8">
                                    <Input
                                        id="city"
                                        type="text"
                                        label="City"
                                        labelClass="mb-1"
                                        value={values.city}
                                        error={errors.zipcode}
                                        placeholder="Library Location"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xs-4">
                                    <Input 
                                        id="state"
                                        type="text"
                                        label="State"
                                        labelClass="mb-1"
                                        value={values.state}
                                        error={errors.state}
                                        placeholder="State"
                                        onChange={handleChange}/>
                                </div>
                            </div>
                            <TextArea
                                id="notes"
                                labelClass="mb-1"
                                label="Additional Notes"
                                value={values.notes}
                                error={errors.notes}
                                placeholder="What are your interests or questions?"
                                row="8"
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="Notes" className="pb-3 notesLabel">
                                Please mention products you are interested in,
                                like preloaded audiobooks, eReaders or tablets.
                            </label>
                            <button
                                className="button-two p-2 m-auto"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Send
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
            <section className="successMessageModal">
                <Modal
                    innerClassName="col-xs-8 col-sm-6 mt-7"
                    visible={isSuccessMessageOpen}
                    onClose={() => setIsSuccessMessageOpen(false)}
                >
                    <p className="m-auto pt-5 pb-5 txt-center">
                        Request was successful!
                    </p>
                </Modal>
            </section>
        </>
    );
};

export default ContactWidget;
