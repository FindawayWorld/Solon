import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Pagination = ({
    as: Comp = 'a',
    toProp = 'href',
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
            {showJumpFirst && <li className="page-item"><Comp {...{[toProp]: pathName}} className="page-link">First</Comp></li>}
            <li className="page-item"><Comp {...{[toProp]: prevPage}} className="page-link">Previous</Comp></li>
        </>}
        {allPages.slice(begin, end).map((i, p) => {
            let current = (i) === currentPage;
            return (
                <li key={`page_${p}`} className={classnames('page-item', {
                    active: current
                })}>
                    <Comp {...{[toProp]: `${pathName}/${i === 1 ? '' : i}`}} className={classnames('page-link')} aria-current={current ? 'page' : null}>{i}</Comp>
                </li>
            );
        })}
        {!isLast && <>
            <li className="page-item"><Comp {...{[toProp]: nextPage}} className="page-link">Next</Comp></li>
            {showJumpLast && <li className="page-item"><Comp {...{[toProp]: `${pathName}/${numPages}`}} className="page-link">Last</Comp></li>}
        </>}
        </ul>
    );
};

Pagination.propTypes = {
    as: PropTypes.elementType,
    toProp: PropTypes.string,
    numPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    pagesToShow: PropTypes.number,
    showJumpFirst: PropTypes.bool,
    showJumpLast: PropTypes.bool,
    pathName: PropTypes.string,
    className: PropTypes.string
};

export default Pagination;
