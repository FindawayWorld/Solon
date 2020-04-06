import React, { useState } from 'react';
import Input from './FormikInput';

const ListInputBox = ({
        required = false,
        showRequired = false,
        id = 'ListInput1',
        label = false,
        labelHelp = null,
        readOnly = false,
        placeholder = '',
        validators = [],
        value = [],
        errors = null,
        touched = true,
        help = null,
        children = () => {},
        onChange = () => {},
        onFocus = () => {},
        onBlur = () => {}
    }) => {
    const [stagedValue, setStagedValue] = useState('');

    const addItem = (callback) => {
        let newState = stagedValue ? [...value, stagedValue] : value;
        setStagedValue('');
        onChange(id, newState);
    }

    const removeItem = (itemIndex) => {
        var newList = value.filter((v, i) => i !== itemIndex);
        onChange(id, newList);
        onBlur();
    }

    const handleChange = (event) => {
        setStagedValue(event.target.value);
    };

    const handleEnter = (e) => {
        let isEnter = e.key === 'Enter';

        isEnter && e.stopPropagation();
        isEnter && e.preventDefault();

        isEnter && addItem();
        return !isEnter;
    };
    return (
        <div className="relative list-input-box">
            <div>
                {!readOnly && <div className="list-input-form">
                    <Input
                        label={label}
                        labelHelp={labelHelp}
                        help={help}
                        type="text"
                        id={id}
                        name={id}
                        value={stagedValue}
                        append={<button type="button" className="btn btn-sm btn-secondary" disabled={readOnly} onClick={addItem}>Add</button>}
                        placeholder={placeholder}
                        required={required}
                        showRequired={showRequired}
                        disabled={readOnly}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onKeyPress={handleEnter}
                        error={errors}
                        touched={touched}
                    />
                </div>}

                {children({
                    items: value,
                    readOnly,
                    removeItem
                })}
            </div>
        </div>
    );
}

export default ListInputBox;
