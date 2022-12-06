import type { Meta, StoryObj } from "@storybook/react";

import BackLink from "../components/BackLink";
import fixtures from "govuk-frontend/govuk/components/back-link/fixtures.json";

const meta: Meta<typeof BackLink> = {
  title: "BackLink",
  component: BackLink,
};

export default meta;
type Story = StoryObj<typeof BackLink>;

const primary: Story = { name: "default" };
const withCustomText: Story = { name: "with custom text" };

const stories: Story[] = [];
stories.push(primary);
stories.push(withCustomText);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      href: fixture.options.href,
      text: fixture.options.text,
      classes: fixture.options.classes,
      attributes: fixture.options.attributes,
    };
  }
});

export { primary, withCustomText };
