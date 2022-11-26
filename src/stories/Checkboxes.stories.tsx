
  import type { Meta, StoryObj } from '@storybook/react';

  import Checkboxes from '../components/Checkboxes';
  import fixtures from 'govuk-frontend/govuk/components/checkboxes/fixtures.json';
  
  const meta: Meta<typeof Checkboxes> = {
    title: 'Checkboxes',
    component: Checkboxes,
  };

  export default meta;
  type Story = StoryObj<typeof Checkboxes>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };