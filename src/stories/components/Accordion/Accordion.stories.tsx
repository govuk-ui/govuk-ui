import type { Meta, StoryObj } from "@storybook/react";

import Accordion from "../../../components/Accordion";
import React from "react";

const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const primary: Story = {
  name: 'Accordion',
  args: {
  }
}

export {
  primary,
};
