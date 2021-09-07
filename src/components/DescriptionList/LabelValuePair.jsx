import React from 'react';
import classnames from 'classnames';

const LabelValuePair = ({ label = null, value = null, className = '' }) => {
    if (label == null || value == null) {
        return null;
    }
    return (
        <div className={classnames('label-value-pair', className)} data-testid="label-value-pair" role="group">
            <dt data-testid="term">{label}</dt>
            <dd data-testid="description">{value}</dd>
        </div>
    );
};

export default LabelValuePair;
