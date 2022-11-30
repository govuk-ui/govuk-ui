import type { Meta, StoryObj } from "@storybook/react";

import Breadcrumbs from "../components/Breadcrumbs";
import fixtures from "govuk-frontend/govuk/components/breadcrumbs/fixtures.json";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Breadcrumbs",
  component: Breadcrumbs,
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const primary: Story = { name: "default" };
const withOneLevel: Story = { name: "with one level" };
const withMultipleLevels: Story = { name: "with multiple levels" };
const withoutTheHomeSection: Story = { name: "without the home section" };
const withLastBreadcrumbAsCurrentPage: Story = { name: "with last breadcrumb as current page" };
const withCollapseOnMobile: Story = { name: "with collapse on mobile" };

const stories: Story[] = [];
stories.push(primary);
stories.push(withOneLevel);
stories.push(withMultipleLevels);
stories.push(withoutTheHomeSection);
stories.push(withLastBreadcrumbAsCurrentPage);
stories.push(withCollapseOnMobile);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      items: fixture.options.items,
      collapseOnMobile: fixture.options.collapseOnMobile,
      classes: fixture.options.classes,
      attributes: fixture.options.attributes,
    };
  }
});

export {
  primary,
  withOneLevel,
  withMultipleLevels,
  withoutTheHomeSection,
  withLastBreadcrumbAsCurrentPage,
  withCollapseOnMobile,
};
