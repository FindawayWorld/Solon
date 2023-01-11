import React from 'react';
import classnames from 'classnames';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';

interface ModalProps {
    visible: boolean;
    label: string;
    onClose: () => void;
    disableOverlayClick?: boolean;
    children: React.ReactNode;
    showClose?: boolean;
    innerClassName?: string;
    center?: boolean;
}

const Modal: React.FC<ModalProps> = ({
    center = false,
    children = [],
    disableOverlayClick = false,
    innerClassName = '',
    label = undefined,
    onClose = () => {},
    showClose = true,
    visible = false
}) => {
    return (
        <DialogOverlay
            isOpen={visible}
            onDismiss={disableOverlayClick ? () => {} : onClose}
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

export default Modal;
