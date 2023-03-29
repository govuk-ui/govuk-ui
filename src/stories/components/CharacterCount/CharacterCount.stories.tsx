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
  render: (args) => (
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
  )
}

const multipleQuestions: Story = {
  name: 'Multiple questions character count',
  render: (args) => (
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
  )
}

const oneFiftyWords: Story = {
  name: 'One fifty words character count',
  render: (args) => (
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
  )
}

const threshold: Story = {
  name: 'Threshold character count',
  render: (args) => (
    <CharacterCount
      id="example-textarea"
      maxLength={112}
      threshold={75}
      value="Type another letter into this field after this message to see the threshold feature"
    >
      <Label>
        <Typography component="h1" variant="l">
          Can you provide more detail?
        </Typography>
      </Label>
    </CharacterCount>
  )
}

const errorInPlace: Story = {
  name: 'Error in place character count',
  render: (args) => (
    <CharacterCount
      id="example-textarea"
      maxWords={150}
      errorMessage="Job description must be 350 characters or less"
      value="A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
    >
      <Label>
        <Typography component="h1" variant="l">
          Enter a job description
        </Typography>
      </Label>
    </CharacterCount>
  )
}

export {
  primary,
  multipleQuestions,
  oneFiftyWords,
  threshold,
  errorInPlace,
}
