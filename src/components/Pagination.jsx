import React from 'react';
import classnames from 'classnames';

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
            {showJumpFirst && <li className="page-item"><a className="page-link" href={pathName}>First</a></li>}
            <li className="page-item"><a className="page-link" href={prevPage}>Previous</a></li>
        </>}
        {allPages.slice(begin, end).map((i, p) => {
            let current = (i) === currentPage;
            return (
                <li key={`page_${p}`} className={classnames('page-item', {
                    active: current
                })}>
                    <a className={classnames('page-link')} aria-current={current ? 'page' : null} href={`${pathName}/${i === 1 ? '' : i}`}>{i}</a>
                </li>
            );
        })}
        {!isLast && <>
            <li className="page-item"><a className="page-link" href={nextPage}>Next</a></li>
            {showJumpLast && <li className="page-item"><a className="page-link" href={`${pathName}/${numPages}`}>Last</a></li>}
        </>}
        </ul>
    );
};

export default Pagination;
