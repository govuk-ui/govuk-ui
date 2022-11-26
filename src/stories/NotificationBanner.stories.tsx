
  import type { Meta, StoryObj } from '@storybook/react';

  import NotificationBanner from '../components/NotificationBanner';
  import fixtures from 'govuk-frontend/govuk/components/notification-banner/fixtures.json';
  
  const meta: Meta<typeof NotificationBanner> = {
    title: 'NotificationBanner',
    component: NotificationBanner,
  };

  export default meta;
  type Story = StoryObj<typeof NotificationBanner>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };