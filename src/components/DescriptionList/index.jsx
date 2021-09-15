import React from 'react';
import classnames from 'classnames';
import { useId } from '@reach/auto-id';
import LabelValuePair from './LabelValuePair';

const DescriptionList = ({
    // accepts an array of arrays where for each array,
    // array[0] = label
    // array[1] = value
    labelValuePairs = [],
    id = undefined,
    listClass = '',
    itemClass = ''
}) => {
    id = useId(id);

    if (!Array.isArray(labelValuePairs)) {
        return null;
    }

    // each pair must be an array of 2 elements
    // the first element must be a string or a react element
    const arr = labelValuePairs.filter(
        (pair) =>
            Array.isArray(pair) &&
            pair.length === 2 &&
            (typeof pair[0] === 'string' || pair[0].$$typeof === Symbol.for('react.element'))
    );

    if (!arr.length) {
        return null;
    }

    return (
        <dl id={id} className={classnames('list-description', listClass)} data-testid="list-description">
            {arr.map(([label, value], idx) => {
                let key;
                if (label.$$typeof === Symbol.for('react.element')) {
                    key = label.key || 'react-element';
                } else {
                    key = label.toLowerCase();
                }

                return <LabelValuePair key={`${key}_${idx}`} label={label} value={value} className={itemClass} />;
            })}
        </dl>
    );
};

export default DescriptionList;
