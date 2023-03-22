import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BackLink from './BackLink';

describe('BackLink component', () => {
  test('renders without crashing', () => {
    render(<BackLink href="/" />);
  });

  test('renders the correct text', () => {
    const text = 'Go back';
    render(<BackLink href="/" text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('renders the default text if no text is provided', () => {
    render(<BackLink href="/" />);
    expect(screen.getByText('Back')).toBeInTheDocument();
  });

  test('applies the passed class', () => {
    const className = 'custom-class';
    render(<BackLink href="/" classes={className} />);
    expect(screen.getByText('Back')).toHaveClass('govuk-back-link', className);
  });

  test('applies the passed attributes', () => {
    const ariaLabel = 'Go back';
    render(<BackLink href="/" aria-label={ariaLabel} />);
    expect(screen.getByText('Back')).toHaveAttribute('aria-label', ariaLabel);
  });

  test('sets the correct href attribute', () => {
    const href = '/previous-page';
    render(<BackLink href={href} />);
    expect(screen.getByText('Back')).toHaveAttribute('href', href);
  });
});
