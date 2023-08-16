import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import {
  Typography,
  Legend,
  Checkboxes,
  CheckboxItem,
  DateInput,
  Hint,
  Input,
  Label,
  ErrorMessage,
} from "../../..";

const meta: Meta<typeof ErrorMessage> = {
  title: "Error message",
  component: ErrorMessage,
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

const primary: Story = {
  name: "default",
  render: (_args) => (
    <DateInput errorMessage="The date your passport was issued must be in the past">
      <Legend>
        <Typography component="h1" variant="l" classes="govuk-fieldset__legend--l">
          When was your passport issued?
        </Typography>
      </Legend>
      <Hint>For example, 27 3 2007</Hint>
    </DateInput>
  ),
};

const error: Story = {
  name: "default",
  render: (_args) => <ErrorMessage visuallyHiddenText="Gwall">Rhowch eich enw llawn</ErrorMessage>,
};

const legend: Story = {
  name: "default",
  render: (_args) => (
    <Checkboxes
      name="nationality"
      errorMessage="The date your passport was issued must be in the past"
    >
      <Legend>
        <Typography component="h1" variant="l" classes="govuk-fieldset__legend--l">
          What is your nationality?
        </Typography>
      </Legend>
      <Hint>If you have dual nationality, select all options that are relevant to you.</Hint>
      <CheckboxItem name="british" value="british">
        <Label>British</Label>
      </CheckboxItem>
      <CheckboxItem name="irish" value="irish">
        <Label>Irish</Label>
      </CheckboxItem>
      <CheckboxItem name="otherCountry" value="otherCountry">
        <Label>Citizen of another country</Label>
      </CheckboxItem>
    </Checkboxes>
  ),
};

const label: Story = {
  name: "default",
  render: (_args) => (
    <Input
      name="national-insurance-number"
      errorMessage="Enter a National Insurance number in the correct format"
    >
      <Label>National Insurance number</Label>
      <Hint>
        It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34
        56 C’.
      </Hint>
    </Input>
  ),
};

export { primary, error, legend, label };
