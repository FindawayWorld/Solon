import React, {useState} from 'react';
import {Auth} from 'aws-amplify';
import {Link} from 'react-router-dom';
import {Formik, Form} from 'formik';
import {string, object} from 'yup';
import {FaChevronLeft} from 'react-icons/fa';
// locals
import InputContainerAuth from '../../components/InputContainerAuth';
import {ReactComponent as Logo} from '../../svg/audioengine_dark.svg';
import Loading from '../../components/SpinnerCircle';
import Input from '../../components/form/Input';
// utils
import PasswordHelper from '../../components/PasswordHelper';
import ChangePasswordConfirm from './ChangePasswordConfirm';

const forgotPasswordVerificationSchema = object().shape({
    verificationCode: string().required('required'),
    email: string()
        .email()
        .lowercase()
        .required('Email is required'),
    password: string()
        .required('Required')
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{12,}$/gm,
            'Must Contain at least 12 Characters, one (1) uppercase letter, one (1) lowercase letter, and one (1) Number',
        ),
});

const ForgotPasswordVerification = props => {
    const [isPasswordChangeSuccess, setIsPasswordChangeSuccess] = useState(false);

    const [verifyPasswordError, setVerifyPasswordError] = useState(null);

    const handleSubmit = async (values, {setSubmitting, resetForm}) => {
        setSubmitting(true);
        const {email, verificationCode, password} = values;
        try {
            await Auth.forgotPasswordSubmit(email, verificationCode, password);
            /* response will come back undefined even tho the request executed successfully */
            setSubmitting(false);
            setIsPasswordChangeSuccess(true);
        } catch (error) {
            process.env.NODE_ENV !== 'production' &&
                console.log('\n', `ForgotPasswordVerification submit, error = `, error, '\n');
            setVerifyPasswordError(error);
            setSubmitting(false);
            resetForm();
        }
    };

    if (isPasswordChangeSuccess) {
        return <ChangePasswordConfirm />;
    }
    return (
        <div className="page-signin">
            <div className="row center-xs">
                <Logo className="sign-in-logo" alt="audio engine logo" />
            </div>
            <Formik
                initialValues={{
                    verificationCode: '',
                    email: '',
                    password: '',
                }}
                onSubmit={handleSubmit}
                validationSchema={forgotPasswordVerificationSchema}
            >
                {({values, errors, handleChange, handleSubmit, isSubmitting}) => {
                    return (
                        <Form className="form-signin" onSubmit={handleSubmit}>
                            <InputContainerAuth isMarginBottom>
                                <Input
                                    id="verificationCode"
                                    placeholder="Verification code"
                                    value={values.verificationCode}
                                    onChange={handleChange}
                                    errors={errors.verificationCode}
                                />
                            </InputContainerAuth>
                            <InputContainerAuth isMarginBottom>
                                <Input
                                    id="email"
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    errors={errors.email}
                                />
                            </InputContainerAuth>
                            <InputContainerAuth>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="New password"
                                    value={values.password}
                                    onChange={handleChange}
                                    errors={errors.password}
                                />
                            </InputContainerAuth>
                            <PasswordHelper password={values.password} />
                            <div className="row center-xs mb-5">
                                <button onClick={handleSubmit} className="btn btn-primary py-2 px-5">
                                    {isSubmitting ? <Loading /> : 'Change Password'}
                                </button>
                            </div>
                            <div className="row start-xs middle-xs">
                                <Link
                                    className="forgot-password"
                                    to="/login"
                                    style={{textDecoration: 'none'}}
                                >
                                    <FaChevronLeft size={10} className="mr-1" /> Back to sign in
                                </Link>
                            </div>
                            {verifyPasswordError && (
                                <>
                                    <p className="mt-4 error-text">{verifyPasswordError.message}</p>
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

export default ForgotPasswordVerification;
