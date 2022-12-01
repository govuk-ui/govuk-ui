import type { Meta, StoryObj } from "@storybook/react";

import NotificationBanner from "../components/NotificationBanner";
import fixtures from "govuk-frontend/govuk/components/notification-banner/fixtures.json";

const meta: Meta<typeof NotificationBanner> = {
  title: "NotificationBanner",
  component: NotificationBanner,
};

export default meta;
type Story = StoryObj<typeof NotificationBanner>;

const primary: Story = { name: "default" };
const paragraphAsHtmlHeading: Story = { name: "paragraph as html heading" };
const withTextAsHtml: Story = { name: "with text as html" };
const withTypeAsSuccess: Story = { name: "with type as success" };
const successWithCustomHtml: Story = { name: "success with custom html" };
const withAList: Story = { name: "with a list" };
const withLongHeading: Story = { name: "with long heading" };
const withLotsOfContent: Story = { name: "with lots of content" };
const autofocusDisabledWithTypeAsSuccess: Story = { name: "autofocus disabled with type as success" };
const autofocusExplicitlyEnabledWithTypeAsSuccess: Story = {
  name: "autofocus explicitly enabled with type as success",
};
const rolealertOverriddenToRoleregionWithTypeAsSuccess: Story = {
  name: "rolealert overridden to roleregion with type as success",
};
const customTabindex: Story = { name: "custom tabindex" };

const stories: Story[] = [];
stories.push(primary);
stories.push(paragraphAsHtmlHeading);
stories.push(withTextAsHtml);
stories.push(withTypeAsSuccess);
stories.push(successWithCustomHtml);
stories.push(withAList);
stories.push(withLongHeading);
stories.push(withLotsOfContent);
stories.push(autofocusDisabledWithTypeAsSuccess);
stories.push(autofocusExplicitlyEnabledWithTypeAsSuccess);
stories.push(rolealertOverriddenToRoleregionWithTypeAsSuccess);
stories.push(customTabindex);

fixtures.fixtures.forEach((fixture) => {
  let story: Story = stories.find((s) => s.name === fixture.name.replace(/[^a-z0-9s]/gi, "")) || {};
  if (story.name === fixture.name) {
    story.args = {
      text: fixture.options.text,
      html: fixture.options.html,
      type: fixture.options.type,
      disableAutoFocus: fixture.options.disableAutoFocus,
      role: fixture.options.role,
      attributes: fixture.options.attributes,
      titleText: fixture.options.titleText,
      titleHtml: fixture.options.titleHtml,
      titleHeadingLevel: fixture.options.titleHeadingLevel,
      titleId: fixture.options.titleId,
      classes: fixture.options.classes,
    };
  }
});

export {
  primary,
  paragraphAsHtmlHeading,
  withTextAsHtml,
  withTypeAsSuccess,
  successWithCustomHtml,
  withAList,
  withLongHeading,
  withLotsOfContent,
  autofocusDisabledWithTypeAsSuccess,
  autofocusExplicitlyEnabledWithTypeAsSuccess,
  rolealertOverriddenToRoleregionWithTypeAsSuccess,
  customTabindex,
};
