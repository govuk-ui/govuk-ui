import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Typography, Panel } from "../../..";

const meta: Meta<typeof Panel> = {
  title: "Panel",
  component: Panel,
};

export default meta;
type Story = StoryObj<typeof Panel>;

const primary: Story = {
  name: "Primary panel",
  render: (_args) => (
    <Panel id="example-panel">
      <Typography variant="l" style={{ color: "#FFF" }}>
        Application complete
      </Typography>
      <Typography style={{ color: "#FFF", marginBottom: 0 }}>Your reference number</Typography>
      <Typography style={{ color: "#FFF", fontWeight: "bold" }}>HDJ2123F</Typography>
    </Panel>
  ),
};

export { primary };
