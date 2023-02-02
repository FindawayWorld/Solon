import React from 'react';
import classnames from 'classnames';

interface InputWrapperProps {
    label?: React.ReactNode;
    labelHelp?: React.ReactNode;
    id?: React.InputHTMLAttributes<HTMLInputElement>['id'];
    required?: React.InputHTMLAttributes<HTMLInputElement>['required'];
    showRequired?: boolean;
    prependLabel?: boolean;
    hidden?: boolean;
    collapse?: boolean;
    small?: boolean;
    className?: string;
    error?: string;
    touched?: boolean;
    prepend?: boolean;
    append?: boolean;
    children?: React.ReactNode;
}

const InputWrapper: React.FC<InputWrapperProps> = ({
    label = '',
    labelHelp = undefined,
    id = undefined,
    required = false,
    showRequired = false,
    prependLabel = false,
    hidden = false,
    collapse = false,
    small = false,
    className = '',
    error = false,
    touched = false,
    prepend = undefined,
    append = undefined,
    children = undefined
}) => {
    let isRequired = required || showRequired;

    return (
        <div className={classnames('form-group', { 'was-validated': !error, 'mb-0': collapse }, className)}>
            {label && !prependLabel && (
                <div className="label-wrapper">
                    <label
                        htmlFor={id}
                        className={classnames({
                            required: isRequired,
                            hidden: hidden,
                            'label-sm': small
                        })}
                    >
                        {label}{' '}
                        {isRequired && (
                            <small className="text-muted font-weight-normal font-italic text-danger">(required)</small>
                        )}
                    </label>
                    {labelHelp}
                </div>
            )}
            <div className={classnames({ 'input-group': prepend || prependLabel || append })}>
                {prepend && (
                    <div className={classnames('input-group-prepend', { 'input-group-sm': small })}>
                        {React.isValidElement(prepend) ? prepend : <span className="input-group-text">{prepend}</span>}
                    </div>
                )}
                {prependLabel && (
                    <div className={classnames('input-group-prepend prepend-label', { 'input-group-sm': small })}>
                        <label htmlFor={id} className="input-group-text">
                            {label}
                        </label>
                    </div>
                )}

                {children}

                {append && (
                    <div className="input-group-append">
                        {React.isValidElement(append) ? append : <span className="input-group-text">{append}</span>}
                    </div>
                )}

                {error && touched && (
                    <div className="form-error">
                        <span>{error}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InputWrapper;
