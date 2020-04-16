import React from 'react';
import classnames from 'classnames';
import {useId} from '@reach/auto-id';

const Input = ({
        label = '',
        labelHelp = null,
        placeholder = null,
        id = undefined,
        name = null,
        value = undefined,
        defaultValue = undefined,
        required = false,
        className = '',
        type = 'text',
        collapse = false,
        hideLabel = false,
        inputStyles = {},
        restricted = [],
        showRequired = false,
        prependLabel = false,
        autoComplete = null,
        hidden = false,
        children = false,
        prepend = null,
        append = null,
        small = false,
        disabled = false,
        readOnly = false,
        labelClass = null,
        help = null,
        flex = false,
        ghost = false,
        error = null,
        touched = false,
        onChange,
        onBlur = () => {},
        onFocus = () => {},
        onKeyUp = () => {},
        onKeyDown = () => {},
        onKeyPress = () => {}
    }) => {

    let isRequired = required || showRequired;
    let handleChange = onChange;
    let handleBlur = onBlur;
    id = useId(id);

    if (hidden) {
        return null;
    }

    return (
        <div className={classnames('form-group position-relative', {'mb-0': collapse}, className)}>
            {label && !prependLabel && !hideLabel && <>
                <div className={classnames("label-wrapper", {'mb-0': !!help})}>
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
                    {labelHelp}
                </div>
                {help && !readOnly &&
                    <small className="form-text text-muted d-block mt-0 mb-1">{help}</small>
                }
            </>}

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

                <input
                    className={classnames('form-control', {
                        'error': touched && error,
                        'error-visible': touched && error,
                        'mb-0': collapse,
                        'input-group-control': (prepend || prependLabel) || append,
                        'input-group-control-prepend': (prepend || prependLabel),
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
                    required={required}
                    placeholder={placeholder}
                    disabled={disabled}
                    autoComplete={autoComplete}
                    readOnly={readOnly}

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

                {!!error && touched &&
                    <div className="form-error">
                        <span>{error}</span>
                    </div>
                }
            </div>
            {children}
        </div>
    );
}

export default Input;
