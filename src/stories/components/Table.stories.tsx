import type { Meta, StoryObj } from "@storybook/react";

import Table from "../../components/Table";
import fixtures from "govuk-frontend/govuk/components/table/fixtures.json";

const meta: Meta<typeof Table> = {
  title: "Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

const primary: Story = { name: "default" };
const tableWithHead: Story = { name: "table with head" };
const tableWithHeadAndCaption: Story = { name: "table with head and caption" };

const stories: Story[] = [];
stories.push(primary);
stories.push(tableWithHead);
stories.push(tableWithHeadAndCaption);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      rows: fixture.options.rows,
      head: fixture.options.head,
      caption: fixture.options.caption,
      captionClasses: fixture.options.captionClasses,
      firstCellIsHeader: fixture.options.firstCellIsHeader,
      classes: fixture.options.classes,
      attributes: fixture.options.attributes,
    };
  }
});

export { primary, tableWithHead, tableWithHeadAndCaption };
