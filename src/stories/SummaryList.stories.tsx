import type { Meta, StoryObj } from "@storybook/react";

import SummaryList from "../components/SummaryList";
import fixtures from "govuk-frontend/govuk/components/summary-list/fixtures.json";

const meta: Meta<typeof SummaryList> = {
  title: "SummaryList",
  component: SummaryList,
};

export default meta;
type Story = StoryObj<typeof SummaryList>;

const primary: Story = { name: "default" };
const withActions: Story = { name: "with actions" };
const translated: Story = { name: "translated" };
const withSomeActions: Story = { name: "with some actions" };
const withNoFirstAction: Story = { name: "with no first action" };
const noborder: Story = { name: "noborder" };
const noborderOnLastRow: Story = { name: "noborder on last row" };
const overriddenwidths: Story = { name: "overriddenwidths" };
const checkyouranswers: Story = { name: "checkyouranswers" };
const extreme: Story = { name: "extreme" };

const stories: Story[] = [];
stories.push(primary);
stories.push(withActions);
stories.push(translated);
stories.push(withSomeActions);
stories.push(withNoFirstAction);
stories.push(noborder);
stories.push(noborderOnLastRow);
stories.push(overriddenwidths);
stories.push(checkyouranswers);
stories.push(extreme);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      rows: fixture.options.rows,
      classes: fixture.options.classes,
      attributes: fixture.options.attributes,
    };
  }
});

export {
  primary,
  withActions,
  translated,
  withSomeActions,
  withNoFirstAction,
  noborder,
  noborderOnLastRow,
  overriddenwidths,
  checkyouranswers,
  extreme,
};
