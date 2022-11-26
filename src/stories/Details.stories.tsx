
  import type { Meta, StoryObj } from '@storybook/react';

  import Details from '../components/Details';
  import fixtures from 'govuk-frontend/govuk/components/details/fixtures.json';
  
  const meta: Meta<typeof Details> = {
    title: 'Details',
    component: Details,
  };

  export default meta;
  type Story = StoryObj<typeof Details>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };