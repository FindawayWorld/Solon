import React from 'react';
import classnames from 'classnames';

const Checkbox = ({
    checked = undefined,
    label = '',
    help = null,
    placeholder = null,
    id = 'input',
    name = null,
    errors = false,
    touched = true,
    value = undefined,
    required = false,
    className = '',
    inline = false,
    disabled = false,
    children = null,
    onChange = () => {},
    onBlur = () => {}
}) => {
    return (
        <div className={classnames('form-group form-check', className, {
            'checkbox-inline': inline
        })}>
            <input
                className={classnames('form-check-input', {
                    'success': touched && !errors,
                    'error': errors
                })}
                checked={checked}
                value={value}
                type="checkbox"
                name={name || id}
                id={id}
                required={required}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
            />
            <label htmlFor={id} className={classnames('form-check-label', {
                'required': required
            })}>
                {label || children}
            </label> {help}
            {errors && <div className="form-error standalone">
                <span>{errors}</span>
            </div>}
        </div>
    );
};

export default Checkbox;
