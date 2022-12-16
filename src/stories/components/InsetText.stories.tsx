import type { Meta, StoryObj } from "@storybook/react";

import InsetText from "../../components/InsetText";
import fixtures from "govuk-frontend/govuk/components/inset-text/fixtures.json";

const meta: Meta<typeof InsetText> = {
  title: "InsetText",
  component: InsetText,
};

export default meta;
type Story = StoryObj<typeof InsetText>;

const primary: Story = { name: "default" };

const stories: Story[] = [];
stories.push(primary);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      children: fixture.options.text,
      classes: fixture.options.classes,
      id: fixture.options.id,
      attributes: fixture.options.attributes,
    };
  }
});

export { primary };
