import React from 'react';
import classNames from 'classnames';

interface LoadingProps {
    inline?: boolean;
    invert?: false;
}

const Loading: React.FC<LoadingProps> = ({ inline = false, invert = false }) => (
    <span
        className={classNames('loading-wrapper', {
            'loading-inline': inline
        })}
    >
        <span
            className={classNames('loading', {
                inverted: invert
            })}
        />
    </span>
);

export default Loading;
