
  import type { Meta, StoryObj } from '@storybook/react';

  import ErrorSummary from '../components/ErrorSummary';
  import fixtures from 'govuk-frontend/govuk/components/error-summary/fixtures.json';
  
  const meta: Meta<typeof ErrorSummary> = {
    title: 'ErrorSummary',
    component: ErrorSummary,
  };

  export default meta;
  type Story = StoryObj<typeof ErrorSummary>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };