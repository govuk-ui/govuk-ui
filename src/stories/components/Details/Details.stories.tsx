import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Details, DetailsSummary } from "../../../components";

const meta: Meta<typeof Details> = {
  title: "Details",
  component: Details,
};

export default meta;
type Story = StoryObj<typeof Details>;

const primary: Story = {
  name: "Details",
  render: (_args) => (
    <Details>
      <DetailsSummary>Help with nationality</DetailsSummary>, We need to know your nationality so we
      can work out which elections you’re entitled to vote in. If you cannot provide your
      nationality, you’ll have to send copies of identity documents through the post.
    </Details>
  ),
};

export { primary };
