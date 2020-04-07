import React from 'react';
import { Link } from 'react-router-dom';

const ChangePasswordConfirm = (props) => {
    return (
        <div className="form-signin">
            <h2 className="mb-5 txt-center">Your password has been successfully changed.</h2>
            <div className="txt-center">
                <Link className="btn btn-primary" to="/sign-in">
                    Sign In
                </Link>
            </div>
        </div>
    );
};

export default ChangePasswordConfirm;
