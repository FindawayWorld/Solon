import React, {useState, useContext} from 'react';
import {Formik, Form} from 'formik';
import {Redirect} from 'react-router-dom';
import {string, object} from 'yup';
import {Auth} from 'aws-amplify';
// locals
import ChangePasswordConfirm from '../auth/ChangePasswordConfirm';
import InputContainerAuth from '../../components/InputContainerAuth';
import PasswordHelper from '../../components/PasswordHelper';
import Input from '../../components/form/Input';
import {ReactComponent as Logo} from '../../svg/audioengine_dark.svg';
// utils
import {AuthContext, appActions} from '../../context/AuthContext';
import ChangePasswordTimeout from './ChangePasswordTimeout';

const newPasswordRequiredSchema = object().shape({
    newPassword: string()
        .required('Required')
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{12,}$/gm,
            'Must Contain at least 12 Characters, one (1) uppercase letter, one (1) lowercase letter, and one (1) Number',
        ),
    confirmNewPassword: string()
        .required('Required')
        .test('passwords-match', 'Passwords must match', function(value) {
            return this.parent.newPassword === value;
        }),
});

const NewPasswordRequired = props => {
    const {state, dispatch} = useContext(AuthContext);
    const [invalidPasswordError, setInvalidPasswordError] = useState(null);
    const [isPasswordChangeSuccess, setIsPasswordChangeSuccess] = useState(false);

    const handleSubmitCompleteNewPassword = async (values, {setSubmitting, resetForm}) => {
        setSubmitting(true);
        try {
            await Auth.completeNewPassword(state.user, values.newPassword, {});
            setSubmitting(false);
            resetForm();
            setIsPasswordChangeSuccess(true);
            dispatch({type: appActions.COMPLETE_NEW_PASSWORD_SUCCESS});
        } catch (error) {
            process.env.NODE_ENV !== 'production' &&
                console.log('\n', '\n', `handleSubmitCompleteNewPassword, error = `, error, '\n', '\n');
            if (error?.message === 'Invalid session for the user, session is expired.') {
                setInvalidPasswordError(error);
                setSubmitting(false);
                dispatch({type: appActions.COMPLETE_NEW_PASSWORD_TIMEOUT});
            } else {
                setInvalidPasswordError(error);
                setSubmitting(false);
                resetForm();
            }
        }
    };

    if (isPasswordChangeSuccess) {
        return <ChangePasswordConfirm />;
    }

    if (invalidPasswordError?.message === 'Invalid session for the user, session is expired.') {
        return <ChangePasswordTimeout />;
    }

    if (
        !state.user &&
        invalidPasswordError?.message !== 'Invalid session for the user, session is expired.'
    ) {
        return <Redirect to="/login" />;
    } else if (
        state.user?.attributes &&
        state.user?.attributes['custom:aeSessionKey'] &&
        !setInvalidPasswordError?.message
    ) {
        // console.log('\n', `NewPasswordRequired, redirect to catalog `, '\n');
        return <Redirect to="/catalog" />;
    }

    return (
        <div className="page-signin">
            <div className="row center-xs mb-4">
                <Logo className="sign-in-logo" alt="audio engine logo" />
            </div>
            <div className="row center-xs mb-3">
                <h2 className="m-0">New Password Required</h2>
            </div>
            <Formik
                initialValues={{
                    newPassword: '',
                    confirmNewPassword: '',
                }}
                validationSchema={newPasswordRequiredSchema}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={handleSubmitCompleteNewPassword}
            >
                {({values, errors, handleChange, handleSubmit, isSubmitting}) => {
                    // console.log('\n', '\n', `values = `, values, '\n', '\n');
                    return (
                        <Form className="form-signin" onSubmit={handleSubmit} noValidate>
                            <div className="row center-xs mb-2">
                                <h2 className="m-0">Create a Password</h2>
                            </div>
                            <div className="row center-xs mb-4">
                                <p>Your temporary password has expired.</p>
                                <p>Create a unique password for your profile.</p>
                            </div>
                            <InputContainerAuth isMarginBottom>
                                <Input
                                    id="newPassword"
                                    placeholder="New Password"
                                    type="password"
                                    value={values.newPassword}
                                    onChange={handleChange}
                                    error={errors.newPassword}
                                />
                            </InputContainerAuth>
                            <InputContainerAuth isMarginBottom>
                                <Input
                                    id="confirmNewPassword"
                                    placeholder="Confirm New Password"
                                    type="password"
                                    value={values.confirmNewPassword}
                                    onChange={handleChange}
                                    error={errors.confirmNewPassword}
                                />
                            </InputContainerAuth>
                            <div className="row center-xs mb-3">
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                    disabled={
                                        !values.newPassword.length ||
                                        !values.confirmNewPassword.length ||
                                        !values.newPassword.length ||
                                        isSubmitting ||
                                        values.newPassword !== values.confirmNewPassword
                                    }
                                >
                                    Submit
                                </button>
                            </div>
                            <PasswordHelper password={values.newPassword} />
                            <div className="signin-footer mt-5">
                                <p>
                                    <small>
                                        &copy; {new Date().getFullYear()} Findaway. All rights reserved.
                                    </small>
                                </p>
                            </div>
                            {invalidPasswordError && (
                                <>
                                    <p className="mt-4 error-text">{invalidPasswordError.message}</p>
                                </>
                            )}
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default NewPasswordRequired;
