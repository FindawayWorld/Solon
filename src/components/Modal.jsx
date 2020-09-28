import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';

const Modal = ({
    center = false,
    visible = false,
    innerClassName = '',
    label = undefined,
    onClose = () => {},
    children = [],
    showClose = true
}) => {
    return (
        <DialogOverlay
            isOpen={visible}
            onDismiss={onClose}
            className={classnames({
                'modal-centered': center
            })}
        >
            <DialogContent className={classnames('modal-inner', innerClassName)} aria-label={label}>
                {showClose && (
                    <button className="modal-close" onClick={onClose}>
                        <VisuallyHidden>Close</VisuallyHidden>
                        <span aria-hidden>&times;</span>
                    </button>
                )}
                {children}
            </DialogContent>
        </DialogOverlay>
    );
};

Modal.propTypes = {
    visible: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    showClose: PropTypes.bool,
    innerClassName: PropTypes.string,
    center: PropTypes.bool
};

export default Modal;
