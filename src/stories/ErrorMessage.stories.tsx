
  import type { Meta, StoryObj } from '@storybook/react';

  import ErrorMessage from '../components/ErrorMessage';
  import fixtures from 'govuk-frontend/govuk/components/error-message/fixtures.json';
  
  const meta: Meta<typeof ErrorMessage> = {
    title: 'ErrorMessage',
    component: ErrorMessage,
  };

  export default meta;
  type Story = StoryObj<typeof ErrorMessage>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };