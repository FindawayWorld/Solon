import React from 'react';
import {Link} from 'react-router-dom';
import {FaChevronLeft} from 'react-icons/fa';
// locals
import AuthLayout from '../../components/AuthLayout';

const ChangePasswordConfirm = props => {
    return (
        <AuthLayout>
            <div className="form-signin">
                <div className="row center-xs mb-3">
                    <h2 style={{textAlign: 'center'}} className="mb-5">
                        Your password has been successfully changed.
                    </h2>
                </div>
                <div className="row start-xs middle-xs">
                    <Link className="forgot-password" to="/login" style={{textDecoration: 'none'}}>
                        <FaChevronLeft size={10} className="mr-1" /> Back to sign in
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
};

export default ChangePasswordConfirm;
