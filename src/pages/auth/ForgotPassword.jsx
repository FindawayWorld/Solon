import React, {useState} from 'react';
import {string, object} from 'yup';
import {Auth} from 'aws-amplify';
import {Link} from 'react-router-dom';
import {Formik, Form} from 'formik';
import {FaChevronLeft} from 'react-icons/fa';
// locals
import Input from '../../components/form/Input';
import Loading from '../../components/SpinnerCircle';
import {ReactComponent as Logo} from '../../svg/audioengine_dark.svg';
import InputContainerAuth from '../../components/InputContainerAuth';

const forgotPasswordSchema = object().shape({
    email: string()
        .email()
        .lowercase()
        .required('Email is required'),
});

const ForgotPassword = props => {
    const [email, setEmail] = useState('');
    const [isSentSuccess, setIsSentSuccess] = useState(false);
    const [forgotPasswordError, setForgotPasswordError] = useState(null);

    const handleSubmit = async (values, {setSubmitting}) => {
        setSubmitting(true);
        const {email} = values;
        try {
            await Auth.forgotPassword(email);
            setIsSentSuccess(b => !b);
            setSubmitting(false);
            setEmail(email);
            setForgotPasswordError(null);
        } catch (error) {
            setForgotPasswordError(error.message);
            setEmail('');
            setSubmitting(false);
        }
    };

    return (
        <div className="page-signin">
            <div className="row center-xs mb-4">
                <Logo className="sign-in-logo" alt="audio engine logo" />
            </div>
            <div className="row center-xs mb-3">
                {!isSentSuccess && <h2 className="m-0">Forgot your password?</h2>}
                {isSentSuccess && <h2 className="m-0">Email Sent</h2>}
            </div>
            {!isSentSuccess && (
                <>
                    <div className="row center-xs">
                        <p>Enter your email address.</p>
                    </div>
                    <div className="row center-xs">
                        <p>We’ll email you instructions on how to reset your password.</p>
                    </div>
                </>
            )}
            {isSentSuccess && (
                <div className="row center-xs">
                    <p>
                        An email has been sent to your address <strong>{email}</strong>.
                    </p>
                </div>
            )}
            <Formik
                initialValues={{
                    email: '',
                }}
                onSubmit={handleSubmit}
                validationSchema={forgotPasswordSchema}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({values, errors, handleChange, handleSubmit, isSubmitting}) => {
                    return (
                        <Form className="form-signin" onSubmit={handleSubmit}>
                            {!isSentSuccess && (
                                <InputContainerAuth isMarginBottom>
                                    <Input
                                        className="login-min-width"
                                        id="email"
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={handleChange}
                                        errors={errors.email}
                                    />
                                </InputContainerAuth>
                            )}
                            {!isSentSuccess && (
                                <>
                                    <div className="row start-xs mb-2 middle-xs">
                                        <Link
                                            className="forgot-password pl-3"
                                            to="/login"
                                            style={{textDecoration: 'none'}}
                                        >
                                            <FaChevronLeft size={10} className="mr-1" /> Back to sign in
                                        </Link>
                                    </div>
                                    <div className="row start-xs mb-4 middle-xs">
                                        <Link
                                            className="forgot-password pl-3"
                                            to="/forgot-password-verification"
                                            style={{textDecoration: 'none'}}
                                        >
                                            I already have a reset code
                                        </Link>
                                    </div>
                                </>
                            )}
                            <div className="row center-xs mb-5">
                                {isSentSuccess && (
                                    <Link to="/forgot-password-verification">
                                        <button className="btn btn-primary py-2 px-5">
                                            Enter Reset Code
                                        </button>
                                    </Link>
                                )}
                                {!isSentSuccess && (
                                    <button onClick={handleSubmit} className="btn btn-primary py-2 px-5">
                                        {isSubmitting ? <Loading /> : 'Reset Password'}
                                    </button>
                                )}
                            </div>

                            {forgotPasswordError && (
                                <>
                                    <p className="mt-4 error-text">{forgotPasswordError}</p>
                                </>
                            )}
                            <div className="signin-footer mt-5">
                                <p>
                                    <small>
                                        &copy; {new Date().getFullYear()} Findaway. All rights reserved.
                                    </small>
                                </p>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default ForgotPassword;
