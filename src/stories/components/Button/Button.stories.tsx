import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "../../../components";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

const primary: Story = {
  name: "Primary button",
  render: (_args) => <Button>Save and continue</Button>,
};

const start: Story = {
  name: "Start button",
  render: (_args) => <Button isStartButton>Start now</Button>,
};

const secondary: Story = {
  name: "Secondary button",
  render: (_args) => <Button classes="govuk-button--secondary">Find address</Button>,
};

const warning: Story = {
  name: "Warning button",
  render: (_args) => <Button classes="govuk-button--warning">Delete account</Button>,
};

const disabled: Story = {
  name: "Disabled button",
  render: (_args) => <Button disabled>Disabled button</Button>,
};

const group: Story = {
  name: "Button group",
  render: (_args) => (
    <div className="govuk-button-group">
      <Button>Save and continue</Button>
      <Button classes="govuk-button--secondary">Save as draft</Button>
    </div>
  ),
};

const groupWithLink: Story = {
  name: "Button group with link",
  render: (_args) => (
    <div className="govuk-button-group">
      <Button>Continue</Button>
      <a href="#" className="govuk-link">
        Cancel
      </a>
    </div>
  ),
};

const preventDoubleClick: Story = {
  name: "Prevent double click button",
  render: (_args) => <Button preventDoubleClick>Confirm and send</Button>,
};

export { primary, start, secondary, warning, disabled, group, groupWithLink, preventDoubleClick };
