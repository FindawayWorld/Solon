import React from 'react';
import {Link} from 'react-router-dom';
import {FaChevronLeft} from 'react-icons/fa';
// locals
import {ReactComponent as Logo} from '../../svg/audioengine_dark.svg';

const ChangePasswordTimeout = props => {
    return (
        <div className="page-signin">
            <div className="row center-xs mb-4">
                <Logo className="sign-in-logo" alt="audio engine logo" />
            </div>
            <div className="form-signin">
                <div className="row center-xs mb-4">
                    <h2 className="m-0">Password Request Timed Out</h2>
                </div>
                <div className="row center-xs mb-3">
                    <p style={{textAlign: 'center'}} className="mb-5">
                        Your new password request has expired. To create a password, login with the temporary
                        password that was sent in your welcome email.
                    </p>
                </div>
                <div className="row start-xs middle-xs">
                    <Link className="forgot-password" to="/login" style={{textDecoration: 'none'}}>
                        <FaChevronLeft size={10} className="mr-1" /> Back to sign in
                    </Link>
                </div>
                <div className="signin-footer mt-5">
                    <p>
                        <small>&copy; {new Date().getFullYear()} Findaway. All rights reserved.</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordTimeout;
