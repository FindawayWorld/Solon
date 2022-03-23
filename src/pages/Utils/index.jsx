import React from 'react';

import { Link } from 'react-router-dom';
import { asc } from '../../utils/sorts';

import { utilsNav } from '../../App';

const UtilsPage = () => (
    <>
        <h2>Utils</h2>
        <hr />
        <ul className="list-flat">
            {utilsNav
                .sort((a, b) => asc(a[1], b[1]))
                .map((page) => (
                    <li key={page[0]} className="nav-item">
                        <Link to={page[0]}>{page[1]}</Link>
                    </li>
                ))}
        </ul>
    </>
);

export default UtilsPage;
