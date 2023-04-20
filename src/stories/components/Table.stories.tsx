import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
 } from "../../components";

const meta: Meta<typeof Table> = {
  title: "Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

const primary: Story = { name: "default" };


export {
  primary
};
