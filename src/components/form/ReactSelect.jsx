import React from 'react';
import classnames from 'classnames';
import InputWrapper from './InputWrapper';
import Select from 'react-select';
import Async from 'react-select/async';

const ReactSelect = ({ async = false, ...props }) => {
    let Component = async ? Async : Select;
    return (
        <InputWrapper
            className={classnames('react-select-wrapper', { 'react-select-multiple': props.isMulti })}
            {...props}
        >
            <Component
                classNamePrefix="react-select"
                className={classnames({
                    'form-control': !props.readOnly,
                    'form-control-plaintext': props.readOnly,
                    'input-collapse': props.collapse,
                    'error-visible': props.touched && props.error,
                    error: props.touched && props.error,
                    'form-control-sm': props.small,
                    'input-group-control': props.prepend || props.prependLabel || props.append,
                    'input-group-control-prepend': props.prepend || props.prependLabel,
                    'input-group-control-append': props.append
                })}
                {...props}
            />
        </InputWrapper>
    );
};

export default ReactSelect;
