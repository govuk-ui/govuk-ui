
  import type { Meta, StoryObj } from '@storybook/react';

  import BackLink from '../components/BackLink';
  import fixtures from 'govuk-frontend/govuk/components/back-link/fixtures.json';
  
  const meta: Meta<typeof BackLink> = {
    title: 'BackLink',
    component: BackLink,
  };

  export default meta;
  type Story = StoryObj<typeof BackLink>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };