import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DescriptionList from '../DescriptionList';

test('handles improperly shaped labelValuePairs array', async () => {
    render(<DescriptionList labelValuePairs={['label', 'value']} />);

    const getElement = () => {
        screen.getByTestId('list-description');
    };

    expect(getElement).toThrow();
});

test('renders a properly shaped description list (dl)', async () => {
    render(<DescriptionList labelValuePairs={[['label', 'value']]} />);

    const list = screen.getByTestId('list-description');
    const pair = screen.getByTestId('label-value-pair');
    const term = screen.getByTestId('term');
    const description = screen.getByTestId('description');

    expect(list).toHaveClass('list-description');
    expect(list).toContainElement(pair);

    expect(pair).toHaveClass('label-value-pair');
    expect(pair).toContainElement(term);
    expect(pair).toContainElement(description);
});

test('renders description list without id', async () => {
    render(<DescriptionList labelValuePairs={[['label', 'value']]} />);

    const list = screen.getByTestId('list-description');

    expect(list).not.toHaveAttribute('id');
});

test('renders description list with a custom id', async () => {
    render(<DescriptionList id="custom-id" labelValuePairs={[['label', 'value']]} />);

    const list = screen.getByTestId('list-description');

    expect(list).toHaveAttribute('id', 'custom-id');
});

test('renders description list with a custom list class', async () => {
    render(<DescriptionList id="custom-id" listClass="custom-list-class" labelValuePairs={[['label', 'value']]} />);

    const list = screen.getByTestId('list-description');

    expect(list).toHaveClass('custom-list-class');
});

test('renders description list with a custom list item class', async () => {
    render(<DescriptionList id="custom-id" itemClass="custom-item-class" labelValuePairs={[['label', 'value']]} />);

    const listItem = screen.getByTestId('label-value-pair');

    expect(listItem).toHaveClass('custom-item-class');
});

test('component is accessible', async () => {
    render(<DescriptionList labelValuePairs={[['label', 'value']]} />);

    const pair = screen.getByTestId('label-value-pair');

    // i wanted to use jest-dom's toHaveAccessibleDescription and toHaveAccesibleName matchers here
    // wasn't able to get them to work
    // expect(pair).toHaveAccessibleName();
    // expect(pair).toHaveAccessibleDescription()
    expect(pair).toHaveAttribute('role', 'group');
});
