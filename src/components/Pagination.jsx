import React from 'react';
import classnames from 'classnames';

import {Link} from 'react-router-dom';
// For Gatsby projects use this instead.
// import {Link} from 'gatsby';


const Pagination = ({
    numPages = 1,
    currentPage = 1,
    perPage = 5,
    pagesToShow = null,
    showJumpFirst = false,
    showJumpLast = false,
    pathName = '',
    className = ''
}) => {

    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? pathName : `${pathName}/${(currentPage - 1).toString()}`;
    const nextPage = `${pathName}/${(currentPage + 1).toString()}`;

    let half = Math.ceil((pagesToShow || perPage) / 2);

    let cp = currentPage;

    let begin = cp < half ? 0 : cp - half;
    let end = cp < half ? perPage : cp + (half - 1);

    const allPages = [];
    for (var i = 0; i < numPages; i++) {
        allPages.push(i + 1);
    }

    return (
        <ul className={classnames('pagination', className)}>
        {!isFirst &&<>
            {showJumpFirst && <li className="page-item"><Link to={pathName} className="page-link">First</Link></li>}
            <li className="page-item"><Link to={prevPage} className="page-link">Previous</Link></li>
        </>}
        {allPages.slice(begin, end).map((i, p) => {
            let current = (i) === currentPage;
            return (
                <li key={`page_${p}`} className={classnames('page-item', {
                    active: current
                })}>
                    <Link to={`${pathName}/${i === 1 ? '' : i}`} className={classnames('page-link')} aria-current={current ? 'page' : null}>{i}</Link>
                </li>
            );
        })}
        {!isLast && <>
            <li className="page-item"><Link to={nextPage} className="page-link">Next</Link></li>
            {showJumpLast && <li className="page-item"><Link to={`${pathName}/${numPages}`} className="page-link">Last</Link></li>}
        </>}
        </ul>
    );
};

export default Pagination;
