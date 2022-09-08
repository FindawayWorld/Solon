import React from 'react';
import classnames from 'classnames';
import { useId } from '@reach/auto-id';

interface CheckboxProps {
    checked?: React.InputHTMLAttributes<HTMLInputElement>['checked'];
    children?: React.ReactNode[];
    className?: string;
    disabled?: React.InputHTMLAttributes<HTMLInputElement>['disabled'];
    error?: string;
    help?: React.ReactNode;
    id: React.InputHTMLAttributes<HTMLInputElement>['id'];
    inline?: boolean;
    label?: React.ReactNode;
    name?: React.InputHTMLAttributes<HTMLInputElement>['name'];
    placeholder?: React.InputHTMLAttributes<HTMLInputElement>['placeholder'];
    required?: boolean;
    touched?: boolean;
    value?: React.InputHTMLAttributes<HTMLInputElement>['value'];
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
    checked = undefined,
    children = undefined,
    className = '',
    disabled = false,
    error = false,
    help = undefined,
    id = undefined,
    inline = false,
    label = '',
    name = undefined,
    placeholder = undefined,
    required = false,
    touched = false,
    value = undefined,
    onBlur = () => {},
    onChange = () => {}
}) => {
    let handleChange = onChange;
    let handleBlur = onBlur;
    let autoId = useId(id);

    if (!id && name && value) {
        id = `${name}_${value}`;
    }
    if (!id && !name) {
        id = autoId;
    }

    return (
        <div
            className={classnames('form-group form-check', className, {
                'checkbox-inline': inline
            })}
        >
            <input
                className={classnames('form-check-input', {
                    success: touched && !error,
                    error: error
                })}
                checked={checked}
                value={value}
                type="checkbox"
                name={name || id}
                id={id}
                required={required}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={disabled}
            />
            <label
                htmlFor={id}
                className={classnames('form-check-label', {
                    required: required
                })}
            >
                {label || children}
            </label>{' '}
            {help}
            {error && touched && (
                <div className="form-error standalone">
                    <span>{error}</span>
                </div>
            )}
        </div>
    );
};

export default Checkbox;
