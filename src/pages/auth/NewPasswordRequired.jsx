import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';
import { string, object } from 'yup';
import { Auth } from 'aws-amplify';
// locals
import ChangePasswordConfirm from '../auth/ChangePasswordConfirm';
import Input from '../../components/form/Input';
// utils

import AuthLayout from '../../components/AuthLayout';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { authCompleteNewPasswordSuccess, authCompleteNewPasswordTimeout, passwordSchema } from '../../slices/authSlice';

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
    const dispatch = useDispatch();
    const state = useSelector((state) => state.auth);
    const [invalidPasswordError, setInvalidPasswordError] = useState(null);
    const [isPasswordChangeSuccess, setIsPasswordChangeSuccess] = useState(false);

    const handleSubmitCompleteNewPassword = async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        try {
            await Auth.completeNewPassword(state.user, values.newPassword, {});
            setSubmitting(false);
            resetForm();
            setIsPasswordChangeSuccess(true);
            dispatch(authCompleteNewPasswordSuccess());
        } catch (error) {
            if (error?.message === 'Invalid session for the user, session is expired.') {
                setInvalidPasswordError(error);
                setSubmitting(false);
                dispatch(authCompleteNewPasswordTimeout());
                return;
            }

            setInvalidPasswordError(error);
            setSubmitting(false);
            resetForm();
        }
    };

    const { values, errors, touched, handleChange, handleSubmit, isSubmitting, handleBlur } = useFormik({
        initialValues: {
            newPassword: '',
            confirmNewPassword: ''
        },
        validationSchema: newPasswordRequiredSchema,
        onSubmit: handleSubmitCompleteNewPassword
    });

    if (!state.user) {
        return <Redirect to="/sign-in" />;
    }

    if (state.user?.attributes && !setInvalidPasswordError?.message) {
        return <Redirect to="/" />;
    }

    return (
        <AuthLayout>
            {isPasswordChangeSuccess && <ChangePasswordConfirm />}
            {isPasswordChangeSuccess && (
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
                            onBlur={handleBlur}
                        />
                        <Input
                            id="confirmNewPassword"
                            label="Confirm New Password"
                            type="password"
                            value={values.confirmNewPassword}
                            error={errors.confirmNewPassword}
                            touched={touched.confirmNewPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
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
