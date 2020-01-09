import React from 'react';
import classnames from 'classnames';
import {useFormikContext} from 'formik';

const Checkbox = ({
    checked = undefined,
    label = '',
    help = null,
    placeholder = null,
    id = null,
    name = null,
    errors = false,
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
    let formikContext = useFormikContext();
    let handleChange = onChange;
    let handleBlur = onBlur;

    if (!id && name && value) {
        id = `${name}_${value}`;
    }

    if (formikContext) {
        let _value = formikContext.values[id];
        checked = Array.isArray(_value) ? _value.includes(value) : _value;
        touched = formikContext.touched[id];
        errors = formikContext.errors[id];
        handleChange = formikContext.handleChange;
        handleBlur = formikContext.handleBlur;
    }

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
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={disabled}
            />
            <label htmlFor={id} className={classnames('form-check-label', {
                'required': required
            })}>
                {label || children}
            </label> {help}
            {errors && touched && <div className="form-error standalone">
                <span>{errors}</span>
            </div>}
        </div>
    );
};

export default Checkbox;
