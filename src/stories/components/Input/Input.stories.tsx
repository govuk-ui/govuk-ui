import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Input from "../../../components/Input";
import {Hint, Label} from "../../../components";
import {Typography} from "../../../typography";

const meta: Meta<typeof Input> = {
  title: "Text input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

const primary: Story = {
  name: "Text input",
  args: {
    name: 'event-name',
    children: [
      <Label>
        <Typography component="h1" variant="l">What is the name of the event?</Typography>
      </Label>
    ]
  }
};

const withoutHeading: Story = {
  name: "Text input without heading",
  args: {
    name: 'event-name',
    children: [
      <Label>
        What is the name of the event?
      </Label>
    ]
  }
};

const fixedWidthInputs: Story = {
  name: "Fixed width inputs",
  render: (args) => (
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
  )
}

const fluidWidthInputs: Story = {
  name: "Fluid width inputs",
  render: (args) => (
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
  )
}

const hintText: Story = {
  name: "Text input with hint text",
  args: {
    name: 'event-name',
    children: [
      <Label>
        <Typography component="h1" variant="l">What is the name of the event?</Typography>
      </Label>,
      <Hint>
        The name you’ll use on promotional material
      </Hint>
    ]
  }
};

const number: Story = {
  name: "Text input with hint text",
  args: {
    name: 'account-number',
    inputmode: 'numeric',
    spellcheck: false,
    children: [
      <Label>
        <Typography component="h1" variant="l" classes="govuk-label--l">What is your account number?</Typography>
      </Label>,
      <Hint>
        Must be between 6 and 8 digits long
      </Hint>
    ]
  }
};

const numberWithDecimals: Story = {
  name: "Numeric text input with decimals",
  args: {
    name: 'weight',
    classes: "govuk-input--width-5",
    spellcheck: false,
    suffix: 'kg',
    children: [
      <Label>
        Weight, in kilograms
      </Label>
    ]
  }
};

export {
  primary,
  withoutHeading,
  fixedWidthInputs,
  fluidWidthInputs,
  hintText,
  number,
  numberWithDecimals,
};
