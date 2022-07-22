import VisuallyHidden from '@reach/visually-hidden';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ProgressBar = ({ value, label, max, className = '', barClassName = '' }) => {
    let hasValue = ![null, undefined, false].includes(value);
    let progress = hasValue ? Math.ceil((value / max) * 100) : undefined;

    return (
        <div
            className={classNames('progress', className, {
                indeterminate: !hasValue
            })}
        >
            <div
                className={classNames('progress-bar', barClassName)}
                role="progressbar"
                aria-label={label}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
                style={!!progress ? { width: `${progress}%` } : {}}
            >
                <VisuallyHidden>{progress}% Complete</VisuallyHidden>
            </div>
        </div>
    );
};

ProgressBar.propTypes = {
    label: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    className: PropTypes.string,
    barClassName: PropTypes.string
};

export default ProgressBar;
