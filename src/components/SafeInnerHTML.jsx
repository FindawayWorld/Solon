import React from 'react';
import DOMPurify from 'isomorphic-dompurify';
import PropTypes from 'prop-types';

export const purifySettings = {
    KEEP_CONTENT: false,
    FORBID_TAGS: ['style', 'img'], // In most cases we don't need style or img tags
    FORBID_ATTR: ['style'] // In most cases we don't want inline css
};

const SafeInnerHTML = ({ as = 'div', html = '' }) => {
    const Comp = as;
    if (!html) return null;

    return <Comp dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html, purifySettings) }} />;
};

SafeInnerHTML.propTypes = {
    as: PropTypes.elementType,
    html: PropTypes.string
};

export default SafeInnerHTML;
