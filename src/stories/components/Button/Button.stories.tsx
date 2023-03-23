import type { Meta, StoryObj } from '@storybook/react';

import Button from '../../../components/Button';
import React from "react";

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

const primary: Story = {
  name: 'Primary button',
  args: {
    children: "Save and continue"
  }
}

const start: Story = {
  name: 'Start button',
  args: {
    isStartButton: true,
    children: "Start now"
  }
}

const secondary: Story = {
  name: 'Secondary button',
  args: {
    classes: 'govuk-button--secondary',
    children: "Find address"
  }
}

const warning: Story = {
  name: 'Warning button',
  args: {
    classes: 'govuk-button--warning',
    children: "Delete account"
  }
}

const disabled: Story = {
  name: 'Disabled button',
  args: {
    disabled: true,
    children: "Disabled button"
  }
}

const group = {
  name: 'Button group',
  render: () => (
    <div className="govuk-button-group">
      <Button>Save and continue</Button>
      <Button classes="govuk-button--secondary">Save as draft</Button>
    </div>
  )
}

const groupWithLink = {
  name: 'Button group with link',
  render: () => (
    <div className="govuk-button-group">
      <Button>Continue</Button>
      <a href="#" className="govuk-link">Cancel</a>
    </div>
  )
}

const preventDoubleClick: Story = {
  name: 'Prevent double click button',
  args: {
    preventDoubleClick: true,
    children: "Confirm and send"
  }
}

export {
  primary,
  start,
  secondary,
  warning,
  disabled,
  group,
  groupWithLink,
  preventDoubleClick,
}
