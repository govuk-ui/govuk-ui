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
          Can you provide more detail?
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

export {
  primary,
}
