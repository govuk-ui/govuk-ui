import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hint from './Hint';

describe('Hint component', () => {
  test('renders without crashing', () => {
    render(<Hint />);
  });

  test('renders the correct content', () => {
    const content = 'This is a hint.';
    render(<Hint>{content}</Hint>);
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  test('applies the passed class', () => {
    const className = 'custom-class';
    render(<Hint classes={className}>Hint with class</Hint>);
    expect(screen.getByText('Hint with class')).toHaveClass('govuk-hint', className);
  });

  test('applies the passed ID', () => {
    const id = 'hint-id';
    render(<Hint id={id}>Hint with ID</Hint>);
    expect(screen.getByText('Hint with ID')).toHaveAttribute('id', id);
  });
});
