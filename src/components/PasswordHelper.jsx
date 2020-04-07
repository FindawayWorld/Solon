import React from 'react';
import { passwordSchema } from '../context/AuthContext';

const PasswordHelper = ({ password = '' }) => {
    let valid = passwordSchema.validate(password, { list: true });
    return (
        <div className="card card-flat password-reqs">
            <div className="card-header">
                <h6>Password Requirements</h6>
            </div>
            <div className="card-body">
                <ul className="list-unstyled">
                    <ul className="list-unstyled">
                        <li>
                            {!valid.includes('min') && !!password.length && (
                                <span className="indicator indicator-success"></span>
                            )}{' '}
                            Minimum {process.env.REACT_APP_MIN_PASSWORD_LENGTH} characters
                        </li>
                        <li>
                            {!valid.includes('digits') && !!password.length && (
                                <span className="indicator indicator-success"></span>
                            )}{' '}
                            Include numbers
                        </li>
                        <li>
                            {!valid.includes('symbols') && !!password.length && (
                                <span className="indicator indicator-success"></span>
                            )}{' '}
                            Include special character
                        </li>
                        <li>
                            {!valid.includes('uppercase') && !!password.length && (
                                <span className="indicator indicator-success"></span>
                            )}{' '}
                            Include uppercase letters
                        </li>
                        <li>
                            {!valid.includes('lowercase') && !!password.length && (
                                <span className="indicator indicator-success"></span>
                            )}{' '}
                            Include lowercase letters
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default PasswordHelper;
