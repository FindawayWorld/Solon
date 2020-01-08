import React from 'react';
import classnames from 'classnames';

const Select = ({
    label = '',
    labelHelp = null,
    placeholder = null,
    id = 'input',
    name = null,
    validators = [],
    errorMessage = '',
    defaultValue = undefined,
    value = undefined,
    required = false,
    showRequired = false,
    prependLabel = false,
    hidden = false,
    collapse = false,
    small = false,
    className = '',
    autoComplete = null,
    disabled = false,
    hideOptional = false,
    errors = false,
    touched = false,
    readOnly = false,
    prepend = null,
    append = null,
    multiple = false,
    defaultEmpty = false,
    children = null,
    onChange = () => {},
    onBlur = () => {},
    onFocus = () => {}
}) => {
    let isRequired = required || showRequired;

    if (readOnly) {
        return value;
    }

    return (
        <div className={classnames('form-group', {'was-validated': !errors, 'mb-0': collapse}, className)}>
            {label && !prependLabel && <div className="label-wrapper">
                <label htmlFor={id} className={classnames({
                    'required': isRequired,
                    'hidden': hidden,
                    'label-sm': small
                })}>{label} {isRequired && <small className="text-muted font-weight-normal font-italic text-danger">(required)</small>}</label>
                {labelHelp}
                </div>
            }
            <div className={classnames({'input-group': (prepend || prependLabel) || append})}>
                {prepend &&
                    <div className={classnames("input-group-prepend", {'input-group-sm': small})}>
                        {React.isValidElement(prepend) ? prepend : <span className="input-group-text">{prepend}</span>}
                    </div>
                }
                {prependLabel &&
                    <div className={classnames("input-group-prepend prepend-label", {'input-group-sm': small})}>
                        <label htmlFor={id} className="input-group-text">{label}</label>
                    </div>}
                <select
                    className={classnames('custom-select', {
                        'form-control': !readOnly,
                        'form-control-plaintext': readOnly,
                        'input-collapse': collapse,
                        'error-visible': touched && errors,
                        'error': touched && errors,
                        'form-control-sm': small,
                        'input-group-control': (prepend || prependLabel) || append,
                        'input-group-control-prepend': (prepend || prependLabel),
                        'input-group-control-append': append
                    })}
                    defaultValue={defaultValue}
                    value={value}
                    name={name || id}
                    id={id}
                    required={required}
                    multiple={multiple}
                    autoComplete={autoComplete}
                    readOnly={readOnly}
                    disabled={disabled}

                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChange}
                >
                    {defaultEmpty && <option value="">Select...</option>}
                    {children}
                </select>

                {multiple &&
                    <small className="form-text text-muted">
                        <code>{window.navigator.platform.includes('Mac') ? 'command' : 'ctrl'} + click</code> to select multiple
                    </small>
                }

                {errors && touched &&
                    <div className="form-error">
                        <span>{errors}</span>
                    </div>
                }
            </div>
        </div>
    );
}
export default Select;
