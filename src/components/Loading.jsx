import React from 'react';
import classnames from 'classnames';

const Loading = ({
    inline = false,
    invert = false
}) => (
    <span className={classnames('loading-wrapper', {
        'loading-inline': inline
    })}>
        <span className={classnames('loading', {
            'inverted': invert
        })}/>
    </span>
);

export default Loading;