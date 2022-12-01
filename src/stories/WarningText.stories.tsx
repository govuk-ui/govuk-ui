import type { Meta, StoryObj } from "@storybook/react";

import WarningText from "../components/WarningText";
import fixtures from "govuk-frontend/govuk/components/warning-text/fixtures.json";

const meta: Meta<typeof WarningText> = {
  title: "WarningText",
  component: WarningText,
};

export default meta;
type Story = StoryObj<typeof WarningText>;

const primary: Story = { name: "default" };
const multipleLines: Story = { name: "multiple lines" };

const stories: Story[] = [];
stories.push(primary);
stories.push(multipleLines);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      text: fixture.options.text,
      iconFallbackText: fixture.options.iconFallbackText,
      attributes: fixture.options.attributes,
      classes: fixture.options.classes,
      html: fixture.options.html,
    };
  }
});

export { primary, multipleLines };
