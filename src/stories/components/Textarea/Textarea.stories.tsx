import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Hint, Label, Textarea } from "../../..";

const meta: Meta<typeof Textarea> = {
  title: "Textarea",
  component: Textarea,
};

export default meta;
type Story = StoryObj<typeof Textarea>;

const primary: Story = {
  name: "default",
  render: (_args) => (
    <Textarea name="more-detail" id="more-detail">
      <Label classes="govuk-label--l">Can you provide more detail?</Label>
      <Hint>
        Do not include personal or financial information, like your National Insurance number or
        credit card details.
      </Hint>
    </Textarea>
  ),
};

const withRows: Story = {
  name: "default",
  render: (_args) => (
    <Textarea name="more-detail" id="more-detail" rows={8}>
      <Label classes="govuk-label--l">Can you provide more detail?</Label>
      <Hint>
        Do not include personal or financial information, like your National Insurance number or
        credit card details.
      </Hint>
    </Textarea>
  ),
};

const withLabel: Story = {
  name: "default",
  render: (_args) => (
    <Textarea name="more-detail">
      <Label>Can you provide more detail?</Label>
    </Textarea>
  ),
};

const withError: Story = {
  name: "default",
  render: (_args) => (
    <Textarea name="more-detail" errorMessage="Enter more detail">
      <Label classes="govuk-label--l">Can you provide more detail?</Label>
      <Hint>
        Do not include personal or financial information, like your National Insurance number or
        credit card details.
      </Hint>
    </Textarea>
  ),
};

export { primary, withRows, withLabel, withError };
