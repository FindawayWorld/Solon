import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';
import { string, object } from 'yup';
import { Auth } from 'aws-amplify';
// locals
import ChangePasswordConfirm from '../auth/ChangePasswordConfirm';
import Input from '../../components/form/Input';
// utils
import { AuthContext, appActions } from '../../context/AuthContext';
import ChangePasswordTimeout from './ChangePasswordTimeout';

import { passwordSchema } from '../../context/AuthContext';
import AuthLayout from '../../components/AuthLayout';

const newPasswordRequiredSchema = object().shape({
    newPassword: string()
        .required('Required')
        .test(
            'is-valid',
            'Must Contain at least 12 Characters, one (1) uppercase letter, one (1) lowercase letter, and one (1) Number',
            (value) => passwordSchema.validate(value)
        ),
    confirmNewPassword: string()
        .required('Required')
        .test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.newPassword === value;
        })
});

const NewPasswordRequired = (props) => {
    const { state, dispatch } = useContext(AuthContext);
    const [invalidPasswordError, setInvalidPasswordError] = useState(null);
    const [isPasswordChangeSuccess, setIsPasswordChangeSuccess] = useState(false);

    const handleSubmitCompleteNewPassword = async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        try {
            await Auth.completeNewPassword(state.user, values.newPassword, {});
            setSubmitting(false);
            resetForm();
            setIsPasswordChangeSuccess(true);
            dispatch({ type: appActions.COMPLETE_NEW_PASSWORD_SUCCESS });
        } catch (error) {
            if (error?.message === 'Invalid session for the user, session is expired.') {
                setInvalidPasswordError(error);
                setSubmitting(false);
                dispatch({ type: appActions.COMPLETE_NEW_PASSWORD_TIMEOUT });
                return;
            }

            setInvalidPasswordError(error);
            setSubmitting(false);
            resetForm();
        }
    };

    const { values, errors, touched, handleChange, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            newPassword: '',
            confirmNewPassword: ''
        },
        validationSchema: newPasswordRequiredSchema,
        onSubmit: handleSubmitCompleteNewPassword
    });

    const isTimeout = invalidPasswordError?.message === 'Invalid session for the user, session is expired.';

    if (isPasswordChangeSuccess) {
        return <ChangePasswordConfirm />;
    }

    if (!state.user && !isTimeout) {
        return <Redirect to="/sign-in" />;
    }

    if (state.user?.attributes && !setInvalidPasswordError?.message) {
        return <Redirect to="/" />;
    }

    return (
        <AuthLayout>
            {isTimeout && <ChangePasswordTimeout />}
            {!isTimeout && (
                <div className="page-signin">
                    <form className="form-signin" onSubmit={handleSubmit} noValidate>
                        <div className="row center-xs mb-2">
                            <h2 className="m-0">Create a Password</h2>
                        </div>
                        <div className="row center-xs mb-4">
                            <p>Your temporary password has expired.</p>
                            <p>Create a unique password for your profile.</p>
                        </div>
                        <Input
                            id="newPassword"
                            label="New Password"
                            type="password"
                            value={values.newPassword}
                            error={errors.newPassword}
                            touched={touched.newPassword}
                            onChange={handleChange}
                        />
                        <Input
                            id="confirmNewPassword"
                            label="Confirm New Password"
                            type="password"
                            value={values.confirmNewPassword}
                            error={errors.confirmNewPassword}
                            touched={touched.confirmNewPassword}
                            onChange={handleChange}
                        />
                        <div className="txt-center mb-3">
                            <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                            {invalidPasswordError && <p className="mt-4 txt-danger">{invalidPasswordError.message}</p>}
                        </div>
                    </form>
                </div>
            )}
        </AuthLayout>
    );
};

export default NewPasswordRequired;
