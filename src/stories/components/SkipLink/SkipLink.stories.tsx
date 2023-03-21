import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import SkipLink from "../../../components/SkipLink";
import {Typography} from "../../../typography";

const meta: Meta<typeof SkipLink> = {
  title: "SkipLink",
  component: SkipLink,
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

const primary: Story = {
  name: "default",
  render: (args) => (
    <>
      <Typography>To view the skip link component tab to this example, or click inside this example and press tab.</Typography>
      <SkipLink href="#">Skip to main content</SkipLink>
    </>
  ),
};

export {
  primary
};
