import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import NotificationBanner from "../../../components/NotificationBanner";
import { Typography } from "../../..";

const meta: Meta<typeof NotificationBanner> = {
  title: "Notification banner",
  component: NotificationBanner,
};

export default meta;
type Story = StoryObj<typeof NotificationBanner>;

const primary: Story = {
  name: 'Notification banner',
  render: (args) => (
    <NotificationBanner
      title="Important"
    >
      <Typography variant="m">
        you have 7 days left to send your application. <a className='govuk-link' href='#'>View application</a>.
      </Typography>
    </NotificationBanner>
  )
}

const coronavirus: Story = {
  name: 'Notification banner',
  render: (args) => (
    <NotificationBanner
      title="Important"
    >
      <Typography variant="m">
        There may be a delay in processing your application because of the coronavirus outbreak.
      </Typography>
    </NotificationBanner>
  )
}

const green: Story = {
  name: 'Notification banner',
  render: (args) => (
    <NotificationBanner
      title="Success"
      type="success"
      role="alert"
    >
      <Typography variant="m">
        Training outcome recorded and trainee withdrawn
      </Typography>
      <Typography>
        Contact <a className="govuk-notification-banner__link" href="#">example@department.gov.uk</a> if you think there’s a problem.
      </Typography>
    </NotificationBanner>
  )
}

export {
  primary,
  coronavirus,
  green,
};
