import React from 'react';
import classnames from 'classnames';
import { useId } from '@reach/auto-id';

interface InputProps {
    append?: React.ReactNode;
    autoComplete?: React.InputHTMLAttributes<HTMLInputElement>['autoComplete'];
    children?: React.ReactNode;
    className?: string;
    collapse?: boolean;
    defaultValue?: React.InputHTMLAttributes<HTMLInputElement>['value'];
    disabled?: boolean;
    enterkeyhint?: string;
    error?: string;
    errorStyle?: object;
    flex?: boolean;
    ghost?: boolean;
    guidance?: React.ReactNode;
    help?: React.ReactNode;
    hidden?: boolean;
    hideLabel?: boolean;
    id: string;
    innerClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
    inputClass?: string;
    inputStyles?: object;
    isHistoryInput?: boolean;
    label?: string;
    labelClass?: string;
    labelHelp?: React.ReactNode;
    labelledBy?: string;
    max?: number;
    maxLength?: number;
    min?: number;
    name?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: React.InputHTMLAttributes<HTMLInputElement>['placeholder'];
    prepend?: React.ReactNode;
    prependLabel?: boolean;
    readOnly?: boolean;
    required?: boolean;
    restricted?: string[];
    showRequired?: boolean;
    small?: boolean;
    step?: React.InputHTMLAttributes<HTMLInputElement>['step'];
    touched?: boolean;
    type?: string;
    value: React.InputHTMLAttributes<HTMLInputElement>['value'];
    warning?: string | false;
}

const Input: React.FC<InputProps> = ({
    append = null,
    autoComplete = undefined,
    children = undefined,
    className = '',
    collapse = false,
    defaultValue = undefined,
    disabled = false,
    error = null,
    flex = false,
    ghost = false,
    help = null,
    hidden = false,
    hideLabel = false,
    id = undefined,
    inputStyles = {},
    label = '',
    labelClass = null,
    labelHelp = null,
    name = null,
    placeholder = undefined,
    prepend = null,
    prependLabel = false,
    readOnly = false,
    required = false,
    restricted = [],
    showRequired = false,
    small = false,
    step = undefined,
    touched = false,
    type = 'text',
    value = undefined,
    onBlur = () => {},
    onChange = () => {},
    onFocus = () => {},
    onKeyUp = () => {},
    onKeyDown = () => {},
    onKeyPress = () => {}
}) => {
    let isRequired = required || showRequired;
    id = useId(id);

    if (hidden) {
        return null;
    }

    const handleChange = (e) => {
        let isClean = restricted.reduce((acc, value) => {
            return acc && !e.target.value.includes(value);
        }, true);

        if (!isClean) {
            return false;
        }

        onChange(e);
    };

    return (
        <div className={classnames('form-group position-relative', { 'mb-0': collapse }, className)}>
            {label && !prependLabel && !hideLabel && (
                <>
                    <div className={classnames('label-wrapper', { 'mb-0': !!help })}>
                        <label
                            htmlFor={id}
                            className={classnames(labelClass, {
                                required: isRequired,
                                'sr-only': hideLabel,
                                flex: flex,
                                'label-sm': small
                            })}
                        >
                            {label}{' '}
                            {isRequired && (
                                <small className="text-muted font-weight-normal font-italic text-danger">
                                    (required)
                                </small>
                            )}
                        </label>
                        {labelHelp}
                    </div>
                    {help && !readOnly && <small className="form-text text-muted d-block mt-0 mb-1">{help}</small>}
                </>
            )}

            <div className={classnames({ 'input-group': prepend || prependLabel || append, error: touched && error })}>
                {prepend && (
                    <div className="input-group-prepend">
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

                <input
                    className={classnames('form-control', {
                        error: touched && error,
                        'mb-0': collapse,
                        'input-group-control': prepend || prependLabel || append,
                        'input-group-control-prepend': prepend || prependLabel,
                        'input-group-control-append': append,
                        'form-control-sm': small,
                        'ghost-input': ghost
                    })}
                    style={inputStyles}
                    value={value}
                    defaultValue={defaultValue}
                    type={type}
                    name={name || id}
                    id={id}
                    step={step}
                    required={required}
                    placeholder={placeholder}
                    disabled={disabled}
                    autoComplete={autoComplete}
                    readOnly={readOnly}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    onKeyUp={onKeyUp}
                    onKeyDown={onKeyDown}
                    onKeyPress={onKeyPress}
                />
                {append && (
                    <div className="input-group-append">
                        {React.isValidElement(append) ? append : <span className="input-group-text">{append}</span>}
                    </div>
                )}

                {!!error && touched && (
                    <div className="form-error">
                        <span>{error}</span>
                    </div>
                )}
            </div>
            {children}
        </div>
    );
};

export default Input;
