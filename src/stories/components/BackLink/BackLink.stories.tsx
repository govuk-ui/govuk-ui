import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { BackLink } from "../../../components";

const meta: Meta<typeof BackLink> = {
  title: "BackLink",
  component: BackLink,
};

export default meta;
type Story = StoryObj<typeof BackLink>;

const primary: Story = {
  name: "Back link",
  render: (_args) => <BackLink href="#" />,
};

export { primary };
