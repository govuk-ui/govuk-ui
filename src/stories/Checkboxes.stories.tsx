import type { Meta, StoryObj } from "@storybook/react";

import Checkboxes from "../components/Checkboxes";
import fixtures from "govuk-frontend/govuk/components/checkboxes/fixtures.json";

const meta: Meta<typeof Checkboxes> = {
  title: "Checkboxes",
  component: Checkboxes,
};

export default meta;
type Story = StoryObj<typeof Checkboxes>;

const primary: Story = { name: "default" };
const withPrecheckedValues: Story = { name: "with prechecked values" };
const withDividerAndNone: Story = { name: "with divider and None" };
const withDividerNoneAndConditionalItems: Story = { name: "with divider None and conditional items" };
const withIdAndName: Story = { name: "with id and name" };
const withHintsOnItems: Story = { name: "with hints on items" };
const withDisabledItem: Story = { name: "with disabled item" };
const withLegendAsAPageHeading: Story = { name: "with legend as a page heading" };
const withAMediumLegend: Story = { name: "with a medium legend" };
const withoutFieldset: Story = { name: "without fieldset" };
const withSingleOptionSetariadescribedbyOnInput: Story = { name: "with single option set ariadescribedby on input" };
const withSingleOptionandHintSetariadescribedbyOnInput: Story = {
  name: "with single option and hint set ariadescribedby on input",
};
const withFieldsetAndErrorMessage: Story = { name: "with fieldset and error message" };
const withErrorMessage: Story = { name: "with error message" };
const withErrorMessageAndHintsOnItems: Story = { name: "with error message and hints on items" };
const withVeryLongOptionText: Story = { name: "with very long option text" };
const withConditionalItems: Story = { name: "with conditional items" };
const withConditionalItemsWithSpecialCharacters: Story = { name: "with conditional items with special characters" };
const withConditionalItemChecked: Story = { name: "with conditional item checked" };
const withOptionalFormgroupClassesShowingGroupError: Story = {
  name: "with optional formgroup classes showing group error",
};
const small: Story = { name: "small" };
const smallWithLongText: Story = { name: "small with long text" };
const smallWithError: Story = { name: "small with error" };
const smallWithHint: Story = { name: "small with hint" };
const smallWithDisabled: Story = { name: "small with disabled" };
const smallWithConditionalReveal: Story = { name: "small with conditional reveal" };

const stories: Story[] = [];
stories.push(primary);
stories.push(withPrecheckedValues);
stories.push(withDividerAndNone);
stories.push(withDividerNoneAndConditionalItems);
stories.push(withIdAndName);
stories.push(withHintsOnItems);
stories.push(withDisabledItem);
stories.push(withLegendAsAPageHeading);
stories.push(withAMediumLegend);
stories.push(withoutFieldset);
stories.push(withSingleOptionSetariadescribedbyOnInput);
stories.push(withSingleOptionandHintSetariadescribedbyOnInput);
stories.push(withFieldsetAndErrorMessage);
stories.push(withErrorMessage);
stories.push(withErrorMessageAndHintsOnItems);
stories.push(withVeryLongOptionText);
stories.push(withConditionalItems);
stories.push(withConditionalItemsWithSpecialCharacters);
stories.push(withConditionalItemChecked);
stories.push(withOptionalFormgroupClassesShowingGroupError);
stories.push(small);
stories.push(smallWithLongText);
stories.push(smallWithError);
stories.push(smallWithHint);
stories.push(smallWithDisabled);
stories.push(smallWithConditionalReveal);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      name: fixture.options.name,
      items: fixture.options.items,
      values: fixture.options.values,
      fieldset: fixture.options.fieldset,
      hint: fixture.options.hint,
      errorMessage: fixture.options.errorMessage,
      idPrefix: fixture.options.idPrefix,
      formGroup: fixture.options.formGroup,
      classes: fixture.options.classes,
      attributes: fixture.options.attributes,
      describedBy: fixture.options.describedBy,
    };
  }
});

export {
  primary,
  withPrecheckedValues,
  withDividerAndNone,
  withDividerNoneAndConditionalItems,
  withIdAndName,
  withHintsOnItems,
  withDisabledItem,
  withLegendAsAPageHeading,
  withAMediumLegend,
  withoutFieldset,
  withSingleOptionSetariadescribedbyOnInput,
  withSingleOptionandHintSetariadescribedbyOnInput,
  withFieldsetAndErrorMessage,
  withErrorMessage,
  withErrorMessageAndHintsOnItems,
  withVeryLongOptionText,
  withConditionalItems,
  withConditionalItemsWithSpecialCharacters,
  withConditionalItemChecked,
  withOptionalFormgroupClassesShowingGroupError,
  small,
  smallWithLongText,
  smallWithError,
  smallWithHint,
  smallWithDisabled,
  smallWithConditionalReveal,
};
