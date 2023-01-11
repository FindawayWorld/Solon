import React from 'react';

import { componentsNav } from '../../components/Layout';

import Link from 'next/link';

const ComponentsPage = () => {
    return (
        <>
            <h2>Components</h2>
            <hr />
            <ul className="list-flat">
                {componentsNav.map((page) => (
                    <li key={page[0]} className="nav-item">
                        <Link href={page[0]}>{page[1]}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ComponentsPage;
