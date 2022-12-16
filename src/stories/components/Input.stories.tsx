import type { Meta, StoryObj } from "@storybook/react";

import Input from "../../components/Input";
import fixtures from "govuk-frontend/govuk/components/input/fixtures.json";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

const primary: Story = { name: "default" };
const withHintText: Story = { name: "with hint text" };
const withErrorMessage: Story = { name: "with error message" };
const withWidthClass: Story = { name: "with width2 class" };
const withLabelAsPageHeading: Story = { name: "with label as page heading" };
const withOptionalFormgroupClasses: Story = { name: "with optional formgroup classes" };
const withAutocompleteAttribute: Story = { name: "with autocomplete attribute" };
const withPatternAttribute: Story = { name: "with pattern attribute" };
const withSpellcheckEnabled: Story = { name: "with spellcheck enabled" };
const withSpellcheckDisabled: Story = { name: "with spellcheck disabled" };
const withPrefix: Story = { name: "with prefix" };
const withSuffix: Story = { name: "with suffix" };
const withPrefixAndSuffix: Story = { name: "with prefix and suffix" };
const withPrefixAndLongSuffix: Story = { name: "with prefix and long suffix" };
const withPrefixAndSuffixAndError: Story = { name: "with prefix and suffix and error" };
const withPrefixAndSuffixAndWidthModifier: Story = { name: "with prefix and suffix and width modifier" };

const stories: Story[] = [];
stories.push(primary);
stories.push(withHintText);
stories.push(withErrorMessage);
stories.push(withWidthClass);
stories.push(withLabelAsPageHeading);
stories.push(withOptionalFormgroupClasses);
stories.push(withAutocompleteAttribute);
stories.push(withPatternAttribute);
stories.push(withSpellcheckEnabled);
stories.push(withSpellcheckDisabled);
stories.push(withPrefix);
stories.push(withSuffix);
stories.push(withPrefixAndSuffix);
stories.push(withPrefixAndLongSuffix);
stories.push(withPrefixAndSuffixAndError);
stories.push(withPrefixAndSuffixAndWidthModifier);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      label: fixture.options.label.text,
      id: fixture.options.id,
      name: fixture.options.name,
      hint: fixture.options.hint,
      errorMessage: fixture.options.errorMessage,
      classes: fixture.options.classes,
      formGroup: fixture.options.formGroup,
      autocomplete: fixture.options.autocomplete,
      type: fixture.options.type,
      pattern: fixture.options.pattern,
      spellcheck: fixture.options.spellcheck,
      prefix: fixture.options.prefix,
      suffix: fixture.options.suffix,
      value: fixture.options.value,
      describedBy: fixture.options.describedBy,
      attributes: fixture.options.attributes,
      inputmode: fixture.options.inputmode,
    };
  }
});

export {
  primary,
  withHintText,
  withErrorMessage,
  withWidthClass,
  withLabelAsPageHeading,
  withOptionalFormgroupClasses,
  withAutocompleteAttribute,
  withPatternAttribute,
  withSpellcheckEnabled,
  withSpellcheckDisabled,
  withPrefix,
  withSuffix,
  withPrefixAndSuffix,
  withPrefixAndLongSuffix,
  withPrefixAndSuffixAndError,
  withPrefixAndSuffixAndWidthModifier,
};
