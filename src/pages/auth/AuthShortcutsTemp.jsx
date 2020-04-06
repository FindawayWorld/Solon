/*
    This utility component was created to allow for visual inspection of the
    various auth pages without having to perform requests to trigger navigation.
    To use, include above the Auth routes in App.jsx.
*/
import React from 'react';
import {Link} from 'react-router-dom';

const tempAuthShortcutLinks = ['forgot-password', 'new-password-required', 'forgot-password-verification'];

const AuthShortcutsTemp = props => {
    return (
        <div className="p-2">
            {tempAuthShortcutLinks.map(l => {
                return (
                    <Link key={Math.random() + 'fish'} to={`/${l}`} className="pr-2">
                        {l}
                    </Link>
                );
            })}
        </div>
    );
};

export default AuthShortcutsTemp;
