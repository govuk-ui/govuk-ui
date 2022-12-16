import type { Meta, StoryObj } from "@storybook/react";

import Fieldset from "../../components/Fieldset";
import fixtures from "govuk-frontend/govuk/components/fieldset/fixtures.json";

const meta: Meta<typeof Fieldset> = {
  title: "Fieldset",
  component: Fieldset,
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

const primary: Story = { name: "default" };
const styledAsXlText: Story = { name: "styled as xl text" };
const styledAsLargeText: Story = { name: "styled as large text" };
const styledAsMediumText: Story = { name: "styled as medium text" };
const styledAsSmallText: Story = { name: "styled as small text" };
const asPageHeadingXl: Story = { name: "as page heading xl" };
const asPageHeadingL: Story = { name: "as page heading l" };
const asPageHeadingM: Story = { name: "as page heading m" };
const asPageHeadingS: Story = { name: "as page heading s" };
const asPageHeadingWithoutClass: Story = { name: "as page heading without class" };

const stories: Story[] = [];
stories.push(primary);
stories.push(styledAsXlText);
stories.push(styledAsLargeText);
stories.push(styledAsMediumText);
stories.push(styledAsSmallText);
stories.push(asPageHeadingXl);
stories.push(asPageHeadingL);
stories.push(asPageHeadingM);
stories.push(asPageHeadingS);
stories.push(asPageHeadingWithoutClass);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      legend: fixture.options.legend,
      html: fixture.options.html,
      describedBy: fixture.options.describedBy,
      classes: fixture.options.classes,
      role: fixture.options.role,
      attributes: fixture.options.attributes,
    };
  }
});

export {
  primary,
  styledAsXlText,
  styledAsLargeText,
  styledAsMediumText,
  styledAsSmallText,
  asPageHeadingXl,
  asPageHeadingL,
  asPageHeadingM,
  asPageHeadingS,
  asPageHeadingWithoutClass,
};
