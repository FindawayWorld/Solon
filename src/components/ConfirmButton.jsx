import React, { useState } from 'react';
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
    onClick = () => {}
}) => {
    const [buttonState, setButtonState] = useState(null);

    let isConfirm = buttonState === CONFIRM_STATES.CONFIRM || buttonState === CONFIRM_STATES.DONE;

    const handleTimeout = () => {
        setButtonState(CONFIRM_STATES.READY);
    };

    const [isReady, cancel, reset] = useTimeoutFn(handleTimeout, isConfirm ? timeout : false); // eslint-disable-line

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

    const handleClick = () => {
        switch (buttonState) {
            case CONFIRM_STATES.CONFIRM:
                setButtonState(CONFIRM_STATES.DONE);
                reset();
                onClick();
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

export default ConfirmButton;
