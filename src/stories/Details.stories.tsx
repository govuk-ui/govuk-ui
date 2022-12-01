import type { Meta, StoryObj } from "@storybook/react";

import Details from "../components/Details";
import fixtures from "govuk-frontend/govuk/components/details/fixtures.json";

const meta: Meta<typeof Details> = {
  title: "Details",
  component: Details,
};

export default meta;
type Story = StoryObj<typeof Details>;

const primary: Story = { name: "default" };
const expanded: Story = { name: "expanded" };
const withHtml: Story = { name: "with html" };

const stories: Story[] = [];
stories.push(primary);
stories.push(expanded);
stories.push(withHtml);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      summaryText: fixture.options.summaryText,
      text: fixture.options.text,
      id: fixture.options.id,
      open: fixture.options.open,
      html: fixture.options.html,
      summaryHtml: fixture.options.summaryHtml,
      classes: fixture.options.classes,
      attributes: fixture.options.attributes,
    };
  }
});

export { primary, expanded, withHtml };
