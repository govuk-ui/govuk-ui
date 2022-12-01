import type { Meta, StoryObj } from "@storybook/react";

import Hint from "../components/Hint";
import fixtures from "govuk-frontend/govuk/components/hint/fixtures.json";

const meta: Meta<typeof Hint> = {
  title: "Hint",
  component: Hint,
};

export default meta;
type Story = StoryObj<typeof Hint>;

const primary: Story = { name: "default" };
const withHtml: Story = { name: "with html" };

const stories: Story[] = [];
stories.push(primary);
stories.push(withHtml);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      text: fixture.options.text,
      html: fixture.options.html,
      id: fixture.options.id,
      classes: fixture.options.classes,
      attributes: fixture.options.attributes,
    };
  }
});

export { primary, withHtml };
