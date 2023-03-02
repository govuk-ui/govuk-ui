import type { Meta, StoryObj } from "@storybook/react";

import ErrorMessage from "../../../components/ErrorMessage";
import {Checkboxes, CheckboxItem, DateInput, Hint, Input, Label} from "../../../components";
import {Legend} from "../../../layout";
import {Typography} from "../../../typography";
import React from "react";

const meta: Meta<typeof ErrorMessage> = {
  title: "Error message",
  component: ErrorMessage,
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

const primary: Story = {
  name: "default",
  render: (args) => (
    <DateInput errorMessage="The date your passport was issued must be in the past">
      <Legend>
        <Typography component="h1" variant="l" classes="govuk-fieldset__legend--l">
          When was your passport issued?
        </Typography>
      </Legend>
      <Hint>
        For example, 27 3 2007
      </Hint>
    </DateInput>
  )
};

const error: Story = {
  name: "default",
  args: {
    children: "Rhowch eich enw llawn",
    visuallyHiddenText: "Gwall"
  }
};

const legend: Story = {
  name: "default",
  render: (args) => (
    <Checkboxes name="nationality" errorMessage="The date your passport was issued must be in the past">
      <Legend>
        <Typography component="h1" variant="l" classes="govuk-fieldset__legend--l">
          What is your nationality?
        </Typography>
      </Legend>
      <Hint>
        If you have dual nationality, select all options that are relevant to you.
      </Hint>
      <CheckboxItem name="british" value="british">
        <Label>
          British
        </Label>
      </CheckboxItem>
      <CheckboxItem name="irish" value="irish">
        <Label>
          Irish
        </Label>
      </CheckboxItem>
      <CheckboxItem name="otherCountry" value="otherCountry">
        <Label>
          Citizen of another country
        </Label>
      </CheckboxItem>
    </Checkboxes>
  )
};

const label: Story = {
  name: "default",
  render: (args) => (
    <Input name="national-insurance-number" errorMessage="Enter a National Insurance number in the correct format">
      <Label>
        National Insurance number
      </Label>
      <Hint>
        It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
      </Hint>
    </Input>
  )
};



export {
  primary,
  error,
  legend,
  label,
};
