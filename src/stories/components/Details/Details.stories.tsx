import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Details from "../../../components/Details";
import DetailsSummary from "../../../components/DetailsSummary/DetailsSummary";
import Typography from "../../../typography/Typography";

const meta: Meta<typeof Details> = {
  title: "Details",
  component: Details,
};

export default meta;
type Story = StoryObj<typeof Details>;

const primary: Story = {
  name: "Details",
  args: {
    children: [
      <DetailsSummary>Help with nationality</DetailsSummary>,
      "We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post."
    ]
  }
};

export {
  primary,
};
