import React from 'react';
import classnames from 'classnames';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';

const Modal = ({
    center = false,
    visible = false,
    innerClassName = '',
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
            <DialogContent className={classnames('modal-inner', innerClassName)}>
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

export default Modal;
