import React from 'react';
import { useFormik } from 'formik';
import Input from '../../components/form/Input';
import { Link } from 'react-router-dom';
import { object, string } from 'yup';
import AuthLayout from '../../components/AuthLayout';
import { Auth } from 'aws-amplify';

const Register = () => {
    const handleSave = async (values) => {
        try {
            Auth.signUp({
                username: values.email,
                password: values.password,
                attributes: {
                    email: values.email,
                    phone_number: values.phone_number
                }
            });
        } catch (e) {}
    };
    const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues: {
            given_name: '',
            family_name: '',
            email: '',
            phone_number: ''
        },
        validationSchema: object().shape({
            given_name: string().required(),
            family_name: string().required(),
            email: string().required(),
            phone_number: string().required()
        }),
        onSubmit: handleSave
    });
    return (
        <AuthLayout>
            <div className="container">
                <form onSubmit={handleSubmit} className="register-form" method="post" noValidate>
                    <div className="fieldset">
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <Input
                                    id="given_name"
                                    label="First Name"
                                    type="text"
                                    value={values.given_name}
                                    error={errors.given_name}
                                    touched={touched.given_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <Input
                                    id="family_name"
                                    label="Last Name"
                                    type="text"
                                    value={values.family_name}
                                    error={errors.family_name}
                                    touched={touched.family_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="field col-xs-12 col-md-6">
                                <Input
                                    label="Email"
                                    type="email"
                                    id="email"
                                    value={values.email}
                                    error={errors.email}
                                    touched={touched.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="field col-xs-12 col-md-6">
                                <Input
                                    type="tel"
                                    id="phone_number"
                                    label="Phone Number"
                                    placeholder="123-456-7890"
                                    value={values.phone_number}
                                    error={errors.phone_number}
                                    touched={touched.phone_number}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="field-row row">
                            <div className="field col-xs-12 col-md-6">
                                <Input
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={values.password}
                                    error={errors.password}
                                    touched={touched.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="buttons-set form-buttons txt-center">
                            <Link className="btn btn-outline-secondary mr-3" to="/sign-in">
                                Back
                            </Link>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
};

export default Register;
