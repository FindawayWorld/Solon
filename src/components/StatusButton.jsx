import React from 'react';
import classnames from 'classnames';
import { FiCheck } from 'react-icons/fi';

const StatusButton = ({
    className = '',
    successState = null,
    disabled = false,
    label = 'Submit',
    successLabel = 'Success',
    onClick = null,
    type = 'submit',
    defaultClass = 'btn-primary',
    successClass = 'btn-success',
    dangerClass = 'btn-danger'
}) => {
    const getButtonText = () => {
        switch (successState) {
            case 'success':
                return (
                    <>
                        <FiCheck className="icon-align" width="1em" height="1em" /> {successLabel}
                    </>
                );
            case 'error':
                return 'Error!';
            default:
                return label;
        }
    };
    return (
        <button
            className={classnames('btn', className, {
                [defaultClass]: successState !== 'error' && successState !== 'success',
                [successClass]: successState === 'success',
                [dangerClass]: successState === 'error'
            })}
            type={type}
            disabled={disabled || successState === 'disabled'}
            onClick={onClick}
        >
            {getButtonText()}
        </button>
    );
};

export default StatusButton;
