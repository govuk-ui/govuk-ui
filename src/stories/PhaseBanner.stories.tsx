import type { Meta, StoryObj } from "@storybook/react";

import PhaseBanner from "../components/PhaseBanner";
import fixtures from "govuk-frontend/govuk/components/phase-banner/fixtures.json";

const meta: Meta<typeof PhaseBanner> = {
  title: "PhaseBanner",
  component: PhaseBanner,
};

export default meta;
type Story = StoryObj<typeof PhaseBanner>;

const primary: Story = { name: "default" };

const stories: Story[] = [];
stories.push(primary);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      tag: fixture.options.tag,
      html: fixture.options.html,
      text: fixture.options.text,
      classes: fixture.options.classes,
      attributes: fixture.options.attributes,
    };
  }
});

export { primary };
