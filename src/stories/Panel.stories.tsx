import type { Meta, StoryObj } from "@storybook/react";

import Panel from "../components/Panel";
import fixtures from "govuk-frontend/govuk/components/panel/fixtures.json";

const meta: Meta<typeof Panel> = {
  title: "Panel",
  component: Panel,
};

export default meta;
type Story = StoryObj<typeof Panel>;

const primary: Story = { name: "default" };
const customHeadingLevel: Story = { name: "custom heading level" };

const stories: Story[] = [];
stories.push(primary);
stories.push(customHeadingLevel);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      titleHtml: fixture.options.titleHtml,
      text: fixture.options.text,
      titleText: fixture.options.titleText,
      headingLevel: fixture.options.headingLevel,
      html: fixture.options.html,
      classes: fixture.options.classes,
      attributes: fixture.options.attributes,
    };
  }
});

export { primary, customHeadingLevel };
