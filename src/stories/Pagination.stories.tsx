import type { Meta, StoryObj } from "@storybook/react";

import Pagination from "../components/Pagination";
import fixtures from "govuk-frontend/govuk/components/pagination/fixtures.json";

const meta: Meta<typeof Pagination> = {
  title: "Pagination",
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const primary: Story = { name: "default" };
const withCustomNavigationLandmark: Story = { name: "with custom navigation landmark" };
const withCustomLinkAndItemText: Story = { name: "with custom link and item text" };
const withCustomAccessibleLabelsOnItemLinks: Story = { name: "with custom accessible labels on item links" };
const withManyPages: Story = { name: "with many pages" };
const firstPage: Story = { name: "first page" };
const lastPage: Story = { name: "last page" };
const withPrevAndNextOnly: Story = { name: "with prev and next only" };
const withPrevAndNextOnlyAndLabels: Story = { name: "with prev and next only and labels" };
const withPrevAndNextOnlyAndVeryLongLabels: Story = { name: "with prev and next only and very long labels" };
const withPrevAndNextOnlyInADifferentLanguage: Story = { name: "with prev and next only in a different language" };
const withPreviousOnly: Story = { name: "with previous only" };
const withNextOnly: Story = { name: "with next only" };

const stories: Story[] = [];
stories.push(primary);
stories.push(withCustomNavigationLandmark);
stories.push(withCustomLinkAndItemText);
stories.push(withCustomAccessibleLabelsOnItemLinks);
stories.push(withManyPages);
stories.push(firstPage);
stories.push(lastPage);
stories.push(withPrevAndNextOnly);
stories.push(withPrevAndNextOnlyAndLabels);
stories.push(withPrevAndNextOnlyAndVeryLongLabels);
stories.push(withPrevAndNextOnlyInADifferentLanguage);
stories.push(withPreviousOnly);
stories.push(withNextOnly);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      previous: fixture.options.previous,
      next: fixture.options.next,
      items: fixture.options.items,
      landmarkLabel: fixture.options.landmarkLabel,
    };
  }
});

export {
  primary,
  withCustomNavigationLandmark,
  withCustomLinkAndItemText,
  withCustomAccessibleLabelsOnItemLinks,
  withManyPages,
  firstPage,
  lastPage,
  withPrevAndNextOnly,
  withPrevAndNextOnlyAndLabels,
  withPrevAndNextOnlyAndVeryLongLabels,
  withPrevAndNextOnlyInADifferentLanguage,
  withPreviousOnly,
  withNextOnly,
};
