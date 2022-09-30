import React from 'react';
import classnames from 'classnames';

interface PaginationProps {
    as: React.ElementType;
    toProp?: string;
    numPages?: number;
    currentPage?: number;
    perPage?: number;
    pagesToShow?: number;
    showJumpFirst?: boolean;
    showJumpLast?: boolean;
    pathName?: string;
    className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
    as = 'a',
    toProp = 'href',
    numPages = 1,
    currentPage = 1,
    perPage = 5,
    pagesToShow = undefined,
    showJumpFirst = false,
    showJumpLast = false,
    pathName = '',
    className = ''
}) => {
    const Comp = as;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? pathName : `${pathName}/${(currentPage - 1).toString()}`;
    const nextPage = `${pathName}/${(currentPage + 1).toString()}`;

    let half = Math.ceil((pagesToShow || perPage) / 2);

    let cp = currentPage;

    let begin = cp < half ? 0 : cp - half;
    let end = cp < half ? perPage : cp + (half - 1);

    const allPages = Array.from({ length: numPages }).map((x, i) => i + 1);

    return (
        <ul className={classnames('pagination', className)}>
            {!isFirst && (
                <>
                    {showJumpFirst && (
                        <li className="page-item">
                            <Comp {...{ [toProp]: pathName }} className="page-link">
                                First
                            </Comp>
                        </li>
                    )}
                    <li className="page-item">
                        <Comp {...{ [toProp]: prevPage }} className="page-link">
                            Previous
                        </Comp>
                    </li>
                </>
            )}
            {allPages.slice(begin, end).map((i, p) => {
                let current = i === currentPage;
                return (
                    <li
                        key={`page_${p}`}
                        className={classnames('page-item', {
                            active: current
                        })}
                    >
                        <Comp
                            {...{ [toProp]: `${pathName}/${i === 1 ? '' : i}` }}
                            className={classnames('page-link')}
                            aria-current={current ? 'page' : null}
                        >
                            {i}
                        </Comp>
                    </li>
                );
            })}
            {!isLast && (
                <>
                    <li className="page-item">
                        <Comp {...{ [toProp]: nextPage }} className="page-link">
                            Next
                        </Comp>
                    </li>
                    {showJumpLast && (
                        <li className="page-item">
                            <Comp {...{ [toProp]: `${pathName}/${numPages}` }} className="page-link">
                                Last
                            </Comp>
                        </li>
                    )}
                </>
            )}
        </ul>
    );
};

export default Pagination;
