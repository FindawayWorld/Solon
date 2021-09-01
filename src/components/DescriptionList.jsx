import React from 'react';
import classnames from 'classnames';

export const LabelValuePair = ({ label = null, value = null, itemClass = '' }) => (
    <div className={classnames('label-value-pair', itemClass)} data-testid="label-value-pair" role="group">
        <dt data-testid="term">{label}</dt>
        <dd data-testid="description">{value}</dd>
    </div>
);

const DescriptionList = ({
    // accepts an array of arrays where for each array,
    // array[0] = label
    // array[1] = value
    labelValuePairs = [],
    id = '',
    listClass = '',
    itemClass = ''
}) => {
    const arr = labelValuePairs.filter((pair) => Array.isArray(pair) && pair.length === 2); // each pair must be an array of 2 elements

    if (!arr.length) {
        return null;
    }

    return (
        <dl
            id={id || undefined}
            className={classnames('list-description', listClass)}
            data-testid="list-description"
            aria-label="description list"
        >
            {arr.map(([label, value], idx) => (
                <LabelValuePair key={idx} label={label} value={value} itemClass={itemClass} />
            ))}
        </dl>
    );
};

export default DescriptionList;
