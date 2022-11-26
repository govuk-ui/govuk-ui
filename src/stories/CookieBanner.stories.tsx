
  import type { Meta, StoryObj } from '@storybook/react';

  import CookieBanner from '../components/CookieBanner';
  import fixtures from 'govuk-frontend/govuk/components/cookie-banner/fixtures.json';
  
  const meta: Meta<typeof CookieBanner> = {
    title: 'CookieBanner',
    component: CookieBanner,
  };

  export default meta;
  type Story = StoryObj<typeof CookieBanner>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };