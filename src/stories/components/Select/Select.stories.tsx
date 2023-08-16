import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Hint, Label, Select, SelectItem } from "../../..";

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

const primary: Story = {
  name: "default",
  render: (_args) => (
    <Select id="sort">
      <Label>Sort by</Label>
      <SelectItem value="published">Recently published</SelectItem>
      <SelectItem value="updated" selected>
        Recently updated
      </SelectItem>
      <SelectItem value="views">Most views</SelectItem>
      <SelectItem value="comments">Most comments</SelectItem>
    </Select>
  ),
};

const hint: Story = {
  name: "default",
  render: (_args) => (
    <Select id="subject">
      <Label>Choose location</Label>
      <Hint>This can be different to where you went before</Hint>
      <SelectItem value="choose" selected>
        Choose location
      </SelectItem>
      <SelectItem value="eastmidlands">East Midlands</SelectItem>
      <SelectItem value="eastofengland">East of England</SelectItem>
      <SelectItem value="london">London</SelectItem>
      <SelectItem value="northeast">North East</SelectItem>
      <SelectItem value="northwest">North West</SelectItem>
      <SelectItem value="southeast">South West</SelectItem>
      <SelectItem value="westmidlands">West Midlands</SelectItem>
      <SelectItem value="yorkshire">Yorkshire and the Humber</SelectItem>
    </Select>
  ),
};

export { primary, hint };
