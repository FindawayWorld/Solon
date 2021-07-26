import { useEffect } from 'react';

/**
 * Hook: useDisabledLinks
 * Allow anchor links with [disabled] prop to work as expected.
 * This will only work for <a href="" disabled></a>, buttons and other elements
 * that support the [disabled] prop are not affected.
 *
 * Combine this with CSS to set `pointer-events: none` and styling to convey "disabled" state.
 *
 * useDisabledLinks();
 */

const useDisabledLinks = () => {
    useEffect(() => {
        const preventDisabledAnchorClicks = (event) => {
            const attrDisabled = event.target.getAttribute('disabled');
            const tagName = event.target.tagName;
            if (attrDisabled !== null && tagName === 'A') {
                event.preventDefault();
                return false;
            }
        };
        window.document.addEventListener('click', preventDisabledAnchorClicks, true);
        return () => {
            window.document.removeEventListener('click', preventDisabledAnchorClicks);
        };
    }, []);
};

export default useDisabledLinks;
