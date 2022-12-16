import type { Meta, StoryObj } from "@storybook/react";

import Header from "../../components/Header";
import fixtures from "govuk-frontend/govuk/components/header/fixtures.json";

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

const primary: Story = { name: "default" };
const withServiceName: Story = { name: "with service name" };
const withServiceNameButNoServiceUrl: Story = { name: "with service name but no service url" };
const withNavigation: Story = { name: "with navigation" };
const withCustomNavigationLabel: Story = { name: "with custom navigation label" };
const withCustomMenuButtonText: Story = { name: "with custom menu button text" };
const withCustomMenuButtonLabel: Story = { name: "with custom menu button label" };
const withServiceNameAndNavigation: Story = { name: "with service name and navigation" };
const withLargeNavigation: Story = { name: "with large navigation" };
const withProductName: Story = { name: "with product name" };
const fullWidth: Story = { name: "full width" };
const fullWidthWithNavigation: Story = { name: "full width with navigation" };
const navigationItemWithHtml: Story = { name: "navigation item with html" };
const navigationItemWithTextWithoutLink: Story = { name: "navigation item with text without link" };

const stories: Story[] = [];
stories.push(primary);
stories.push(withServiceName);
stories.push(withServiceNameButNoServiceUrl);
stories.push(withNavigation);
stories.push(withCustomNavigationLabel);
stories.push(withCustomMenuButtonText);
stories.push(withCustomMenuButtonLabel);
stories.push(withServiceNameAndNavigation);
stories.push(withLargeNavigation);
stories.push(withProductName);
stories.push(fullWidth);
stories.push(fullWidthWithNavigation);
stories.push(navigationItemWithHtml);
stories.push(navigationItemWithTextWithoutLink);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      serviceName: fixture.options.serviceName,
      serviceUrl: fixture.options.serviceUrl,
      navigation: fixture.options.navigation,
      navigationLabel: fixture.options.navigationLabel,
      menuButtonText: fixture.options.menuButtonText,
      menuButtonLabel: fixture.options.menuButtonLabel,
      navigationClasses: fixture.options.navigationClasses,
      productName: fixture.options.productName,
      containerClasses: fixture.options.containerClasses,
      attributes: fixture.options.attributes,
      classes: fixture.options.classes,
      homepageUrl: fixture.options.homepageUrl,
    };
  }
});

export {
  primary,
  withServiceName,
  withServiceNameButNoServiceUrl,
  withNavigation,
  withCustomNavigationLabel,
  withCustomMenuButtonText,
  withCustomMenuButtonLabel,
  withServiceNameAndNavigation,
  withLargeNavigation,
  withProductName,
  fullWidth,
  fullWidthWithNavigation,
  navigationItemWithHtml,
  navigationItemWithTextWithoutLink,
};
