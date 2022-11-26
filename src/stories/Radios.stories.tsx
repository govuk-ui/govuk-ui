
  import type { Meta, StoryObj } from '@storybook/react';

  import Radios from '../components/Radios';
  import fixtures from 'govuk-frontend/govuk/components/radios/fixtures.json';
  
  const meta: Meta<typeof Radios> = {
    title: 'Radios',
    component: Radios,
  };

  export default meta;
  type Story = StoryObj<typeof Radios>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };