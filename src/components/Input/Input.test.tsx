import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './Input';
import Hint from "../Hint";
import Label from "../Label";

describe('BackLink component', () => {
  it("renders the input with default class", () => {
    render(<Input id="test-input" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass("govuk-input");
  });

  it("renders the input with additional class", () => {
    render(<Input id="test-input" classes="custom-class" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass("govuk-input custom-class");
  });

  it("renders the input with an error state", () => {
    render(<Input id="test-input" errorMessage="Error message" />);
    const inputElement = screen.getByRole("textbox");
    const errorMessageElement = screen.getByText("Error message");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass("govuk-input govuk-input--error");
    expect(errorMessageElement).toBeInTheDocument();
  });

  it("renders the input with a label", () => {
    render(
      <Input id="test-input">
        <Label>Test Label</Label>
      </Input>
    );
    const inputElement = screen.getByRole("textbox");
    const labelElement = screen.getByText("Test Label");
    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });

  it("renders the input with a hint", () => {
    render(
      <Input id="test-input">
        <Hint>Test Hint</Hint>
      </Input>
    );
    const inputElement = screen.getByRole("textbox");
    const hintElement = screen.getByText("Test Hint");
    expect(inputElement).toBeInTheDocument();
    expect(hintElement).toBeInTheDocument();
  });

  it("renders the input with prefix and suffix", () => {
    render(<Input id="test-input" prefix="£" suffix=".00" />);
    const inputElement = screen.getByRole("textbox");
    const prefixElement = screen.getByText("£");
    const suffixElement = screen.getByText(".00");
    expect(inputElement).toBeInTheDocument();
    expect(prefixElement).toBeInTheDocument();
    expect(suffixElement).toBeInTheDocument();
  });
});
