
  import type { Meta, StoryObj } from '@storybook/react';

  import Tabs from '../components/Tabs';
  import fixtures from 'govuk-frontend/govuk/components/tabs/fixtures.json';
  
  const meta: Meta<typeof Tabs> = {
    title: 'Tabs',
    component: Tabs,
  };

  export default meta;
  type Story = StoryObj<typeof Tabs>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };