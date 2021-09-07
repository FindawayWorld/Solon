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

    const arr = labelValuePairs.filter((pair) => Array.isArray(pair) && pair.length === 2); // each pair must be an array of 2 elements

    if (!arr.length) {
        return null;
    }

    return (
        <dl id={id} className={classnames('list-description', listClass)} data-testid="list-description">
            {arr.map(([label, value], idx) => (
                <LabelValuePair
                    key={`${label.toLowerCase()}_${idx}`}
                    label={label}
                    value={value}
                    className={itemClass}
                />
            ))}
        </dl>
    );
};

export default DescriptionList;
