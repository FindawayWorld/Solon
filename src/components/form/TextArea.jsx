import React from 'react';
import classnames from 'classnames';

const TextArea = ({
    label = '',
    prependLabel = false,
    placeholder = null,
    id = 'textarea',
    validators = [],
    errorMessage = '',
    defaultValue = undefined,
    value = undefined,
    required = false,
    showRequired = false,
    hidden = false,
    className = '',
    collapse = false,
    hideLabel = false,
    inputStyles = {},
    restricted = [],
    autoComplete = null,
    rows = 3,

    flex = false,
    labelClass = null,
    append = null,
    prepend = null,
    small = false,
    help = null,
    disabled = false,
    readOnly = false,
    children = null,

    error = false,
    touched = false,

    onChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
    onKeyUp = () => {},
    onKeyDown = () => {},
    onKeyPress = () => {}
}) => {

    let isRequired = required || showRequired;
    let handleChange = onChange;
    let handleBlur = onBlur;

    if (hidden) {
        return null;
    }

    return (
        <div className={classnames('form-group position-relative', {'mb-0': collapse}, className)}>
            {label && !prependLabel &&
                <label
                    htmlFor={id}
                    className={classnames(labelClass, {
                        'required': isRequired,
                        'sr-only': hideLabel,
                        'flex': flex,
                        'label-sm': small
                    })}
                >
                    {label} {isRequired && <small className="text-muted font-weight-normal font-italic text-danger">(required)</small>}
                </label>
            }
            <div className={classnames({'input-group': (prepend || prependLabel) || append})}>
                {prepend &&
                    <div className="input-group-prepend">
                        {React.isValidElement(prepend) ? prepend : <span className="input-group-text">{prepend}</span>}
                    </div>
                }
                {prependLabel &&
                    <div className={classnames("input-group-prepend prepend-label", {'input-group-sm': small})}>
                        <label htmlFor={id} className="input-group-text">{label}</label>
                    </div>
                }
                <textarea
                    className={classnames('form-control', {
                        'error': error && touched,
                        'mb-0': collapse,
                        'input-group-control': (prepend || prependLabel) || append,
                        'input-group-control-prepend': (prepend || prependLabel),
                        'input-group-control-append': append,
                        'form-control-sm': small
                    })}

                    style={inputStyles}
                    defaultValue={defaultValue}
                    value={value}
                    name={id}
                    id={id}
                    required={required}
                    placeholder={placeholder}
                    disabled={disabled}
                    autoComplete={autoComplete}
                    readOnly={readOnly}
                    rows={rows}

                    onFocus={onFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onKeyUp={onKeyUp}
                    onKeyDown={onKeyDown}
                    onKeyPress={onKeyPress}
                />
                {append &&
                    <div className="input-group-append">
                        {React.isValidElement(append) ? append : <span className="input-group-text">{append}</span>}
                    </div>
                }
                {help && !readOnly &&
                    <small className="form-text text-muted">{help}</small>
                }
                {error && touched &&
                    <div className="form-error">
                        <span>{error}</span>
                    </div>
                }
            </div>

            {children}
        </div>
    );
}

export default TextArea;
