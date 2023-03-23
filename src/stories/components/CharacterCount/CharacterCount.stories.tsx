import type { Meta, StoryObj } from '@storybook/react';

import CharacterCount from '../../../components/CharacterCount';
import React from "react";
import { Hint, Label, Typography } from '../../..';

const meta: Meta<typeof CharacterCount> = {
  title: 'CharacterCount',
  component: CharacterCount,
};

export default meta;
type Story = StoryObj<typeof CharacterCount>;

const primary: Story = {
  name: 'Primary character count',
  render: () => (
    <>
      <CharacterCount
        maxlength={200}
      >
        <Label>
          <Typography component="h1" variant="l">
            Can you provide more detail?
          </Typography>
        </Label>
        <Hint>
        Do not include personal or financial information like your National Insurance number or credit card details.
        </Hint>
      </CharacterCount>
    </>
  )
}

export {
  primary,
}
