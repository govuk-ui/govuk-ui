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
      <Tabs title="Claims">
        <TabItem label='New Claims' selected>
          <p>New claims</p>
        </TabItem>
        <TabItem label='Old Claims'>
          <p>Old claims</p>
        </TabItem>
      </Tabs>
  )
};

export {
  primary
};
