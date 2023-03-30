import type { Meta, StoryObj } from '@storybook/react';

import DateInput from '../../../components/DateInput';
import React from "react";
import { Hint, Label, Typography } from '../../..';

const meta: Meta<typeof DateInput> = {
  title: 'DateInput',
  component: DateInput,
};

export default meta;
type Story = StoryObj<typeof DateInput>;

const primary: Story = {
  name: 'Primary date input',
  render: (args) => (
    <>
      <Label>
        <Typography component="h1" variant="l">
          When was your passport issued?
        </Typography>
      </Label>
      <Hint>
        For example, 27 3 2007
      </Hint>
      <DateInput
        id="example-dateinput"
      />
    </>  
  )
}

const twoQuestions: Story = {
  name: 'Two questions date input',
  render: (args) => (
    <>
      <Label>
        <Typography>
          When was your passport issued?
        </Typography>
      </Label>
      <Hint>
        For example, 27 3 2007
      </Hint>
      <DateInput
        id="example-two-questions-dateinput"
      />
    </>  
  )
}

const birthday: Story = {
  name: 'Birthday date input',
  render: (args) => (
    <>
      <Label>
        <Typography component="h1" variant="l">
          What is your date of birth?
        </Typography>
      </Label>
      <Hint>
        For example, 31 3 1980
      </Hint>
      <DateInput
        id="example-birthday-dateinput"
        autocompleteDay="bday-day"
        autocompleteMonth="bday-month"
        autocompleteYear="bday-year"
      />
    </>  
  )
}

const errorExample: Story = {
  name: 'Error date input',
  render: (args) => (
    <>
      <Label>
        <Typography component="h1" variant="l">
          When was your passport issued?
        </Typography>
      </Label>
      <Hint>
        For example, 27 3 2007
      </Hint>
      <DateInput
        id="example-error-dateinput"
        errorMessage="The date your passport was issued must be in the past"
      />
    </>  
  )
}

export {
  primary,
  twoQuestions,
  birthday,
  errorExample,
}
