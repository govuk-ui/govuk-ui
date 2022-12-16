import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Select from "../../components/Select";
import fixtures from "govuk-frontend/govuk/components/select/fixtures.json";

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

const primary: Story = { name: "default" };
const withNoItems: Story = { name: "with no items" };
const withSelectedValue: Story = { name: "with selected value" };
const withHintTextAndErrorMessage: Story = { name: "with hint text and error message" };
const withLabelAsPageHeading: Story = { name: "with label as page heading" };
const withFullWidthOverride: Story = { name: "with full width override" };
const withOptionalFormgroupClasses: Story = { name: "with optional formgroup classes" };

const stories: Story[] = [];
stories.push(primary);
stories.push(withNoItems);
stories.push(withSelectedValue);
stories.push(withHintTextAndErrorMessage);
stories.push(withLabelAsPageHeading);
stories.push(withFullWidthOverride);
stories.push(withOptionalFormgroupClasses);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      id: fixture.options.id,
      name: fixture.options.name,
      children: fixture.options.items?.map((o:any) => {
        return (
          <option value={o.value} selected={o.selected} disabled={o.disabled}>{o.text}</option>
        )
      }),
      classes: fixture.options.classes,
      describedBy: fixture.options.describedBy,
      attributes: fixture.options.attributes,
    };
  }
});

export {
  primary,
  withNoItems,
  withSelectedValue,
  withHintTextAndErrorMessage,
  withLabelAsPageHeading,
  withFullWidthOverride,
  withOptionalFormgroupClasses,
};
