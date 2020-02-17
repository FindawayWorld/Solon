import React from 'react';
import { useRef, useEffect } from 'react';
/*
    Helper hook to inspect component re-rendering behavior.
*/
export function useWhyDidYouUpdate(name, props) {
    // Get a mutable ref object where we can store props ...
    // ... for comparison next time this hook runs.
    const previousProps = useRef();

    useEffect(() => {
        if (previousProps.current) {
            // Get all keys from previous and current props
            const allKeys = Object.keys({ ...previousProps.current, ...props });
            // Use this object to keep track of changed props
            const changesObj = {};
            // Iterate through keys
            allKeys.forEach(key => {
                // If previous is different from current
                if (previousProps.current[key] !== props[key]) {
                    // Add to changesObj
                    changesObj[key] = {
                        from: previousProps.current[key],
                        to: props[key],
                    };
                }
            });

            // If changesObj not empty then output to console
            if (Object.keys(changesObj).length) {
                console.log('[why-did-you-update]', name, changesObj);
            }
        }

        // Finally update previousProps with current props for next hook call
        previousProps.current = props;
    });
}

/*
    To implement this helper hook:
*/
const MyFunctionalComponent = props => {
    useWhyDidYouUpdate('MyFunctionalComponent', props);
    /*
        If a change in props caused the component to re-render, this hook will log to the console:
        "MyFunctionalComponent"
        {
            from: {...propsBeforeReRender}
            to: {...propsAfterReRender}
        }

        You can then visually inspect the from/to objects to determine the cause of the re-render.
    */
    return (
        <div>
            <h3>Hello MyFunctionalComponent</h3>
        </div>
    );
};
