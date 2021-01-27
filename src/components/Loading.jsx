import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Loading = ({ inline = false, invert = false }) => (
    <span
        className={classnames('loading-wrapper', {
            'loading-inline': inline
        })}
    >
        <span
            className={classnames('loading', {
                inverted: invert
            })}
        />
    </span>
);

Loading.propTypes = {
    inline: PropTypes.bool,
    invert: PropTypes.bool
};

export default Loading;
