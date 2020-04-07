import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

const ChangePasswordTimeout = (props) => {
    return (
        <div className="form-signin txt-center">
            <h2 className="m-0">Password Request Timed Out</h2>
            <p className="mb-5">
                Your new password request has expired. To create a password, login with the temporary password that was
                sent in your welcome email.
            </p>
            <div>
                <Link className="forgot-password" to="/sign-in">
                    <FaChevronLeft size={10} className="mr-1" /> Back to sign in
                </Link>
            </div>
        </div>
    );
};

export default ChangePasswordTimeout;
