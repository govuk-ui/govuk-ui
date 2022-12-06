import type { Meta, StoryObj } from "@storybook/react";

import Label from "../components/Label";
import fixtures from "govuk-frontend/govuk/components/label/fixtures.json";

const meta: Meta<typeof Label> = {
  title: "Label",
  component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;

const primary: Story = { name: "default" };
const withBoldText: Story = { name: "with bold text" };
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
stories.push(withBoldText);
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
      children: fixture.options.text,
      classes: fixture.options.classes,
      htmlFor: fixture.options.for,
      attributes: fixture.options.attributes,
    };
  }
});

export {
  primary,
  withBoldText,
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
