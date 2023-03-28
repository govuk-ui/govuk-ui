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
        id="example-textarea"
        maxLength={200}
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

const multipleQuestions: Story = {
  name: 'Multiple questions character count',
  render: () => (
    <>
      <CharacterCount
        id="example-textarea"
        maxLength={200}
      >
        <Label>
          <Typography component="h1" variant="body">
            Describe the nature of your event
          </Typography>
        </Label>
      </CharacterCount>
    </>
  )
}

const oneFiftyWords: Story = {
  name: 'One fifty words character count',
  render: () => (
    <>
      <CharacterCount
        id="example-textarea"
        maxWords={150}
      >
        <Label>
          <Typography component="h1" variant="l">
            Enter a job description
          </Typography>
        </Label>
      </CharacterCount>
    </>
  )
}

const threshold: Story = {
  name: 'Threshold character count',
  render: () => (
    <>
      <CharacterCount
        id="example-textarea"
        maxLength={112}
        threshold={75}
      >
        <Label>
          <Typography component="h1" variant="l">
            Can you provide more detail?
          </Typography>
        </Label>
        Type another letter into this field after this message to see the threshold feature
      </CharacterCount>
    </>
  )
}

const errorInPlace: Story = {
  name: 'Error in place character count',
  render: () => (
    <>
      <CharacterCount
        id="example-textarea"
        maxWords={150}
        errorMessage="Job description must be 350 characters or less"
      >
        <Label>
          <Typography component="h1" variant="l">
            Enter a job description
          </Typography>
        </Label>
      </CharacterCount>
    </>
  )
}

export {
  primary,
  multipleQuestions,
  oneFiftyWords,
  threshold,
  errorInPlace,
}
