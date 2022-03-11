import { useTooltip, TooltipPopup } from '@reach/tooltip';
import Portal from '@reach/portal';
import React from 'react';

// https://reach.tech/tooltip/

const TOP = 'top';
const RIGHT = 'right';
const BOTTOM = 'bottom';

// position the tooltip, but collisions will win
const getTooltipStyle = (position = BOTTOM, triggerRect, tooltipRect) => {
    const margin = 30; // minimum margin between tooltip and edge of window

    if ([TOP, BOTTOM].includes(position)) {
        const triggerHorizontalCenter = triggerRect.left + triggerRect.width / 2;
        const left = triggerHorizontalCenter - tooltipRect.width / 2;
        const maxLeft = window.innerWidth - tooltipRect.width - margin;

        let nearestYValueOfTrigger = triggerRect[position];

        let top;

        if (position === TOP) {
            top = nearestYValueOfTrigger - 8 - tooltipRect.height + window.scrollY;
        }

        if (position === BOTTOM) {
            top = nearestYValueOfTrigger + 8 + window.scrollY;
        }

        return {
            left: Math.min(Math.max(2, left), maxLeft) + window.scrollX,
            top
        };
    }

    if (position === RIGHT) {
        const triggerVerticalCenter = triggerRect.top + triggerRect.height / 2;
        const top = triggerVerticalCenter - tooltipRect.height / 2;
        const maxTop = window.innerHeight - tooltipRect.height - margin;

        return {
            left:
                triggerRect.right +
                12 + // add enough offset so the tooltip and triangle overlap slightly
                window.scrollX,
            top: Math.min(Math.max(2, top), maxTop) + window.scrollY
        };
    }

    return null;
};

const Tooltip = ({ children = null, label = '', position = BOTTOM, 'aria-label': ariaLabel = '' }) => {
    // get the props from useTooltip
    const [trigger, tooltip] = useTooltip();

    // destructure off what we need to position the triangle
    const { isVisible, triggerRect } = tooltip;

    const getTriangleStyle = React.useCallback(
        ({ position = BOTTOM } = {}) => {
            if ([TOP, BOTTOM].includes(position)) {
                return {
                    left:
                        triggerRect &&
                        triggerRect.left -
                            10 + // the triangle has width 20 so we are offsetting by half to center it horizontally
                            triggerRect.width / 2,
                    top:
                        triggerRect &&
                        triggerRect[position] -
                            (position === TOP ? 10 : 0) + // the triangle has height 10 so if position is top, offset by 10
                            window.scrollY,
                    transform: position === TOP && 'rotate(180deg)'
                };
            }

            if (position === RIGHT) {
                return {
                    left: triggerRect && triggerRect.right,
                    top:
                        triggerRect &&
                        triggerRect.top -
                            5 + // the triangle has height 10 so we are offsetting by half to center it vertically
                            triggerRect.height / 2 +
                            window.scrollY,
                    transform: 'rotate(-90deg)'
                };
            }

            return null;
        },
        [triggerRect]
    );

    if (!label) {
        return children;
    }

    return (
        <>
            {/* 
                wrap all children in a div and then apply the trigger to the div
                this gives us a single trigger element
            */}
            {React.cloneElement(<span>{children}</span>, trigger)}

            {isVisible && (
                // The Triangle. We position it relative to the trigger, not the popup
                // so that collisions don't have a triangle pointing off to nowhere.
                // Using a Portal may seem a little extreme, but we can keep the
                // positioning logic simpler here instead of needing to consider
                // the popup's position relative to the trigger and collisions
                <Portal>
                    <div style={getTriangleStyle({ position })} className="tooltip-triangle" />
                </Portal>
            )}

            <TooltipPopup
                {...tooltip}
                label={label}
                aria-label={ariaLabel}
                className="tooltip"
                position={(...args) => getTooltipStyle(position, ...args)}
            />
        </>
    );
};

export default Tooltip;
