import type { Meta, StoryObj } from "@storybook/react";

import BackLink from "../../../components/BackLink";
import React from "react";

const meta: Meta<typeof BackLink> = {
  title: "BackLink",
  component: BackLink,
};

export default meta;
type Story = StoryObj<typeof BackLink>;

const primary: Story = {
  name: 'Back link',
  args: {
    href: '#'
  }
}

export {
  primary,
};
