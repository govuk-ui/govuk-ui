import type { Meta, StoryObj } from "@storybook/react";

import ErrorMessage from "../components/ErrorMessage";
import fixtures from "govuk-frontend/govuk/components/error-message/fixtures.json";

const meta: Meta<typeof ErrorMessage> = {
  title: "ErrorMessage",
  component: ErrorMessage,
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

const primary: Story = { name: "default" };
const translated: Story = { name: "translated" };

const stories: Story[] = [];
stories.push(primary);
stories.push(translated);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      text: fixture.options.text,
      visuallyHiddenText: fixture.options.visuallyHiddenText,
      html: fixture.options.html,
      id: fixture.options.id,
      classes: fixture.options.classes,
      attributes: fixture.options.attributes,
    };
  }
});

export { primary, translated };
