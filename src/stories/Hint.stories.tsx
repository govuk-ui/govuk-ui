
  import type { Meta, StoryObj } from '@storybook/react';

  import Hint from '../components/Hint';
  import fixtures from 'govuk-frontend/govuk/components/hint/fixtures.json';
  
  const meta: Meta<typeof Hint> = {
    title: 'Hint',
    component: Hint,
  };

  export default meta;
  type Story = StoryObj<typeof Hint>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };