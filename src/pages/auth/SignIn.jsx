import React, {useState, useContext} from 'react';
import {Link, Redirect, useLocation} from 'react-router-dom';
import {Formik, Form} from 'formik';
import {string, object} from 'yup';
import {Auth} from 'aws-amplify';

import Input from '../../components/form/Input';
import Loading from '../../components/Loading';
import AuthLayout from '../../components/AuthLayout';

// utils
import {AuthContext, appActions} from '../../context/AuthContext';

const signInSchema = object().shape({
    email: string()
        .email()
        .lowercase()
        .required('Email is required'),
    password: string().required('Password is required')
});

const SignIn = props => {
    const {state, dispatch} = useContext(AuthContext);
    const location = useLocation();

    const [newPasswordChallenge, setNewPasswordChallenge] = useState(false);
    const [signInError, setSignInError] = useState(null);
    const defaultNextPage = '/';

    const {from} = location.state || {from: {pathname: defaultNextPage}};

    const handleSubmit = async (values, {setSubmitting}) => {
        setSubmitting(true);
        const {email, password} = values;
        try {
            const user = await Auth.signIn(email, password);

            setSubmitting(false);

            if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                setNewPasswordChallenge(true);
                dispatch({type: appActions.FIRST_LOGIN_SUCCESS, payload: {user}});
            } else {
                dispatch({type: appActions.LOGIN_SUCCESS, payload: {user}});
            }

        } catch (error) {

            if (error.message === 'Password reset required for the user') {
                setSignInError({
                    message: 'Your password has been reset by an administrator. You should have received an email with a password reset code.'
                });
            }

            setSignInError({
                message: error.message
            });
            setSubmitting(false);
        }
    };

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
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={handleSubmit}
                        validationSchema={signInSchema}
                    >
                        {({
                            values,
                            errors,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <Form className="form-signin" onSubmit={handleSubmit}>
                                <Input
                                    id="email"
                                    label="Email"
                                    value={values.email}
                                    error={errors.email}
                                    onChange={handleChange}
                                />
                                <Input
                                    id="password"
                                    label="Password"
                                    type="password"
                                    value={values.password}
                                    error={errors.password}
                                    onChange={handleChange}
                                />
                                <Link to="/forgot-password">
                                    Forgot Password?
                                </Link>

                                <div className="txt-center">
                                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                                        {isSubmitting ? <Loading /> : 'Sign In'}
                                    </button>
                                </div>

                                {signInError?.message === 'Password reset required for the user' && (
                                    <p className="mt-4 error-text">
                                        {signInError.message}
                                        <Link to="/forgot-password-verification">
                                            Click here to input code and reset password.
                                        </Link>
                                    </p>
                                )}

                                {signInError?.message === 'Incorrect username or password.' && (
                                    <p className="mt-4 error-text">{signInError.message}</p>
                                )}

                                {signInError?.message &&
                                    signInError?.message !== 'Incorrect username or password.' &&
                                    signInError?.message !== 'Password reset required for the user' && (
                                        <p className="mt-4 error-text">{signInError.message}</p>
                                    )
                                }
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </AuthLayout>
    );
};

export default SignIn;
