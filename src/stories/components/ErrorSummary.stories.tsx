import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import ErrorSummary from "../../components/ErrorSummary";
import ErrorSummaryMessage from "../../components/ErrorSummaryMessage";
import fixtures from "govuk-frontend/govuk/components/error-summary/fixtures.json";

const meta: Meta<typeof ErrorSummary> = {
  title: "ErrorSummary",
  component: ErrorSummary,
};

export default meta;
type Story = StoryObj<typeof ErrorSummary>;

const primary: Story = { name: "default" };
const withoutLinks: Story = { name: "without links" };
const mixedWithAndWithoutLinks: Story = { name: "mixed with and without links" };
const withEverything: Story = { name: "with everything" };

const stories: Story[] = [];
stories.push(primary);
stories.push(withoutLinks);
stories.push(mixedWithAndWithoutLinks);
stories.push(withEverything);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      titleText: fixture.options.titleText,
      children: fixture.options.errorList?.map((e:any) => {
        return (
          <ErrorSummaryMessage id={e.href}>
            {e.text}
          </ErrorSummaryMessage>
        );
      }),
      classes: fixture.options.classes,
      attributes: fixture.options.attributes,
      disableAutoFocus: fixture.options.disableAutoFocus,
    };
  }
});

export { primary, withoutLinks, mixedWithAndWithoutLinks, withEverything };
