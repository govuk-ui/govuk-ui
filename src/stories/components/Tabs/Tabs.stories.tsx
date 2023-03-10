import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Tabs, TabItem } from "../../../components";
import {Typography} from "../../../typography";

const meta: Meta<typeof Tabs> = {
  title: "Tabs",
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const primary: Story = {
  name: "default",
  render: (args) => (
    <Tabs>
      <TabItem label="First Tab" selected>
        <Typography>First Tab</Typography>
      </TabItem>
      <TabItem label="Second Tab">
        <Typography>Second Tab</Typography>
      </TabItem>
    </Tabs>
  )
};

export {
  primary
};
