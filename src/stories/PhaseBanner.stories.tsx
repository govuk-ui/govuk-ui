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
  // TODO: Need to handle html inside a string from fixtures, possible solution:
  // https://www.npmjs.com/package/html-react-parser
  if (story.name === fixture.name) {
    story.args = {
      children: fixture.options.html,
      className: fixture.options.classes,
      phase: fixture.options.tag?.text,
      attributes: fixture.options.attributes,
    };
  }
});

export { primary };
