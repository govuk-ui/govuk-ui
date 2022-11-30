import type { Meta, StoryObj } from "@storybook/react";

import DateInput from "../components/DateInput";
import fixtures from "govuk-frontend/govuk/components/date-input/fixtures.json";

const meta: Meta<typeof DateInput> = {
  title: "DateInput",
  component: DateInput,
};

export default meta;
type Story = StoryObj<typeof DateInput>;

const primary: Story = { name: "default" };
const completeQuestion: Story = { name: "complete question" };
const withErrorsOnly: Story = { name: "with errors only" };
const withErrorsAndHint: Story = { name: "with errors and hint" };
const withErrorOnDayInput: Story = { name: "with error on day input" };
const withErrorOnMonthInput: Story = { name: "with error on month input" };
const withErrorOnYearInput: Story = { name: "with error on year input" };
const withDefaultItems: Story = { name: "with default items" };
const withOptionalFormgroupClasses: Story = { name: "with optional formgroup classes" };
const withAutocompleteValues: Story = { name: "with autocomplete values" };
const withInputAttributes: Story = { name: "with input attributes" };

const stories: Story[] = [];
stories.push(primary);
stories.push(completeQuestion);
stories.push(withErrorsOnly);
stories.push(withErrorsAndHint);
stories.push(withErrorOnDayInput);
stories.push(withErrorOnMonthInput);
stories.push(withErrorOnYearInput);
stories.push(withDefaultItems);
stories.push(withOptionalFormgroupClasses);
stories.push(withAutocompleteValues);
stories.push(withInputAttributes);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      id: fixture.options.id,
      namePrefix: fixture.options.namePrefix,
      fieldset: fixture.options.fieldset,
      hint: fixture.options.hint,
      items: fixture.options.items,
      errorMessage: fixture.options.errorMessage,
      formGroup: fixture.options.formGroup,
      classes: fixture.options.classes,
      attributes: fixture.options.attributes,
    };
  }
});

export {
  primary,
  completeQuestion,
  withErrorsOnly,
  withErrorsAndHint,
  withErrorOnDayInput,
  withErrorOnMonthInput,
  withErrorOnYearInput,
  withDefaultItems,
  withOptionalFormgroupClasses,
  withAutocompleteValues,
  withInputAttributes,
};
