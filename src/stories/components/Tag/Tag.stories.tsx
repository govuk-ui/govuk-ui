import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
  Tag,
  Table,
  TableHeader,
  TableRow,
  TableCell
} from "../../../components";

const meta: Meta<typeof Tag> = {
  title: "Tag",
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;
type TableStory = StoryObj<typeof Table>;

const primary: Story = { 
  name: "default",
  args: {
    children: "COMPLETED"
  }
};

export { primary };
