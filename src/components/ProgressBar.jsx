import VisuallyHidden from '@reach/visually-hidden';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ProgressBar = ({ value, label, max, className = '', barClassName = '' }) => {
    let progress = value >= 0 ? Math.ceil((value / max) * 100) : undefined;
    console.log(progress);
    return (
        <div
            className={classNames('progress', className, {
                indeterminate: !(value >= 0)
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
    value: PropTypes.number,
    className: PropTypes.string,
    barClassName: PropTypes.string
};

export default ProgressBar;
