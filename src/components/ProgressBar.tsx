import VisuallyHidden from '@reach/visually-hidden';
import classNames from 'classnames';

interface ProgressBarProps {
    value: number;
    label: string;
    max: number;
    className?: string;
    barClassName?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, label, max, className = '', barClassName = '' }) => {
    const hasValue = typeof value === 'number' && value >= 0;
    const progress = hasValue ? Math.ceil((value / max) * 100) : undefined;

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
                aria-valuemin={0}
                aria-valuemax={100}
                style={!!progress ? { width: `${progress}%` } : {}}
            >
                <VisuallyHidden>{progress}% Complete</VisuallyHidden>
            </div>
        </div>
    );
};

export default ProgressBar;
