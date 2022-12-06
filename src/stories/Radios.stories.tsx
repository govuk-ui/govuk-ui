import type { Meta, StoryObj } from "@storybook/react";

import Radios from "../components/Radios";
import fixtures from "govuk-frontend/govuk/components/radios/fixtures.json";

const meta: Meta<typeof Radios> = {
  title: "Radios",
  component: Radios,
};

export default meta;
type Story = StoryObj<typeof Radios>;

const primary: Story = { name: "default" };
const inline: Story = { name: "inline" };
const withDisabled: Story = { name: "with disabled" };
const withLegendAsPageHeading: Story = { name: "with legend as page heading" };
const withAMediumLegend: Story = { name: "with a medium legend" };
const withADivider: Story = { name: "with a divider" };
const withHintsOnItems: Story = { name: "with hints on items" };
const withoutFieldset: Story = { name: "without fieldset" };
const withFieldsetAndErrorMessage: Story = { name: "with fieldset and error message" };
const withVeryLongOptionText: Story = { name: "with very long option text" };
const withConditionalItems: Story = { name: "with conditional items" };
const withConditionalItemsWithSpecialCharacters: Story = { name: "with conditional items with special characters" };
const withConditionalItemChecked: Story = { name: "with conditional item checked" };
const prechecked: Story = { name: "prechecked" };
const precheckedUsingValue: Story = { name: "prechecked using value" };
const withConditionalItemsAndPrecheckedValue: Story = { name: "with conditional items and prechecked value" };
const withOptionalFormgroupClassesShowingGroupError: Story = {
  name: "with optional formgroup classes showing group error",
};
const small: Story = { name: "small" };
const smallWithLongText: Story = { name: "small with long text" };
const smallWithError: Story = { name: "small with error" };
const smallWithHint: Story = { name: "small with hint" };
const smallWithDisabled: Story = { name: "small with disabled" };
const smallWithConditionalReveal: Story = { name: "small with conditional reveal" };
const smallInline: Story = { name: "small inline" };
const smallInlineExtreme: Story = { name: "small inline extreme" };
const smallWithADivider: Story = { name: "small with a divider" };
const withIdPrefix: Story = { name: "with idPrefix" };

const stories: Story[] = [];
stories.push(primary);
stories.push(inline);
stories.push(withDisabled);
stories.push(withLegendAsPageHeading);
stories.push(withAMediumLegend);
stories.push(withADivider);
stories.push(withHintsOnItems);
stories.push(withoutFieldset);
stories.push(withFieldsetAndErrorMessage);
stories.push(withVeryLongOptionText);
stories.push(withConditionalItems);
stories.push(withConditionalItemsWithSpecialCharacters);
stories.push(withConditionalItemChecked);
stories.push(prechecked);
stories.push(precheckedUsingValue);
stories.push(withConditionalItemsAndPrecheckedValue);
stories.push(withOptionalFormgroupClassesShowingGroupError);
stories.push(small);
stories.push(smallWithLongText);
stories.push(smallWithError);
stories.push(smallWithHint);
stories.push(smallWithDisabled);
stories.push(smallWithConditionalReveal);
stories.push(smallInline);
stories.push(smallInlineExtreme);
stories.push(smallWithADivider);
stories.push(withIdPrefix);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      name: fixture.options.name,
      items: fixture.options.items,
      id: fixture.options.idPrefix,
      classes: fixture.options.classes,
      attributes: fixture.options.attributes,
    };
  }
});

export {
  primary,
  inline,
  withDisabled,
  withLegendAsPageHeading,
  withAMediumLegend,
  withADivider,
  withHintsOnItems,
  withoutFieldset,
  withFieldsetAndErrorMessage,
  withVeryLongOptionText,
  withConditionalItems,
  withConditionalItemsWithSpecialCharacters,
  withConditionalItemChecked,
  prechecked,
  precheckedUsingValue,
  withConditionalItemsAndPrecheckedValue,
  withOptionalFormgroupClassesShowingGroupError,
  small,
  smallWithLongText,
  smallWithError,
  smallWithHint,
  smallWithDisabled,
  smallWithConditionalReveal,
  smallInline,
  smallInlineExtreme,
  smallWithADivider,
  withIdPrefix,
};
