import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Hint, Label, Input } from "../../..";

const meta: Meta<typeof Input> = {
  title: "Text input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

const primary: Story = {
  name: "Text input",
  render: (_args) => (
    <Input name="event-name">
      <Label isPageHeading classes="govuk-label--l">
        What is the name of the event?
      </Label>
    </Input>
  ),
};

const withoutHeading: Story = {
  name: "Text input without heading",
  render: (_args) => (
    <Input name="event-name">
      <Label>What is the name of the event?</Label>
    </Input>
  ),
};

const fixedWidthInputs: Story = {
  name: "Fixed width inputs",
  render: (_args) => (
    <>
      <Input name="width-20" classes="govuk-input--width-20">
        <Label>20 character width</Label>
      </Input>
      <Input name="width-10" classes="govuk-input--width-10">
        <Label>10 character width</Label>
      </Input>
      <Input name="width-5" classes="govuk-input--width-5">
        <Label>5 character width</Label>
      </Input>
      <Input name="width-4" classes="govuk-input--width-4">
        <Label>4 character width</Label>
      </Input>
      <Input name="width-3" classes="govuk-input--width-3">
        <Label>3 character width</Label>
      </Input>
      <Input name="width-2" classes="govuk-input--width-2">
        <Label>2 character width</Label>
      </Input>
    </>
  ),
};

const fluidWidthInputs: Story = {
  name: "Fluid width inputs",
  render: (_args) => (
    <>
      <Input name="full" classes="govuk-!-width-full">
        <Label>Full width</Label>
      </Input>
      <Input name="three-quarters" classes="govuk-!-width-three-quarters">
        <Label>Three-quarters width</Label>
      </Input>
      <Input name="two-thirds" classes="govuk-!-width-two-thirds">
        <Label>Two-thirds width</Label>
      </Input>
      <Input name="one-half" classes="govuk-!-width-one-half">
        <Label>One-half width</Label>
      </Input>
      <Input name="one-third" classes="govuk-!-width-one-third">
        <Label>One-third width</Label>
      </Input>
      <Input name="one-quarter" classes="govuk-!-width-one-quarter">
        <Label>One-quarter width</Label>
      </Input>
    </>
  ),
};

const hintText: Story = {
  name: "Text input with hint text",
  args: {
    name: "event-name",
    children: [
      <Label isPageHeading classes="govuk-label--l">
        What is the name of the event?
      </Label>,
      <Hint>The name you’ll use on promotional material</Hint>,
    ],
  },
};

const number: Story = {
  name: "Text input with hint text",
  render: (_args) => (
    <Input name="account-number" spellcheck={false} inputmode="numeric">
      <Label isPageHeading classes="govuk-label--l">
        What is your account number?
      </Label>
      <Hint>Must be between 6 and 8 digits long</Hint>
    </Input>
  ),
};

const numberWithDecimals: Story = {
  name: "Numeric text input with decimals",
  render: (_args) => (
    <Input name="weight" classes="govuk-input--width-5" spellcheck={false} suffix="kg">
      <Label>Weight, in kilograms</Label>
    </Input>
  ),
};

const prefixAndSuffix: Story = {
  name: "Prefix and suffix",
  render: (_args) => (
    <Input
      name="weight"
      classes="govuk-input--width-5"
      spellcheck={false}
      suffix="per item"
      prefix="£"
    >
      <Label isPageHeading classes="govuk-label--l">
        What is the cost per item, in pounds?
      </Label>
    </Input>
  ),
};

const prefix: Story = {
  name: "Prefix",
  render: (_args) => (
    <Input name="cost" classes="govuk-input--width-5" spellcheck={false} prefix="£">
      <Label isPageHeading classes="govuk-label--l">
        What is the cost in pounds?
      </Label>
    </Input>
  ),
};

const suffix: Story = {
  name: "Suffix",
  render: (_args) => (
    <Input name="weight" classes="govuk-input--width-5" spellcheck={false} suffix="kg">
      <Label isPageHeading classes="govuk-label--l">
        What is the weight in kilograms?
      </Label>
    </Input>
  ),
};

const autocomplete: Story = {
  name: "Autocomplete",
  render: (_args) => (
    <Input name="postal-code" classes="govuk-input--width-10" autocomplete="postal-code">
      <Label>Postcode</Label>
    </Input>
  ),
};

const spellcheck: Story = {
  name: "Spellcheck",
  render: (_args) => (
    <Input name="name" spellcheck={false}>
      <Label>Reference number</Label>
    </Input>
  ),
};

const error: Story = {
  name: "Error message",
  render: (_args) => (
    <Input name="event-name" errorMessage="Enter an event name">
      <Label isPageHeading classes="govuk-label--l">
        What is the name of the event?
      </Label>
      <Hint>The name you’ll use on promotional material</Hint>
    </Input>
  ),
};

const prefixSuffixError: Story = {
  name: "Error message on prefix and suffix",
  render: (_args) => (
    <Input
      name="cost-per-item-error"
      classes="govuk-input--width-5"
      spellcheck={false}
      suffix="per item"
      prefix="£"
      errorMessage="Enter a cost per item, in pounds"
    >
      <Label isPageHeading classes="govuk-label--l">
        What is the cost per item, in pounds?
      </Label>
    </Input>
  ),
};

export {
  primary,
  withoutHeading,
  fixedWidthInputs,
  fluidWidthInputs,
  hintText,
  number,
  numberWithDecimals,
  prefixAndSuffix,
  prefix,
  suffix,
  autocomplete,
  spellcheck,
  error,
  prefixSuffixError,
};
