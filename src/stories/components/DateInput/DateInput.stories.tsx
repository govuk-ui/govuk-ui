import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Hint, Legend, DateInput } from "../../..";

const meta: Meta<typeof DateInput> = {
  title: "DateInput",
  component: DateInput,
};

export default meta;
type Story = StoryObj<typeof DateInput>;

const primary: Story = {
  name: "Primary date input",
  render: (_args) => (
    <DateInput id="example-dateinput">
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        When was your passport issued?
      </Legend>
      <Hint>For example, 27 3 2007</Hint>
    </DateInput>
  ),
};

const twoQuestions: Story = {
  name: "Two questions date input",
  render: (_args) => (
    <DateInput id="example-two-questions-dateinput">
      <Legend>When was your passport issued?</Legend>
      <Hint>For example, 27 3 2007</Hint>
    </DateInput>
  ),
};

const birthday: Story = {
  name: "Birthday date input",
  render: (_args) => (
    <DateInput
      id="example-birthday-dateinput"
      autocompleteDay="bday-day"
      autocompleteMonth="bday-month"
      autocompleteYear="bday-year"
    >
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        What is your date of birth?
      </Legend>
      <Hint>For example, 31 3 1980</Hint>
    </DateInput>
  ),
};

const errorExample: Story = {
  name: "Error date input",
  render: (_args) => (
    <DateInput
      id="example-error-dateinput"
      errorMessage="The date your passport was issued must be in the past"
      value={{
        "example-error-dateinput-day": "6",
        "example-error-dateinput-month": "3",
        "example-error-dateinput-year": "2076",
      }}
    >
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        When was your passport issued?
      </Legend>
      <Hint>For example, 27 3 2007</Hint>
    </DateInput>
  ),
};

const errorExampleYear: Story = {
  name: "Error year date input",
  render: (_args) => (
    <DateInput
      id="example-error-year-dateinput"
      errorMessage="The date your passport was issued must include a year"
      errorYear
      value={{
        "example-error-year-dateinput-day": "6",
        "example-error-year-dateinput-month": "3",
      }}
    >
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        When was your passport issued?
      </Legend>
      <Hint>For example, 27 3 2007</Hint>
    </DateInput>
  ),
};

export { primary, twoQuestions, birthday, errorExample, errorExampleYear };
