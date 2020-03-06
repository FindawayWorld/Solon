import React from 'react';
import classnames from 'classnames';
import {useId} from '@reach/auto-id';

const Checkbox = ({
    checked = undefined,
    label = '',
    help = null,
    placeholder = null,
    id = null,
    name = null,
    error = false,
    touched = false,
    value = undefined,
    required = false,
    className = '',
    inline = false,
    disabled = false,
    children = null,
    onChange = () => {},
    onBlur = () => {}
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
        <div className={classnames('form-group form-check', className, {
            'checkbox-inline': inline
        })}>
            <input
                className={classnames('form-check-input', {
                    'success': touched && !error,
                    'error': error
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
            <label htmlFor={id} className={classnames('form-check-label', {
                'required': required
            })}>
                {label || children}
            </label> {help}
            {error && touched && <div className="form-error standalone">
                <span>{error}</span>
            </div>}
        </div>
    );
};

export default Checkbox;
