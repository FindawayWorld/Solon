import React from 'react';
import classnames from 'classnames';
import {FaCheck} from 'react-icons/fa';

export const passwordRequirements = [
    'Must be at least 8 characters long',
    'Must contain at least one (1) uppercase letter',
    'Must contain at least one (1) lowercase letter',
    'Must contain at least one (1) number',
];

export const passwordRegex = {
    oneNumber: /\d/,
    oneUppercaseLetter: /[A-Z]/,
    oneLowercaseLetter: /[a-z]/,
    twelveCharsMinimum: /^.{12,}$/,
};

const PasswordHelper = ({password = ''}) => {
    return (
        <div className="card card-flat password-reqs">
            <div className="card-header">
                <h6>Password Requirements</h6>
            </div>
            <div className="card-body">
                <ul className="list-unstyled">
                    <li>{passwordRegex.twelveCharsMinimum.test(password) && <span className="indicator indicator-success"></span>} Minimum 12 characters</li>
                    <li>{passwordRegex.oneNumber.test(password) && <span className="indicator indicator-success"></span>} Include numbers</li>
                    {/* <li>{!valid.includes('symbols') && !!password.length && <span className="indicator indicator-success"></span>} Include special character</li> */}
                    <li>{passwordRegex.oneUppercaseLetter.test(password) && <span className="indicator indicator-success"></span>} Include uppercase letters</li>
                    <li>{passwordRegex.oneLowercaseLetter.test(password) && <span className="indicator indicator-success"></span>} Include lowercase letters</li>
                </ul>
            </div>
        </div>
    );
};

export default PasswordHelper;
