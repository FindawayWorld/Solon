import React, { useState } from 'react';
import { string, object } from 'yup';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { FaChevronLeft } from 'react-icons/fa';
// locals
import Input from '../../components/form/Input';
import AuthLayout from '../../components/AuthLayout';

const forgotPasswordSchema = object().shape({
    email: string().email().lowercase().required('Email is required')
});

const ForgotPassword = (props) => {
    const [email, setEmail] = useState('');
    const [isSentSuccess, setIsSentSuccess] = useState(false);
    const [forgotPasswordError, setForgotPasswordError] = useState(null);

    const _handleSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);
        const { email } = values;
        try {
            await Auth.forgotPassword(email);
            setIsSentSuccess((b) => !b);
            setSubmitting(false);
            setEmail(email);
            setForgotPasswordError(null);
        } catch (error) {
            setForgotPasswordError(error.message);
            setEmail('');
            setSubmitting(false);
        }
    };

    const {
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting
    } = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: _handleSubmit,
        validationSchema: forgotPasswordSchema
    });

    return (
        <AuthLayout>
            <div className="row">
                <div className="col-xs-12 col-md-4 col-md-offset-4">
                    <h2 className="mb-3 txt-center">
                        {!isSentSuccess && 'Forgot your password?'}
                        {isSentSuccess && 'Email Sent'}
                    </h2>
                    {!isSentSuccess && (
                        <div className="txt-center">
                            <p>
                                Please enter your email address. <br /> We'll
                                email you a link to reset your password.
                            </p>
                        </div>
                    )}
                    {isSentSuccess && (
                        <p className="txt-center">
                            An email has been sent to your address{' '}
                            <strong>{email}</strong>.
                        </p>
                    )}
                    <form onSubmit={handleSubmit}>
                        {!isSentSuccess && (
                            <Input
                                className="login-min-width"
                                label="Email"
                                id="email"
                                value={values.email}
                                error={errors.email}
                                touched={touched.email}
                                onChange={handleChange}
                            />
                        )}
                        {!isSentSuccess && (
                            <>
                                <div className="row start-xs mb-2 middle-xs">
                                    <Link
                                        className="forgot-password pl-3"
                                        to="/sign-in"
                                    >
                                        <FaChevronLeft
                                            size={10}
                                            className="mr-1"
                                        />{' '}
                                        Back to sign in
                                    </Link>
                                </div>
                                <div className="row start-xs mb-4 middle-xs">
                                    <Link
                                        className="forgot-password pl-3"
                                        to="/forgot-password-verification"
                                    >
                                        I already have a reset code
                                    </Link>
                                </div>
                            </>
                        )}
                        <div className="row center-xs mb-5">
                            {isSentSuccess && (
                                <Link
                                    className="btn btn-primary"
                                    to="/forgot-password-verification"
                                >
                                    Enter Reset Code
                                </Link>
                            )}
                            {!isSentSuccess && (
                                <button
                                    onClick={handleSubmit}
                                    className="btn btn-primary"
                                    disabled={isSubmitting}
                                >
                                    Reset Password
                                </button>
                            )}
                        </div>

                        {forgotPasswordError && (
                            <p className="mt-4 error-text">
                                {forgotPasswordError}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </AuthLayout>
    );
};

export default ForgotPassword;
