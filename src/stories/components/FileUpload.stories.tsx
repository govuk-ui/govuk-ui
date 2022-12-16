import type { Meta, StoryObj } from "@storybook/react";

import FileUpload from "../../components/FileUpload";
import fixtures from "govuk-frontend/govuk/components/file-upload/fixtures.json";

const meta: Meta<typeof FileUpload> = {
  title: "FileUpload",
  component: FileUpload,
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

const primary: Story = { name: "default" };
const withHintText: Story = { name: "with hint text" };
const withErrorMessageAndHint: Story = { name: "with error message and hint" };
const withValue: Story = { name: "with value" };
const withLabelAsPageHeading: Story = { name: "with label as page heading" };
const withOptionalFormgroupClasses: Story = { name: "with optional formgroup classes" };

const stories: Story[] = [];
stories.push(primary);
stories.push(withHintText);
stories.push(withErrorMessageAndHint);
stories.push(withValue);
stories.push(withLabelAsPageHeading);
stories.push(withOptionalFormgroupClasses);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      id: fixture.options.id,
      name: fixture.options.name,
      label: fixture.options.label,
      hint: fixture.options.hint,
      errorMessage: fixture.options.errorMessage,
      value: fixture.options.value,
      formGroup: fixture.options.formGroup,
      attributes: fixture.options.attributes,
      classes: fixture.options.classes,
      describedBy: fixture.options.describedBy,
    };
  }
});

export {
  primary,
  withHintText,
  withErrorMessageAndHint,
  withValue,
  withLabelAsPageHeading,
  withOptionalFormgroupClasses,
};
