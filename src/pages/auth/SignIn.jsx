import React, { useState, useContext } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import { string, object } from 'yup';
import { Auth } from 'aws-amplify';

import Input from '../../components/form/Input';
import AuthLayout from '../../components/AuthLayout';

// utils
import { AuthContext, appActions } from '../../context/AuthContext';

const signInSchema = object().shape({
    email: string().email().lowercase().required('Email is required'),
    password: string().required('Password is required')
});

const SignIn = (props) => {
    const { state, dispatch } = useContext(AuthContext);
    const location = useLocation();

    const [newPasswordChallenge, setNewPasswordChallenge] = useState(false);
    const [signInError, setSignInError] = useState(null);
    const defaultNextPage = '/';

    const { from } = location.state || { from: { pathname: defaultNextPage } };

    const _handleSubmit = async (values, { setSubmitting, setFieldError }) => {
        setSubmitting(true);
        const { email, password } = values;
        try {
            const user = await Auth.signIn(email, password);

            setSubmitting(false);

            switch (user.challengeName) {
                case 'SMS_MFA':
                case 'SOFTWARE_TOKEN_MFA':
                    // You need to get the code from the UI inputs
                    // and then trigger the following function with a button click
                    // const code = getCodeFromUserInput();
                    // If MFA is enabled, sign-in should be confirmed with the confirmation code
                    // await Auth.confirmSignIn(
                    //     user, // Return object from Auth.signIn()
                    //     code, // Confirmation code
                    //     user.challengeName // MFA Type e.g. SMS_MFA, SOFTWARE_TOKEN_MFA
                    // );
                    break;

                case 'NEW_PASSWORD_REQUIRED':
                    setNewPasswordChallenge(true);
                    dispatch({
                        type: appActions.FIRST_LOGIN_SUCCESS,
                        payload: { user }
                    });
                    break;

                case 'MFA_SETUP':
                    // This happens when the MFA method is TOTP
                    // The user needs to setup the TOTP before using it
                    // More info please check the Enabling MFA part
                    // Auth.setupTOTP(user);
                    break;

                default:
                    dispatch({ type: appActions.LOGIN_SUCCESS, payload: { user } });
            }
        } catch (err) {
            switch (err.code) {
                case 'UserNotConfirmedException':
                    // The error happens if the user didn't finish the confirmation step when signing up
                    // In this case you need to resend the code and confirm the user
                    break;
                case 'PasswordResetRequiredException':
                    // The error happens when the password is reset in the Cognito console
                    // In this case you need to call forgotPassword to reset the password
                    err.message =
                        'Your password has been reset by an administrator. You should have received an email with a password reset code.';
                    break;

                case 'NotAuthorizedException':
                    // The error happens when the incorrect password is provided
                    setFieldError('password', err.message);
                    break;

                case 'UserNotFoundException':
                    // The error happens when the supplied username/email does not exist in the Cognito user pool
                    setFieldError('email', err.message);
                    break;

                default:
                    console.error(err);
            }

            setSignInError(err);
            setSubmitting(false);
        }
    };

    const { values, errors, touched, handleChange, handleSubmit, isSubmitting, handleBlur } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: _handleSubmit,
        validationSchema: signInSchema
    });

    if (newPasswordChallenge && state.user) {
        return <Redirect to="/new-password-required" />;
    }

    if (state.user) {
        return <Redirect to={from ?? defaultNextPage} />;
    }

    return (
        <AuthLayout>
            <div className="row">
                <div className="col-xs-12 col-md-4 col-md-offset-4">
                    <form className="form-signin" onSubmit={handleSubmit}>
                        <Input
                            id="email"
                            label="Email"
                            value={values.email}
                            error={errors.email}
                            touched={touched.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Input
                            id="password"
                            label="Password"
                            type="password"
                            value={values.password}
                            error={errors.password}
                            touched={touched.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Link to="/forgot-password">Forgot Password?</Link>

                        <div className="txt-center">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                            >
                                Sign In
                            </button>
                        </div>

                        {signInError && (
                            <p className="mt-4 txt-danger">
                                {signInError.message}{' '}
                                {signInError.code === 'PasswordResetRequiredException' && (
                                    <Link to="/forgot-password-verification">
                                        Click here to input code and reset password.
                                    </Link>
                                )}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </AuthLayout>
    );
};

export default SignIn;
