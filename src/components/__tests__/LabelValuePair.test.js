import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LabelValuePair } from '../DescriptionList';

test('handle null label', async () => {
    render(<LabelValuePair label={null} />);

    const getElement = () => {
        screen.getByTestId('label-value-pair');
    };

    expect(getElement).toThrow();
});

test('handle null value', async () => {
    render(<LabelValuePair value={null} />);

    const getElement = () => {
        screen.getByTestId('label-value-pair');
    };

    expect(getElement).toThrow();
});

test('render with custom class', async () => {
    render(<LabelValuePair label="label" value="value" className="custom-class" />);

    const pair = screen.getByTestId('label-value-pair');

    expect(pair).toHaveClass('custom-class');
});

test('component is accessible', async () => {
    render(<LabelValuePair label="label" value="value" />);

    const pair = screen.getByTestId('label-value-pair');

    // i wanted to use jest-dom's toHaveAccessibleDescription and toHaveAccesibleName matchers here
    // wasn't able to get them to work
    // expect(pair).toHaveAccessibleName();
    // expect(pair).toHaveAccessibleDescription()
    expect(pair).toHaveAttribute('role', 'group');
});
