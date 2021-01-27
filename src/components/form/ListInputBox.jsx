import React, { useState } from 'react';
import classnames from 'classnames';
import Input from './Input';

export const ListInputBox = ({
    required = false,
    showRequired = false,
    id = 'ListInput1',
    label = false,
    labelHelp = null,
    readOnly = false,
    placeholder = '',
    restricted = [],
    value = [],
    error = null,
    touched = true,
    help = null,
    charLimit = false,
    children = () => {},
    onChange = () => {},
    onFocus = () => {},
    onBlur = () => {}
}) => {
    const [stagedValue, setStagedValue] = useState('');
    const [charsRemaining, setCharsRemaining] = useState(charLimit ? charLimit - value.join(';').length : null);

    const addItem = (callback) => {
        let newState = stagedValue ? [...value, stagedValue] : value;
        setStagedValue('');
        onChange(newState);
    };

    const removeItem = (itemIndex) => {
        var newList = value.filter((v, i) => i !== itemIndex);
        onChange(newList);
        onBlur();
    };

    const handleChange = (event) => {
        let newCombinedVal = [...value, event.target.value];
        let charsRemaining = charLimit - newCombinedVal.join(';').length;
        setCharsRemaining(charsRemaining);
        setStagedValue(event.target.value);
    };

    const handleEnter = (e) => {
        let isEnter = e.key === 'Enter';

        isEnter && e.stopPropagation();
        isEnter && e.preventDefault();

        isEnter && addItem();
        return !isEnter;
    };

    React.useEffect(() => {
        setCharsRemaining(charLimit ? charLimit - value.join(';').length : null);
    }, [value, charLimit]);

    return (
        <div className="list-input-box">
            {readOnly && <label>{label}</label>}
            {!readOnly && (
                <div className="list-input-form">
                    <Input
                        label={label}
                        labelHelp={labelHelp}
                        help={help}
                        type="text"
                        id={id}
                        name={id}
                        value={stagedValue}
                        append={
                            <button
                                type="button"
                                className="btn btn-sm btn-secondary"
                                disabled={readOnly}
                                onClick={addItem}
                            >
                                Add
                            </button>
                        }
                        restricted={restricted}
                        placeholder={placeholder}
                        required={required}
                        showRequired={showRequired}
                        disabled={readOnly}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onKeyPress={handleEnter}
                        error={error}
                        touched={touched}
                        collapse
                    />
                </div>
            )}

            {charLimit && !readOnly && (
                <div>
                    <small className={classnames({ 'form-error': charsRemaining < 0 })}>
                        {charsRemaining} characters remaining
                    </small>
                </div>
            )}

            {children({
                items: value,
                readOnly,
                removeItem
            })}
        </div>
    );
};

export const ListInputItem = ({ children = [], index = null, readOnly = false, onRemove = () => {} }) => {
    const onClickClose = () => {
        onRemove(index);
    };
    return (
        <li className="list-group-item">
            {!readOnly && (
                <button type="button" className="btn close" onClick={onClickClose}>
                    &times;
                </button>
            )}
            {children}
        </li>
    );
};
