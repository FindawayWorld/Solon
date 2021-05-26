import React from 'react';
import classnames from 'classnames';
import { FiCheck } from 'react-icons/fi';

const StatusButton = ({
    successState = null,
    disabled = false,
    label = 'Submit',
    successLabel = 'Success',
    onClick = null,
    type = 'submit'
}) => {
    const getButtonText = () => {
        switch (successState) {
            case 'success':
                return (
                    <>
                        <FiCheck width="1em" height="1em" /> {successLabel}
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
            className={classnames('btn', {
                'btn-primary': successState !== 'error' && successState !== 'success',
                'btn-success': successState === 'success',
                'btn-danger': successState === 'error'
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
