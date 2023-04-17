import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tag from './Tag';

describe('Tag component', () => {
  test('renders without crashing', () => {
    render(<Tag />);
  });

  it("renders the component with default class", () => {
    render(<Tag>Test Tag</Tag>);
    const tagElement = screen.getByText("Test Tag");
    expect(tagElement).toBeInTheDocument();
    expect(tagElement).toHaveClass("govuk-tag");
  });

  it("applies passed additional classes", () => {
    render(<Tag className="custom-class">Test Tag</Tag>);
    const tagElement = screen.getByText("Test Tag");
    expect(tagElement).toBeInTheDocument();
    expect(tagElement).toHaveClass("govuk-tag custom-class");
  });

  it("applies passed attributes", () => {
    render(
        <Tag className="custom-class" data-testid="testTag">
          Test Tag
        </Tag>
    );
    const tagElement = screen.getByText("Test Tag");
    expect(tagElement).toBeInTheDocument();
    expect(tagElement).toHaveClass("govuk-tag custom-class");
  });
});
