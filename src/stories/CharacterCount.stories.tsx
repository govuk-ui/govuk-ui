import type { Meta, StoryObj } from "@storybook/react";

import CharacterCount from "../components/CharacterCount";
import fixtures from "govuk-frontend/govuk/components/character-count/fixtures.json";

const meta: Meta<typeof CharacterCount> = {
  title: "CharacterCount",
  component: CharacterCount,
};

export default meta;
type Story = StoryObj<typeof CharacterCount>;

const primary: Story = { name: "default" };
const withCustomTextareaDescription: Story = { name: "with custom textarea description" };
const withHint: Story = { name: "with hint" };
const withDefaultValue: Story = { name: "with default value" };
const withDefaultValueExceedingLimit: Story = { name: "with default value exceeding limit" };
const withCustomRows: Story = { name: "with custom rows" };
const withLabelAsPageHeading: Story = { name: "with label as page heading" };
const withWordCount: Story = { name: "with word count" };
const withThreshold: Story = { name: "with threshold" };
const withTranslations: Story = { name: "with translations" };

const stories: Story[] = [];
stories.push(primary);
stories.push(withCustomTextareaDescription);
stories.push(withHint);
stories.push(withDefaultValue);
stories.push(withDefaultValueExceedingLimit);
stories.push(withCustomRows);
stories.push(withLabelAsPageHeading);
stories.push(withWordCount);
stories.push(withThreshold);
stories.push(withTranslations);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      name: fixture.options.name,
      id: fixture.options.id,
      maxlength: fixture.options.maxlength,
      label: fixture.options.label,
      textareaDescriptionText: fixture.options.textareaDescriptionText,
      hint: fixture.options.hint,
      value: fixture.options.value,
      errorMessage: fixture.options.errorMessage,
      rows: fixture.options.rows,
      maxwords: fixture.options.maxwords,
      threshold: fixture.options.threshold,
      charactersUnderLimitText: fixture.options.charactersUnderLimitText,
      charactersAtLimitText: fixture.options.charactersAtLimitText,
      charactersOverLimitText: fixture.options.charactersOverLimitText,
      wordsUnderLimitText: fixture.options.wordsUnderLimitText,
      wordsAtLimitText: fixture.options.wordsAtLimitText,
      wordsOverLimitText: fixture.options.wordsOverLimitText,
      classes: fixture.options.classes,
      attributes: fixture.options.attributes,
      formGroup: fixture.options.formGroup,
      countMessage: fixture.options.countMessage,
      spellcheck: fixture.options.spellcheck,
    };
  }
});

export {
  primary,
  withCustomTextareaDescription,
  withHint,
  withDefaultValue,
  withDefaultValueExceedingLimit,
  withCustomRows,
  withLabelAsPageHeading,
  withWordCount,
  withThreshold,
  withTranslations,
};
