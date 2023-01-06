import React from 'react';
import classnames from 'classnames';

import ReactQuill from 'react-quill';
import SafeInnerHTML, { purifySettings } from '../SafeInnerHTML';
import DOMPurify from 'isomorphic-dompurify';

import 'react-quill/dist/quill.snow.css';

const WysiwygEditor = ({
    id = 'wysiwyg1',
    label = null,
    labelHelp = null,
    help = null,
    html = '',
    placeholder = '',
    readOnly = false,
    required = false,
    showRequired = false,
    className = null,
    hideLabel = false,

    errors = null,
    touched = null,

    onFocus = () => {},
    onChange = () => {},
    onBlur = () => {}
}) => {
    const onQuillChange = (val, delta, source, editor) => {
        let html = val.replace(/style="[^"]*"/g, '');
        let textOnly = editor.getText();
        html = textOnly.trim().length ? html : '';

        onChange(id, html);
    };

    let isRequired = required || showRequired;

    const labelClassName = classnames({
        required: isRequired
    });

    const cleanHTML = DOMPurify.sanitize(html, purifySettings);

    return (
        <div className={classnames('form-group', className)}>
            {!!label && !hideLabel && (
                <div className="label-wrapper">
                    <label htmlFor={id} className={labelClassName}>
                        {label}{' '}
                        {isRequired && (
                            <small className="text-muted font-weight-normal font-italic text-danger">(required)</small>
                        )}
                    </label>
                    {labelHelp}
                </div>
            )}
            {readOnly && <SafeInnerHTML html={cleanHTML} />}
            {!readOnly && (
                <ReactQuill
                    className={classnames('wysiwyg-editor', {
                        error: errors
                    })}
                    placeholder={placeholder}
                    defaultValue={cleanHTML}
                    formats={['bold', 'italic', 'underline', 'blockquote', 'header', 'list']}
                    modules={{
                        toolbar: [
                            [{ header: [1, 2, false] }],
                            ['bold', 'italic', 'underline'],
                            [{ list: 'ordered' }, { list: 'bullet' }]
                        ]
                    }}
                    onChange={onQuillChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            )}

            {help && <small className="form-text text-muted">{help}</small>}

            {!!errors && touched && (
                <div className="form-error">
                    <span>{errors}</span>
                </div>
            )}
        </div>
    );
};

export default WysiwygEditor;
