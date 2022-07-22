import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FiCheck } from 'react-icons/fi';
import useTimeoutFn from '../hooks/useTimeout';

const CONFIRM_STATES = {
    CONFIRM: 'confirm',
    DONE: 'done',
    READY: null
};

const ConfirmButton = ({
    className = '',
    disabled = false,

    label = 'Submit',
    confirmLabel = 'Are you sure?',
    successLabel = 'Thanks!',

    type = 'submit',
    defaultClass = 'btn-primary',
    successClass = 'btn-success',
    confirmClass = 'btn-danger',
    timeout = 3000,
    onConfirm = () => {}
}) => {
    const [buttonState, setButtonState] = useState(null);

    const isConfirm = [CONFIRM_STATES.CONFIRM, CONFIRM_STATES.DONE].includes(buttonState);

    const handleTimeout = () => {
        setButtonState(CONFIRM_STATES.READY);
    };

    const [, , reset] = useTimeoutFn(handleTimeout, isConfirm ? timeout : false);

    const getButtonText = () => {
        switch (buttonState) {
            case CONFIRM_STATES.DONE:
                return (
                    <>
                        <FiCheck className="icon-align" width="1em" height="1em" /> {successLabel}
                    </>
                );
            case CONFIRM_STATES.CONFIRM:
                return confirmLabel;
            default:
                return label;
        }
    };

    const handleClick = async () => {
        switch (buttonState) {
            case CONFIRM_STATES.CONFIRM:
                await onConfirm();
                setButtonState(CONFIRM_STATES.DONE);
                reset();
                break;
            case CONFIRM_STATES.READY:
            default:
                setButtonState(CONFIRM_STATES.CONFIRM);
                break;
        }
    };

    return (
        <button
            className={classnames('btn btn-status', className, {
                [defaultClass]: buttonState === CONFIRM_STATES.READY,
                [confirmClass]: buttonState === CONFIRM_STATES.CONFIRM,
                [successClass]: buttonState === CONFIRM_STATES.DONE
            })}
            type="button"
            disabled={disabled || buttonState === CONFIRM_STATES.DONE}
            onClick={handleClick}
        >
            {getButtonText()}
        </button>
    );
};

ConfirmButton.propTypes = {
    label: PropTypes.string,
    confirmLabel: PropTypes.string,
    successLabel: PropTypes.string,

    defaultClass: PropTypes.string,
    confirmClass: PropTypes.string,
    successClass: PropTypes.string,

    onConfirm: PropTypes.func.isRequired
};

export default ConfirmButton;
