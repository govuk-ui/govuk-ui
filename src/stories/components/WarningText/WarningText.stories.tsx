import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { WarningText } from "../../../components";

const meta: Meta<typeof WarningText> = {
  title: "WarningText",
  component: WarningText,
};

export default meta;
type Story = StoryObj<typeof WarningText>;

const primary: Story = {
  name: "default",
  render: (_args) => (
    <WarningText iconFallbackText="Warning">
      You can be fined up to £5,000 if you do not register.
    </WarningText>
  ),
};

export { primary };
