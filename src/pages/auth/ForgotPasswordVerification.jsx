import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { string, object } from 'yup';
import { FaChevronLeft } from 'react-icons/fa';

// locals
import Input from '../../components/form/Input';

// utils
import PasswordHelper from '../../components/PasswordHelper';
import ChangePasswordConfirm from './ChangePasswordConfirm';
import AuthLayout from '../../components/AuthLayout';

import { passwordSchema } from '../../slices/authSlice';

const forgotPasswordVerificationSchema = object().shape({
    verificationCode: string().required('required'),
    email: string().email().lowercase().required('Email is required'),
    password: string()
        .required('Required')
        .test(
            'is-valid',
            'Must Contain at least 12 Characters, one (1) uppercase letter, one (1) lowercase letter, and one (1) Number',
            (value) => passwordSchema.validate(value)
        )
});

const ForgotPasswordVerification = (props) => {
    const [isPasswordChangeSuccess, setIsPasswordChangeSuccess] = useState(false);

    const [verifyPasswordError, setVerifyPasswordError] = useState(null);

    const _handleSubmit = async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        const { email, verificationCode, password } = values;
        try {
            await Auth.forgotPasswordSubmit(email, verificationCode, password);
            /* response will come back undefined even tho the request executed successfully */
            setSubmitting(false);
            setIsPasswordChangeSuccess(true);
        } catch (error) {
            if (error.code === 'CodeMismatchException' || error.code === 'ExpiredCodeException') {
                setFieldError('verificationCode', error.message);
            }

            if (error.code === 'InvalidPasswordException') {
                setFieldError('password', error.message);
            }

            setVerifyPasswordError(error);
            setSubmitting(false);
        }
    };

    const { values, errors, touched, handleChange, handleSubmit, isSubmitting, setFieldError, handleBlur } = useFormik({
        initialValues: {
            verificationCode: '',
            email: '',
            password: ''
        },
        onSubmit: _handleSubmit,
        validationSchema: forgotPasswordVerificationSchema
    });

    return (
        <AuthLayout>
            {isPasswordChangeSuccess && <ChangePasswordConfirm />}
            {!isPasswordChangeSuccess && (
                <div className="row">
                    <form
                        className="col-xs-12 col-lg-7 col-lg-offset-1 col-xl-5 col-xl-offset-2"
                        onSubmit={handleSubmit}
                    >
                        <Input
                            id="verificationCode"
                            label="Verification code"
                            value={values.verificationCode}
                            touched={touched.verificationCode}
                            error={errors.verificationCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Input
                            id="email"
                            label="Email"
                            value={values.email}
                            touched={touched.email}
                            error={errors.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Input
                            id="password"
                            type="password"
                            label="New Password"
                            value={values.password}
                            touched={touched.password}
                            error={errors.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <div className="txt-center mb-5">
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                Change Password
                            </button>
                            {verifyPasswordError && <p className="mt-2 txt-danger">{verifyPasswordError.message}</p>}
                        </div>
                        <div>
                            <Link className="forgot-password" to="/sign-in">
                                <FaChevronLeft size={10} /> Back to sign in
                            </Link>
                        </div>
                    </form>
                    <div className="col-xs-12 col-lg-3">
                        <PasswordHelper password={values.password} />
                    </div>
                </div>
            )}
        </AuthLayout>
    );
};

export default ForgotPasswordVerification;
