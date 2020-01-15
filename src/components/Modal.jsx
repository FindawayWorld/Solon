import React, {useEffect} from 'react';
import classnames from 'classnames';


// Test to deterimine if we have a hidden scrollbar (MacOS, mobile/touch);
export const testForHiddenScrollbar = () => {
    let elem = document.createElement('div');
    elem.style.cssText = 'width: 100px; height: 100px; overflow: scroll;top: -9999999rem; left: -999999rem; position:absolute;';
    document.body.appendChild(elem);
    const result = elem.offsetWidth === elem.clientWidth;
    document.body.removeChild(elem);
    return result;
};

// Public API
export const bodyScrollToggle = {
    // Disable scrolling
    // http://stackoverflow.com/a/3968772/59160
    disable: () => {
        if (typeof window === 'undefined') return;
        window.document.body.style.overflow = 'hidden';
        // if we have a visible scrollbar add 15px padding to prevent content jumping.
        window.document.body.style.paddingRight = `${testForHiddenScrollbar() ? 0 : 15}px`;
    },
    // Re-enable scrolling
    enable: () => {
        if (typeof window === 'undefined') return;
        window.document.body.style.overflow = '';
        window.document.body.style.paddingRight = '';
    }
};



const Modal = ({
    center = false,
    visible = false,
    innerClassName = '',
    onClose = () => {},
    children = [],
    showClose = true
}) => {
    useEffect(() => {
        if (visible) {
            bodyScrollToggle.disable();
        } else {
            bodyScrollToggle.enable();
        }
        return () => {
            bodyScrollToggle.enable();
        }
    }, [visible]);
    return (
        <div className={classnames('modal', {
            'modal-centered': center,
            'modal-open': visible
        })}>
            <div className="modal-window">
                <div className={classnames('modal-inner', innerClassName)}>
                    {showClose && <button className="modal-close" onClick={onClose}>&times;</button>}
                    {visible && children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
