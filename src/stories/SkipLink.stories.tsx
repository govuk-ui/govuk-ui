
  import type { Meta, StoryObj } from '@storybook/react';

  import SkipLink from '../components/SkipLink';
  import fixtures from 'govuk-frontend/govuk/components/skip-link/fixtures.json';
  
  const meta: Meta<typeof SkipLink> = {
    title: 'SkipLink',
    component: SkipLink,
  };

  export default meta;
  type Story = StoryObj<typeof SkipLink>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };